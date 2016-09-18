
function digitSum(val) {
	
	var getDigitAt = index => Math.floor((val % Math.pow(10, index)) / Math.pow(10, index-1));
	var digits = (function() {
		var digits = [];
		for (var i = 1; Math.pow(10, i-1) < val; i++)
			digits.push(getDigitAt(i));
		return digits;
	})();
	
	var digitSum = digits.reduce((sum, digit) => sum + digit);
	
	return digitSum;
	
};

console.log(digitSum(Math.pow(2,1000)));