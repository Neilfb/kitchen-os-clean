'use client';

import { useState } from 'react';
import { ArrowRight, Gift, Award } from 'lucide-react';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/JsonLd';
import PricingToggle from '@/components/pricing/PricingToggle';
import PricingCard from '@/components/pricing/PricingCard';
import PackageCard from '@/components/pricing/PackageCard';
import VolumeDiscountTable from '@/components/pricing/VolumeDiscountTable';
import ROICalculator from '@/components/pricing/ROICalculator';
import { CurrencySelector } from '@/components/ui/CurrencySelector';

// Note: Metadata export needs to be in a separate server component file
// For now, this is a client component due to useState

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const faqs = [
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No. All Kitchen OS plans are month-to-month with annual billing options for better savings. You can cancel anytime with 30 days notice. No long-term contracts, no lock-in.',
    },
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to your chosen products - all features, unlimited users, and full support. No credit card required to start. We'll only ask for payment details after you decide to continue.",
    },
    {
      question: 'Can I change my products later?',
      answer: "Absolutely. You can add or remove products at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we'll pro-rate the difference.",
    },
    {
      question: 'What hardware do I need?',
      answer: 'Food Safe System sensors: £200 one-time setup includes sensors and gateway. Food Label System: Tablet and printer included with subscription (no upfront hardware costs). F*** Waste: £300 setup per scale set. AllerQ requires no hardware - just use your existing devices.',
    },
    {
      question: 'Do you offer discounts for multiple locations?',
      answer: 'Yes! AllerQ offers volume discounts: 5% off for 3-5 locations, 10% off for 6-12 locations, and 15% off for 13+ locations. Enterprise customers with 20+ locations get custom pricing. Package deals also available for multi-product setups.',
    },
    {
      question: 'Is support included?',
      answer: 'Yes. All products include unlimited support during business hours. Phone, email, and chat support available. Enterprise customers get dedicated account managers and priority 24/7 support.',
    },
    {
      question: 'Can I mix and match products?',
      answer: 'Absolutely! Choose any combination of products that fits your needs. Our package deals offer savings when you bundle products together. Start with one product and add more anytime.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, Amex) via our secure payment partner Revolut. Enterprise customers can pay by bank transfer or invoice with NET 30 terms.',
    },
    {
      question: 'What are the setup fees for?',
      answer: 'Setup fees cover hardware installation, calibration, and on-site training. For Food Safe System sensors (£200), this includes gateway installation and sensor placement. For F*** Waste scales (£300), this includes scale setup, calibration, and staff training. These are one-time fees.',
    },
    {
      question: 'How does the ROI guarantee work for F*** Waste?',
      answer: 'Based on average customer data, F*** Waste delivers 14:1 ROI through ingredient cost savings and reduced waste collection fees. Most kitchens see 50%+ waste reduction within 3 months. While results vary by operation, the system typically pays for itself in the first month.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' },
        ]}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Currency Selector */}
          <div className="flex justify-end mb-6">
            <CurrencySelector />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Pay only for what you need. Flexible pricing that scales with your kitchen.
              All products include 14-day free trial.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-product-fss-green" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-product-fss-green" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-product-fss-green" />
                <span>Free onboarding included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="pt-16 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingToggle onChange={setIsAnnual} defaultAnnual={false} />
        </div>
      </section>

      {/* Individual Product Pricing */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Choose Your Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select individual products or save with our bundle packages below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Food Safe System */}
            <PricingCard
              productName="Food Safe System"
              productLogo="/logos/food-safe-system/fss-icon.png"
              productColor="#00B589"
              tiers={[
                {
                  name: 'FSS Chef',
                  monthlyPrice: 15,
                  annualPrice: 150,
                  description: 'Perfect for single-user kitchens',
                  features: ['1 user login', 'Digital food safety logs', 'Mobile & desktop access'],
                },
                {
                  name: 'FSS Kitchens',
                  monthlyPrice: 25,
                  annualPrice: 225,
                  description: 'Multi-user access for teams',
                  features: ['Multi-user access', 'Team management', 'Advanced reporting'],
                },
                {
                  name: 'FSS Kitchens & Sensors',
                  monthlyPrice: 15,
                  annualPrice: 125,
                  description: '£15/mo per sensor (minimum 3 sensors)',
                  features: ['All FSS software & apps included', '2+ year battery life', '1000m range to base station', 'No kitchen WiFi required'],
                },
              ]}
              features={[
                'Digital food safety logs (replaces paper)',
                'SMS/email alerts for refrigeration issues',
                'Customizable digital checklists',
                'Instant audit-ready reports',
                'Twice weekly hygiene & compliance reports',
                'Unlimited support',
              ]}
              setupFee={200}
              bonusOffer="Free sensors with bulk purchase!"
              isAnnual={isAnnual}
              ctaText="Get Food Safe System"
            />

            {/* AllerQ */}
            <PricingCard
              productName="AllerQ"
              productLogo="/logos/allerq/allerq-icon.png"
              productColor="#F58A07"
              singlePrice={{
                monthly: 7.49,
                annual: 74,
              }}
              features={[
                'Digital allergen compliance tool',
                'Track allergens across ingredients & menus',
                'Multi-language menu support',
                'QR code generation',
                'Unlimited menus per restaurant',
                'Real-time updates',
              ]}
              badge="VOLUME DISCOUNTS"
              bonusOffer="Save 5-15% with multiple locations (see below)"
              isAnnual={isAnnual}
              ctaText="Get AllerQ"
            />

            {/* Food Label System */}
            <PricingCard
              productName="Food Label System"
              productLogo="/logos/food-label-system/fls-icon.png"
              productColor="#C3E941"
              singlePrice={{
                monthly: 35,
                annual: 350,
              }}
              features={[
                'Tablet + printer system included',
                'Automatic expiry calculation',
                'Allergen info & QR codes',
                'Food rotation tracking',
                'Boosts compliance & hygiene',
                'First 2,000 labels included',
              ]}
              additionalCosts={[
                { label: 'Additional labels', price: '1.25p per label' },
              ]}
              bonusOffer="No upfront hardware costs - everything included!"
              isAnnual={isAnnual}
              ctaText="Get Food Label System"
            />

            {/* F*** Waste */}
            <PricingCard
              productName="F*** Waste"
              productLogo="/logos/fwaste/fwaste-icon.png"
              productColor="#52B788"
              singlePrice={{
                monthly: 150,
                annual: 1800, // No annual discount mentioned, so 12x monthly
              }}
              features={[
                'IoT smart scales for waste tracking',
                'Daily insights on what, why, and where',
                '50%+ waste reduction',
                '14:1 ROI via ingredient savings',
                'Reduced bin & collection costs',
                'Real-time analytics dashboard',
              ]}
              setupFee={300}
              bonusOffer="14:1 ROI - Pays for itself in the first month!"
              badge="COMING SOON"
              isAnnual={isAnnual}
              ctaText="Join Waitlist"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Bundle & Save
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get more value with our pre-configured packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food Safety Suite */}
            <PackageCard
              packageName="Food Safety Suite"
              description="Complete food safety & compliance solution"
              products={[
                { name: 'Food Safe System', includedTier: 'Kitchens' },
                { name: 'Food Label System' },
                { name: 'AllerQ' },
              ]}
              monthlyPrice={60}
              annualPrice={650}
              regularMonthlyPrice={67.49}
              regularAnnualPrice={749}
              isAnnual={isAnnual}
              features={[
                'Save 11% vs individual products',
                'Complete HACCP compliance',
                'Allergen management included',
                'Food labeling & traceability',
                'Perfect for audit-ready kitchens',
              ]}
              gradient="from-product-fss-green to-product-allerq-orange"
            />

            {/* Waste Reduction Bundle */}
            <PackageCard
              packageName="Waste Reduction Bundle"
              description="Eliminate waste, maximize profits"
              products={[
                { name: 'F*** Waste' },
                { name: 'Food Label System' },
              ]}
              monthlyPrice={175}
              annualPrice={2000}
              regularMonthlyPrice={185}
              regularAnnualPrice={2150}
              isAnnual={isAnnual}
              features={[
                'Save 5% vs individual products',
                '14:1 ROI from waste reduction',
                'Better rotation with labeling',
                'Track waste at every stage',
                'Reduce bins & collection fees',
              ]}
              gradient="from-product-fwaste-green to-product-fls-green"
            />

            {/* Complete Kitchen OS */}
            <PackageCard
              packageName="Complete Kitchen OS"
              description="The full operating system for your kitchen"
              products={[
                { name: 'Food Safe System', includedTier: 'Kitchens' },
                { name: 'AllerQ' },
                { name: 'Food Label System' },
                { name: 'F*** Waste' },
              ]}
              monthlyPrice={200}
              annualPrice={2280}
              regularMonthlyPrice={217.49}
              regularAnnualPrice={2609.88}
              isAnnual={isAnnual}
              features={[
                'Save 8% vs individual products',
                'Everything you need in one platform',
                'Maximum ROI across all operations',
                'Comprehensive kitchen management',
                'Priority support included',
              ]}
              gradient="from-brand-navy to-product-fss-green"
              popular={true}
            />
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-product-allerq-orange-light to-white rounded-2xl">
            <p className="text-center text-lg">
              <span className="font-bold text-brand-navy">Need a custom bundle?</span>{' '}
              <a href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley" target="_blank" rel="noopener noreferrer" className="text-product-fss-green hover:underline font-semibold">
                Contact us
              </a>{' '}
              for enterprise pricing and custom configurations for 10+ locations.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you could save with Kitchen OS products
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Scale & Save
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Growing your business? Get automatic discounts as you add locations
            </p>
          </div>
          <VolumeDiscountTable />
        </div>
      </section>

      {/* Currency Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Currency Conversion Notice
            </h3>
            <p className="text-sm text-gray-600">
              Prices are displayed in your selected currency for convenience. All prices are converted from GBP using daily exchange rates from the European Central Bank.
              <strong className="text-gray-900"> Final charges will be processed in GBP via Revolut.</strong> The exact amount may vary slightly based on your bank&apos;s exchange rate at the time of payment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Pricing FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your 14-day free trial today. No credit card required. Full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-all border-2 border-white"
            >
              Book a Demo
            </a>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            Questions? Call us or chat with our team to find the perfect setup for your kitchen.
          </p>
        </div>
      </section>
    </div>
  );
}
