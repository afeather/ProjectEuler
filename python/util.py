from __builtin__ import isinstance

def probablyPrime():
    yield 2
    yield 3

    i = 6
    while True:
        yield i - 1
        yield i + 1
        i += 6

def isPrime(n):
    if n <= 3: return n in [2, 3]
    
    for d in probablyPrime():
        if d ** 2 > n: return True
        if n % d == 0: return False

def primeFactors(n):
        
    for d in probablyPrime():
        while n % d == 0:
            yield d
            n /= d
            
        if n == 1: break
        
def largestPrimeFactor(n):
    return max(primeFactors(n))

def simpleSieve(n):
    A = [False, False] + [True for _ in range(n - 1)]
    
    for i in range(n):
        if i * i < n:
            if A[i]:
                yield i
                for j in range(i ** 2, len(A), i):
                    A[j] = False
        else:
            if A[i]:
                yield i
    
def incrementalSieve():
    primes = [[3, 3]]
        
    for i in probablyPrime():
        isPrime = True
            
        for pm in primes:
            if pm[0] ** 2 > i: break
                
            while pm[1] < i: pm[1] += pm[0]
                
            if pm[1] == i:
                isPrime = False
                break
            
        if isPrime:
            yield i
            primes += [[i, i]]

def nthPrime(n):
    return next(prime for count, prime in enumerate(incrementalSieve(), 1) if count >= n)
             
def fib():
    a, b = 1, 1

    while True:
        yield a
        a, b = b, a + b
        
def nthFib(n):
    return next(fib for count, fib in enumerate(fib(), 1) if count >= n)

def rotate(n):
    s = str(n)
    for i in range(len(s)):
        yield int(s[i:] + s[0:i])
        
def isPandigital(n, contains = ['1', '2', '3', '4', '5', '6', '7', '8', '9']):
    s = str(n)
    return all(s.count(i) == 1 for i in contains)
    
                