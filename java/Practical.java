
// Q-1) Write a Program that displays Welcome to Java, Learning Java Now and
// Programming is fun.
//
// class Practical_1 {
// public static void main(String[] args) {
// System.out.println("Welcome to Java"); // Print statement
// System.out.println("Learning Java Now"); // Print statement
// System.out.println("Programming is Fun"); // Print statement
// }
// }

// Q-2) Write a program that solves the following equation and displays the
// value x and y: 1) 3.4x+50.2y=44.5 2) 2.1x+.55y=5.9
// import java.util.Scanner;
//
// class Practical_2 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// // Asking the user to input coefficients
// System.out.println("Values from Equestion - 1 :");
// System.out.print("Enter value of a : ");
// double a = input.nextDouble();
// System.out.print("Enter value of b : ");
// double b = input.nextDouble();
// System.out.print("Enter value of e : ");
// double e = input.nextDouble();
//
// System.out.println("Values from Equestion - 2 :");
// System.out.print("Enter value of c : ");
// double c = input.nextDouble();
// System.out.print("Enter value of d : ");
// double d = input.nextDouble();
// System.out.print("Enter value of f : ");
// double f = input.nextDouble();
//
// // Solving the equtions
// double x = ((e * d) - (b * f)) / ((a * d) - (b * c));
// double y = ((a * f) - (e * c)) / ((a * d) - (b * c));
//
// System.out.print(" X = " + x + " Y = " + y); // Print value of x and y
// input.close(); // Close Scanner object
// }
// }

// Q-3) Write a program that reads a number in meters, converts it to feet, and
// displays the result.
//
// import java.util.Scanner;
//
// class Practical_3 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// System.out.print("Enter value in meter : ");
// Double meter = input.nextDouble(); // Taking value in meter
// Double feet = meter * 3.28; // Converting meter into feet
// System.out.println("Meter = " + meter + " feet = " + feet); // Print the
// value of feet
// input.close(); // Closing Scanner object
// }
// }

// Q-4) Write a program that prompts the user to enter a weight in pounds and
// height in inches and displays the BMI.
//
// import java.util.Scanner;
//
// class Practical_4 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// System.out.print("Enter your weight in pound : ");
// double weight = input.nextDouble(); // Tacking weight in pound
// System.out.print("Enter your height in inch : ");
// double height = input.nextDouble(); // Tacking height in inch
// // Calculating body mass index(BMI)
// double bm = (weight * 0.45359237) / Math.pow((height * 0.0254),2);
// System.out.println("The body mass index is : " + bm); // Print BMI
// input.close(); // Closing Scanner object
// }
// }

// Q-5) Write a program that prompts the user to enter three integers and
// display the integers in decreasing order.
//
// import java.util.Scanner;
//
// class Practical_5 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// int temp;
// // Tacking values
// System.out.print("Enter 1st Integer :");
// int a = input.nextInt();
// System.out.print("Enter 2nd Integer :");
// int b = input.nextInt();
// // Check maximum number and replace
// if (a < b) {
// temp = a;
// a = b;
// b = temp;
// }
// System.out.print("Enter 3rd Integer :");
// int c = input.nextInt();
// if (c > b) {
// if (c > a) {
// temp = c;
// c = b;
// b = a;
// a = temp;
// } else {
// temp = c;
// c = b;
// b = temp;
// }
// }
// //print the Result
// System.out.print("Decreasing Order :" + a + " " + b + " " + c);
// input.close(); // Closing Scanner object
// }
// }

// Q-6) Write a program that prompts the user to enter a letter and check
// whether a letter is a vowel or constant.
//
// import java.util.Scanner;
//
// class Practical_6 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// System.out.print("Enter an character : ");
// char ch = input.next().charAt(0); // Taking input from user
// // Use switch to check if the input is a vowel
// switch (ch) {
// case 'a':
// case 'e':
// case 'i':
// case 'o':
// case 'u':
// System.out.println(ch + " is a vowel");
// break;
// default:
// System.out.println(ch + " is not a vowel");
// break;
// }
// input.close(); // Closing Scanner object
// }
// }

