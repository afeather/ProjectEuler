# Which prime, below one-million, can be written as the sum of the most consecutive primes?

from util import simpleSieve

n = 1000000

primes = list(simpleSieve(n))

for max in range(1, len(primes)):
    if sum(primes[:max]) > n:
        break
    
for l in range(1, max)[::-1]:
    for i in range(len(primes) - l):
        s = sum(primes[i:i+l])
        
        if s > n: break
        
        if s in primes:
            print s
            exit()