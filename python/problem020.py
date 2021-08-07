# Find the sum of the digits in the number 100!

from math import factorial

print(sum(int(num) for num in str(factorial(100))))
