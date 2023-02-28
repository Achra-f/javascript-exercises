const convertToCelsius = function (temp) {
  let ctemp = 0;
  let rounded = 0;
  ctemp = (temp - 32) * 5 / 9;

  rounded = Math.round(ctemp * 10) / 10;

  return rounded;

};

const convertToFahrenheit = function (temp) {
  let ftemp = 0;
  let rounded = 0;
  ftemp = (temp * 9 / 5) + 32;

  rounded = Math.round(ftemp * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