// Q-7) Assume a vehicle plate number consists of three uppercase letters
// followed by four digits. Write a program to generate a plate number.
//
// class Practical_7 {
// public static void main(String[] args) {
// // Generating value
// int alpha1 = 'A' + (int) (Math.random() * ('Z' - 'A'));
// int alpha2 = 'A' + (int) (Math.random() * ('Z' - 'A'));
// int alpha3 = 'A' + (int) (Math.random() * ('Z' - 'A'));
// int num1 = (int) (Math.random() * 10);
// int num2 = (int) (Math.random() * 10);
// int num3 = (int) (Math.random() * 10);
// int num4 = (int) (Math.random() * 10);
// // Printing value in squence
// System.out.print((char)alpha1);
// System.out.print((char)alpha2);
// System.out.print((char)alpha3);
// System.out.print(num1);
// System.out.print(num2);
// System.out.print(num3);
// System.out.println(num4);
// }
// }

// Q-8) Write a program that reads an integer and displays all its smallest
// factors in increasing order.
//
// import java.util.Scanner;
//
// class Practical_8 {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in); // Creating Scanner object
// int div = 2;
// System.out.println("Enter number : ");
// int num = input.nextInt(); // Taking value from user
// while (num > 1) {
// // Checking factors of given number
// if (num % div == 0) {
// System.out.print(div + " ");
// num = num / div;
// } else {
// div++;
// }
// }
// input.close(); // Closing Scanner object
// }
// }

// Q-9) Write a method with following method header.
// public static int gcd(int num1, int num2)
// Write a program that prompts the user to enter two integers and compute the
// gcd of two integers.
//
// import java.util.Scanner;
//
// class Practical_9 {
// // Crreating method for GCD
// public static int gcd(int num1, int num2) {
// // Calculating gcd
// while (num1 != num2) {
// if (num1 > num2) {
// num1 = num1 - num2;
// } else {
// num2 = num2 - num1;
// }
// }
// return num1;
// }
//
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in); // Creating Scanner object
// // Tacking value
// System.out.print("Enter frist number : ");
// int num1 = sc.nextInt();
// System.out.print("Enter second number : ");
// int num2 = sc.nextInt();
// // Computing and printing the GCD
// System.out.println("The gcd of " + num1 + " and " + num2 + " is " +
// gcd(num1,num2));
// sc.close(); // Closing Scanner object
// }
// }

// Q-10) Write a test program that prompts the user to enter ten numbers, invoke
// a method to reverse the numbers, display the numbers.
//
// import java.util.Scanner;
//
// class Practical_10 {
// // Creating method revers
// public static void revers(int[] num) {
// int l = num.length / 2; // Calulate range for loop
// for (int j = 0; j < l; j++) {
// int temp = num[j];
// num[j] = num[(num.length - 1) - j];
// num[(num.length - 1) - j] = temp;
// }
// }
//
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in); // Creating Scanner object
// int[] num = new int[10];
// System.out.println("Enter value : ");
// for (int i = 0; i < 10; i++) {
// num[i] = sc.nextInt();
// }
// revers(num); // Calling revers method
// // Printing Reversed arrays
// System.out.println("The revers array is : ");
// for (int i = 0; i < 10; i++) {
// System.out.println(num[i]);
// }
// sc.close(); // Closing Scanner objeect
// }
// }

// Q-11) Write a program that generate 6*6 two-dimensional matrix, filled with
// 0’s and 1’s , display the matrix, check every row and column have an odd
// number’s of 1’s.
//
// class Practical_11 {
// // Method to Create matrix
// public static int[][] createMatix() {
// int[][] matrix = new int[6][6];
// for (int i = 0; i < 6; i++) {
// for (int j = 0; j < 6; j++) {
// matrix[i][j] = (int) ((Math.random() * 5) % 2);
// }
// }
// return matrix;
// }
//
// // Methods to Display matrix
// public static void Display(int[][] matrix) {
// System.out.println("Displaying matrix : ");
// for (int i = 0; i < 6; i++) {
// for (int j = 0; j < 6; j++) {
// System.out.print(matrix[i][j] + " ");
// }
// System.out.println();
// }
// }
//
// public static void main(String[] args) {
// int[][] matrix = createMatix(); // Generate the 6×6 matrix
// Display(matrix); // Display Matix
// // Check if every row has an odd number of 1's
// for (int i = 0; i < 6; i++) {
// int count = 0;
// for (int j = 0; j < 6; j++) {
// if (matrix[i][j] == 1) {
// count++;
// }
// }
// if (count % 2 != 0) {
// System.out.println("Row - " + (i + 1) + " have ODD no. of 1's");
// }
// }
// // Check if every column has an odd number of 1's
// for (int i = 0; i < 6; i++) {
// int count = 0;
// for (int j = 0; j < 6; j++) {
// if (matrix[j][i] == 1) {
// count++;
// }
// }
// if (count % 2 != 0) {
// System.out.println("Column - " + (i + 1) + " have ODD no. of 1's");
// }
// }
// }
// }

