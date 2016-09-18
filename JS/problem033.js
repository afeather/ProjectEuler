

var fractions = function() {
	
	var digits = num => num.toString().map(parseInt);
	
	var cancelDigits = function(num, den) {
		
		var numDigits = digits(num);
		var denDigits = digits(den);
		
		
		
	}
	
	var isDigitCancelling = (num, den) => (num / den) == cancelDigits(num, den);
	
	var findDigitCancel = function() {
		
		nlist = [];
		dlist = [];
		
		for (var i = 10; i < 100; i++)
			for (var j = 10; j < 100; j++)
				if (isDigitCancelling(i,j)) {
					nlist.push(i);
					dlist.push(j);
				}
		
		return denominator(nlist, dlist);
	}
	
	
	
}