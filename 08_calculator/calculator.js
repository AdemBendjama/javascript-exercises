const add = function (nbr1, nbr2) {
    return (nbr1) + (nbr2);
};

const subtract = function (nbr1, nbr2) {
    return (nbr1) - (nbr2);
};

const sum = function (array) {
    let result = 0;
    array.forEach(element => {
        result += (element);
    });

    return result;
};

const multiply = function (array) {
    if (array.length == 0) return 0;
    let result = 1;
    array.forEach(element => {
        result *= (element);
    });

    return result;
};

const power = function (nbr, power) {
    if (power == 0) return 0;
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= nbr;
    }

    return result;
};

const factorial = function (nbr) {

    if (nbr == 0) {
        return 1;
    } else {
        return nbr * factorial(nbr - 1);
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