// Q-12) Write a program that creates a Random object with seed 1000 and
// displays the first 100 random integers between 1 and 49 using the NextInt
// (49) method.
//
// import java.util.Random;
//
// class Practical_12 {
// public static void main(String[] args) {
// // bby useing seed it prite same value that the seed is initializ every time
// Random random = new Random(1000); // Creating object random with seed
// value1000
// for (int i = 1; i <= 100; i++) {
// System.out.format("%5d", random.nextInt(49)); // Print no. with range(1-49)
// if (i % 20 == 0) {
// System.out.println();
// }
// }
// }
// }

// Q-13) Write a program for calculator to accept an expression as a string in
// which the operands and operator are separated by zero or more spaces
//
// import java.util.Scanner;
//
// class Practical_13 {
// // Function for applying space between opearand and opearator
// public static void space(String eq) {
// int i = 0;
// while (i < eq.length()) {
// System.out.print(eq.charAt(i) + " ");
// i++;
// }
// }
//
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in); // Creating Scammer object
// System.out.print("Enter equation : ");
// String eq = sc.next(); // Accept equation
// // initialization some usefull value
// int i = 0;
// int result = 0;
// if (eq.length() < 3) {
// // Checking the is valid or not
// System.out.println("Minimum 2 Opearator and 1 Opearand Required");
// System.exit(0);
// } else {
// // initializa 'i' to opearand place
// while (eq.charAt(i) != '+' && eq.charAt(i) != '-' && eq.charAt(i) != '*' &&
// eq.charAt(i) != '/') {
// i++;
// }
// // Convert String to Integer
// switch (eq.charAt(i)) {
// case '+':
// result = Integer.parseInt(eq.substring(0, i)) +
// Integer.parseInt(eq.substring(i + 1, eq.length()));
// break;
// case '-':
// result = Integer.parseInt(eq.substring(0, i)) -
// Integer.parseInt(eq.substring(i + 1, eq.length()));
// break;
// case '*':
// result = Integer.parseInt(eq.substring(0, i)) *
// Integer.parseInt(eq.substring(i + 1, eq.length()));
// break;
// case '/':
// result = Integer.parseInt(eq.substring(0, i)) /
// Integer.parseInt(eq.substring(i + 1, eq.length()));
// break;
// default:
// break;
// }
// space(eq); // Applying space between operator and operand
// System.out.println("= " + result); // Printing result
// }
// sc.close(); // Closing Scanner object
// }
// }

// Q-14) Write a program that creates an Array List and adds a Loan object , a
// Date object , a string, and a Circle object to the list, and use a loop to
// display all elements in the list by invoking the object’s to String() method.
//
// import java.util.Date;
// import java.util.ArrayList;
//
// class Practical_14 {
// // Class of Loan
// static class Loan {
// double amount;
//
// Loan(double amu) {
// this.amount = amu;
// }
//
// public String toString() {
// return ("The loan amount is : " + this.amount);
// }
// }
//
// // Class of Circle
// static class Circle {
// double radius;
//
// Circle(double r) {
// this.radius = r;
// }
//
// public String toString() {
// return ("The radius ofcircle is : " + this.radius);
// }
// }
//
// public static void main(String[] args) {
// ArrayList<Object> arr_list = new ArrayList<Object>(); // Creating array_list
// arr_list.add(new Loan(10000)); // Add loan class
// arr_list.add(new Date()); // Add date
// arr_list.add(new String("GTU Practical")); // Add String
// arr_list.add(new Circle(3.45)); // Add Cirlce class
// // Printing the contents of the ArrayList
// for (Object obj : arr_list) {
// System.out.println(obj);
// }
// // Another method for printing list
// // for(int i = 0;i < arr_list.size();i++){
// // System.out.println((arr_list.get(i)).toString());
// // }
// }
// }

