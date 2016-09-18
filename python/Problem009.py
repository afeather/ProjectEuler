# There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
        
a = 1
b = 1
c = 0

while a < 1000:
    b = 0
    while b < 1000:
        c = ((a ** 2) + (b ** 2)) ** .5
        
        if a + b + c == 1000:
            break
        
        b = b + 1
        
    if a + b + c == 1000:
        break
    
    a = a + 1

print (int)(a * b * c)