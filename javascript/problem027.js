

var primeQuadratic = function(limit = 1000){
	
	var sieve = [false, false];
	
	var isPrime = function(val) {
		
		while(val >= sieve.length) {
			
			var size = sieve.length * 2;
			
			while (sieve.length < size) 
				sieve.push(true);
			
			for (var i = 2; i < sieve.length / 2; i++)
				for (var j = 2; i * j < sieve.length; j++)
					sieve[i*j] = false;
			
		}
		
		return sieve[val];
		
	}
	
	var countPrimes = function(a,b) {
		
		var n = 0;
		
		var equation = n => Math.pow(n,2) + a * n + b;
		
		while (isPrime(equation(n))) n++
		
		return n;
		
	}
	
	var getEquations = function() {
		
		var maxA, maxB, maxCount = 0;
		var count;
		
		for (var a = limit * -1; a < limit; a++)
			for (var b = limit * -1; b < limit; b++){
				count = countPrimes(a,b);
				if (count > maxCount) {
					maxA = a;
					maxB = b;
					maxCount = count;
				}
			}
				
		return maxA * maxB;
		
	}
	
	return getEquations();
	
}

var start = new Date();
var out = primeQuadratic();
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');