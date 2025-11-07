import React, { useEffect, useRef, useState } from 'react';
import { createChart, type IChartApi, type ISeriesApi, CandlestickSeries, AreaSeries } from 'lightweight-charts';
import { TypeSelector } from '../tabs/TypeSelector';
import { PillTabs, type PillTab } from '../tabs/PillTabs';
import {
  fetchAreaChartData,
  fetchCandlestickChartData,
  fetchCurrentPrice,
  COIN_ID_MAP,
  type TimePeriod,
  type AreaData,
  type CandlestickData,
} from '../../services/coinGeckoApi';
import type { CryptoBadgeName } from '../badges/CryptoBadge';
import './CryptoChart.css';

export type ChartType = 'candle' | 'area';

export interface CryptoChartProps {
  /** Chart display type */
  type?: ChartType;
  /** Cryptocurrency to display */
  crypto?: CryptoBadgeName;
  /** Initial time period */
  initialPeriod?: TimePeriod;
  /** Show chart type toggle */
  showTypeToggle?: boolean;
  /** Show time period selector */
  showTimePeriodSelector?: boolean;
  /** Chart height in pixels */
  height?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * CryptoChart Component
 *
 * Real-time cryptocurrency price chart with CoinGecko API integration
 *
 * Features:
 * - **Chart Types**: Candlestick (OHLC) and Area charts
 * - **Toggle**: Switch between Candle and Area views with PillTabs
 * - **Time Periods**: 1H, 1D, 1W, 1M, 1Y, All
 * - **Real Data**: Live data from CoinGecko API (free, no key required)
 * - **Current Price**: Displayed above chart
 * - **Dark Theme**: Matches apex-mobile-v6-dark design system
 *
 * Chart Types:
 * - **Candle**: Candlestick (OHLC) chart showing open, high, low, close
 * - **Area**: Smooth area chart showing price trend
 *
 * Usage:
 * ```tsx
 * <CryptoChart
 *   type="candle"
 *   crypto="BTC"
 *   initialPeriod="1W"
 *   showTypeToggle={true}
 *   showTimePeriodSelector={true}
 * />
 * ```
 */
export const CryptoChart: React.FC<CryptoChartProps> = ({
  type: initialType = 'candle',
  crypto = 'BTC',
  initialPeriod = '1W',
  showTypeToggle = true,
  showTimePeriodSelector = true,
  height = 240,
  className = '',
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<any>(null);

  const [chartType, setChartType] = useState<ChartType>(initialType);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>(initialPeriod);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get CoinGecko ID from crypto badge name
  const coinId = COIN_ID_MAP[crypto] || 'bitcoin';

  // Initialize chart
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height,
      layout: {
        background: { color: '#313848' }, // --color-background-01
        textColor: '#9BAACE', // --color-text-secondary
      },
      grid: {
        vertLines: { color: '#283043' }, // --color-divider-border-03
        horzLines: { color: '#283043' },
      },
      crosshair: {
        mode: 1, // Normal crosshair
      },
      rightPriceScale: {
        borderColor: '#283043',
      },
      timeScale: {
        borderColor: '#283043',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chart) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [height]);

  // Fetch and update chart data
  useEffect(() => {
    const fetchData = async () => {
      if (!chartRef.current) {
        console.warn('Chart ref not ready');
        return;
      }

      console.log(`Fetching ${chartType} chart data for ${crypto} (${coinId}), period: ${timePeriod}`);

      setIsLoading(true);
      setError(null);

      // Add a small delay to help with rate limiting
      await new Promise(resolve => setTimeout(resolve, 300));

      try {
        // Remove old series
        if (seriesRef.current && chartRef.current) {
          chartRef.current.removeSeries(seriesRef.current);
          seriesRef.current = null;
        }

        // Fetch current price
        const price = await fetchCurrentPrice(coinId);
        console.log('Current price fetched:', price);
        setCurrentPrice(price);

        // Fetch chart data based on type
        if (chartType === 'candle') {
          console.log('Creating CANDLESTICK series...');
          const candlestickOptions = {
            upColor: '#00C938', // --color-buy (green)
            downColor: '#F62967', // --color-sell (pink)
            borderUpColor: '#00C938',
            borderDownColor: '#F62967',
            wickUpColor: '#00C938',
            wickDownColor: '#F62967',
          };

          const candlestickSeries = chartRef.current.addSeries(CandlestickSeries, candlestickOptions);
          console.log('Candlestick series created successfully:', candlestickSeries);
          seriesRef.current = candlestickSeries as any;

          const data = await fetchCandlestickChartData(coinId, timePeriod);
          console.log('Candlestick data to display:', data.length, 'candles', data.slice(0, 3));
          candlestickSeries.setData(data);
          console.log('Candlestick data set successfully');
        } else {
          console.log('Creating AREA series...');
          const areaOptions = {
            topColor: 'rgba(41, 127, 255, 0.56)', // --color-brand-solid with opacity
            bottomColor: 'rgba(41, 127, 255, 0.04)',
            lineColor: '#297FFF', // --color-brand-solid
            lineWidth: 2,
          };

          console.log('Area series options:', areaOptions);
          const areaSeries = chartRef.current.addSeries(AreaSeries, areaOptions);
          console.log('Area series created successfully:', areaSeries);
          seriesRef.current = areaSeries as any;

          const data = await fetchAreaChartData(coinId, timePeriod);
          console.log('Area data to display:', data.length, 'points', data.slice(0, 3));
          console.log('Sample area data:', data.slice(0, 5));
          areaSeries.setData(data);
          console.log('Area data set successfully');
        }

        // Fit content
        chartRef.current.timeScale().fitContent();
        console.log('Chart data loaded successfully');
      } catch (err) {
        console.error('Error fetching chart data:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load chart data';

        // Check if it's a rate limit error
        if (errorMessage.includes('429') || errorMessage.includes('Too Many Requests')) {
          setError('Rate limit reached. Please wait a moment and try again, or view individual stories instead of the Docs page.');
        } else {
          setError(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [chartType, timePeriod, coinId, crypto]);

  const handleTypeChange = (type: string) => {
    console.log('Chart type changing from', chartType, 'to', type);
    setChartType(type as ChartType);
  };

  const handlePeriodChange = (period: TimePeriod) => {
    setTimePeriod(period);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const timePeriods: TimePeriod[] = ['1H', '1D', '1W', '1M', '1Y', 'All'];

  // Convert time periods to PillTab format
  const timePeriodTabs: PillTab[] = timePeriods.map((period) => ({
    label: period,
    value: period,
  }));

  return (
    <div className={`crypto-chart ${className}`}>
      {/* Header */}
      <div className="crypto-chart__header">
        <h2 className="crypto-chart__title">Charts</h2>
        {showTypeToggle && (
          <TypeSelector
            type1="Candle"
            type2="Area"
            activeType={chartType === 'candle' ? 'type1' : 'type2'}
            onChange={(type) => handleTypeChange(type === 'type1' ? 'candle' : 'area')}
          />
        )}
      </div>

      {/* Price Display */}
      {currentPrice !== null && (
        <div className="crypto-chart__price">{formatPrice(currentPrice)}</div>
      )}

      {/* Chart Container */}
      <div
        ref={chartContainerRef}
        className="crypto-chart__container"
        style={{ height: `${height}px` }}
      >
        {isLoading && (
          <div className="crypto-chart__loading">Loading chart data...</div>
        )}
        {error && (
          <div className="crypto-chart__error">{error}</div>
        )}
      </div>

      {/* Time Period Selector */}
      {showTimePeriodSelector && (
        <PillTabs
          tabs={timePeriodTabs}
          activeTab={timePeriod}
          onChange={(value) => handlePeriodChange(value as TimePeriod)}
        />
      )}
    </div>
  );
};
