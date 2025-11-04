import type { Meta, StoryObj } from '@storybook/react';
import { TransactionHeader } from '../../components/layout/TransactionHeader';

const meta = {
  title: 'Components/Layout/TransactionHeader',
  component: TransactionHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Transaction header component from the apex-mobile-v6-dark design system.

## Purpose
Header for transaction screens with dragger, action button, selector, and close button.

## Features
- **Dragger handle**: For sheet/modal drag interaction
- **Action button**: Colored button with icon (Buy/Sell/Send/Receive/Convert)
- **Selector button**: Shows crypto badges and display text
- **Close button**: X icon button
- **Empty state**: Shows "Select Pair" or "Select Asset" placeholder
- **Two states**: Default (with crypto data) and Empty (placeholder)

## Transaction Types
- **buy-pair**: Green buy button with pair selector
- **sell-pair**: Pink sell button with pair selector
- **buy-asset**: Green buy button with single asset selector
- **sell-asset**: Pink sell button with single asset selector
- **send**: Gray send button with single asset selector
- **receive**: Gray receive button with single asset selector
- **convert**: Gray convert button

## Usage Example

\`\`\`tsx
// Buy pair with data
<TransactionHeader
  type="buy-pair"
  state="default"
  primaryCrypto="BTC"
  secondaryCrypto="USDT"
  displayText="BTCUSD"
  onClose={() => console.log('Close')}
  onSelectorClick={() => console.log('Select')}
/>

// Buy pair empty state
<TransactionHeader
  type="buy-pair"
  state="empty"
  onClose={() => console.log('Close')}
  onSelectorClick={() => console.log('Select')}
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
      options: ['buy-pair', 'sell-pair', 'buy-asset', 'sell-asset', 'send', 'receive', 'convert'],
      description: 'Transaction type',
    },
    state: {
      control: 'select',
      options: ['default', 'empty'],
      description: 'Component state',
    },
    primaryCrypto: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Primary cryptocurrency',
    },
    secondaryCrypto: {
      control: 'select',
      options: ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'ADA', 'MIOTA', 'BCH', 'USDT'],
      description: 'Secondary cryptocurrency (for pairs)',
    },
    displayText: {
      control: 'text',
      description: 'Display text (e.g., "BTCUSD")',
    },
  },
} satisfies Meta<typeof TransactionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Buy Pair - Default State
export const BuyPairDefault: Story = {
  args: {
    type: 'buy-pair',
    state: 'default',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Buy Pair - Empty State
export const BuyPairEmpty: Story = {
  args: {
    type: 'buy-pair',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Sell Pair - Default State
export const SellPairDefault: Story = {
  args: {
    type: 'sell-pair',
    state: 'default',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayText: 'BTCUSD',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Sell Pair - Empty State
export const SellPairEmpty: Story = {
  args: {
    type: 'sell-pair',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Buy Asset - Default State
export const BuyAssetDefault: Story = {
  args: {
    type: 'buy-asset',
    state: 'default',
    primaryCrypto: 'BTC',
    displayText: 'BTC Bitcoin',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Buy Asset - Empty State
export const BuyAssetEmpty: Story = {
  args: {
    type: 'buy-asset',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Sell Asset - Default State
export const SellAssetDefault: Story = {
  args: {
    type: 'sell-asset',
    state: 'default',
    primaryCrypto: 'BTC',
    displayText: 'BTC Bitcoin',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Sell Asset - Empty State
export const SellAssetEmpty: Story = {
  args: {
    type: 'sell-asset',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Send - Default State
export const SendDefault: Story = {
  args: {
    type: 'send',
    state: 'default',
    primaryCrypto: 'BTC',
    displayText: 'BTC Bitcoin',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Send - Empty State
export const SendEmpty: Story = {
  args: {
    type: 'send',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Receive - Default State
export const ReceiveDefault: Story = {
  args: {
    type: 'receive',
    state: 'default',
    primaryCrypto: 'BTC',
    displayText: 'BTC Bitcoin',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Receive - Empty State
export const ReceiveEmpty: Story = {
  args: {
    type: 'receive',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Convert - Default State
export const ConvertDefault: Story = {
  args: {
    type: 'convert',
    state: 'default',
    primaryCrypto: 'BTC',
    secondaryCrypto: 'ETH',
    displayText: 'Convert Crypto Assets',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// Convert - Empty State
export const ConvertEmpty: Story = {
  args: {
    type: 'convert',
    state: 'empty',
    onClose: () => console.log('Close clicked'),
    onSelectorClick: () => console.log('Selector clicked'),
  },
};

// All Variants - Default State
export const AllVariantsDefault: Story = {
  args: {
    type: 'buy-pair',
    state: 'default',
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Buy Pair</h3>
          <TransactionHeader
            type="buy-pair"
            state="default"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Sell Pair</h3>
          <TransactionHeader
            type="sell-pair"
            state="default"
            primaryCrypto="BTC"
            secondaryCrypto="USDT"
            displayText="BTCUSD"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Buy Asset</h3>
          <TransactionHeader
            type="buy-asset"
            state="default"
            primaryCrypto="BTC"
            displayText="BTC Bitcoin"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Sell Asset</h3>
          <TransactionHeader
            type="sell-asset"
            state="default"
            primaryCrypto="BTC"
            displayText="BTC Bitcoin"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Send</h3>
          <TransactionHeader
            type="send"
            state="default"
            primaryCrypto="BTC"
            displayText="BTC Bitcoin"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Receive</h3>
          <TransactionHeader
            type="receive"
            state="default"
            primaryCrypto="BTC"
            displayText="BTC Bitcoin"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Convert</h3>
          <TransactionHeader
            type="convert"
            state="default"
            displayText="Convert Crypto Assets"
          />
        </div>
      </div>
    );
  },
};

// All Variants - Empty State
export const AllVariantsEmpty: Story = {
  args: {
    type: 'buy-pair',
    state: 'empty',
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Buy Pair Empty</h3>
          <TransactionHeader type="buy-pair" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Sell Pair Empty</h3>
          <TransactionHeader type="sell-pair" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Buy Asset Empty</h3>
          <TransactionHeader type="buy-asset" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Sell Asset Empty</h3>
          <TransactionHeader type="sell-asset" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Send Empty</h3>
          <TransactionHeader type="send" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Receive Empty</h3>
          <TransactionHeader type="receive" state="empty" />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Convert Empty</h3>
          <TransactionHeader type="convert" state="empty" />
        </div>
      </div>
    );
  },
};