// Q-15) Write the bin2Dec (string binary String) method to convert a binary
// string into a decimal number. Implement the bin2Dec method to throw a
// NumberFormatException if the string is not a binary string.
//
// import java.util.Scanner;
//
// class Practical_15 {
// // Function for converting binary to decimal number
// public static int bin2Dec(String binary) throws NumberFormatException {
// int decimal = 0;
// int blength = binary.length();
// for (int i = 0; i < blength; i++) {
// if (binary.charAt(i) < '0' || binary.charAt(i) > '1') {
// throw new NumberFormatException("The Input String is note Binary");
// }
// decimal += (binary.charAt(i) - '0') * Math.pow(2, blength - 1 - i); //
// Calculating number
// }
// return decimal;
// }
//
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in);
// System.out.print("Enter binary no : ");
// String binary = sc.nextLine(); // Accepting binary number
// // try and catch for error handling
// try {
// System.out.print("Binary to decimal value is :" + bin2Dec(binary));
// } catch (NumberFormatException e) {
// System.out.println(e);
// }
// sc.close();
// }
// }

// Q-16) Write a program that prompts the user to enter a decimal number and
// displays the number in a fraction.
//
// import java.util.Scanner;
//
// // Class of Function
// class Function {
// private int real;
// private int imaginary;
//
// // Creating constructor of class
// public Function(int real_part, int imag_part) {
// real = real_part;
// imaginary = imag_part;
// }
//
// // Calculating GCM(Greatest Common Measure)
// public long gcm(int a, int b) {
// return b == 0 ? a : gcm(b, a % b);
// }
//
// public String toString() {
// long gcm = gcm(real, imaginary);
// return real / gcm + " / " + imaginary / gcm;
// }
// }
//
// class Practical_16 {
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in);
// System.out.print("Enter decimal number : ");
// String decimal = sc.nextLine(); // Accepting decimal value
// // Divide string into two part
// int len = decimal.substring(decimal.indexOf('.')).length();
// // Calculating dinominator and store in imag_part
// int imag_part = (int) Math.pow(10, len - 1);
// // Removing decimal by 10's multiping
// int real_part = (int) (Double.parseDouble(decimal) * imag_part);
// Function F = new Function(real_part, imag_part); // Creating Function object
// System.out.println("The fraction part is : " + F); // Printing result
// sc.close();
// }
// }

// Q-17) Write a program that displays a tic-tac-toe board. A cell may be X, O,
// or empty. What to display at each cell is randomly decided. The X and O are
// images in the files X.gif and O.gif.
//
// import java.awt.*;
// import java.util.*;
// import javax.swing.*;
//
// class TicTacToeBoard extends JFrame {
// private JLabel[][] cells;
//
// public TicTacToeBoard() {
// // Creating frame
// setTitle("Tic-Tac-Toe");
// setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
// setSize(300, 300);
// setLayout(new GridLayout(3, 3));
//
// cells = new JLabel[3][3]; // creating cells or partition of frame
// Random random = new Random();
//
// for (int i = 0; i < 3; i++) {
// for (int j = 0; j < 3; j++) {
// cells[i][j] = new JLabel();
// add(cells[i][j]);
// int choice = random.nextInt(2); // 0 for X, 1 for O, 2 for empty
// if (choice == 0) {
// cells[i][j].setIcon(new ImageIcon("X.png"));
// } else if (choice == 1) {
// cells[i][j].setIcon(new ImageIcon("O.png"));
// }
// }
// }
// setVisible(true); // Setting visibility
// }
// }
//
// class Practical_17 {
// public static void main(String[] args) {
// new TicTacToeBoard(); // Creating object
// }
// }

