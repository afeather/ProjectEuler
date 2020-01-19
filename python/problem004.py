# Find the largest palindrome made from the product of two 3-digit numbers.

print(max(filter(lambda n: str(n) == str(n)[::-1], [ i * j for i in range(100, 1000) for j in range(100, i) ])))

