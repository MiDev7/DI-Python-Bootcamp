from enum import auto
import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt 
from dateutil.parser import parse
# def array_generator():
#     start = input('Input the beginning of your array: ')
#     stop = input('Input the end of your array: ')
#     step = input('Input ')
#     np.arange()


# Task 2
# a = np.array([1,2,3,np.nan,5,6,7,np.nan])
# a = a[np.logical_not(np.isnan(a))]
# print(a)

# Task 3
# array = np.random.randint(100,size=30)
# array = array.reshape(5,6)
# print(array)

# print(np.amax(array, axis=1))

# Task 4


# Task 5
# series = pd.Series(['01 Jan 2020', '10-19-2020', '20150303', '2013/04/04', '2012-05-05', '2013-06-06T12:20'])
# series = series.map(lambda x: parse(x))
# print(series)
# print("Day of month:")
# print(series.dt.day.tolist())
# print("Day of year:")
# print(series.dt.dayofyear.tolist())
# print("Week number:")
# print(series.dt.isocalendar().week.tolist())
# print("Day of week:")
# print(series.dt.weekday.tolist())


# Task 6
df =  pd.read_csv("https://raw.githubusercontent.com/selva86/datasets/master/Cars93_miss.csv")
df.rename(columns= {"Type":"TypeofCar"}, inplace=True)
print(df.info())
print("change successfully made")
print(df.head(10))
print(df.isnull().sum().idxmax())