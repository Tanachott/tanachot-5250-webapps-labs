const formatConversion = (temp, coversion) => console.log(coversion(temp));

const convertClesiusToFahrenheit = (temp) => `${temp} Celsius is equal to ${(temp * 9 / 5) + 32} Fahrenheit.`
const convertFahrenheitToClesius = (temp) => `${temp} Fahrenheit is equal to ${(temp - 32) / 1.8} Celsius.`

formatConversion(20, convertClesiusToFahrenheit, "C");
formatConversion(98.6, convertFahrenheitToClesius, "F");
formatConversion(0, convertClesiusToFahrenheit, "C");
formatConversion(32, convertFahrenheitToClesius, "F");