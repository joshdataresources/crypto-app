import type { Meta, StoryObj } from '@storybook/react';
import { OrderForm } from '../../components/trade/OrderForm';

const meta = {
  title: 'Components/Trade/OrderForm',
  component: OrderForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Complete trading order form with multiple order types from the apex-mobile-v6-dark design system.

## Purpose
Full-featured order form for placing crypto trades with market, limit, and stop orders.

## Features
- **TransactionHeader**: Buy/Sell button, crypto selector, close button
- **Tab Styles**: Pill tabs (default) or Basic tabs with underline indicator
- **Order Type Tabs**: Market, Limit, Stop
- **Conditional Price Fields**: Limit Price for limit orders, Stop Price for stop orders
- **Dual Amount Inputs**: BTC/USD converter with MAX buttons
- **TIF Dropdown**: Time In Force selection (for limit orders)
- **Transaction Details**: Market price, fees, order total, net
- **Footer Button**: Buy (green) or Sell (pink)
- **Rounded Container**: 343px width with shadow

## Tab Styles
- **Pill Tabs** (default): Rounded pill-style tabs with background color
- **Basic Tabs**: Simple tabs with colored underline indicator (green for buy, pink for sell)

## Order Types
- **Market**: Execute immediately at market price (no price field, no TIF)
- **Limit**: Execute at specified limit price or better (includes price field and TIF)
- **Stop**: Execute when stop price is reached (includes price field and TIF)
- **Stop-Limit**: Combination of stop and limit orders (includes both price fields and TIF)
- **Trailing Stop Market**: Market order with trailing stop (single amount input, trailing amount, peg price)
- **Trailing Stop Limit**: Limit order with trailing stop (single amount input, trailing amount, peg price, TIF)
- **Reserve Order**: Order with display quantity (single amount input, limit price, display quantity)

## Usage Example

\`\`\`tsx
// Buy order with market type (pill tabs - default)
<OrderForm
  orderSide="buy"
  primaryCrypto="BTC"
  secondaryCrypto="USDT"
  displayText="BTCUSD"
  initialOrderType="market"
  tabStyle="pill"
  onClose={() => console.log('Close')}
  onSelectorClick={() => console.log('Select pair')}
  onSubmit={(data) => console.log('Submit:', data)}
/>

// Sell order with limit type (basic tabs)
<OrderForm
  orderSide="sell"
  primaryCrypto="ETH"
  secondaryCrypto="USDT"
  displayText="ETHUSD"
  initialOrderType="limit"
  tabStyle="basic"
  onClose={() => console.log('Close')}
  onSubmit={(data) => console.log('Submit:', data)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orderSide: {
      control: 'select',
      options: ['buy', 'sell'],
      description: 'Order side (buy or sell)',
    },
    primaryCrypto: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Primary cryptocurrency',
    },
    secondaryCrypto: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Secondary cryptocurrency',
    },
    displayText: {
      control: 'text',
      description: 'Display text for crypto selector',
    },
    initialOrderType: {
      control: 'select',
      options: ['market', 'limit', 'stop'],
      description: 'Initial order type',
    },
    tabStyle: {
      control: 'select',
      options: ['pill', 'basic'],
      description: 'Tab style - pill (default) or basic',
    },
  },
} satisfies Meta<typeof OrderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// Buy Market Order
export const BuyMarket: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'market',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Limit Order
export const BuyLimit: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Stop Order
export const BuyStop: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'stop',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Market Order
export const SellMarket: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'market',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Limit Order
export const SellLimit: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Stop Order
export const SellStop: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'stop',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Stop-Limit Order
export const BuyStopLimit: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'stop-limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Stop-Limit Order
export const SellStopLimit: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'stop-limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Trailing Stop Market Order
export const BuyTrailingStopMarket: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'trailing-stop-market',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Trailing Stop Market Order
export const SellTrailingStopMarket: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'trailing-stop-market',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Trailing Stop Limit Order
export const BuyTrailingStopLimit: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'trailing-stop-limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Trailing Stop Limit Order
export const SellTrailingStopLimit: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'trailing-stop-limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Buy Reserve Order
export const BuyReserveOrder: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'reserve-order',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Sell Reserve Order
export const SellReserveOrder: Story = {
  args: {
    orderSide: 'sell',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'reserve-order',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// ETH Trading
export const ETHTrading: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'ETH',
    secondaryCrypto: 'USDT',
    displayText: 'ETHUSD',
    initialOrderType: 'limit',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// All Order Types Comparison
export const AllOrderTypes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#9BAACE', fontSize: '12px', margin: 0 }}>Market Order</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="market"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#9BAACE', fontSize: '12px', margin: 0 }}>Limit Order</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="limit"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#9BAACE', fontSize: '12px', margin: 0 }}>Stop Order</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="stop"
          />
        </div>
      </div>
    );
  },
};

// Buy vs Sell Comparison
export const BuyVsSell: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#00C938', fontSize: '12px', margin: 0 }}>Buy Order</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="limit"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#F62967', fontSize: '12px', margin: 0 }}>Sell Order</h3>
          <OrderForm
            orderSide="sell"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="limit"
          />
        </div>
      </div>
    );
  },
};

// Pill Tabs (Default)
export const PillTabsStyle: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'limit',
    tabStyle: 'pill',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Basic Tabs
export const BasicTabsStyle: Story = {
  args: {
    orderSide: 'buy',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    initialOrderType: 'limit',
    tabStyle: 'basic',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
    onSubmit: (data) => console.log('Submit:', data),
  },
};

// Tab Style Comparison
export const TabStyleComparison: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#9BAACE', fontSize: '12px', margin: 0 }}>Pill Tabs (Default)</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="limit"
            tabStyle="pill"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h3 style={{ color: '#9BAACE', fontSize: '12px', margin: 0 }}>Basic Tabs</h3>
          <OrderForm
            orderSide="buy"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
            initialOrderType="limit"
            tabStyle="basic"
          />
        </div>
      </div>
    );
  },
};
