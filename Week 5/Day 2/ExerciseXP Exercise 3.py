import ExerciseXP
from ExerciseXP import Dog
class PetDog(Dog):
    def __init__(self, name, age, weight,trained):
        super().__init__(name, age, weight)
        self.trained = trained
        self.trained = False
    def train(self):
        print(Dog.bark())
        self.trained = True

