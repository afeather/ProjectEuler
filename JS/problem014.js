//
//
// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
//
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

(function(){

    var c = {1:1};
    var collatz = n => c[n] || (c[n] = 1 + collatz(n % 2 ? 3 * n + 1 : n / 2));

    var longestchain = function(lim) {

        var start = 1, max = maxstart = 0;

        while (++start < lim)
            if (collatz(start) > max)
                [max, maxstart] = [collatz(start), start];

        return maxstart;


    }


    var start = new Date();
    var out = longestchain(1e6);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})();
