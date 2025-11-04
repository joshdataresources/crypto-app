import type { Meta, StoryObj } from '@storybook/react';
import { CryptoSelectorDropdown, CryptoPair, DropdownSelectorItem } from '../../components/selectors/CryptoSelectorDropdown';
import { useState } from 'react';

const meta = {
  title: 'Components/Selectors/CryptoSelectorDropdown',
  component: CryptoSelectorDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Crypto selector dropdown menu component from the apex-mobile-v6-dark design system.

## Purpose
Dropdown menu for selecting cryptocurrencies or trading pairs with filtering capabilities.

## Features
- **Pill tabs filtering**: Category filters (USDT, BTC, ETH, etc.) at the top
- **Two item types**: Pair (two overlapping badges) or Crypto (single badge)
- **Checkbox states**: Default, Selected (blue), Fixed (secondary/non-interactive)
- **Scrollable list**: Up to 320px max-height with custom scrollbar
- **Hover states**: Darker background on hover (#2A303C)
- **Multi-select support**: Optional checkboxes for selecting multiple items
- **Selectable/Non-selectable**: Items can be marked as non-interactive
- **Border separators**: Between list items (#283043)

## Figma Component Properties
- **type**: Pair | Crypto
- **state**: Off | On (selected/unselected)
- **selectable**: Yes | No
- **check**: Yes | No (show checkbox)

## Usage Example

\`\`\`tsx
const [selectedIds, setSelectedIds] = useState<string[]>([]);

const items: DropdownSelectorItem[] = [
  {
    id: '1',
    type: 'Pair',
    crypto: 'BTC',
    secondaryCrypto: 'USDT',
    displayName: 'BTC/USDT',
    category: 'USDT',
    selectable: true,
    showCheck: true,
  },
];

<CryptoSelectorDropdown
  items={items}
  selectedIds={selectedIds}
  filterTabs={filterTabs}
  multiSelect={false}
  onChange={setSelectedIds}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of dropdown items to display',
    },
    selectedIds: {
      description: 'Currently selected item IDs',
    },
    filterTabs: {
      description: 'Filter tabs for categorization',
    },
    multiSelect: {
      control: 'boolean',
      description: 'Whether to allow multiple selection',
    },
    onChange: {
      description: 'Change handler when selection changes',
    },
    pairs: {
      description: 'Legacy: Array of crypto pairs (use items instead)',
    },
    selectedPairs: {
      description: 'Legacy: Currently selected pair IDs (use selectedIds instead)',
    },
  },
} satisfies Meta<typeof CryptoSelectorDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample crypto pairs data
const usdtPairs: CryptoPair[] = [
  { id: '1', primary: 'BTC', secondary: 'USDT', displayName: 'BTC/USDT', category: 'USDT' },
  { id: '2', primary: 'ETH', secondary: 'USDT', displayName: 'ETH/USDT', category: 'USDT' },
  { id: '3', primary: 'BNB', secondary: 'USDT', displayName: 'BNB/USDT', category: 'USDT' },
  { id: '4', primary: 'ADA', secondary: 'USDT', displayName: 'ADA/USDT', category: 'USDT' },
  { id: '5', primary: 'XRP', secondary: 'USDT', displayName: 'XRP/USDT', category: 'USDT' },
  { id: '6', primary: 'LTC', secondary: 'USDT', displayName: 'LTC/USDT', category: 'USDT' },
];

const btcPairs: CryptoPair[] = [
  { id: '7', primary: 'ETH', secondary: 'BTC', displayName: 'ETH/BTC', category: 'BTC' },
  { id: '8', primary: 'BNB', secondary: 'BTC', displayName: 'BNB/BTC', category: 'BTC' },
  { id: '9', primary: 'ADA', secondary: 'BTC', displayName: 'ADA/BTC', category: 'BTC' },
  { id: '10', primary: 'XRP', secondary: 'BTC', displayName: 'XRP/BTC', category: 'BTC' },
];

const ethPairs: CryptoPair[] = [
  { id: '11', primary: 'BNB', secondary: 'ETH', displayName: 'BNB/ETH', category: 'ETH' },
  { id: '12', primary: 'ADA', secondary: 'ETH', displayName: 'ADA/ETH', category: 'ETH' },
];

const allPairs: CryptoPair[] = [...usdtPairs, ...btcPairs, ...ethPairs];

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
];

// Single Select with Filters
export const SingleSelect: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>(['1']);

    return (
      <div style={{ width: '375px' }}>
        <CryptoSelectorDropdown
          pairs={allPairs}
          selectedPairs={selectedPairs}
          filterTabs={filterTabs}
          multiSelect={false}
          onChange={setSelectedPairs}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px', padding: '0 16px' }}>
          Selected: <strong style={{ color: '#FFFFFF' }}>
            {selectedPairs.length > 0
              ? allPairs.find(p => p.id === selectedPairs[0])?.displayName
              : 'None'}
          </strong>
        </p>
      </div>
    );
  },
};

// Multi-Select with Checkboxes
export const MultiSelect: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>(['1', '2']);

    return (
      <div style={{ width: '375px' }}>
        <CryptoSelectorDropdown
          pairs={allPairs}
          selectedPairs={selectedPairs}
          filterTabs={filterTabs}
          multiSelect={true}
          onChange={setSelectedPairs}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px', padding: '0 16px' }}>
          Selected ({selectedPairs.length}): <strong style={{ color: '#FFFFFF' }}>
            {selectedPairs.map(id =>
              allPairs.find(p => p.id === id)?.displayName
            ).join(', ') || 'None'}
          </strong>
        </p>
      </div>
    );
  },
};

// Without Filters
export const WithoutFilters: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>([]);

    return (
      <div style={{ width: '375px' }}>
        <CryptoSelectorDropdown
          pairs={usdtPairs}
          selectedPairs={selectedPairs}
          filterTabs={[]}
          multiSelect={false}
          onChange={setSelectedPairs}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px', padding: '0 16px' }}>
          No filter tabs, just the list
        </p>
      </div>
    );
  },
};

// USDT Pairs Only
export const USDTPairsOnly: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>([]);

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          USDT Trading Pairs
        </h3>
        <CryptoSelectorDropdown
          pairs={usdtPairs}
          selectedPairs={selectedPairs}
          filterTabs={[]}
          multiSelect={false}
          onChange={setSelectedPairs}
        />
      </div>
    );
  },
};

// Long List (Scrollable)
export const LongList: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>([]);

    const manyPairs: CryptoPair[] = [
      ...usdtPairs,
      ...btcPairs,
      ...ethPairs,
      { id: '13', primary: 'DASH', secondary: 'USDT', displayName: 'DASH/USDT', category: 'USDT' },
      { id: '14', primary: 'XMR', secondary: 'USDT', displayName: 'XMR/USDT', category: 'USDT' },
      { id: '15', primary: 'BCH', secondary: 'USDT', displayName: 'BCH/USDT', category: 'USDT' },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          All Trading Pairs
        </h3>
        <CryptoSelectorDropdown
          pairs={manyPairs}
          selectedPairs={selectedPairs}
          filterTabs={filterTabs}
          multiSelect={true}
          onChange={setSelectedPairs}
        />
        <p style={{ color: '#9BAACE', fontSize: '11px', marginTop: '12px', padding: '0 16px' }}>
          Scroll to see more pairs →
        </p>
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>(['1']);

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Select Trading Pair
        </h3>
        <CryptoSelectorDropdown
          pairs={allPairs}
          selectedPairs={selectedPairs}
          filterTabs={filterTabs}
          multiSelect={false}
          onChange={setSelectedPairs}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: '#262D3E',
            borderRadius: '8px',
            border: '1px solid #283043'
          }}
        >
          <p style={{ color: '#9BAACE', fontSize: '12px', marginBottom: '4px' }}>
            Currently Selected:
          </p>
          <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 'bold' }}>
            {selectedPairs.length > 0
              ? allPairs.find(p => p.id === selectedPairs[0])?.displayName
              : 'None'}
          </p>
        </div>
      </div>
    );
  },
};

// Empty State
export const EmptyState: Story = {
  render: () => {
    const [selectedPairs, setSelectedPairs] = useState<string[]>([]);

    return (
      <div style={{ width: '375px' }}>
        <CryptoSelectorDropdown
          pairs={[]}
          selectedPairs={selectedPairs}
          filterTabs={filterTabs}
          multiSelect={false}
          onChange={setSelectedPairs}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px', padding: '0 16px' }}>
          No pairs available
        </p>
      </div>
    );
  },
};

// Static (No onChange)
export const Static: Story = {
  args: {
    pairs: usdtPairs,
    selectedPairs: ['1'],
    filterTabs: filterTabs,
    multiSelect: false,
  },
};

// ========================================
// Enhanced Stories with Explicit Properties
// ========================================

// All Item Types (Pair vs Crypto)
export const AllItemTypes: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

    const items: DropdownSelectorItem[] = [
      {
        id: '1',
        type: 'Pair',
        crypto: 'BTC',
        secondaryCrypto: 'USDT',
        displayName: 'BTC/USDT',
        category: 'USDT',
        selectable: true,
      },
      {
        id: '2',
        type: 'Pair',
        crypto: 'ETH',
        secondaryCrypto: 'USDT',
        displayName: 'ETH/USDT',
        category: 'USDT',
        selectable: true,
      },
      {
        id: '3',
        type: 'Crypto',
        crypto: 'BTC',
        displayName: 'Bitcoin',
        selectable: true,
      },
      {
        id: '4',
        type: 'Crypto',
        crypto: 'ETH',
        displayName: 'Ethereum',
        selectable: true,
      },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Mixed Item Types
        </h3>
        <CryptoSelectorDropdown
          items={items}
          selectedIds={selectedIds}
          filterTabs={[]}
          multiSelect={false}
          onChange={setSelectedIds}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          First two items are Pairs, last two are single Crypto items
        </p>
      </div>
    );
  },
};

// All Checkbox States
export const AllCheckboxStates: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['2']);

    const items: DropdownSelectorItem[] = [
      {
        id: '1',
        type: 'Pair',
        crypto: 'BTC',
        secondaryCrypto: 'USDT',
        displayName: 'BTC/USDT (Default)',
        category: 'USDT',
        selectable: true,
        showCheck: true,
        checkboxState: 'default',
      },
      {
        id: '2',
        type: 'Pair',
        crypto: 'ETH',
        secondaryCrypto: 'USDT',
        displayName: 'ETH/USDT (Selected)',
        category: 'USDT',
        selectable: true,
        showCheck: true,
        checkboxState: 'selected',
      },
      {
        id: '3',
        type: 'Pair',
        crypto: 'LTC',
        secondaryCrypto: 'USDT',
        displayName: 'LTC/USDT (Fixed)',
        category: 'USDT',
        selectable: false,
        showCheck: true,
        checkboxState: 'fixed',
      },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Checkbox States
        </h3>
        <CryptoSelectorDropdown
          items={items}
          selectedIds={selectedIds}
          filterTabs={[]}
          multiSelect={true}
          onChange={setSelectedIds}
        />
        <div style={{ marginTop: '16px', padding: '12px', background: '#262D3E', borderRadius: '8px' }}>
          <p style={{ color: '#9BAACE', fontSize: '11px', marginBottom: '8px' }}>
            • Default: Unchecked with dark border<br/>
            • Selected: Checked with blue border<br/>
            • Fixed: Checked with secondary border (non-interactive)
          </p>
        </div>
      </div>
    );
  },
};

// Selectable vs Non-Selectable
export const SelectableItems: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

    const items: DropdownSelectorItem[] = [
      {
        id: '1',
        type: 'Pair',
        crypto: 'BTC',
        secondaryCrypto: 'USDT',
        displayName: 'BTC/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '2',
        type: 'Pair',
        crypto: 'ETH',
        secondaryCrypto: 'USDT',
        displayName: 'ETH/USDT (Disabled)',
        category: 'USDT',
        selectable: false,
        showCheck: true,
      },
      {
        id: '3',
        type: 'Pair',
        crypto: 'XRP',
        secondaryCrypto: 'USDT',
        displayName: 'XRP/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '4',
        type: 'Pair',
        crypto: 'ADA',
        secondaryCrypto: 'USDT',
        displayName: 'ADA/USDT (Disabled)',
        category: 'USDT',
        selectable: false,
        showCheck: true,
      },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Selectable & Non-Selectable Items
        </h3>
        <CryptoSelectorDropdown
          items={items}
          selectedIds={selectedIds}
          filterTabs={[]}
          multiSelect={true}
          onChange={setSelectedIds}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Non-selectable items have reduced opacity and cannot be clicked
        </p>
      </div>
    );
  },
};

// With and Without Checkboxes
export const ShowCheckProperty: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

    const items: DropdownSelectorItem[] = [
      {
        id: '1',
        type: 'Pair',
        crypto: 'BTC',
        secondaryCrypto: 'USDT',
        displayName: 'BTC/USDT (with check)',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '2',
        type: 'Pair',
        crypto: 'ETH',
        secondaryCrypto: 'USDT',
        displayName: 'ETH/USDT (no check)',
        category: 'USDT',
        selectable: true,
        showCheck: false,
      },
      {
        id: '3',
        type: 'Pair',
        crypto: 'XRP',
        secondaryCrypto: 'USDT',
        displayName: 'XRP/USDT (with check)',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Show Check Property
        </h3>
        <CryptoSelectorDropdown
          items={items}
          selectedIds={selectedIds}
          filterTabs={[]}
          multiSelect={false}
          onChange={setSelectedIds}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Individual items can control whether to show checkboxes
        </p>
      </div>
    );
  },
};

// Complete Figma Example (matching the design)
export const FigmaExample: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(['1', '4', '7']);

    const items: DropdownSelectorItem[] = [
      {
        id: '1',
        type: 'Pair',
        crypto: 'BTC',
        secondaryCrypto: 'USDT',
        displayName: 'BTC/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '2',
        type: 'Pair',
        crypto: 'ETH',
        secondaryCrypto: 'USDT',
        displayName: 'ETH/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '3',
        type: 'Pair',
        crypto: 'LTC',
        secondaryCrypto: 'USDT',
        displayName: 'LTC/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '4',
        type: 'Pair',
        crypto: 'XRP',
        secondaryCrypto: 'USDT',
        displayName: 'XRP/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '5',
        type: 'Pair',
        crypto: 'DASH',
        secondaryCrypto: 'USDT',
        displayName: 'DASH/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '6',
        type: 'Pair',
        crypto: 'XMR',
        secondaryCrypto: 'USDT',
        displayName: 'XMR/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '7',
        type: 'Pair',
        crypto: 'ADA',
        secondaryCrypto: 'USDT',
        displayName: 'ADA/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
      {
        id: '8',
        type: 'Pair',
        crypto: 'USDT',
        secondaryCrypto: 'USDT',
        displayName: 'USD/USDT',
        category: 'USDT',
        selectable: true,
        showCheck: true,
      },
    ];

    const pillTabs = [
      { label: 'USDT', value: 'USDT' },
      { label: 'BTC', value: 'BTC' },
      { label: 'ETH', value: 'ETH' },
      { label: 'BNB', value: 'BNB' },
    ];

    return (
      <div style={{ width: '375px' }}>
        <h3 style={{ color: '#9BAACE', marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Figma Design Example
        </h3>
        <CryptoSelectorDropdown
          items={items}
          selectedIds={selectedIds}
          filterTabs={pillTabs}
          multiSelect={true}
          onChange={setSelectedIds}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '12px' }}>
          Matches the Figma design with pill tabs and multi-select checkboxes
        </p>
      </div>
    );
  },
};
