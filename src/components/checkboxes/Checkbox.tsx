import React from 'react';
import './Checkbox.css';

export type CheckboxState = 'default' | 'selected' | 'fixed';

export interface CheckboxProps {
  /** Checkbox state */
  state?: CheckboxState;
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Checkbox Component
 *
 * Custom checkbox from apex-mobile-v6-dark design system
 *
 * Features:
 * - 28px x 28px size
 * - Three visual states: default, selected (blue), fixed (secondary)
 * - Custom check icon
 * - 6px border radius
 *
 * States:
 * - default: Unchecked with dark border (#151A27)
 * - selected: Checked with blue border (#297FFF)
 * - fixed: Checked with secondary border (#9BAACE) - non-interactive
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  state = 'default',
  checked = false,
  onChange,
  className = '',
  disabled = false,
}) => {
  const isChecked = state !== 'default' || checked;
  const isFixed = state === 'fixed';

  const handleClick = () => {
    if (!disabled && !isFixed && onChange) {
      onChange(!checked);
    }
  };

  const checkboxClass = `
    checkbox
    ${isChecked ? 'checkbox--checked' : ''}
    ${state === 'selected' || (isChecked && state === 'default') ? 'checkbox--selected' : ''}
    ${state === 'fixed' ? 'checkbox--fixed' : ''}
    ${disabled ? 'checkbox--disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      className={checkboxClass}
      onClick={handleClick}
      role="checkbox"
      aria-checked={isChecked}
      aria-disabled={disabled || isFixed}
      tabIndex={disabled || isFixed ? -1 : 0}
    >
      <div className="checkbox__box">
        {isChecked && (
          <svg
            className="checkbox__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6663 5L7.49967 14.1667L3.33301 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
