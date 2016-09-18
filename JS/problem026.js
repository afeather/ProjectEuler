
/*

		nlist 	rlist
1/6 	0		1
10/6	1		4
40/6	6		4


1/7		0		1
10/7	1		3
30/7	4		2
20/7	2		6
60/7	8		4
40/7	5		5
50/7	7		1

*/

var decimalCyles = function(limit=10) {
	
	var getCycle = function(divisor) {
		
		var nlist = [];
		var rlist = [];
		
		var next, remainder = 1;
		
		while (true) {
			next = Math.floor((10 * remainder) / divisor);
			remainder = (10 * remainder) % divisor;
			
			var rIndex = rlist.indexOf(remainder);
			
			nlist.push(next);
			rlist.push(remainder);
			
			if (rIndex != -1) return nlist.length - rIndex - 1;
			
			if (remainder == 0) return 0;
		}
			
	}

	var getMaxCycles = function() {
		var maxI, maxCycle = 0;
		var cycle;
		
		for (var i = 2; i < limit; i++){
			cycle = getCycle(i);
			if (cycle > maxCycle ){
				maxI = i;
				maxCycle = cycle;
			}
		}
		
		return maxI;
	}
	
	return getMaxCycles();
	
}

var start = new Date();
var out = decimalCyles(1000);
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');

// 983
// 31 ms