// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

for(i=10,s=0;i<1e5;i++)if((i+'').split('').reduce((s,n)=>s+[1,1,2,6,24,120,720,5040,40320,362880][parseInt(n)],0)==i)s+=i;
