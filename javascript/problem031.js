
/*

1 : 1 				(1)
2 : 2, 1 * 2 		(2)
3 : 2 + 1, 1 * 3

*/

var coinSum = function(total = 200) {
	
	var coins = [1,2,5,10,20,50,100,200];
	var count = 0;
	
	var lookup = { 1 : 1};
	
	var waysToMake = function(target) {
		
		if (!lookup[target]) {
			
			var ways = 0;
			
			for (var i = 0; i < coins.length; i++)
				if (coins[i] < target) 
					ways += (waysToMake(target - coins[i]));
				else if (coins[i] == target)
					ways += 1;
			
			lookup[target] = ways;
			
		}
		
		return lookup[target];
		
	}
	
	return waysToMake(total);
	
}

coinSum(200);