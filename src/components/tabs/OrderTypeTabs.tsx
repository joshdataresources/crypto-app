import React from 'react';
import './OrderTypeTabs.css';

/** Order type options */
export type OrderType = 'market' | 'limit' | 'stop' | 'stop-limit' | 'trailing-stop-market' | 'trailing-stop-limit' | 'reserve-order';

export interface OrderTypeTabsProps {
  /** Currently active order type */
  activeType: OrderType;
  /** Change handler when order type changes */
  onChange: (type: OrderType) => void;
  /** Whether this is a buy order (affects active indicator color) */
  isBuy?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * OrderTypeTabs Component
 *
 * Tabs for selecting order type (Market, Limit, Stop) from apex-mobile-v6-dark design system
 *
 * Features:
 * - Three order types: Market, Limit, Stop
 * - Active indicator line below selected tab
 * - Color-coded indicator: Green for buy, Pink for sell
 * - 44px height with bottom border separator
 * - Bold text on active tab, secondary text on inactive tabs
 *
 * Usage:
 * - Used in trading order forms
 * - Switches between different order type configurations
 */
export const OrderTypeTabs: React.FC<OrderTypeTabsProps> = ({
  activeType,
  onChange,
  isBuy = true,
  className = '',
}) => {
  return (
    <div className={`order-type-tabs ${className}`}>
      <div className="order-type-tabs__buttons">
        <button
          type="button"
          className={`order-type-tabs__tab ${
            activeType === 'market' ? 'order-type-tabs__tab--active' : ''
          } ${isBuy ? 'order-type-tabs__tab--buy' : 'order-type-tabs__tab--sell'}`}
          onClick={() => onChange('market')}
        >
          Market
        </button>
        <button
          type="button"
          className={`order-type-tabs__tab ${
            activeType === 'limit' ? 'order-type-tabs__tab--active' : ''
          } ${isBuy ? 'order-type-tabs__tab--buy' : 'order-type-tabs__tab--sell'}`}
          onClick={() => onChange('limit')}
        >
          Limit
        </button>
        <button
          type="button"
          className={`order-type-tabs__tab ${
            activeType === 'stop' ? 'order-type-tabs__tab--active' : ''
          } ${isBuy ? 'order-type-tabs__tab--buy' : 'order-type-tabs__tab--sell'}`}
          onClick={() => onChange('stop')}
        >
          Stop
        </button>
      </div>
    </div>
  );
};
