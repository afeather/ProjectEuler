


// 2520 is the smallest number that can be divided by each of the numbers from 1 // to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?



(function() {

    var divisibleby = function(limit) {

        var fcount = {};
        var num, num2;
        var d, c;

        for (num = 2; num <= limit; num++) {

            num2 = num;
            d = 2;

            while (num2 > 1) {

                c = 0;

                while (num2 % d == 0) {
                    c++;
                    num2 = num2 / d;
                }

                fcount[d] = fcount[d] ? Math.max(fcount[d], c) : c;

                d++;

            }

        }

        var keys = Object.keys(fcount);
        var prod = 1;

        for (var i = 0; i < keys.length; i++)
            prod = prod * Math.pow(keys[i], fcount[keys[i]]);

        return prod;

    }

    var start = new Date();
    var out = divisibleby(20);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})()
