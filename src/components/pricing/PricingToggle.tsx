'use client';

import { useState } from 'react';

interface PricingToggleProps {
  onChange?: (isAnnual: boolean) => void;
  defaultAnnual?: boolean;
}

export default function PricingToggle({ onChange, defaultAnnual = false }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual);

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual);
    onChange?.(annual);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-12 px-4">
      <button
        onClick={() => handleToggle(false)}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
          !isAnnual
            ? 'bg-product-fss-green text-white shadow-lg scale-105'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
      >
        Monthly
      </button>
      <div className="relative">
        <button
          onClick={() => handleToggle(true)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isAnnual
              ? 'bg-product-fss-green text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          Annual
        </button>
        <span className="absolute -top-3 -right-3 bg-product-allerq-orange text-white text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap shadow-md">
          Save up to 20%
        </span>
      </div>
    </div>
  );
}
