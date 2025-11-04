import React from 'react';
import './PriceCard.css';

export interface PriceCardProps {
  /** Cryptocurrency name */
  name: string;
  /** Cryptocurrency symbol (e.g., BTC, ETH) */
  symbol: string;
  /** Current price */
  price: number;
  /** 24h price change percentage */
  change24h: number;
  /** Card variant */
  variant?: 'compact' | 'detailed';
  /** Loading state */
  isLoading?: boolean;
  /** Error state */
  hasError?: boolean;
}

/**
 * Price Card Component
 *
 * Displays cryptocurrency price information with 24h change
 * Paste Figma component here for reference
 */
export const PriceCard: React.FC<PriceCardProps> = ({
  name,
  symbol,
  price,
  change24h,
  variant = 'compact',
  isLoading = false,
  hasError = false,
}) => {
  const isPositive = change24h >= 0;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  if (isLoading) {
    return (
      <div className={`price-card price-card--${variant} price-card--loading`}>
        <div className="skeleton skeleton--text" />
        <div className="skeleton skeleton--price" />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`price-card price-card--${variant} price-card--error`}>
        <p>Failed to load price data</p>
      </div>
    );
  }

  return (
    <div className={`price-card price-card--${variant}`}>
      <div className="price-card__header">
        <div className="price-card__icon">{symbol.charAt(0)}</div>
        <div className="price-card__info">
          <h3 className="price-card__name">{name}</h3>
          <span className="price-card__symbol">{symbol}</span>
        </div>
      </div>

      <div className="price-card__body">
        <div className="price-card__price">{formattedPrice}</div>
        <div className={`price-card__change ${isPositive ? 'positive' : 'negative'}`}>
          <span className="price-card__change-icon">{isPositive ? '▲' : '▼'}</span>
          <span>{Math.abs(change24h).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};
