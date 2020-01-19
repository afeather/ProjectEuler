# Find the sum of all the primes below two million.

from prime import sieve

print(sum([ n for n, isprime in enumerate(sieve(2000000)) if isprime ]))

