# Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers

def d(num):
  divisors = [ d for d in range(2, int(num ** .5) + 1) if num % d == 0 ]
  return sum(set([1] + divisors + [ num // d for d in divisors ]))

limit = 28123

abun = [ num for num in range(12, limit) if d(num) > num ]
non = range(limit + 1)

for index, num1 in enumerate(abun):
  for num2 in abun[:index+1]:
    total = num1 + num2
    if total > limit: break
    non[total] = 0

print(sum(non))

