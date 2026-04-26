import java.util.Scanner;

import libstack.Pop;

class Models {
    public static void main(String[] args) {
        Pop stack = new Pop();
        int a = 0;
        int c = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("i) 1 for Push\nii) 2 for Peep\niii) 3 for Pop\niv) 4 for Exit\n");
        do {
            System.out.print("Enter you choice : ");
            c = sc.nextInt();
            switch (c) {
                case 1:
                    System.out.print("Enter value :");
                    a = sc.nextInt();
                    stack.push(a);
                    break;
                case 2:
                    System.out.print("Enter position : ");
                    int k = sc.nextInt();
                    stack.peep(k);
                    break;
                case 3:
                    stack.pop();
                    break;
                case 4:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Enter valid value(1-4)");
                    break;
            }
        } while (c != 4);
        sc.close();
    }
}
