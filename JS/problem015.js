//
//
// Starting in the top left corner of a 2×2 grid, and only being able to move to
// the right and down, there are exactly 6 routes to the bottom right corner.
//
// How many such routes are there through a 20×20 grid?

(function() {

    var countpaths = function(size) {

        var fact = n => n == 1 ? 1 : n * fact(n-1);

        return fact(size * 2) / (s => s * s)(fact(size));

    }

    var start = new Date();
    var out = countpaths(20);
    var end = new Date();

    console.log(out, end.getTime() - start.getTime(), 'ms');
})();
