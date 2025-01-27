const sumAll = function(start, end) {
    if (start < 0 || end < 0 || 
        !(Number.isInteger(start)) || 
        !(Number.isInteger(end))) {
        return "ERROR";
    }
    if (start > end) {
        let aux = end;
        end = start;
        start = aux;
    }
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
