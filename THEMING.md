# Theming System

This project uses a comprehensive theming system with semantic color tokens that support both light and dark themes.

## Quick Start

### Using the ThemeSwitcher Component

The easiest way to add theme switching to your app:

```tsx
import { ThemeSwitcher } from './components/utils/ThemeSwitcher';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      {/* Your app content */}
    </div>
  );
}
```

### Using the useTheme Hook

For programmatic theme control:

```tsx
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, toggleTheme, isDark, isLight } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('light')}>Light Mode</button>

      {isDark && <p>Dark mode is active</p>}
      {isLight && <p>Light mode is active</p>}
    </div>
  );
}
```

### Using Theme Utilities Directly

```tsx
import { setTheme, getTheme, toggleTheme, initializeTheme } from './utils/theme';

// Initialize theme on app load
initializeTheme();

// Get current theme
const currentTheme = getTheme(); // 'light' | 'dark'

// Set theme
setTheme('dark');
setTheme('light');

// Toggle theme
toggleTheme();
```

## How It Works

### CSS Variables

All colors are defined as CSS variables in [`src/tokens/tokens.css`](src/tokens/tokens.css). The system uses two sets of color definitions:

1. **Dark Theme** (default) - Applied to `:root`
2. **Light Theme** - Applied via `[data-theme="light"]` attribute

### Theme Switching

Themes are switched by setting the `data-theme` attribute on the document root:

```javascript
// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');

// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');
```

### Persistence

Theme preferences are automatically saved to `localStorage` and restored on page load.

### System Preference Detection

The theme system respects the user's operating system color scheme preference via the `prefers-color-scheme` media query. If no theme is explicitly set, it will default to the system preference.

## Available Color Tokens

### Highlights
- `--color-brand-solid` - Primary brand color
- `--color-brand-background` - Brand background color
- `--color-brand-disabled` - Disabled brand color
- `--color-bitcoin` - Bitcoin color
- `--color-buy` - Buy/positive action color (green)
- `--color-buy-disabled` - Disabled buy color
- `--color-sell` - Sell/negative action color (pink/red)
- `--color-sell-disabled` - Disabled sell color
- `--color-error` - Error state color

### Text
- `--color-text-primary` - Primary text color
- `--color-text-secondary` - Secondary/muted text color
- `--color-text-disabled` - Disabled text color
- `--color-text-inverse` - Inverse text color (for colored backgrounds)

### Forms
- `--color-forms-border` - Form field border
- `--color-forms-background` - Form field background
- `--color-forms-on-dark` - Form overlay on dark backgrounds

### Buttons
- `--color-button-2nd-bg` - Secondary button background
- `--color-button-2nd-border` - Secondary button border

### Backgrounds
- `--color-background-01` - Primary background color
- `--color-background-02` - Secondary background color
- `--color-toolbar-bg-blur` - Toolbar background with blur

### Borders/Dividers
- `--color-border-01` - Primary border
- `--color-border-02` - Secondary border
- `--color-border-03` - Tertiary border
- `--color-border-04-transparent` - Transparent border

### Shadows
- `--shadow-buy` - Buy button shadow
- `--shadow-sell` - Sell button shadow
- `--shadow-brand` - Brand button shadow

## Using Colors in Components

### In CSS Files

Always use CSS variables instead of hardcoded colors:

```css
/* ✅ GOOD */
.my-component {
  background-color: var(--color-background-02);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-03);
}

.my-button {
  background-color: var(--color-buy);
  box-shadow: var(--shadow-buy);
}

/* ❌ BAD */
.my-component {
  background-color: #373e4d;
  color: #ffffff;
  border: 1px solid #283043;
}
```

### In TypeScript (for dynamic styles)

```tsx
import { colorsDark, colorsLight } from './tokens/colors';

// Get colors based on current theme
const theme = getTheme();
const colors = theme === 'dark' ? colorsDark : colorsLight;

// Use in inline styles (avoid when possible, prefer CSS)
<div style={{ backgroundColor: colors.background.background02 }} />
```

## Color Values

### Dark Theme
- Background: `#373E4D`, `#313848`
- Text: `#FFFFFF` (primary), `#9BAACE` (secondary)
- Buy: `#00C938`
- Sell: `#F62967`
- Brand: `#297FFF`
- Error: `#ED3737`

### Light Theme
- Background: `#FFFFFF`, `#FAFAFA`
- Text: `#393F62` (primary), `#8393B7` (secondary)
- Buy: `#00C938`
- Sell: `#E81F5B`
- Brand: `#3D63FF`
- Error: `#DA1616`

## Architecture

```
src/
├── tokens/
│   ├── tokens.css          # CSS variables for both themes
│   └── colors.ts           # TypeScript color definitions
├── utils/
│   └── theme.ts            # Theme utility functions
├── hooks/
│   └── useTheme.ts         # React hook for theme management
└── components/
    └── utils/
        ├── ThemeSwitcher.tsx    # Theme switcher component
        └── ThemeSwitcher.css    # Theme switcher styles
```

## Testing Themes

You can test both themes in Storybook:

1. Open Storybook: `npm run storybook`
2. Navigate to **Utils/ThemeSwitcher**
3. View the **ThemeComparison** story to see both themes side-by-side
4. Use the ThemeSwitcher component to toggle between themes

## Migration Guide

If you have existing components with hardcoded colors:

1. Identify all hardcoded color values (`#HEX`, `rgb()`, `rgba()`)
2. Replace with appropriate CSS variables:
   - Dark backgrounds → `var(--color-background-02)`
   - Light backgrounds → `var(--color-background-01)`
   - Primary text → `var(--color-text-primary)`
   - Secondary text → `var(--color-text-secondary)`
   - Buy actions → `var(--color-buy)`
   - Sell actions → `var(--color-sell)`
   - Errors → `var(--color-error)`
   - Borders → `var(--color-border-03)`

3. Test both themes to ensure proper contrast and readability

## Browser Support

The theming system uses:
- CSS Custom Properties (CSS Variables) - [Supported by all modern browsers](https://caniuse.com/css-variables)
- `prefers-color-scheme` media query - [Widely supported](https://caniuse.com/prefers-color-scheme)
- `localStorage` API - [Universal support](https://caniuse.com/namevalue-storage)

## Best Practices

1. **Always use semantic tokens** - Use `var(--color-text-primary)` instead of `var(--color-white)`
2. **Test both themes** - Ensure your components work well in both light and dark modes
3. **Respect system preferences** - Don't force a theme unless explicitly requested by the user
4. **Use the ThemeSwitcher** - Provide an easy way for users to override system preferences
5. **Avoid hardcoded colors** - All colors should come from the token system
6. **Check contrast ratios** - Ensure text remains readable in both themes

## Troubleshooting

### Theme not switching?

Make sure `tokens.css` is imported before other styles in your app:

```tsx
// src/main.tsx
import './tokens/tokens.css';  // Must be first
import './index.css';
```

### Colors not updating?

Verify you're using CSS variables instead of hardcoded values:

```css
/* This will work */
color: var(--color-text-primary);

/* This won't change with theme */
color: #ffffff;
```

### Theme not persisting?

Check browser console for localStorage errors. Some browsers in private/incognito mode may restrict localStorage access.
