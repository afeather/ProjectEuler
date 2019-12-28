

var distinctPowers = function(limit = 101) {

	var distinct = {};

	for (var a = 2; a < 101; a++)
		for (var b = 2; b < 101; b++) {
			var pow = Math.pow(a,b);
			distinct[pow] = true;
		}
		
	return Object.keys(distinct).length;

}

var start = new Date();
var out = distinctPowers();
var end = new Date();

console.log(out);
console.log(end.getTime() - start.getTime(), 'ms');