# The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: 
# (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.
# There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, 
# but there is one other 4-digit increasing sequence.
# What 12-digit number do you form by concatenating the three terms in this sequence?

from util import simpleSieve
from itertools import permutations

primes = [p for p in simpleSieve(10000) if p > 999]

for i, a in enumerate(primes):
    perm = [int(''.join(p)) for p in permutations(str(a))]
    
    for b in primes[i+1:]:
        if b not in perm: continue
        
        c = b + (b - a)
        
        if c not in perm or c not in primes: continue
        
        print("{}{}{}".format(a, b, c))
        