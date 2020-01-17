# What is the value of the first triangle number to have over five hundred divisors?

def countDivisors(num):
    count = 0
    
    sqrt = num ** .5
    for divisor in range(1, int(sqrt)):
        if num % divisor == 0: count += 2

    if num % int(sqrt) == 0: count += 1    

    return count

triangle, count = 0, 1
while True:
  triangle, count = triangle + count, count + 1
  if countDivisors(triangle) > 500: break

print(triangle)
