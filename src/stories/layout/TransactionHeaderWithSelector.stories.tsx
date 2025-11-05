import type { Meta, StoryObj } from '@storybook/react';
import { TransactionHeader } from '../../components/layout/TransactionHeader';
import { PairCryptoSelector } from '../../components/selectors/PairCryptoSelector';
import type { DropdownSelectorItem } from '../../components/selectors/CryptoSelectorDropdown';
import { useState } from 'react';
import { colorsDark } from '../../tokens/colors';

const meta = {
  title: 'Components/Layout/TransactionHeader with Selector',
  component: TransactionHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TransactionHeader with working PairCryptoSelector dropdown integration.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionHeader>;

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
  { id: '6', type: 'Pair', displayName: 'DASHUSDT', crypto: 'DASH', secondaryCrypto: 'USDT', category: 'USDT', selectable: true, showCheck: false },
  { id: '7', type: 'Pair', displayName: 'ETHBTC', crypto: 'ETH', secondaryCrypto: 'BTC', category: 'BTC', selectable: true, showCheck: false },
  { id: '8', type: 'Pair', displayName: 'LTCBTC', crypto: 'LTC', secondaryCrypto: 'BTC', category: 'BTC', selectable: true, showCheck: false },

  // Individual Cryptos
  { id: 'c1', type: 'Crypto', displayName: 'BTC Bitcoin', crypto: 'BTC', selectable: true, showCheck: false },
  { id: 'c2', type: 'Crypto', displayName: 'ETH Ethereum', crypto: 'ETH', selectable: true, showCheck: false },
  { id: 'c3', type: 'Crypto', displayName: 'LTC Litecoin', crypto: 'LTC', selectable: true, showCheck: false },
  { id: 'c4', type: 'Crypto', displayName: 'XRP Ripple', crypto: 'XRP', selectable: true, showCheck: false },
  { id: 'c5', type: 'Crypto', displayName: 'ADA Cardano', crypto: 'ADA', selectable: true, showCheck: false },
  { id: 'c6', type: 'Crypto', displayName: 'DASH Dash', crypto: 'DASH', selectable: true, showCheck: false },
  { id: 'c7', type: 'Crypto', displayName: 'XMR Monero', crypto: 'XMR', selectable: true, showCheck: false },
];

const filterTabs = [
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
];

