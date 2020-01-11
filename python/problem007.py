# What is the 10 001st prime number?

from prime import isPrime

num, count = 1, 1
while count < 10001:
  num += 2
  if isPrime(num): count += 1

print(num)

    
