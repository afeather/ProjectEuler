from util import isPandigital

def f(n):
    m = [str(n * i) for i in range(1, 10)]
    
    for i, _ in enumerate(m):
        f = ''.join(m[:i])
        if len(f) == 9: return int(f)
        
    return None
        
i = 10 ** 9 - 1
while i > 1:
    n = f(i)
    if n is not None and isPandigital(n): 
        print n
        break
    i -= 1 