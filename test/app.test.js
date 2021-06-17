const { calculate, isPrime, mockCalculationInput } = require('../public/js/functions')

//  isPrime
describe("isPrime", () => {
    it("returns if a number is prime or not", () => {
        expect(isPrime(31)).toEqual(true)
    })
})

describe("isPrime", () => {
    it("returns if a number is prime or not", () => {
        expect(isPrime(120)).toEqual(false)
    })
})

describe("isPrime", () => {
    it("returns if a number is prime or not", () => {
        expect(isPrime(1)).toEqual(false)
    })
})

//  calculate
describe("calculate", () => {
    it("returns if a number is prime or not", () => {
        expect(calculate('aaa')).toEqual(3)
    })
})

describe("calculate", () => {
    it("returns if a number is prime or not", () => {
        expect(calculate('zzzzzzzzzz')).toEqual(260)
    })
})

describe("calculate", () => {
    it("returns if a number is prime or not", () => {
        expect(calculate('abcde')).toEqual(15)
    })
})

// Input Validation
describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('a')).toEqual(true)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('A')).toEqual(true)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('9')).toEqual(false)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('ABCDEFGHIJ')).toEqual(true)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('ABCDEFGHIJKLM')).toEqual(false)
    })
})


describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('qwe')).toEqual(true)
    })
})


describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('123456789')).toEqual(false)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('ASD293iu')).toEqual(false)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('abcd=`;')).toEqual(false)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput(';1`&^')).toEqual(false)
    })
})

describe("Input validation", () => {
    it("returns true if input is in given conditions", () => {
        expect(mockCalculationInput('returns true if input is in given conditions')).toEqual(false)
    })
})

