'use client';

import Link from 'next/link';
import { Check, TrendingDown } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

interface PackageProduct {
  name: string;
  includedTier?: string;
}

interface PackageCardProps {
  packageName: string;
  description: string;
  products: PackageProduct[];
  monthlyPrice: number;
  annualPrice: number;
  regularMonthlyPrice: number;
  regularAnnualPrice: number;
  isAnnual: boolean;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  popular?: boolean;
  gradient?: string;
}

export default function PackageCard({
  packageName,
  description,
  products,
  monthlyPrice,
  annualPrice,
  regularMonthlyPrice,
  regularAnnualPrice,
  isAnnual,
  features,
  ctaText = 'Get This Bundle',
  ctaLink = '/contact',
  popular = false,
  gradient = 'from-product-fss-green to-product-fss-green-dark',
}: PackageCardProps) {
  const { convertPrice, formatPrice } = useCurrency();

  const currentPrice = isAnnual ? annualPrice : monthlyPrice;
  const regularPrice = isAnnual ? regularAnnualPrice : regularMonthlyPrice;
  const savings = regularPrice - currentPrice;
  const savingsPercent = Math.round((savings / regularPrice) * 100);

  // Convert prices to selected currency
  const convertedCurrentPrice = convertPrice(currentPrice);
  const convertedRegularPrice = convertPrice(regularPrice);
  const convertedSavings = convertPrice(savings);

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden ${
        popular ? 'ring-4 ring-product-fss-green scale-105' : ''
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-product-fss-green text-white px-6 py-2 rounded-bl-2xl font-bold text-sm z-10">
          BEST VALUE
        </div>
      )}

      {/* Header with Gradient */}
      <div className={`bg-gradient-to-br ${gradient} p-8 text-white`}>
        <h3 className="text-2xl font-bold mb-2">{packageName}</h3>
        <p className="text-white/90 mb-6">{description}</p>

        {/* Products Included */}
        <div className="space-y-2 mb-6">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">
                {product.name}
                {product.includedTier && (
                  <span className="text-white/80 text-sm ml-1">({product.includedTier})</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-5xl font-bold">{formatPrice(convertedCurrentPrice)}</span>
          <span className="text-xl">/{isAnnual ? 'year' : 'month'}</span>
        </div>

        {/* Savings */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white/80 line-through text-lg">{formatPrice(convertedRegularPrice)}</span>
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <TrendingDown className="w-4 h-4" />
            <span className="font-bold text-sm">Save {savingsPercent}%</span>
          </div>
        </div>

        <p className="text-sm text-white/90">
          Save {formatPrice(convertedSavings)} {isAnnual ? 'per year' : 'per month'} vs buying separately
        </p>
      </div>

      {/* Features */}
      <div className="p-8">
        <h4 className="font-bold text-brand-navy mb-4">Bundle Benefits:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-product-fss-green flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-8 pt-0">
        <Link
          href={ctaLink}
          className={`block w-full text-center py-4 rounded-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-r ${gradient}`}
        >
          {ctaText}
        </Link>
        <p className="text-center text-sm text-gray-500 mt-3">14-day free trial • No commitment required</p>
      </div>
    </div>
  );
}
