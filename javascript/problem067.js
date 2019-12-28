
var TrianglePath = function(triangleStr = '75\n95 64\n17 47 82\n18 35 87 10\n20 04 82 47 65\n19 01 23 75 03 34\n88 02 77 73 07 63 67\n99 65 04 28 06 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 04 68 89 53 67 30 73 16 69 87 40 31\n04 62 98 27 23 09 70 98 73 93 38 53 60 04 23') {
	
	var triangle = triangleStr.split('\n').slice(0,-1).map(str => str.split(' ').map(val => parseInt(val)));
	
	var lookup = (function(){
		var lookup = [];
		for (var i = 0; i < triangle.length; i++) {
			lookup.push([]);
			for (var j = 0; j < triangle[i].length; j++)
				lookup[i].push(-1);
		}
		return lookup;
	})();
	
	var maxPath = function(x = 0, y = 0) {
		
		if (x == triangle.length) return 0;
		
		if (lookup[x][y] == -1)
			lookup[x][y] = triangle[x][y] + Math.max(maxPath(x+1, y), maxPath(x+1, y+1));
		
		return lookup[x][y]
		
	}
	
	return maxPath();
	
}

var getFile = (function(){
			
	var url = 'https://projecteuler.net/project/resources/p067_triangle.txt';
	
	var r = new XMLHttpRequest();
	r.onreadystatechange = function() {
		if (r.status != 200 || r.readyState != 4) return;
		
		var content = r.responseText;
		
		var start = new Date();
		var out = TrianglePath(content);
		var end = new Date();
		
		console.log(out);
		console.log(end.getTime() - start.getTime(), 'ms');
		
	}
	r.open('GET', url, true);
	r.send();
	
})();
	
// 7273
// 6 ms