var appModel = function() {
    this.inputLetters = '';
    this.total = 0
    this.isPrime
}

appModel.prototype = {
    // Creates an array of letters from a to z, splits the out put and calculates total of the input from the array.
    calculate: function() {
        this.inputLetters = this.inputLetters.toLowerCase().replace(/\s/g, '')
        console.log(this.inputLetters)
        var alphabet = Array.apply(null, { length: 26 }).map(function (x, i) { return String.fromCharCode(97 + i) });
        var inputArray = this.inputLetters.split('');
        console.log(inputArray)
        var total = 0;
        inputArray.forEach((c) => total += alphabet.indexOf(c) + 1);
        return this.total = total
    },
    
    // Checks if a given number is prime or not.
    isPrime: function() {
        if (this.total == 1) return false
        for (var i = 2; i <= Math.sqrt(this.total); i++) {
            if (this.total % i === 0) {
                return false;
            }
        }
        return true;
    }
}
