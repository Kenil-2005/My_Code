# # Q-1) Write a program for checking the number is prime or not

# num = int(input("Enter any number\n"))
# flag = 0

# if num < 2:
#     print("The number is not prime number")
# else:
#     for i in range(2,int(num**0.5)+1):
#         if (num % i == 0):
#             flag = 1
#             break
#         else:
#             continue
#     if (flag == 0):
#         print("The number is prime number")
#     else:
#         print("The number is not prime")
   

# # Q-2) Write a program to print fibonacci series to given number

# # Take the number from the user
# num = int(input("Enter any number\n"))
# a = 0
# b = 1
# print("Fibonacci Series")
# # print first two number
# print(a)
# print(b)
# # print remaining number 
# while ((num-2) > 0):
#     c = a + b   # add previous two number
#     a = b
#     b = c
#     num = num - 1
#     print(c)


# # Q-3) Write a program to print following patterns. 
# # 1) 
# # * 
# # * * 
# # * * * 
# # * * * * 

# num = int(input("Enter any number  of rows\n"))

# for i in range(0,num):
#     for j in range(i+1):
#         print("*",end = " ")
#     print()
 
    
# # 2) 
# # $ $ $ $ 
# # $ $ $ 
# # $ $ 
# # $ 

# num = int(input("Enter any number  of rows\n"))

# for i in range(num, 0, -1):  # Start at `num`, go down to `1`, in steps of `-1`
#     for j in range(i):  # Print `i` number of "$" in each row
#         print("$", end=" ")
#     print()  # Move to the next line after each row


# # 3) 
# # # # # # # 
# #   # # # 
# #     # 
# #   # # # 
# # # # # # #

# num = int(input("Enter the number of rows for the top half\n"))

# # Top half of the diamond
# for i in range(num, 0, -1):
#     print(" " * (num - i), end="")
#     for j in range(i):
#         print("#",end = " ")
#     print()

# # Bottom half of the diamond
# for i in range(2, num + 1):
#     print(" " * (num - i), end="")
#     for j in range(i):
#         print("#",end = " ")
#     print()


# # Q-4) Write a program to print current date and time

# from datetime import datetime

# # Get the current date and time
# current_datetime = datetime.now()

# # Print the current date and time
# print("Current date and time:", current_datetime)


# # Q-5) Write a program to read data from a text file

# # Open the file in read mode
# with open("example.txt", "r") as file:
#     # Read the contents of the file
#     data = file.read()
#     # Print the data
#     print(data)


# # Q-6) Write a program that find the factorial of a natural number n

# # Get input from the user
# n = int(input("Enter a natural number: "))

# # Ensure n is a non-negative integer
# if n < 0:
#     print("Factorial is not defined for negative numbers.")
# else:
#     factorial = 1
#     for i in range(1, n + 1):
#         factorial *= i
#     print(f"The factorial of {n} is {factorial}")


# # Q-7) write a python code to demonstrate hashing trick

# # Example document
# text = "The quick brown fox jumps over the lazy dog"

# # Define the number of buckets (fixed size for hashed indices)
# num_buckets = 10

# # Tokenize the text
# words = text.split()

# # Apply hashing trick to convert words into fixed-size indices
# hashed_indices = [hash(word) % num_buckets for word in words]

# # Display each word and its corresponding hashed index
# for word, index in zip(words, hashed_indices):
#     print(f"Word: '{word}' - Hashed Index: {index}")
    

# # Q-8) Write a python code to demonstrate the concept of skewness and kurtosis

# import numpy as np
# from scipy.stats import skew,kurtosis

# # Simple datasets
# data_normal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Normal distribution (symmetric)
# data_positive_skew = [1, 1, 2, 2, 3, 4, 5, 10, 15, 20]  # Positive skew
# data_negative_skew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]  # Negative skew

# # Function to calculate and display skewness and kurtosis
# def analyze_data(data, label):
#     print(f"{label}:")
#     print(f"  Skewness: {skew(data)}")
#     print(f"  Kurtosis: {kurtosis(data, fisher=True) + 3}")  # Adjusting to normal kurtosis

# # Analyze each dataset
# analyze_data(data_normal, "Normal Distribution")
# analyze_data(data_positive_skew, "Positive Skew")
# analyze_data(data_negative_skew, "Negative Skew")


# # Q-9) Write a program to access data from web

# import requests 
# from bs4 import BeautifulSoup

# # URL of the web page to access
# url = 'https://example.com/news'

# # Sending a GET request to the URL
# response = requests.get(url)

# # Check if the request was successful
# if response.status_code == 200:
#     # Parse the content of the page
#     soup = BeautifulSoup(response.text, 'html.parser')

#     # Find all article titles (modify the selector based on the actual website structure)
#     titles = soup.find_all('h2', class_='article-title')

#     # Print each title
#     for title in titles:
#         print(title.get_text(strip=True))
# else:
#     print(f"Failed to retrieve data. Status code: {response.status_code}")


# # Q-10) Write a small code to perform following slicing, dicing, concatenation, transformation 

# import pandas as pd

