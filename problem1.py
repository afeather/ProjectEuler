# Find the sum of all the multiples of 3 or 5 below 1000.

numbers = []
current = 3

while current < 1000:
	if current % 3 == 0 or current % 5 == 0:
		numbers.append(current)
	current += 1
	
print sum(numbers)
