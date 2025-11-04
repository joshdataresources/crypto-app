import type { Meta, StoryObj } from '@storybook/react';
import { colorsLight, withOpacityLight } from '../../tokens/colors';

const meta: Meta = {
  title: 'Design Tokens/Colors Light Theme',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FAFAFA' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;

const ColorSwatch = ({ color, name, description }: { color: string; name: string; description?: string }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    backgroundColor: colorsLight.background.background02,
    borderRadius: '8px',
    marginBottom: '8px',
    border: `1px solid ${colorsLight.dividers.border02}`,
  }}>
    <div style={{
      width: '64px',
      height: '64px',
      background: color,
      borderRadius: '8px',
      border: `2px solid ${colorsLight.dividers.border03}`,
    }} />
    <div style={{ flex: 1 }}>
      <div style={{ color: colorsLight.text.primary, fontWeight: 600, marginBottom: '4px' }}>{name}</div>
      <div style={{ color: colorsLight.text.secondary, fontSize: '14px', fontFamily: 'monospace' }}>{color}</div>
      {description && <div style={{ color: colorsLight.text.secondary, fontSize: '12px', marginTop: '4px' }}>{description}</div>}
    </div>
  </div>
);

const ColorSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ color: colorsLight.text.primary, fontSize: '24px', marginBottom: '20px' }}>{title}</h2>
    {children}
  </div>
);

export const Highlights: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsLight.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Highlights - Brand Colors">
        <ColorSwatch
          color={colorsLight.highlights.brandSolid}
          name="Brand Solid"
          description="Primary brand color for main actions and CTAs"
        />
        <ColorSwatch
          color={colorsLight.highlights.brandBackground}
          name="Brand Background"
          description="Background variant of brand color"
        />
        <ColorSwatch
          color={colorsLight.highlights.brandDisabled}
          name="Brand Disabled"
          description="Disabled state - 40% opacity"
        />
        <ColorSwatch
          color={withOpacityLight.brandDisabled}
          name="Brand Disabled (RGBA)"
          description="Computed RGBA value with 40% opacity"
        />
      </ColorSection>

      <ColorSection title="Highlights - Crypto Actions">
        <ColorSwatch
          color={colorsLight.highlights.bitcoin}
          name="Bitcoin"
          description="Bitcoin brand color"
        />
        <ColorSwatch
          color={colorsLight.highlights.buy}
          name="Buy"
          description="Buy action color (positive)"
        />
        <ColorSwatch
          color={colorsLight.highlights.buyDisabled}
          name="Buy Disabled"
          description="Disabled buy state - 30% opacity"
        />
        <ColorSwatch
          color={colorsLight.highlights.sell}
          name="Sell"
          description="Sell action color (negative)"
        />
        <ColorSwatch
          color={colorsLight.highlights.sellDisabled}
          name="Sell Disabled"
          description="Disabled sell state - 30% opacity"
        />
        <ColorSwatch
          color={colorsLight.highlights.error}
          name="Error"
          description="Error and critical states"
        />
      </ColorSection>
    </div>
  ),
};

export const TextAndForms: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsLight.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Text Colors">
        <ColorSwatch
          color={colorsLight.text.primary}
          name="Text Primary"
          description="Main text content"
        />
        <ColorSwatch
          color={colorsLight.text.secondary}
          name="Text Secondary"
          description="Supporting text, labels"
        />
        <ColorSwatch
          color={colorsLight.text.disabled}
          name="Text Disabled"
          description="Disabled text state"
        />
        <ColorSwatch
          color={colorsLight.text.inverse}
          name="Text Inverse"
          description="Text on light backgrounds"
        />
      </ColorSection>

      <ColorSection title="Form Elements">
        <ColorSwatch
          color={colorsLight.forms.border}
          name="Form Border"
          description="Input field borders"
        />
        <ColorSwatch
          color={colorsLight.forms.background}
          name="Form Background"
          description="Input field backgrounds"
        />
        <ColorSwatch
          color={colorsLight.forms.onDark}
          name="On Dark"
          description="Overlay on dark backgrounds - 10% opacity"
        />
      </ColorSection>

      <ColorSection title="Button Elements">
        <ColorSwatch
          color={colorsLight.buttons.button2ndBG}
          name="Secondary Button Background"
          description="Background for secondary buttons"
        />
        <ColorSwatch
          color={colorsLight.buttons.button2ndBorder}
          name="Secondary Button Border"
          description="Border for secondary buttons"
        />
      </ColorSection>
    </div>
  ),
};

