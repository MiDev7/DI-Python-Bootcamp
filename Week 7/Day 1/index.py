from sys import byteorder
from turtle import color
import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt 


# lst = np.array([2, 4, 6, 8, 13, 45 , 1, 50])
# lst1 = np.array([2, 10, 6, 8, 4, 2 , 1, 1])

# def array(lst,array2):
#     print(f"This is the smallest value in the array: {np.amin(lst)}")
#     print(f"This is the biggest value in the array: {np.amax(lst)}")
#     print(f"This is the standard deviation of the array: {np.std(lst, dtype=np.float64)}")
#     print(f"This is the product of the array: {np.prod(lst)}")
#     print(f"This is the dot product of the arrays: {np.dot(lst,array2)}")
#     print(f"This is the result of the array with -4: {lst -4}")


# array(lst,lst1)

# df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
# print(df.iloc[50:51])

# df = df.iloc[50:61]
# df = df[df.index % 2 == 0] 
# df =df[['species','petal_length','petal_width']]
# print(df) 

# print(df.groupby('species').agg(['median','sum']))


# Exercise 
array = np.random.randint(75,size=100)
array = array.reshape(50,2)
x_axis = array[:,0]
y_axis = array[:,1]


# plt.scatter(x_axis,y_axis,color='yellow')
# plt.xlabel('X axis')
# plt.ylabel('Y axis')
# plt.grid()
# plt.show()

fig, ax= plt.subplots(figsize=(13,5))
ax.hist(x_axis, color='gray', label='x',edgecolor ='black')
ax.hist(y_axis, color='purple',label='y', edgecolor ='white')
plt.legend()
plt.show()
