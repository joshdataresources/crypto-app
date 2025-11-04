import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../components/tabs/Tabs';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Underline-style tabs component from the apex-mobile-v6-dark design system.

## Purpose
Standard tabs for switching between different views or order types.

## Features
- **Equal-width tabs**: Tabs distribute evenly across the container
- **Bottom underline**: 2px colored underline for active tab
- **Three color variants**: Brand (blue), Buy (green), Sell (pink/red)
- **Bottom border**: 1px separator line (#283043)
- **Accessible**: Keyboard navigation and focus states

## Variants
- **brand**: Blue underline (#297FFF) - for general navigation
- **buy**: Green underline (#00C938) - for buy order types
- **sell**: Pink underline (#F62967) - for sell order types

## Usage Example

\`\`\`tsx
const [activeTab, setActiveTab] = useState('limit');

const orderTabs = [
  { label: 'Market', value: 'market' },
  { label: 'Limit', value: 'limit' },
  { label: 'Stop', value: 'stop' },
];

<Tabs
  tabs={orderTabs}
  activeTab={activeTab}
  variant="buy"
  onChange={setActiveTab}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab objects with label and value',
    },
    activeTab: {
      control: 'text',
      description: 'Currently active tab value',
    },
    variant: {
      control: 'select',
      options: ['brand', 'buy', 'sell'],
      description: 'Color variant for active tab underline',
    },
    onChange: {
      description: 'Change handler when tab is clicked',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Buy Order Tabs (Green underline - as shown in Figma)
export const BuyOrderTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'limit',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('limit');

    const orderTabs = [
      { label: 'Market', value: 'market' },
      { label: 'Limit', value: 'limit' },
      { label: 'Stop', value: 'stop' },
    ];

    return (
      <div style={{ width: '343px' }}>
        <Tabs
          tabs={orderTabs}
          activeTab={activeTab}
          variant="buy"
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px' }}>
          Selected order type: <strong style={{ color: '#00C938' }}>{activeTab}</strong>
        </p>
      </div>
    );
  },
};

// Sell Order Tabs (Pink underline - as shown in Figma)
export const SellOrderTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'limit',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('limit');

    const orderTabs = [
      { label: 'Market', value: 'market' },
      { label: 'Limit', value: 'limit' },
      { label: 'Stop', value: 'stop' },
    ];

    return (
      <div style={{ width: '343px' }}>
        <Tabs
          tabs={orderTabs}
          activeTab={activeTab}
          variant="sell"
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px' }}>
          Selected order type: <strong style={{ color: '#F62967' }}>{activeTab}</strong>
        </p>
      </div>
    );
  },
};

// Brand Tabs (Blue underline - as shown in Figma)
export const BrandTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'tab1',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const genericTabs = [
      { label: 'Generic', value: 'tab1' },
      { label: 'Generic', value: 'tab2' },
      { label: 'Generic', value: 'tab3' },
    ];

    return (
      <div style={{ width: '343px' }}>
        <Tabs
          tabs={genericTabs}
          activeTab={activeTab}
          variant="brand"
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px' }}>
          Selected: <strong style={{ color: '#297FFF' }}>{activeTab}</strong>
        </p>
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    tabs: [],
    activeTab: 'spot',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('spot');

    const tradingTabs = [
      { label: 'Spot', value: 'spot' },
      { label: 'Margin', value: 'margin' },
      { label: 'Futures', value: 'futures' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Trading Mode
        </h3>
        <Tabs
          tabs={tradingTabs}
          activeTab={activeTab}
          variant="brand"
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px' }}>
          Trading mode: <strong style={{ color: '#FFFFFF' }}>{activeTab}</strong>
        </p>
      </div>
    );
  },
};

// Two Tabs
export const TwoTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'buy',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('buy');

    const actionTabs = [
      { label: 'Buy', value: 'buy' },
      { label: 'Sell', value: 'sell' },
    ];

    return (
      <div style={{ width: '300px' }}>
        <Tabs
          tabs={actionTabs}
          activeTab={activeTab}
          variant={activeTab === 'buy' ? 'buy' : 'sell'}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// Four Tabs
export const FourTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'open',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('open');

    const ordersTabs = [
      { label: 'Open', value: 'open' },
      { label: 'Filled', value: 'filled' },
      { label: 'Canceled', value: 'canceled' },
      { label: 'All', value: 'all' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <Tabs
          tabs={ordersTabs}
          activeTab={activeTab}
          variant="brand"
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// Wallet Tabs
export const WalletTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'crypto',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('crypto');

    const walletTabs = [
      { label: 'Crypto', value: 'crypto' },
      { label: 'Fiat', value: 'fiat' },
      { label: 'NFT', value: 'nft' },
    ];

    return (
      <div style={{ width: '343px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Wallet Type
        </h3>
        <Tabs
          tabs={walletTabs}
          activeTab={activeTab}
          variant="brand"
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// History Tabs
export const HistoryTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'deposits',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('deposits');

    const historyTabs = [
      { label: 'Deposits', value: 'deposits' },
      { label: 'Withdrawals', value: 'withdrawals' },
      { label: 'Transfers', value: 'transfers' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Transaction History
        </h3>
        <Tabs
          tabs={historyTabs}
          activeTab={activeTab}
          variant="brand"
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// All Variants Demo
export const AllVariants: Story = {
  args: {
    tabs: [],
    activeTab: 'limit',
  },
  render: () => {
    const [buyTab, setBuyTab] = useState('limit');
    const [sellTab, setSellTab] = useState('limit');
    const [brandTab, setBrandTab] = useState('tab1');

    const orderTabs = [
      { label: 'Market', value: 'market' },
      { label: 'Limit', value: 'limit' },
      { label: 'Stop', value: 'stop' },
    ];

    const genericTabs = [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ];

    return (
      <div style={{ width: '343px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Buy Variant (Green)
          </h4>
          <Tabs
            tabs={orderTabs}
            activeTab={buyTab}
            variant="buy"
            onChange={setBuyTab}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Sell Variant (Pink)
          </h4>
          <Tabs
            tabs={orderTabs}
            activeTab={sellTab}
            variant="sell"
            onChange={setSellTab}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Brand Variant (Blue)
          </h4>
          <Tabs
            tabs={genericTabs}
            activeTab={brandTab}
            variant="brand"
            onChange={setBrandTab}
          />
        </div>
      </div>
    );
  },
};

// Static (No onChange)
export const Static: Story = {
  args: {
    tabs: [
      { label: 'Market', value: 'market' },
      { label: 'Limit', value: 'limit' },
      { label: 'Stop', value: 'stop' },
    ],
    activeTab: 'limit',
    variant: 'buy',
  },
};
