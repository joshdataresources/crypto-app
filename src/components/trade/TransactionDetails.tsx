import React from 'react';
import './TransactionDetails.css';

export interface TransactionDetailRow {
  /** Label text (e.g., "Market Price", "Fees") */
  label: string;
  /** Value text (e.g., "18,880.50", "0.00000000") */
  value: string;
  /** Asset symbol (e.g., "USD", "BTC") */
  asset?: string;
}

export interface TransactionDetailsProps {
  /** Array of detail rows to display */
  rows: TransactionDetailRow[];
  /** Additional CSS class */
  className?: string;
}

/**
 * TransactionDetails Component
 *
 * Summary section showing transaction details (price, fees, totals) from apex-mobile-v6-dark design system
 *
 * Features:
 * - Two-column layout: Labels on left, values on right
 * - Asset symbols aligned to the right
 * - Secondary text for labels (#9BAACE)
 * - White bold text for values
 * - 12px labels, 14px values
 * - 4px spacing between rows
 *
 * Usage:
 * - Shown below order input fields
 * - Displays Market Price, Fees, Order Total, Net, etc.
 * - Asset symbols (USD, BTC) shown on far right
 */
export const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  rows,
  className = '',
}) => {
  return (
    <div className={`transaction-details ${className}`}>
      <div className="transaction-details__values">
        {rows.map((row, index) => (
          <div key={index} className="transaction-details__row">
            <span className="transaction-details__label">{row.label}</span>
            <div className="transaction-details__value-container">
              <span className="transaction-details__value">{row.value}</span>
              {row.asset && (
                <span className="transaction-details__asset">{row.asset}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
