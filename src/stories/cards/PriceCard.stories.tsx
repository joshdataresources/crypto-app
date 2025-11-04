import type { Meta, StoryObj } from '@storybook/react';
import { PriceCard } from '../../components/cards/PriceCard';

const meta: Meta<typeof PriceCard> = {
  title: 'Cards/PriceCard',
  component: PriceCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PriceCard>;

export const Bitcoin: Story = {
  args: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 45678.90,
    change24h: 5.23,
    variant: 'compact',
  },
};

export const Ethereum: Story = {
  args: {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3234.56,
    change24h: -2.15,
    variant: 'compact',
  },
};

export const Detailed: Story = {
  args: {
    name: 'Cardano',
    symbol: 'ADA',
    price: 1.23,
    change24h: 8.45,
    variant: 'detailed',
  },
};

export const Loading: Story = {
  args: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 0,
    change24h: 0,
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 0,
    change24h: 0,
    hasError: true,
  },
};

export const NegativeChange: Story = {
  args: {
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.87,
    change24h: -12.34,
  },
};

export const PortfolioGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      maxWidth: '800px',
    }}>
      <PriceCard name="Bitcoin" symbol="BTC" price={45678.90} change24h={5.23} />
      <PriceCard name="Ethereum" symbol="ETH" price={3234.56} change24h={-2.15} />
      <PriceCard name="Cardano" symbol="ADA" price={1.23} change24h={8.45} />
      <PriceCard name="Solana" symbol="SOL" price={98.76} change24h={-5.67} />
    </div>
  ),
};
