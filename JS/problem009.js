
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for
// which,
// a^2 + b^2 = c^2
//
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

(function() {

    var pythag = function(sum) {

        var a,b,c;

        for (a = 1; a < sum; a++) {
            for (b = 1; b < a; b++) {

                c = Math.sqrt(a*a + b*b);

                if (c == Math.floor(c) && a + b + c == sum)
                    return a * b * c;

            }
        }


    }

    var start = new Date();
    var out = pythag(1000);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})();
