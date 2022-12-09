const fibonacci = function (nbr) {
    //
    if (nbr < 0) return "OOPS";

    if (nbr == 1 || nbr == 2) {
        return 1;
    } else if (nbr == 0) {
        return 0;
    } else {
        return fibonacci(nbr - 1) + fibonacci(nbr - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
