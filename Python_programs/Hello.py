# Variables in pythons
# name = "kenil"
# age = 19
# float = 19.0
# bool = True

# print(name)
# print(age)
# print(float)
# print(bool)

# # inputs in pythons
# 
# name = input("What is your name? ")
# print("name is : " + name)

# # Type-convertion
# old_age = input("Enter your old age")
# new_age = int(old_age) + 2
# print(new_age)

# # methods in String
# 
# name = "kenil pansara"
# print(name)
# print(name.upper())
# print(name.find('p'))
# print(name.count)

# #  in Keywords
# # use to find the element in the string and awriten bool value
# 
# name = "Kenil Pansara"
# print('P' in name)

# # Arithmetic operator
# 
# print("Addition of 4 and 5 is  : " + str(4 + 5))
# print("Subtraction of 4 and 2 is  : " + str(4 - 2))
# print("Multiplication of 4 and 2 is  : " + str(4 * 2))
# print("Division of 4 and 2 is  : " + str(4 / 2))
# print("Remender of 4 and 2 is  : " + str(4 % 2))
# print(" 4 power 2  : " + str(4 ** 2))

# #  Operator precedence ((),^,*,/,+,-,)
# 
# result = 2 + 3 * 5
# print(result)

# # Comparsion oprators
# 
# print("4 is Greater then 5 ?  : " + str(4 > 5))
# print("4 is Less then 5 ?  : " + str(4 < 5))
# print("4 is Equal to 5 ?  : " + str(4 == 5))
# print("4 is Not-Equal to 5 ?  : " + str(4 != 5))

# # Logical operators
# 
# print(5 > 3 and 6 < 5)
# print(5 > 3 or 6 < 5)
# print(not 2 > 3 )

# #  if-else condition
# 
# age = 19
# if age >= 18:
#     print("you are an adult")
#     print("you can vote")
# elif age < 18 and age > 3:
#     print("you can't vote")
# else:
#     print("you are not eligible for vote")  
# print("thank you")

# # Range (give the sequence of the number)
# 
# name = range(5)
# print(name)

# # While Loop in python
# 
# i= 0
# while i <= 5:
#     print(i)
#     i += 1

# # for Loop in python
# 
# for i in range(5):
#     print(i)

# # List
# 
# marks = [35 , 45 , 86]
# # prints all element
# print(marks)
# # print index element
# print(marks[0])
# print(marks[1])
# print(marks[2])
# # print index element from last
# print(marks[-1])
# print(marks[-2])
# # print element that are in the range(upper bound is not count)
# print(marks[0:3])
# # for loop in list
# for score in marks:
#     print(score)
# # use to add element in list
# marks.append(64)
# print(marks)
# #  use to add element in the list at given index
# marks.insert(2, 57)
# print(marks)
# # use to check the element in list
# print(45 in marks)
# # use to find the length of the list
# print(len(marks))

# # Break & Continue
# 
# students = ["ram" , "shyam" , "kishan" , "radha" , "harsh"]
# # break
# for student in students:
#     if student == "radha":
#         break
#     print(student)
# # continue
# for student in students:
#     if student == "radha":
#         continue
#     print(student)
    
# # Tuple(similar as list but we can't change)
# 
# marks = (34 , 54 , 34 , 65 , 34)
# # use to count the specific element
# print(marks.count(34))
# # use to print index of the element
# print(marks.index(2))

# # Set(use to store unique element)
# # it is unorder it has no index
# 
# marks = {54 , 34 , 65 , 34}
# for score in marks:
#     print(score)

# # Dictionary(use to store element with its specific index name)
# 
# marks = {"english" : 54 ,"hindi" : 34 ,"science" : 65}
# # print all element
# print(marks)
# # print its index element
# print(marks["hindi"])
# # add element
# marks["physics"] = 97
# print(marks)
# # changing the value of the element
# marks["physics"] = 86
# print(marks)

# # Function in python
# # 1.In-Built Function(example int(), str(), bool())
# # 2.Module Function
# import math
# # print all module of the python
# print(dir(math))
# # print square root of the element
# print(math.sqrt(4))
# # 3.User-Defined Function
# 
# def sum (a,b):
#     print(a+b)
# sum(1,2)

