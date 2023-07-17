import { currenciesInfromApi } from "@/api/currencyApi";
import { CurrencyData } from "@/types/currency.types";
import { combine, createDomain, forward } from "effector";
const currencyDomain = createDomain();

// Event
export const getCurrencyData = currencyDomain.createEvent();

//Effects
export const getCurrencyDataFx =
  currencyDomain.createEffect(currenciesInfromApi);

// Store
export const $currencyData = currencyDomain
  .createStore<Array<CurrencyData>>([])
  .on(getCurrencyDataFx.doneData, (_, res: any) => res.data.data);

export const $currencyDataPriceValue = combine(
  $currencyData,
  (currencyData) => {
    const priceValue = currencyData.reduce(
      (
        acc: {
          [key: string]: number;
        },
        el
      ) => {
        acc[el.symbol] = el.values.USD.price;
        return acc;
      },
      {}
    );
    return priceValue;
  }
);

// Relation
forward({
  from: getCurrencyData,
  to: getCurrencyDataFx,
});
