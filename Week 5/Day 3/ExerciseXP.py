# Exercise 1
# integer = -20
# print(abs(integer))

# float = -30.335
# print(abs(float))

# complex = 20 - 15j
# print(abs(complex))

# Exercise 2
from traceback import print_tb


class Currency:

    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    

    def __str__(self):
        return f"{self.amount} {self.currency}s"
    def __int__(self):
        return self.amount 

    def __add__(self, other):
        if isinstance(other,int):
            return self.amount + other
        elif self.currency == other.currency:
            return self.amount + other.amount
        elif self.currency != other.amount:
            raise Exception("TypeError: Cannot add between Currency type <dollar> and <shekel>")
    def __iadd__(self, other):
        if isinstance(other,int):
            return f"{self.amount + other} dollars"
        else:
            return f"{self.amount + other.amount} dollars"
    def __repr__(self):
        print(f'{self.amount} {self.currency}s')

    
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(c1 + 5)
print(c1 + c3)
c1+=5

print(c1)





