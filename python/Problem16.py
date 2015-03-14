# What is the sum of the digits of the number 2^1000

def sumDigits(num):
    return sum([int(i) for i in str(num)])

print sumDigits(2**1000)