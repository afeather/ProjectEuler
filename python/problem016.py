# What is the sum of the digits of the number 2^1000

def sumDigits(num):
    return sum([int(num) for num in str(num)])

print sumDigits(2**1000)