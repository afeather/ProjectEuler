# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

from itertools import count

print(next(num for num in count(20, 20) if all(num % i == 0 for i in range(1,21))))