// Buy Pair with working dropdown
export const BuyPairWithDropdown: Story = {
  args: {
    type: 'buy-pair',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string>('1');

    // Find selected item
    const selectedItem = allItems.find(item => item.id === selectedId);

    return (
      <div style={{ width: '375px', background: colorsDark.forms.background, padding: '20px' }}>
        <h3 style={{ color: colorsDark.text.secondary, marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Buy Trading Pair (Click Selector to Open)
        </h3>

        <div style={{ position: 'relative' }}>
          <TransactionHeader
            type="buy-pair"
            state="default"
            primaryCrypto={selectedItem?.crypto}
            secondaryCrypto={selectedItem?.type === 'Pair' ? selectedItem.secondaryCrypto : undefined}
            displayText={selectedItem?.displayName}
            onSelectorClick={() => setIsOpen(!isOpen)}
            onClose={() => console.log('Close')}
          />

          {/* Dropdown */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              top: '72px',
              left: '20px',
              right: '20px',
              zIndex: 1000,
            }}>
              <PairCryptoSelector
                items={allItems}
                selectedIds={[selectedId]}
                filterTabs={filterTabs}
                multiSelect={false}
                initialListType="pairs"
                onChange={(ids) => {
                  if (ids.length > 0) {
                    setSelectedId(ids[0]);
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          )}
        </div>

        <p style={{ color: colorsDark.text.secondary, marginTop: '16px', fontSize: '12px' }}>
          Selected: <span style={{ color: colorsDark.text.primary }}>{selectedItem?.displayName}</span>
        </p>
      </div>
    );
  },
};

// Sell Asset with working dropdown (Crypto only)
export const SellAssetWithDropdown: Story = {
  args: {
    type: 'sell-asset',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string>('c1');

    // Find selected item
    const selectedItem = allItems.find(item => item.id === selectedId);

    return (
      <div style={{ width: '375px', background: colorsDark.forms.background, padding: '20px' }}>
        <h3 style={{ color: colorsDark.text.secondary, marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Sell Single Asset (Click Selector to Open)
        </h3>

        <div style={{ position: 'relative' }}>
          <TransactionHeader
            type="sell-asset"
            state="default"
            primaryCrypto={selectedItem?.crypto}
            displayText={selectedItem?.displayName}
            onSelectorClick={() => setIsOpen(!isOpen)}
            onClose={() => console.log('Close')}
          />

          {/* Dropdown */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              top: '72px',
              left: '20px',
              right: '20px',
              zIndex: 1000,
            }}>
              <PairCryptoSelector
                items={allItems}
                selectedIds={[selectedId]}
                filterTabs={filterTabs}
                multiSelect={false}
                initialListType="crypto"
                onChange={(ids) => {
                  if (ids.length > 0) {
                    setSelectedId(ids[0]);
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          )}
        </div>

        <p style={{ color: colorsDark.text.secondary, marginTop: '16px', fontSize: '12px' }}>
          Selected: <span style={{ color: colorsDark.text.primary }}>{selectedItem?.displayName}</span>
        </p>
      </div>
    );
  },
};

// Interactive with toggle between Buy and Sell
export const InteractiveBuySell: Story = {
  args: {
    type: 'buy-pair',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string>('1');
    const [isBuy, setIsBuy] = useState(true);

    // Find selected item
    const selectedItem = allItems.find(item => item.id === selectedId);

    return (
      <div style={{ width: '375px', background: colorsDark.forms.background, padding: '20px' }}>
        <h3 style={{ color: colorsDark.text.secondary, marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Interactive Buy/Sell Toggle
        </h3>

        <div style={{ position: 'relative' }}>
          <TransactionHeader
            type={isBuy ? 'buy-pair' : 'sell-pair'}
            state="default"
            primaryCrypto={selectedItem?.crypto}
            secondaryCrypto={selectedItem?.type === 'Pair' ? selectedItem.secondaryCrypto : undefined}
            displayText={selectedItem?.displayName}
            onSelectorClick={() => setIsOpen(!isOpen)}
            onActionClick={() => setIsBuy(!isBuy)}
            onClose={() => console.log('Close')}
          />

          {/* Dropdown */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              top: '72px',
              left: '20px',
              right: '20px',
              zIndex: 1000,
            }}>
              <PairCryptoSelector
                items={allItems}
                selectedIds={[selectedId]}
                filterTabs={filterTabs}
                multiSelect={false}
                initialListType="pairs"
                onChange={(ids) => {
                  if (ids.length > 0) {
                    setSelectedId(ids[0]);
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: '16px', color: colorsDark.text.secondary, fontSize: '12px' }}>
          <p>Mode: <span style={{ color: isBuy ? colorsDark.highlights.buy : colorsDark.highlights.sell }}>{isBuy ? 'Buy' : 'Sell'}</span></p>
          <p>Selected: <span style={{ color: colorsDark.text.primary }}>{selectedItem?.displayName}</span></p>
          <p style={{ marginTop: '8px', fontSize: '11px', opacity: 0.7 }}>
            💡 Click Buy/Sell button to toggle mode
          </p>
        </div>
      </div>
    );
  },
};

// Full-width demo
export const FullWidthLayout: Story = {
  args: {
    type: 'buy-pair',
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string>('1');

    // Find selected item
    const selectedItem = allItems.find(item => item.id === selectedId);

    return (
      <div style={{ width: '100%', maxWidth: '800px', background: colorsDark.forms.background, padding: '20px' }}>
        <h3 style={{ color: colorsDark.text.secondary, marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
          Full Width - Stretched Selector Layout
        </h3>

        <div style={{ position: 'relative' }}>
          <TransactionHeader
            type="buy-pair"
            state="default"
            primaryCrypto={selectedItem?.crypto}
            secondaryCrypto={selectedItem?.type === 'Pair' ? selectedItem.secondaryCrypto : undefined}
            displayText={selectedItem?.displayName}
            onSelectorClick={() => setIsOpen(!isOpen)}
            onClose={() => console.log('Close')}
          />

          {/* Dropdown */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              top: '72px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
            }}>
              <PairCryptoSelector
                items={allItems}
                selectedIds={[selectedId]}
                filterTabs={filterTabs}
                multiSelect={false}
                initialListType="pairs"
                onChange={(ids) => {
                  if (ids.length > 0) {
                    setSelectedId(ids[0]);
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          )}
        </div>

        <p style={{ color: colorsDark.text.secondary, marginTop: '16px', fontSize: '12px' }}>
          Notice how the selector stretches to fill space between Buy and X buttons at any screen width.
        </p>
      </div>
    );
  },
};
