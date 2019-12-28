// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

var perms = [], used = [];
function perm(avail) {
	if (avail.length == 0) perms.push(used.slice());
	
	for (var i = 0; i < avail.length; i++) {
		var next = avail.splice(i,1)[0];
		used.push(next);
		perm(avail.slice());
		avail.splice(i,0,next);
		used.pop();
	}
	
	return perms;
}

perm([1,2,3,4,5,6,7,8,9]);

var products = [];
function validProducts(input) {
	for (var i = 1; i <= input.length - 2; i++) {
		var a = input.slice(0,i).join('') * 1;
		
		for (var j = i+1; j <= input.length - 1; j++) {
			var b = input.slice(i,j).join('') * 1;
			var c = input.slice(j  ).join('') * 1;
			
			if (a * b == c && products.indexOf(c) == -1) 
				products.push(c);
		}
	}
}

perms.forEach(validProducts);
products.reduce((total,next) => total + next);
