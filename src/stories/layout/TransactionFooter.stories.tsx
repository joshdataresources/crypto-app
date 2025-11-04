import type { Meta, StoryObj } from '@storybook/react';
import { TransactionFooter } from '../../components/layout/TransactionFooter';

const meta = {
  title: 'Components/Layout/TransactionFooter',
  component: TransactionFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Transaction footer button component from the apex-mobile-v6-dark design system.

## Purpose
Footer button for transaction screens with different action states.

## Features
- **Full-width button**: 44px height with 16px padding
- **Top border**: Visual separator (#283043)
- **Multiple variants**: Buy, Sell, Brand, Default, Error
- **Hover/Active states**: Opacity changes on interaction
- **Disabled support**: Default variant is non-interactive

## Variants
- **buy**: Green button for buy action (#00C938)
- **sell**: Pink button for sell action (#F62967)
- **brand**: Blue brand button (#297FFF)
- **default**: Disabled gray button (#2A303C)
- **error**: Red error message (#ED3737)

## Usage Example

\`\`\`tsx
// Buy button
<TransactionFooter
  variant="buy"
  text="Buy"
  onClick={() => console.log('Buy clicked')}
/>

// Error state
<TransactionFooter
  variant="error"
  errorMessage="You do not have enough funds for this transaction"
/>

// Disabled state
<TransactionFooter
  variant="default"
  text="Buy"
  disabled={true}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['buy', 'sell', 'brand', 'default', 'error'],
      description: 'Button variant',
    },
    text: {
      control: 'text',
      description: 'Button text',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (only for error variant)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof TransactionFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Buy Variant
export const Buy: Story = {
  args: {
    variant: 'buy',
    text: 'Buy',
    onClick: () => console.log('Buy clicked'),
  },
};

// Sell Variant
export const Sell: Story = {
  args: {
    variant: 'sell',
    text: 'Sell',
    onClick: () => console.log('Sell clicked'),
  },
};

// Brand Variant
export const Brand: Story = {
  args: {
    variant: 'brand',
    text: 'Buy',
    onClick: () => console.log('Brand clicked'),
  },
};

// Default Variant (Disabled)
export const Default: Story = {
  args: {
    variant: 'default',
    text: 'Buy',
  },
};

// Error Variant
export const Error: Story = {
  args: {
    variant: 'error',
    errorMessage: 'You do not have enough funds for\nthis transaction',
  },
};

// All Variants
export const AllVariants: Story = {
  args: {
    variant: 'buy',
    text: 'Buy',
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Buy</h3>
          <TransactionFooter
            variant="buy"
            text="Buy"
            onClick={() => console.log('Buy clicked')}
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Sell</h3>
          <TransactionFooter
            variant="sell"
            text="Sell"
            onClick={() => console.log('Sell clicked')}
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Brand</h3>
          <TransactionFooter
            variant="brand"
            text="Buy"
            onClick={() => console.log('Brand clicked')}
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Default (Disabled)</h3>
          <TransactionFooter
            variant="default"
            text="Buy"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Error</h3>
          <TransactionFooter
            variant="error"
            errorMessage="You do not have enough funds for this transaction"
          />
        </div>
      </div>
    );
  },
};

// Custom Text Examples
export const CustomText: Story = {
  args: {
    variant: 'buy',
    text: 'Buy',
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TransactionFooter
          variant="buy"
          text="Confirm Purchase"
          onClick={() => console.log('Confirm clicked')}
        />
        <TransactionFooter
          variant="sell"
          text="Confirm Sale"
          onClick={() => console.log('Confirm clicked')}
        />
        <TransactionFooter
          variant="brand"
          text="Continue"
          onClick={() => console.log('Continue clicked')}
        />
      </div>
    );
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  args: {
    variant: 'buy',
    text: 'Buy',
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>
            Click the buttons to see console logs
          </p>
          <TransactionFooter
            variant="buy"
            text="Buy BTC"
            onClick={() => console.log('Buy BTC clicked')}
          />
        </div>
        <div>
          <TransactionFooter
            variant="sell"
            text="Sell BTC"
            onClick={() => console.log('Sell BTC clicked')}
          />
        </div>
        <div>
          <p style={{ color: '#9BAACE', marginTop: '16px', marginBottom: '8px', fontSize: '12px' }}>
            Disabled button (no interaction)
          </p>
          <TransactionFooter
            variant="default"
            text="Insufficient Funds"
          />
        </div>
      </div>
    );
  },
};
