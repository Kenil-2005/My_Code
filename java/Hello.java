
// VARIABLE
// public class Hello {
// public static void main(String[] args) {
// String name = "kenil";
// int age = 18;
// String neighbour = "jaydip";
// String friend = name;
// System.out.println(name);
// System.out.println(age);
// System.out.println(neighbour);
// System.out.println(friend);
// }
// }

// DATA TYPES (primitive)
//
// public class Hello
// {
// public static void main(String[] args) {
// primitive types
// byte - 1 [-128 to 127]
// short - 2
// int - 4
// long - 8
// float - 4
// double - 8
// char - 2
// boolean - 1 true/flase
//
// byte age =12;
// int phone = 814053089;
// long phone2 = 1234567890L;
// float pi = 3.14F;
// char letter = '@';
// boolean isAdult = false;
// System.out.println(age);
// System.out.println(phone);
// System.out.println(phone2);
// System.out.println(pi);
// System.out.println(letter);
// System.out.println(isAdult);
// }
// }

// DATA TYPES (non-primitive)
//
// public class Hello
// {
// public static void main(String[] args) {
// // Non-primitive types
// String name = "kenil";
// String friend = new String("krupesh");
// System.out.println(name);
// System.out.println(friend);
// }
// }

// METHODS AND COMPOUNENT
//
// public class Hello{
// public static void main(String[] args){
// String name1 = "Kenil ";
// String name2 = "Pansara";
//
// System.out.println(name1.length()); // TO FIND LENGTH
//
// String name3 = name1 + name2; // TO CONCATING STRING
// System.out.println(name3);
//
// String name4 = name1 +"Girishbhai "+ name2; // TO CONCATING STRING AND ADD
// NEW VALUE
// System.out.println(name4);
//
// System.out.println(name1.indexOf("i")); // Give index of character
//
// System.out.println(name1.charAt(3)); // TO FIND CHARACTOR AT GIVEN POSSITION
//
// String name5 = name1.replace('K', 'J'); // TO REPLACE STRING OR CHARACTER
// System.out.println(name5);
//
// System.out.println(name3.substring(0,5)); // TO MAKE STRING SHORT
// }
// }

// ARRAY
//
// import java.util.Arrays;
//
// public class Hello{
// public static void main(String[] args){
// int[] marks = new int[3]; // DECLARATION OF ARRAY (IN JAVA FOR NULL ARRAY THERE IS NO GARABEG VALUE IN IT)
// marks[0] = 98;
// marks[1] = 97;
// marks[2] = 99;
//
// System.out.println(marks[0]);
// System.out.println(marks[1]);
// System.out.println(marks[2]);
//
// System.out.println(marks.length); // TO FIND LENGTH
//
// Arrays.sort(marks); // TO SORT THE ARRAY (we have to impot java.util.arrays)
// System.out.println(marks[0]);
// System.out.println(marks[1]);
// System.out.println(marks[2]);
// }
// }

// ARRAY[2D]
//
// public class Hello {
// public static void main(String[] args){
// int[][] finalmarks={{95,91,99},{95,98,95}};
// System.out.println(finalmarks[0][0]);
// System.out.println(finalmarks[0][1]);
// System.out.println(finalmarks[0][2]);
// System.out.println(finalmarks[1][0]);
// System.out.println(finalmarks[1][1]);
// System.out.println(finalmarks[1][2]);
// }
// }

// CASTING
//
// public class Hello{
// public static void main(String[] Args){
// // implicit casting (it cast data by its on when any samll data type is
// operate with large data type)
// double price = 100.00;
// double finalprice = price + 18.00;
//
// System.out.println(finalprice);
//
// // explicit casting (it cast by user when a large data type is operate with
// samll data type)
// int p = 100;
// int fp = p + (int)18.00;
//
// System.out.println(fp);
// }
// }

// CONSTANTS
//
// public class Hello{
// public static void main(String[] Args){
// final float PI = 3.14f; // Final keyword use to define as constant variable
// PI = 3.15f; // if we try to chage the value its shows error
// }
// }

// OPERATORS(ARITHMETIC)
//
// public class Hello {
// public static void main(String[] Args) {
// int a = 1;
// int b = 2;
// int sum = a + b;
// System.out.println(sum);
// int diff = a - b;
// System.out.println(diff);
// int multi = a * b;
// System.out.println(multi);
// int div = a / b;
// System.out.println(div);
// int reminder = a % b;
// System.out.println(reminder);
// }
// }

