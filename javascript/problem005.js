
// 2520 is the smallest number that can be divided by each of the numbers from 1 // to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

for(i=20,D=[...Array(10)].map((_,l)=>l+11);!D.reduce((r,d)=>r&&i%d==0,true);i+=20);i;
