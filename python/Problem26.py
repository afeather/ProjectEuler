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
        
maxlen = 0
maxi = 0

for i in range(1,1000):
    remainders = getRemainders(i)
    if len(remainders) > maxlen:
        maxlen = len(remainders)
        maxi = i

print maxi
    
