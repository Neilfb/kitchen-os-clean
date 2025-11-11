/**
 * Currency Utilities
 *
 * Provides exchange rate fetching, caching, and price formatting
 * for multi-currency support across the Kitchen OS platform.
 */

import { cache } from 'react';

export interface ExchangeRates {
  base: string;
  date: string;
  rates: Record<string, number>;
}

/**
 * Fetch exchange rates from Frankfurter API (European Central Bank data)
 * Cached for 24 hours to balance freshness with performance
 */
export const getExchangeRates = cache(async (): Promise<ExchangeRates> => {
  try {
    const response = await fetch(
      'https://api.frankfurter.app/latest?from=GBP&to=USD,EUR,CAD,AUD,NZD',
      {
        next: { revalidate: 86400 }, // Cache for 24 hours
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Exchange rate API error: ${response.status}`);
    }

    const data = await response.json();
    return data as ExchangeRates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);

    // Fallback rates (approximate, as of late 2024)
    return {
      base: 'GBP',
      date: new Date().toISOString().split('T')[0],
      rates: {
        USD: 1.27,
        EUR: 1.17,
        CAD: 1.76,
        AUD: 1.95,
        NZD: 2.12,
      }
    };
  }
});

/**
 * Format price with proper currency symbol and locale formatting
 */
export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Round to psychological pricing (.99, .95, .00)
 * Makes prices more appealing to customers
 */
export function roundToFriendlyPrice(amount: number): number {
  const rounded = Math.round(amount);

  // For very small amounts (< 5), use .99
  if (amount < 5) {
    return Math.ceil(amount) - 0.01;
  }

  // For amounts ending close to .99, round to .99
  const decimal = amount % 1;
  if (decimal > 0.95) {
    return Math.ceil(amount) - 0.01;
  }

  // For amounts ending around .50-.95, use .95 or .99
  if (decimal > 0.45 && decimal < 0.95) {
    return Math.floor(amount) + 0.99;
  }

  // For clean amounts, keep them round
  if (decimal < 0.05) {
    return rounded;
  }

  // Default: round to .99
  return Math.floor(amount) + 0.99;
}

/**
 * Convert GBP price to target currency using exchange rates
 */
export function convertPrice(
  gbpPrice: number,
  targetCurrency: string,
  rates: Record<string, number>
): number {
  if (targetCurrency === 'GBP') {
    return gbpPrice;
  }

  const rate = rates[targetCurrency];
  if (!rate) {
    console.warn(`Exchange rate not found for ${targetCurrency}, using GBP`);
    return gbpPrice;
  }

  const converted = gbpPrice * rate;
  return roundToFriendlyPrice(converted);
}

/**
 * Get currency symbol for display
 */
export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    GBP: '£',
    USD: '$',
    EUR: '€',
    CAD: 'CAD$',
    AUD: 'AUD$',
    NZD: 'NZD$',
  };

  return symbols[currency] || currency;
}

/**
 * Get currency name for display
 */
export function getCurrencyName(currency: string): string {
  const names: Record<string, string> = {
    GBP: 'British Pound',
    USD: 'US Dollar',
    EUR: 'Euro',
    CAD: 'Canadian Dollar',
    AUD: 'Australian Dollar',
    NZD: 'New Zealand Dollar',
  };

  return names[currency] || currency;
}
