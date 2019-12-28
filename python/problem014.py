# 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
# Which starting number, under one million, produces the longest chain

lookup = [ 0 for num in range(1000000) ]

def collatz(start):
    
    current = start
    count = 1
    
    while current != 1:
        
        if current < len(lookup) and lookup[current] != 0:
            count = count + lookup[current] - 1
            break
        elif current % 2 == 0:
            current = current / 2
        else:
            current = current * 3 + 1
        
        count = count + 1
    
    lookup[start] = count
    return count

maxcount = 0
maxstart = 0

for num in range(1,1000000):
    c = collatz(num)
    
    if c > maxcount:
        maxcount = c
        maxstart = num
        
print maxstart