
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
  return not any(num % d == 0 for d in range(2, int(num**.5) + 1))

def sieve(limit):
  primes = [True for i in range(limit + 1)]
  primes[0], primes[1] = False, False

  num = 2
  while num * num <= limit:
    if primes[num]:
      for multiple in range(num * 2, limit + 1, num): primes[multiple] = False
    num += 1

  return primes
