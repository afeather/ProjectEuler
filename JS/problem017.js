


var numberLetters = function() {
	
	var onesWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	var teensWords = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	
	var tensWords = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	
	for (var h = 0; h < 10; h++) {
		
		var htext = h == 0 ? '': onesWords[h] + 'hundred'
		if (h != 0) console.log(htext);
		
		for (var t = 0; t < 10; t++) {
			
			var ttext = (t == 0 ? '' : tensWords[t]);
			if (t != 0) console.log(htext +'and' + ttext);
			
			for (var o = 1; o < 10; o++) {
				var otext = onesWords[o];
				console.log(t == 1 ? htext + otext);
			}
			
		}
		
	}
	
	
}

numberLetters();