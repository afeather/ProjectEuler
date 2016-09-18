
// A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.

// During an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent).

// Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:

// OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
// OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
// AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
// AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
// LAOO LAOA LAAO

// How many "prize" strings exist over a 30-day period?

'use strict';

var lookup = {};

var countStr = function(len, absent=0, late=false) {
	
	if (!lookup[len]) lookup[len] = {};
	if (!lookup[len][late]) lookup[len][late] = {};
	
	if (lookup[len][late][absent]) 
		return lookup[len][late][absent];
	
	count = len == 0 ? 1 : (!late ? countStr(len-1, 0, true) : 0) + (absent < 2 ? countStr(len-1, absent+1, late) : 0) + countStr(len-1, 0, late);
	
	lookup[len][late][absent] = count;
	
	return count;
	
}


var start = new Date();
var count = countStr(30);
var end = new Date();

var time = end.getTime() - start.getTime();

console.log(count);
console.log(time, 'ms');

// 1918080160
// 0 ms