# What is the first term in the Fibonacci sequence to contain 1000 digits?

def fib():
    a = 1
    b = 1
    
    yield a
    yield b
    
    while(1):
        c = a + b
        yield c
        a = b
        b = c
       
count = 0 
for i in fib():
    count += 1
    if len(str(i)) >= 1000:
        print count
        break