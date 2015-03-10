# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

def isDivisble(num):
    for i in range(2, 20):
        if num % i != 0:
            return False
    return True

num = 20

while not isDivisble(num):
    num += 20
    
print num