// Q-18) Write a program that moves a circle up, down, left or right using arrow
// keys.
//
// import java.awt.*;
// import java.awt.event.*;
// import javax.swing.*;
//
// class MovingObject extends JFrame implements KeyListener {
// private int x = 10; // Initializing x
// private int y = 10; // Initializing y
// // Creating constructor for the JFrame
//
// public MovingObject() {
// // Setting up all its components
// this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
// this.setTitle("Moveing_of_Object");
// this.setSize(500, 500);
// this.setLayout(null);
// this.addKeyListener(this);
// this.setVisible(true);
// }
//
// // Creating Graphics components
// public void paint(Graphics g) {
// // For erase tell of moving Shape
// g.setColor(Color.white); // Set background color of frame
// g.fillRect(0, 0, getWidth(), getHeight()); // Set Boundery of color
// // Creating shape components
// g.setColor(Color.red); // Set color for shape
// g.fillOval(x, y, 100, 100); // Creating shape
// }
//
// // Methods for sifting Shape as per arrow press
// @Override
// public void keyPressed(KeyEvent e) {
// // keyPressed is invoke when a physical key is pressed down.uses KeyCode,int
// // output
// switch (e.getKeyCode()) { // Assign sifting of arrows
// case KeyEvent.VK_LEFT:
// x -= 1;
// break;
// case KeyEvent.VK_RIGHT:
// x += 1;
// break;
// case KeyEvent.VK_DOWN:
// y += 1;
// break;
// case KeyEvent.VK_UP:
// y -= 1;
// break;
// default:
// break;
// }
// repaint(); // It repaint the background color after sifting shape each time
// }
//
// @Override
// public void keyTyped(KeyEvent e) {
// // keyTyped is invoke when a key is typed.uses keyChar,char Output
// }
//
// @Override
// public void keyReleased(KeyEvent e) {
// // called when key is released
// }
// }
//
// class Practical_18 {
// public static void main(String[] args) {
// new MovingObject(); // Creating Object MObject
// }
// }

// Q-19) Write a program that displays the color of a circle as red when the
// mouse button is pressed and as blue when the mouse button is released.
//
// import java.awt.*;
// import java.awt.event.*;
// import javax.swing.*;
//
// class Circle extends JFrame implements MouseListener {
// private Color circleColor; // set color variable
//
// public Circle() {
// // Creating frame
// this.setTitle("Circle");
// this.setSize(300, 300);
// this.setDefaultCloseOperation(EXIT_ON_CLOSE);
// circleColor = Color.blue; // set color
// this.addMouseListener(this);
// this.setVisible(true);
// }
//
// public void paint(Graphics g) {
// g.setColor(circleColor); // set color of circle
// g.fillOval(75, 75, 150, 150); // creating circle
// }
//
// @Override
// public void mouseClicked(MouseEvent e) {
// // Unused
// }
//
// @Override // Change color as mouse key press
// public void mousePressed(MouseEvent e) {
// circleColor = Color.red;
// repaint();
// }
//
// @Override // Change color as mouse key relese
// public void mouseReleased(MouseEvent e) {
// circleColor = Color.blue;
// repaint();
// }
//
// @Override
// public void mouseEntered(MouseEvent e) {
// // Unused
// }
//
// @Override
// public void mouseExited(MouseEvent e) {
// // Unused
// }
// }
//
// class Practical_19 {
// public static void main(String[] args) {
// new Circle(); // Creating object
// }
// }

