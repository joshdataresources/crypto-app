import type { Meta, StoryObj } from '@storybook/react';
import { PairCryptoSelector } from '../../components/selectors/PairCryptoSelector';
import type { DropdownSelectorItem } from '../../components/selectors/CryptoSelectorDropdown';
import { useState } from 'react';

const meta = {
  title: 'Components/Selectors/PairCryptoSelector',
  component: PairCryptoSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown selector with Pairs/Crypto toggle. Automatically filters items based on selected type and shows pill tabs only for Pairs view.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PairCryptoSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data with both pairs and individual cryptos
const allItems: DropdownSelectorItem[] = [
  // Pairs
  { id: '1', type: 'Pair', displayName: 'BTCUSDT', crypto: 'BTC', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '2', type: 'Pair', displayName: 'ETHUSDT', crypto: 'ETH', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '3', type: 'Pair', displayName: 'LTCUSDT', crypto: 'LTC', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '4', type: 'Pair', displayName: 'XRPUSDT', crypto: 'XRP', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '5', type: 'Pair', displayName: 'ADAUSDT', crypto: 'ADA', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '6', type: 'Pair', displayName: 'ETHBTC', crypto: 'ETH', secondaryCrypto: 'BTC', category: 'BTC', selectable: true, showCheck: false },
  { id: '7', type: 'Pair', displayName: 'LTCBTC', crypto: 'LTC', secondaryCrypto: 'BTC', category: 'BTC', selectable: true, showCheck: false },

  // Individual Cryptos
  { id: 'c1', type: 'Crypto', displayName: 'BTC Bitcoin', crypto: 'BTC', selectable: true, showCheck: false },
  { id: 'c2', type: 'Crypto', displayName: 'ETH Ethereum', crypto: 'ETH', selectable: true, showCheck: false },
  { id: 'c3', type: 'Crypto', displayName: 'LTC Litecoin', crypto: 'LTC', selectable: true, showCheck: false },
  { id: 'c4', type: 'Crypto', displayName: 'XRP Ripple', crypto: 'XRP', selectable: true, showCheck: false },
  { id: 'c5', type: 'Crypto', displayName: 'ADA Cardano', crypto: 'ADA', selectable: true, showCheck: false },
  { id: 'c6', type: 'Crypto', displayName: 'DASH Dash', crypto: 'DASH', selectable: true, showCheck: false },
];

const filterTabs = [
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
];

// Default with Pairs view
export const Default: Story = {
  args: {
    items: allItems,
    filterTabs,
    multiSelect: false,
    initialListType: 'pairs',
  },
};

// Starting with Crypto view
export const CryptoView: Story = {
  args: {
    items: allItems,
    filterTabs,
    multiSelect: false,
    initialListType: 'crypto',
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    items: allItems,
    filterTabs,
    multiSelect: false,
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Select Trading Pair or Cryptocurrency
        </h3>
        <PairCryptoSelector
          items={allItems}
          selectedIds={selectedIds}
          filterTabs={filterTabs}
          multiSelect={false}
          onChange={setSelectedIds}
        />
        <div style={{ marginTop: '16px', color: '#9BAACE', fontSize: '12px' }}>
          Selected: {selectedIds.length > 0 ? (
            <span style={{ color: '#FFFFFF' }}>{selectedIds.join(', ')}</span>
          ) : (
            <span style={{ color: '#9BAACE' }}>None</span>
          )}
        </div>
      </div>
    );
  },
};

// Multi-select mode
export const MultiSelect: Story = {
  args: {
    items: allItems,
    filterTabs,
    multiSelect: true,
    initialListType: 'pairs',
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['1', '2']);

    return (
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Multi-Select Mode
        </h3>
        <PairCryptoSelector
          items={allItems}
          selectedIds={selectedIds}
          filterTabs={filterTabs}
          multiSelect={true}
          onChange={setSelectedIds}
        />
        <div style={{ marginTop: '16px', color: '#9BAACE', fontSize: '12px' }}>
          Selected ({selectedIds.length}): {selectedIds.length > 0 ? (
            <span style={{ color: '#FFFFFF' }}>{selectedIds.join(', ')}</span>
          ) : (
            <span style={{ color: '#9BAACE' }}>None</span>
          )}
        </div>
      </div>
    );
  },
};

// Without filter tabs
export const WithoutFilters: Story = {
  args: {
    items: allItems,
    multiSelect: false,
    initialListType: 'pairs',
  },
};

// Side by side comparison
export const Comparison: Story = {
  args: {
    items: allItems,
    filterTabs,
    multiSelect: false,
  },
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', padding: '20px' }}>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
            Pairs View
          </h3>
          <PairCryptoSelector
            items={allItems}
            filterTabs={filterTabs}
            multiSelect={false}
            initialListType="pairs"
          />
        </div>
        <div>
          <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
            Crypto View
          </h3>
          <PairCryptoSelector
            items={allItems}
            filterTabs={filterTabs}
            multiSelect={false}
            initialListType="crypto"
          />
        </div>
      </div>
    );
  },
};
