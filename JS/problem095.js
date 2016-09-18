
var util = {};

util.MILLION = 1000000;

util.time = function(func) {
	let start = new Date();
	
	func();
	
	return (new Date()).getTime() - start.getTime();
};

var chains = {};

chains.limit = util.MILLION;

chains.divisorSums = function() {
		
	var sums = (function() {
		var out = [];
		for (var i = 0; i < chains.limit; i++) out.push(1);
		return out;
	})();
	
	(chains.limit > 0) && (sums[0] = 0);
	(chains.limit > 1) && (sums[1] = 0);
	
	for (var a = 2; a < chains.limit / 2; a++)
		for (var b = 2; a * b < chains.limit; b++)
			sums[a*b] += a;
	
	return sums;
	
}();

chains.findChain = function(start) {
	
	if (start > chains.limit) return;
	
	var count = 1;
	var chain = [start];
	
	var next = chains.divisorSums[start];
	
	while (next < chains.limit && chain.indexOf(next) == -1) {
		count ++;
		chain.push(next);
		
		next = chains.divisorSums[next];
	}
	
	if (next == start) {
		var chainStr = chain.join(' -> ') + ' (' + start + ')';
		console.log(chainStr);
		return count;
	}
	
	return 0;
	
}

chains.findMaxChain = function(max = chains.limit) {
	
	var maxStart = 0;
	var maxCount = 0;
	var count;
	
	for (var i = 0; i < max; i++) {
		
		count = chains.findChain(i);
		
		if (count > maxCount) {
			maxStart = i;
			maxCount = count;
		}
		
	}
	
	console.log(maxStart, maxCount);
	
}

console.log(util.time(chains.findMaxChain) + 'ms');


// 14316 28
// 97051ms

// 14316  -> 19116  -> 31704  -> 47616  -> 83328  -> 177792 -> 295488 -> 
// 629072 -> 589786 -> 294896 -> 358336 -> 418904 -> 366556 -> 274924 -> 
// 275444 -> 243760 -> 376736 -> 381028 -> 285778 -> 152990 -> 122410 -> 
// 97946  -> 48976  -> 45946  -> 22976  -> 22744  -> 19916  -> 17716  -> (14316)