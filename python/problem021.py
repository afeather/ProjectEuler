# Evaluate the sum of all the amicable numbers under 10000

def d(num):
  divisors = [ d for d in range(2, int(num ** .5) + 1) if num % d == 0 ]
  return sum(set([1] + divisors + [ num // d for d in divisors ]))

print(sum([ n1 for n1 in range(1, 10000) for n2 in [d(n1)] if n1 != n2 and d(n2) == n1 ]))
