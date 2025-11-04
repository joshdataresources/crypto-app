# Crypto App - Design System & Component Library

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/crypto-app)

A modern crypto application with a comprehensive design system built with React, TypeScript, Vite, and Storybook. Features a complete trading UI with order forms, transaction management, and full light/dark theme support.

## ✨ Features

- 🎨 **Complete Design System** - 50+ components from apex-mobile-v6-dark Figma design
- 🌓 **Light/Dark Theme** - Seamless theme switching with semantic color tokens
- 📱 **Trading Components** - Order forms, transaction headers, price cards, and more
- 🎯 **Type-Safe** - Built with TypeScript for maximum reliability
- 📚 **Storybook** - Interactive component documentation and playground
- ⚡ **Fast Development** - Vite for lightning-fast HMR
- 🎭 **All Order Types** - Market, Limit, Stop, Stop-Limit, Trailing Stop, Reserve Orders

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/crypto-app.git
cd crypto-app
npm install
```

### Development
```bash
# Run the app
npm run dev

# Run Storybook (component showcase)
npm run storybook

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Live Demo

- **App**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Storybook**: [https://your-storybook.vercel.app](https://your-storybook.vercel.app)

## 📚 Documentation

- **[Design Patterns](./DESIGN_PATTERNS.md)** - Complete design system documentation
- **[Theming Guide](./THEMING.md)** - Theme system and customization guide
- **Storybook** - Interactive component demo (run `npm run storybook`)

## 🏗️ Project Structure

```
crypto-app/
├── src/
│   ├── components/           # React components
│   │   ├── badges/          # CryptoBadge, BadgePair
│   │   ├── buttons/         # PrimaryButton, Button
│   │   ├── cards/           # PriceCard
│   │   ├── icons/           # Icon system
│   │   ├── inputs/          # Input, CurrencyPairInput, DualAmountInput
│   │   ├── layout/          # TransactionHeader, TransactionFooter
│   │   ├── tabs/            # PillTabs, OrderTypeTabs, Tabs
│   │   ├── trade/           # OrderForm, TransactionDetails
│   │   ├── selectors/       # CryptoSelector, CryptoSelectorDropdown
│   │   └── utils/           # ThemeSwitcher
│   ├── tokens/              # Design tokens
│   │   ├── colors.ts        # Color definitions
│   │   ├── tokens.css       # CSS variables
│   │   ├── spacing.ts       # Spacing scale
│   │   └── typography.ts    # Typography definitions
│   ├── hooks/               # React hooks
│   │   └── useTheme.ts      # Theme management hook
│   ├── utils/               # Utility functions
│   │   └── theme.ts         # Theme utilities
│   └── stories/             # Storybook stories
│       ├── badges/
│       ├── buttons/
│       ├── cards/
│       ├── icons/
│       ├── inputs/
│       ├── tabs/
│       ├── trade/
│       ├── tokens/
│       └── utils/
├── DESIGN_PATTERNS.md       # Design system documentation
├── THEMING.md               # Theme customization guide
└── README.md                # This file
```

## 🎨 Working with Figma Components

This project uses the Figma MCP server to import design components.

### Workflow:
1. **Paste from Figma** - Use the Figma MCP server to paste component designs
2. **Document** - Add component details to `DESIGN_PATTERNS.md`
3. **Build** - Create React component in `src/components/`
4. **Showcase** - Create Storybook story in `src/stories/`
5. **Test** - Verify component across all variants and states

## 🧩 Component Library

### Badges
- **CryptoBadge** - Crypto currency badges (BTC, ETH, USDT, etc.)
- **BadgePair** - Paired crypto badges for trading pairs

### Buttons
- **PrimaryButton** - Main action buttons with variants and states
- **Button** - Base button component

### Cards
- **PriceCard** - Display cryptocurrency prices with 24h changes

### Icons
- **Icon** - SVG icon system with 30+ icons (Activity, Buy, Sell, Settings, etc.)

### Inputs
- **Input** - Multi-variant input (text, asset, dropdown, password)
- **CurrencyPairInput** - Dual currency input with conversion
- **DualAmountInput** - Paired amount inputs for trading

### Layout
- **TransactionHeader** - Transaction screen header with Buy/Sell toggle
- **TransactionFooter** - Transaction footer with action buttons

### Tabs
- **PillTabs** - Rounded pill-style tabs
- **OrderTypeTabs** - Trading order type tabs (Market, Limit, Stop)
- **Tabs** - Base tab component with variants

### Trade Components
- **OrderForm** - Complete trading form with 7 order types
- **TransactionDetails** - Transaction summary display

### Selectors
- **CryptoSelector** - Cryptocurrency selection modal
- **CryptoSelectorDropdown** - Dropdown crypto selector

### Utilities
- **ThemeSwitcher** - Light/Dark theme toggle button

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Storybook 10** - Component development & documentation
- **CSS3** - Styling with modern features

## 📖 Design Principles

1. **Clarity** - Clear information hierarchy for financial data
2. **Security** - Visual indicators for secure/trusted actions
3. **Consistency** - Unified experience across all features
4. **Accessibility** - WCAG 2.1 AA compliant
5. **Performance** - Optimized for real-time data updates

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/crypto-app)

#### Option 2: Manual Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy Storybook to Vercel

```bash
# Build Storybook
npm run build-storybook

# Deploy the storybook-static folder
vercel storybook-static --prod
```

### Environment Variables

No environment variables required for basic deployment. The app works out of the box!

## 🎨 Theme Customization

This app includes a complete theming system. See [THEMING.md](./THEMING.md) for details.

```tsx
import { ThemeSwitcher } from './components/utils/ThemeSwitcher';

// Add theme switcher to your app
<ThemeSwitcher />

// Or use programmatically
import { useTheme } from './hooks/useTheme';

const { theme, toggleTheme } = useTheme();
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Storybook Documentation](https://storybook.js.org/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🙏 Acknowledgments

- Design system based on apex-mobile-v6-dark Figma design
- Built with [Claude Code](https://claude.ai/claude-code)

---

**Made with ❤️ and Claude Code**
