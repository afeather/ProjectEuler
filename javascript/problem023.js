
var abundant = function(limit = 28123) {
	
	var divisorSums = (function(){
		
		var sieve = [-1];
		
		for (var i = 1; i < limit; i++)
			sieve.push(1);
				
		for (var a = 2; a < limit; a++)
			for (b = 2; b * a < limit; b++)
				sieve[a*b] += a;
			
		return sieve;
		
	});
	
	var abundant = (function() {
		
		var sums = divisorSums();
		var abundant = [];
		
		sums.forEach((sum, index) => { if (sum > index) abundant.push(index); });
		
		return abundant;
		
	})();
	
	var abundantSums = (function() { var arr = []; for (var i = 0; i < limit; i++) arr.push(false); return arr; })();
	
	for (var i = 0; i < limit; i++) {
		for (var j = 0; j <= i && abundant[i] + abundant[j] < limit ; j++) {
			abundantSums[abundant[i] + abundant[j]] = true;
		}
	}
	
	return abundantSums.reduce((sum, isAbundantSum, num) => isAbundantSum ? sum : sum + num, 0)
	
	
}

abundant();