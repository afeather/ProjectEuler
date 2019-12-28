
var Champernowne = {
	
	/*
	
	[1-9]
	9 numbers, 1 digits each -> 9 digits [1 - 9]
	[10-99]
	90 numbers, 2 digits each -> 180 digits, [10-190]
	[100-999]
	900 numbers, 3 digits each -> 2700 digits, [191-2890]
	[1000-9999]
	9000 numbers, 4 digits each -> 36000 digits, [2891-38890]
	[10000-99999]
	90000 numbers, 5 digits each -> 450000 digits, [38891-488890]
	[100000-999999]
	900000 numbers, 6 digits each -> 5400000 digits, [488891-5888890]
	
	
	*/

	digitAt : function(index) {
	
		var index2, number, offset;
	
		if (index < 1) return undefined;
		// 1 - 9
		if (index < 10) return index;
		// 10 - 99
		if (index <= 190) {
			index2 = index - 10;
			number = index2 / 2;
			offset = index2 % 2;
			
			return parseInt((number + 10).toString().charAt(offset));
		}
		// 100 - 999
		if (index <= 2890) {
			index2 = index - 190;
			number = index2 / 3;
			offset = index2 % 3;
			
			return parseInt((number + 100).toString().charAt(offset));
		}
		// 1000 - 9999
		if (index <= 38890) {
			index2 = index - 2890;
			number = index2 / 4;
			offset = index2 % 4;
			
			return parseInt((number + 1000).toString().charAt(offset));
		}
		// 10000 - 99999
		if (index <= 488890) {
			index2 = index - 38890;
			number = index2 / 5;
			offset = index2 % 5;
			
			return parseInt((number + 10000).toString().charAt(offset));
		}
		// 100000 - 999999
		if (index <= 5888890) {
			index2 = index - 488890;
			number = index2 / 6;
			offset = index2 % 6;
			
			return parseInt((number + 100000).toString().charAt(offset));
		}	
	},
	
	cheatStr : "",
	cheatCount : 0,
	
	cheat : function(index) {
		
		while (Champernowne.cheatStr.length <= index){
			Champernowne.cheatStr = Champernowne.cheatStr + Champernowne.cheatCount.toString();
			Champernowne.cheatCount ++;
		}
		
		return parseInt(Champernowne.cheatStr.charAt(index));
		
	}
}

var digits = [];
for (var i = 0; i < 7; i++) {
	digits.push(Champernowne.digitAt(Math.pow(10, i)));
}

var prod = 1;
digits.forEach(function(el){ prod *= el; });

console.log(digits, prod);
