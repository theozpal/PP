window.onload = function () {
    var view = new appView()
    var model = new appModel()
    var controller = new Controller(view, model)
    controller.Listener()
}

var Controller = function (view, model) {
    this.view = view;
    this.model = model;
}

Controller.prototype = {
    // Adds an event listener to form.
    Listener: function () {
        var calculationForm = this.view.getCalculationForm();
        calculationForm.addEventListener('submit', (event) => {
            this.handleForm(event)
        })
    },
    // Checks if the input is valid and calls other functions on it. 
    // Finally sets output to textarea.
    handleForm: function (event) {
        event.preventDefault()
        var calculationInput = this.view.getCalculationInput()
        if (!calculationInput.checkValidity()) {
            this.view.calculationResult.innerHTML = input.validationMessage;
        } else {
            this.model.inputLetters = this.view.getCalculationInput().value
            var result = this.model.calculate()
            var primeCheck = this.model.isPrime(result);
            this.view.getCalculationResult().innerHTML = this.view.getCalculationInput().value.concat(" = ", 
            result, primeCheck ? " is a PRIME number" : " is NOT a PRIME number");
            this.view.getCalculationForm().reset();
        }
    }
}
