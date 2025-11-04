import React from 'react';
import './DualAmountInput.css';

export interface DualAmountInputProps {
  /** Top input label (e.g., "BTC") */
  topLabel: string;
  /** Top input value */
  topValue: string;
  /** Top input change handler */
  onTopChange: (value: string) => void;
  /** Bottom input label (e.g., "USD") */
  bottomLabel: string;
  /** Bottom input value */
  bottomValue: string;
  /** Bottom input change handler */
  onBottomChange: (value: string) => void;
  /** Show MAX button on top input */
  showTopMax?: boolean;
  /** Show MAX button on bottom input */
  showBottomMax?: boolean;
  /** Top MAX button click handler */
  onTopMaxClick?: () => void;
  /** Bottom MAX button click handler */
  onBottomMaxClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * DualAmountInput Component
 *
 * Dual stacked input fields for amount conversion (e.g., BTC/USD) from apex-mobile-v6-dark design system
 *
 * Features:
 * - Two stacked input fields with rounded corners (top and bottom)
 * - Asset labels on the left (BTC, USD, etc.)
 * - MAX buttons on the right (optional)
 * - Large 20px font for input values
 * - 44px height per input field
 * - Dark form background with darker borders
 *
 * Usage:
 * - Used in trading order forms for amount entry
 * - Top input typically for crypto amount
 * - Bottom input typically for fiat amount
 * - Can include MAX buttons for quick "all in" amounts
 */
export const DualAmountInput: React.FC<DualAmountInputProps> = ({
  topLabel,
  topValue,
  onTopChange,
  bottomLabel,
  bottomValue,
  onBottomChange,
  showTopMax = true,
  showBottomMax = true,
  onTopMaxClick,
  onBottomMaxClick,
  className = '',
}) => {
  return (
    <div className={`dual-amount-input ${className}`}>
      {/* Top Input */}
      <div className="dual-amount-input__field dual-amount-input__field--top">
        <div className="dual-amount-input__label">{topLabel}</div>
        <input
          type="text"
          className="dual-amount-input__input"
          value={topValue}
          onChange={(e) => onTopChange(e.target.value)}
          placeholder="0.0"
        />
        {showTopMax && (
          <button
            type="button"
            className="dual-amount-input__max"
            onClick={onTopMaxClick}
          >
            MAX
          </button>
        )}
      </div>

      {/* Bottom Input */}
      <div className="dual-amount-input__field dual-amount-input__field--bottom">
        <div className="dual-amount-input__label">{bottomLabel}</div>
        <input
          type="text"
          className="dual-amount-input__input"
          value={bottomValue}
          onChange={(e) => onBottomChange(e.target.value)}
          placeholder="0.0"
        />
        {showBottomMax && (
          <button
            type="button"
            className="dual-amount-input__max"
            onClick={onBottomMaxClick}
          >
            MAX
          </button>
        )}
      </div>
    </div>
  );
};
