import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeSwitcher.css';

export interface ThemeSwitcherProps {
  /** Additional CSS class */
  className?: string;
}

/**
 * ThemeSwitcher Component
 *
 * Simple toggle button to switch between light and dark themes
 *
 * Usage:
 * ```tsx
 * <ThemeSwitcher />
 * ```
 */
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-switcher ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? '☀️' : '🌙'} {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};
