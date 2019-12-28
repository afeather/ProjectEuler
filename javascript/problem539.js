
// p(1) = [1]
// p(2) = [1,2] -> [2](2n+1)
// p(4) = [1,2,3,4] -> [4,2] -> [2](4n+1)
// p(6) = [1,2,3,4,5,6] -> [6,4,2] -> [4](6n+4)
// p(8) = [1,2,3,4,5,6,7,8] -> [8,6,4,2](2n+1) -> [2,6](4n+1) -> [_,_,_,_,_,6,_,_](8n+5)

(function() {
	'use strict';
	
	var p = function(n) {
		
		var list = [...Array(Math.floor(n/2))].map((_, index) => n - (2 * index));
		
		while (list.length > 1)
			list = list.filter((val, index) => index % 2 == 1).reverse();
		
		return list[0];
		
	}
	
	var S = function(n, mod) {
		
		var sum = 1;
		var i = 0;
		
		while ((i = i + 2) < n) sum += (2 * p(i));
		
		if (i == n)
			sum += p(i);
				
		return sum;
		
	}
	
	var start = new Date();
	
	var out = p(8);
	
	var end = new Date();
	
	console.log(out, end.getTime() - start.getTime(), 'ms');
})();