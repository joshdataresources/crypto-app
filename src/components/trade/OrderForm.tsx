import React, { useState } from 'react';
import { TransactionHeader, type TransactionType } from '../layout/TransactionHeader';
import { TransactionFooter, type TransactionFooterVariant } from '../layout/TransactionFooter';
import { OrderTypeTabs, type OrderType } from '../tabs/OrderTypeTabs';
import { PillTabs, type PillTab } from '../tabs/PillTabs';
import { Input } from '../inputs/Input';
import { CurrencyPairInput } from '../inputs/CurrencyPairInput';
import { TransactionDetails, type TransactionDetailRow } from './TransactionDetails';
import { CryptoSelectorDropdown } from '../selectors/CryptoSelectorDropdown';
import type { DropdownSelectorItem } from '../selectors/CryptoSelectorDropdown';
import type { CryptoBadgeName } from '../badges/CryptoBadge';
import './OrderForm.css';

export type TabStyle = 'pill' | 'basic';

export interface OrderFormProps {
  /** Whether this is a buy or sell order */
  orderSide?: 'buy' | 'sell';
  /** Primary crypto asset */
  primaryCrypto?: CryptoBadgeName;
  /** Secondary crypto asset */
  secondaryCrypto?: CryptoBadgeName;
  /** Display text for crypto selector */
  displayText?: string;
  /** Initial order type */
  initialOrderType?: OrderType;
  /** Tab style - pill tabs (default) or basic tabs */
  tabStyle?: TabStyle;
  /** Selector items for dropdown */
  selectorItems?: DropdownSelectorItem[];
  /** Filter tabs for selector */
  filterTabs?: PillTab[];
  /** Enable built-in selector dropdown */
  enableSelectorDropdown?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Selector click handler (deprecated if enableSelectorDropdown is true) */
  onSelectorClick?: () => void;
  /** Submit handler */
  onSubmit?: (data: OrderFormData) => void;
  /** Additional CSS class */
  className?: string;
}

export interface OrderFormData {
  orderType: OrderType;
  orderSide: 'buy' | 'sell';
  limitPrice?: string;
  stopPrice?: string;
  topAmount?: string;
  bottomAmount?: string;
  amount?: string;
  trailingAmount?: string;
  pegPrice?: string;
  displayQuantity?: string;
  tif?: string;
}

/**
 * OrderForm Component
 *
 * Complete trading order form with multiple order types from apex-mobile-v6-dark design system
 *
 * Features:
 * - TransactionHeader with crypto selector
 * - Order type tabs (Market, Limit, Stop) - Pill or Basic style
 * - Conditional price fields (Limit Price, Stop Price)
 * - Dual amount inputs (BTC/USD converter)
 * - TIF (Time In Force) dropdown
 * - Transaction details summary
 * - Footer button (Buy/Sell)
 * - Rounded card container with shadow
 *
 * Tab Styles:
 * - **Pill Tabs** (default): Rounded pill-style tabs with background
 * - **Basic Tabs**: Simple tabs with underline indicator
 *
 * Order Types:
 * - **Market**: Execute immediately at market price (no price field)
 * - **Limit**: Execute at specified limit price or better
 * - **Stop**: Execute when stop price is reached
 *
 * Usage:
 * - Primary UI for placing trades
 * - Supports buy and sell orders
 * - All order types in one component
 */
