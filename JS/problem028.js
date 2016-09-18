
// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

function spiral(size = 1001) {
	
	if (size % 2 == 0) return undefined;
	
	var sum = 1;
	var last = 1;
	
	for (var i = 2; i < size; i += 2)
		for (var j = 0; j < 4; j++)
			sum += (last = last + i);
		
	return sum;
	
}



var start = new Date();
var out = spiral();
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');

// 669171001
// 1 ms