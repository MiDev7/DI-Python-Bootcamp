# Exercise 1
my_fav_numbers = set()
my_fav_numbers.add(4)
my_fav_numbers.add(5)
my_fav_numbers.add(12)
my_fav_numbers.add(14)
my_fav_numbers.add(15)
my_fav_numbers.add(77)
my_fav_numbers.add(7)
my_fav_numbers.remove(7)
friend_fav_numbers = set()
friend_fav_numbers = {60, 45, 202, 53, 777}
our_fav_numbers = friend_fav_numbers.union(my_fav_numbers)  
print(our_fav_numbers)

# Exercise 2
# It is not impossible to add a value to a tuple

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

# Exercise 4
# Float have decimal places whereas integer does not have decimal places
sequence = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

# Exercise 5
numbers = range(1,21)
for number in numbers:
    print(number)

# Exercise 6
while 1 == 1:
    name = input("Input your name: ")
    if name == "Mikaia":
        break
    else:
        continue

# Exercise 7
fruits =  input("Input your favorite fruit(s): ")
favFruits = list(fruits.split(","))

user = input("Input your favourite fruit: ")
if user in favFruits:
    print("You chose one of your favorite fruits! Enjoy!")
else : 
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8
# toppings = []
# topping = ("Input a topping: ")
# toppings.append(topping)
