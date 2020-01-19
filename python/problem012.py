# What is the value of the first triangle number to have over five hundred divisors?

def d(num):
  divisors = [ d for d in range(1, int(num ** .5) + 1) if num % d == 0 ]
  return set(divisors + [ num // d for d in divisors ])

def triangle():
  num, count = 0, 1
  while True:
    num, count = num + count, count + 1
    yield num

print(next( num for num in triangle() if len(d(num)) > 500 ))
