import React, { useState } from 'react';
import { PillTabs, PillTab } from '../tabs/PillTabs';
import { CryptoBadge } from '../badges/CryptoBadge';
import type { CryptoBadgeName } from '../badges/CryptoBadge';
import { Checkbox } from '../checkboxes/Checkbox';
import type { CheckboxState } from '../checkboxes/Checkbox';
import './CryptoSelectorDropdown.css';

/** Item type - matches Figma property */
export type DropdownItemType = 'Pair' | 'Crypto';

/** Item properties matching Figma component variants */
export interface DropdownSelectorItem {
  /** Unique identifier */
  id: string;
  /** Type: Pair (two badges) or Crypto (single badge) */
  type: DropdownItemType;
  /** Display name (e.g., "BTC/USDT" or "Bitcoin") */
  displayName: string;
  /** Primary crypto badge */
  crypto: CryptoBadgeName;
  /** Secondary crypto badge (only for Pair type) */
  secondaryCrypto?: CryptoBadgeName;
  /** Filter category for pill tabs (e.g., "USDT", "BTC") */
  category?: string;
  /** Whether item can be selected */
  selectable?: boolean;
  /** Whether checkbox should be shown */
  showCheck?: boolean;
  /** Checkbox state when shown */
  checkboxState?: CheckboxState;
}

/** Legacy interface for backward compatibility */
export interface CryptoPair {
  id: string;
  primary: CryptoBadgeName;
  secondary: CryptoBadgeName;
  displayName: string;
  category: string;
}

export interface CryptoSelectorDropdownProps {
  /** Array of dropdown items to display */
  items: DropdownSelectorItem[];
  /** Currently selected item IDs */
  selectedIds?: string[];
  /** Filter tabs for categorization */
  filterTabs?: PillTab[];
  /** Whether to allow multiple selection */
  multiSelect?: boolean;
  /** Change handler when selection changes */
  onChange?: (selectedIds: string[]) => void;
  /** Additional CSS class */
  className?: string;
  /** Legacy: Array of crypto pairs (converted to items internally) */
  pairs?: CryptoPair[];
  /** Legacy: Currently selected pair IDs */
  selectedPairs?: string[];
}

/**
 * CryptoSelectorDropdown Component
 *
 * Dropdown menu for selecting cryptocurrencies or trading pairs from apex-mobile-v6-dark design system
 *
 * Features:
 * - Pill tabs for filtering by category (USDT, BTC, ETH, etc.)
 * - Scrollable list of items with crypto badges
 * - Support for both Pair (two badges) and Crypto (single badge) types
 * - Checkboxes for selection with three states (default/selected/fixed)
 * - Hover state with darker background (#2A303C)
 * - Border separators between items
 * - Multi-select or single-select support
 * - Selectable/non-selectable items
 *
 * Properties (matching Figma component):
 * - type: Pair | Crypto
 * - state: Off | On (selected/unselected)
 * - selectable: Yes | No
 * - check: Yes | No (show checkbox)
 *
 * Usage:
 * - Typically shown below CryptoSelector button
 * - Filtered by category using pill tabs
 * - Can select single item or multiple items
 */
export const CryptoSelectorDropdown: React.FC<CryptoSelectorDropdownProps> = ({
  items: itemsProp,
  selectedIds: selectedIdsProp,
  filterTabs = [],
  multiSelect = false,
  onChange,
  className = '',
  // Legacy props for backward compatibility
  pairs,
  selectedPairs,
}) => {
  // Convert legacy pairs to new items format if provided
  const items = itemsProp || (pairs || []).map(pair => ({
    id: pair.id,
    type: 'Pair' as DropdownItemType,
    displayName: pair.displayName,
    crypto: pair.primary,
    secondaryCrypto: pair.secondary,
    category: pair.category,
    selectable: true,
    showCheck: multiSelect,
    checkboxState: 'default' as CheckboxState,
  }));

  const selectedIds = selectedIdsProp || selectedPairs || [];

  const [activeFilter, setActiveFilter] = useState(filterTabs.length > 0 ? filterTabs[0].value : 'all');

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category === activeFilter);

  const handleItemClick = (item: DropdownSelectorItem) => {
    // Don't handle click if item is not selectable
    if (item.selectable === false) return;
    if (!onChange) return;

    if (multiSelect) {
      // Toggle selection for multi-select
      const newSelection = selectedIds.includes(item.id)
        ? selectedIds.filter(id => id !== item.id)
        : [...selectedIds, item.id];
      onChange(newSelection);
    } else {
      // Single selection
      onChange([item.id]);
    }
  };

  return (
    <div className={`crypto-selector-dropdown ${className}`}>
      {filterTabs.length > 0 && (
        <div className="crypto-selector-dropdown__filters">
          <PillTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
      )}

      <div className="crypto-selector-dropdown__list">
        {filteredItems.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          const isSelectable = item.selectable !== false;

          const itemClass = `crypto-selector-dropdown__item ${
            isSelected ? 'crypto-selector-dropdown__item--selected' : ''
          } ${
            !isSelectable ? 'crypto-selector-dropdown__item--fixed' : ''
          }`;

          // Determine checkbox state
          let checkboxState: CheckboxState = 'default';
          if (item.checkboxState) {
            checkboxState = item.checkboxState;
          } else if (!isSelectable) {
            checkboxState = 'fixed';
          } else if (isSelected) {
            checkboxState = 'selected';
          }

          return (
            <button
              key={item.id}
              type="button"
              className={itemClass}
              onClick={() => handleItemClick(item)}
              disabled={!isSelectable}
            >
              <div className="crypto-selector-dropdown__item-content">
                <div className="crypto-selector-dropdown__badges">
                  {item.type === 'Pair' && item.secondaryCrypto ? (
                    <>
                      <div className="crypto-selector-dropdown__badge crypto-selector-dropdown__badge--primary">
                        <CryptoBadge name={item.crypto} size={24} />
                      </div>
                      <div className="crypto-selector-dropdown__badge crypto-selector-dropdown__badge--secondary">
                        <CryptoBadge name={item.secondaryCrypto} size={24} />
                      </div>
                    </>
                  ) : (
                    <div className="crypto-selector-dropdown__badge">
                      <CryptoBadge name={item.crypto} size={24} />
                    </div>
                  )}
                </div>
                <span className="crypto-selector-dropdown__pair-name">{item.displayName}</span>
              </div>

              {(item.showCheck || multiSelect) && (
                <Checkbox
                  state={checkboxState}
                  checked={isSelected}
                  onChange={() => {}} // Handled by button click
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
