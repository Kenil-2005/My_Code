import statistics
import numpy as np

data = [12,18,25,36,15,21]
np.array(data)
mean = np.mean(data)

print(f"mean of the array is {mean}")   

deviation = statistics.stdev(data)
print(f"standerd deviation is : {deviation}")