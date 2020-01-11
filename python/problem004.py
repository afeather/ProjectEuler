# Find the largest palindrome made from the product of two 3-digit numbers.

def isPalindrome(n):
    return str(n) == str(n)[::-1]

print(max(filter(isPalindrome, [i*j for i in range(100,1000) for j in range(100,1000)])))

