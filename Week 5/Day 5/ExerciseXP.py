# Exercise 1
import random as r
from typing_extensions import final

f = open ('sowpods.txt','r')
# def get_words_from_file():
#     file = f.readlines()
#     random = r.choices(file)
#     return random

# def get_random_sentence(length):
#     file = f.readlines()
#     random_word = r.sample(file, length)
#     final_sentence = ''
#     for i in random_word: 
#         final_sentence = f'{final_sentence} ' + i
#         final_sentence = final_sentence.rstrip('\n')
#     print(final_sentence)




# get_words_from_file()

# get_random_sentence(int(input('input a number: ')))


file = f.readlines()
length = int(input('input a number: '))
random_word = r.sample(file, length)
sentence = ' '.join(random_word).rstrip('\n')
print(sentence)