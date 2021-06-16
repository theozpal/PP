
// Creates an array of letters from a to z, splits the out put and calculates total of the input from the array.
function calculate(inputLetters) {
    alphabet = Array.apply(null, { length: 26 }).map(function (x, i) { return String.fromCharCode(97 + i) });
    var letterList = inputLetters.split('');
    var total = 0;
    letterList.forEach((c) => total += alphabet.indexOf(c) + 1);
    return total;
}

// Checks if a given number is prime or not.
function isPrime(num) {
    if (num == 1) return false
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Mockup function to check if the given values on text field returns true or false
function mockCalculationInput(input) {
        if (input.length <= 10 && /^[a-zA-Z]+$/.test(input)) return true
        else return false 
      }


module.exports = { calculate, isPrime, mockCalculationInput }
