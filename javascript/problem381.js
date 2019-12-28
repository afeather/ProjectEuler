'use strict';

var primefac = {
	
	_factorial : { 0:1, 1:1 },
	factorial : function(num) {
		
		if (num < 0) return undefined;
		
		if (!primefac._factorial[num])
			primefac._factorial[num] = num * primefac.factorial(num-1);
		
		return primefac._factorial[num];
		
	},
	
	_primes : function(limit) {
		
		var primes = [];
		
		(function(){
			var sieve = [];
			for (var i = 0; i < limit; i++)
				sieve.push(true);
			sieve[0] = sieve[1] = false;
				
			for (var i = 2; i < limit; i++)
				for (var j = 2; j * i < limit; j++)
					sieve[j*i] = false;
				
			return sieve;
		})().forEach(function(isPrime, value){ if (isPrime && value >= 5) primes.push(value); })
			
		console.log(primes);
		return primes;
		
	},
	
	S : p => [1,2,3,4,5].reduce((sum, k) => sum + primefac.factorial(p-k), 0),
	
	sumS : limit => primefac._primes(limit).reduce((sum, p) => {
		var S = primefac.S(p);
		var Smod = S % p;
		console.log('S(',p,')=', S, 'mod', p);
		console.log('S(',p,')=', Smod);
		return sum + Smod;
	}, 0)
	
};

var start = new Date();
var sum = primefac.sumS(100);
var end = new Date();

console.log(sum);
console.log(end.getTime() - start.getTime(), 'ms');

