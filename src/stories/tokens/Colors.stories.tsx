import type { Meta, StoryObj } from '@storybook/react';
import { colorsDark, withOpacity } from '../../tokens/colors';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
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
    backgroundColor: colorsDark.background.background02,
    borderRadius: '8px',
    marginBottom: '8px',
    border: `1px solid ${colorsDark.dividers.border02}`,
  }}>
    <div style={{
      width: '64px',
      height: '64px',
      background: color,
      borderRadius: '8px',
      border: `2px solid ${colorsDark.dividers.border03}`,
    }} />
    <div style={{ flex: 1 }}>
      <div style={{ color: colorsDark.text.primary, fontWeight: 600, marginBottom: '4px' }}>{name}</div>
      <div style={{ color: colorsDark.text.secondary, fontSize: '14px', fontFamily: 'monospace' }}>{color}</div>
      {description && <div style={{ color: colorsDark.text.secondary, fontSize: '12px', marginTop: '4px' }}>{description}</div>}
    </div>
  </div>
);

const ColorSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ color: colorsDark.text.primary, fontSize: '24px', marginBottom: '20px' }}>{title}</h2>
    {children}
  </div>
);

export const Highlights: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsDark.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Highlights - Brand Colors">
        <ColorSwatch
          color={colorsDark.highlights.brandSolid}
          name="Brand Solid"
          description="Primary brand color for main actions and CTAs"
        />
        <ColorSwatch
          color={colorsDark.highlights.brandBackground}
          name="Brand Background"
          description="Background variant of brand color"
        />
        <ColorSwatch
          color={colorsDark.highlights.brandDisabled}
          name="Brand Disabled"
          description="Disabled state - 40% opacity"
        />
        <ColorSwatch
          color={withOpacity.brandDisabled}
          name="Brand Disabled (RGBA)"
          description="Computed RGBA value with 40% opacity"
        />
      </ColorSection>

      <ColorSection title="Highlights - Crypto Actions">
        <ColorSwatch
          color={colorsDark.highlights.bitcoin}
          name="Bitcoin"
          description="Bitcoin brand color"
        />
        <ColorSwatch
          color={colorsDark.highlights.buy}
          name="Buy"
          description="Buy action color (positive)"
        />
        <ColorSwatch
          color={colorsDark.highlights.buyDisabled}
          name="Buy Disabled"
          description="Disabled buy state - 30% opacity"
        />
        <ColorSwatch
          color={colorsDark.highlights.sell}
          name="Sell"
          description="Sell action color (negative)"
        />
        <ColorSwatch
          color={colorsDark.highlights.sellDisabled}
          name="Sell Disabled"
          description="Disabled sell state - 30% opacity"
        />
        <ColorSwatch
          color={colorsDark.highlights.error}
          name="Error"
          description="Error and critical states"
        />
      </ColorSection>
    </div>
  ),
};

export const TextAndForms: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsDark.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Text Colors">
        <ColorSwatch
          color={colorsDark.text.primary}
          name="Text Primary"
          description="Main text content"
        />
        <ColorSwatch
          color={colorsDark.text.secondary}
          name="Text Secondary"
          description="Supporting text, labels"
        />
        <ColorSwatch
          color={colorsDark.text.disabled}
          name="Text Disabled"
          description="Disabled text state"
        />
        <ColorSwatch
          color={colorsDark.text.inverse}
          name="Text Inverse"
          description="Text on dark backgrounds"
        />
      </ColorSection>

      <ColorSection title="Form Elements">
        <ColorSwatch
          color={colorsDark.forms.border}
          name="Form Border"
          description="Input field borders"
        />
        <ColorSwatch
          color={colorsDark.forms.background}
          name="Form Background"
          description="Input field backgrounds"
        />
        <ColorSwatch
          color={colorsDark.forms.onDark}
          name="On Dark"
          description="Overlay on dark backgrounds - 10% opacity"
        />
      </ColorSection>

      <ColorSection title="Button Elements">
        <ColorSwatch
          color={colorsDark.buttons.button2ndBG}
          name="Secondary Button Background"
          description="Background for secondary buttons"
        />
        <ColorSwatch
          color={colorsDark.buttons.button2ndBorder}
          name="Secondary Button Border"
          description="Border for secondary buttons"
        />
      </ColorSection>
    </div>
  ),
};

