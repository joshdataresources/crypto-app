/**
 * Design Tokens - Colors
 *
 * Color palette from Figma design system (Dark Theme)
 * Source: apex-mobile-v6-dark
 */

export const colorsDark = {
  // Highlights
  highlights: {
    brandSolid: '#297FFF',
    brandBackground: '#1C4C94',
    brandDisabled: '#5576FA', // 40% opacity applied in Figma
    bitcoin: '#FC9416',
    buy: '#00C938',
    buyDisabled: '#04C654', // 30% opacity applied in Figma
    sell: '#F62967',
    sellDisabled: '#DA1651', // 30% opacity applied in Figma
    error: '#ED3737',
  },

  // Text & Forms & Buttons
  text: {
    primary: '#FFFFFF',
    secondary: '#9BAACE',
    disabled: '#C2CADB',
    inverse: '#FFFFFF',
  },

  forms: {
    border: '#151A27',
    background: '#262D3E',
    onDark: '#000000', // 10% opacity applied in Figma
  },

  buttons: {
    button2ndBG: '#2A303C',
    button2ndBorder: '#171A20',
  },

  // Backgrounds
  background: {
    background01: '#313848',
    background02: '#373E4D',
    toolbarBGBlur: '#313848', // 31% opacity blur applied in Figma
  },

  // Dividers
  dividers: {
    border01: '#0A0C12',
    border02: '#182034',
    border03: '#283043',
    border04Transparent: '#CED6E5', // 40% opacity applied in Figma
  },
} as const;

// Light theme colors
export const colorsLight = {
  // Highlights
  highlights: {
    brandSolid: '#3D63FF',
    brandBackground: '#2D4DCE',
    brandDisabled: '#5576FA', // 40% opacity applied in Figma
    bitcoin: '#FC9416',
    buy: '#00C938',
    buyDisabled: '#04C654', // 30% opacity applied in Figma
    sell: '#E81F5B',
    sellDisabled: '#DA1651', // 30% opacity applied in Figma
    error: '#DA1616',
  },

  // Text & Forms & Buttons
  text: {
    primary: '#393F62',
    secondary: '#8393B7',
    disabled: '#C2CADB',
    inverse: '#FFFFFF',
  },

  forms: {
    border: '#D5DBE6',
    background: '#F6F7F9',
    onDark: '#000000', // 10% opacity applied in Figma
  },

  buttons: {
    button2ndBG: '#E6E9EF',
    button2ndBorder: '#D3D9E3',
  },

  // Backgrounds
  background: {
    background01: '#FAFAFA',
    background02: '#FFFFFF',
    toolbarBGBlur: '#FAFAFA', // 60% opacity blur applied in Figma
  },

  // Dividers
  dividers: {
    border01: '#8998B9',
    border02: '#C2CADB',
    border03: '#E6EAF2',
    border04Transparent: '#CED6E5', // 40% opacity applied in Figma
  },
} as const;

// Default export (dark theme)
export const colors = colorsDark;

// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Opacity variants for disabled states (Dark theme)
export const withOpacityDark = {
  brandDisabled: hexToRgba(colorsDark.highlights.brandSolid, 0.4),
  buyDisabled: hexToRgba(colorsDark.highlights.buy, 0.3),
  sellDisabled: hexToRgba(colorsDark.highlights.sell, 0.3),
  onDark: hexToRgba('#000000', 0.1),
  toolbarBlur: hexToRgba(colorsDark.background.background01, 0.31),
  border04: hexToRgba(colorsDark.dividers.border04Transparent, 0.4),
};

// Opacity variants for disabled states (Light theme)
export const withOpacityLight = {
  brandDisabled: hexToRgba(colorsLight.highlights.brandSolid, 0.4),
  buyDisabled: hexToRgba(colorsLight.highlights.buy, 0.3),
  sellDisabled: hexToRgba(colorsLight.highlights.sell, 0.3),
  onDark: hexToRgba('#000000', 0.1),
  toolbarBlur: hexToRgba(colorsLight.background.background01, 0.6),
  border04: hexToRgba(colorsLight.dividers.border04Transparent, 0.4),
};

// Default opacity (dark theme)
export const withOpacity = withOpacityDark;

// Type exports
export type ColorTokensDark = typeof colorsDark;
export type ColorTokensLight = typeof colorsLight;
