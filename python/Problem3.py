# What is the largest prime factor of the number 600851475143

def isPrime(n):
	for i in range(2, int(n**.5)+1):
		if n % i == 0:
			return False
	return True

num = 600851475143
factors = []

while not isPrime(num):
	for i in range(2, int(num**.5)+1):
		if num % i == 0 and isPrime(i):
			factors.append(i)
			num = num // i

factors.append(num)
			
print max(factors)