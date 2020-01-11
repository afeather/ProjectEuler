# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

num = 20
while not all(num % i == 0 for i in range(1, 21)): num += 20
print(num)