// MATH CLASS
//
// public class Hello {
// public static void main(String[] Args) {
// System.out.println(Math.max(5,6)); // gives maximum value among them
// System.out.println(Math.min(5,6)); // gives minimun value among them
// System.out.println(Math.sqrt(16)); // gives squareroot of value
// System.out.println(Math.pow(2, 3)); // use to calculate the power
// System.out.println(Math.random()); // give any random no. from 0.0 to 1.0
// System.out.println((int)(Math.random()*100));
// }
// }

// INPUT IN JAVA
//
// import java.util.Scanner;
//
// public class Hello{
// public static void main(String[] Args){
// Scanner sc = new Scanner(System.in);
// System.out.println("input your age :");
// int age = sc.nextInt(); // use to scan int type value
// System.out.println(age);
// System.out.println("input your age :");
// float agef = sc.nextFloat(); // use to scan float type value
// System.out.println(agef);
// System.out.println("input your name :");
// String name = sc.next(); // use to scan string(one word) type value
// System.out.println(name);
// System.out.println("input your name :");
// String name1 = sc.nextLine(); // use to scan string(sentences) type value
// System.out.println(name1);
// sc.close(); // To close Scanner object
// }
// }

// COMPARISON OPERATORS
//
// public class Hello{
// public static void main(String[] args){
// // a == b // To compere the value
// // a != b // To check not equal value
// // a < b // To check grater than value
// // a > b // To check less then value
// // a <= b // To check grater then equal to
// // a >= b // To chech less then equal ti
// }
// }

// CONDITIONAL SATEMENTS(IF-ELSE)
//
// public class Hello{
// public static void main(String[] Args){
// boolean isSunUp = true;
// if (isSunUp == true) {
// System.out.println("day");
// }
// else
// System.out.println("night");
// }
// }

// LOGICAL OPERATORS
//
// public class Hello {
// public static void main(String[] args) {
// // && (AND) // Check both condition are setisfy
// int a = 30;
// int b = 40;
// if (a < 50 && b < 50) {
// System.out.println("both less than 50");
// } else {
// System.out.println("both greter then 50");
// }
// // || (OR) // Check atleast one condition is setisfy
// if (a < 50 || b < 50) {
// System.out.println("atleast less than 50");
// } else {
// System.out.println("atleast greter then 50");
// }
// // ! (NOT)
// boolean isAdult = true;
// if (isAdult == true) {
// System.out.println("is Adult");
// }
// else{
// System.out.println("not Adult");
// }
// }
// }

// CONDITION OPERATORS (SWITCH)
//
// import java.util.Scanner;
//
// public class Hello {
// public static void main(String[] Args) {
// Scanner sc = new Scanner(System.in);
// int day = sc.nextInt();
// switch (day) {
// case 1:
// System.out.println("Monday");
// break;
// case 2:
// System.out.println("Tueday");
// break;
// case 3:
// System.out.println("Wednesday");
// break;
// case 4:
// System.out.println("Thursday");
// break;
// case 5:
// System.out.println("Friday");
// break;
// case 6:
// System.out.println("Saturday");
// break;
// case 7:
// System.out.println("Sunday");
// break;
// default:
// System.out.println("Invalid value...");
// break;
// }
// sc.close();
// }
// }

// LOOPS
//
// public class Hello{
// public static void main(String[] Args){
// // System.out.println("For loop");
// // for(int i = 0;i <= 100; i++)
// // {
// // System.out.println(i);
// // }
// // System.out.println("While loop");
// // int i = 0;
// // while (i <= 100) {
// // System.out.println(i);
// // i++;
// // }
// System.out.println("Do while loop");
// int i = 0;
// do{
// System.out.println(i);
// i++;
// }while(i <= 100);
// }
// }

// TRY-CATCH
//
// public class Hello{
// public static void main(String[] Args){
// // try and catch function is use when we have doubt in that method
// // try is use to try the method
// // catch is use to make changes after error
// int[] marks = {97,98,99};
// try{
// System.out.println(marks[5]);
// } catch(Exception exception){
// System.out.println(marks[2]); // it change the function...
// }
// System.out.println("The name is kenil.");
// }
// }

