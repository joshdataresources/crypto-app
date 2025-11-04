import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '../../components/utils/ThemeSwitcher';
import { OrderForm } from '../../components/trade/OrderForm';

const meta = {
  title: 'Utils/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Theme Switcher component for toggling between light and dark modes.

## Features
- Switches between light and dark themes
- Persists theme preference in localStorage
- Respects system color scheme preference
- Updates all components using semantic color tokens

## Theme System
The theme system uses CSS variables defined in \`tokens/tokens.css\`:
- Dark theme (default): Applied to \`:root\`
- Light theme: Applied via \`[data-theme="light"]\` attribute
- System preference: Automatically detects via \`prefers-color-scheme\` media query

## Usage
\`\`\`tsx
import { ThemeSwitcher } from './components/utils/ThemeSwitcher';

// In your component
<ThemeSwitcher />
\`\`\`

## Programmatic Access
\`\`\`tsx
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, toggleTheme, isDark, isLight } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Force Dark</button>
      <button onClick={() => setTheme('light')}>Force Light</button>
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithOrderForm: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <ThemeSwitcher />
        <OrderForm
          orderSide="buy"
          primaryCrypto="BTC"
          secondaryCrypto="USDT"
          displayText="BTCUSD"
          initialOrderType="limit"
          tabStyle="pill"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme switcher with OrderForm component to demonstrate theme switching across components.',
      },
    },
  },
};

export const ThemeComparison: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', padding: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h3 style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>Dark Theme</h3>
          <div data-theme="dark" style={{ padding: '20px', backgroundColor: 'var(--color-background-01)', borderRadius: '8px' }}>
            <OrderForm
              orderSide="buy"
              primaryCrypto="BTC"
              secondaryCrypto="USDT"
              displayText="BTCUSD"
              initialOrderType="market"
              tabStyle="pill"
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h3 style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>Light Theme</h3>
          <div data-theme="light" style={{ padding: '20px', backgroundColor: 'var(--color-background-01)', borderRadius: '8px' }}>
            <OrderForm
              orderSide="buy"
              primaryCrypto="BTC"
              secondaryCrypto="USDT"
              displayText="BTCUSD"
              initialOrderType="market"
              tabStyle="pill"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of dark and light themes.',
      },
    },
  },
};
