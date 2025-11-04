/**
 * Typography Tokens
 * Based on apex-mobile-v6-dark design system from Figma
 */

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif";

export const typography = {
  headline: {
    bold: {
      fontSize: '28px',
      lineHeight: 'auto',
      fontWeight: 700,
      fontFamily,
    },
    regular: {
      fontSize: '28px',
      lineHeight: 'auto',
      fontWeight: 400,
      fontFamily,
    },
  },
  subHeadline: {
    bold: {
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: 700,
      fontFamily,
    },
    regular: {
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: 400,
      fontFamily,
    },
  },
  text: {
    bold: {
      fontSize: '16px',
      lineHeight: 'auto',
      fontWeight: 700,
      fontFamily,
    },
    regular: {
      fontSize: '16px',
      lineHeight: 'auto',
      fontWeight: 400,
      fontFamily,
    },
  },
  body: {
    bold: {
      fontSize: '14px',
      lineHeight: 'auto',
      fontWeight: 700,
      fontFamily,
    },
    regular: {
      fontSize: '14px',
      lineHeight: 'auto',
      fontWeight: 400,
      fontFamily,
    },
  },
  caption: {
    bold: {
      fontSize: '12px',
      lineHeight: 'auto',
      fontWeight: 700,
      fontFamily,
    },
    regular: {
      fontSize: '12px',
      lineHeight: 'auto',
      fontWeight: 400,
      fontFamily,
    },
  },
} as const;

export type TypographyVariant = keyof typeof typography;
export type TypographyWeight = 'bold' | 'regular';
