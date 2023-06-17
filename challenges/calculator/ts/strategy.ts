import { StrategyCalculator } from "./interface";

export class CalculatorContext {
  public strategy: StrategyCalculator;
  constructor(strategy: StrategyCalculator) {
    this.strategy = strategy;
  }

  setStrategy(strategy: StrategyCalculator) {
    this.strategy = strategy;
  }

  calculate(numberOne: number, numberTwo: number): number {
    return this.strategy.calculate(numberOne, numberTwo);
  }
}

export class Add implements StrategyCalculator {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }
}

export class Substract implements StrategyCalculator {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }
}

export class Multiplication implements StrategyCalculator {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo;
  }
}

export class Division implements StrategyCalculator {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne / numberTwo;
  }
}
