# Evaluate the sum of all the amicable numbers under 10000

def getDivisors(num):
    divisors = [1]
    
    for d1 in range(2, int(num**.5)+1):
        if num % d1 == 0:
            d2 = num // d1
            if d1 not in divisors: divisors.append(d1)
            if d2 not in divisors: divisors.append(d2)
    return divisors

amicable = []

for num1 in range(2, 10000):
    d1 = getDivisors(num1)
    num2 = sum(d1)
    d2 = getDivisors(num2)
    
    if num1 != num2 and sum(d2) == num1:
        if num1 not in amicable: amicable.append(num1)
        if num2 not in amicable: amicable.append(num2)
        
print sum(amicable)

