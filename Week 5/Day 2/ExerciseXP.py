# Exercise 1
from turtle import speed


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
Bengal1 = Bengal('Gryph',5)
Chartreux1 = Chartreux('Fluffy',7)
Siamese1 = Siamese('Misty',4) 

all_cats = [Bengal1,Chartreux1,Siamese1]
sara_pets = all_cats
pet = Pets(all_cats)
pet.walk()

# Exercise 2

class Dog():
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark (self):
        bark = print(f'{self.name} is barking')
        return bark
    def run_speed(self):
        speed = self.weight/self.age*10
        return speed
    def fight(self,other_dog):
        self.other_dog = other_dog
        product = self.weight * self.run_speed() 
        product1 = other_dog.weight * other_dog.run_speed()
        if product > product1 :
            print(f'{self.name} has won the fight')
        else:
            print(f'{self.other_dog.name} has won the fight')

Dog1 = Dog('Borky', 4 , 40)
Dog2 = Dog('Thor',6, 50 )
Dog3 = Dog('Hulk', 7, 60)

Dog1.bark()
Dog2.fight(Dog3)



# Exercise 3