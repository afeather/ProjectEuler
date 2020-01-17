# What is the 10 001st prime number?

from prime import isPrime

num, count = 1, 2
while True:
  num += 4
  if isPrime(num): count += 1
  if count > 10000: break
  
  num += 2
  if isPrime(num): count += 1
  if count > 10000: break

print(num)
