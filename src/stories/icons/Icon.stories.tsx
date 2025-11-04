import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../components/icons/Icon';
import type { IconName } from '../../components/icons/Icon';
import { colorsDark } from '../../tokens/colors';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'activity', 'add', 'back', 'barcode', 'buy', 'check',
        'clock', 'close', 'convert', 'dashboard', 'deposit', 'dropdown',
        'email', 'eye', 'forward', 'markets', 'plus', 'point-down',
        'point-left', 'point-right', 'point-up', 'profile', 'receive',
        'search', 'sell', 'send', 'settings', 'star', 'wallet', 'withdraw'
      ],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'wallet',
    color: colorsDark.highlights.brandSolid,
  },
};

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      'activity', 'add', 'back', 'barcode', 'buy', 'check',
      'clock', 'close', 'convert', 'dashboard', 'deposit', 'dropdown',
      'email', 'eye', 'forward', 'markets', 'plus', 'point-down',
      'point-left', 'point-right', 'point-up', 'profile', 'receive',
      'search', 'sell', 'send', 'settings', 'star', 'wallet', 'withdraw'
    ];

    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '32px',
        borderRadius: '12px',
        maxWidth: '800px',
      }}>
        <h2 style={{ color: colorsDark.text.primary, marginBottom: '24px' }}>Icon Library (20x20px)</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
        }}>
          {icons.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                background: colorsDark.background.background02,
                borderRadius: '8px',
                border: `1px solid ${colorsDark.dividers.border02}`,
              }}
            >
              <Icon name={iconName} color={colorsDark.text.secondary} />
              <span style={{
                color: colorsDark.text.secondary,
                fontSize: '11px',
                marginTop: '8px',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}>
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
