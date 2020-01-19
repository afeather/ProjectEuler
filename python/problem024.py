# What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9

from itertools import permutations
print( "".join([ str(d) for d in next(perm for count, perm in enumerate(permutations(range(10)), 1) if count == 1000000) ]))
