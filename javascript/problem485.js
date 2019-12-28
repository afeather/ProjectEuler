
(function() {
	'use strict';
	
	var d = function(n) {
		
		var sqrt = Math.sqrt(n);
		var sqrtint = Math.floor(sqrt);
		
		var count = 0;
		var i = 0;
		
		while (++i <= sqrtint)
			if (n % i == 0) count += 2;
		
		if (sqrt == sqrtint) return count - 1;
		return count;
		
	}
	
	var M = function(n, k) {
		
		var max = 0;
		
		for (var j = n; j <= n+k-1; j++)
			max = Math.max(max, d(j));
		
		return max;
		
	}
	
	var S = function(u, k) {
		
		var sum = 0;
		
		for (var n = 1; n <= u-k+1; n++)
			sum += M(n,k);
		
		return sum;
		
	}
	
	
	
	
	var start = new Date();
	var out = S(1000, 10);
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
})();