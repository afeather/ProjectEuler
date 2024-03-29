# What is the total of all the name scores in the file?

with open("problem022.txt") as f:
    names = sorted([ s[1:-1] for s in f.read().split(",") ])

letters = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print(sum([ sum([ letters.index(letter) for letter in name ]) * index for index, name in enumerate(names, 1) ]))
