
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

((l)=>{for(s=[false,false].concat([...Array(l-2)].map(_=>true)),a=2,b=a*a;a*a<l;(s[a]&&b<l)?b+=a:a++&&(b=a*a))s[b]=false;return s;})(2e6).reduce((s,v,i)=>v?s+i:s);
