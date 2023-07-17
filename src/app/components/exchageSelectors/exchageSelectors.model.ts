import { createDomain } from "effector";
const currencySelector = createDomain();

// Event
export const setCurrencyFrom = currencySelector.createEvent<string>();
export const setCurrencyTo = currencySelector.createEvent<string>();

// Store
export const $currencyFrom = currencySelector
  .createStore<string>("BTC")
  .on(setCurrencyFrom, (_, from: string) => from);

export const $currencyTo = currencySelector
  .createStore<string>("ETH")
  .on(setCurrencyTo, (_, to: string) => to);
