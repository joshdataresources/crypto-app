import type { Meta, StoryObj } from '@storybook/react';
import { CryptoSelector } from '../../components/selectors/CryptoSelector';
import type { CryptoBadgeName } from '../../components/badges/CryptoBadge';
import { useState } from 'react';

const meta = {
  title: 'Components/Selectors/CryptoSelector',
  component: CryptoSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Crypto selector button component from the apex-mobile-v6-dark design system.

## Purpose
Button for selecting cryptocurrencies or trading pairs, typically used to open a dropdown menu.

## Features
- **Optional label**: Colored label text (Buy:/Sell:/Title:) in variant color
- **Crypto badges**: Single crypto or overlapping pair badges
- **Display text**: Shows the selected crypto or pair name
- **Dropdown icon**: Indicates expandable menu
- **Active state**: Blue border (2px) when dropdown is open
- **Three variants**: Buy (green), Sell (pink), Regular (secondary)

## Variants
- **buy**: Green label (#00C938) for buy orders
- **sell**: Pink label (#F62967) for sell orders
- **regular**: Secondary label (#9BAACE) for general selection

## States
- **default**: 1px border (#373E4D)
- **active/open**: 2px blue border (#297FFF)

## Usage Example

\`\`\`tsx
const [isOpen, setIsOpen] = useState(false);

<CryptoSelector
  label="Buy:"
  cryptoBadges={["BTC", "USDT"]}
  displayText="BTC/USDT"
  variant="buy"
  isOpen={isOpen}
  onClick={() => setIsOpen(!isOpen)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional label text (e.g., "Buy:", "Sell:")',
    },
    cryptoBadges: {
      description: 'Single crypto code or array of two for pairs',
    },
    displayText: {
      control: 'text',
      description: 'Display text for the crypto/pair',
    },
    variant: {
      control: 'select',
      options: ['buy', 'sell', 'regular'],
      description: 'Visual variant - determines label color',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the selector is in active/open state',
    },
    onClick: {
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof CryptoSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Buy Variant with Pair
export const BuyPair: Story = {
  args: {
    cryptoBadges: ['BTC', 'USDT'],
    displayText: 'BTC/USDT',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '343px' }}>
        <CryptoSelector
          label="Buy:"
          cryptoBadges={["BTC", "USDT"]}
          displayText="BTC/USDT"
          variant="buy"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Click to toggle active state
        </p>
      </div>
    );
  },
};

// Sell Variant with Pair
export const SellPair: Story = {
  args: {
    cryptoBadges: ['ETH', 'USDT'],
    displayText: 'ETH/USDT',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '343px' }}>
        <CryptoSelector
          label="Sell:"
          cryptoBadges={["ETH", "USDT"]}
          displayText="ETH/USDT"
          variant="sell"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Click to toggle active state
        </p>
      </div>
    );
  },
};

// Regular Variant with Label
export const RegularWithLabel: Story = {
  args: {
    cryptoBadges: ['LTC', 'BTC'],
    displayText: 'LTC/BTC',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '343px' }}>
        <CryptoSelector
          label="Title:"
          cryptoBadges={["LTC", "BTC"]}
          displayText="LTC/BTC"
          variant="regular"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Click to toggle active state
        </p>
      </div>
    );
  },
};

// Single Crypto (No Pair)
export const SingleCrypto: Story = {
  args: {
    cryptoBadges: 'BTC',
    displayText: 'Bitcoin',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '343px' }}>
        <CryptoSelector
          cryptoBadges="BTC"
          displayText="Bitcoin"
          variant="regular"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Single crypto without label
        </p>
      </div>
    );
  },
};

// No Label
export const NoLabel: Story = {
  args: {
    cryptoBadges: ['ADA', 'USDT'],
    displayText: 'ADA/USDT',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: '343px' }}>
        <CryptoSelector
          cryptoBadges={["ADA", "USDT"]}
          displayText="ADA/USDT"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Pair without label
        </p>
      </div>
    );
  },
};

// Active State
export const ActiveState: Story = {
  args: {
    label: "Buy:",
    cryptoBadges: ["BTC", "USDT"],
    displayText: "BTC/USDT",
    variant: "buy",
    isOpen: true,
  },
};

// All Variants Demo
export const AllVariants: Story = {
  args: {
    cryptoBadges: ['BTC', 'USDT'],
    displayText: 'BTC/USDT',
  },
  render: () => {
    const [buyOpen, setBuyOpen] = useState(false);
    const [sellOpen, setSellOpen] = useState(false);
    const [regularOpen, setRegularOpen] = useState(false);

    return (
      <div style={{ width: '343px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>
            Buy Variant (Green)
          </h4>
          <CryptoSelector
            label="Buy:"
            cryptoBadges={["BTC", "USDT"]}
            displayText="BTC/USDT"
            variant="buy"
            isOpen={buyOpen}
            onClick={() => setBuyOpen(!buyOpen)}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>
            Sell Variant (Pink)
          </h4>
          <CryptoSelector
            label="Sell:"
            cryptoBadges={["ETH", "USDT"]}
            displayText="ETH/USDT"
            variant="sell"
            isOpen={sellOpen}
            onClick={() => setSellOpen(!sellOpen)}
          />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>
            Regular Variant (Secondary)
          </h4>
          <CryptoSelector
            label="Title:"
            cryptoBadges={["LTC", "BTC"]}
            displayText="LTC/BTC"
            variant="regular"
            isOpen={regularOpen}
            onClick={() => setRegularOpen(!regularOpen)}
          />
        </div>
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    cryptoBadges: ['BTC', 'USDT'],
    displayText: 'BTC/USDT',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPair, setSelectedPair] = useState<[CryptoBadgeName, CryptoBadgeName]>(["BTC", "USDT"]);

    const pairs: Array<[CryptoBadgeName, CryptoBadgeName]> = [
      ["BTC", "USDT"],
      ["ETH", "USDT"],
      ["LTC", "USDT"],
      ["ADA", "USDT"],
    ];

    return (
      <div style={{ width: '343px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Trading Pair Selector
        </h3>
        <CryptoSelector
          label="Buy:"
          cryptoBadges={selectedPair}
          displayText={`${selectedPair[0]}/${selectedPair[1]}`}
          variant="buy"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {pairs.map((pair) => (
            <button
              key={`${pair[0]}-${pair[1]}`}
              onClick={() => setSelectedPair(pair)}
              style={{
                padding: '8px 12px',
                background: '#373E4D',
                border: 'none',
                borderRadius: '4px',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              {pair[0]}/{pair[1]}
            </button>
          ))}
        </div>
      </div>
    );
  },
};

// Static (No onClick)
export const Static: Story = {
  args: {
    label: "Buy:",
    cryptoBadges: ["BTC", "USDT"],
    displayText: "BTC/USDT",
    variant: "buy",
    isOpen: false,
  },
};
