const reverseString = function(string) {
    let newString = "";
    let length = string.length;
    for (let i = 1 ; i <= length ; i++) {
        newString += string[length - i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
