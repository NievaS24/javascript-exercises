const fibonacci = function(number) {
    number = parseInt(number)
    if (number < 0) return "OOPS";
    if (number == 1) return 1;
    let currentNum = 1, prevNum = 0, result = 0;
    for (let i = 1; i < number; i++) {
        result = currentNum + prevNum;
        prevNum = currentNum;
        currentNum = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
