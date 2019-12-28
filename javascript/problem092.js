'use strict';

var SquareDigits = {

	squareDigits : function(num) {
		var sum = 0;
		num.toString().split('').map(digit => parseInt(digit)).forEach(function(digit){
			sum += (digit * digit);
		})
		
		return sum;
	},
	
	lookup : { 1: 1, 89: 89 },
	
	getChain : function(start) {
		if (!SquareDigits.lookup[start])
			SquareDigits.lookup[start] = SquareDigits.getChain(SquareDigits.squareDigits(start));
		
		return SquareDigits.lookup[start];
	},
	
	findChains : function(limit = 10000000) {
		var count = 0;

		for (var i = 1; i < limit; i++)
			if (SquareDigits.getChain(i) == 89) count++;
		
		return count;
	}
	
}

var start = new Date();
var count = SquareDigits.findChains();
var end = new Date();

console.log(count);
console.log(end.getTime() - start.getTime(), 'ms');

// 8581146
// 56151 ms