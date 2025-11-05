import React from 'react';
import './TypeSelector.css';

export type TypeSelectorValue = 'type1' | 'type2';

export interface TypeSelectorProps {
  /** Label for first type */
  type1?: string;
  /** Label for second type */
  type2?: string;
  /** Currently active type */
  activeType: TypeSelectorValue;
  /** Change handler */
  onChange: (type: TypeSelectorValue) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * TypeSelector Component
 *
 * Generic toggle tabs for switching between two types
 * From apex-mobile-v6-dark design system
 *
 * Features:
 * - Two customizable tabs
 * - Active tab has blue background (#297FFF)
 * - Inactive tabs are transparent with secondary text
 * - Small compact design for inline use
 *
 * Usage:
 * ```tsx
 * <TypeSelector type1="Candle" type2="Area" activeType="type1" onChange={handleChange} />
 * <TypeSelector type1="Pairs" type2="Crypto" activeType="type2" onChange={handleChange} />
 * ```
 */
export const TypeSelector: React.FC<TypeSelectorProps> = ({
  type1 = 'Pairs',
  type2 = 'Crypto',
  activeType,
  onChange,
  className = '',
}) => {
  return (
    <div className={`type-selector ${className}`}>
      <button
        type="button"
        className={`type-selector__tab ${activeType === 'type1' ? 'type-selector__tab--active' : ''}`}
        onClick={() => onChange('type1')}
      >
        {type1}
      </button>
      <button
        type="button"
        className={`type-selector__tab ${activeType === 'type2' ? 'type-selector__tab--active' : ''}`}
        onClick={() => onChange('type2')}
      >
        {type2}
      </button>
    </div>
  );
};
