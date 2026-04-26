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
    
    print(f" Order {order_id} placed and logged.")

if __name__ == "__main__":
    print("--- E-Commerce Order System (App Interface) ---")
    
    # Simulate placing a few orders
    place_order(product_id='PROD-A', quantity=2, user_id='USER-101')
    time.sleep(0.1)
    place_order(product_id='PROD-B', quantity=1, user_id='USER-102')
    time.sleep(0.1)
    place_order(product_id='PROD-A', quantity=5, user_id='USER-101')


