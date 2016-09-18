'use strict';

var combinations = {
	
	lookup : { 0 : 1 },
	
	factorial : function(num) {
		
		if (!combinations.lookup[num]) 
			combinations.lookup[num] = num * combinations.factorial(num-1);
		
		return combinations.lookup[num];
		
	},
	
	C : (n,r) => r <= n ? combinations.factorial(n) / (combinations.factorial(r) * combinations.factorial(n-r)) : undefined
	
}

var count = 0;
var start = new Date();

const MIL = 1000000;

for (var n = 1; n <= 100; n++) 
	for (var r = 1; r <= n; r++)
		if (combinations.C(n,r) > MIL)
			count ++;
	
var end = new Date();

console.log(count);
console.log(end.getTime() - start.getTime(), 'ms');

// 4075
// 7 ms