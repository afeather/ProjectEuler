
var largemod = function(mult, base, exp, mod) {
	'use strict';
	
	if (mod == 1) return 0;
	
	var result = 1;
	
	while (exp--)
		result = (result * base) % mod;
		
	result = (result * mult) % mod;
	
	return result;

}

console.log(largemod(28433, 2, 7830457, 1e10)+1);