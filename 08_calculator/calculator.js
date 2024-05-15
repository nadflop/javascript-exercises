const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const sumOfAll = array.reduce((total, currenItem) => {
    return total + currenItem;
  }, 0);

  return parseInt(sumOfAll);
};

const multiply = function(array) {
  const multiplyAll = array.reduce((total, currenItem) => {
    return total * currenItem;
  },1);

  return parseInt(multiplyAll);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num < 0) return -1;
  else if (num == 0) return 1;
  else return (num * factorial(num-1));
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
