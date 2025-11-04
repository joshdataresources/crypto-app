import React from 'react';
import { CryptoBadge } from './CryptoBadge';
import type { CryptoBadgeName } from './CryptoBadge';
import './BadgePair.css';

export interface BadgePairProps {
  /** Primary (left) badge */
  primary: CryptoBadgeName;
  /** Secondary (right) badge - if not provided, shows single badge */
  secondary?: CryptoBadgeName;
  /** Size of each badge in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * BadgePair Component
 *
 * Displays overlapping crypto badges from apex-mobile-v6-dark design system
 *
 * Features:
 * - Shows two overlapping badges for pairs
 * - Can show single badge when secondary is not provided
 * - 24px default size (configurable)
 * - -8px overlap for pair display
 * - Primary badge has higher z-index (appears on top)
 *
 * Usage:
 * ```tsx
 * // Pair
 * <BadgePair primary="BTC" secondary="USDT" />
 *
 * // Single
 * <BadgePair primary="BTC" />
 * ```
 */
export const BadgePair: React.FC<BadgePairProps> = ({
  primary,
  secondary,
  size = 24,
  className = '',
}) => {
  // Single badge mode
  if (!secondary) {
    return (
      <div className={`badge-pair badge-pair--single ${className}`}>
        <CryptoBadge name={primary} size={size} />
      </div>
    );
  }

  // Pair mode with overlap
  return (
    <div className={`badge-pair badge-pair--pair ${className}`}>
      <div className="badge-pair__primary">
        <CryptoBadge name={primary} size={size} />
      </div>
      <div className="badge-pair__secondary">
        <CryptoBadge name={secondary} size={size} />
      </div>
    </div>
  );
};
