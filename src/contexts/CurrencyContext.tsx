/**
 * Currency Context
 *
 * Provides global currency state management for the application.
 * Handles currency selection, conversion, and formatting.
 */

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Currency } from '@/types/currency';
import { formatPrice as formatPriceUtil, convertPrice as convertPriceUtil } from '@/lib/currency';

interface CurrencyContextType {
  currency: Currency;
  rates: Record<string, number>;
  ratesDate: string;
  setCurrency: (currency: Currency) => void;
  convertPrice: (gbpPrice: number) => number;
  formatPrice: (amount: number, currency?: Currency) => string;
  isCurrencySupported: (currency: string) => boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
  initialCurrency?: Currency;
  initialRates?: Record<string, number>;
  initialRatesDate?: string;
}

export function CurrencyProvider({
  children,
  initialCurrency = 'GBP',
  initialRates = {},
  initialRatesDate = new Date().toISOString().split('T')[0],
}: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);
  const [rates] = useState<Record<string, number>>(initialRates);
  const [ratesDate] = useState<string>(initialRatesDate);

  // Load currency preference from cookie on mount (client-side)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookieCurrency = document.cookie
        .split('; ')
        .find(row => row.startsWith('preferred_currency='))
        ?.split('=')[1];

      if (cookieCurrency && isCurrencySupported(cookieCurrency)) {
        setCurrencyState(cookieCurrency as Currency);
      }
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);

    // Update cookie
    if (typeof window !== 'undefined') {
      document.cookie = `preferred_currency=${newCurrency}; path=/; max-age=2592000; SameSite=Lax`;
    }
  };

  const convertPrice = (gbpPrice: number): number => {
    if (currency === 'GBP') {
      return gbpPrice;
    }

    return convertPriceUtil(gbpPrice, currency, rates);
  };

  const formatPrice = (amount: number, targetCurrency?: Currency): string => {
    const currencyToUse = targetCurrency || currency;
    return formatPriceUtil(amount, currencyToUse);
  };

  const isCurrencySupported = (curr: string): boolean => {
    const supported: Currency[] = ['GBP', 'USD', 'EUR', 'CAD', 'AUD', 'NZD'];
    return supported.includes(curr as Currency);
  };

  const value: CurrencyContextType = {
    currency,
    rates,
    ratesDate,
    setCurrency,
    convertPrice,
    formatPrice,
    isCurrencySupported,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

/**
 * Hook to access currency context
 * Must be used within CurrencyProvider
 */
export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
