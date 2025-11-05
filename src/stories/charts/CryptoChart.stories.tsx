import type { Meta, StoryObj } from '@storybook/react';
import { CryptoChart } from '../../components/charts/CryptoChart';
import { colorsDark } from '../../tokens/colors';

const meta = {
  title: 'Components/Charts/CryptoChart',
  component: CryptoChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Real-time cryptocurrency price chart with CoinGecko API integration.

## Purpose
Display live cryptocurrency price data with candlestick or area chart visualization.

## Features
- **Chart Types**: Candlestick (OHLC) and Area charts
- **Toggle**: Switch between Candle and Area views
- **Time Periods**: 1H, 1D, 1W, 1M, 1Y, All
- **Real Data**: Live data from CoinGecko API (free, no key required)
- **Current Price**: Displayed above chart
- **Dark Theme**: Matches apex-mobile-v6-dark design system

## Chart Types
- **Candle**: Candlestick (OHLC) chart showing open, high, low, close with green (buy) and pink (sell) colors
- **Area**: Smooth area chart showing price trend with blue gradient

## Data Source
- CoinGecko Public API (no authentication required)
- Historical price data (OHLC and market prices)
- Real-time updates on time period change

## Usage Example

\`\`\`tsx
// Candlestick chart for Bitcoin
<CryptoChart
  type="candle"
  crypto="BTC"
  initialPeriod="1W"
  showTypeToggle={true}
  showTimePeriodSelector={true}
  height={240}
/>

// Area chart for Ethereum
<CryptoChart
  type="area"
  crypto="ETH"
  initialPeriod="1M"
  showTypeToggle={true}
  showTimePeriodSelector={true}
  height={240}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['candle', 'area'],
      description: 'Chart display type',
    },
    crypto: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH'],
      description: 'Cryptocurrency to display',
    },
    initialPeriod: {
      control: 'select',
      options: ['1H', '1D', '1W', '1M', '1Y', 'All'],
      description: 'Initial time period',
    },
    showTypeToggle: {
      control: 'boolean',
      description: 'Show chart type toggle (Candle/Area)',
    },
    showTimePeriodSelector: {
      control: 'boolean',
      description: 'Show time period selector buttons',
    },
    height: {
      control: { type: 'number', min: 200, max: 600, step: 20 },
      description: 'Chart height in pixels',
    },
  },
} satisfies Meta<typeof CryptoChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Bitcoin Candlestick Chart
export const BitcoinCandle: Story = {
  args: {
    type: 'candle',
    crypto: 'BTC',
    initialPeriod: '1W',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Bitcoin Area Chart
export const BitcoinArea: Story = {
  args: {
    type: 'area',
    crypto: 'BTC',
    initialPeriod: '1W',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Ethereum Chart
export const EthereumChart: Story = {
  args: {
    type: 'candle',
    crypto: 'ETH',
    initialPeriod: '1M',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Litecoin Chart
export const LitecoinChart: Story = {
  args: {
    type: 'area',
    crypto: 'LTC',
    initialPeriod: '1W',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Short Time Period (1 Day)
export const OneDayView: Story = {
  args: {
    type: 'candle',
    crypto: 'BTC',
    initialPeriod: '1D',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Long Time Period (All Time)
export const AllTimeView: Story = {
  args: {
    type: 'area',
    crypto: 'BTC',
    initialPeriod: 'All',
    showTypeToggle: true,
    showTimePeriodSelector: true,
    height: 240,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Minimal Chart (No Controls)
export const MinimalChart: Story = {
  args: {
    type: 'area',
    crypto: 'BTC',
    initialPeriod: '1W',
    showTypeToggle: false,
    showTimePeriodSelector: false,
    height: 200,
  },
  render: (args) => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', width: '800px' }}>
      <CryptoChart {...args} />
    </div>
  ),
};

// Side by Side Comparison
export const SideBySideComparison: Story = {
  render: () => (
    <div style={{ background: colorsDark.forms.background, padding: '20px', display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: colorsDark.text.secondary, fontSize: '14px', marginBottom: '12px' }}>
          Candlestick Chart
        </h3>
        <CryptoChart
          type="candle"
          crypto="BTC"
          initialPeriod="1W"
          showTypeToggle={true}
          showTimePeriodSelector={true}
          height={240}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: colorsDark.text.secondary, fontSize: '14px', marginBottom: '12px' }}>
          Area Chart
        </h3>
        <CryptoChart
          type="area"
          crypto="BTC"
          initialPeriod="1W"
          showTypeToggle={true}
          showTimePeriodSelector={true}
          height={240}
        />
      </div>
    </div>
  ),
};

// Multiple Cryptocurrencies
export const MultipleCryptos: Story = {
  render: () => (
    <div style={{ background: colorsDark.forms.background, padding: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div>
          <h3 style={{ color: colorsDark.text.primary, fontSize: '16px', marginBottom: '12px' }}>
            Bitcoin (BTC)
          </h3>
          <CryptoChart
            type="candle"
            crypto="BTC"
            initialPeriod="1W"
            showTypeToggle={false}
            showTimePeriodSelector={true}
            height={200}
          />
        </div>
        <div>
          <h3 style={{ color: colorsDark.text.primary, fontSize: '16px', marginBottom: '12px' }}>
            Ethereum (ETH)
          </h3>
          <CryptoChart
            type="candle"
            crypto="ETH"
            initialPeriod="1W"
            showTypeToggle={false}
            showTimePeriodSelector={true}
            height={200}
          />
        </div>
        <div>
          <h3 style={{ color: colorsDark.text.primary, fontSize: '16px', marginBottom: '12px' }}>
            Litecoin (LTC)
          </h3>
          <CryptoChart
            type="candle"
            crypto="LTC"
            initialPeriod="1W"
            showTypeToggle={false}
            showTimePeriodSelector={true}
            height={200}
          />
        </div>
        <div>
          <h3 style={{ color: colorsDark.text.primary, fontSize: '16px', marginBottom: '12px' }}>
            Ripple (XRP)
          </h3>
          <CryptoChart
            type="candle"
            crypto="XRP"
            initialPeriod="1W"
            showTypeToggle={false}
            showTimePeriodSelector={true}
            height={200}
          />
        </div>
      </div>
    </div>
  ),
};
