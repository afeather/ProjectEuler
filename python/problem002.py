# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
def fib(max):
	a,b=1,2
	yield a

	while b<max:
		yield b
		a,b=b,a+b

print sum([x for x in fib(4000000) if x%2==0])
