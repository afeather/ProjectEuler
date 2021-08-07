# What is the first term in the Fibonacci sequence to contain 1000 digits?

from util import fib

print(next(count for count, num in enumerate(fib(), 1) if num > 10 ** 999 - 1))
