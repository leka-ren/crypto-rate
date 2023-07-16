export async function currenciesInfromApi() {
  const currency = await fetch(
    `${process.env.URL_CRYPTO_RANK}/v1/currencies/?api_key=${process.env.API_KEY}&limit=10`
  );
  return currency;
}
