# We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. 
# What is the largest n-digit pandigital prime that exists?

from itertools import permutations
from util import isPrime

for perm in (p for n in range(2, 11)[::-1] for p in permutations(range(1, n)[::-1])):
    num = int(''.join(str(s) for s in perm))
    if isPrime(num): break

print(num)