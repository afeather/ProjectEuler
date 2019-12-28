// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2

for(i=1,t=0,f=(s)=>s==s.split('').reverse().join('');i<1e6;i++)if(f(i.toString())&&f(i.toString(2)))t+=i;
