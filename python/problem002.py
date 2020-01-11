# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

def fib(limit):
  a,b = 0,1
  while b < limit:
    yield b
    a,b = b,a+b

FOUR_MILLION = 4000000
print(sum([x for x in fib(FOUR_MILLION) if x % 2 == 0]))

