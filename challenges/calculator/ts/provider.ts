import { StrategyCalculator } from "./interface";
import { Operators } from "./enum";

export const Provider = (
  providers: Record<string, StrategyCalculator>,
  operator: Operators
) => {
  const operation = operator;
  const providerKey =
    Object.keys(providers).find((key) => key === operation) || Operators.add;
  const provider = providers[providerKey];
  return provider;
};
