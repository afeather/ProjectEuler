
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

(function() {

    var primefactors = function(num) {

        var d = 2;

        while (num > 1) {

            while (num % d == 0) num = num / d;

            d = d + 1;

        }

        return d - 1;

    }


    var start = new Date();
    var out = primefactors(600851475143);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');

})();