export const Backgrounds: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsLight.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Background Colors">
        <ColorSwatch
          color={colorsLight.background.background01}
          name="Background 01"
          description="Primary background color"
        />
        <ColorSwatch
          color={colorsLight.background.background02}
          name="Background 02"
          description="Secondary background for elevated elements"
        />
        <ColorSwatch
          color={colorsLight.background.toolbarBGBlur}
          name="Toolbar Background Blur"
          description="Toolbar with 60% opacity blur effect"
        />
      </ColorSection>

      <div style={{
        marginTop: '32px',
        padding: '24px',
        background: colorsLight.background.background02,
        borderRadius: '12px',
        border: `1px solid ${colorsLight.dividers.border02}`,
      }}>
        <h3 style={{ color: colorsLight.text.primary, marginBottom: '12px' }}>Background Usage Example</h3>
        <div style={{
          padding: '16px',
          background: colorsLight.background.background01,
          borderRadius: '8px',
          color: colorsLight.text.secondary,
        }}>
          This card demonstrates background layering: Background02 (outer) → Background01 (inner)
        </div>
      </div>
    </div>
  ),
};

export const Dividers: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsLight.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Divider & Border Colors">
        <ColorSwatch
          color={colorsLight.dividers.border01}
          name="Border 01"
          description="Darkest border color"
        />
        <ColorSwatch
          color={colorsLight.dividers.border02}
          name="Border 02"
          description="Medium border color"
        />
        <ColorSwatch
          color={colorsLight.dividers.border03}
          name="Border 03"
          description="Lighter border color"
        />
        <ColorSwatch
          color={colorsLight.dividers.border04Transparent}
          name="Border 04 Transparent"
          description="Transparent border - 40% opacity"
        />
      </ColorSection>

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ color: colorsLight.text.primary, marginBottom: '16px' }}>Border Examples</h3>
        <div style={{ padding: '16px', background: colorsLight.background.background02, borderRadius: '8px' }}>
          <div style={{ padding: '12px', border: `1px solid ${colorsLight.dividers.border01}`, marginBottom: '12px', borderRadius: '6px' }}>
            <span style={{ color: colorsLight.text.secondary }}>Border 01 (Darkest)</span>
          </div>
          <div style={{ padding: '12px', border: `1px solid ${colorsLight.dividers.border02}`, marginBottom: '12px', borderRadius: '6px' }}>
            <span style={{ color: colorsLight.text.secondary }}>Border 02 (Medium)</span>
          </div>
          <div style={{ padding: '12px', border: `1px solid ${colorsLight.dividers.border03}`, borderRadius: '6px' }}>
            <span style={{ color: colorsLight.text.secondary }}>Border 03 (Lighter)</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllColorsLight: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsLight.background.background01, padding: '32px', minHeight: '100vh' }}>
      <h1 style={{ color: colorsLight.text.primary, fontSize: '32px', marginBottom: '8px' }}>
        Apex Mobile - Light Theme Colors
      </h1>
      <p style={{ color: colorsLight.text.secondary, marginBottom: '32px' }}>
        Complete color system from Figma design tokens
      </p>

      <ColorSection title="Highlights">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsLight.highlights.brandSolid} name="Brand Solid" />
          <ColorSwatch color={colorsLight.highlights.brandBackground} name="Brand Background" />
          <ColorSwatch color={colorsLight.highlights.bitcoin} name="Bitcoin" />
          <ColorSwatch color={colorsLight.highlights.buy} name="Buy" />
          <ColorSwatch color={colorsLight.highlights.sell} name="Sell" />
          <ColorSwatch color={colorsLight.highlights.error} name="Error" />
        </div>
      </ColorSection>

      <ColorSection title="Text & Forms">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsLight.text.primary} name="Text Primary" />
          <ColorSwatch color={colorsLight.text.secondary} name="Text Secondary" />
          <ColorSwatch color={colorsLight.forms.background} name="Form Background" />
          <ColorSwatch color={colorsLight.forms.border} name="Form Border" />
        </div>
      </ColorSection>

      <ColorSection title="Backgrounds & Dividers">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsLight.background.background01} name="Background 01" />
          <ColorSwatch color={colorsLight.background.background02} name="Background 02" />
          <ColorSwatch color={colorsLight.dividers.border01} name="Border 01" />
          <ColorSwatch color={colorsLight.dividers.border02} name="Border 02" />
        </div>
      </ColorSection>

      <div style={{
        marginTop: '40px',
        padding: '24px',
        background: colorsLight.background.background02,
        borderRadius: '12px',
        border: `1px solid ${colorsLight.dividers.border02}`,
      }}>
        <h3 style={{ color: colorsLight.text.primary, marginBottom: '12px' }}>Usage Example</h3>
        <pre style={{
          color: colorsLight.text.secondary,
          fontFamily: 'monospace',
          fontSize: '14px',
          margin: 0,
          overflow: 'auto',
        }}>
{`import { colorsLight } from '@/tokens';

// Use in your components
const button = {
  background: colorsLight.highlights.brandSolid,
  color: colorsLight.text.primary,
  border: \`1px solid \${colorsLight.dividers.border02}\`
};`}
        </pre>
      </div>
    </div>
  ),
};

