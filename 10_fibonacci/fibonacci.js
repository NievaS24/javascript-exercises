const fibonacci = function(number) {
    number = parseInt(number)
    if (number < 0) {
        return "OOPS";
    } else if (number == 1) {
        return 1;
    }
    let currentNum = 1;
    let prevNum = 0;
    let result = 0;
    for (let i = 1; i < number; i++) {
        result = currentNum + prevNum;  // 1 - 2 - 3
        prevNum = currentNum; // 1 - 1 -2
        currentNum = result; // 1 - 2 - 3
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
