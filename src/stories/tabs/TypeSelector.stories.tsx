import type { Meta, StoryObj } from '@storybook/react';
import { TypeSelector } from '../../components/tabs/TypeSelector';
import { useState } from 'react';

const meta = {
  title: 'Components/Tabs/TypeSelector',
  component: TypeSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle tabs for switching between Pairs and Crypto views. Small compact design with blue active state.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with Pairs selected
export const Default: Story = {
  args: {
    activeType: 'pairs',
    onChange: () => {},
  },
};

// Crypto selected
export const CryptoSelected: Story = {
  args: {
    activeType: 'crypto',
    onChange: () => {},
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    activeType: 'pairs',
    onChange: () => {},
  },
  render: () => {
    const [activeType, setActiveType] = useState<'pairs' | 'crypto'>('pairs');

    return (
      <div style={{ padding: '20px' }}>
        <TypeSelector
          activeType={activeType}
          onChange={setActiveType}
        />
        <p style={{ color: '#9BAACE', marginTop: '16px', fontSize: '14px' }}>
          Selected: <strong style={{ color: '#FFFFFF' }}>{activeType}</strong>
        </p>
      </div>
    );
  },
};

// All states side by side
export const AllStates: Story = {
  args: {
    activeType: 'pairs',
    onChange: () => {},
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <div>
          <p style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Pairs Active</p>
          <TypeSelector activeType="pairs" onChange={() => {}} />
        </div>
        <div>
          <p style={{ color: '#9BAACE', marginBottom: '8px', fontSize: '12px' }}>Crypto Active</p>
          <TypeSelector activeType="crypto" onChange={() => {}} />
        </div>
      </div>
    );
  },
};
