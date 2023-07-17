interface Tokens {
  tokenAddress: string;
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface PriceValues {
  [key: string]: {
    price: number;
    volume24h: number;
    high24h: number;
    low24h: number;
    marketCap: number;
    percentChange24h: number;
    percentChange7d: number;
    percentChange30d: number;
    percentChange3m: number;
    percentChange6m: number;
  };
}

export interface CurrencyData {
  id: number;
  rank: number;
  slug: string;
  name: string;
  symbol: string;
  category: string;
  type: string;
  volume24hBase: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  values: PriceValues;
  lastUpdated: string;
  tokens: Array<Tokens>;
}

export interface CurrencyFetchData {
  data: Array<CurrencyData>;
  meta: { count: number };
  status: Response;
}
