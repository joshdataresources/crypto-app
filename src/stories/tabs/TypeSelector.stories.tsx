import type { Meta, StoryObj } from '@storybook/react';
import { TypeSelector, type TypeSelectorValue } from '../../components/tabs/TypeSelector';
import { useState } from 'react';
import { colorsDark } from '../../tokens/colors';

const meta = {
  title: 'Components/Tabs/TypeSelector',
  component: TypeSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Generic toggle tabs for switching between two types. Small compact design with blue active state. Customizable labels for different use cases (Pairs/Crypto, Candle/Area, etc.).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type1: {
      control: 'text',
      description: 'Label for first option',
    },
    type2: {
      control: 'text',
      description: 'Label for second option',
    },
    activeType: {
      control: 'select',
      options: ['type1', 'type2'],
      description: 'Currently active type',
    },
  },
} satisfies Meta<typeof TypeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with Pairs/Crypto
export const PairsCrypto: Story = {
  args: {
    type1: 'Pairs',
    type2: 'Crypto',
    activeType: 'type1',
    onChange: () => {},
  },
};

// Candle/Area chart toggle
export const CandleArea: Story = {
  args: {
    type1: 'Candle',
    type2: 'Area',
    activeType: 'type1',
    onChange: () => {},
  },
};

// Buy/Sell toggle
export const BuySell: Story = {
  args: {
    type1: 'Buy',
    type2: 'Sell',
    activeType: 'type1',
    onChange: () => {},
  },
};

// Interactive example with Pairs/Crypto
export const InteractivePairsCrypto: Story = {
  render: () => {
    const [activeType, setActiveType] = useState<TypeSelectorValue>('type1');

    return (
      <div style={{ padding: '20px' }}>
        <TypeSelector
          type1="Pairs"
          type2="Crypto"
          activeType={activeType}
          onChange={setActiveType}
        />
        <p style={{ color: colorsDark.text.secondary, marginTop: '16px', fontSize: '14px' }}>
          Selected: <strong style={{ color: colorsDark.text.primary }}>{activeType === 'type1' ? 'Pairs' : 'Crypto'}</strong>
        </p>
      </div>
    );
  },
};

// Interactive example with Candle/Area
export const InteractiveCandleArea: Story = {
  render: () => {
    const [activeType, setActiveType] = useState<TypeSelectorValue>('type1');

    return (
      <div style={{ padding: '20px' }}>
        <TypeSelector
          type1="Candle"
          type2="Area"
          activeType={activeType}
          onChange={setActiveType}
        />
        <p style={{ color: colorsDark.text.secondary, marginTop: '16px', fontSize: '14px' }}>
          Chart Type: <strong style={{ color: colorsDark.text.primary }}>{activeType === 'type1' ? 'Candle' : 'Area'}</strong>
        </p>
      </div>
    );
  },
};

// All variants
export const AllVariants: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <div>
          <p style={{ color: colorsDark.text.secondary, marginBottom: '8px', fontSize: '12px' }}>Pairs / Crypto</p>
          <TypeSelector type1="Pairs" type2="Crypto" activeType="type1" onChange={() => {}} />
        </div>
        <div>
          <p style={{ color: colorsDark.text.secondary, marginBottom: '8px', fontSize: '12px' }}>Candle / Area</p>
          <TypeSelector type1="Candle" type2="Area" activeType="type2" onChange={() => {}} />
        </div>
        <div>
          <p style={{ color: colorsDark.text.secondary, marginBottom: '8px', fontSize: '12px' }}>Buy / Sell</p>
          <TypeSelector type1="Buy" type2="Sell" activeType="type1" onChange={() => {}} />
        </div>
        <div>
          <p style={{ color: colorsDark.text.secondary, marginBottom: '8px', fontSize: '12px' }}>List / Grid</p>
          <TypeSelector type1="List" type2="Grid" activeType="type2" onChange={() => {}} />
        </div>
      </div>
    );
  },
};