export const DarkVsLight: StoryObj = {
  render: () => {
    const { colorsDark } = require('../../tokens/colors');

    return (
      <div style={{ display: 'flex', gap: '32px', padding: '32px', backgroundColor: '#f0f0f0' }}>
        {/* Dark Theme */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '16px' }}>Dark Theme</h2>
          <div style={{
            padding: '24px',
            backgroundColor: colorsDark.background.background01,
            borderRadius: '12px',
            border: `1px solid ${colorsDark.dividers.border02}`,
          }}>
            <h3 style={{ color: colorsDark.text.primary, marginBottom: '16px' }}>Sample Card</h3>
            <p style={{ color: colorsDark.text.secondary, marginBottom: '16px' }}>
              This demonstrates the dark theme with actual colors from Figma.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                padding: '8px 16px',
                backgroundColor: colorsDark.highlights.brandSolid,
                color: colorsDark.text.primary,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}>
                Buy
              </button>
              <button style={{
                padding: '8px 16px',
                backgroundColor: colorsDark.buttons.button2ndBG,
                color: colorsDark.text.primary,
                border: `1px solid ${colorsDark.buttons.button2ndBorder}`,
                borderRadius: '6px',
                cursor: 'pointer',
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Light Theme */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '16px' }}>Light Theme</h2>
          <div style={{
            padding: '24px',
            backgroundColor: colorsLight.background.background01,
            borderRadius: '12px',
            border: `1px solid ${colorsLight.dividers.border02}`,
          }}>
            <h3 style={{ color: colorsLight.text.primary, marginBottom: '16px' }}>Sample Card</h3>
            <p style={{ color: colorsLight.text.secondary, marginBottom: '16px' }}>
              This demonstrates the light theme with actual colors from Figma.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                padding: '8px 16px',
                backgroundColor: colorsLight.highlights.brandSolid,
                color: colorsLight.text.inverse,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}>
                Buy
              </button>
              <button style={{
                padding: '8px 16px',
                backgroundColor: colorsLight.buttons.button2ndBG,
                color: colorsLight.text.primary,
                border: `1px solid ${colorsLight.buttons.button2ndBorder}`,
                borderRadius: '6px',
                cursor: 'pointer',
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
