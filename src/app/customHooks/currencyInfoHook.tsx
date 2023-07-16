import { currenciesInfromApi } from "@/api/currencyApi";
import { useEffect, useState } from "react";

interface CurrencyFetchData {
  currenciesData: any;
  error: Error | unknown | null;
}

export function GetCurrencyData(): CurrencyFetchData {
  const [currenciesData, setСurrenciesData] = useState<any>(null);
  const [error, setError] = useState<Error | unknown | null>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurrencyData = async () => {
      try {
        const responceCurrency = await currenciesInfromApi();

        if (responceCurrency.ok) {
          const data = await responceCurrency.json();
          setСurrenciesData(data);
        } else {
          throw new Error(`Ошибка ${responceCurrency.status}`);
        }
      } catch (err) {
        setError(err);
      }
    };
    getCurrencyData();
  }, []);

  return {
    currenciesData,
    error,
  };
}
