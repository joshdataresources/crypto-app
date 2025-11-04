import React from 'react';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/Icon';
import { BadgePair } from '../badges/BadgePair';
import type { CryptoBadgeName } from '../badges/CryptoBadge';
import './TransactionHeader.css';

/** Transaction types matching Figma component */
export type TransactionType =
  | 'buy-pair'
  | 'sell-pair'
  | 'buy-asset'
  | 'sell-asset'
  | 'send'
  | 'receive'
  | 'convert';

/** State matching Figma component */
export type TransactionHeaderState = 'default' | 'empty';

export interface TransactionHeaderProps {
  /** Type of transaction */
  type: TransactionType;
  /** Current state */
  state?: TransactionHeaderState;
  /** Primary crypto asset */
  primaryCrypto?: CryptoBadgeName;
  /** Secondary crypto asset (for pairs) */
  secondaryCrypto?: CryptoBadgeName;
  /** Display text (e.g., "BTCUSD" or "BTC Bitcoin") */
  displayText?: string;
  /** Close button handler */
  onClose?: () => void;
  /** Selector button click handler */
  onSelectorClick?: () => void;
  /** Action button click handler (e.g., toggle Buy/Sell) */
  onActionClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * TransactionHeader Component
 *
 * Header for transaction screens with dragger, action button, selector, and close button
 * From apex-mobile-v6-dark design system
 *
 * Features:
 * - Dragger handle at top for sheet/modal interaction
 * - Action button (Buy/Sell/Send/Receive/Convert) with icon and color
 * - Selector button showing crypto badges and display text
 * - Close button
 * - Empty state (shows "Select Pair" or "Select Asset" placeholder)
 *
 * Variants (type):
 * - buy-pair: Green buy button with pair selector
 * - sell-pair: Pink sell button with pair selector
 * - buy-asset: Green buy button with single asset selector
 * - sell-asset: Pink sell button with single asset selector
 * - send: Gray send button with single asset selector
 * - receive: Gray receive button with single asset selector
 * - convert: Gray convert button with pair selector
 */
export const TransactionHeader: React.FC<TransactionHeaderProps> = ({
  type,
  state = 'default',
  primaryCrypto,
  secondaryCrypto,
  displayText,
  onClose,
  onSelectorClick,
  onActionClick,
  className = '',
}) => {
  // Determine action config based on type
  const getActionConfig = () => {
    switch (type) {
      case 'buy-pair':
      case 'buy-asset':
        return { icon: 'buy' as IconName, color: 'buy', label: 'Buy:' };
      case 'sell-pair':
      case 'sell-asset':
        return { icon: 'sell' as IconName, color: 'sell', label: 'Sell:' };
      case 'send':
        return { icon: 'send' as IconName, color: 'secondary', label: 'Send:' };
      case 'receive':
        return { icon: 'receive' as IconName, color: 'secondary', label: 'Receive:' };
      case 'convert':
        return { icon: 'convert' as IconName, color: 'secondary', label: '' };
      default:
        return { icon: 'buy' as IconName, color: 'buy', label: '' };
    }
  };

  const actionConfig = getActionConfig();
  const isPair = type === 'buy-pair' || type === 'sell-pair' || type === 'convert';
  const isEmpty = state === 'empty';

  // Determine placeholder text
  const getPlaceholderText = () => {
    if (isPair) return 'Select Pair';
    return 'Select Asset';
  };

  return (
    <div className={`transaction-header ${className}`}>
      {/* Dragger */}
      <div className="transaction-header__dragger">
        <div className="transaction-header__dragger-bar" />
      </div>

      {/* Content */}
      <div className="transaction-header__content">
        {/* Action Button */}
        <button
          type="button"
          className={`transaction-header__action transaction-header__action--${actionConfig.color}`}
          onClick={onActionClick}
          aria-label={actionConfig.label.replace(':', '')}
        >
          <Icon name={actionConfig.icon} color="#FFFFFF" />
        </button>

        {/* Selector Button */}
        <button
          type="button"
          className="transaction-header__selector"
          onClick={onSelectorClick}
        >
          <div className="transaction-header__selector-content">
            {actionConfig.label && (
              <span className={`transaction-header__label transaction-header__label--${actionConfig.color}`}>
                {actionConfig.label}
              </span>
            )}

            {!isEmpty && primaryCrypto && (
              <>
                <BadgePair
                  primary={primaryCrypto}
                  secondary={isPair ? secondaryCrypto : undefined}
                  size={24}
                />
                {displayText && (
                  <span className="transaction-header__display-text">
                    {displayText}
                  </span>
                )}
              </>
            )}

            {isEmpty && (
              <span className="transaction-header__placeholder">
                {getPlaceholderText()}
              </span>
            )}
          </div>

          {/* Dropdown Arrow */}
          <Icon name="dropdown" color="#9BAACE" className="transaction-header__dropdown-icon" />
        </button>

        {/* Close Button */}
        <button
          type="button"
          className="transaction-header__close"
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="close" color="#9BAACE" />
        </button>
      </div>
    </div>
  );
};
