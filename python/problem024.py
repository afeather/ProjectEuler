# What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9
from itertools import permutations

perm = permutations(range(10))

count = 0

for i in perm:
    count += 1
    if count == 1000000: 
        print "".join([ str(j) for j in i ])
        break