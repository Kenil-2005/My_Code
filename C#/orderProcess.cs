using System;
using System.Collections;

namespace OrderProcess;

public enum Status
{
    Pending,
    InPrograss,
    Completed,
}

class Order
{
    public int orderID;
    public string orderName;
    public string productName;
    public int orderAmount;
    public Status status;

    public Order(int id, string name, string pname, int amount, Status status1)
    {
        orderID = id;
        orderName = name;
        productName = pname;
        orderAmount = amount;
        status = status1;
    }
}

class Program
{
    static List<Order> orderList = new List<Order>();
    static List<Order> orderInProgress = new List<Order>();
    static Dictionary<int, Order> orderDictionary = new Dictionary<int, Order>();
    static Queue<Order> orderQueue = new Queue<Order>();
    static Hashtable orderHashtable = new Hashtable(StringComparer.OrdinalIgnoreCase);

    public static void Main(string[] Arg)
    {
        bool running = true;
        do
        {
            Console.WriteLine("\n1. Add Order");
            Console.WriteLine("2. Process next Order.");
            Console.WriteLine("3. Display High value order (>5000).");
            Console.WriteLine("4. Search Order with Order Id.");
            Console.WriteLine("5. Display All Order.");
            Console.WriteLine("6. Display in-Progress Order.");
            Console.WriteLine("7. Display Pending Order.");
            Console.WriteLine("8. Exit.");

            Console.WriteLine("Select your Choice: ");
            string choice = Console.ReadLine() ?? "";

            switch (choice)
            {
                case "1":
                    AddOrder();
                    break;
                case "2":
                    ProcessNextOrder();
                    break;
                case "3":
                    DisplayHighValue();
                    break;
                case "4":
                    SearchWithOrderId();
                    break;
                case "5":
                    DisplayAllOrder();
                    break;
                case "6":
                    DisplayInProgress();
                    break;
                case "7":
                    DisplayPendingOrder();
                    break;
                case "8":
                    running = false;
                    Console.WriteLine("Exiting...\n");
                    break;
                default:
                    Console.WriteLine("Please enter valid choice.\n");
                    break;
            }
        } while (running);
    }

    static void AddOrder() { }
    static void ProcessNextOrder() { }
    static void DisplayHighValue() { }
    static void SearchWithOrderId() { }
    static void DisplayAllOrder() { }
    static void DisplayInProgress() { }
    static void DisplayPendingOrder() { }

}
