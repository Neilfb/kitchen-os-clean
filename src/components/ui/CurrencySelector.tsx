/**
 * Currency Selector Component
 *
 * Dropdown selector allowing users to manually override their currency preference.
 * Displays currency code, symbol, and name.
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import type { Currency } from '@/types/currency';

interface CurrencyOption {
  code: Currency;
  symbol: string;
  name: string;
  flag: string;
}

const currencies: CurrencyOption[] = [
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'AU$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', flag: '🇳🇿' },
];

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCurrency = currencies.find(c => c.code === currency) || currencies[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (code: Currency) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
        aria-label="Select currency"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-lg">{selectedCurrency.flag}</span>
        <span className="font-semibold text-gray-900">{selectedCurrency.code}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[240px] overflow-hidden">
          <div className="py-1">
            {currencies.map(curr => (
              <button
                key={curr.code}
                onClick={() => handleSelect(curr.code)}
                className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors ${
                  curr.code === currency ? 'bg-green-50' : ''
                }`}
              >
                <span className="text-xl">{curr.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{curr.code}</span>
                    <span className="text-gray-600">{curr.symbol}</span>
                  </div>
                  <div className="text-xs text-gray-500">{curr.name}</div>
                </div>
                {curr.code === currency && (
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
            <p className="text-xs text-gray-500">
              Prices converted from GBP using daily exchange rates
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
