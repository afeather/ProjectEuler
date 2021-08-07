# The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
# How many circular primes are there below one million?

from util import simpleSieve, isPrime, rotate
        
circular = []

for p in simpleSieve(1000000):
    if p in circular: continue
    
    rotations = list(set(rotate(p)))
    if all(isPrime(r) for r in rotations): circular += rotations
    
print(len(circular))
