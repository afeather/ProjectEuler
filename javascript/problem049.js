
var PrimePermute = {
	
	isPrime : (function(min = 1000, max = 10000) {
		
		var isPrime = [];
		
		for (var i = 0; i < max; i++)
			isPrime.push(true);
		
		isPrime[0] = isPrime[1] = false;
		
		for ( var a = 2; a < max / 2; a++ )
			
			for ( var b = 2; a * b < max; b++ )
				isPrime[a*b] = false;
			
		return isPrime.slice(min);
		
	})(),
	
	primePermutations : function(value) {
		
		var str = value.toString();
		var perm = [];
		
		var _permute = function(ch, _perm = '') {
			
			if (ch.length == 1) perm.push(parseInt(_perm + ch))
			
			var temp;
			for (var i = 0; i < ch.length; i++) {
				temp = ch.slice(0,i) + ch.slice(i+1);
				_permute(temp, _perm + ch.charAt(i));
			}
			
		}
		
		_permute(str);
		
		console.log(perm);
		
		var primePerm = [];
		perm.forEach(function(el) { if (PrimePermute.isPrime[el-1000]) primePerm.push(el); });
		
		return primePerm;
		
	}
	
}

console.log(PrimePermute.primePermutations(1487));