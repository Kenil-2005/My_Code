import pandas as pd
import matplotlib.pyplot as plt

 # Read the CSV file into a pandas DataFrame
try:
    df = pd.read_csv('product_stocks.csv')
except FileNotFoundError:
    print("Error: 'product_stocks.csv' not found. Please ensure the file exists in the same directory.")
    exit()

 # Extract product names and stock levels
product_names = df['ProductName']
stock_levels = df['Stock']

 # Create the pie chart
plt.figure(figsize=(10, 8)) 
plt.pie(stock_levels, labels=product_names, autopct='%1.1f%%', startangle=90)

 # Add a title to the pie chart
plt.title('Product Stock Distribution')

 # Ensure the pie chart is a perfect circle
plt.axis('equal')

 # Display the chart
plt.show()