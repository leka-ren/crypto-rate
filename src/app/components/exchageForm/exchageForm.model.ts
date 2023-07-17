import { $currencyDataPriceValue } from "@/states/getCurrencyData";
import { createStore, sample } from "effector";
import {
  $currencyFrom,
  $currencyTo,
} from "../exchageSelectors/exchageSelectors.model";
import { $currencyInput } from "../exchageValueInput/exchangeInput.model";

// Store
export const $exchangeResult = createStore<any>(null);

sample({
  clock: $currencyInput,
  source: {
    $currencyDataPriceValue,
    $currencyFrom,
    $currencyTo,
  },
  fn: (...data) => {
    console.log(data);
    const currencyFromUSD =
      Number(data[1]) *
      Number(data[0].$currencyDataPriceValue[data[0].$currencyFrom]);
    const currencyToUSD =
      Number(currencyFromUSD) /
      Number(Number(data[0].$currencyDataPriceValue[data[0].$currencyTo]));

    return currencyToUSD;
  },
  target: $exchangeResult,
});
