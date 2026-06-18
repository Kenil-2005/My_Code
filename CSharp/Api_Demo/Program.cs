using System.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore;
using User_Model;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Console Api v1");
    options.RoutePrefix = "swagger";
});


string connStr = @"Data Source=.\SQLExpress;Integrated Security=True;Pooling=False;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Name=vscode-mssql;Application Intent=ReadWrite;Command Timeout=30";

app.MapGet("/api/user", async () =>
{
    List<User> userList = new List<User>();
    try
    {
        using (SqlConnection conn = new SqlConnection(connStr))
        {
            string query = "select user_id,first_name,last_name,email from [KenilDatabase].[dbo].[user_table]";
            using (SqlCommand cmd = new SqlCommand(query, conn))
            {
                await conn.OpenAsync();
                using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        userList.Add(new User
                        {
                            id = Convert.ToInt32(reader["user_id"]),
                            First_Name = reader["first_name"].ToString() ?? "",
                            Last_Name = reader["last_name"].ToString() ?? "",
                            Email = reader["email"].ToString() ?? "",
                        });
                    }
                }
            }
        }
        return Results.Ok(userList);
    }
    catch (Exception ex)
    {
        return Results.Problem($"Database Error ${ex.Message}");
        // Console.WriteLine($"DataBase Error: {ex.Message}");
    }
});

app.MapPost(
    "/api/users",
    async (User newUser, ILogger<Program> logger) =>
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                string query =
                    @"INSERT INTO [KenilDatabase].[dbo].[user_table] (first_name, last_name, email) 
                    VALUES(@First_Name, @Last_Name, @Email);
                    SELECT CAST(SCOPE_IDENTITY() as int);";

                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    await conn.OpenAsync();

                    cmd.Parameters.Add("@First_Name", SqlDbType.NVarChar).Value = newUser.First_Name ?? (object)DBNull.Value;
                    cmd.Parameters.Add("@Last_Name", SqlDbType.NVarChar).Value = newUser.Last_Name ?? (object)DBNull.Value;
                    cmd.Parameters.Add("@Email", SqlDbType.NVarChar).Value = newUser.Email;

                    var newId = (int?)await cmd.ExecuteScalarAsync();
                    if (newId.HasValue)
                    {
                        newUser.id = newId.Value;
                        return Results.Created($"/api/user/{newUser.id}", newUser);
                    }
                    return Results.Problem("Failed to retrieve the new user identity.", statusCode: 500);
                }
            }
        }
        catch (Exception ex)
        {
            // If the database fails, return an HTTP 500 error code with the message
            return Results.Problem($"DataBase Error: {ex.Message}");
        }
    }
);

Console.WriteLine("Server starting... Open http://localhost:5000/swagger");
app.Run();