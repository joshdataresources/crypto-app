import React, { useState } from 'react';
import { Icon, type IconName } from '../icons/Icon';
import './Input.css';

export type InputType = 'basic' | 'icon' | 'dropdown' | 'asset';

export interface InputProps {
  /** Input type variant */
  type?: InputType;
  /** Input value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Label text above input */
  label?: string;
  /** Error message below input */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Icon name (for icon type) */
  icon?: IconName;
  /** Asset badge text (for asset type) */
  assetBadge?: string;
  /** Secondary text (for asset type) */
  secondaryText?: string;
  /** Show MAX button (for asset type) */
  showMax?: boolean;
  /** MAX button click handler */
  onMaxClick?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Input HTML type */
  inputType?: 'text' | 'password' | 'email' | 'number';
}

/**
 * Input Component
 *
 * Input field component from apex-mobile-v6-dark design system
 * Supports multiple types and states
 *
 * Types:
 * - basic: Standard text input
 * - icon: Input with icon (e.g., eye for password)
 * - dropdown: Input with dropdown arrow
 * - asset: Crypto asset input with badge and MAX button
 *
 * States:
 * - default: Normal state
 * - active: Focused state
 * - disabled: Non-interactive state
 * - error: Error/validation state
 */
export const Input: React.FC<InputProps> = ({
  type = 'basic',
  value = '',
  placeholder = 'Input Here',
  label,
  errorMessage,
  disabled = false,
  error = false,
  onChange,
  icon = 'eye',
  assetBadge = 'BTC',
  secondaryText = 'Secondary Title',
  showMax = true,
  onMaxClick,
  className = '',
  inputType = 'text',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const baseClass = 'input';
  const typeClass = `input--${type}`;
  const stateClass = error
    ? 'input--error'
    : disabled
    ? 'input--disabled'
    : isFocused
    ? 'input--active'
    : '';

  const classes = [baseClass, typeClass, stateClass, className]
    .filter(Boolean)
    .join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.value);
    }
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const actualInputType =
    type === 'icon' && inputType === 'password' && !showPassword
      ? 'password'
      : inputType === 'password'
      ? 'text'
      : inputType;

  return (
    <div className="input-wrapper">
      {/* Label */}
      {label && <label className="input__label">{label}</label>}

      {/* Input Container */}
      <div className={classes}>
        {/* Asset Badge (for asset type) */}
        {type === 'asset' && (
          <div className="input__asset-badge">{assetBadge}</div>
        )}

        {/* Input Field */}
        <input
          type={actualInputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="input__field"
        />

        {/* Icon (for icon type) */}
        {type === 'icon' && (
          <button
            type="button"
            className="input__icon-button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            tabIndex={-1}
          >
            <Icon name={icon} className="input__icon" color="#9BAACE" />
          </button>
        )}

        {/* Dropdown Arrow (for dropdown type) */}
        {type === 'dropdown' && (
          <div className="input__dropdown-icon">
            <Icon name="dropdown" className="input__icon" color="#9BAACE" />
          </div>
        )}

        {/* Asset Controls (for asset type) */}
        {type === 'asset' && (
          <div className="input__asset-controls">
            {secondaryText && (
              <span className="input__secondary-text">{secondaryText}</span>
            )}
            {showMax && (
              <button
                type="button"
                className="input__max-button"
                onClick={onMaxClick}
                disabled={disabled}
              >
                MAX
              </button>
            )}
          </div>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && <div className="input__error">{errorMessage}</div>}
    </div>
  );
};