// FUNCTION / METHODS
//
// public class Hello{
// public static void printJava(){
// System.out.println("Hello Java");
// }
// public static void printName(String name){
// System.out.println(name);
// }
// public static void main(String[] Args){
// printName("kenil");
// printName("krupesh");
// printJava();
// }
// }

// CLASS AND OBJECT IN JAVA
//
// class Pen {
// String color; // black,blue etc.
// String type; // gel , ballpoint etc.
//
// public void printcolor(){
// System.out.println(this.color); // this keyword is use for identify that
// which object is call
// }
// public void write() {
// System.out.println("writing something");
// }
// }
//
// public class Hello {
// public static void main(String[] Args){
// Pen pen1 = new Pen();
// pen1.color = "Blue";
// pen1.type = "ballpoint";
//
// Pen pen2 = new Pen();
// pen2.color = "Black";
// pen2.type = "Ink";
//
// Pen pen3 = new Pen();
// pen3.color = "Red";
// pen3.type = "ballpoint";
//
// Pen pen4 = new Pen();
// pen4.color = "Yellow";
// pen4.type = "gel";
//
// pen1.printcolor();
// pen2.printcolor();
// pen3.printcolor();
// pen4.printcolor();
// pen1.write();
// pen2.write();
// }
// }

// CONSTRUCTOR
// /*
// * constructor is use to construct object
// * there are 3 typees of constructor
// * i) non-perameter type
// * ii) parameter type
// * iii) copy type
// * propertice :-
// * i) name of constructor is same as class.
// * ii) constructor returns nothing and it have no return type.
// * ii) it use only one time
// */
// class Student {
// String name;
// int age;
//
// public void printinfo() {
// System.out.println(this.name);
// System.out.println(this.age);
// }
//
// // non-parameter type
// Student() {
// System.out.println("constructed...");
// }
//
// // parameter type
// Student(String name,int age){
// this.name = name;
// this.age = age;
// }
//
// // copy type
// Student(Student s3){
// this.name = s3.name;
// this.age = s3.age;
// }
// }
//
// public class Hello{
// public static void main(String[] Args){
// Student s1 = new Student(); // use to declare type 1 constructor
// s1.name = "kenil";
// s1.age = 18;
// s1.printinfo();
//
// Student s2 = new Student("Divya",19); // use to declare type 2 constructor
// s2.printinfo();
//
// Student s3 = new Student(s2); // use to declre type 3 constructor
// s3.printinfo();
// }
// }

// POLYMORPHISM (compiler time)
// /*
// * NO SAME METHOD BENING USE THERE MUST BE CHANGE IN PARAMETER OR RETURN TYPE
// */
// class Student {
// String name;
// int age;
//
// public void printinfo(String name) {
// System.out.println(name);
// }
//
// public void printinfo(int age) {
// System.out.println(age);
// }
//
// public void printinfo(String name, int age) {
// System.out.println(name + " " + age);
// }
// }
//
// public class Hello {
// public static void main(String[] Args) {
// Student s1 = new Student();
// s1.name = "kenil";
// s1.age = 18;
//
// s1.printinfo(s1.age);
// s1.printinfo(s1.name);
// s1.printinfo(s1.name, s1.age);
// }
// }

// INHERITANCE
// /*
// * it is use to give or take propertice of other class.
// * Types of inheritance
// * i) single level (we use property of other class for single stage)
// * ii) multy level (we use property of other class for mulity stage(like a
// lader 1st use by 2nd,2nd use by 3rdand so on))
// * iii) hierarchial (it use property of base class multiple time)
// * iv) hybrid (combo of all types of inheritance)
// * v) multiple inheritance (it is not applicable in call but use in interface)
// */
// Single level
// class Shape {
// public void area() {
// System.out.println("Display area");
// }
// }

// class Triangle extends Shape {
// public void area(int l, int h) {
// System.out.println((l * h) / 2);
// }
// }

// // mulitiple level
// class Object {
// public void types(String string) {
// System.out.println("Types");
// }
// }

// class Material extends Object {
// public void types(String m) {
// System.out.println("Matrial");
// }
// }

// class Metal extends Material {
// public void types(String m, int s) {
// System.out.println("Matrial " + m + " Sr. no." + s);
// }
// }

// // hierarchial
// class College {
// public void student() {
// System.out.println("Student");
// }
// }

