# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

from util import primeFactors, simpleSieve

num = 1
for i in simpleSieve(20):
    maxCount = max(list(primeFactors(j)).count(i) for j in range(1, 21))
    num *= i ** maxCount

print(num)
