import { createDomain } from "effector";
const currencyInput = createDomain();

// Event
export const setCurrencyInput = currencyInput.createEvent<string>();

// Store
export const $currencyInput = currencyInput
  .createStore<string>("1")
  .on(setCurrencyInput, (_, inputValue: string) => inputValue);
