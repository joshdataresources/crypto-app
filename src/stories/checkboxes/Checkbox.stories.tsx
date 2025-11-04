import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/checkboxes/Checkbox';
import { useState } from 'react';

const meta = {
  title: 'Components/Checkboxes/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Custom checkbox component from the apex-mobile-v6-dark design system.

## Purpose
Checkbox for selection in forms, lists, and multi-select scenarios.

## Features
- **28px size**: Fixed square dimensions
- **Three states**: Default (unchecked), Selected (blue), Fixed (secondary/non-interactive)
- **Custom check icon**: SVG checkmark
- **6px border radius**: Rounded corners
- **Accessible**: Keyboard navigation and ARIA attributes

## States
- **default**: Unchecked with dark border (#151A27)
- **selected**: Checked with blue border (#297FFF)
- **fixed**: Checked with secondary border (#9BAACE) - non-interactive

## Usage Example

\`\`\`tsx
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'selected', 'fixed'],
      description: 'Visual state of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether checkbox is disabled',
    },
    onChange: {
      description: 'Change handler when checkbox is clicked',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (Unchecked)
export const Default: Story = {
  args: {
    state: 'default',
    checked: false,
  },
};

// Selected (Checked with blue border)
export const Selected: Story = {
  args: {
    state: 'selected',
    checked: true,
  },
};

// Fixed (Checked with secondary border - non-interactive)
export const Fixed: Story = {
  args: {
    state: 'fixed',
    checked: true,
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Checkbox
          checked={checked}
          onChange={setChecked}
        />
        <p style={{ color: '#9BAACE', fontSize: '12px', marginTop: '8px' }}>
          Status: <strong style={{ color: checked ? '#00C938' : '#F62967' }}>
            {checked ? 'Checked' : 'Unchecked'}
          </strong>
        </p>
      </div>
    );
  },
};

// With Label
export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Checkbox
          checked={checked}
          onChange={setChecked}
        />
        <label
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontFamily: 'Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
            cursor: 'pointer',
          }}
          onClick={() => setChecked(!checked)}
        >
          I agree to the terms and conditions
        </label>
      </div>
    );
  },
};

// Multiple Checkboxes
export const MultipleCheckboxes: Story = {
  render: () => {
    const [options, setOptions] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (key: keyof typeof options) => {
      setOptions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Checkbox
            checked={options.option1}
            onChange={() => handleChange('option1')}
          />
          <span style={{ color: '#FFFFFF', fontSize: '14px' }}>Option 1</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Checkbox
            checked={options.option2}
            onChange={() => handleChange('option2')}
          />
          <span style={{ color: '#FFFFFF', fontSize: '14px' }}>Option 2</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Checkbox
            checked={options.option3}
            onChange={() => handleChange('option3')}
          />
          <span style={{ color: '#FFFFFF', fontSize: '14px' }}>Option 3</span>
        </div>
      </div>
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Checkbox checked={false} disabled={true} />
          <span style={{ color: '#9BAACE', fontSize: '14px' }}>Disabled unchecked</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Checkbox checked={true} disabled={true} />
          <span style={{ color: '#9BAACE', fontSize: '14px' }}>Disabled checked</span>
        </div>
      </div>
    );
  },
};

// All States
export const AllStates: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Default (Unchecked)
          </h4>
          <Checkbox state="default" checked={false} />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Selected (Blue border)
          </h4>
          <Checkbox state="selected" checked={true} />
        </div>
        <div>
          <h4 style={{ color: '#9BAACE', marginBottom: '12px', fontSize: '12px' }}>
            Fixed (Secondary border - non-interactive)
          </h4>
          <Checkbox state="fixed" checked={true} />
        </div>
      </div>
    );
  },
};

// In a List
export const InList: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['item2']);

    const items = [
      { id: 'item1', label: 'BTC/USDT', secondary: 'Bitcoin / Tether' },
      { id: 'item2', label: 'ETH/USDT', secondary: 'Ethereum / Tether' },
      { id: 'item3', label: 'BNB/USDT', secondary: 'Binance Coin / Tether' },
    ];

    const toggleItem = (id: string) => {
      setSelected(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    };

    return (
      <div style={{ width: '300px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: selected.includes(item.id) ? '#2A303C' : '#373E4D',
              borderBottom: '1px solid #283043',
              cursor: 'pointer',
            }}
            onClick={() => toggleItem(item.id)}
          >
            <Checkbox checked={selected.includes(item.id)} onChange={() => toggleItem(item.id)} />
            <div>
              <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700 }}>
                {item.label}
              </div>
              <div style={{ color: '#9BAACE', fontSize: '12px' }}>
                {item.secondary}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
