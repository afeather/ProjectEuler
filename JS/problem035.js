
/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

euler = {
	
	isPrime : [],
	rotatedPrimes : [],

	getPrimes : function(limit = 1000000) {

		var i = 0;
		while ( i <  limit) {
			euler.isPrime.push(true);
			i ++;
		}
		
		euler.isPrime[0] = euler.isPrime[1] = false;
		
		var a = 2, b = 2;
		
		while ( a < limit / 2) {
			b = 2;
			
			while ( a * b < limit ) {
				euler.isPrime[a * b] = false;
				b ++;
			}
		
			a ++;
		}
		
		euler.isPrime.forEach(function(isPrime, value) {
			
			if (!isPrime) return;
			
			var rotations = euler.getRotations(value);
			
			if (euler.rotatedPrimes.indexOf(Math.min.apply(null, rotations)) > 0) return;
			
			var allPrime = true;
			rotations.forEach(function(num) { allPrime = allPrime && euler.isPrime[num]; });
			if (allPrime)
				euler.rotatedPrimes = euler.rotatedPrimes.concat(rotations);
			
		});
		
		return euler.rotatedPrimes;

	},
	
	getRotations : function(number) {
		
		var str = number.toString();
		var rot = [str];
		var last, next;
		
		for (var i = 0; i < str.length - 1; i++) {
			last = rot[rot.length - 1];
			next = last.slice(1) + last.charAt(0);
			if (rot.indexOf(next) == -1) rot.push(next);
		}
		
		return rot.map(function(el) { return parseInt(el); });
		
	}
	
}

console.log(euler.getPrimes().length + ' elements');