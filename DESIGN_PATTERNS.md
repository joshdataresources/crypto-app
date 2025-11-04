# Crypto App Design Patterns

A comprehensive design system and component library for our crypto application.

## Table of Contents

- [Overview](#overview)
- [Design Principles](#design-principles)
- [Color System](#color-system)
- [Typography](#typography)
- [Components](#components)
- [Usage Guidelines](#usage-guidelines)

## Overview

This document serves as the single source of truth for all design patterns and components used in the crypto app. Components are imported from Figma and documented here with their variants, states, and usage examples.

## Design Principles

1. **Clarity**: Clear information hierarchy for financial data
2. **Security**: Visual indicators for secure/trusted actions
3. **Consistency**: Unified experience across all features
4. **Accessibility**: WCAG 2.1 AA compliant components
5. **Performance**: Optimized for real-time data updates

## Color System

Full color documentation is available in **Storybook** under "Design Tokens/Colors" and "Design Tokens/Colors Light Theme".
All colors are defined in `src/tokens/colors.ts` as design tokens from Figma.

### Dark Theme

#### Highlights
- **Brand Solid**: `#297FFF` - Primary brand color
- **Brand Background**: `#1C4C94` - Brand background variant
- **Bitcoin**: `#FC9416` - Bitcoin color
- **Buy**: `#00C938` - Buy actions (positive)
- **Sell**: `#F62967` - Sell actions (negative)
- **Error**: `#ED3737` - Error states

#### Text Colors
- **Text Primary**: `#FFFFFF` - Main content
- **Text Secondary**: `#9BAACE` - Supporting text
- **Text Disabled**: `#C2CADB` - Disabled state

#### Backgrounds
- **Background 01**: `#313848` - Primary background
- **Background 02**: `#373E4D` - Elevated elements

#### Dividers
- **Border 01**: `#0A0C12` - Darkest borders
- **Border 02**: `#182034` - Medium borders
- **Border 03**: `#283043` - Lighter borders

### Light Theme

#### Highlights
- **Brand Solid**: `#3D63FF` - Primary brand color
- **Brand Background**: `#2D4DCE` - Brand background variant
- **Bitcoin**: `#FC9416` - Bitcoin color
- **Buy**: `#00C938` - Buy actions (positive)
- **Sell**: `#E81F5B` - Sell actions (negative)
- **Error**: `#DA1616` - Error states

#### Text Colors
- **Text Primary**: `#393F62` - Main content
- **Text Secondary**: `#8393B7` - Supporting text
- **Text Disabled**: `#C2CADB` - Disabled state

#### Backgrounds
- **Background 01**: `#FAFAFA` - Primary background
- **Background 02**: `#FFFFFF` - Elevated elements

#### Dividers
- **Border 01**: `#8998B9` - Darkest borders
- **Border 02**: `#C2CADB` - Medium borders
- **Border 03**: `#E6EAF2` - Lighter borders

### Usage
```typescript
import { colorsDark, colorsLight } from '@/tokens';

// Dark theme
const darkButton = {
  background: colorsDark.highlights.brandSolid,
  color: colorsDark.text.primary,
};

// Light theme
const lightButton = {
  background: colorsLight.highlights.brandSolid,
  color: colorsLight.text.inverse,
};
```

## Typography

### Heading Scales
- **H1**: Page titles (32px)
- **H2**: Section headers (24px)
- **H3**: Card titles (20px)
- **H4**: Subsections (18px)

### Body Text
- **Large**: Primary content (16px)
- **Regular**: Standard content (14px)
- **Small**: Metadata, captions (12px)

### Monospace
- **Code**: Wallet addresses, transaction hashes
- **Numbers**: Prices, amounts, percentages

## Icon System

A comprehensive set of 30+ icons from the Figma design system, available in React component format.

### Available Icons

**Actions**
- `repeat` - Repeat/refresh actions
- `scan` - QR code scanning
- `download` - Download data
- `upload` - Upload data
- `transfer` - Transfer between accounts
- `add` / `plus` - Add new items

**Finance & Crypto**
- `bitcoin` - Bitcoin cryptocurrency
- `wallet` - Wallet/account
- `chart-line` - Line chart/trends
- `activity` - Activity/heartbeat monitor

**Navigation**
- `chevron-left` / `chevron-right` - Horizontal navigation
- `chevron-up` / `chevron-down` - Vertical navigation
- `arrow-left` / `arrow-right` - Directional arrows

**System**
- `settings` - Settings/configuration
- `user` - User profile
- `search` - Search functionality
- `check` - Success/confirmation
- `close` - Close/cancel
- `clock` - Time/history
- `star` - Favorite/rating
- `archive` - Archive/storage
- `sort` - Sort/organize
- `grid` / `list` - View modes
- `wifi` - Connection status

### Icon Sizes

- **sm**: 16px - Small, inline icons
- **md**: 20px - Default size
- **lg**: 24px - Larger touch targets
- **xl**: 32px - Prominent features
- **Custom**: Any pixel value

### Usage

```tsx
import { Icon } from '@/components/icons/Icon';
import { colorsDark } from '@/tokens';

// Basic usage
<Icon name="bitcoin" />

// With size and color
<Icon
  name="wallet"
  size="lg"
  color={colorsDark.highlights.brandSolid}
/>

// Interactive icon
<Icon
  name="settings"
  size="xl"
  onClick={() => console.log('Settings clicked')}
/>
```

### Color Guidelines

- **Primary actions**: Use `brandSolid` (#297FFF)
- **Success/Buy**: Use `buy` (#00C938)
- **Error/Sell**: Use `sell` (#F62967)
- **Neutral**: Use `text.secondary` (#9BAACE)
- **Special**: Bitcoin uses `bitcoin` (#FC9416)

---

## Components

### Navigation Components
*(Paste Figma components here)*

#### Main Navigation
- Purpose: Primary app navigation
- Variants: Desktop, Mobile, Collapsed
- States: Default, Hover, Active, Disabled

#### Tab Navigation
- Purpose: Section switching within pages
- Variants: Horizontal, Vertical
- States: Default, Hover, Active

---

### Data Display Components
*(Paste Figma components here)*

#### Price Card
- Purpose: Display cryptocurrency prices
- Variants: Compact, Detailed, Chart View
- States: Loading, Loaded, Error, Updating

#### Transaction List
- Purpose: Show transaction history
- Variants: Compact, Detailed
- States: Empty, Loading, Loaded, Error

#### Portfolio Summary
- Purpose: Display portfolio overview
- Variants: Card, Full Page
- States: Loading, Loaded, Error

---

### Input Components
*(Paste Figma components here)*

#### Amount Input
- Purpose: Enter crypto amounts or fiat values
- Variants: Crypto, Fiat, Dual
- States: Default, Focus, Error, Disabled, Success

#### Search Input
- Purpose: Search for cryptocurrencies or transactions
- Variants: With Suggestions, Simple
- States: Default, Focus, Loading, Error

#### Wallet Address Input
- Purpose: Enter wallet addresses
- Variants: With QR Scanner, Simple
- States: Default, Focus, Valid, Invalid, Disabled

---

### Action Components
*(Paste Figma components here)*

#### Primary Button
- Purpose: Main actions (Buy, Sell, Send, Receive)
- Variants: Large, Medium, Small
- States: Default, Hover, Active, Loading, Disabled, Success

#### Secondary Button
- Purpose: Supporting actions
- Variants: Large, Medium, Small, Icon Only
- States: Default, Hover, Active, Disabled

#### Danger Button
- Purpose: Destructive actions (Cancel, Delete)
- Variants: Filled, Outlined
- States: Default, Hover, Active, Loading, Disabled

---

### Feedback Components
*(Paste Figma components here)*

#### Alert Banner
- Purpose: System-wide notifications
- Variants: Success, Warning, Error, Info
- States: Default, With Action, Dismissible

#### Toast Notification
- Purpose: Temporary feedback messages
- Variants: Success, Warning, Error, Info
- States: Entering, Visible, Exiting

#### Loading Spinner
- Purpose: Indicate loading states
- Variants: Small, Medium, Large, Fullscreen
- States: Spinning, With Label

---

### Chart Components
*(Paste Figma components here)*

#### Line Chart
- Purpose: Price trends over time
- Variants: Simple, Multi-line, With Volume
- States: Loading, Loaded, No Data, Error

#### Candlestick Chart
- Purpose: Detailed price analysis
- Variants: Standard, With Indicators
- States: Loading, Loaded, No Data

#### Portfolio Distribution Chart
- Purpose: Asset allocation visualization
- Variants: Pie, Donut, Bar
- States: Loading, Loaded, Empty

---

### Modal Components
*(Paste Figma components here)*

#### Transaction Modal
- Purpose: Confirm transactions
- Variants: Send, Receive, Buy, Sell, Swap
- States: Input, Review, Processing, Success, Error

#### Settings Modal
- Purpose: App configuration
- Variants: Simple, Tabbed
- States: Default, Saving, Error

---

### Card Components
*(Paste Figma components here)*

#### Asset Card
- Purpose: Display individual cryptocurrency
- Variants: List Item, Grid Item, Featured
- States: Default, Hover, Selected, Disabled

#### Wallet Card
- Purpose: Display wallet information
- Variants: Compact, Detailed
- States: Default, Active, Disconnected

---

## Usage Guidelines

### When to Use Components

#### Price Card
✅ Use for: Displaying current prices, 24h changes, market cap
❌ Don't use for: Historical data (use charts instead)

#### Amount Input
✅ Use for: Transaction amounts, limit orders
❌ Don't use for: Display-only values (use text instead)

#### Modal Dialogs
✅ Use for: Critical actions requiring confirmation
❌ Don't use for: Routine information display (use cards instead)

### Accessibility Notes

- All interactive components must be keyboard navigable
- Color should not be the only indicator of state
- Maintain 4.5:1 contrast ratio for text
- Include ARIA labels for screen readers
- Wallet addresses should be copyable and screen-reader friendly

### Responsive Behavior

- **Mobile**: Stack components vertically, simplify charts
- **Tablet**: Hybrid layouts, collapsible sections
- **Desktop**: Multi-column layouts, detailed views

## Component Development Workflow

1. **Import from Figma**: Use Figma MCP server to paste components
2. **Document Here**: Add component details to this file
3. **Create React Component**: Build in `src/components/`
4. **Create Storybook Story**: Document in `src/stories/`
5. **Write Tests**: Add tests for all states and variants

## Resources

- [Storybook Demo](#) - Run `npm run storybook`
- [Figma Design File](#) - Link to your Figma project
- [Component API Docs](#) - Generated from TypeScript types

---

## Change Log

| Date | Component | Change | Author |
|------|-----------|--------|--------|
| TBD  | Initial Setup | Created design pattern document | System |

---

*Last updated: 2025-11-02*
