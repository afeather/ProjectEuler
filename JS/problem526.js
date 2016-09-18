
// f(n) = largest prime factor
// g(n) = f(n) + ... f(n+8)
// h(n) = max(g(k)) for k = 2 .. n

(function() {
	'use strict';
	
	var h = function(n) {
		
		var f = function(n) {
		
			while (n % 2 == 0) n = n / 2;
			if (n == 1) return 2;
			
			var i = 1;
			
			while (n > 1) {
				i += 2;
				if (i*i > n) return n;
				while (n % i == 0) n = n / i;
			}
			
			return i;
		}
		
		var g = [f(2), f(3), f(4), f(5), f(6), f(7), f(8), f(9)];
		
		var max = 0;
		var i = 1;
		
		while (++i < n) {
			g.push(f(i+8));
			max = Math.max(max, g.reduce((sum, val) => sum + val));
			g.shift();
		}
		
		return max;
	}
	
	var start = new Date();
	var out = h(1e7);
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
})();