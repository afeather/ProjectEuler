
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

for(a=b=1e2,max=0;(c=a*b)&&a<1e3;b<1e3?b++:a++&&(b=a))if((c+'')==(c+'').split('').reverse().join('')&&c>max)max=c;max;
