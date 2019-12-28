'use strict';
var countPermutations = function(target = 1000000) {

	var count = 0;
	var stop = false;
	var permutation = 0;

	var permute = function(ch = [0,1,2,3,4,5,6,7,8,9], working = []) {
		
		if (stop) return;
		
		if (ch.length == 1) {
			
			working.push(ch[0]);
			
			count ++;
			if (count == target){
				stop = true;
				permutation = parseInt(working.join(''));
			};
			return;
		}
		
		var nextch, ch2, working2;
		
		for (var i = 0; i < ch.length && !stop; i++) {
			
			ch2 = ch.slice(0,i).concat(ch.slice(i+1));
			
			(working2 = working.slice(0)).push(ch[i]);
			
			permute(ch2, working2);
			
		}
		
		return permutation;
		
	}
	
	return permute();

}

var start = new Date();
var out = countPermutations();
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');

// 2783915460
// 1926 ms
