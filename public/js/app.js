const calculationForm = document.querySelector('#user-form')
const calculationInput = document.querySelector('#user-input')
const calculationResult = document.querySelector('#calculation')

// Adds an event listener to form.
calculationForm.addEventListener('submit', (event) => {
    handleForm(event)

})
// Checks if the input is valid and calls other functions on it. 
// Finally sets the textarea to output.
function handleForm(event) {
    event.preventDefault()
    if (!calculationInput.checkValidity()) {
        calculationResult.innerHTML = input.validationMessage;
    } else {
        var inputLetters = calculationInput.value.toLowerCase()
        var result = calculate(inputLetters)
        var primeCheck = isPrime(result)
        calculationResult.innerHTML = inputLetters.concat(" = ", result, primeCheck ? " is a PRIME number" : " is NOT a PRIME number");
        var form = document.getElementById("user-form");
        form.reset();
    }
}

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


