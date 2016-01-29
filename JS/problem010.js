

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

(function() {

    var primesum = function(limit) {

        var isPrime = [...Array(limit)].map(_ => true);
        isPrime[0] = isPrime[1] = false;

        for (var i = 2; i < limit / 2; i++)
            for (var j = 2; i * j < limit; j++)
                isPrime[i*j] = false;

        return isPrime.map((isPrime, value) => isPrime ? value : 0).filter(val => val).reduce((sum, prime) => sum + prime);

    }

    var start = new Date();
    var out = primesum(2e6);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})();
