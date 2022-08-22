my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
print(my_list)
sum = 0
for i in my_list:
    try:   
        sum = sum + my_list[i]
        print (sum)
    except: 
        pass