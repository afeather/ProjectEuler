# 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
# Which starting number, under one million, produces the longest chain

counts = {1: 1}

def collatz(n):
    
    if n not in counts:
        counts[n] = 1 + collatz(n // 2 if n % 2 == 0 else n * 3 + 1)

    return counts[n]

maxStart, maxCount = 0, 0

for i in range(1, 1000000):
    count = collatz(i)
    if count > maxCount: maxStart, maxCount = i, count
    
print(maxStart)
