
def largestPrimeFactor(num):
  return max(primeFactors(num))

def primeFactors(num):
  divisor = 2
  while num > 1:
    while num % divisor == 0:
      yield divisor
      num /= divisor
    divisor += 1

def isPrime(num):
  if num == 1: return False
  if num == 2: return True
  return not any(num % d == 0 for d in range(2, int(num**.5) + 1))

def probablePrimes():
  yield 2
  yield 3

  num = 1
  while True:
    num += 4
    yield num
    num += 2
    yield num

def nthPrime(n):
  for num in probablePrimes():
    if isPrime(num): n -= 1
    if n <= 0: return num
      

def sieve(limit):
  primes = [True for i in range(limit + 1)]
  primes[0], primes[1] = False, False

  num = 2
  while num * num <= limit:
    if primes[num]:
      for multiple in range(num * 2, limit + 1, num): primes[multiple] = False
    num += 1

  return primes

nthPrime(10)
