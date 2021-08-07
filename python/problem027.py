# Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0

from util import isPrime
from itertools import product

maxCount, maxProd = 0, 0
for a, b in product(range(-1000, 1000), range(-1000, 1000)):
  f, count = lambda n : n*n + a*n + b, 0

  while isPrime(f(count)): count += 1

  if count > maxCount: maxCount, maxProd = count, a*b

print(maxProd)
