var appView = function() {
    this.calculationForm = '#user-form'
    this.calculationInput = '#user-input'
    this.calculationResult = '#calculation'
}

appView.prototype = {
    getCalculationForm: function() {
        return document.querySelector(this.calculationForm)
    },
    getCalculationInput: function() {
        return document.querySelector(this.calculationInput)
    },
    getCalculationResult: function() {
        return document.querySelector(this.calculationResult)
    }
}