import java.util.Scanner;

class Function {
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
        int i, j;
        if (isfull()) {
            System.out.println("Can't insert the queue is full\n");
        } else {
            if (isempty()) {
                rear++;
                s[rear] = a;
            } else {
                for (i = front; s[i] >= a && i <= rear; i++);
                for (j = rear; j >= i; j--) {
                    s[j + 1] = s[j];
                }
                s[i] = a;
                rear++;
            }
            System.out.println("The value is inserted.\n");
        }
    }

    // Method to delete value from queue
    public void delete() {
        if (!isempty()) {
            int c = front;
            System.out.println("The deleted value is : " + s[c] + "\n");
            if (front == rear) {
                front = 0;
                rear = -1;
            } else {
                front++;
            }
        } else {
            System.out.println("Can't delete the queue is empty\n");
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

class Queue {
    public static void main(String[] args) {
        // Calling class Queue
        Function Q = new Function();
        Scanner sc = new Scanner(System.in);
        int c = 0;
        System.out.println("1) Insert\n2) Delete\n3) Display\n4) Exit\n");
        do {
            System.out.print("Enter your choice : ");
            c = sc.nextInt();
            switch (c) {
                case 1:
                    System.out.print("Enter value : ");
                    int a = sc.nextInt();
                    Q.insert(a);
                    break;
                case 2:
                    if (!Q.isempty()) {
                        Q.delete();
                    } else {
                        System.out.println("Can't delete the queue is empty\n");
                    }
                    break;
                case 3:
                    if (!Q.isempty()) {
                        Q.Display();
                    } else {
                        System.out.println("Can't display the queue is empty\n");
                    }
                    break;
                case 4:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Enter valid value (1-4)\n");
                    break;
            }
        } while (c != 4);
        sc.close();
    }
}