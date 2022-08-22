# for line in open('nameslist.txt'):
#     print(line)

# f = open('nameslist.txt', 'r')
# print(f.readlines()[4])

# f = open('nameslist.txt', 'r')
# print(f.read(5))

# f = open('nameslist.txt', 'r')
# print((f.readlines()).split())
# f.close()


# Darth = 0
# Lea = 0
# Luke = 0
# f = open('nameslist.txt','r')
# while True :
#     line = f.readline()
#     line = line.strip('\n')
#     if (line == "Darth"):
#         Darth += 1
#     elif (line == "Lea"):
#         Lea += 1
#     elif (line == "Luke"):
#         Luke += 1
#     else :
#         break
# print(f'There is {Darth} Darth, {Lea} Lea and {Luke} Luke')

with open('nameslist.txt', 'r') as file:
    text = file.read()

with open('nameslist.txt', 'w') as file:
    # Delete
    new_text = text.replace('Mikaia', '')
    # Write
    file.write(new_text)

f = open('nameslist.txt','r')

