import java.util.Scanner;

class Guess {
    public static int generate() {
        int no = (int) (Math.random() * 100);
        return no;
    }

    public static boolean check(int n, int No) {
        boolean flag = false;
        if (n == No) {
            System.out.println("You guess the right number");
            System.out.println("and the number is : " + No);
            flag = true;
        } else if (n <= No) {
            System.out.println("The number is greter the your guess");
        } else if (n >= No) {
            System.out.println("The number is less then your guess");
        }
        return flag;
    }

    public static void main(String[] Args) {
        Scanner sc = new Scanner(System.in);
        int No = generate();
        boolean flag = true;
        System.out.println(
                "Rules of the game is\ni) guess no from 1 to 100\nii) To start the game type a no.\niii) If you what to exit type negative no.");
        String choice;
        do {
            int n;
            do {
                System.out.println("Guess the no. : ");
                n = sc.nextInt();
                if (n < 0) {
                    break;
                }
                flag = check(n, No);
                if (flag) {
                    break;
                }
            } while (n >= 0);
            if (!flag) {
                System.out.println("The write number is : " + No);
            }
            System.out.println("type 'yes' to continue or 'no' for exit");
            sc.nextLine();
            choice = sc.nextLine();
        } while (choice.equals("yes"));
        System.out.println("Thanks for playing");
        sc.close();
    }
}