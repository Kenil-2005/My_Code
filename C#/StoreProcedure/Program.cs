using System;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Microsoft.Data.SqlClient;

namespace inLineSQL;

class Program
{
    private static readonly string connStr = @"Data Source=.\SQLExpress;Initial Catalog=KenilDataBase;Integrated Security=True;Pooling=False;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Name=vscode-mssql;Application Intent=ReadWrite;Command Timeout=30";
    public static void Main(string[] args)
    {

        bool running = true;
        do
        {
            Console.WriteLine("\n1. Insert into table.");
            Console.WriteLine("2. Update into table.");
            Console.WriteLine("3. Delete from table.");
            Console.WriteLine("4. Get data from table(Connection).");
            Console.WriteLine("5. Get data from table(Dis-Connection).");
            Console.WriteLine("6. Exit.\n");

            Console.WriteLine("Select your choice: ");
            string choice = Console.ReadLine() ?? "";

            switch (choice)
            {
                case "1":
                    InsertDataConnect();
                    break;
                case "2":
                    UpdateDataConnect();
                    break;
                case "3":
                    DeleteDataConnect();
                    break;
                case "4":
                    GetDataConnect();
                    break;
                case "5":
                    GetDataDisConnect();
                    break;
                case "6":
                    running = false;
                    Console.WriteLine("Exiting...\n");
                    break;
                default:
                    Console.WriteLine("Please enter valid choice(1-6).\n");
                    break;
            }

        } while (running);


    }


    // Connection Database insert operation
    public static void InsertDataConnect()
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();

                using (SqlCommand cmd = new SqlCommand("usp_employee_set_ppoc", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("FirstName", "Divya");
                    cmd.Parameters.AddWithValue("LastName", "Patel");
                    cmd.Parameters.AddWithValue("Email", "divyapatel@gmail.com");
                    cmd.Parameters.AddWithValue("Salary", 34000);
                    SqlParameter sqlParameter = new SqlParameter("@insertedId", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };

                    cmd.Parameters.Add(sqlParameter);


                    int RowAffected = cmd.ExecuteNonQuery();

                    if (RowAffected > 0)
                    {
                        Console.WriteLine($"{RowAffected} Rows Affected.\n");
                    }
                    else
                    {
                        Console.WriteLine($"{RowAffected} Rows Affected.\n");
                    }
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"DataBase error try2: {ex.Message}");
        }
    }



    // Dis-Connection Database Delete operation
    public static void UpdateDataConnect()
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();

                using (SqlCommand cmd = new SqlCommand("usp_employee_update_ppoc", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@InputId", 1);
                    cmd.Parameters.AddWithValue("FirstName", "Divya");
                    cmd.Parameters.AddWithValue("LastName", "Patel");
                    cmd.Parameters.AddWithValue("Email", "divyapatel@gmail.com");
                    cmd.Parameters.AddWithValue("Salary", 34000);

                    int RowAffected = cmd.ExecuteNonQuery();

                    if (RowAffected > 0)
                    {
                        Console.WriteLine($"{RowAffected} Rows Affected.\n");
                    }
                    else
                    {
                        Console.WriteLine($"{RowAffected} Rows Affected.\n");
                    }
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"DataBase error try2: {ex.Message}");
        }
    }
    public static void DeleteDataConnect()
    {
        try
        {
            Console.WriteLine("Enter id that you want to delete: ");
            if (!int.TryParse(Console.ReadLine(), out int inputId))
            {
                Console.WriteLine("Enter valid id.\n");
            }

            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("usp_employee_delete_ppoc", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("DeleteId", inputId);

                    int RowAffected = cmd.ExecuteNonQuery();
                    if (RowAffected > 0)
                    {
                        Console.WriteLine($"{RowAffected} rows affected.\n");
                    }
                    else
                    {
                        Console.WriteLine($"{RowAffected} rows affected.\n");
                    }
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try4: {ex.Message}");
        }
    }

    // Connection Database Select operation
    public static void GetDataConnect()
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                Console.WriteLine("Connetion Opened...\n");
                Console.WriteLine("\nGet Data from connection database.\n");

                using (SqlCommand cmd = new SqlCommand("usp_employee_get_ppoc", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    // cmd.ExecuteNonQuery();
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine($"Id: {reader["Employee_Id"]} | first name: {reader["First_Name"]} | last Name: {reader["Last_Name"]} | Email: {reader["Email"]} | Salary: {reader["Salary"]}");
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try1: {ex.Message}");
        }
    }


    // Dis-Connection Database Select operation
    public static void GetDataDisConnect()
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                Console.WriteLine("\nGet Data from dis-connection database.\n");
                using (SqlCommand cmd = new SqlCommand("usp_employee_get_ppoc", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {
                        // cmd.CommandType = CommandType.StoredProcedure;
                        SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
                        DataSet ds = new DataSet();

                        adapter.Fill(ds, "Employee");

                        DataTable dt = ds.Tables["Employee"] ?? new();

                        foreach (DataRow row in dt.Rows)
                        {
                            Console.WriteLine($"Id: {row["Employee_Id"]} | first name: {row["First_Name"]} | last Name: {row["Last_Name"]} | Email: {row["Email"]} | Salary: {row["Salary"]}");
                        }

                        adapter.Update(ds, "Employee");
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try3: {ex.Message}");
        }
    }
}
