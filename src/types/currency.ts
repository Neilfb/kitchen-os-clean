/**
 * Currency Type Definitions
 *
 * TypeScript types and interfaces for the multi-currency system.
 */

/**
 * Supported currency codes
 */
export type Currency = 'GBP' | 'USD' | 'EUR' | 'CAD' | 'AUD' | 'NZD';

/**
 * Exchange rate data structure
 */
export interface ExchangeRateData {
  base: Currency;
  date: string;
  rates: Record<string, number>;
  lastUpdated?: string;
}

/**
 * Product pricing with currency information
 */
export interface ProductPricing {
  /** Base price in GBP (source of truth) */
  priceGBP: number;
  /** Currency to display to user */
  displayCurrency: Currency;
  /** Converted price in display currency */
  displayPrice: number;
  /** Exchange rate used for conversion */
  exchangeRate: number;
  /** Date of exchange rate */
  rateDate: string;
}

/**
 * Currency context state
 */
export interface CurrencyContextState {
  /** Currently selected currency */
  currency: Currency;
  /** Available exchange rates */
  rates: Record<string, number>;
  /** Exchange rate data timestamp */
  ratesDate: string;
  /** Function to change currency */
  setCurrency: (currency: Currency) => void;
  /** Convert GBP price to current currency */
  convertPrice: (gbpPrice: number) => number;
  /** Format price with currency symbol */
  formatPrice: (amount: number, currency?: Currency) => string;
  /** Check if currency is available */
  isCurrencySupported: (currency: string) => boolean;
}

/**
 * Currency selector option
 */
export interface CurrencyOption {
  code: Currency;
  symbol: string;
  name: string;
  flag?: string;
}

/**
 * Geolocation data from middleware
 */
export interface GeolocationData {
  country?: string;
  city?: string;
  region?: string;
  detectedCurrency?: Currency;
}
