import pandas as pd
from sklearn import preprocessing
url = 'https://raw.githubusercontent.com/selva86/datasets/master/Cars93_miss.csv'
cars_df = pd.read_csv(url)

# label_encoder = preprocessing.LabelEncoder()
# cars_df['Make_encode']= label_encoder.fit_transform(cars_df['Make'])
  
# print(cars_df['Make_encode'])

# print(cars_df[['Make','Make_encode']])

means = cars_df[['Manufacturer', 'Price']].groupby('Manufacturer').median()
print(means)
cars_df['Manufacturer_transformed'] = cars_df['Manufacturer'].dropna().apply(lambda x: means.loc[x, "Price"])
print(cars_df[['Manufacturer', 'Manufacturer_transformed', 'Price']].head())