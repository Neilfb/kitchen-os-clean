'use client';

/**
 * SubscriptionCard Component
 *
 * Displays SaaS subscription products (Food Safe System, Food Label System, etc.)
 * Routes to product pages for demo booking rather than direct purchase.
 */

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

interface SubscriptionCardProps {
  name: string;
  tagline: string;
  priceFrom: string;
  features: string[];
  href: string;
  logoSrc: string;
  gradientFrom: string;
  gradientTo: string;
}

export function SubscriptionCard({
  name,
  tagline,
  priceFrom,
  features,
  href,
  logoSrc,
  gradientFrom,
  gradientTo,
}: SubscriptionCardProps) {
  return (
    <div
      className={`
      bg-gradient-to-br ${gradientFrom} ${gradientTo}
      rounded-2xl shadow-lg hover:shadow-xl transition-all p-8
      border-2 border-gray-200 hover:border-gray-300
    `}
    >
      {/* Logo */}
      <div className="mb-6">
        <img src={logoSrc} alt={name} className="h-12 w-auto" />
      </div>

      {/* Title & Tagline */}
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-700 mb-4">{tagline}</p>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 text-gray-900">
          <span className="text-sm font-medium">From</span>
          <span className="text-3xl font-bold">{priceFrom}</span>
          <span className="text-sm">/month</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-900" />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={href}
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex-1"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-900"
        >
          Book Demo
        </Link>
      </div>
    </div>
  );
}
