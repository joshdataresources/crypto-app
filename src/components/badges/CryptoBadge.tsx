import React from 'react';
import './CryptoBadge.css';

// Import badge SVGs
import BadgeADA from '../../assets/badges/Property 1=BadgeADA.svg';
import BadgeBCH from '../../assets/badges/Property 1=BadgeBCH.svg';
import BadgeBTC from '../../assets/badges/Property 1=BadgeBTC.svg';
import BadgeDASH from '../../assets/badges/Property 1=BadgeDASH.svg';
import BadgeETH from '../../assets/badges/Property 1=BadgeETH.svg';
import BadgeLTC from '../../assets/badges/Property 1=BadgeLTC.svg';
import BadgeMIOTA from '../../assets/badges/Property 1=BadgeMIOTA.svg';
import BadgeUSD from '../../assets/badges/Property 1=BadgeUSD.svg';
import BadgeXMR from '../../assets/badges/Property 1=BadgeXMR.svg';
import BadgeXRP from '../../assets/badges/Property 1=BadgeXRP.svg';

// Cryptocurrency badge types
export type CryptoBadgeName =
  | 'ADA'
  | 'BCH'
  | 'BTC'
  | 'DASH'
  | 'ETH'
  | 'LTC'
  | 'MIOTA'
  | 'USD'
  | 'XMR'
  | 'XRP'
  | 'USDT'; // Alias for USD

export interface CryptoBadgeProps {
  /** Cryptocurrency symbol */
  name: CryptoBadgeName;
  /** Badge size in pixels (minimum 24px, maximum 44px) */
  size?: number;
  /** Additional CSS class */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

// Badge mapping
const badgeMap: Record<CryptoBadgeName, string> = {
  ADA: BadgeADA,
  BCH: BadgeBCH,
  BTC: BadgeBTC,
  DASH: BadgeDASH,
  ETH: BadgeETH,
  LTC: BadgeLTC,
  MIOTA: BadgeMIOTA,
  USD: BadgeUSD,
  USDT: BadgeUSD, // USDT uses USD badge
  XMR: BadgeXMR,
  XRP: BadgeXRP,
};

/**
 * CryptoBadge Component
 *
 * Displays cryptocurrency badge icons with drop shadow
 * All badges are from apex-mobile-v6 design system
 * Sizes: 24px (min) to 44px (max)
 */
export const CryptoBadge: React.FC<CryptoBadgeProps> = ({
  name,
  size = 44,
  className = '',
  onClick,
}) => {
  // Constrain size between 24px and 44px
  const constrainedSize = Math.max(24, Math.min(44, size));
  const badgeSrc = badgeMap[name];

  return (
    <div
      className={`crypto-badge ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        width: constrainedSize,
        height: constrainedSize,
      }}
    >
      <img
        src={badgeSrc}
        alt={`${name} Badge`}
      />
    </div>
  );
};
