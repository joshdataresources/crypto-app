import React from 'react';
import './TypeSelector.css';

export type TypeSelectorValue = 'pairs' | 'crypto';

export interface TypeSelectorProps {
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
 * Toggle tabs for switching between Pairs and Crypto views
 * From apex-mobile-v6-dark design system
 *
 * Features:
 * - Two tabs: Pairs and Crypto
 * - Active tab has blue background (#297FFF)
 * - Inactive tabs are transparent with secondary text
 * - Small compact design for inline use
 */
export const TypeSelector: React.FC<TypeSelectorProps> = ({
  activeType,
  onChange,
  className = '',
}) => {
  return (
    <div className={`type-selector ${className}`}>
      <button
        type="button"
        className={`type-selector__tab ${activeType === 'pairs' ? 'type-selector__tab--active' : ''}`}
        onClick={() => onChange('pairs')}
      >
        Pairs
      </button>
      <button
        type="button"
        className={`type-selector__tab ${activeType === 'crypto' ? 'type-selector__tab--active' : ''}`}
        onClick={() => onChange('crypto')}
      >
        Crypto
      </button>
    </div>
  );
};
