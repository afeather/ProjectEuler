# Find the sum of all the primes below two million.

numbers = [1 for i in range(2000000)]

numbers[0] = 0
numbers[1] = 0

i = 2

while i < len(numbers):
    step = i + i
    while step < len(numbers):
        numbers[step] = 0
        step += i
    i += 1
        
prime_sum = 0

i = 2

while i < len(numbers):
    if numbers[i] == 1:
        prime_sum += i
    i += 1
        
print prime_sum