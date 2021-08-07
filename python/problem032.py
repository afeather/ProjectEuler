# Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

from itertools import permutations

toNum = lambda perm: int("".join(str(d) for d in perm))

print sum(set(c for p in permutations(range(1,10), 9) for i in range(1,5) for j in range(i+1, 6) for c in [toNum(p[j:])] if toNum(p[:i]) * toNum(p[i:j]) == c))

