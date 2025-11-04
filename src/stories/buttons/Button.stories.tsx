import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/buttons/Button';

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button component from the apex-mobile-v6-dark design system.

## Usage Examples

\`\`\`tsx
// Button with icon
<Button variant="brand" icon="send">Send</Button>

// Button without icon
<Button variant="brand">Continue</Button>

// Button with icon prop but hidden
<Button variant="brand" icon="send" showIcon={false}>Send</Button>
\`\`\`

## Variants
- **brand**: Blue brand color for primary actions
- **buy**: Green for buy/purchase actions
- **sell**: Pink for sell actions
- **negative**: Red for destructive/dangerous actions
- **basic**: Secondary background for less prominent actions
- **transparent**: No background for subtle actions
- **line**: Border only for outlined style
- **brandOpposite**: Transparent with brand text color

## Sizes
- **big**: 44px height (default)
- **small**: 36px height

## States
- **default**: Normal state
- **active**: Focus/selection state
- **disabled**: Non-interactive state
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'buy', 'sell', 'negative', 'basic', 'transparent', 'line', 'brandOpposite'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['big', 'small'],
      description: 'Button size',
    },
    icon: {
      control: 'select',
      options: ['send', 'buy', 'sell', 'convert', 'add', 'check', 'close'],
      description: 'Optional icon',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show/hide icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    active: {
      control: 'boolean',
      description: 'Active/focused state',
    },
    children: {
      control: 'text',
      description: 'Button text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Overview Demo - Clean showcase of all button variants
export const Overview: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px',
      backgroundColor: '#1a1f2e',
      borderRadius: '8px'
    }}>
      {/* Primary Actions */}
      <div>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>Primary Actions</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="brand" icon="send">Send</Button>
          <Button variant="buy" icon="buy">Buy</Button>
          <Button variant="sell" icon="sell">Sell</Button>
          <Button variant="negative" icon="close">Delete</Button>
        </div>
      </div>

      {/* Secondary Actions */}
      <div>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>Secondary Actions</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="basic" icon="send">Send</Button>
          <Button variant="transparent" icon="convert">Convert</Button>
          <Button variant="line" icon="add">Add</Button>
          <Button variant="brandOpposite" icon="check">Confirm</Button>
        </div>
      </div>

      {/* Small Size */}
      <div>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>Small Size</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="brand" icon="send" size="small">Send</Button>
          <Button variant="buy" icon="buy" size="small">Buy</Button>
          <Button variant="sell" icon="sell" size="small">Sell</Button>
          <Button variant="basic" icon="add" size="small">Add</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="brand" icon="send">Default</Button>
          <Button variant="brand" icon="send" active>Active</Button>
          <Button variant="brand" icon="send" disabled>Disabled</Button>
        </div>
      </div>

      {/* With/Without Icon */}
      <div>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>With & Without Icons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="brand" icon="send">With Icon</Button>
          <Button variant="brand">Without Icon</Button>
        </div>
      </div>
    </div>
  ),
};

// Default story
export const Default: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brand',
    size: 'big',
  },
};

// Brand variants
export const BrandDefault: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brand',
    size: 'big',
  },
};

export const BrandActive: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brand',
    size: 'big',
    active: true,
  },
};

export const BrandDisabled: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brand',
    size: 'big',
    disabled: true,
  },
};

export const BrandSmall: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brand',
    size: 'small',
  },
};

// Buy variants
export const BuyDefault: Story = {
  args: {
    children: 'Buy',
    icon: 'buy',
    variant: 'buy',
    size: 'big',
  },
};

export const BuyActive: Story = {
  args: {
    children: 'Buy',
    icon: 'buy',
    variant: 'buy',
    size: 'big',
    active: true,
  },
};

export const BuyDisabled: Story = {
  args: {
    children: 'Buy',
    icon: 'buy',
    variant: 'buy',
    size: 'big',
    disabled: true,
  },
};

export const BuySmall: Story = {
  args: {
    children: 'Buy',
    icon: 'buy',
    variant: 'buy',
    size: 'small',
  },
};

// Sell variants
export const SellDefault: Story = {
  args: {
    children: 'Sell',
    icon: 'sell',
    variant: 'sell',
    size: 'big',
  },
};

export const SellActive: Story = {
  args: {
    children: 'Sell',
    icon: 'sell',
    variant: 'sell',
    size: 'big',
    active: true,
  },
};

export const SellDisabled: Story = {
  args: {
    children: 'Sell',
    icon: 'sell',
    variant: 'sell',
    size: 'big',
    disabled: true,
  },
};

export const SellSmall: Story = {
  args: {
    children: 'Sell',
    icon: 'sell',
    variant: 'sell',
    size: 'small',
  },
};

// Negative variants
export const NegativeDefault: Story = {
  args: {
    children: 'Delete',
    icon: 'close',
    variant: 'negative',
    size: 'big',
  },
};

export const NegativeActive: Story = {
  args: {
    children: 'Delete',
    icon: 'close',
    variant: 'negative',
    size: 'big',
    active: true,
  },
};

export const NegativeDisabled: Story = {
  args: {
    children: 'Delete',
    icon: 'close',
    variant: 'negative',
    size: 'big',
    disabled: true,
  },
};

export const NegativeSmall: Story = {
  args: {
    children: 'No',
    icon: 'close',
    variant: 'negative',
    size: 'small',
  },
};

// Basic variants
export const BasicDefault: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'basic',
    size: 'big',
  },
};

export const BasicActive: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'basic',
    size: 'big',
    active: true,
  },
};

export const BasicDisabled: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'basic',
    size: 'big',
    disabled: true,
  },
};

export const BasicSmall: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'basic',
    size: 'small',
  },
};

// Transparent variants
export const TransparentDefault: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'transparent',
    size: 'big',
  },
};

export const TransparentActive: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'transparent',
    size: 'big',
    active: true,
  },
};

export const TransparentDisabled: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'transparent',
    size: 'big',
    disabled: true,
  },
};

export const TransparentSmall: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'transparent',
    size: 'small',
  },
};

// Line variants
export const LineDefault: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'line',
    size: 'big',
  },
};

export const LineActive: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'line',
    size: 'big',
    active: true,
  },
};

export const LineDisabled: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'line',
    size: 'big',
    disabled: true,
  },
};

// Brand Opposite variants
export const BrandOppositeDefault: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brandOpposite',
    size: 'big',
  },
};

export const BrandOppositeActive: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brandOpposite',
    size: 'big',
    active: true,
  },
};

export const BrandOppositeDisabled: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brandOpposite',
    size: 'big',
    disabled: true,
  },
};

export const BrandOppositeSmall: Story = {
  args: {
    children: 'Send',
    icon: 'send',
    variant: 'brandOpposite',
    size: 'small',
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    children: 'Continue',
    variant: 'brand',
    size: 'big',
  },
};

// Icon visibility control
export const IconVisibilityControl: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="brand" icon="send" showIcon={true}>With Icon</Button>
        <Button variant="brand" icon="send" showIcon={false}>Without Icon</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="buy" icon="buy" showIcon={true} size="small">With Icon</Button>
        <Button variant="buy" icon="buy" showIcon={false} size="small">Without Icon</Button>
      </div>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="brand" icon="send">Brand</Button>
        <Button variant="buy" icon="buy">Buy</Button>
        <Button variant="sell" icon="sell">Sell</Button>
        <Button variant="negative" icon="close">Negative</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="basic" icon="send">Basic</Button>
        <Button variant="transparent" icon="send">Transparent</Button>
        <Button variant="line" icon="send">Line</Button>
        <Button variant="brandOpposite" icon="send">Brand Opposite</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="brand" icon="send" size="small">Small</Button>
        <Button variant="buy" icon="buy" size="small">Small Buy</Button>
        <Button variant="sell" icon="sell" size="small">Small Sell</Button>
      </div>
    </div>
  ),
};

// States showcase
export const AllStates: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px' }}>Default</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="brand" icon="send">Send</Button>
          <Button variant="buy" icon="buy">Buy</Button>
          <Button variant="sell" icon="sell">Sell</Button>
        </div>
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px' }}>Active</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="brand" icon="send" active>Send</Button>
          <Button variant="buy" icon="buy" active>Buy</Button>
          <Button variant="sell" icon="sell" active>Sell</Button>
        </div>
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px' }}>Disabled</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="brand" icon="send" disabled>Send</Button>
          <Button variant="buy" icon="buy" disabled>Buy</Button>
          <Button variant="sell" icon="sell" disabled>Sell</Button>
        </div>
      </div>
    </div>
  ),
};
