/**
 * Binance API Service
 * Free crypto market data API (no key required for public endpoints)
 *
 * Rate Limits: ~1200 requests/minute
 * More info: https://binance-docs.github.io/apidocs/spot/en/
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

/**
 * Binance Kline (candlestick) response format:
 * [
 *   Open time,
 *   Open,
 *   High,
 *   Low,
 *   Close,
 *   Volume,
 *   Close time,
 *   Quote asset volume,
 *   Number of trades,
 *   Taker buy base asset volume,
 *   Taker buy quote asset volume,
 *   Ignore
 * ]
 */
type BinanceKline = [
  number, // Open time
  string, // Open
  string, // High
  string, // Low
  string, // Close
  string, // Volume
  number, // Close time
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string  // Ignore
];

/**
 * Map time periods to Binance intervals and limits
 * Intervals: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M
 */
interface TimePeriodConfig {
  interval: string;
  limit: number;
}

const TIME_PERIOD_CONFIG: Record<TimePeriod, TimePeriodConfig> = {
  '1H': { interval: '1m', limit: 60 },      // 60 minutes
  '1D': { interval: '5m', limit: 288 },     // 24 hours (5-min candles)
  '1W': { interval: '1h', limit: 168 },     // 7 days (hourly)
  '1M': { interval: '4h', limit: 180 },     // 30 days (4-hour candles)
  '1Y': { interval: '1d', limit: 365 },     // 365 days (daily)
  'All': { interval: '1w', limit: 1000 },   // Max weekly candles
};

/**
 * Fetch klines (candlestick) data from Binance
 */
export async function fetchKlines(
  symbol: string,
  interval: string,
  limit: number
): Promise<BinanceKline[]> {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;

  console.log('Fetching Binance klines:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Binance API error:', response.status, errorText);
    throw new Error(`Binance API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Binance klines received:', data?.length, 'candles');
  return data || [];
}

/**
 * Convert Binance klines to candlestick format
 */
export function convertToCandlestickData(klines: BinanceKline[]): CandlestickData[] {
  return klines.map((kline) => ({
    time: Math.floor(kline[0] / 1000), // Convert ms to seconds
    open: parseFloat(kline[1]),
    high: parseFloat(kline[2]),
    low: parseFloat(kline[3]),
    close: parseFloat(kline[4]),
  }));
}

/**
 * Convert Binance klines to area chart format (using close prices)
 */
export function convertToAreaData(klines: BinanceKline[]): AreaData[] {
  return klines.map((kline) => ({
    time: Math.floor(kline[0] / 1000), // Convert ms to seconds
    value: parseFloat(kline[4]), // Close price
  }));
}

/**
 * Fetch area chart data for a specific time period
 */
export async function fetchAreaChartData(
  symbol: string,
  timePeriod: TimePeriod
): Promise<AreaData[]> {
  const config = TIME_PERIOD_CONFIG[timePeriod];
  const klines = await fetchKlines(symbol, config.interval, config.limit);
  return convertToAreaData(klines);
}

/**
 * Fetch candlestick chart data for a specific time period
 */
export async function fetchCandlestickChartData(
  symbol: string,
  timePeriod: TimePeriod
): Promise<CandlestickData[]> {
  const config = TIME_PERIOD_CONFIG[timePeriod];
  const klines = await fetchKlines(symbol, config.interval, config.limit);
  return convertToCandlestickData(klines);
}

/**
 * Get current price for a symbol
 */
export async function fetchCurrentPrice(symbol: string): Promise<number> {
  const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;

  console.log('Fetching current price:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Binance price API error:', response.status, errorText);
    throw new Error(`Binance API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Price data received:', data);
  return parseFloat(data.price) || 0;
}

/**
 * Map crypto badge names to Binance symbols (always paired with USDT)
 */
export const SYMBOL_MAP: Record<string, string> = {
  BTC: 'BTCUSDT',
  ETH: 'ETHUSDT',
  LTC: 'LTCUSDT',
  XRP: 'XRPUSDT',
  DASH: 'DASHUSDT',
  XMR: 'XMRUSDT',
  ADA: 'ADAUSDT',
  MIOTA: 'IOTAUSDT', // IOTA on Binance
  BCH: 'BCHUSDT',
  USDT: 'USDCUSDT', // USDT paired with USDC for reference
};

/**
 * Legacy export for backwards compatibility
 * @deprecated Use SYMBOL_MAP instead
 */
export const COIN_ID_MAP = SYMBOL_MAP;
