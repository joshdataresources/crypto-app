/**
 * useTheme Hook
 *
 * React hook for managing theme state in components
 */

import { useState, useEffect } from 'react';
import { getTheme, setTheme, type Theme } from '../utils/theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getTheme());

  useEffect(() => {
    // Initialize theme on mount
    const currentTheme = getTheme();
    document.documentElement.setAttribute('data-theme', currentTheme);
    setThemeState(currentTheme);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
  };

  return {
    theme,
    setTheme: updateTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
