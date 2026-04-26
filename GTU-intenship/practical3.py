import pandas as pd 
import numpy as np 

dict1 = {
    "name" : ['harry','rohan','skillf','shubh'],
    "marks" : [92,34,24,17],
    "city" : ['ranpur','kolkata','bareilly','antarctica']
}

df = pd.DataFrame(dict1)

for i in range(len(df)):
    # print(i)
    if(df['marks'][i] > 33):
        print(f"{df['name'][i]} {df['marks'][i]} pass")
    else:
        print(f"{df['name'][i]} {df['marks'][i]}  fail")