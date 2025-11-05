/**
 * CoinGecko API Service
 * Free crypto market data API (no key required)
 */

export interface CandlestickData {
  time: number; // Unix timestamp in seconds
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface AreaData {
  time: number; // Unix timestamp in seconds
  value: number;
}

export type TimePeriod = '1H' | '1D' | '1W' | '1M' | '1Y' | 'All';

// Map time periods to days for CoinGecko API
const TIME_PERIOD_DAYS: Record<TimePeriod, number | 'max'> = {
  '1H': 1,
  '1D': 1,
  '1W': 7,
  '1M': 30,
  '1Y': 365,
  'All': 'max',
};

/**
 * Fetch market chart data from CoinGecko
 */
export async function fetchMarketChart(
  coinId: string = 'bitcoin',
  vsCurrency: string = 'usd',
  days: number | 'max' = 7
): Promise<[number, number][]> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}`;

  console.log('Fetching market chart:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('CoinGecko API error:', response.status, errorText);
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Market chart data received:', data.prices?.length, 'data points');
  return data.prices || []; // Array of [timestamp, price]
}

/**
 * Fetch OHLC (candlestick) data from CoinGecko
 */
export async function fetchOHLC(
  coinId: string = 'bitcoin',
  vsCurrency: string = 'usd',
  days: number | 'max' = 7
): Promise<[number, number, number, number, number][]> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=${vsCurrency}&days=${days}`;

  console.log('Fetching OHLC data:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('CoinGecko OHLC API error:', response.status, errorText);
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('OHLC data received:', data?.length, 'candles');
  return data || []; // Array of [timestamp, open, high, low, close]
}

/**
 * Convert CoinGecko market chart data to area chart format
 */
export function convertToAreaData(prices: [number, number][]): AreaData[] {
  return prices.map(([timestamp, price]) => ({
    time: Math.floor(timestamp / 1000), // Convert to seconds
    value: price,
  }));
}

/**
 * Convert CoinGecko OHLC data to candlestick format
 */
export function convertToCandlestickData(
  ohlc: [number, number, number, number, number][]
): CandlestickData[] {
  return ohlc.map(([timestamp, open, high, low, close]) => ({
    time: Math.floor(timestamp / 1000), // Convert to seconds
    open,
    high,
    low,
    close,
  }));
}

/**
 * Fetch area chart data for a specific time period
 */
export async function fetchAreaChartData(
  coinId: string,
  timePeriod: TimePeriod
): Promise<AreaData[]> {
  const days = TIME_PERIOD_DAYS[timePeriod];
  const prices = await fetchMarketChart(coinId, 'usd', days);
  return convertToAreaData(prices);
}

/**
 * Fetch candlestick chart data for a specific time period
 */
export async function fetchCandlestickChartData(
  coinId: string,
  timePeriod: TimePeriod
): Promise<CandlestickData[]> {
  const days = TIME_PERIOD_DAYS[timePeriod];

  // CoinGecko's OHLC endpoint only supports certain day ranges
  // For very short periods, we'll use market_chart instead
  if (timePeriod === '1H' || timePeriod === '1D') {
    const prices = await fetchMarketChart(coinId, 'usd', days);
    // Convert to simple candlesticks (using price as OHLC)
    return prices.map(([timestamp, price]) => ({
      time: Math.floor(timestamp / 1000),
      open: price,
      high: price,
      low: price,
      close: price,
    }));
  }

  const ohlc = await fetchOHLC(coinId, 'usd', days);
  return convertToCandlestickData(ohlc);
}

/**
 * Get current price for a coin
 */
export async function fetchCurrentPrice(
  coinId: string = 'bitcoin',
  vsCurrency: string = 'usd'
): Promise<number> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${vsCurrency}`;

  console.log('Fetching current price:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('CoinGecko price API error:', response.status, errorText);
    throw new Error(`CoinGecko API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Price data received:', data);
  return data[coinId]?.[vsCurrency] || 0;
}

/**
 * Map crypto badge names to CoinGecko IDs
 */
export const COIN_ID_MAP: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  LTC: 'litecoin',
  XRP: 'ripple',
  DASH: 'dash',
  XMR: 'monero',
  ADA: 'cardano',
  MIOTA: 'iota',
  BCH: 'bitcoin-cash',
  USDT: 'tether',
};
