
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

(function() {

    var largestpalindrome = function(digits) {

        var ispalindrome = num => num.toString() == num.toString().split('').reverse().join('');

        var start = Math.pow(10, digits - 1);
        var end   = Math.pow(10, digits);

        var max = 0;
        var prod;

        for (var a = start; a < end; a++) {
            for (var b = start; b <= a; b++) {
                prod = a * b;
                if (prod > max && ispalindrome(prod)) max = prod;
            }
        }

        return max;
    }

    var start = new Date();
    var out = largestpalindrome(3);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');

})();
