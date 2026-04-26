import matplotlib.pyplot as plt

# Data for temperatures
temp = [30, 34, 35, 32, 38, 26, 29, 45, 42, 32, 40, 33, 36, 34, 36]

# Create a histogram with 4 bins
plt.hist(temp, bins=4, edgecolor='black', color='skyblue')

# Add title and labels
plt.title('Histogram of Average Temperature')
plt.xlabel('Temperature Ranges (°C)')
plt.ylabel('Frequency')

# Display the histogram
plt.show()
