
(function() {
	'use strict';
	var mod = Math.pow(2, 60);
	var xcache = {};
	
	var x = k => xcache[k] || (xcache[k] = 
		k == 0 ? 0 :
		k == 1 ? 1 :
		k % 2 == 0 ? (k = k     / 2, (3 * x(k) + 2 * x(Math.floor(k/2))) % mod) : 
					 (k = (k-1) / 2, (2 * x(k) + 3 * x(Math.floor(k/2))) % mod)
	);
	
	var y = (n,k) => k >= n ? x(k) : mod - 1 - Math.max(y(n, 2*k), y(n, 2*k+1));
	var A =  n    => y(n,1);
	
	var start = new Date();
	var out = A(1e7);
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
	
})();