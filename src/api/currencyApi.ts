import axios from "axios";

const url_crypto_rank = "https://api.cryptorank.io";
const api_key = "d99b9b2a736dc73aff11b86bd5d984366f059dbded1b30cd3edc48c73871";

export const currenciesInfromApi = async () =>
  axios(`${url_crypto_rank}/v1/currencies/?api_key=${api_key}&limit=10`);
