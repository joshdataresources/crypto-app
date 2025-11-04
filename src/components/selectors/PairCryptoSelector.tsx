import React, { useState } from 'react';
import { TypeSelector } from '../tabs/TypeSelector';
import type { TypeSelectorValue } from '../tabs/TypeSelector';
import { CryptoSelectorDropdown } from './CryptoSelectorDropdown';
import type { DropdownSelectorItem } from './CryptoSelectorDropdown';
import type { PillTab } from '../tabs/PillTabs';
import './PairCryptoSelector.css';

export interface PairCryptoSelectorProps {
  /** Array of all items (pairs and crypto) */
  items: DropdownSelectorItem[];
  /** Currently selected item IDs */
  selectedIds?: string[];
  /** Filter tabs for categorization */
  filterTabs?: PillTab[];
  /** Whether to allow multiple selection */
  multiSelect?: boolean;
  /** Change handler when selection changes */
  onChange?: (selectedIds: string[]) => void;
  /** Initial list type */
  initialListType?: TypeSelectorValue;
  /** Additional CSS class */
  className?: string;
}

/**
 * PairCryptoSelector Component
 *
 * Dropdown selector with Pairs/Crypto toggle from apex-mobile-v6-dark design system
 *
 * Features:
 * - Type selector tabs at top (Pairs/Crypto)
 * - Automatically filters items based on selected type
 * - Optional pill tabs for further filtering (shown only for Pairs view)
 * - Supports both single and multi-select modes
 *
 * Usage:
 * - Pass all items (both pairs and individual cryptos)
 * - Component automatically filters based on item.type
 * - When "Pairs" is selected, shows items where type === 'Pair'
 * - When "Crypto" is selected, shows items where type === 'Crypto'
 */
export const PairCryptoSelector: React.FC<PairCryptoSelectorProps> = ({
  items,
  selectedIds,
  filterTabs,
  multiSelect = false,
  onChange,
  initialListType = 'pairs',
  className = '',
}) => {
  const [listType, setListType] = useState<TypeSelectorValue>(initialListType);

  // Filter items based on selected type
  const filteredItems = items.filter(item => {
    if (listType === 'pairs') {
      return item.type === 'Pair';
    } else {
      return item.type === 'Crypto';
    }
  });

  return (
    <div className={`pair-crypto-selector ${className}`}>
      {/* Type Selector Tabs */}
      <div className="pair-crypto-selector__header">
        <TypeSelector
          activeType={listType}
          onChange={setListType}
        />
      </div>

      {/* Dropdown Content */}
      <CryptoSelectorDropdown
        items={filteredItems}
        selectedIds={selectedIds}
        filterTabs={listType === 'pairs' ? filterTabs : undefined}
        multiSelect={multiSelect}
        onChange={onChange}
      />
    </div>
  );
};
