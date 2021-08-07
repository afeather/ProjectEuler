# Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

from util import primeFactors

N = range(4)
F = [set() for _ in N]

while True:
    N = N[1:] + [N[-1] + 1]
    F = F[1:] + [set(primeFactors(N[-1]))]
    
    if all(len(f) == 4 for f in F) and F[0].intersection(F[1], F[2], F[3]) == set():
        break

print(N)