from operator import truediv
from db import MenuItem as mi

def load_manager():
    client = mi()


def show_user_menu():
    user_input = input("""MENU
            (a) Add an Item
            (b) Delete and Item
            (v) View the menu
            (x) Exit
            Input your request here: """)

    if user_input == "a":
        def add_item_to_menu():
            item_name = input("Input item's name: ")
            item_price = input("Input item's price: ")
            item = mi(item_name,item_price)
            if item.save():
                print("item was added successfully.")
            else : 
                print("Error")

        add_item_to_menu()

    elif user_input == "b":
        def remove_item_from_menu():
            item_name = input("Input item's name: ")
            item_price = input("Input item's price: ")
            item = mi(item_name,item_price = None)
            deleted = item.delete()
            if deleted :
                try:
                    result = mi.get_by_name(item_name)
                    print(result)
                    pass
                except:                     
                    print("Error")

                print("Your item has been successfully removed")

        remove_item_from_menu()
    
    elif user_input == "v":
        def show_restaurant_menu():
            mi.all()
        show_restaurant_menu()

    elif user_input == "x":
        def exit():
            mi.all()
            print("Good Bye")

        exit()


show_user_menu()

                
