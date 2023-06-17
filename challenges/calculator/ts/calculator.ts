import {
  CalculatorContext,
  Add,
  Substract,
  Division,
  Multiplication,
} from "./strategy";
import { Operators } from "./enum";
import { Provider } from "./provider";

const splitNumbersAndOperators = (
  operation: string
): [number[], Operators[]] | undefined => {
  if (!operation) return;
  let value = operation;
  const numbers: number[] = value.split(/[+\-*/]/).map(Number);
  const operators: Operators[] | undefined = value
    .match(/[+\-*/]/g)
    ?.map((operator) => operator as Operators);
  if (!operators) return;
  return [numbers, operators];
};

function calculateResult(operation: string) {
  const result = splitNumbersAndOperators(operation);
  if (result === undefined) {
    console.log("No se pudo obtener la respuesta");
    return;
  }

  let [numbersArr, operatorArr] = result;

  let answer = 0;
  const cicles = operatorArr.length;
  for (let index = 0; index < cicles; index++) {
    const operationContextStrategy = Provider(
      {
        [Operators.add]: new CalculatorContext(new Add()),
        [Operators.substract]: new CalculatorContext(new Substract()),
        [Operators.multiplication]: new CalculatorContext(new Multiplication()),
        [Operators.division]: new CalculatorContext(new Division()),
      },
      operatorArr[0]
    );
    answer = operationContextStrategy.calculate(numbersArr[0], numbersArr[1]);
    numbersArr = [answer, ...numbersArr.slice(2)];
    operatorArr.shift();
  }

  return answer;
}

const resp = calculateResult("1+2*3*3/5");
console.log(resp);
