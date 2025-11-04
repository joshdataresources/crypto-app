import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../../tokens/typography';
import { colorsDark } from '../../tokens/colors';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {
  render: () => {
    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '1000px',
      }}>
        <h1 style={{
          color: colorsDark.text.primary,
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '32px',
        }}>
          Typography System
        </h1>

        {/* Headline */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            color: colorsDark.text.secondary,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            Headline · 28px
          </div>

          <div style={{
            ...typography.headline.bold,
            color: colorsDark.text.primary,
            marginBottom: '8px',
          }}>
            Headline-Bold · 28/Auto
          </div>

          <div style={{
            ...typography.headline.regular,
            color: colorsDark.text.primary,
          }}>
            Headline-Reg · 28/Auto
          </div>
        </div>

        {/* Sub-Headline */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            color: colorsDark.text.secondary,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            Sub-Headline · 20px
          </div>

          <div style={{
            ...typography.subHeadline.bold,
            color: colorsDark.text.primary,
            marginBottom: '8px',
          }}>
            Sub-Headline-Bold · 20/22
          </div>

          <div style={{
            ...typography.subHeadline.regular,
            color: colorsDark.text.primary,
          }}>
            Sub-Headline-Reg · 20/22
          </div>
        </div>

        {/* Text */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            color: colorsDark.text.secondary,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            Text · 16px
          </div>

          <div style={{
            ...typography.text.bold,
            color: colorsDark.text.primary,
            marginBottom: '8px',
          }}>
            Text-Bold · 16/Auto
          </div>

          <div style={{
            ...typography.text.regular,
            color: colorsDark.text.primary,
          }}>
            Text-Reg · 16/Auto
          </div>
        </div>

        {/* Body */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            color: colorsDark.text.secondary,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            Body · 14px
          </div>

          <div style={{
            ...typography.body.bold,
            color: colorsDark.text.primary,
            marginBottom: '8px',
          }}>
            Body-Bold · 14/Auto
          </div>

          <div style={{
            ...typography.body.regular,
            color: colorsDark.text.primary,
          }}>
            Body-Reg · 14/Auto
          </div>
        </div>

        {/* Caption */}
        <div>
          <div style={{
            color: colorsDark.text.secondary,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            Caption · 12px
          </div>

          <div style={{
            ...typography.caption.bold,
            color: colorsDark.text.primary,
            marginBottom: '8px',
          }}>
            Caption-Bold · 12/Auto
          </div>

          <div style={{
            ...typography.caption.regular,
            color: colorsDark.text.primary,
          }}>
            Caption-Reg · 12/Auto
          </div>
        </div>
      </div>
    );
  },
};

export const TypographyScale: Story = {
  render: () => {
    const variants = [
      { name: 'Headline', style: typography.headline.bold },
      { name: 'Sub-Headline', style: typography.subHeadline.bold },
      { name: 'Text', style: typography.text.bold },
      { name: 'Body', style: typography.body.bold },
      { name: 'Caption', style: typography.caption.bold },
    ];

    return (
      <div style={{
        background: colorsDark.background.background01,
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '1000px',
      }}>
        <h2 style={{
          color: colorsDark.text.primary,
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '24px',
        }}>
          Typography Scale
        </h2>

        {variants.map(({ name, style }) => (
          <div
            key={name}
            style={{
              marginBottom: '24px',
              padding: '16px',
              background: colorsDark.background.background02,
              borderRadius: '8px',
              border: `1px solid ${colorsDark.dividers.border02}`,
            }}
          >
            <div style={{
              ...style,
              color: colorsDark.text.primary,
              marginBottom: '8px',
            }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{
              fontSize: '11px',
              color: colorsDark.text.disabled,
              fontFamily: 'monospace',
            }}>
              {name} · {style.fontSize} · {style.fontWeight}
            </div>
          </div>
        ))}
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
        maxWidth: '600px',
      }}>
        {/* Header */}
        <div style={{
          ...typography.headline.bold,
          color: colorsDark.text.primary,
          marginBottom: '8px',
        }}>
          Bitcoin Price
        </div>

        <div style={{
          ...typography.text.regular,
          color: colorsDark.text.secondary,
          marginBottom: '24px',
        }}>
          Last updated 5 minutes ago
        </div>

        {/* Price Card */}
        <div style={{
          background: colorsDark.background.background02,
          padding: '24px',
          borderRadius: '12px',
          border: `1px solid ${colorsDark.dividers.border02}`,
          marginBottom: '24px',
        }}>
          <div style={{
            ...typography.caption.regular,
            color: colorsDark.text.disabled,
            marginBottom: '8px',
          }}>
            CURRENT PRICE
          </div>

          <div style={{
            ...typography.headline.bold,
            color: colorsDark.text.primary,
            marginBottom: '4px',
          }}>
            $45,234.89
          </div>

          <div style={{
            ...typography.body.regular,
            color: colorsDark.highlights.buy,
          }}>
            +2.45% ($1,082.34)
          </div>
        </div>

        {/* Description */}
        <div style={{
          ...typography.subHeadline.bold,
          color: colorsDark.text.primary,
          marginBottom: '12px',
        }}>
          Market Overview
        </div>

        <div style={{
          ...typography.body.regular,
          color: colorsDark.text.secondary,
          lineHeight: '20px',
        }}>
          Bitcoin continues to show strong momentum as institutional adoption grows.
          The recent rally has been driven by increased demand from both retail and
          institutional investors.
        </div>
      </div>
    );
  },
};
