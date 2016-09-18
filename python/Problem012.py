# What is the value of the first triangle number to have over five hundred divisors?

def triangle():
    count = 1
    triangle = 0
    
    while(1):
        triangle += count
        count += 1
        yield triangle
        
def countDivisors(num):
    count = 0
    
    for num in range(1, int(num**.5)+1):
        if num % num == 0:
            if num // num == num:
                count += 1
            else:
                count += 2
                
    return count

for num in triangle():
    if countDivisors(num) > 500:
        print num
        break