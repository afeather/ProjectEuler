// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

var n = [], d = [];
for (var num = 10; num < 100; num++) {
	if (num % 10 != 0) {
		for (var den = num + 1; den < 100; den++) {
			
			ndig = num.toString().split('').map((n) => parseInt(n));
			ddig = den.toString().split('').map((n) => parseInt(n));
			
			if (ndig[0] == ddig[0] && num / den == ndig[1] / ddig[1]) { n.push(num); d.push(den); }
			if (ndig[1] == ddig[0] && num / den == ndig[0] / ddig[1]) { n.push(num); d.push(den); }
			if (ndig[0] == ddig[1] && num / den == ndig[1] / ddig[0]) { n.push(num); d.push(den); }
			if (ndig[1] == ddig[1] && num / den == ndig[0] / ddig[0]) { n.push(num); d.push(den); }
			
		}
	}
}

nprod = n.reduce((s,x) => s * x);
dprod = d.reduce((s,x) => s * x);

var gcd = (a,b) => !b ? a : gcd(b, a%b);
dprod = dprod / gcd(nprod, dprod);
