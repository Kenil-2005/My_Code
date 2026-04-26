import java.util.Scanner;

class Swap {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swaping");
        System.out.println("The a : " + a);
        System.out.println("The b : " + b);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a : ");
        int a = sc.nextInt();
        System.out.println("Enter b : ");
        int b = sc.nextInt();

        System.out.println("Befor swaping");
        System.out.println("The a : " + a);
        System.out.println("The b : " + b);
        swap(a, b);

        sc.close();
    }
}
