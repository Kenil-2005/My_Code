import csv
from datetime import datetime
from db_connection import DatabaseConnection


CSV_FILE = "order_status_updates.csv"


def parse_datetime(value):
    return datetime.strptime(value, "%Y-%m-%d %H:%M:%S")


# STEP 1 + 2: Read CSV & keep latest status per order
def get_latest_updates(csv_file):
    latest = {}

    with open(csv_file, newline="") as file:
        reader = csv.DictReader(file)

        for row in reader:
            order_id = int(row["orderId"])
            row["changedAt"] = parse_datetime(row["changedAt"])

            if (
                order_id not in latest
                or row["changedAt"] > latest[order_id]["changedAt"]
            ):
                latest[order_id] = row

    return latest


# STEP 3 + 4: Conditional update + audit + rollback
def process_orders(latest_updates):
    conn = DatabaseConnection.get_connection()
    cursor = conn.cursor()

    for order_id, data in latest_updates.items():
        try:
            conn.autocommit = False  # start row-level transaction

            new_status = data["newStatus"]
            changed_by = data["changedBy"]
            changed_at = data["changedAt"]

            # Fetch current order status
            cursor.execute(
                "SELECT orderStatus FROM Orders WHERE orderId = ?",
                order_id
            )
            row = cursor.fetchone()

            if not row:
                print(f" Order {order_id} not found. Rolled back.")
                conn.rollback()
                continue

            current_status = row[0]

            # Skip if no status change
            if current_status == new_status:
                print(f" Order {order_id} already '{new_status}'. Skipped.")
                conn.rollback()
                continue

            # Insert into audit log
            cursor.execute("""
                INSERT INTO OrderAuditLog
                (orderId, oldStatus, newStatus, changedAt, changedBy)
                VALUES (?, ?, ?, ?, ?)
            """, (
                order_id,
                current_status,
                new_status,
                changed_at,
                changed_by
            ))

            # Update Orders table
            cursor.execute("""
                UPDATE Orders
                SET orderStatus = ?
                WHERE orderId = ?
            """, (
                new_status,
                order_id
            ))

            conn.commit()
            print(f"Order {order_id}: {current_status} → {new_status}")

        except Exception as e:
            conn.rollback()
            print(f" Order {order_id} failed. Rolled back.")
            print(f"   Reason: {e}")

        finally:
            conn.autocommit = True


if __name__ == "__main__":
    latest_updates = get_latest_updates(CSV_FILE)
    process_orders(latest_updates)
