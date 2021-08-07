# What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

count, total = 1, 1

for i in range(1, 1001 // 2 + 1):
    for _ in range(4):
        count += 2 * i
        total += count
        
print(total)
