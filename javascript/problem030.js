

var digitPowers = function(power = 5) {
	
	var getDigitPower = num => num.toString().split('').map(digit => Math.pow(parseInt(digit), power)).reduce((sum, val) => sum + val);
	
	var isDigitPowerEqual = num => num == getDigitPower(num);
	
	var getAllDigitPowerEqual = function() {
		sum = 0;
		
		for (var i = 2; i < Math.pow(10, power+1); i++)
			if (isDigitPowerEqual(i)) sum += i;
		
		return sum;
	}
	
	return getAllDigitPowerEqual();
	
}

var start = new Date();
var out = digitPowers(5);
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');

// 443839
// 6193 ms