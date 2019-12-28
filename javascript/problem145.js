'use strict';

var ReverseNumbers = {
	
	reverse : num => parseInt(num.toString().split('').reverse().join('')),
	hasOddDigits : num => num.toString().split('').map(digit => parseInt(digit)).reduce((isOdd, digit) => isOdd && digit % 2 == 1, true),
	
	findReversible : function(limit = 1e9) {
		
		var rev;
		var sum;
		var count = 0;
		
		for (var i = 10; i < limit; i++) {
			rev = ReverseNumbers.reverse(i);
			
			if (rev <= i) continue;
			
			sum = i + rev;
			
			if (ReverseNumbers.hasOddDigits(sum)){
				count+=2;
			}
		}
		
		return count;
	}
	
}

var start = new Date();
var count = ReverseNumbers.findReversible(1e6);
var end = new Date();

console.log(count);
console.log(end.getTime() - start.getTime(), 'ms');


