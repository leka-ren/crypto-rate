import axios from "axios";

export const currenciesInfromApi = async () =>
  axios(
    `${process.env.URL_CRYPTO_RANK}/v1/currencies/?api_key=${process.env.API_KEY}&limit=10`
  );
