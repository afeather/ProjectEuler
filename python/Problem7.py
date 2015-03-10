# What is the 10 001st prime number?

def isPrime(n):
    for i in range(2, int(n**.5)+1):
        if n % i == 0:
            return False
    return True

def prime():
    num = 2
    
    while(1):
        if isPrime(num):
            yield num
        num += 1
    
count = 0

for i in prime():
    count += 1
    
    if count == 10001:
        print i
        break
    
