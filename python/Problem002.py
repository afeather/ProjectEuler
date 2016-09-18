# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
def fib():
    a = 1
    b = 2
    yield a
    yield b
    
    while(1):
        c = a + b
        a = b
        b = c
        
        yield c
        
total = 0
        
for i in fib():
    if i > 4000000:
        break
    if i % 2 == 0:
        total += i
        
print total