
var util = {};

util._isPentagonal = {};

util.pentagonal = index => index * (3 * index - 1) / 2;

util._isPentagonalIndex = 1;
util._isPentagonalMax = 0;

util.isPentagonal = function(value) {
	
	while (value > util._isPentagonalMax) {
		util._isPentagonalMax = util.pentagonal(util._isPentagonalIndex++);
		util._isPentagonal[util._isPentagonalMax] = true;
	}
	
	return util._isPentagonal[value] || false;
	
}

util.compareNum = function() {
	
	var indexA = 1;
	var numA;
	
	var sum, diff;
	
	while (true) {
		
		numA = util.pentagonal(++indexA);
		
		for (var indexB = indexA - 1; indexB > 0; indexB--){
			
			var numB = util.pentagonal(indexB);
			
			sum = numA + numB;
			diff = numA - numB;
			
			if (util.isPentagonal(sum) && util.isPentagonal(diff)) 
				return {
					'P(a)' : numA, 'P(b)' : numB,
					'a' : indexA, 'b' : indexB,
					'sum' : sum, 'diff' : diff,
					'D' : Math.abs(numA - numB)
				}
			
		}		
		
	}
	
	
}()

// Object { P(a): 7042750, P(b): 1560090, a: 2167, b: 1020, sum: 8602840, diff: 5482660, D: 5482660 }