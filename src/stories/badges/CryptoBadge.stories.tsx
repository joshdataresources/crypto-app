import type { Meta, StoryObj } from '@storybook/react';
import { CryptoBadge } from '../../components/badges/CryptoBadge';
import type { CryptoBadgeName } from '../../components/badges/CryptoBadge';
import { colorsDark } from '../../tokens/colors';

const meta: Meta<typeof CryptoBadge> = {
  title: 'Components/CryptoBadge',
  component: CryptoBadge,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['ADA', 'BCH', 'BTC', 'DASH', 'ETH', 'LTC', 'MIOTA', 'USD', 'XMR', 'XRP'],
    },
    size: {
      control: 'select',
      options: [24, 44],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CryptoBadge>;

export const Default: Story = {
  args: {
    name: 'BTC',
    size: 44,
  },
};

export const AllBadges: Story = {
  render: () => {
    const badges: CryptoBadgeName[] = [
      'ADA', 'BCH', 'BTC', 'DASH', 'ETH',
      'LTC', 'MIOTA', 'USD', 'XMR', 'XRP',
    ];

    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '800px',
      }}>
        <h2 style={{
          color: colorsDark.text.primary,
          marginBottom: '8px',
          fontSize: '24px',
          fontWeight: 700,
        }}>
          Cryptocurrency Badges
        </h2>
        <p style={{
          color: colorsDark.text.secondary,
          fontSize: '14px',
          marginBottom: '24px',
        }}>
          All badges shown at 44px
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
        }}>
          {badges.map((badgeName) => (
            <div
              key={badgeName}
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
              <CryptoBadge name={badgeName} size={44} />
              <span style={{
                color: colorsDark.text.secondary,
                fontSize: '12px',
                marginTop: '8px',
                fontWeight: 600,
              }}>
                {badgeName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes: Array<24 | 44> = [24, 44];

    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '40px',
        borderRadius: '12px',
      }}>
        <h2 style={{
          color: colorsDark.text.primary,
          marginBottom: '24px',
          fontSize: '24px',
          fontWeight: 700,
        }}>
          Badge Sizes
        </h2>

        <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'flex-end',
        }}>
          {sizes.map((size) => (
            <div
              key={size}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '24px',
                background: colorsDark.background.background02,
                borderRadius: '8px',
                border: `1px solid ${colorsDark.dividers.border02}`,
              }}
            >
              <CryptoBadge name="BTC" size={size} />
              <div style={{
                color: colorsDark.text.secondary,
                fontSize: '14px',
                fontWeight: 600,
              }}>
                {size}px
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const UsageExample: Story = {
  render: () => {
    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '400px',
      }}>
        {/* Header with Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <CryptoBadge name="BTC" size={44} />
          <div>
            <h2 style={{
              color: colorsDark.text.primary,
              fontSize: '24px',
              fontWeight: 700,
              margin: 0,
            }}>
              Bitcoin
            </h2>
            <div style={{
              color: colorsDark.text.secondary,
              fontSize: '14px',
            }}>
              BTC
            </div>
          </div>
        </div>

        {/* Price Card */}
        <div style={{
          background: colorsDark.background.background02,
          padding: '20px',
          borderRadius: '12px',
          border: `1px solid ${colorsDark.dividers.border02}`,
        }}>
          <div style={{
            color: colorsDark.text.disabled,
            fontSize: '12px',
            marginBottom: '8px',
          }}>
            CURRENT PRICE
          </div>

          <div style={{
            color: colorsDark.text.primary,
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '4px',
          }}>
            $45,234.89
          </div>

          <div style={{
            color: colorsDark.highlights.buy,
            fontSize: '16px',
          }}>
            +2.45% ($1,082.34)
          </div>
        </div>

        {/* Portfolio List */}
        <div style={{ marginTop: '24px' }}>
          <h3 style={{
            color: colorsDark.text.primary,
            fontSize: '16px',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            Your Portfolio
          </h3>

          {(['BTC', 'ETH', 'ADA'] as CryptoBadgeName[]).map((crypto) => (
            <div
              key={crypto}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: colorsDark.background.background02,
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            >
              <CryptoBadge name={crypto} size={24} />
              <div style={{ flex: 1 }}>
                <div style={{
                  color: colorsDark.text.primary,
                  fontSize: '14px',
                  fontWeight: 600,
                }}>
                  {crypto}
                </div>
              </div>
              <div style={{
                color: colorsDark.text.primary,
                fontSize: '14px',
                fontWeight: 600,
              }}>
                0.245
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
