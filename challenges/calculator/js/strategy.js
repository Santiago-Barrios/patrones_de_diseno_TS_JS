export class OperationContext {

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

export class PlusOperation {
    calculate(num1, num2) {
        return num1 + num2
    }
}

export class MinusOperation {
    calculate(num1, num2) {
        return num1 - num2
    }
}

export class MultiplicationOperation {
    calculate(num1, num2) {
        return num1 * num2
    }
}

export class DivisionOperation {
    calculate(num1, num2) {
        return num1 / num2
    }
}