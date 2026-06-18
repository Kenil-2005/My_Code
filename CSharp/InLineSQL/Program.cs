using System;
using System.ComponentModel.DataAnnotations;
using System.Data;
using Microsoft.Data.SqlClient;

namespace inLineSQL;

class Program
{
    private static readonly string connStr = @"Server=.\SQLEXPRESS;Integrated Security=True;Encrypt=True;TrustServerCertificate=True;";
    public static void Main(string[] args)
    {
        // Connection Database insert operation
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();

                string query = "insert into [KenilDataBase].[dbo].[user_table](first_name,last_name,email) values ('krishna','patel','krishnapatel@gmail.com')";
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
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


        // Connection Database Select operation
        try
        {

            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                Console.WriteLine("Connetion Opened...\n");
                Console.WriteLine("\nGet Data from connection database.\n");

                string query = "select * from [KenilDatabase].[dbo].[user_table]";
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    // cmd.ExecuteNonQuery();
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine($"Id: {reader["user_id"]} | first name: {reader["first_name"]} | last Name: {reader["last_name"]} | Email: {reader["email"]}");
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try1: {ex.Message}");
        }



        // Dis-Connection Database Delete operation
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                Console.WriteLine("\nGet Data from dis-connection database.\n");
                string query = "select * from [KenilDatabase].[dbo].[user_table]";
                using (SqlDataAdapter adapter = new SqlDataAdapter(query, conn))
                {
                    SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
                    DataSet ds = new DataSet();

                    adapter.Fill(ds, "[KenilDatabase].[dbo].[user_table]");

                    DataTable dt = ds.Tables["[KenilDatabase].[dbo].[user_table]"] ?? new();

                    foreach (DataRow row in dt.Rows)
                    {
                        if (row["first_name"]?.ToString() == "krishna")
                        {
                            row.Delete();
                        }
                    }

                    adapter.Update(ds, "[KenilDatabase].[dbo].[user_table]");
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try4: {ex.Message}");
        }


        // Dis-Connection Database Select operation

        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                conn.Open();
                Console.WriteLine("\nGet Data from dis-connection database.\n");
                string query = "select * from [KenilDatabase].[dbo].[user_table]";
                using (SqlDataAdapter adapter = new SqlDataAdapter(query, conn))
                {
                    SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
                    DataSet ds = new DataSet();

                    adapter.Fill(ds, "[KenilDatabase].[dbo].[user_table]");

                    DataTable dt = ds.Tables["[KenilDatabase].[dbo].[user_table]"] ?? new();

                    foreach (DataRow row in dt.Rows)
                    {
                        Console.WriteLine($"Id: {row["user_id"]} | first name: {row["first_name"]} | last Name: {row["last_name"]} | Email: {row["email"]}");
                    }

                    adapter.Update(ds, "[KenilDatabase].[dbo].[user_table]");
                }
            }

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Database Error try3: {ex.Message}");
        }

    }
}
