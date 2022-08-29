from db import MenuItem as Mi
def load_manager():
    client = Mi()


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
            item = Mi(item_name,item_price)
            if item.save():
                print("item was added successfully.")
            else : 
                print("Error")

        add_item_to_menu()

    elif user_input == "b":
        def remove_item_from_menu():
            item_name = input("Input item's name: ")
            item = Mi(item_name,item_price = 0)
            deleted = item.delete()
            if deleted :
                try:
                    result = Mi.get_by_name(item_name)
                    print(result)
                    pass
                except:                     
                    print("Error")

            
            print("Your item has been successfully removed")

        remove_item_from_menu()
    
    elif user_input == "v":
        def show_restaurant_menu():
            Mi.all()
        show_restaurant_menu()

    elif user_input == "x":
        def exit():
            Mi.all()
            print("Good Bye")

        exit()


show_user_menu()

                
