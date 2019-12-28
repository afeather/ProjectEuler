
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.

// What is the 10 001st prime number?

for(p=[],l=1e4;p.length<1e4;l*=2)p=(()=>{for(s=[false,false].concat([...Array(l-2)].map(_=>true)),a=2,b=a*a;a*a<l;(s[a]&&b<l)?b+=a:a++&&(b=a*a))s[b]=false;return s;})().map((p,i)=>p?i:0).filter(v=>v);p[1e4];
