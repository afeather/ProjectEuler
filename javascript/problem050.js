
(function() {

	var primesum = function(lim) {
	
		var isPrime = [...Array(lim)].map(_ => true);
		isPrime[0] = isPrime[1] = false;
		
		for (var i = 2; i < lim/2; i++)
			for (var j = 2; i*j < lim; j++)
				isPrime[i*j] = false;
				
		primes = isPrime.map((p,v) => p ? v : 0).filter(p => p);
		
		var maxprime = 0;
		var maxcount = 0;
		
		for (var i = 0; i < primes.length; i++) {
			var run   = 0;
			var count = 0;
			for (var j = i; j < primes.length; j++) {
			
				run = run + primes[j];
				count = count + 1;
				
				if (run >= lim) break;
				
				if (isPrime[run] && count > maxcount) 
					[maxcount, maxprime] = [count, run];
			
			}
		}
		
		return [maxprime, maxcount];
	
	}

	var start = new Date();
	var out = primesum(1e6);
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
})();