import numpy as np
from matplotlib import pyplot as plt
import pandas as pd
from sklearn import linear_model

df = pd.read_csv('kidney_disease.csv')

print(df.info())
print("\n")
print(df.describe())


print(df.columns)

cdf = df[['id', 'age', 'bp', 'sg', 'al', 'su', 'bgr','bu', 'sc', 'sod', 'pot', 'hemo']]

cdf.hist()
plt.show()



