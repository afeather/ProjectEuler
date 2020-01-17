# Find the sum of all the primes below two million.

from prime import sieve

TWO_MILLION = 2000000
print(sum([n for n, isprime in enumerate(sieve(TWO_MILLION)) if isprime]))

