'use strict';

	var namescores = function(raw){
		
		var letterIndex = (function(){
			var obj = {};
			for (var i = 0; i < 26; i++)
				obj[String.fromCharCode(65 + i)] = i + 1;
			return obj;
		})();
		
		var merge = function(left, right){
						
			var indexL = 0;
			var indexR = 0;
			var sorted = [];
			
			while (indexL < left.length && indexR < right.length)
				if (left[indexL] <= right[indexR]) sorted.push(left[indexL++]);
				else sorted.push(right[indexR++]);
				
			while (indexL < left.length)
				sorted.push(left[indexL++]);
			
			while (indexR < right.length)
				sorted.push(right[indexR++]);
				
			return sorted;
			
		}
		
		var mergesort = function(arr, stop=2) {
			
			if (arr.length == 1) return arr;
			
			var piv = arr.length/2;
			var left = mergesort(arr.slice(0,piv), stop-1);
			var right = mergesort(arr.slice(piv), stop-1);
			
			return merge(left, right);
			
		}
		
		var names = mergesort(raw.split(',').map(name => name.split('').slice(1,-1).join('')));
		
		var getScore = (name, index) => name.split('').map(letter => letterIndex[letter]).reduce((sum, val) => sum + val) * index;
		
		return names.map(getScore).reduce((sum, val) => sum + val);
		
	}

	var getFile = (function(){
			
		var url = 'https://projecteuler.net/project/resources/p022_names.txt';
		
		var r = new XMLHttpRequest();
		r.onreadystatechange = function() {
			if (r.status != 200 || r.readyState != 4) return;
			
			var content = r.responseText;
			
			var start = new Date();
			var out = namescores(content);
			var end = new Date();
			
			console.log(out);
			console.log(end.getTime() - start.getTime(), 'ms');
			
		}
		r.open('GET', url, true);
		r.send();
		
	})();
	
// 870873746
// 20 ms