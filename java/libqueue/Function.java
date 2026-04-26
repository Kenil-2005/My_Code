package libqueue;

public class Function {
    // For the formetation of queue
    int s[] = new int[5];
    int front = 0;
    int rear = -1;

    // Condition for checking queue is full
    public boolean isfull() {
        if (rear == 4) {
            return true;
        } else {
            return false;
        }
    }

    // Condition for checking queue is empty
    public boolean isempty() {
        if (front == 0 && rear == -1) {
            return true;
        } else {
            return false;
        }
    }

    // Method to insert value in queue
    public void insert(int a) {
        rear++;
        s[rear] = a;
        System.out.println("The value is inserted.\n");
    }

    // Method to delete value from queue
    public void delete() {
        int c = front;
        System.out.println("The deleted value is : " + s[c] + "\n");
        if (front == rear) {
            front = 0;
            rear = -1;
        } else {
            front++;
        }
    }

    // Method to display the queue
    public void Display() {
        int f = front;
        int r = rear;
        System.out.println("The element are : ");
        for (int i = f; i <= r; i++) {
            System.out.println(s[i]);
        }
    }
}
