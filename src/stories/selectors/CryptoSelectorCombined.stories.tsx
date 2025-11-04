import type { Meta, StoryObj } from '@storybook/react';
import { CryptoSelector } from '../../components/selectors/CryptoSelector';
import { CryptoSelectorDropdown, CryptoPair } from '../../components/selectors/CryptoSelectorDropdown';
import { useState } from 'react';

const meta = {
  title: 'Components/Selectors/CryptoSelector + Dropdown',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Combined crypto selector system from the apex-mobile-v6-dark design system.

## Purpose
Complete dropdown system for selecting cryptocurrencies or trading pairs, combining the selector button with the dropdown menu.

## Components
- **CryptoSelector**: Button that opens/closes the dropdown
- **CryptoSelectorDropdown**: Dropdown menu with filtering and selection

## Features
- Click button to toggle dropdown
- Select from filtered list of crypto pairs
- Button updates to show selected pair
- Active state when dropdown is open
- Supports buy/sell/regular variants

## Usage Example

\`\`\`tsx
const [isOpen, setIsOpen] = useState(false);
const [selectedPair, setSelectedPair] = useState<CryptoPair | null>(null);

const handleSelect = (pairIds: string[]) => {
  const pair = pairs.find(p => p.id === pairIds[0]);
  setSelectedPair(pair || null);
  setIsOpen(false);
};

<div>
  <CryptoSelector
    label="Buy:"
    cryptoBadges={selectedPair ? [selectedPair.primary, selectedPair.secondary] : ["BTC", "USDT"]}
    displayText={selectedPair?.displayName || "BTC/USDT"}
    variant="buy"
    isOpen={isOpen}
    onClick={() => setIsOpen(!isOpen)}
  />

  {isOpen && (
    <CryptoSelectorDropdown
      pairs={pairs}
      selectedPairs={selectedPair ? [selectedPair.id] : []}
      filterTabs={filterTabs}
      multiSelect={false}
      onChange={handleSelect}
    />
  )}
</div>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const usdtPairs: CryptoPair[] = [
  { id: '1', primary: 'BTC', secondary: 'USDT', displayName: 'BTC/USDT', category: 'USDT' },
  { id: '2', primary: 'ETH', secondary: 'USDT', displayName: 'ETH/USDT', category: 'USDT' },
  { id: '3', primary: 'BNB', secondary: 'USDT', displayName: 'BNB/USDT', category: 'USDT' },
  { id: '4', primary: 'ADA', secondary: 'USDT', displayName: 'ADA/USDT', category: 'USDT' },
  { id: '5', primary: 'XRP', secondary: 'USDT', displayName: 'XRP/USDT', category: 'USDT' },
  { id: '6', primary: 'LTC', secondary: 'USDT', displayName: 'LTC/USDT', category: 'USDT' },
];

const btcPairs: CryptoPair[] = [
  { id: '7', primary: 'ETH', secondary: 'BTC', displayName: 'ETH/BTC', category: 'BTC' },
  { id: '8', primary: 'BNB', secondary: 'BTC', displayName: 'BNB/BTC', category: 'BTC' },
  { id: '9', primary: 'ADA', secondary: 'BTC', displayName: 'ADA/BTC', category: 'BTC' },
];

const ethPairs: CryptoPair[] = [
  { id: '10', primary: 'BNB', secondary: 'ETH', displayName: 'BNB/ETH', category: 'ETH' },
  { id: '11', primary: 'ADA', secondary: 'ETH', displayName: 'ADA/ETH', category: 'ETH' },
];

const allPairs: CryptoPair[] = [...usdtPairs, ...btcPairs, ...ethPairs];

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
];

// Buy Pair Selector
export const BuyPairSelector: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPair, setSelectedPair] = useState<CryptoPair>(allPairs[0]);

    const handleSelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setSelectedPair(pair);
        setIsOpen(false);
      }
    };

    return (
      <div style={{ width: '375px', position: 'relative' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Select Trading Pair
        </h3>

        <CryptoSelector
          label="Buy:"
          cryptoBadges={[selectedPair.primary, selectedPair.secondary]}
          displayText={selectedPair.displayName}
          variant="buy"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div style={{ marginTop: '8px' }}>
            <CryptoSelectorDropdown
              pairs={allPairs}
              selectedPairs={[selectedPair.id]}
              filterTabs={filterTabs}
              multiSelect={false}
              onChange={handleSelect}
            />
          </div>
        )}

        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Click the selector to open/close dropdown
        </p>
      </div>
    );
  },
};

// Sell Pair Selector
export const SellPairSelector: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPair, setSelectedPair] = useState<CryptoPair>(allPairs[1]);

    const handleSelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setSelectedPair(pair);
        setIsOpen(false);
      }
    };

    return (
      <div style={{ width: '375px', position: 'relative' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Select Trading Pair
        </h3>

        <CryptoSelector
          label="Sell:"
          cryptoBadges={[selectedPair.primary, selectedPair.secondary]}
          displayText={selectedPair.displayName}
          variant="sell"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div style={{ marginTop: '8px' }}>
            <CryptoSelectorDropdown
              pairs={allPairs}
              selectedPairs={[selectedPair.id]}
              filterTabs={filterTabs}
              multiSelect={false}
              onChange={handleSelect}
            />
          </div>
        )}

        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Sell variant with pink label
        </p>
      </div>
    );
  },
};

// Regular Variant Selector
export const RegularSelector: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPair, setSelectedPair] = useState<CryptoPair>(allPairs[0]);

    const handleSelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setSelectedPair(pair);
        setIsOpen(false);
      }
    };

    return (
      <div style={{ width: '375px', position: 'relative' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Select Trading Pair
        </h3>

        <CryptoSelector
          label="Title:"
          cryptoBadges={[selectedPair.primary, selectedPair.secondary]}
          displayText={selectedPair.displayName}
          variant="regular"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div style={{ marginTop: '8px' }}>
            <CryptoSelectorDropdown
              pairs={allPairs}
              selectedPairs={[selectedPair.id]}
              filterTabs={filterTabs}
              multiSelect={false}
              onChange={handleSelect}
            />
          </div>
        )}

        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Regular variant with secondary label color
        </p>
      </div>
    );
  },
};

// Trading Form Example
export const TradingFormExample: Story = {
  render: () => {
    const [buyPairOpen, setBuyPairOpen] = useState(false);
    const [sellPairOpen, setSellPairOpen] = useState(false);
    const [buyPair, setBuyPair] = useState<CryptoPair>(allPairs[0]);
    const [sellPair, setSellPair] = useState<CryptoPair>(allPairs[1]);

    const handleBuySelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setBuyPair(pair);
        setBuyPairOpen(false);
      }
    };

    const handleSellSelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setSellPair(pair);
        setSellPairOpen(false);
      }
    };

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '16px', fontWeight: 'bold' }}>
          Trading Form
        </h3>

        {/* Buy Section */}
        <div style={{ marginBottom: '24px', position: 'relative' }}>
          <label style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
            Buy Pair
          </label>
          <CryptoSelector
            label="Buy:"
            cryptoBadges={[buyPair.primary, buyPair.secondary]}
            displayText={buyPair.displayName}
            variant="buy"
            isOpen={buyPairOpen}
            onClick={() => {
              setBuyPairOpen(!buyPairOpen);
              setSellPairOpen(false);
            }}
          />
          {buyPairOpen && (
            <div style={{ marginTop: '8px' }}>
              <CryptoSelectorDropdown
                pairs={allPairs}
                selectedPairs={[buyPair.id]}
                filterTabs={filterTabs}
                multiSelect={false}
                onChange={handleBuySelect}
              />
            </div>
          )}
        </div>

        {/* Sell Section */}
        <div style={{ position: 'relative' }}>
          <label style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
            Sell Pair
          </label>
          <CryptoSelector
            label="Sell:"
            cryptoBadges={[sellPair.primary, sellPair.secondary]}
            displayText={sellPair.displayName}
            variant="sell"
            isOpen={sellPairOpen}
            onClick={() => {
              setSellPairOpen(!sellPairOpen);
              setBuyPairOpen(false);
            }}
          />
          {sellPairOpen && (
            <div style={{ marginTop: '8px' }}>
              <CryptoSelectorDropdown
                pairs={allPairs}
                selectedPairs={[sellPair.id]}
                filterTabs={filterTabs}
                multiSelect={false}
                onChange={handleSellSelect}
              />
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '12px',
            background: '#262D3E',
            borderRadius: '8px',
            border: '1px solid #283043'
          }}
        >
          <p style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '8px' }}>
            Trading Summary:
          </p>
          <p style={{ color: '#00C938', fontSize: '12px', marginBottom: '4px' }}>
            Buy: <strong>{buyPair.displayName}</strong>
          </p>
          <p style={{ color: '#F62967', fontSize: '12px' }}>
            Sell: <strong>{sellPair.displayName}</strong>
          </p>
        </div>
      </div>
    );
  },
};

// Interactive Example
export const InteractiveExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true); // Open by default for demo
    const [selectedPair, setSelectedPair] = useState<CryptoPair>(allPairs[0]);

    const handleSelect = (pairIds: string[]) => {
      const pair = allPairs.find(p => p.id === pairIds[0]);
      if (pair) {
        setSelectedPair(pair);
        setIsOpen(false);
      }
    };

    return (
      <div style={{ width: '375px', position: 'relative' }}>
        <CryptoSelector
          label="Buy:"
          cryptoBadges={[selectedPair.primary, selectedPair.secondary]}
          displayText={selectedPair.displayName}
          variant="buy"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div style={{ marginTop: '8px' }}>
            <CryptoSelectorDropdown
              pairs={allPairs}
              selectedPairs={[selectedPair.id]}
              filterTabs={filterTabs}
              multiSelect={false}
              onChange={handleSelect}
            />
          </div>
        )}
      </div>
    );
  },
};
