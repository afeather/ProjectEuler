
const limit = 10000;

var Harshad = {
	
	_isPrime : (function(){
		var sieve = [];
		for (var i = 0; i < limit; i++)
			sieve.push(true);
		sieve[0] = sieve[1] = false;
			
		for (var i = 2; i < limit; i++)
			for (var j = 2; j * i < limit; j++)
				sieve[j*i] = false;
			
		return sieve;
	})(),
	
	sumDigits : num => num.toString().split('').map(digit => parseInt(digit)).reduce((sum, digit) => sum + digit, 0),
	truncate : num => parseInt(num.toString().slice(0,-1)),
	
	isHarshad : num => num % Harshad.sumDigits(num) == 0,
	
	isRightTruncatableHarshad : num => num < 10 || (Harshad.isHarshad(Harshad.truncate(num)) && Harshad.isRightTruncatableHarshad(Harshad.truncate(num))),
	
	isStrongHarshad : num => Harshad._isPrime[num / Harshad.sumDigits(num)],
	
	findAll : function() {
		
		var sum = 0;
		
		for (var i = 0; i < limit; i++)
			if (Harshad.isHarshad(i) && Harshad.isStrongHarshad(i) && Harshad.isRightTruncatableHarshad(i)) 
				(sum += i) && console.log(i);
			
		return sum;
	}

}

var start = new Date();
var sum = Harshad.findAll();
var end = new Date();

console.log(sum);
console.log(end.getTime() - start.getTime(), 'ms');

