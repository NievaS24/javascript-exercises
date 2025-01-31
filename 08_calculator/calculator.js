const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
    const sum = array.reduce((total, current) => total + current, 0);
    return sum;
  };
  
  const multiply = function(array) {
    const product = array.reduce((total, current) => total * current, 1);
    return product;  
};

const power = function(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
};

const factorial = function(a) {
      let result = 1;
      for (let i = a; i > 0 ; i--) {
        result *= i;
      }
      return result;
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
