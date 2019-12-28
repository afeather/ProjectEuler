getDivisorCount = function(limit) {
	
	var sieve = [...Array(limit)].map(_=>2);
	
	for (var a = 2; a < limit; a++)
		for (var b = 2; a * b < limit; b++)
			sieve[a*b]++;
	
	return sieve;
}

// get a range error.. array limit = 1e10
getDivisorCount(1e12).map((count, index) => count == 8 ? index : false).filter(val => val).length;