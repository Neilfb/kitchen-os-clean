import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - Kitchen OS Plans & Pricing',
  description: 'Transparent pricing for Kitchen OS products. Choose the plan that fits your kitchen. 14-day free trial, no credit card required.',
  openGraph: {
    title: 'Pricing - Kitchen OS Plans & Pricing',
    description: 'Transparent pricing for Kitchen OS products. Choose the plan that fits your kitchen. 14-day free trial, no credit card required.',
    url: '/pricing',
  },
};

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '£49',
      period: 'per month',
      description: 'Perfect for single-site restaurants and cafes',
      features: [
        'Food Safe System (HACCP & temperature monitoring)',
        'Up to 10 temperature sensors',
        'Real-time alerts via mobile app',
        'Cloud backup and reporting',
        'Email support',
        '14-day free trial',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Professional',
      price: '£149',
      period: 'per month',
      description: 'Most popular for growing kitchen operations',
      features: [
        'Everything in Starter, plus:',
        'Food Safe System with unlimited sensors',
        'AllerQ digital allergen menus',
        'Food Label System with barcode tracking',
        'F*** Waste tracking and analytics',
        'Multi-site management (up to 5 sites)',
        'Priority phone & email support',
        'Dedicated onboarding specialist',
        '14-day free trial',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For restaurant groups and large operations',
      features: [
        'Everything in Professional, plus:',
        'Unlimited sites',
        'Custom integrations (POS, ERP, etc.)',
        'White-label options',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom SLA and uptime guarantees',
        'On-site training available',
        'Volume discounts',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const addOns = [
    {
      name: 'Food Safe System',
      price: 'From £22.50/month',
      description: 'HACCP software (£22.50/mo) OR automatic temperature monitoring (£12/sensor/mo, min 3 + £200 setup)',
      logo: '/logos/food-safe-system/fss-icon.png',
    },
    {
      name: 'AllerQ',
      price: '£7.49/month',
      description: 'Digital allergen menus with QR codes and multi-language support. Unlimited menus per restaurant. £74/year option available.',
      logo: '/logos/allerq/allerq-icon.png',
    },
    {
      name: 'Food Label System',
      price: '£35/month',
      description: 'Includes 2,000 free labels + 1.25p per additional label. Android printer included, no upfront costs',
      logo: '/logos/food-label-system/fls-icon.png',
    },
    {
      name: 'F*** Waste',
      price: '£150/month',
      description: 'AI-powered food waste tracking and cost reduction analytics. One-time setup fee: £300',
      logo: '/logos/fwaste/fwaste-icon.png',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No. All Kitchen OS plans are month-to-month. You can cancel anytime with 30 days notice. No long-term contracts, no lock-in.',
    },
    {
      question: 'What\'s included in the free trial?',
      answer: 'The 14-day free trial includes full access to your chosen plan - all features, unlimited users, and full support. No credit card required to start. We\'ll only ask for payment details after you decide to continue.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we\'ll pro-rate the difference.',
    },
    {
      question: 'What hardware do I need?',
      answer: 'For Food Safe System Option 2 (sensors): £200 one-time setup fee includes sensors and gateway - no additional hardware costs. For Food Label System: Android-powered label printer included with subscription, plus 2,000 free labels (additional labels 1.25p each). AllerQ and F*** Waste require no hardware - just use your existing smartphone or tablet.',
    },
    {
      question: 'Do you offer discounts for multiple sites?',
      answer: 'Yes. Professional plan covers up to 5 sites at £149/month (£30/site). Enterprise customers get custom volume pricing. Contact sales for a quote based on your number of locations.',
    },
    {
      question: 'Is support included?',
      answer: 'Yes. All plans include support. Starter gets email support (24-hour response time). Professional gets priority phone and email support. Enterprise gets 24/7 support with a dedicated account manager.',
    },
    {
      question: 'Can I mix and match products?',
      answer: 'Yes. You can start with any single product and add others as needed. Professional plan includes all four products. Starter customers can add products à la carte (see Add-Ons section).',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, Amex). Enterprise customers can pay by bank transfer or invoice with NET 30 terms.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your kitchen. All plans include 14-day free trial.
            No credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-soft overflow-hidden ${
                  tier.highlight
                    ? 'ring-4 ring-product-fss-green transform md:scale-105 relative'
                    : ''
                }`}
              >
                {tier.highlight && (
                  <div className="bg-product-fss-green text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-brand-navy">{tier.price}</span>
                    {tier.period !== 'contact us' && (
                      <span className="text-gray-600 ml-2">/{tier.period.split(' ')[1]}</span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors mb-6 ${
                      tier.highlight
                        ? 'bg-product-fss-green text-white hover:bg-product-fss-green-dark'
                        : 'bg-brand-navy text-white hover:bg-brand-navy-light'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle
                          className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                            tier.highlight ? 'text-product-fss-green' : 'text-brand-navy'
                          }`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              À La Carte Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Starter plan customers can add individual products as needed. Professional plan includes all four.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <img
                    src={addon.logo}
                    alt={addon.name}
                    className="w-12 h-12 mr-4 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-brand-navy">{addon.name}</h3>
                      <span className="text-2xl font-bold text-product-fss-green whitespace-nowrap ml-2">{addon.price}</span>
                    </div>
                    <p className="text-gray-600">{addon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Compare Plans
          </h2>
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fss-green">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Food Safe System</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-brand-navy mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-product-fss-green mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-brand-navy mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Temperature Sensors</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Up to 10</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">AllerQ (Allergen Menus)</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">+£7.49/mo</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-product-fss-green mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-brand-navy mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Food Label System</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">+£35/mo</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-product-fss-green mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-brand-navy mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">F*** Waste Tracking</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">+£150/mo</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-product-fss-green mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-brand-navy mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Sites Included</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">1 site</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Up to 5 sites</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Email</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Priority phone & email</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">24/7 dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Pricing FAQs
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Start your 14-day free trial today. No credit card required. Full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors border-2 border-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
