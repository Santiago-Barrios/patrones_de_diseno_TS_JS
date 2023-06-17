
// import {
//     OperationContext,
//     PlusOperation,
//     MinusOperation,
//     MultiplicationOperation,
//     DivisionOperation
// } from './strategy'
const OPERATORS = {
    plus: '+',
    minus: '-',
    multiplication: '*',
    division: '/'
}

let result = document.getElementById('result');

class OperationContext {

    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    calulate(num1, num2) {
        return this.strategy.calculate(num1, num2)
    }
}

class PlusOperation {
    calculate(num1, num2) {
        return num1 + num2
    }
}

class MinusOperation {
    calculate(num1, num2) {
        return num1 - num2
    }
}

class MultiplicationOperation {
    calculate(num1, num2) {
        return num1 * num2
    }
}

class DivisionOperation {
    calculate(num1, num2) {
        return num1 / num2
    }
}

function append(num) {
    result.value += num;
}

function clearResult() {
    result.value = '';
}

function deleteOneValue() {
    result.value = result.value.slice(0, result.value.length - 1);
}

function getResult() {
    if (!result.value) return
    let value = result.value
    const numbers = value.split(/[+\-*/]/).map(Number)
    const operators = value.match(/[+\-*/]/g)
    if (!operators) return
    calculateResult(numbers, operators)
}

const providerStrategy = (providers, currentOperation) => {
    const operatation = currentOperation
    const providerKey =
        Object.keys(providers).find(key => key === operatation) || OPERATORS.plus
    const provider = providers[providerKey]

    return provider
}

const chooseOperation = (operatorArr) => {
    return operatorArr[0]
}

function calculateResult(numbersArr, operatorArr) {

    let answer = 0
    const cicles = operatorArr.length
    for (let index = 0; index < cicles; index++) {
        const operationContextStrategy = providerStrategy({
            [OPERATORS.plus]: new OperationContext(new PlusOperation()),
            [OPERATORS.minus]: new OperationContext(new MinusOperation()),
            [OPERATORS.multiplication]: new OperationContext(new MultiplicationOperation()),
            [OPERATORS.division]: new OperationContext(new DivisionOperation()),
        }, chooseOperation(operatorArr))
        answer = operationContextStrategy.calulate(numbersArr[0], numbersArr[1])
        numbersArr = [answer, ...numbersArr.slice(2)];
        operatorArr.shift()
    }

    result.value = answer
}


document.addEventListener('keydown', function (event) {
    const key = event.key
    const mathOperators = ['+', '-', '*', '/'];

    if (/^\d$/.test(key)) append(key)
    if (mathOperators.includes(key)) append(key)
    if (key === 'Enter') getResult()
    if (key === 'Delete') clearResult()
    if (key === 'Delete') clearResult()
    if (key === 'Backspace') deleteOneValue()

})