export const Backgrounds: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsDark.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Background Colors">
        <ColorSwatch
          color={colorsDark.background.background01}
          name="Background 01"
          description="Primary background color"
        />
        <ColorSwatch
          color={colorsDark.background.background02}
          name="Background 02"
          description="Secondary background for elevated elements"
        />
        <ColorSwatch
          color={colorsDark.background.toolbarBGBlur}
          name="Toolbar Background Blur"
          description="Toolbar with 31% opacity blur effect"
        />
      </ColorSection>

      <div style={{
        marginTop: '32px',
        padding: '24px',
        background: colorsDark.background.background02,
        borderRadius: '12px',
        border: `1px solid ${colorsDark.dividers.border02}`,
      }}>
        <h3 style={{ color: colorsDark.text.primary, marginBottom: '12px' }}>Background Usage Example</h3>
        <div style={{
          padding: '16px',
          background: colorsDark.background.background01,
          borderRadius: '8px',
          color: colorsDark.text.secondary,
        }}>
          This card demonstrates background layering: Background02 (outer) → Background01 (inner)
        </div>
      </div>
    </div>
  ),
};

export const Dividers: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsDark.background.background01, padding: '32px', minHeight: '100vh' }}>
      <ColorSection title="Divider & Border Colors">
        <ColorSwatch
          color={colorsDark.dividers.border01}
          name="Border 01"
          description="Darkest border color"
        />
        <ColorSwatch
          color={colorsDark.dividers.border02}
          name="Border 02"
          description="Medium border color"
        />
        <ColorSwatch
          color={colorsDark.dividers.border03}
          name="Border 03"
          description="Lighter border color"
        />
        <ColorSwatch
          color={colorsDark.dividers.border04Transparent}
          name="Border 04 Transparent"
          description="Transparent border - 40% opacity"
        />
      </ColorSection>

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ color: colorsDark.text.primary, marginBottom: '16px' }}>Border Examples</h3>
        <div style={{ padding: '16px', background: colorsDark.background.background02, borderRadius: '8px' }}>
          <div style={{ padding: '12px', border: `1px solid ${colorsDark.dividers.border01}`, marginBottom: '12px', borderRadius: '6px' }}>
            <span style={{ color: colorsDark.text.secondary }}>Border 01 (Darkest)</span>
          </div>
          <div style={{ padding: '12px', border: `1px solid ${colorsDark.dividers.border02}`, marginBottom: '12px', borderRadius: '6px' }}>
            <span style={{ color: colorsDark.text.secondary }}>Border 02 (Medium)</span>
          </div>
          <div style={{ padding: '12px', border: `1px solid ${colorsDark.dividers.border03}`, borderRadius: '6px' }}>
            <span style={{ color: colorsDark.text.secondary }}>Border 03 (Lighter)</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllColorsDark: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: colorsDark.background.background01, padding: '32px', minHeight: '100vh' }}>
      <h1 style={{ color: colorsDark.text.primary, fontSize: '32px', marginBottom: '8px' }}>
        Apex Mobile - Dark Theme Colors
      </h1>
      <p style={{ color: colorsDark.text.secondary, marginBottom: '32px' }}>
        Complete color system from Figma design tokens
      </p>

      <ColorSection title="Highlights">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsDark.highlights.brandSolid} name="Brand Solid" />
          <ColorSwatch color={colorsDark.highlights.brandBackground} name="Brand Background" />
          <ColorSwatch color={colorsDark.highlights.bitcoin} name="Bitcoin" />
          <ColorSwatch color={colorsDark.highlights.buy} name="Buy" />
          <ColorSwatch color={colorsDark.highlights.sell} name="Sell" />
          <ColorSwatch color={colorsDark.highlights.error} name="Error" />
        </div>
      </ColorSection>

      <ColorSection title="Text & Forms">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsDark.text.primary} name="Text Primary" />
          <ColorSwatch color={colorsDark.text.secondary} name="Text Secondary" />
          <ColorSwatch color={colorsDark.forms.background} name="Form Background" />
          <ColorSwatch color={colorsDark.forms.border} name="Form Border" />
        </div>
      </ColorSection>

      <ColorSection title="Backgrounds & Dividers">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <ColorSwatch color={colorsDark.background.background01} name="Background 01" />
          <ColorSwatch color={colorsDark.background.background02} name="Background 02" />
          <ColorSwatch color={colorsDark.dividers.border01} name="Border 01" />
          <ColorSwatch color={colorsDark.dividers.border02} name="Border 02" />
        </div>
      </ColorSection>

      <div style={{
        marginTop: '40px',
        padding: '24px',
        background: colorsDark.background.background02,
        borderRadius: '12px',
        border: `1px solid ${colorsDark.dividers.border02}`,
      }}>
        <h3 style={{ color: colorsDark.text.primary, marginBottom: '12px' }}>Usage Example</h3>
        <pre style={{
          color: colorsDark.text.secondary,
          fontFamily: 'monospace',
          fontSize: '14px',
          margin: 0,
          overflow: 'auto',
        }}>
{`import { colors } from '@/tokens';

// Use in your components
const button = {
  background: colors.highlights.brandSolid,
  color: colors.text.primary,
  border: \`1px solid \${colors.dividers.border02}\`
};`}
        </pre>
      </div>
    </div>
  ),
};
