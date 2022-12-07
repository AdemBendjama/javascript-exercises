const sumAll = function (start, end) {
    //
    if (start < 0 || end < 0) return "ERROR";
    if (isNaN(start) || isNaN(end)) return "ERROR";
    if ((typeof start) === 'string' || (typeof end) === 'string') return "ERROR";

    //
    let sum = 0;
    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }


    //
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    //
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
