
(function(obj) {
	'use strict';
	
	var current = 10;
	var count = 0;

	var digitsum = (num) => num.toString().split('').map(digit => parseInt(digit)).reduce((sum, val) => sum + val);

	obj.findSequence = function(index) {

		while (count < index) {
			
			var sum = digitsum(current);
			
			if (sum > 1) {
				
				var prod = sum;
				while (prod < current) prod = prod * sum;
				
				if (prod == current)
					console.log(++count, current);
				
			} 
			
			current++
			
		}
	}
	
	return obj;
	
})(window)