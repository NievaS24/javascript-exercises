const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    string = string
                        .toLowerCase()
                        .split("")
                        .filter(item => alphanumerical.includes(item))
                        .join("");

    const reverseString =  string
                                .split("")
                                .reverse()
                                .join("");
    return string == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
