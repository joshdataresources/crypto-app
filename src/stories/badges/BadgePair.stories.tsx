import type { Meta, StoryObj } from '@storybook/react';
import { BadgePair } from '../../components/badges/BadgePair';

const meta = {
  title: 'Components/Badges/BadgePair',
  component: BadgePair,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Badge pair component from the apex-mobile-v6-dark design system.

## Purpose
Display overlapping crypto badges for trading pairs or single badges.

## Features
- **Overlapping badges**: Two badges with -8px overlap
- **Primary on top**: Primary badge has higher z-index
- **Single or pair**: Can show single badge or pair
- **24px default**: Configurable size
- **40px total width**: For pairs (24px + 16px visible)

## Usage Example

\`\`\`tsx
// Trading pair
<BadgePair primary="BTC" secondary="USDT" />

// Single crypto
<BadgePair primary="BTC" />

// Custom size
<BadgePair primary="ETH" secondary="BTC" size={32} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Primary (left) badge',
    },
    secondary: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Secondary (right) badge - omit for single badge',
    },
    size: {
      control: { type: 'number', min: 16, max: 48, step: 4 },
      description: 'Size of each badge in pixels',
    },
  },
} satisfies Meta<typeof BadgePair>;

export default meta;
type Story = StoryObj<typeof meta>;

// BTC/USDT Pair (most common)
export const BTCUSdt: Story = {
  args: {
    primary: 'BTC',
    secondary: 'USDT',
  },
};

// ETH/USDT Pair
export const ETHUsdt: Story = {
  args: {
    primary: 'ETH',
    secondary: 'USDT',
  },
};

// BTC/ETH Pair
export const BTCEth: Story = {
  args: {
    primary: 'BTC',
    secondary: 'ETH',
  },
};

// Single Badge
export const SingleBadge: Story = {
  args: {
    primary: 'BTC',
  },
};

// All Common Pairs
export const AllCommonPairs: Story = {
  render: () => {
    const pairs = [
      { primary: 'BTC' as const, secondary: 'USDT' as const },
      { primary: 'ETH' as const, secondary: 'USDT' as const },
      { primary: 'LTC' as const, secondary: 'USDT' as const },
      { primary: 'XRP' as const, secondary: 'USDT' as const },
      { primary: 'ADA' as const, secondary: 'USDT' as const },
      { primary: 'BTC' as const, secondary: 'ETH' as const },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {pairs.map((pair, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BadgePair primary={pair.primary} secondary={pair.secondary} />
            <span style={{ color: '#FFFFFF', fontSize: '14px' }}>
              {pair.primary}/{pair.secondary}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => {
    const sizes = [24, 32, 44];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BadgePair primary="BTC" secondary="USDT" size={size} />
            <span style={{ color: '#9BAACE', fontSize: '12px' }}>
              {size}px
            </span>
          </div>
        ))}
      </div>
    );
  },
};

// Single vs Pair Comparison
export const SingleVsPair: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Single Badge
          </h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <BadgePair primary="BTC" />
            <BadgePair primary="ETH" />
            <BadgePair primary="USDT" />
          </div>
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Badge Pairs
          </h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <BadgePair primary="BTC" secondary="USDT" />
            <BadgePair primary="ETH" secondary="USDT" />
            <BadgePair primary="BTC" secondary="ETH" />
          </div>
        </div>
      </div>
    );
  },
};

// In Context (like CryptoSelector)
export const InContext: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 12px',
          height: '44px',
          background: '#373E4D',
          borderRadius: '6px',
          border: '1px solid #283043',
        }}
      >
        <span style={{ color: '#00C938', fontSize: '12px', fontWeight: 700 }}>
          Buy:
        </span>
        <BadgePair primary="BTC" secondary="USDT" />
        <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700 }}>
          BTC/USDT
        </span>
      </div>
    );
  },
};

// All Cryptos Grid
export const AllCryptosGrid: Story = {
  render: () => {
    const cryptos = ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'] as const;

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {cryptos.map((crypto) => (
          <div key={crypto} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <BadgePair primary={crypto} />
            <span style={{ color: '#9BAACE', fontSize: '11px' }}>{crypto}</span>
          </div>
        ))}
      </div>
    );
  },
};
