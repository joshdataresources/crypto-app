/**
 * Theme Utility
 *
 * Provides functions to switch between light and dark themes
 * by setting the data-theme attribute on the document root
 */

export type Theme = 'light' | 'dark';

/**
 * Set the theme for the application
 * @param theme - 'light' or 'dark'
 */
export const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

/**
 * Get the current theme
 * @returns Current theme ('light' or 'dark')
 */
export const getTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;

  if (savedTheme) {
    return savedTheme;
  }

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
};

/**
 * Toggle between light and dark themes
 */
export const toggleTheme = (): void => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

/**
 * Initialize theme on app load
 */
export const initializeTheme = (): void => {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
};