# # Sample data
# data1 = {'A': [1, 2, 3, 4], 'B': [5, 6, 7, 8]}
# data2 = {'A': [9, 10, 11, 12], 'B': [13, 14, 15, 16], 'C': [17, 18, 19, 20]}

# df1 = pd.DataFrame(data1)
# df2 = pd.DataFrame(data2)

# # Slicing: Select specific rows and columns
# sliced_df = df1.loc[1:3, 'A':'B']
# print("Sliced DataFrame:\n", sliced_df)

# # Dicing: Filter rows based on a condition
# diced_df = df2[df2['B'] > 13]
# print("\nDiced DataFrame:\n", diced_df)

# # Concatenation: Combine two DataFrames along rows
# concatenated_df = pd.concat([df1, df2], ignore_index=True)
# print("\nConcatenated DataFrame:\n", concatenated_df)

# # Transformation: Apply a function to transform data
# transformed_df = df1.map(lambda x: x * 2)
# print("\nTransformed DataFrame:\n", transformed_df)


# # Q-11) Write a code to draw pie chart

# import matplotlib.pyplot as plt

# # Sample data
# labels = ['Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade F']
# sizes = [20, 30, 25, 15, 10]  # Percentage or counts for each grade

# # Draw the pie chart
# # plt.figure(figsize=(8, 8))
# plt.pie(sizes, labels=labels, autopct='%1.1f%%')

# # Title and display
# plt.title('Distribution of Student Grades')
# plt.show()

# # Q-12) write a program to depict scatter plot

# import matplotlib.pyplot as plt

# # Sample data for student scores
# subject1_scores = [85, 90, 78, 92, 88, 76, 95, 89, 84, 91]
# subject2_scores = [82, 88, 74, 90, 85, 79, 93, 87, 83, 89]

# # Draw the pie chart
# plt.figure(figsize=(8,6))
# plt.scatter(subject1_scores, subject2_scores, color='blue', marker='o')

# # Labels and title
# plt.xlabel('Subject 1 Scores')
# plt.ylabel('Subject 2 Scores')
# plt.title('Scatter Plot of Student Scores in Two Subjects')
# plt.grid(True)

# # Display the plot
# plt.show()


# # Q-13) Write a program to input a string from user and count the vowel in it

# sample_string = str(input("Enter String: \n"))
# count = 0

# for i in sample_string:
#     if (i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u' or i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U'):
#         count = count + 1

# print(count)


# # Q-14) Write a program to read a image, obtain statistics about the a=image,and display on the screen

# import cv2
# import numpy as np
# from matplotlib import pyplot as plt

# # Load the image
# image_path = '/path/to/downloaded/image.png'
# image = cv2.imread(image_path)

# # Check if the image was loaded successfully
# if image is None:
#     print("Error: Image not loaded. Check the path.")
# else:
#     # Convert the image from BGR to RGB for Matplotlib display
#     image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

#     # Calculate statistics
#     mean, stddev = cv2.meanStdDev(image)
#     mean = mean.flatten()  # Flatten to simplify printing
#     stddev = stddev.flatten()

#     # Display statistics
#     print(f"Image Statistics:")
#     print(f"Dimensions: {image.shape}")
#     print(f"Mean (per channel): R={mean[2]:.2f}, G={mean[1]:.2f}, B={mean[0]:.2f}")
#     print(f"Standard Deviation (per channel): R={stddev[2]:.2f}, G={stddev[1]:.2f}, B={stddev[0]:.2f}")

#     # Display the image
#     plt.imshow(image_rgb)
#     plt.title('Image Display')
#     plt.axis('off')  # Hide axes
#     plt.show()


# # Q-15) Write a program to draw two lines on plot Both line should be depicted with different colour

# import matplotlib.pyplot as plt

# # Data for the two lines
# x_values = [0, 1, 2, 3, 4, 5]
# line1_y_values = [0, 2, 4, 6, 8, 10]  # Line 1 data
# line2_y_values = [10, 8, 6, 4, 2, 0]  # Line 2 data

# # Plotting the lines with different colors
# plt.plot(x_values, line1_y_values, color='blue', label='Line 1')  # Line 1 in blue
# plt.plot(x_values, line2_y_values, color='red', label='Line 2')   # Line 2 in red

# # Adding labels and legend
# plt.xlabel('X Values')
# plt.ylabel('Y Values')
# plt.title('Plot with Two Lines of Different Colors')
# plt.legend()

# # Display the plot
# plt.show()

# # Q-16) write a program to interchange the list elements on two position entered by user

# # Input: List of elements
# my_list = input("Enter the list elements separated by space: ").split()

# # Input: Positions to swap
# pos1 = int(input("Enter the first position to swap: "))
# pos2 = int(input("Enter the second position to swap: "))

#  # Check if the positions are valid
# if pos1 < 0 or pos2 < 0 or pos1 >= len(my_list) or pos2 >= len(my_list):
#     print("Invalid positions!")
    
#  # Swap the elements at the two positions
# my_list[pos1], my_list[pos2] = my_list[pos2], my_list[pos1]

# print("List after swapping elements:", my_list)

