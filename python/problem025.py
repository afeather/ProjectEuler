# What is the first term in the Fibonacci sequence to contain 1000 digits?

def fib():
  a, b = 1, 1
    
  while(True):
    yield a
    a, b = b, a + b

print(next(count for count, num in enumerate(fib(), 1) if num >= 10**1000 - 1))
