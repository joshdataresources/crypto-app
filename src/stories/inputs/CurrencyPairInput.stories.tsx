import type { Meta, StoryObj } from '@storybook/react';
import { CurrencyPairInput } from '../../components/inputs/CurrencyPairInput';
import { useState } from 'react';

const meta = {
  title: 'Components/Inputs/CurrencyPairInput',
  component: CurrencyPairInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Currency Pair Input component from the apex-mobile-v6-dark design system.

## Purpose
Specialized input for trading currency pairs with two connected fields.

## Features
- **Two connected fields**: Top and bottom currencies
- **Currency badges**: Visual indicators for each currency (e.g., BTC, USD)
- **Conditional MAX buttons**: Only show when balance is available
- **Focus states**: Active field highlighted with blue border
- **Error states**: Validation feedback with red border
- **Auto-calculation**: Update one field based on the other

## Usage Example

\`\`\`tsx
const [btcValue, setBtcValue] = useState('0.5');
const [usdValue, setUsdValue] = useState('10253.25');

// Convert BTC to USD when BTC changes
const handleBtcChange = (value: string) => {
  setBtcValue(value);
  const usd = parseFloat(value) * 20506.5; // BTC price
  setUsdValue(usd.toFixed(2));
};

// Convert USD to BTC when USD changes
const handleUsdChange = (value: string) => {
  setUsdValue(value);
  const btc = parseFloat(value) / 20506.5; // BTC price
  setBtcValue(btc.toFixed(8));
};

<CurrencyPairInput
  topCurrency="BTC"
  bottomCurrency="USD"
  topValue={btcValue}
  bottomValue={usdValue}
  onTopChange={handleBtcChange}
  onBottomChange={handleUsdChange}
  showTopMax={true}
  showBottomMax={false}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    topCurrency: {
      control: 'text',
      description: 'Top currency code',
    },
    bottomCurrency: {
      control: 'text',
      description: 'Bottom currency code',
    },
    topValue: {
      control: 'text',
      description: 'Top field value',
    },
    bottomValue: {
      control: 'text',
      description: 'Bottom field value',
    },
    showTopMax: {
      control: 'boolean',
      description: 'Show MAX button on top field',
    },
    showBottomMax: {
      control: 'boolean',
      description: 'Show MAX button on bottom field',
    },
    topError: {
      control: 'boolean',
      description: 'Top field error state',
    },
    bottomError: {
      control: 'boolean',
      description: 'Bottom field error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof CurrencyPairInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Overview Demo
export const Overview: Story = {
  render: () => {
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
        {/* Basic Example */}
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>BTC to USD</h3>
          <CurrencyPairInput
            topCurrency="BTC"
            bottomCurrency="USD"
            topValue="0.5"
            bottomValue="$10,253.25"
            showTopMax={true}
            showBottomMax={true}
          />
        </div>

        {/* States */}
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>States</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '8px' }}>With Balance (shows MAX buttons)</p>
              <CurrencyPairInput
                topCurrency="ETH"
                bottomCurrency="USD"
                topValue="2.5"
                bottomValue="$5,000.00"
                showTopMax={true}
                showBottomMax={false}
              />
            </div>
            <div>
              <p style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '8px' }}>Without Balance (no MAX buttons)</p>
              <CurrencyPairInput
                topCurrency="BTC"
                bottomCurrency="USD"
                topValue="0.0"
                bottomValue="$0.00"
                showTopMax={false}
                showBottomMax={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [btcValue, setBtcValue] = useState('0.5');
    const [usdValue, setUsdValue] = useState('10253.25');
    const BTC_PRICE = 20506.5;

    const handleBtcChange = (value: string) => {
      setBtcValue(value);
      const numValue = parseFloat(value) || 0;
      setUsdValue((numValue * BTC_PRICE).toFixed(2));
    };

    const handleUsdChange = (value: string) => {
      setUsdValue(value);
      const numValue = parseFloat(value) || 0;
      setBtcValue((numValue / BTC_PRICE).toFixed(8));
    };

    const handleBtcMax = () => {
      setBtcValue('2.5');
      setUsdValue((2.5 * BTC_PRICE).toFixed(2));
    };

    return (
      <div style={{ minWidth: '400px' }}>
        <p style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '16px' }}>
          Type in either field to see automatic conversion. Click MAX to use full balance.
        </p>
        <CurrencyPairInput
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue={btcValue}
          bottomValue={`$${usdValue}`}
          onTopChange={handleBtcChange}
          onBottomChange={(val) => handleUsdChange(val.replace('$', ''))}
          onTopMax={handleBtcMax}
          showTopMax={true}
          showBottomMax={false}
        />
        <p style={{ color: '#9BAACE', fontSize: '11px', marginTop: '12px' }}>
          BTC Price: ${BTC_PRICE.toLocaleString()} | Available: 2.5 BTC
        </p>
      </div>
    );
  },
};

// Initial State
export const Initial: Story = {
  args: {
    topCurrency: 'BTC',
    bottomCurrency: 'USD',
    topValue: '0.5',
    bottomValue: '$10,253.25',
    showTopMax: true,
    showBottomMax: true,
  },
};

// Top Field Error
export const TopFieldError: Story = {
  render: () => (
    <div style={{ minWidth: '400px' }}>
      <CurrencyPairInput
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="999"
        bottomValue="$0.00"
        topError={true}
        showTopMax={true}
        showBottomMax={true}
      />
      <p style={{ color: '#ed3737', fontSize: '12px', marginTop: '8px' }}>
        Insufficient BTC balance
      </p>
    </div>
  ),
};

// Bottom Field Error
export const BottomFieldError: Story = {
  render: () => (
    <div style={{ minWidth: '400px' }}>
      <CurrencyPairInput
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="0.5"
        bottomValue="$999,999.99"
        bottomError={true}
        showTopMax={true}
        showBottomMax={true}
      />
      <p style={{ color: '#ed3737', fontSize: '12px', marginTop: '8px' }}>
        Insufficient USD balance
      </p>
    </div>
  ),
};

// ETH to USD
export const ETHtoUSD: Story = {
  render: () => {
    const [ethValue, setEthValue] = useState('2.5');
    const [usdValue, setUsdValue] = useState('5000.00');

    return (
      <CurrencyPairInput
        topCurrency="ETH"
        bottomCurrency="USD"
        topValue={ethValue}
        bottomValue={`$${usdValue}`}
        onTopChange={setEthValue}
        onBottomChange={(val) => setUsdValue(val.replace('$', ''))}
        showTopMax={true}
        showBottomMax={false}
      />
    );
  },
};

// ADA to BTC
export const ADAtoBTC: Story = {
  render: () => {
    const [adaValue, setAdaValue] = useState('1000');
    const [btcValue, setBtcValue] = useState('0.0195');

    return (
      <CurrencyPairInput
        topCurrency="ADA"
        bottomCurrency="BTC"
        topValue={adaValue}
        bottomValue={btcValue}
        onTopChange={setAdaValue}
        onBottomChange={setBtcValue}
        showTopMax={true}
        showBottomMax={false}
      />
    );
  },
};

// No MAX Buttons
export const NoMAXButtons: Story = {
  args: {
    topCurrency: 'BTC',
    bottomCurrency: 'USD',
    topValue: '0.0',
    bottomValue: '$0.00',
    showTopMax: false,
    showBottomMax: false,
  },
};

// Only Top MAX
export const OnlyTopMAX: Story = {
  args: {
    topCurrency: 'BTC',
    bottomCurrency: 'USD',
    topValue: '0.5',
    bottomValue: '$10,253.25',
    showTopMax: true,
    showBottomMax: false,
  },
};

// Only Bottom MAX
export const OnlyBottomMAX: Story = {
  args: {
    topCurrency: 'BTC',
    bottomCurrency: 'USD',
    topValue: '0.5',
    bottomValue: '$10,253.25',
    showTopMax: false,
    showBottomMax: true,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    topCurrency: 'BTC',
    bottomCurrency: 'USD',
    topValue: '0.5',
    bottomValue: '$10,253.25',
    showTopMax: true,
    showBottomMax: true,
    disabled: true,
  },
};

// All States Comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Default</h4>
        <CurrencyPairInput
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue="0.5"
          bottomValue="$10,253.25"
          showTopMax={true}
          showBottomMax={true}
        />
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Top Error</h4>
        <CurrencyPairInput
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue="999"
          bottomValue="$0.00"
          topError={true}
          showTopMax={true}
          showBottomMax={true}
        />
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Bottom Error</h4>
        <CurrencyPairInput
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue="0.5"
          bottomValue="$999,999.99"
          bottomError={true}
          showTopMax={true}
          showBottomMax={true}
        />
      </div>
      <div>
        <h4 style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>No Balance (No MAX)</h4>
        <CurrencyPairInput
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue="0.0"
          bottomValue="$0.00"
          showTopMax={false}
          showBottomMax={false}
        />
      </div>
    </div>
  ),
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <CurrencyPairInput
        label="Exchange Amount:"
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="0.5"
        bottomValue="$10,253.25"
        showTopMax={true}
        showBottomMax={false}
      />
      <CurrencyPairInput
        label="Trade Amount:"
        topCurrency="ETH"
        bottomCurrency="USD"
        topValue="2.5"
        bottomValue="$5,000.00"
        showTopMax={true}
        showBottomMax={false}
      />
    </div>
  ),
};

// With Error Message
export const WithErrorMessage: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <CurrencyPairInput
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="999"
        bottomValue="$0.00"
        topError={true}
        showTopMax={true}
        showBottomMax={false}
        errorMessage="Insufficient BTC balance"
      />
      <CurrencyPairInput
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="0.5"
        bottomValue="$999,999.99"
        bottomError={true}
        showTopMax={true}
        showBottomMax={false}
        errorMessage="Insufficient USD balance"
      />
    </div>
  ),
};

// With Label and Error Message
export const WithLabelAndError: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <CurrencyPairInput
        label="Withdrawal Amount:"
        topCurrency="BTC"
        bottomCurrency="USD"
        topValue="10.0"
        bottomValue="$205,065.00"
        topError={true}
        showTopMax={true}
        showBottomMax={false}
        errorMessage="Amount exceeds available balance of 2.5 BTC"
      />
      <CurrencyPairInput
        label="Deposit Amount:"
        topCurrency="ETH"
        bottomCurrency="USD"
        topValue="0.001"
        bottomValue="$2.00"
        topError={true}
        showTopMax={true}
        showBottomMax={false}
        errorMessage="Minimum deposit is 0.01 ETH"
      />
    </div>
  ),
};

// Trading Form Example
export const TradingFormExample: Story = {
  render: () => {
    const [btcValue, setBtcValue] = useState('');
    const [usdValue, setUsdValue] = useState('');
    const [error, setError] = useState('');
    const BTC_PRICE = 20506.5;
    const MAX_BTC = 2.5;

    const validateBtc = (value: string) => {
      const num = parseFloat(value);
      if (!value) {
        setError('Amount is required');
        return false;
      } else if (isNaN(num) || num <= 0) {
        setError('Amount must be greater than 0');
        return false;
      } else if (num > MAX_BTC) {
        setError(`Insufficient balance. Available: ${MAX_BTC} BTC`);
        return false;
      } else {
        setError('');
        return true;
      }
    };

    const handleBtcChange = (value: string) => {
      setBtcValue(value);
      const numValue = parseFloat(value) || 0;
      setUsdValue((numValue * BTC_PRICE).toFixed(2));
      validateBtc(value);
    };

    const handleUsdChange = (value: string) => {
      setUsdValue(value);
      const numValue = parseFloat(value) || 0;
      const btc = (numValue / BTC_PRICE).toFixed(8);
      setBtcValue(btc);
      validateBtc(btc);
    };

    const handleMax = () => {
      setBtcValue(MAX_BTC.toString());
      setUsdValue((MAX_BTC * BTC_PRICE).toFixed(2));
      setError('');
    };

    return (
      <div style={{ minWidth: '400px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Sell BTC
        </h3>
        <CurrencyPairInput
          label="Sell Amount:"
          topCurrency="BTC"
          bottomCurrency="USD"
          topValue={btcValue}
          bottomValue={usdValue}
          onTopChange={handleBtcChange}
          onBottomChange={handleUsdChange}
          onTopMax={handleMax}
          showTopMax={true}
          showBottomMax={false}
          topError={!!error}
          errorMessage={error}
        />
        <p style={{ color: '#9BAACE', fontSize: '11px', marginTop: '12px' }}>
          BTC Price: ${BTC_PRICE.toLocaleString()} | Available: {MAX_BTC} BTC
        </p>
      </div>
    );
  },
};
