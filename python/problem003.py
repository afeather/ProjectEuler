# What is the largest prime factor of the number 600851475143

num,d = 600851475143,2
factors=[]

while num>1:
	if num%d==0: factors.append(d)
	while num%d==0: num = num/d
	d=d+1

print max(factors)