// class Teacher extends College {
// public void student(String name) {
// System.out.println("Name is " + name);
// }
// }

// class Management extends College {
// public void student(String name, int Roll_no) {
// System.out.println("Name is : " + name + " Roll no. is : " + Roll_no);
// }
// }

// public class Hello {
// public static void main(String[] args) {
// Triangle t1 = new Triangle();
// t1.area(8, 8);

// Metal m1 = new Metal();
// m1.types("kenil", 0);

// Management m2 = new Management();
// m2.student("kenil", 1);
// }
// }

// PACKAGE
// /*
// * it is use to simplify the project by break down in small package (by
// foemating library)
// * Types of Package
// * i) build in package(package which are preinstall)
// * ii)
// */
// import bank.Account;
//
// public class Hello{
// public static void main(String[] args) {
// Account account1 = new Account();
// account1.setName("coustomer1");
// System.out.println(account1.getName());
// }
// }

// ABSTRACTION
// /*
// * abstract class is use to hide unwanted data from the user.
// * we can't use class or method that is abstract.
// * it can have abstract and non-abstract methods.
// * it can have constuctors and static methods.
// */
//
// abstract class Animal {
//     abstract void walk();
// }
//
// class Horse extends Animal {
//     public void walk() {
//         System.out.println("Walks on 4 legs");
//     }
// }
// 
// class Chicken extends Animal {
//     public void walk() {
//         System.out.println("Walks on 2 legs");
//     }
// }
//
// public class Hello {
//     public static void main(String[] args) {
//         Horse horse = new Horse();
//         Chicken chicken = new Chicken();
//         chicken.walk();
//         horse.walk();
//     }
// }

// INTERFACES
// /*
// *** in this we can use multiple inheritance
// * total abstarction is know as interface
// * all the fileds in interface is public ,static and final by default.
// * all methods are public and abstract by default.
// * interface suppourt the functionality of multiple inheritance.
// * we cannot use constructor in interface.
// */
//
// interface Animal {
// int eye = 2; // fields are public,static and final by default
// void walk();
// }
//
// interface Herbivore {
// void eat();
// }
//
// //here we use implements insted of extends
// class Horse implements Animal,Herbivore{
// public void walk(){
// System.out.println("walks on 4 legs");
// }
// public void eat(){
// System.out.println("Eat plants...");
// }
// }
//
// public class Hello{
// public static void main(String[] args) {
// Horse horse = new Horse();
// horse.walk();
// horse.eat();
// }
// }

// FRAMES IN JAVA
//
// import java.awt.*;
//
// class Frames extends Frame{
// // Creating constructor of Frames
// public Frames(){
// // Set visiblity of frame
// this.setVisible(true);
// // Set title of frame
// this.setTitle("My Frame");
// // Set size of frame as you mantion in x,y coordination
// this.setSize(800,650);
// // Set background color of frame as set
// this.setBackground(Color.lightGray);
// // Set resizablity of frame as you mantion true or false
// this.setResizable(true);
// // Set location of frame as you mantion in the x,y coordination
// this.setLocation(500,250);
// // Set grid to frame
// this.setLayout(new GridLayout(8,8));
// }
//
// public static void main(String[] args) {
// new Frames(); // Creating object frames
// }
// }

// PARS KEY WORD
//
// public class Hello{
// public static void main(String[] args) {
// String num = "1234";
// // Use to change String to other data type
// int stringtoint = (int)Integer.parseInt(num); // Can't change decimal input
// like 12.25
// System.out.println(stringtoint);
// float stringtofloat = (float)Float.parseFloat(num);
// System.out.println(stringtofloat);
// double stringtodouble = (double)Double.parseDouble(num);
// System.out.println(stringtodouble);
// Boolean Stringtoboolean = (boolean)Boolean.parseBoolean(num);
// System.out.println(Stringtoboolean);
// }
// }

// // LAMBDA EXPRESSION
// /*  
//  ** it is use to optimize the code 
// */
//
// @FunctionalInterface
// interface A {
//     void show();
// }
//
// class Hello{
//     public static void main(String[] args) {   
//         /*
//         A obj = new A() {
//             public void show() {
//                 System.out.println("Hello from Kenil");
//             }
//         };
//         */
//         // other way to write this is by using lambda expression (->)
//         A obj = () -> System.out.println("Hello from Kenil");
//         System.out.println(obj);
//     }
// }
