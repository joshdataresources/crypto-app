import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/inputs/Input';
import { useState } from 'react';

const meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Input component from the apex-mobile-v6-dark design system.

## Types
- **basic**: Standard text input
- **icon**: Input with icon (e.g., eye for password visibility)
- **dropdown**: Input with dropdown arrow
- **asset**: Crypto asset input with badge and MAX button

## States
- **default**: Normal state
- **active**: Focused state
- **disabled**: Non-interactive state
- **error**: Error/validation state
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['basic', 'icon', 'dropdown', 'asset'],
      description: 'Input type variant',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    icon: {
      control: 'select',
      options: ['eye', 'search', 'email'],
      description: 'Icon for icon type',
    },
    assetBadge: {
      control: 'text',
      description: 'Asset badge text (for asset type)',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text (for asset type)',
    },
    showMax: {
      control: 'boolean',
      description: 'Show MAX button (for asset type)',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Overview Demo
export const Overview: Story = {
  render: () => {
    const [basicValue, setBasicValue] = useState('');
    const [iconValue, setIconValue] = useState('');
    const [dropdownValue, setDropdownValue] = useState('');
    const [assetValue, setAssetValue] = useState('0.5');

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '20px',
        backgroundColor: '#1a1f2e',
        borderRadius: '8px',
        minWidth: '400px'
      }}>
        {/* Input Types */}
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>Input Types</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input
              type="basic"
              value={basicValue}
              onChange={setBasicValue}
              placeholder="Basic Input"
            />
            <Input
              type="icon"
              value={iconValue}
              onChange={setIconValue}
              placeholder="Password Input"
              icon="eye"
              inputType="password"
            />
            <Input
              type="dropdown"
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Select Option"
            />
            <Input
              type="asset"
              value={assetValue}
              onChange={setAssetValue}
              assetBadge="BTC"
              secondaryText="0.00234 BTC"
              showMax={true}
            />
          </div>
        </div>

        {/* States */}
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>States</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input type="basic" placeholder="Default State" />
            <Input type="basic" placeholder="Error State" error={true} />
            <Input type="basic" placeholder="Disabled State" disabled={true} />
          </div>
        </div>
      </div>
    );
  },
};

// Basic Input
export const BasicDefault: Story = {
  args: {
    type: 'basic',
    placeholder: 'Input Here',
  },
};

export const BasicWithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Sample text');
    return <Input type="basic" value={value} onChange={setValue} />;
  },
};

export const BasicError: Story = {
  args: {
    type: 'basic',
    placeholder: 'Input Here',
    error: true,
  },
};

export const BasicDisabled: Story = {
  args: {
    type: 'basic',
    placeholder: 'Input Here',
    disabled: true,
  },
};

// Icon Input (Password)
export const IconDefault: Story = {
  args: {
    type: 'icon',
    placeholder: 'Enter password',
    icon: 'eye',
    inputType: 'password',
  },
};

export const IconWithValue: Story = {
  render: () => {
    const [value, setValue] = useState('mypassword123');
    return (
      <Input
        type="icon"
        value={value}
        onChange={setValue}
        icon="eye"
        inputType="password"
      />
    );
  },
};

export const IconError: Story = {
  args: {
    type: 'icon',
    placeholder: 'Enter password',
    icon: 'eye',
    inputType: 'password',
    error: true,
  },
};

export const IconDisabled: Story = {
  args: {
    type: 'icon',
    placeholder: 'Enter password',
    icon: 'eye',
    inputType: 'password',
    disabled: true,
  },
};

// Dropdown Input
export const DropdownDefault: Story = {
  args: {
    type: 'dropdown',
    placeholder: 'Select option',
  },
};

export const DropdownWithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Bitcoin');
    return <Input type="dropdown" value={value} onChange={setValue} />;
  },
};

export const DropdownError: Story = {
  args: {
    type: 'dropdown',
    placeholder: 'Select option',
    error: true,
  },
};

export const DropdownDisabled: Story = {
  args: {
    type: 'dropdown',
    placeholder: 'Select option',
    disabled: true,
  },
};

// Asset Input
export const AssetDefault: Story = {
  args: {
    type: 'asset',
    value: '0.5',
    assetBadge: 'BTC',
    secondaryText: '0.00234 BTC',
    showMax: true,
    inputType: 'number',
  },
};

export const AssetInteractive: Story = {
  render: () => {
    const [value, setValue] = useState('0.5');
    const handleMax = () => {
      setValue('2.5');
    };
    return (
      <Input
        type="asset"
        value={value}
        onChange={setValue}
        assetBadge="BTC"
        secondaryText="Available: 2.5 BTC"
        showMax={true}
        onMaxClick={handleMax}
        inputType="number"
      />
    );
  },
};

export const AssetError: Story = {
  args: {
    type: 'asset',
    value: '999',
    assetBadge: 'BTC',
    secondaryText: 'Insufficient funds',
    showMax: true,
    error: true,
    inputType: 'number',
  },
};

export const AssetDisabled: Story = {
  args: {
    type: 'asset',
    value: '0.5',
    assetBadge: 'BTC',
    secondaryText: '0.00234 BTC',
    showMax: true,
    disabled: true,
    inputType: 'number',
  },
};

