# What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

counter = 1
total = 1

for i in range(1,1001//2+1):
    for j in range(4):
        counter += (2 * i)
        total += counter
print total