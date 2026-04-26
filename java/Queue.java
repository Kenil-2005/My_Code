import java.util.Scanner;
import libqueue.Function;

class Model {
    public static void main(String[] args) {
        // Calling class Queue
        Function Q = new Function();
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
                    if (!Q.isfull()) {
                        Q.insert(a);
                    } else {
                        System.out.println("Can't insert the queue is full\n");
                    }
                    break;
                    case 2:
                    if (!Q.isempty()) {
                        Q.delete();
                    }else{
                        System.out.println("Can't delete the queue is empty\n");
                    }
                    break;
                    case 3:
                    if (!Q.isempty()) {
                        Q.Display();
                    }else{
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