
def largestPrimeFactor(num):
  lpf = 1
  divisor = 2
  while num > 1:
    if num % divisor == 0: lpf = divisor
    while num % divisor == 0: num /= divisor
    divisor += 1
  return lpf

def primeFactors(num):
  factors = []
  divisor = 2
  while num > 1:
    while num % divisor == 0:
      factors.append(divisor)
      num /= divisor
    divisor += 1
  return factors

def isPrime(num):
  return not any(num % i == 0 for i in range(2, int(num**.5)+1))
