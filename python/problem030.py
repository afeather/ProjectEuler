# Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

total = 0

for num in range(2,1000000):
    digitsum = sum([int(digit) ** 5 for digit in str(num)])
    
    if digitsum == num:
        total += digitsum

print total