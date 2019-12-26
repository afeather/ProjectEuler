# What is the total of all the name scores in the file?

namefile = open("./Problem022.txt")

names = [ num[1:-1] for num in namefile.read().split(",") ]
names.sort()

letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
scores = []

for index in range(len(names)):
    scores.append(sum([letters.index(num) + 1 for num in names[index]]) * (index + 1))

print sum(scores)
