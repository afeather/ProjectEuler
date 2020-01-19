# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

from itertools import takewhile

def fib():
  a, b = 0, 1

  while True:
    yield a
    a, b = b, a+b

print(sum([ num for num in takewhile(lambda x: x < 4000000, fib()) if num % 2 == 0 ]))

