import React from 'react';
import './PillTabs.css';

export interface PillTab {
  /** Tab label to display */
  label: string;
  /** Tab value (unique identifier) */
  value: string;
}

export interface PillTabsProps {
  /** Array of tabs to display */
  tabs: PillTab[];
  /** Currently active tab value */
  activeTab: string;
  /** Change handler when tab is clicked */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * PillTabs Component
 *
 * Horizontally scrollable pill-style tabs from apex-mobile-v6-dark design system
 * Commonly used for filtering or switching between different views/categories
 *
 * Features:
 * - Pill-shaped buttons with rounded corners
 * - Active state with blue background
 * - Horizontally scrollable for overflow content
 * - Click handler for tab selection
 *
 * States:
 * - active: Selected tab with blue background and white text
 * - inactive: Unselected tab with transparent background and secondary text color
 */
export const PillTabs: React.FC<PillTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  const handleTabClick = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`pill-tabs ${className}`}>
      <div className="pill-tabs__container">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          const tabClass = `pill-tabs__tab ${isActive ? 'pill-tabs__tab--active' : ''}`;

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
