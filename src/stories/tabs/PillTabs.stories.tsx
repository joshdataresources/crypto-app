import type { Meta, StoryObj } from '@storybook/react';
import { PillTabs } from '../../components/tabs/PillTabs';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs/PillTabs',
  component: PillTabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pill-style tabs component from the apex-mobile-v6-dark design system.

## Purpose
Horizontally scrollable tabs for filtering or switching between different views/categories.

## Features
- **Pill-shaped buttons**: Rounded 14px border radius
- **Active state**: Blue background (#297FFF) with white text
- **Inactive state**: Transparent background with secondary text color
- **Horizontal scrolling**: Supports overflow content
- **Accessible**: Keyboard navigation and focus states

## Usage Example

\`\`\`tsx
const [activeTab, setActiveTab] = useState('usdt');

const cryptoTabs = [
  { label: 'USDT', value: 'usdt' },
  { label: 'BTC', value: 'btc' },
  { label: 'ETH', value: 'eth' },
  { label: 'BNB', value: 'bnb' },
];

<PillTabs
  tabs={cryptoTabs}
  activeTab={activeTab}
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
    onChange: {
      description: 'Change handler when tab is clicked',
    },
  },
} satisfies Meta<typeof PillTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Crypto Tabs (as shown in Figma)
export const CryptoTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'usdt',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('usdt');

    const cryptoTabs = [
      { label: 'USDT', value: 'usdt' },
      { label: 'BTC', value: 'btc' },
      { label: 'ETH', value: 'eth' },
      { label: 'BNB', value: 'bnb' },
      { label: 'USDC', value: 'usdc' },
      { label: 'BUSD', value: 'busd' },
      { label: 'LTC', value: 'ltc' },
      { label: 'XRP', value: 'xrp' },
      { label: 'SOL', value: 'sol' },
      { label: 'ADA', value: 'ada' },
    ];

    return (
      <div style={{ width: '375px' }}>
        <PillTabs
          tabs={cryptoTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px', padding: '0 16px' }}>
          Selected: <strong style={{ color: '#FFFFFF' }}>{activeTab.toUpperCase()}</strong>
        </p>
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    tabs: [],
    activeTab: 'all',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('all');

    const filterTabs = [
      { label: 'All', value: 'all' },
      { label: 'Favorites', value: 'favorites' },
      { label: 'Hot', value: 'hot' },
      { label: 'New', value: 'new' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold', padding: '0 16px' }}>
          Market Filters
        </h3>
        <PillTabs
          tabs={filterTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '16px', padding: '0 16px' }}>
          Showing: <strong style={{ color: '#FFFFFF' }}>{activeTab}</strong> markets
        </p>
      </div>
    );
  },
};

// Few Tabs
export const FewTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'buy',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('buy');

    const actionTabs = [
      { label: 'Buy', value: 'buy' },
      { label: 'Sell', value: 'sell' },
      { label: 'Convert', value: 'convert' },
    ];

    return (
      <div style={{ width: '300px' }}>
        <PillTabs
          tabs={actionTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// Many Tabs (Scrollable)
export const ManyTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'all',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('all');

    const categoryTabs = [
      { label: 'All', value: 'all' },
      { label: 'DeFi', value: 'defi' },
      { label: 'NFT', value: 'nft' },
      { label: 'Gaming', value: 'gaming' },
      { label: 'Metaverse', value: 'metaverse' },
      { label: 'Layer 1', value: 'layer1' },
      { label: 'Layer 2', value: 'layer2' },
      { label: 'Exchange', value: 'exchange' },
      { label: 'Stablecoin', value: 'stablecoin' },
      { label: 'Meme', value: 'meme' },
    ];

    return (
      <div style={{ width: '375px' }}>
        <PillTabs
          tabs={categoryTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <p style={{ color: '#9BAACE', fontSize: '11px', marginTop: '12px', padding: '0 16px' }}>
          Scroll horizontally to see more categories →
        </p>
      </div>
    );
  },
};

// Time Period Tabs
export const TimePeriodTabs: Story = {
  args: {
    tabs: [],
    activeTab: '1d',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('1d');

    const timeTabs = [
      { label: '1H', value: '1h' },
      { label: '1D', value: '1d' },
      { label: '1W', value: '1w' },
      { label: '1M', value: '1m' },
      { label: '3M', value: '3m' },
      { label: '1Y', value: '1y' },
      { label: 'ALL', value: 'all' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold', padding: '0 16px' }}>
          Chart Time Period
        </h3>
        <PillTabs
          tabs={timeTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// Order Type Tabs
export const OrderTypeTabs: Story = {
  args: {
    tabs: [],
    activeTab: 'limit',
  },
  render: () => {
    const [activeTab, setActiveTab] = useState('limit');

    const orderTabs = [
      { label: 'Limit', value: 'limit' },
      { label: 'Market', value: 'market' },
      { label: 'Stop-Limit', value: 'stop-limit' },
    ];

    return (
      <div style={{ width: '300px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold', padding: '0 16px' }}>
          Order Type
        </h3>
        <PillTabs
          tabs={orderTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    );
  },
};

// All States Demo
export const AllStates: Story = {
  args: {
    tabs: [],
    activeTab: 'usdt',
  },
  render: () => {
    const [tab1, setTab1] = useState('usdt');
    const [tab2, setTab2] = useState('buy');
    const [tab3, setTab3] = useState('1d');

    const cryptoTabs = [
      { label: 'USDT', value: 'usdt' },
      { label: 'BTC', value: 'btc' },
      { label: 'ETH', value: 'eth' },
      { label: 'BNB', value: 'bnb' },
    ];

    const actionTabs = [
      { label: 'Buy', value: 'buy' },
      { label: 'Sell', value: 'sell' },
    ];

    const timeTabs = [
      { label: '1H', value: '1h' },
      { label: '1D', value: '1d' },
      { label: '1W', value: '1w' },
    ];

    return (
      <div style={{ width: '375px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px', padding: '0 16px' }}>
            Crypto Pairs
          </h4>
          <PillTabs
            tabs={cryptoTabs}
            activeTab={tab1}
            onChange={setTab1}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px', padding: '0 16px' }}>
            Trade Action
          </h4>
          <PillTabs
            tabs={actionTabs}
            activeTab={tab2}
            onChange={setTab2}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px', padding: '0 16px' }}>
            Time Period
          </h4>
          <PillTabs
            tabs={timeTabs}
            activeTab={tab3}
            onChange={setTab3}
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
      { label: 'USDT', value: 'usdt' },
      { label: 'BTC', value: 'btc' },
      { label: 'ETH', value: 'eth' },
    ],
    activeTab: 'usdt',
  },
};
