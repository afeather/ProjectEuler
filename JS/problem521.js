
// Let smpf(n) be the smallest prime factor of n.
// smpf(91)=7 because 91=7*13 and smpf(45)=3 because 45=3*3*5.
// Let S(n) be the sum of smpf(i) for 2 <= i <= n.
// E.g. S(100)=1257.

// Find S(1e12) mod 1e9.

// 1/2 numbers -> 2
// 1/6  numbers -> 3
// 1/10 numbers -> 5

(function() {
	'use strict';
	
	var smpf = function(n) {
		var i    = 11;
		var sqrt = Math.floor(Math.sqrt(n));
		
		while (i <= sqrt) {
			if (n %  i      == 0) return i;
			if (n % (i + 2) == 0) return i + 2;
			i += 6;
		}
		
		return n;
	}

	var S = function(n, mod) {
		var sum = 0;
		
		if (2 <= n) sum += 2;
		if (3 <= n) sum += 3;
		if (4 <= n) sum += 2;
		if (5 <= n) sum += 5;
		
		var i   = 6;
		var end = n - 6;
		
		while (i <= end) {
			sum += (i % 5 == 4) ? 5 : (i % 7 == 6) ? 7 : smpf(i + 1);
			sum += (i % 5 == 0) ? 5 : (i % 7 == 2) ? 7 : smpf(i + 5);
			
			i += 6;
			sum = (sum + 9) % mod;
		}
		
		if (i     <= n) sum += 2;
		if (i + 1 <= n) sum += smpf(i + 1);
		if (i + 2 <= n) sum += 2;
		if (i + 3 <= n) sum += 3;
		if (i + 4 <= n) sum += 2;
		if (i + 5 <= n) sum += smpf(i + 5);
		
		return sum % mod;
	}

	var start = new Date();
	var out = S(1e7, 1e9);
	var end = new Date();

	console.log(out, end.getTime() - start.getTime(), 'ms');
	
})();

// changed loop to factor only odd numbers
// 1e5 -> 455298741 1787 ms

// changed loop to factor every 6 numbers
// 1e5 -> 455298741 1776 ms

// add sqrt to smpf
// 1e5 -> 455298741 890 ms
// 1e6 -> 568404989 22000 ms

// factorization with sieve
// 1e5 -> 455298741 391 ms
// 1e6 -> 568404989 7354 ms

// improved factorization
// 1e5 -> 455298741 162 ms
// 1e6 -> 568404989 3964 ms

// added precalculated sqrt in smpf
// 1e5 -> 455298741 27 ms
// 1e6 -> 568404989 309 ms
// 1e7 -> 714961609 4287 ms
// 1e8 -> 813374515 76431 ms

// added 5 and 7 test
// 1e5 -> 455298741 20 ms
// 1e6 -> 568404989 240 ms
// 1e7 -> 724961599 3631 ms
// 1e8 -> 813374515 69842 ms

// added function wrapper
// 1e5 -> 455298741 15 ms
// 1e6 -> 568404989 180 ms
// 1e7 -> 724961599 3063 ms
// 1e8 -> 813374515 67149 ms

