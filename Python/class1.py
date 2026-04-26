alphabet_dict = {0:"  ",1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h',
                 9:'i', 10:'j', 11:'k', 12:'l', 13:'m',14:'n', 15:'o', 16:'p',
                 17:'q', 18:'r', 19:'s',20:'t', 21:'u', 22:'v', 23:'w', 24:'x', 25:'y', 26:'z'}
str= "why"
list4=[]
list4.append(str)

list1=[list4[0][0],list4[0][1],list4[0][2]]

print(list1)
# key_list = list(alphabet_dict.keys())
value_list = list(alphabet_dict.values())

key_w = value_list.index("w")
key_h = value_list.index("h")
key_y = value_list.index("y")

len_list = [key_w , key_h , key_y]

list_w="a"*len_list[0]
list_h="b"*len_list[1]
list_y="c"*len_list[2]

encrypted_message =(list_w,list_h,list_y)
print(encrypted_message)