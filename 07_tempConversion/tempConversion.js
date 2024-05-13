const convertToCelsius = function(temperature) {
  var result = Math.round(((temperature - 32) * (5/9)) * 10) / 10;
  return result;
};

const convertToFahrenheit = function(temperature) {
  var result = Math.round((temperature * (9/5) + 32) * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
