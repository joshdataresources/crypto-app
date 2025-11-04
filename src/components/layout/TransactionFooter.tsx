import React from 'react';
import './TransactionFooter.css';

/** Footer button variants matching Figma component */
export type TransactionFooterVariant = 'buy' | 'sell' | 'brand' | 'default' | 'error';

export interface TransactionFooterProps {
  /** Button variant */
  variant: TransactionFooterVariant;
  /** Button text */
  text?: string;
  /** Error message (only for error variant) */
  errorMessage?: string;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * TransactionFooter Component
 *
 * Footer button for transaction screens from apex-mobile-v6-dark design system
 *
 * Features:
 * - Full-width button with top border
 * - Multiple variants: Buy (green), Sell (pink), Brand (blue), Default (disabled gray)
 * - Error state with error message
 * - 44px button height
 * - 16px padding around button
 *
 * Variants:
 * - buy: Green button with buy action (#00C938)
 * - sell: Pink button with sell action (#F62967)
 * - brand: Blue brand button (#297FFF)
 * - default: Disabled gray button (#2A303C)
 * - error: Red error message button (#ED3737)
 */
export const TransactionFooter: React.FC<TransactionFooterProps> = ({
  variant,
  text = 'Buy',
  errorMessage = 'You do not have enough funds for this transaction',
  onClick,
  disabled = false,
  className = '',
}) => {
  const isError = variant === 'error';
  const isDisabled = disabled || variant === 'default';

  const getButtonText = () => {
    if (isError) return errorMessage;
    return text;
  };

  return (
    <div className={`transaction-footer ${className}`}>
      <button
        type="button"
        className={`transaction-footer__button transaction-footer__button--${variant}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {getButtonText()}
      </button>
    </div>
  );
};
