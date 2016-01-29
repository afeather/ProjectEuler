

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.

// What is the 10 001st prime number?

(function() {

    var sieve = function(lim) {

        var isPrime = [...Array(lim)].map(_ => true);
        isPrime[0] = isPrime[1] = false;

        for (var i = 2; i < lim / 2; i++)
            for (var j = 2; i * j < lim; j++)
                isPrime[i*j] = false;

        return isPrime.map((isPrime, val) => isPrime ? val : 0)
                      .filter(val => val);

    }

    var nthprime = function(n) {

        var lim = 100;
        var s = sieve(lim);

        while (s.length <= n)
            s = sieve(lim = lim * 2);

        return s[n-1];

    }

    var start = new Date();
    var out = nthprime(10001);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})();
