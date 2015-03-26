# Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0

def getFormula(a, b):
    return lambda n : n**2 + a*n + b

def isPrime(num):
    
    if num < 0: num = num * -1
    
    for i in range(2, int(num**.5)+1):
        if num % i == 0: return False
    
    return True

maxA = 0
maxB = 0
maxcount = 0

for a in range(-1000, 1000):
    for b in range(-1000,1000):
        f = getFormula(a, b)
        count = 0
        
        while isPrime(f(count)):
            count += 1
        
        if count > maxcount:
            maxcount = count
            maxA = a
            maxB = b

print maxA * maxB