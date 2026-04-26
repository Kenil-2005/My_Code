    import java.util.Scanner;

    // For the formetation of queue 
    class Queue1 {
        int s[] = new int[5];
        int front = 0;
        int rear = -1;
    }

    // To check the queue is empty or full
    class Check {
        Queue1 Q = new Queue1();

        // Condition for checking queue is full
        boolean isfull() {
            if (Q.rear == 4) {
                return true;
            } else {
                return false;
            }
        }

        // Condition for checking queue is empty
        boolean isempty() {
            if (Q.front == 0 && Q.rear == -1) {
                return true;
            } else {
                return false;
            }
        }
    }

    // Methods of queue
    class Method {
        // Calling class Queue
        Queue1 Q = new Queue1();
        // Calling class Check
        Check C = new Check();

        // Method to insert value in queue
        public void insert(int a) {
            if (C.isfull()) {
                System.out.println("Cannot insert, the Queue is full\n");
            } else {
                Q.rear = Q.rear + 1;
                Q.s[Q.rear] = a;
                System.out.println("The value is inserted.\n");
            }
        }

        // Method to delete value from queue
        public void delete() {
            if (!C.isempty()) {
                System.out.println("Cannot delete, the Queue is empty\n");
            } else {
                int c = Q.front;
                System.out.println("The deleted value is : " + Q.s[c] + "\n");
                if (Q.front == Q.rear) {
                    Q.front = 0;
                    Q.rear = -1;
                } else {
                    Q.front = Q.front + 1;
                }
            }
        }

        // Method to display the queue
        public void Display() {
            int f = Q.front;
            int r = Q.rear;
            if (!C.isempty()) {
                System.out.println("The queue is empty,can't display\n");
            } else {
                System.out.println("The element are : ");
                for (int i = f; i <= r; i++) {
                    System.out.println(Q.s[i]);
                }
            }
        }
    }

    // Main class for Queue
    class Model1 {
        public static void main(String[] args) {
            // Calling class Method
            Method M = new Method();
            // Check C = new Check();
            Scanner sc = new Scanner(System.in);
            int c = 0;
            System.out.println("i) Insert\nii) Delete\niii) Display\niv) Exit\n");
            do {
                System.out.print("Enter your choice : ");
                c = sc.nextInt();
                switch (c) {
                    case 1:
                        System.out.print("Enter value : ");
                        int a = sc.nextInt();
                        // if (C.Q.rear == 4) {
                        //     System.out.println("Can't insert the queue is full\n");
                        // }else{
                            M.insert(a);
                        // }
                        break;
                    case 2:
                    // if (C.Q.front == 0 && C.Q.rear == -1) {
                    //     // System.out.println("can't delete the queue is empty\n");
                    // }else{
                        M.delete();
                    // }
                    break;
                    case 3:
                    // if (C.Q.front == 0 && C.Q.rear == -1) {
                    //     System.out.println("can't  the display queue is empty\n");
                    // }else{
                        M.Display();
                    // }
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
