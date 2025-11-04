import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import './Button.css';

export type ButtonVariant =
  | 'brand'
  | 'buy'
  | 'sell'
  | 'negative'
  | 'basic'
  | 'transparent'
  | 'line'
  | 'brandOpposite';

export type ButtonSize = 'big' | 'small';

export interface ButtonProps {
  /** Button visual variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Icon name from the icon set */
  icon?: IconName;
  /** Show/hide icon */
  showIcon?: boolean;
  /** Button text */
  children: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Active state (shows focus/selection) */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Button Component
 *
 * Primary button component from apex-mobile-v6-dark design system
 * Supports multiple variants, sizes, and states
 *
 * Variants:
 * - brand: Blue brand color (default)
 * - buy: Green for buy actions
 * - sell: Pink for sell actions
 * - negative: Red for destructive actions
 * - basic: Secondary background
 * - transparent: No background
 * - line: Border only
 * - brandOpposite: Transparent with brand text
 *
 * Sizes:
 * - big: 44px height (default)
 * - small: 36px height
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'brand',
  size = 'big',
  icon,
  showIcon = true,
  children,
  disabled = false,
  active = false,
  onClick,
  className = '',
}) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;
  const stateClass = active ? 'button--active' : disabled ? 'button--disabled' : '';

  const classes = [baseClass, variantClass, sizeClass, stateClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <div className="button__content">
        {icon && showIcon && (
          <Icon
            name={icon}
            className="button__icon"
            color="currentColor"
          />
        )}
        <span className="button__text">{children}</span>
      </div>
    </button>
  );
};
