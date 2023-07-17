import { $currencyDataPriceValue } from "@/states/getCurrencyData";
import { combine, createStore, sample } from "effector";
import {
  $currencyFrom,
  $currencyTo,
} from "../exchageSelectors/exchageSelectors.model";
import { $currencyInput } from "../exchageValueInput/exchangeInput.model";

// Store
export const $exchangeResult = combine(
  $currencyDataPriceValue,
  $currencyFrom,
  $currencyTo,
  $currencyInput,
  (currencyDataPriceValue, currencyFrom, currencyTo, currencyInput) => {
    const currencyFromUSD =
      Number(currencyInput) * Number(currencyDataPriceValue[currencyFrom]);
    const currencyToUSD =
      Number(currencyFromUSD) /
      Number(Number(currencyDataPriceValue[currencyTo]));

    return currencyToUSD;
  }
);
