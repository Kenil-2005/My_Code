using System;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeAnalysis;

public enum employeeType
{
    Permanent,
    Contract
}

public class SalaryException : Exception
{
    public SalaryException(string message) : base(message) { }
}

public interface GenerateReport
{
    void generateReport(List<Employee> employeesList);
}

public class CalculateReport : GenerateReport
{
    public void generateReport(List<Employee> employeesList)
    {
        Console.WriteLine("========================Employee Data========================");
        foreach (var emp in employeesList)
        {
            emp.CalculateSalary();
            Console.WriteLine($"Id: {emp.employeeId} | Name: {emp.employeeName} | Type: {emp.type} | Salary: {emp.totalSalary}");
        }
    }
}


public abstract class Employee
{
    public int employeeId;
    public string employeeName;
    public int totalSalary;
    public employeeType type;

    public abstract void CalculateSalary();

    public Employee(int id, string name, employeeType Type)
    {
        employeeId = id;
        employeeName = name;
        type = Type;
    }
}

public class PermanentEmployee : Employee
{
    public int salary;
    public int bonus;

    public PermanentEmployee(int id, string name, int Salary, int Bonus) : base(id, name, employeeType.Permanent)
    {
        if (Salary < 0 || Bonus < 0)
            throw new SalaryException("Salary or Bonus cannot be negative!");
        salary = Salary;
        bonus = Bonus;
    }
    public override void CalculateSalary()
    {
        totalSalary = salary + bonus;
    }

}

public class ContractEmployee : Employee
{
    public int hoursRate;
    public int totalHours;

    public ContractEmployee(int id, string name, int TotalHours, int HoursRate) : base(id, name, employeeType.Contract)
    {
        if (TotalHours < 0 || HoursRate < 0)
            throw new SalaryException("Hours or hourly rate cannot be negative!");
        hoursRate = HoursRate;
        totalHours = TotalHours;
    }

    public override void CalculateSalary()
    {
        totalSalary = totalHours * hoursRate;
    }
}

class Program
{
    static List<Employee> employeesList = new List<Employee>();
    static GenerateReport report = new CalculateReport();
    public static void Main(string[] arg)
    {
        bool running = true;
        do
        {
            Console.WriteLine("\n1. Add Employee");
            Console.WriteLine("2. Display Employee");
            Console.WriteLine("3. Calculate Salary (Total Payroll)");
            Console.WriteLine("4. Generate Salary report");
            Console.WriteLine("5. Exit\n");

            Console.WriteLine("Enter your Choice: ");
            string choice = Console.ReadLine() ?? "";

            switch (choice)
            {
                case "1":
                    AddEmployee();
                    break;
                case "2":
                    DisplayEmployee();
                    break;
                case "3":
                    CalculatePayRoll();
                    break;
                case "4":
                    report.generateReport(employeesList);
                    break;
                case "5":
                    Console.WriteLine("Exiting...\n");
                    running = false;
                    break;
                default:
                    Console.WriteLine("Enter valide choice...\n");
                    break;
            }
        } while (running);
    }

    static void AddEmployee()
    {
        try
        {
            Console.WriteLine("\nEnter employee Id: ");
            if (!int.TryParse(Console.ReadLine(), out int inputId))
            {
                Console.WriteLine("Enter valid Id.");
                return;
            }
            if (employeesList.Any(emp => emp.employeeId == inputId))
            {
                Console.WriteLine("Employee already exist.");
                return;
            }

            Console.WriteLine("\nEnter employee name: ");
            string inputName = Console.ReadLine() ?? "";
            if (String.IsNullOrWhiteSpace(inputName))
            {
                Console.WriteLine("Name Cannot be Empty.\n");
                return;
            }
            if (inputName.Any(char.IsDigit))
            {
                Console.WriteLine("Name cannot contain numbers.\n");
                return;
            }

            Console.WriteLine("\nEnter employee type (0 for Permanete and 1 for Contract): ");
            if (!int.TryParse(Console.ReadLine(), out int inputType) || (inputType != 0 && inputType != 1))
            {
                Console.WriteLine("Please Select valide type.\n");
                return;
            }
            employeeType type = (employeeType)inputType;

            if (type == employeeType.Permanent)
            {
                Console.WriteLine("Enter Monthly salary: ");
                if (!int.TryParse(Console.ReadLine(), out int inputSalary))
                {
                    Console.WriteLine("Enter valid salary.");
                    return;
                }

                Console.WriteLine("Enter Employee Bonus: ");
                if (!int.TryParse(Console.ReadLine(), out int inputBonus))
                {
                    Console.WriteLine("Enter valid Bonus.");
                    return;
                }

                employeesList.Add(new PermanentEmployee(inputId, inputName, inputSalary, inputBonus));
                Console.WriteLine("Permanent Employee Added successfully.");
            }
            else
            {
                Console.WriteLine("Enter working Hours: ");
                if (!int.TryParse(Console.ReadLine(), out int inputHours))
                {
                    Console.WriteLine("Enter valid hours.");
                    return;
                }

                Console.WriteLine("Enter rate per hours: ");
                if (!int.TryParse(Console.ReadLine(), out int inputRate))
                {
                    Console.WriteLine("Enter valid rate.");
                    return;
                }
                employeesList.Add(new ContractEmployee(inputId, inputName, inputHours, inputRate));
                Console.WriteLine("Contract Employee Added successfully.");
            }
        }
        catch (SalaryException ex)
        {
            Console.WriteLine($"\nValidation Error: {ex.Message}");
        }


    }

    static void DisplayEmployee()
    {
        if (!employeesList.Any())
        {
            Console.WriteLine("No record Found.\n");
        }
        else
        {
            foreach (var emp in employeesList)
            {
                Console.WriteLine($"\nId: {emp.employeeId} | Name: {emp.employeeName} | Type: {emp.type}");
            }
        }
    }
    static void CalculatePayRoll()
    {
        if (!employeesList.Any())
        {
            Console.WriteLine("No record Found.\n");
        }
        else
        {
            int totalPayRoll = 0;
            foreach (var emp in employeesList)
            {
                emp.CalculateSalary();
                Console.WriteLine($"{emp.employeeName} salary {emp.totalSalary}");
                totalPayRoll = totalPayRoll + emp.totalSalary;
            }
            Console.WriteLine($"\nTotal PayRoll is : {totalPayRoll}\n");
        }
    }

}