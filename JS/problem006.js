

// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

(function() {

    var squaresum = lim => ( s => s*s )([...Array(lim)].map((_,i) => i+1).reduce((sum, num) => sum + num));

    var sumsquare = lim => ([...Array(lim)].map((_,i) => i+1).reduce((sum, num) => sum + (num * num)));

    var start = new Date();
    var out = squaresum(100) - sumsquare(100);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
    
})();
