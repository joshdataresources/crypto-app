import React, { useState } from 'react';
import './CurrencyPairInput.css';

export interface CurrencyPairInputProps {
  /** Top currency code (e.g., 'BTC') */
  topCurrency: string;
  /** Bottom currency code (e.g., 'USD') */
  bottomCurrency: string;
  /** Top field value */
  topValue: string;
  /** Bottom field value */
  bottomValue: string;
  /** Top field change handler */
  onTopChange?: (value: string) => void;
  /** Bottom field change handler */
  onBottomChange?: (value: string) => void;
  /** Top field MAX button click handler */
  onTopMax?: () => void;
  /** Bottom field MAX button click handler */
  onBottomMax?: () => void;
  /** Show MAX button on top field (depends on balance) */
  showTopMax?: boolean;
  /** Show MAX button on bottom field (depends on balance) */
  showBottomMax?: boolean;
  /** Top field error state */
  topError?: boolean;
  /** Bottom field error state */
  bottomError?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label text above the component */
  label?: string;
  /** Error message below the component */
  errorMessage?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * Currency Pair Input Component
 *
 * Specialized input for trading currency pairs from apex-mobile-v6-dark design system
 * Features two connected input fields with currency badges and conditional MAX buttons
 *
 * Usage:
 * - Top field: Primary currency (e.g., BTC)
 * - Bottom field: Quote currency (e.g., USD)
 * - MAX buttons only appear when balance is available
 * - Fields show active state when focused
 * - Error states for validation feedback
 */
export const CurrencyPairInput: React.FC<CurrencyPairInputProps> = ({
  topCurrency,
  bottomCurrency,
  topValue,
  bottomValue,
  onTopChange,
  onBottomChange,
  onTopMax,
  onBottomMax,
  showTopMax = true,
  showBottomMax = true,
  topError = false,
  bottomError = false,
  disabled = false,
  label,
  errorMessage,
  className = '',
}) => {
  const [topFocused, setTopFocused] = useState(false);
  const [bottomFocused, setBottomFocused] = useState(false);

  const handleTopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onTopChange && !disabled) {
      onTopChange(e.target.value);
    }
  };

  const handleBottomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onBottomChange && !disabled) {
      onBottomChange(e.target.value);
    }
  };

  const topFieldClass = `currency-pair-input__field currency-pair-input__field--top ${
    topError ? 'currency-pair-input__field--error' : topFocused ? 'currency-pair-input__field--active' : ''
  }`;

  const bottomFieldClass = `currency-pair-input__field currency-pair-input__field--bottom ${
    bottomError ? 'currency-pair-input__field--error' : bottomFocused ? 'currency-pair-input__field--active' : ''
  }`;

  return (
    <div className="currency-pair-input-wrapper">
      {/* Label */}
      {label && <label className="currency-pair-input__label">{label}</label>}

      {/* Currency Pair Input Container */}
      <div className={`currency-pair-input ${className}`}>
        {/* Top Field */}
        <div className={topFieldClass}>
          <div className="currency-pair-input__badge">{topCurrency}</div>
          <input
            type="text"
            value={topValue}
            onChange={handleTopChange}
            onFocus={() => !disabled && setTopFocused(true)}
            onBlur={() => setTopFocused(false)}
            disabled={disabled}
            className="currency-pair-input__input"
            placeholder="0.0"
          />
          {showTopMax && (
            <div className="currency-pair-input__controls">
              <button
                type="button"
                className="currency-pair-input__max-button"
                onClick={onTopMax}
                disabled={disabled}
              >
                MAX
              </button>
            </div>
          )}
        </div>

        {/* Bottom Field */}
        <div className={bottomFieldClass}>
          <div className="currency-pair-input__badge">{bottomCurrency}</div>
          <input
            type="text"
            value={bottomValue}
            onChange={handleBottomChange}
            onFocus={() => !disabled && setBottomFocused(true)}
            onBlur={() => setBottomFocused(false)}
            disabled={disabled}
            className="currency-pair-input__input"
            placeholder="0.0"
          />
          {showBottomMax && (
            <div className="currency-pair-input__controls">
              <button
                type="button"
                className="currency-pair-input__max-button"
                onClick={onBottomMax}
                disabled={disabled}
              >
                MAX
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && <div className="currency-pair-input__error">{errorMessage}</div>}
    </div>
  );
};
