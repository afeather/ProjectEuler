# Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part

def getRemainders(num):
    
    remainders = []
    
    i = 1
    while True:
        
        R = i % num
        
        if R in remainders:
            return remainders[remainders.index(R):]
        else:
            remainders.append(R)
            i = i * 10
        
maxlen, maxd = 0, 0

for d in range(1,1000):
    remainders = getRemainders(d)
    if len(remainders) > maxlen:
        maxlen, maxd = len(remainders), d

print(maxd)
    
