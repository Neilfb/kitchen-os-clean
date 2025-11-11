/**
 * Price Component
 *
 * Displays prices with automatic currency conversion.
 * Shows GBP base price and converts to user's preferred currency.
 */

'use client';

import { useCurrency } from '@/contexts/CurrencyContext';
import type { Currency } from '@/types/currency';

interface PriceProps {
  /** Base price in GBP (source of truth) */
  gbpPrice: number;
  /** Optional: Override currency for this specific price */
  currency?: Currency;
  /** Optional: Custom CSS classes */
  className?: string;
  /** Optional: Show currency code after symbol */
  showCode?: boolean;
  /** Optional: Show "from" prefix for starting prices */
  showFrom?: boolean;
}

export function Price({
  gbpPrice,
  currency: overrideCurrency,
  className = '',
  showCode = true,
  showFrom = false,
}: PriceProps) {
  const { currency: contextCurrency, convertPrice, formatPrice } = useCurrency();

  // Use override currency if provided, otherwise use context currency
  const displayCurrency = overrideCurrency || contextCurrency;

  // Convert price if not GBP
  const displayPrice = displayCurrency === 'GBP'
    ? gbpPrice
    : convertPrice(gbpPrice);

  // Format with currency symbol
  const formattedPrice = formatPrice(displayPrice, displayCurrency);

  return (
    <span className={className}>
      {showFrom && 'From '}
      {formattedPrice}
      {showCode && displayCurrency !== 'GBP' && (
        <span className="text-sm ml-1 opacity-75">{displayCurrency}</span>
      )}
    </span>
  );
}

/**
 * Price Range Component
 * Shows a range of prices (e.g., "£15 - £50")
 */
interface PriceRangeProps {
  minGbpPrice: number;
  maxGbpPrice: number;
  className?: string;
  showCode?: boolean;
}

export function PriceRange({
  minGbpPrice,
  maxGbpPrice,
  className = '',
  showCode = true,
}: PriceRangeProps) {
  const { currency, convertPrice, formatPrice } = useCurrency();

  const minPrice = currency === 'GBP' ? minGbpPrice : convertPrice(minGbpPrice);
  const maxPrice = currency === 'GBP' ? maxGbpPrice : convertPrice(maxGbpPrice);

  const formattedMin = formatPrice(minPrice, currency);
  const formattedMax = formatPrice(maxPrice, currency);

  return (
    <span className={className}>
      {formattedMin} - {formattedMax}
      {showCode && currency !== 'GBP' && (
        <span className="text-sm ml-1 opacity-75">{currency}</span>
      )}
    </span>
  );
}

/**
 * Price with Disclaimer
 * Shows price with conversion disclaimer for non-GBP currencies
 */
interface PriceWithDisclaimerProps extends PriceProps {
  showDisclaimer?: boolean;
}

export function PriceWithDisclaimer({
  gbpPrice,
  currency: overrideCurrency,
  className = '',
  showCode = true,
  showFrom = false,
  showDisclaimer = true,
}: PriceWithDisclaimerProps) {
  const { currency: contextCurrency, ratesDate } = useCurrency();
  const displayCurrency = overrideCurrency || contextCurrency;
  const isConverted = displayCurrency !== 'GBP';

  return (
    <div>
      <Price
        gbpPrice={gbpPrice}
        currency={overrideCurrency}
        className={className}
        showCode={showCode}
        showFrom={showFrom}
      />
      {showDisclaimer && isConverted && (
        <p className="text-xs text-gray-500 mt-1">
          Approx. conversion from £{gbpPrice.toFixed(2)} GBP
          {ratesDate && ` (Rate: ${ratesDate})`}
        </p>
      )}
    </div>
  );
}
