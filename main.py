input_str = input()

for i in input_str:
    if input_str.count(i) > 1:
        print("Deja Vu")
        exit()
    else:
        continue
print("Unique")
