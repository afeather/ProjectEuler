# Find the largest palindrome made from the product of two 3-digit numbers.

def isPalindrome(n):
    return str(n) == str(n)[::-1]
        
palindrome = 0        

for i in range(100, 999)[::-1]:
    for j in range(100, 999)[::-1]:
        if isPalindrome(i*j) and i*j > palindrome:
            palindrome = i * j

print palindrome