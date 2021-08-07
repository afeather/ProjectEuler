# Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

from util import incrementalSieve

def truncL(n):
    s = str(n)
    
    for i in range(1, len(s)):
        yield int(s[i:])
    
def truncR(n):
    s = str(n)
    
    for i in range(1, len(s)):
        yield int(s[:-i])
        
primes, results = [], []

for p in incrementalSieve():
    primes.append(p)
    
    if p >= 10:
        if all(n in primes for n in truncL(p)) and all(n in primes for n in truncR(p)):
            results.append(p)
    
    if len(results) == 11: break
    
print sum(results)