/**
 * Design Tokens
 *
 * Central export for all design tokens used in the crypto app.
 * Import tokens from here rather than individual files.
 *
 * @example
 * import { colors, spacing, typography } from '@/tokens';
 */

export { colors, colorsDark, colorsLight, hexToRgba, withOpacity, withOpacityDark, withOpacityLight } from './colors';
export type { ColorTokensDark, ColorTokensLight } from './colors';

export { spacing } from './spacing';
export type { SpacingTokens } from './spacing';

export { typography } from './typography';
export type { TypographyTokens } from './typography';

// Re-export all tokens as a single object for convenience
export const tokens = {
  colors,
  spacing,
  typography,
} as const;
