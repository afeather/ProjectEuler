


// For every real number a>1a>1 is given the sequence gaga by:
// ga(x)=1ga(x)=1 for x<ax<a
// ga(x)=ga(x−1)+ga(x−a)ga(x)=ga(x−1)+ga(x−a) for x≥ax≥a
// G(n)=gn√(n)G(n)=gn(n)
// G(90)=7564511G(90)=7564511.

// Find ∑G(p)∑G(p) for pp prime and 10000000<p<1001000010000000<p<10010000
// Give your answer modulo 1000000007.

(function() {
	'use strict';
	
	var cache;
	
	var g = (a,x) => a > x ? 1 : cache[x] || (cache[x] = g(a, x-1) + g(a, x-a));
	
	var G = function(n) {
		cache = {};
		
		var sqrt = Math.sqrt(n);
		
		return g(sqrt, n);
	}
	
	var sieveOfSundaram = function(limit) {
		
		var n = limit / 2;

		var sieve = [false];
		while (sieve.length < n) sieve.push(true);
		
		var index = (i,j) => i + j + (2 * i * j);
		
		for (var i = 1; i < n; i++)
			for (var j = i; index(i,j) <= n; j++)
				sieve[index(i,j)] = false;
			
		var primes = [2];
		sieve.forEach(function(isPrime, value) { if (isPrime) this.push(value * 2 + 1)}, primes);
		
		return primes;
		
	}
	
	var primes = (min = 1e7, max = 1e7+1e4) => sieveOfSundaram(max).filter(val => val > min);
	
	var S = function() {
		
		var mod = 1e9+7;
		
		return primes().map(val => G(val)).reduce((sum, val) => (sum + val) % mod);
		
	}

	var start = new Date();
	var out = primes();
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
	console.log(cache);
})();
