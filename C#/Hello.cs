// Standard Formal way  
// using System;
// ﻿namespace TourOfCsharp;
// class Program
// {
//     static void Main()
//     {
//         // This line prints "Hello, World" 
//         Console.WriteLine("Hello, World");
//     }
// }

// This line prints "Hello, World" 
// Console.WriteLine("Hello, World");

/** Contains(find and Write Boolean value.If Present then True if Not then False)  */
// string songLyrics = "You say goodbye, and I say hello";
// Console.WriteLine(songLyrics.Contains("goodbye"));
// Console.WriteLine(songLyrics.Contains("greetings"));

// /** Tuple */
// var pt = (X: 1, Y: 2);

// var slope = (double)pt.Y / (double)pt.X;
// Console.WriteLine($"A line from the origin to the point {pt} has a slope of {slope}.");
// /**You can also create a new tuple that's a modified copy of the original using a with expression*/
// var pt2 = pt with { Y = 10 };
// Console.WriteLine($"The point 'pt2' is at {pt2}.");

// List<string> names = ["<name>", "Ana", "Felipe"];
// foreach (var name in names)
// {
//     Console.WriteLine($"Hello {name.ToUpper()}!");
// }

List<int> fibonacciNumbers = [1, 1];

var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];

fibonacciNumbers.Add(previous + previous2);

foreach (var item in fibonacciNumbers)
{
    Console.WriteLine(item);
}