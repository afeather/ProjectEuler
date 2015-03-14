# Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers

def getDivisors(num):
    divisors = [1]
    
    for d1 in range(2, int(num**.5)+1):
        if num % d1 == 0:
            d2 = num // d1
            if d1 not in divisors: divisors.append(d1)
            if d2 not in divisors: divisors.append(d2)
    return divisors

abundant = []
nonabundant = range(28123+1)

for num in range(12, 28123):
    if sum(getDivisors(num)) > num: abundant.append(num)
    
for i in range(len(abundant)):
    for j in range(i+1):
        total = abundant[i] + abundant[j]
        if total < len(nonabundant): nonabundant[total] = 0
        
print sum(nonabundant)
    