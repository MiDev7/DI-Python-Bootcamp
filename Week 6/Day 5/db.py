from email import header
import psycopg2
import json
import os
from tabulate import tabulate


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Lionirod77#'
DATABASE = 'Menu'

class MenuItem:

    def __init__(self,name,item_price):
        self.name = name
        self.item_price = item_price
    
    def all():
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = "SELECT * FROM menu;"
        cursor.execute(query)
        results = cursor.fetchall()
        connection.close()
        print(tabulate(results, headers= ['item_id','item_name','item_price']))


    def save(self):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = "INSERT INTO menu(item_name,item_price) VALUES (%s,%s) RETURNING * ;"
        result = cursor.execute(query, (self.name,self.item_price))
        connection.commit()
        connection.close()
        return True , result
       

    def delete(self):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = """
            DELETE FROM menu
            WHERE item_name = (%s) ;
        """
        result = cursor.execute(query,str(self.name))
        connection.commit()
        connection.close()
        return result

    def update(self,new_name,new_item_price):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = """
            UPDATE menu
            SET item_name = (%s),
                item_price = (%s)
            WHERE item_name = (%s) 
        """
        result = cursor.execute(query, [new_name,new_item_price, self.name])
        connection.commit()
        connection.close()
        return result
    @staticmethod
    def get_by_name(name):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        query = """
            SELECT * FROM menu
            WHERE item_name = (%s);
        """
        cursor.execute(query,[name])
        results = cursor.fetchall()
        result = results[0]
        connection.close()
        #
        return MenuItem(result[1],result[2])

        
        

# item.update('Veggie Burger', 37)
# item2 = MenuItem.get_by_name('Nothing')
# print(item2)
# item2.price = 15
# item2.update(item2.name,15)

# MenuItem.all()

# MenuItem.save('Chicken SandWich', 20)
# MenuItem.save('Cheese Pizza', 30)
# MenuItem.save('Cheese Cake', 25)
        


