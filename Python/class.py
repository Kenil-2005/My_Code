import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('imdb_data.csv')
df.columns
print(df.head())
profit = pd.Series(df['revenue'] - df['budget'],name = 'profit')
df['profit'] = profit
df1=df.loc[:,['id','imdb_id','belongs_to_collection','budget','revenue','profit','genres','original_language','original_title', 'production_companies','cast', 'Keywords']]
print(df1.head())
df2=df1.sort_values (by='profit',ascending=False)
df3=df2.head(1)
print(df3)
series_keywords = df3['Keywords']
series_keywords.loc[0][1]['id']

