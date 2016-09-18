# Find the sum of all the primes below two million.

numbers = [1 for num in range(2000000)]

numbers[0] = 0
numbers[1] = 0

num = 2

while num < len(numbers):
    step = num + num
    while step < len(numbers):
        numbers[step] = 0
        step += num
    num += 1
        
prime_sum = 0

num = 2

while num < len(numbers):
    if numbers[num] == 1:
        prime_sum += num
    num += 1
        
print prime_sum