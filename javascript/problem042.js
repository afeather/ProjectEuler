


function triangleWords(words) {
	
	var letterIndex = (function(){
		var obj = {};
		for (var i = 0; i < 26; i++)
			obj[String.fromCharCode(65 + i)] = i + 1;
		return obj;
	})();
	
	var _isTriangle = [];
	var _triangleIndex = 0;
	var _calcTriangleAt = index => .5 * index * (index + 1);
	
	var isTriangle = function(val) {
		
		while (_isTriangle.length < val) {
			
			var nextTriangle = _calcTriangleAt(++_triangleIndex);
			
			while(_isTriangle.length < nextTriangle) _isTriangle.push(false);
			_isTriangle.push(true);
			
		}
		
		return _isTriangle[val];
		
	}
	
	var sumLetters = word => word.split('').map(letter => letterIndex[letter]).reduce((sum,val) => sum + val);
	
	return words.reduce((count, word) => isTriangle(sumLetters(word)) ? count + 1 : count, 0);
	
}

function timeProblem(func) {
	var start = new Date();
	var out = func();
	var end = new Date();

	console.log(out);
	console.log(end.getTime() - start.getTime(), 'ms');
}

(function getWords() {
	
	var url = 'https://projecteuler.net/project/resources/p042_words.txt';
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() { 
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4)
			timeProblem(function() { triangleWords(xmlhttp.responseText.split(',').map(word => word.split('').slice(1,-1).join(''))) }); 
	}
	xmlhttp.open('GET', url, true);
	xmlhttp.send();
	
})();
