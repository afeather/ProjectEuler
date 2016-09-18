
var lychrel = {
	
	reverse : num => parseInt(num.toString().split('').reverse().join('')),
	
	isPalindrome : function(num) {
		var str = num.toString();
		return str.slice(0, str.length/2).split('').reverse().join('') == str.slice(Math.ceil(str.length/2));
	},
	
	lookup : {},
	
	isLychrel : function(start, count = 1) {
		
		if (count == 50) return true;
		
		if (lychrel.lookup[start])
			return lychrel.lookup[start];
		
		next = start + lychrel.reverse(start);
		
		if (lychrel.isPalindrome(next))
			lychrel.lookup[start] = false;
		
		else if (next == start)
			lychrel.lookup[start] = true;
		
		else
			lychrel.lookup[start] = lychrel.isLychrel(next, count + 1);
		
		return lychrel.lookup[start];
		
	},
	
	findLychrel : function(limit = 10000) {
		
		var count = 0;
		
		for (var i = 1; i < limit; i++)
			if (lychrel.isLychrel(i))
				count++;
			
		return count;
		
	}
	
}

var start = new Date();
var count = lychrel.findLychrel();
var end = new Date();

console.log(count);
console.log(end.getTime() - start.getTime(), 'ms');

// 249
// 245 ms