// Q-20) Write a GUI program that use button to move the message to the left and
// right and use the radio button to change the color for the message displayed.
//
// import java.awt.*;
// import java.awt.event.ActionEvent;
// import java.awt.event.ActionListener;
// import javax.swing.*;
//
// class MButton extends JFrame {
// // Calling use full variable
// private JButton button1;
// private JButton button2;
// private JLabel message;
// private JRadioButton redButton;
// private JRadioButton blueButton;
// private JRadioButton greenButton;
//
// MButton() {
// JPanel buttonPanel = new JPanel(); // Create Button panel
// JPanel radioPanel = new JPanel(); // Create radio Button panel
// button1 = new JButton("Left"); // Creating left button
// button2 = new JButton("Right"); // Creating right button
// message = new JLabel("Hello, World!"); // Creating message by lable
//
// // Creating frame
// this.setTitle("Message Button");
// this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
// this.setSize(500, 500);
// this.setLayout(new BorderLayout());
//
// message.setFont(new Font("Helvetica", Font.PLAIN, 24)); // Set font
//
// // Creating action listener for left button
// button1.addActionListener(new ActionListener() {
// @Override
// public void actionPerformed(ActionEvent e) {
// moveLeft();
// }
//
// });
// buttonPanel.add(button1); // Adding left button to butoon panel
//
// // Creating action listener for right button
// button2.addActionListener(new ActionListener() {
// @Override
// public void actionPerformed(ActionEvent e) {
// moveRight();
// }
//
// });
// buttonPanel.add(button2); // Adding right button to button panel
//
// // Creating red radio butoon and action listener
// redButton = new JRadioButton("Red");
// redButton.addActionListener(new ActionListener() {
// @Override
// public void actionPerformed(ActionEvent e) {
// changeColor("red");
// }
// });
// radioPanel.add(redButton); // Adding red radio button to radio panel
//
// // Creating blue radio butoon and action listener
// blueButton = new JRadioButton("Blue");
// blueButton.addActionListener(new ActionListener() {
// @Override
// public void actionPerformed(ActionEvent e) {
// changeColor("blue");
// }
// });
// radioPanel.add(blueButton); // Adding blue radio button to radio panel
//
// // Creating green radio butoon and action listener
// greenButton = new JRadioButton("Green");
// greenButton.addActionListener(new ActionListener() {
// @Override
// public void actionPerformed(ActionEvent e) {
// changeColor("green");
// }
// });
// radioPanel.add(greenButton); // Adding green radio button to radio panel
//
// // Create button group for radio button
// ButtonGroup buttonGroup = new ButtonGroup();
// buttonGroup.add(redButton);
// buttonGroup.add(blueButton);
// buttonGroup.add(greenButton);
//
// // Adding all thing to frame
// this.add(message, BorderLayout.CENTER);
// this.add(buttonPanel, BorderLayout.NORTH);
// this.add(radioPanel, BorderLayout.SOUTH);
//
// this.setVisible(true);
// }
//
// // Change the possition to left
// protected void moveLeft() {
// Point location = message.getLocation();
// if (location.x <= -120) {
// location.x = 500;
// }
// message.setLocation(location.x - 10, location.y);
// }
//
// // Change the possition to right
// protected void moveRight() {
// Point location = message.getLocation();
// if (location.x >= 500) {
// location.x = 0;
// }
// message.setLocation(location.x + 10, location.y);
// }
//
// // Change color as requested
// protected void changeColor(String color) {
// switch (color) {
// case "red":
// message.setForeground(Color.red);
// break;
// case "blue":
// message.setForeground(Color.blue);
// break;
// case "green":
// message.setForeground(Color.green);
// break;
// default:
// break;
// }
// }
// }
//
// class Practical_20 {
// public static void main(String[] args) {
// new MButton(); // Creating object MButton
// }
// }

// Q-21) Write a program to create a file name 123.txt, if it does not exist.
// Append a new data to it if it already exist. write 150 integers created
// randomly into the file using Text I/O. Integers are separated by space.
//
// import java.io.File;
// import java.io.FileWriter;
// import java.io.IOException;
//
// class Practical_21 {
// public static void main(String[] args) {
// // use try and catch for error handling
// try {
// // Create File
// File myFile = new File("123.txt");
// // Check Existense
// if (!myFile.exists()) {
// myFile.createNewFile();
// }
// // Cretating object FileWriter and open file
// FileWriter fw = new FileWriter(myFile, true);
//
// // Write 150 Random integer
// for (int i = 0; i < 150; i++) {
// int randomInt = (int) (Math.random() * (10));
// fw.write(Integer.toString(randomInt));
// fw.write(" ");
// }
// fw.close(); // Closing file
// } catch (IOException e) {
// System.out.println("Unable to create this file");
// e.printStackTrace();
// }
// }
// }

// Q-22) Write a recursive method that returns the smallest integer in an array.
// Write a test program that prompts the user to enter an integer and display
// its product.
//
// import java.util.Scanner;
//
// class Practical_22 {
// // Function for finding smallest integer from array
// public static int findSmallest(int[] array, int index, int smallest) {
// if (index == array.length) {
// return smallest;
// }
// if (array[index] < smallest) {
// smallest = array[index];
// }
// return findSmallest(array, index + 1, smallest); // Appling Recurtion
// }
//
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in);
// int n = 0;
// System.out.print("Enter size of array: ");
// n = input.nextInt(); // Accepting Array size
// int[] array = new int[n];
// System.out.print("Enter element of array: " + "\n");
// // Accepting Array values
// for (int i = 0; i < n; i++) {
// array[i] = input.nextInt();
// }
//
// int smallest = findSmallest(array, 0, array[0]); // Find smallest
// System.out.println("Smallest integer: " + smallest); // Printing Result
//
// System.out.print("Enter an integer: ");
// int num = input.nextInt(); // Accepting integer
// // product of integer and smallest our array
// System.out.println("The product of smallest and integer is : " + num *
// smallest);
// input.close();
// }
// }

