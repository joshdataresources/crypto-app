import React from 'react';
import { CryptoBadge } from '../badges/CryptoBadge';
import type { CryptoBadgeName } from '../badges/CryptoBadge';
import { Icon } from '../icons/Icon';
import './CryptoSelector.css';

export type CryptoSelectorVariant = 'buy' | 'sell' | 'regular';

export interface CryptoSelectorProps {
  /** Optional label text (e.g., "Buy:", "Sell:", "Title:") */
  label?: string;
  /** Single crypto code or array of two for pairs (e.g., "BTC" or ["BTC", "USDT"]) */
  cryptoBadges: CryptoBadgeName | [CryptoBadgeName, CryptoBadgeName];
  /** Display text for the crypto/pair (e.g., "BTC/USDT") */
  displayText: string;
  /** Visual variant - determines label color */
  variant?: CryptoSelectorVariant;
  /** Whether the selector is in active/open state */
  isOpen?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * CryptoSelector Component
 *
 * Selector button for choosing cryptocurrencies or trading pairs from apex-mobile-v6-dark design system
 *
 * Features:
 * - Optional colored label (Buy/Sell/Regular variant)
 * - Single crypto badge or overlapping pair badges
 * - Display text for the selected crypto/pair
 * - Dropdown arrows icon
 * - Active state with blue border (2px)
 * - Default state with subtle border (1px)
 *
 * States:
 * - default: 1px border (#373E4D), secondary label color
 * - active/open: 2px blue border (#297FFF)
 *
 * Variants:
 * - buy: Green label (#00C938) for buy orders
 * - sell: Pink label (#F62967) for sell orders
 * - regular: Secondary label (#9BAACE) for general selection
 */
export const CryptoSelector: React.FC<CryptoSelectorProps> = ({
  label,
  cryptoBadges,
  displayText,
  variant = 'regular',
  isOpen = false,
  onClick,
  className = '',
}) => {
  const isPair = Array.isArray(cryptoBadges);
  const selectorClass = `crypto-selector ${isOpen ? 'crypto-selector--active' : ''} ${className}`;
  const labelClass = `crypto-selector__label crypto-selector__label--${variant}`;

  return (
    <button
      type="button"
      className={selectorClass}
      onClick={onClick}
    >
      <div className="crypto-selector__content">
        {label && (
          <span className={labelClass}>{label}</span>
        )}

        <div className="crypto-selector__badges">
          {isPair ? (
            <>
              <div className="crypto-selector__badge crypto-selector__badge--primary">
                <CryptoBadge name={cryptoBadges[0]} size={24} />
              </div>
              <div className="crypto-selector__badge crypto-selector__badge--secondary">
                <CryptoBadge name={cryptoBadges[1]} size={24} />
              </div>
            </>
          ) : (
            <div className="crypto-selector__badge">
              <CryptoBadge name={cryptoBadges} size={24} />
            </div>
          )}
        </div>

        <span className="crypto-selector__text">{displayText}</span>
      </div>

      <Icon name="dropdown" className="crypto-selector__icon" />
    </button>
  );
};
