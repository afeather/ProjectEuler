# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def sumSquare(n):
    return sum([i**2 for i in range(1, n+1)])

def squareSum(n):
    return sum(range(1, n+1)) ** 2

print squareSum(100) - sumSquare(100)