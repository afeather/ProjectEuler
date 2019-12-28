var util = (function sieve(obj) {
	'use strict';
	
	obj.isPrime = function(num) {
		
		if (num % 2 == 0) return num == 2;
		if (num % 3 == 0) return num == 3;
		
		var sqrt = Math.floor(Math.sqrt(num));
		var d = 5;
		
		while (d <= sqrt) {
			if (num % d == 0 || num % (d+2) == 0) return false;
			d += 6;
		}
		
		return true;
	}
	
	obj.nextPrime = function(num) {
		if (num % 2 == 0) num++;
		else num += 2;
		
		while(!obj.isPrime(num)) num+=2;
		return num;
	}

	obj.fib_lookup = {0:0, 1:1, 2:1};
	obj.fib = function(n, mod) {
	
		if (!obj.fib_lookup[n]) {
		
			var n2, f1, f2;
			
			if (n % 2 == 0) {
				n2 = n / 2;
				f1 = obj.fib(n2);
				f2 = obj.fib(n2-1);
				obj.fib_lookup[n] = ((2 * f2 + f1) * f1) % mod;
			}
			else {
				n2 = (n + 1) / 2;
				f1 = obj.fib(n2);
				f2 = obj.fib(n2-1);
				obj.fib_lookup[n] = (f2 * f2 + f1 * f1) % mod;
			}
		}
		
		return obj.fib_lookup[n];
	}
	
	return obj;

})({});


(function(limit = 100000) {
	
	var prime = util.nextPrime(1e14);
	var fib = util.fib(prime);
	var mod = 1234567891011;
	var sum = fib % mod;
	console.log(prime, fib, sum);
	
	for (i = 2; i <= limit; i++) {
		prime = util.nextPrime(prime);
		fib = util.fib(prime, mod);
		sum = (sum + fib) % mod;
		console.log(prime, fib, sum);
	}
	
	return sum;
	
	/*
	for i = 1 to limit
		prime = nextPrime(i)
		fib = fib(prime)
	
		sum = sum + fib mod 1234567891011
	*/
	
	
	
	
	
})(10);
