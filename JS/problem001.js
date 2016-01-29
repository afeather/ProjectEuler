
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

(function() {

    var multiples = limit => [...Array(limit-1)].map((_,i) => i + 1).reduce((sum, val) => val % 3 == 0 || val % 5 == 0 ? sum + val : sum, 0);

    var start = new Date();
    var out = multiples(1000);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');

})()
