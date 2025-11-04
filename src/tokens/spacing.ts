/**
 * Design Tokens - Spacing
 *
 * Spacing scale for consistent layout and component spacing
 */

export const spacing = {
  /** 2px */
  xxs: '2px',
  /** 4px */
  xs: '4px',
  /** 8px */
  sm: '8px',
  /** 12px */
  md: '12px',
  /** 16px */
  lg: '16px',
  /** 20px */
  xl: '20px',
  /** 24px */
  '2xl': '24px',
  /** 32px */
  '3xl': '32px',
  /** 40px */
  '4xl': '40px',
  /** 48px */
  '5xl': '48px',
  /** 64px */
  '6xl': '64px',
  /** 80px */
  '7xl': '80px',
  /** 96px */
  '8xl': '96px',
} as const;

export type SpacingTokens = typeof spacing;
