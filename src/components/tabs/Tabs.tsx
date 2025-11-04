import React from 'react';
import './Tabs.css';

export type TabsVariant = 'brand' | 'buy' | 'sell';

export interface Tab {
  /** Tab label to display */
  label: string;
  /** Tab value (unique identifier) */
  value: string;
}

export interface TabsProps {
  /** Array of tabs to display */
  tabs: Tab[];
  /** Currently active tab value */
  activeTab: string;
  /** Visual variant - determines underline color */
  variant?: TabsVariant;
  /** Change handler when tab is clicked */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Tabs Component
 *
 * Underline-style tabs from apex-mobile-v6-dark design system
 * Commonly used for switching between different views or order types
 *
 * Features:
 * - Equal-width tabs with bottom underline indicator
 * - Active state with colored underline (2px)
 * - Bottom border separator
 * - Three color variants: brand (blue), buy (green), sell (pink)
 *
 * States:
 * - active: Selected tab with white text and colored underline
 * - inactive: Unselected tab with secondary text color, no underline
 *
 * Variants:
 * - brand: Blue underline (#297FFF)
 * - buy: Green underline (#00C938)
 * - sell: Pink underline (#F62967)
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  variant = 'brand',
  onChange,
  className = '',
}) => {
  const handleTabClick = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs__container">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          const tabClass = `tabs__tab ${isActive ? `tabs__tab--active tabs__tab--active-${variant}` : ''}`;

          return (
            <button
              key={tab.value}
              type="button"
              className={tabClass}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
