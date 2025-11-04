'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Info } from 'lucide-react';

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
}

interface PricingCardProps {
  productName: string;
  productLogo: string;
  productColor: string;
  tiers?: PricingTier[];
  singlePrice?: {
    monthly: number;
    annual: number;
  };
  features: string[];
  setupFee?: number;
  additionalCosts?: {
    label: string;
    price: string;
  }[];
  bonusOffer?: string;
  isAnnual: boolean;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
  popular?: boolean;
}

export default function PricingCard({
  productName,
  productLogo,
  productColor,
  tiers,
  singlePrice,
  features,
  setupFee,
  additionalCosts,
  bonusOffer,
  isAnnual,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  badge,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden ${
        popular ? 'ring-4 ring-product-fss-green scale-105' : ''
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-product-fss-green text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
          MOST POPULAR
        </div>
      )}

      {/* Custom Badge */}
      {badge && !popular && (
        <div
          className="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm"
          style={{ backgroundColor: productColor }}
        >
          {badge}
        </div>
      )}

      {/* Product Header */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <Image src={productLogo} alt={productName} width={48} height={48} className="w-12 h-12" />
          <h3 className="text-2xl font-bold text-brand-navy">{productName}</h3>
        </div>

        {/* Pricing Display */}
        {tiers ? (
          <div className="space-y-4">
            {tiers.map((tier, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-600">{tier.name}:</span>
                  <span className="text-3xl font-bold text-brand-navy">
                    £{isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && tier.monthlyPrice * 12 > tier.annualPrice && (
                  <p className="text-sm text-product-fss-green font-semibold">
                    Save £{tier.monthlyPrice * 12 - tier.annualPrice}/year
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-1">{tier.description}</p>
              </div>
            ))}
          </div>
        ) : singlePrice ? (
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-brand-navy">
                £{isAnnual ? singlePrice.annual : singlePrice.monthly}
              </span>
              <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
            </div>
            {isAnnual && singlePrice.monthly * 12 > singlePrice.annual && (
              <p className="text-sm text-product-fss-green font-semibold">
                Save £{singlePrice.monthly * 12 - singlePrice.annual}/year
              </p>
            )}
          </div>
        ) : null}

        {/* Setup Fee */}
        {setupFee && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-900">One-time setup fee</p>
              <p className="text-sm text-amber-700">£{setupFee} per installation</p>
            </div>
          </div>
        )}

        {/* Additional Costs */}
        {additionalCosts && additionalCosts.length > 0 && (
          <div className="mt-4 space-y-2">
            {additionalCosts.map((cost, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{cost.label}</span>
                <span className="font-semibold text-brand-navy">{cost.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bonus Offer */}
        {bonusOffer && (
          <div
            className="mt-4 p-3 rounded-lg text-white text-sm font-semibold"
            style={{ backgroundColor: productColor }}
          >
            {bonusOffer}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="p-8">
        <h4 className="font-bold text-brand-navy mb-4">What&apos;s Included:</h4>
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
          className="block w-full text-center py-4 rounded-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: productColor }}
        >
          {ctaText}
        </Link>
        <p className="text-center text-sm text-gray-500 mt-3">14-day free trial • No credit card required</p>
      </div>
    </div>
  );
}
