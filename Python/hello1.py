import json
import time
import uuid

ORDER_LOG_FILE = 'order_log.txt'

def place_order(product_id, quantity, user_id):
    """
    Records a new order event to the log file.
    """
    order_id = str(uuid.uuid4())
    timestamp = time.time()
    event_data = {
        'event_type': 'ORDER_PLACED',
        'order_id': order_id,
        'product_id': product_id,
        'quantity': quantity,
        'user_id': user_id,
        'timestamp': timestamp,
        'status': 'PENDING'
    }

    # Append the event as a new line in the log file
    with open(ORDER_LOG_FILE, 'a') as f:
        f.write(json.dumps(event_data) + '\n')
    
    print(f"✅ Order {order_id} placed and logged.")

if __name__ == "__main__":
    print("--- E-Commerce Order System (App Interface) ---")
    
    # Simulate placing a few orders
    place_order(product_id='PROD-A', quantity=2, user_id='USER-101')
    time.sleep(0.1)
    place_order(product_id='PROD-B', quantity=1, user_id='USER-102')
    time.sleep(0.1)
    place_order(product_id='PROD-A', quantity=5, user_id='USER-101')







import json
import time
import os

ORDER_LOG_FILE = 'order_log.txt'
PROCESSED_ORDERS = set() # Keep track of orders we've already handled in this session

def process_log_entry(entry):
    """
    Processes a single line (JSON object) from the log file.
    """
    try:
        data = json.loads(entry)
        order_id = data.get('order_id')
        event_type = data.get('event_type')
        status = data.get('status')

        # Only process 'ORDER_PLACED' events that are 'PENDING' and new to our session
        if event_type == 'ORDER_PLACED' and status == 'PENDING' and order_id not in PROCESSED_ORDERS:
            print(f"\n⚙️ Processing new order: {order_id} (Product: {data['product_id']}, Qty: {data['quantity']})")
            
            # Simulate processing logic (e.g., check inventory, process payment)
            time.sleep(0.5) 
            
            # Mark as processed in local memory to prevent re-processing during this run
            PROCESSED_ORDERS.add(order_id)
            
            # Log the status update back into the main log file
            log_status_update(order_id, 'SHIPPED')
            print(f"📦 Order {order_id} marked as SHIPPED.")

    except json.JSONDecodeError:
        print(f"⚠️ Error decoding JSON line: {entry.strip()}")

def log_status_update(order_id, new_status):
    """
    Appends a new status update event to the log.
    """
    event_data = {
        'event_type': 'STATUS_UPDATE',
        'order_id': order_id,
        'status': new_status,
        'timestamp': time.time()
    }
    with open(ORDER_LOG_FILE, 'a') as f:
        f.write(json.dumps(event_data) + '\n')

def follow(thefile):
    """
    Generator function that mimics 'tail -f'.
    """
    thefile.seek(0, os.SEEK_END)
    while True:
        line = thefile.readline()
        if not line:
            time.sleep(0.1)
            continue
        yield line

if __name__ == "__main__":
    print("--- E-Commerce Order System (Log Processor) ---")
    print(f"Monitoring '{ORDER_LOG_FILE}' for new entries...")
    
    # Ensure the log file exists
    if not os.path.exists(ORDER_LOG_FILE):
        open(ORDER_LOG_FILE, 'a').close()

    with open(ORDER_LOG_FILE, "r") as f:
        # Start following the file from its current position
        for line in follow(f):
            process_log_entry(line)














python app.py