// Q-23) Write a generic method that returns the minimum elements in a two
// dimensional array.
//
// import java.util.Scanner;
//
// class Practical_23 {
// // Generic function for finding minimum element from 2-D array
// public static <T extends Comparable<T>> T findMinimum(T list[][]) {
// T min = list[0][0];
// // Find minimum Element our array
// for (T[] elements : list) {
// for (T element : elements) {
// if (element.compareTo(min) < 0) {
// min = element;
// }
// }
// }
// return min;
// }
//
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in);
// Integer[][] array = new Integer[3][3]; // initializ array
// // Accepting values
// System.out.print("Enter element of array: " + "\n");
// for (int i = 0; i < 3; i++) {
// for (int j = 0; j < 3; j++) {
// array[i][j] = sc.nextInt();
// }
// }
// System.out.println("Displaying array :");
// // Printing array
// for (int i = 0; i < 3; i++) {
// for (int j = 0; j < 3; j++) {
// System.out.print(array[i][j] + " ");
// }
// System.out.println("");
// }
// // Printing result
// System.out.println("Minimum our them is :" + findMinimum(array));
// sc.close();
// }
// }

// Q-24) Define MYPriorityQueue class that extends Priority Queue to implement
// the Cloneable interface and implement the clone() method to clone a priority
// queue.
//
// impo{{rt java.util.PriorityQueue;
// // Creating generic class for cloning priority queue
// class MYPriorityQueue<T> extends PriorityQueue<T> implements Cloneable {
// @SuppressWarnings("unchecked")
// // Creating Constructor
// @Override
// public MYPriorityQueue<T> clone() throws CloneNotSupportedException {
// MYPriorityQueue<T> temp = new MYPriorityQueue<>(); //
// temp.addAll((MYPriorityQueue<T>) super.clone()); // cloning Queue
// return temp; // Returning clone queue
// }
// }
//
// class Practical_24 {
// public static void main(String[] args) throws CloneNotSupportedException {
// MYPriorityQueue<Integer> q1 = new MYPriorityQueue<>(); // Creating objecet
// // Adding value to queue
// q1.offer(10);
// q1.offer(19);
// q1.offer(5);
// MYPriorityQueue<Integer> q2 = q1.clone(); // Cloning Queue q1 to Queue q2
// // Printing Queue q1
// System.out.println("Queue 1 : ");
// while (q1.size() > 0) {
// System.out.println(q1.remove() + " ");
// }
// // Printing Queue q2
// System.out.println("Queue 2 : ");
// while (q2.size() > 0) {
// System.out.println(q2.remove() + " ");
// }
// }
// }

// Q-25)Write a program that reads words from a text file and displays all the
// nonduplicate words in descending order.The text file is passed as a
// command-line argument.
//
// import java.io.*;
// import java.util.*;
//
// class Practical_25 {
// @SuppressWarnings("unchecked")
// public static void main(String[] args) throws Exception {
// File fin = new File(args[0]);
// BufferedReader br = new BufferedReader(new FileReader(fin));
// StringBuffer buffer = new StringBuffer();
// String str;
//
// while ((str = br.readLine()) != null) { // reading the text file
// buffer.append(str); // storing text in StringBuffer
// buffer.append(" "); // Separating words by spaces
// }
// @SuppressWarnings("rawtypes")
// ArrayList list = new ArrayList(); // Declaring ArrayList
// StringTokenizer st = new StringTokenizer(buffer.toString().toLowerCase());
// while (st.hasMoreTokens()) { // creating a list of words
// String s = st.nextToken();
// list.add(s);
// }
// @SuppressWarnings("rawtypes")
// HashSet set = new HashSet(list); // it is created to avoid duplicate
// @SuppressWarnings("rawtypes")
// List arrayList = new ArrayList(set); // creating list of words
// @SuppressWarnings("rawtypes")
// Comparator c = Collections.reverseOrder();
// Collections.sort(arrayList, c);
// for (Object obj : arrayList) {
// System.out.println(obj.toString()); // displaying content
// }
// br.close();
// }
// }