export const AssetETH: Story = {
  render: () => {
    const [value, setValue] = useState('1.25');
    return (
      <Input
        type="asset"
        value={value}
        onChange={setValue}
        assetBadge="ETH"
        secondaryText="Available: 5.5 ETH"
        showMax={true}
        inputType="number"
      />
    );
  },
};

export const AssetUSD: Story = {
  render: () => {
    const [value, setValue] = useState('1000');
    return (
      <Input
        type="asset"
        value={value}
        onChange={setValue}
        assetBadge="USD"
        secondaryText="Balance: $5,000"
        showMax={true}
        inputType="number"
      />
    );
  },
};

// All States Comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Basic Input</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Input type="basic" placeholder="Default" />
          <Input type="basic" placeholder="Error" error={true} />
          <Input type="basic" placeholder="Disabled" disabled={true} />
        </div>
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Icon Input</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Input type="icon" placeholder="Default" icon="eye" inputType="password" />
          <Input type="icon" placeholder="Error" icon="eye" inputType="password" error={true} />
          <Input type="icon" placeholder="Disabled" icon="eye" inputType="password" disabled={true} />
        </div>
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Asset Input</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Input type="asset" value="0.5" assetBadge="BTC" secondaryText="Available" showMax={true} />
          <Input type="asset" value="999" assetBadge="BTC" secondaryText="Insufficient" error={true} showMax={true} />
          <Input type="asset" value="0.5" assetBadge="BTC" secondaryText="Available" disabled={true} showMax={true} />
        </div>
      </div>
    </div>
  ),
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <Input
        type="basic"
        label="Username:"
        placeholder="Enter your username"
      />
      <Input
        type="icon"
        label="Password:"
        placeholder="Enter your password"
        icon="eye"
        inputType="password"
      />
      <Input
        type="asset"
        label="Amount:"
        value="0.5"
        assetBadge="BTC"
        secondaryText="Available: 2.5 BTC"
        showMax={true}
      />
    </div>
  ),
};

// With Error Message
export const WithErrorMessage: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <Input
        type="basic"
        placeholder="Enter email"
        error={true}
        errorMessage="Invalid email address"
      />
      <Input
        type="icon"
        placeholder="Enter password"
        icon="eye"
        inputType="password"
        error={true}
        errorMessage="Password must be at least 8 characters"
      />
      <Input
        type="asset"
        value="999"
        assetBadge="BTC"
        secondaryText="Available: 2.5 BTC"
        showMax={true}
        error={true}
        errorMessage="Insufficient balance"
      />
    </div>
  ),
};

// With Label and Error Message
export const WithLabelAndError: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <Input
        type="basic"
        label="Email:"
        placeholder="Enter email"
        error={true}
        errorMessage="This email is already taken"
      />
      <Input
        type="icon"
        label="Password:"
        placeholder="Enter password"
        icon="eye"
        inputType="password"
        error={true}
        errorMessage="Password is too weak"
      />
      <Input
        type="asset"
        label="Withdrawal Amount:"
        value="5.0"
        assetBadge="BTC"
        secondaryText="Available: 2.5 BTC"
        showMax={true}
        error={true}
        errorMessage="Amount exceeds available balance"
      />
    </div>
  ),
};

// Interactive Form Example
export const FormExample: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');
    const [errors, setErrors] = useState({
      email: '',
      password: '',
      amount: '',
    });

    const validateEmail = (value: string) => {
      if (!value) {
        setErrors(prev => ({ ...prev, email: 'Email is required' }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    };

    const validatePassword = (value: string) => {
      if (!value) {
        setErrors(prev => ({ ...prev, password: 'Password is required' }));
      } else if (value.length < 8) {
        setErrors(prev => ({ ...prev, password: 'Password must be at least 8 characters' }));
      } else {
        setErrors(prev => ({ ...prev, password: '' }));
      }
    };

    const validateAmount = (value: string) => {
      const num = parseFloat(value);
      if (!value) {
        setErrors(prev => ({ ...prev, amount: 'Amount is required' }));
      } else if (isNaN(num) || num <= 0) {
        setErrors(prev => ({ ...prev, amount: 'Amount must be greater than 0' }));
      } else if (num > 2.5) {
        setErrors(prev => ({ ...prev, amount: 'Insufficient balance' }));
      } else {
        setErrors(prev => ({ ...prev, amount: '' }));
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
          Registration Form
        </h3>
        <Input
          type="basic"
          label="Email Address:"
          value={email}
          onChange={(val) => {
            setEmail(val);
            validateEmail(val);
          }}
          placeholder="you@example.com"
          error={!!errors.email}
          errorMessage={errors.email}
        />
        <Input
          type="icon"
          label="Password:"
          value={password}
          onChange={(val) => {
            setPassword(val);
            validatePassword(val);
          }}
          placeholder="Enter password"
          icon="eye"
          inputType="password"
          error={!!errors.password}
          errorMessage={errors.password}
        />
        <Input
          type="asset"
          label="Withdrawal Amount:"
          value={amount}
          onChange={(val) => {
            setAmount(val);
            validateAmount(val);
          }}
          assetBadge="BTC"
          secondaryText="Available: 2.5 BTC"
          showMax={true}
          onMaxClick={() => {
            setAmount('2.5');
            setErrors(prev => ({ ...prev, amount: '' }));
          }}
          error={!!errors.amount}
          errorMessage={errors.amount}
        />
      </div>
    );
  },
};