export const OrderForm: React.FC<OrderFormProps> = ({
  orderSide = 'buy',
  primaryCrypto = 'BTC',
  secondaryCrypto = 'USDT',
  displayText = 'BTCUSD',
  initialOrderType = 'market',
  tabStyle = 'pill',
  selectorItems,
  filterTabs,
  enableSelectorDropdown = false,
  onClose,
  onSelectorClick,
  onSubmit,
  className = '',
}) => {
  const [currentOrderSide, setCurrentOrderSide] = useState<'buy' | 'sell'>(orderSide);
  const [orderType, setOrderType] = useState<OrderType>(initialOrderType);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [currentPrimaryCrypto, setCurrentPrimaryCrypto] = useState<CryptoBadgeName>(primaryCrypto);
  const [currentSecondaryCrypto, setCurrentSecondaryCrypto] = useState<CryptoBadgeName>(secondaryCrypto);
  const [currentDisplayText, setCurrentDisplayText] = useState(displayText);
  const [limitPrice, setLimitPrice] = useState('18,000.00');
  const [stopPrice, setStopPrice] = useState('18,000.00');
  const [topAmount, setTopAmount] = useState('0.5');
  const [bottomAmount, setBottomAmount] = useState('9,420.25');
  const [amount, setAmount] = useState('0.5');
  const [trailingAmount, setTrailingAmount] = useState('0.5');
  const [pegPrice, setPegPrice] = useState('Last');
  const [displayQuantity, setDisplayQuantity] = useState('10,0000');
  const [tif, setTif] = useState('GTC: Good Til Cancelled');

  const isBuy = currentOrderSide === 'buy';

  // Toggle between buy and sell
  const handleToggleOrderSide = () => {
    setCurrentOrderSide(prev => prev === 'buy' ? 'sell' : 'buy');
  };

  // Handle selector click
  const handleSelectorClick = () => {
    if (enableSelectorDropdown) {
      setIsSelectorOpen(!isSelectorOpen);
    } else if (onSelectorClick) {
      onSelectorClick();
    }
  };

  // Handle selection change
  const handleSelectionChange = (selectedIds: string[]) => {
    if (selectedIds.length > 0 && selectorItems) {
      const selectedItem = selectorItems.find(item => item.id === selectedIds[0]);
      if (selectedItem) {
        setCurrentPrimaryCrypto(selectedItem.crypto as CryptoBadgeName);
        if (selectedItem.type === 'Pair' && selectedItem.secondaryCrypto) {
          setCurrentSecondaryCrypto(selectedItem.secondaryCrypto as CryptoBadgeName);
        }
        setCurrentDisplayText(selectedItem.displayName);
        setIsSelectorOpen(false);
      }
    }
  };

  // Map order side to transaction type
  const transactionType: TransactionType = `${currentOrderSide}-pair`;

  // Map order side to footer variant
  const footerVariant: TransactionFooterVariant = currentOrderSide;

  // Pill tabs configuration
  const pillTabs: PillTab[] = [
    { label: 'Market', value: 'market' },
    { label: 'Limit', value: 'limit' },
    { label: 'Stop', value: 'stop' },
    { label: 'Stop-Limit', value: 'stop-limit' },
    { label: 'Trailing Stop Market', value: 'trailing-stop-market' },
    { label: 'Trailing Stop Limit', value: 'trailing-stop-limit' },
    { label: 'Reserve Order', value: 'reserve-order' },
  ];

  // Transaction details rows
  const detailRows: TransactionDetailRow[] = [
    { label: 'Market Price', value: '18,880.50', asset: 'USD' },
    { label: 'Fees', value: '0.00000000', asset: 'BTC' },
    { label: 'Order Total', value: '9,020.25', asset: 'USD' },
    { label: 'Net', value: '0.50000000', asset: 'BTC' },
  ];

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({
        orderType,
        orderSide: currentOrderSide,
        limitPrice: (orderType === 'limit' || orderType === 'stop-limit' || orderType === 'reserve-order') ? limitPrice : undefined,
        stopPrice: (orderType === 'stop' || orderType === 'stop-limit') ? stopPrice : undefined,
        topAmount: (orderType === 'market' || orderType === 'limit' || orderType === 'stop' || orderType === 'stop-limit') ? topAmount : undefined,
        bottomAmount: (orderType === 'market' || orderType === 'limit' || orderType === 'stop' || orderType === 'stop-limit') ? bottomAmount : undefined,
        amount: (orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit' || orderType === 'reserve-order') ? amount : undefined,
        trailingAmount: (orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit') ? trailingAmount : undefined,
        pegPrice: (orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit') ? pegPrice : undefined,
        displayQuantity: orderType === 'reserve-order' ? displayQuantity : undefined,
        tif: (orderType === 'limit' || orderType === 'stop' || orderType === 'stop-limit' || orderType === 'trailing-stop-limit') ? tif : undefined,
      });
    }
  };

  return (
    <div className={`order-form ${className}`}>
      {/* Header with relative positioning for dropdown */}
      <div style={{ position: 'relative' }}>
        <TransactionHeader
          type={transactionType}
          state="default"
          primaryCrypto={currentPrimaryCrypto}
          secondaryCrypto={currentSecondaryCrypto}
          displayText={currentDisplayText}
          onClose={onClose}
          onSelectorClick={handleSelectorClick}
          onActionClick={handleToggleOrderSide}
        />

        {/* Dropdown Selector */}
        {enableSelectorDropdown && isSelectorOpen && selectorItems && (
          <div style={{
            position: 'absolute',
            top: '72px',
            left: '20px',
            right: '20px',
            zIndex: 1000,
          }}>
            <CryptoSelectorDropdown
              items={selectorItems}
              filterTabs={filterTabs}
              multiSelect={false}
              onChange={handleSelectionChange}
            />
          </div>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="order-form__content">
        {/* Order Type Tabs */}
        {tabStyle === 'pill' ? (
          <div className="order-form__pill-tabs">
            <PillTabs
              tabs={pillTabs}
              activeTab={orderType}
              onChange={(value) => setOrderType(value as OrderType)}
            />
          </div>
        ) : (
          <OrderTypeTabs
            activeType={orderType}
            onChange={setOrderType}
            isBuy={isBuy}
          />
        )}

        {/* Form Fields */}
        <div className="order-form__fields">
          {/* Limit Price (for Limit, Stop-Limit, and Reserve Order) */}
          {(orderType === 'limit' || orderType === 'stop-limit') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Limit Price:</div>
              <Input
                type="asset"
                value={limitPrice}
                onChange={setLimitPrice}
                assetBadge="USD"
                placeholder="0.00"
                secondaryText=""
              />
            </div>
          )}

          {/* Stop Price (for Stop and Stop-Limit orders) */}
          {(orderType === 'stop' || orderType === 'stop-limit') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Stop Price:</div>
              <Input
                type="asset"
                value={stopPrice}
                onChange={setStopPrice}
                assetBadge="USD"
                placeholder="0.00"
                secondaryText=""
              />
            </div>
          )}

          {/* Amount - Currency Pair Input (for Market, Limit, Stop, Stop-Limit) */}
          {(orderType === 'market' || orderType === 'limit' || orderType === 'stop' || orderType === 'stop-limit') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Amount:</div>
              <CurrencyPairInput
                topCurrency="BTC"
                topValue={topAmount}
                onTopChange={setTopAmount}
                bottomCurrency="USD"
                bottomValue={bottomAmount}
                onBottomChange={setBottomAmount}
                showTopMax={true}
                showBottomMax={true}
                onTopMax={() => console.log('Top MAX clicked')}
                onBottomMax={() => console.log('Bottom MAX clicked')}
              />
            </div>
          )}

          {/* Amount - Single Input (for Trailing Stop Market, Trailing Stop Limit, Reserve Order) */}
          {(orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit' || orderType === 'reserve-order') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Amount:</div>
              <Input
                type="asset"
                value={amount}
                onChange={setAmount}
                assetBadge="BTC"
                placeholder="0.0"
                secondaryText=""
              />
            </div>
          )}

          {/* Trailing Amount (for Trailing Stop Market and Trailing Stop Limit) */}
          {(orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Trailing Amount:</div>
              <Input
                type="asset"
                value={trailingAmount}
                onChange={setTrailingAmount}
                assetBadge="USD"
                placeholder="0.0"
                secondaryText=""
              />
            </div>
          )}

          {/* Peg Price (for Trailing Stop Market and Trailing Stop Limit) */}
          {(orderType === 'trailing-stop-market' || orderType === 'trailing-stop-limit') && (
            <div className="order-form__field-group">
              <div className="order-form__label">Peg Price:</div>
              <Input
                type="dropdown"
                value={pegPrice}
                onChange={setPegPrice}
                placeholder="Select Peg Price"
              />
            </div>
          )}

          {/* Limit Price (for Reserve Order) */}
          {orderType === 'reserve-order' && (
            <div className="order-form__field-group">
              <div className="order-form__label">Limit Price:</div>
              <Input
                type="asset"
                value={limitPrice}
                onChange={setLimitPrice}
                assetBadge="USD"
                placeholder="0.00"
                secondaryText=""
              />
            </div>
          )}

          {/* Display Quantity (for Reserve Order) */}
          {orderType === 'reserve-order' && (
            <div className="order-form__field-group">
              <div className="order-form__label">Display Quantity:</div>
              <Input
                type="asset"
                value={displayQuantity}
                onChange={setDisplayQuantity}
                assetBadge="BTC"
                placeholder="0.0"
                secondaryText=""
              />
            </div>
          )}

          {/* TIF (Time In Force) - for Limit, Stop-Limit, Trailing Stop Limit */}
          {(orderType === 'limit' || orderType === 'stop-limit' || orderType === 'trailing-stop-limit' || orderType === 'stop') && (
            <div className="order-form__field-group">
              <div className="order-form__label">TIF:</div>
              <Input
                type="dropdown"
                value={tif}
                onChange={setTif}
                placeholder="Select TIF"
              />
            </div>
          )}
        </div>

        {/* Transaction Details */}
        <TransactionDetails rows={detailRows} />
      </div>

      {/* Footer */}
      <TransactionFooter
        variant={footerVariant}
        text={isBuy ? 'Buy' : 'Sell'}
        onClick={handleSubmit}
      />
    </div>
  );
};
