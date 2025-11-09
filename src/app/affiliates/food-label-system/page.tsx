import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, CheckCircle, ArrowRight, ExternalLink, Printer, Shield, Zap, FileText } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Food Label System Affiliate Program - Earn 25% Recurring Commission | Kitchen OS',
  description: 'Promote Food Label System and earn £24.75/month recurring commission (£297 over 12 months) on every customer you refer. Automated allergen-safe food labeling for professional kitchens.',
  keywords: [
    'Food Label System affiliate',
    'food labeling affiliate program',
    'allergen management affiliate',
    'Natasha\'s Law affiliate',
    'restaurant software affiliate',
    'recurring commissions',
  ],
  openGraph: {
    title: 'Food Label System Affiliate Program - Earn 25% Recurring Commission',
    description: 'Promote Food Label System and earn £24.75/month recurring commission (£297 over 12 months) on every customer you refer.',
    url: '/affiliates/food-label-system',
    type: 'website',
    images: [{ url: '/assets/fls_social_logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Label System Affiliate Program - Earn 25% Recurring Commission',
    description: 'Promote Food Label System and earn £24.75/month recurring commission (£297 over 12 months).',
    images: ['/assets/fls_social_logo.png'],
  },
};

export default function FoodLabelSystemAffiliatePage() {
  const targetAudience = [
    {
      title: 'Allergen Consultants',
      description: 'Offer your clients a complete allergen management solution and earn recurring income on every implementation.',
    },
    {
      title: 'Food Safety Trainers',
      description: 'Recommend Food Label System to businesses struggling with Natasha&apos;s Law compliance.',
    },
    {
      title: 'Hospitality Bloggers',
      description: 'Write about allergen safety technology and earn from readers who subscribe to Food Label System.',
    },
    {
      title: 'Restaurant Equipment Suppliers',
      description: 'Add Food Label System to your product lineup and earn recurring commissions.',
    },
    {
      title: 'Food Industry Influencers',
      description: 'Share allergen-safe labeling solutions with your audience and earn generous commissions.',
    },
    {
      title: 'Compliance Advisors',
      description: 'Help businesses meet UK Natasha&apos;s Law requirements with automated labeling technology.',
    },
  ];

  const productFeatures = [
    {
      icon: Printer,
      title: 'Bluetooth Thermal Printer',
      description: 'Print professional allergen-safe labels instantly from any mobile device.',
    },
    {
      icon: Shield,
      title: 'Natasha\'s Law Compliance',
      description: 'Meet all UK allergen labeling requirements with pre-configured templates.',
    },
    {
      icon: Zap,
      title: 'Instant Label Printing',
      description: 'Print labels in seconds - no more handwriting or manual data entry.',
    },
    {
      icon: FileText,
      title: 'Digital Recipe Database',
      description: 'Store recipes with ingredient lists and allergen information in one place.',
    },
  ];

  const idealCustomers = [
    'Cafes and coffee shops selling PPDS food',
    'Bakeries and patisseries',
    'Delis and sandwich shops',
    'Restaurant takeaway services',
    'Catering companies',
    'Farm shops and food markets',
    'Any business selling prepacked for direct sale (PPDS) food',
    'Operations handwriting labels or using pre-printed stickers',
  ];

  const commissionExamples = [
    {
      customers: 1,
      monthly: '£24.75',
      yearly: '£297',
    },
    {
      customers: 5,
      monthly: '£123.75',
      yearly: '£1,485',
    },
    {
      customers: 10,
      monthly: '£247.50',
      yearly: '£2,970',
    },
    {
      customers: 20,
      monthly: '£495.00',
      yearly: '£5,940',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Affiliates', url: '/affiliates' },
          { name: 'Food Label System', url: '/affiliates/food-label-system' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-product-fls-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-fls-purple rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Food Label System Affiliate Program
            </h1>
            <h2 className="text-4xl font-bold text-white/90 mb-6">
              Earn 25% Recurring Commission for 12 Months
            </h2>
            <p className="text-2xl text-white/90 mb-8 font-semibold">
              £24.75/month per customer (£297 total)
            </p>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Promote Food Label System - the automated allergen-safe labeling solution helping UK businesses comply with Natasha&apos;s Law.
            </p>
          </div>

          {/* Commission Calculator */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
              Commission Earnings Calculator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commissionExamples.map((example, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-2">
                    {example.customers} Customer{example.customers > 1 ? 's' : ''}
                  </p>
                  <p className="text-3xl font-bold text-product-fls-purple mb-1">
                    {example.monthly}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">per month</p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">12-month total</p>
                    <p className="text-2xl font-bold text-brand-navy">{example.yearly}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Based on £99/month subscription price (25% commission)
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://www.pushlapgrowth.com/programs/7bbce14d-c2f8-40b1-8461-f3542b9b4652/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-product-fls-purple hover:bg-product-fls-purple/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Join the Affiliate Program
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              What is Food Label System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An automated allergen-safe food labeling solution that helps UK businesses comply with Natasha&apos;s Law using Bluetooth thermal printing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productFeatures.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-product-fls-purple/10 mb-4">
                  <feature.icon className="w-8 h-8 text-product-fls-purple" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
              Key Customer Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                'Full Natasha&apos;s Law compliance (UK PPDS regulations)',
                'No more handwriting labels or manual data entry',
                'Professional-looking labels in seconds',
                'All 14 major allergens clearly highlighted',
                'Digital recipe database with allergen tracking',
                'Bluetooth printing from any mobile device',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fls-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Who Should Promote Food Label System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This affiliate program is perfect for professionals serving food businesses with allergen compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-product-fls-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-product-fls-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {audience.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Who Needs Food Label System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help your audience identify the perfect customers for Food Label System.
            </p>
          </div>

          <div className="bg-gradient-to-br from-product-fls-purple/5 to-product-fls-purple/10 rounded-2xl p-8 border-2 border-product-fls-purple/20">
            <div className="grid md:grid-cols-2 gap-4">
              {idealCustomers.map((customer, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fls-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{customer}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-product-allerq-orange/10 border-2 border-product-allerq-orange/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-product-allerq-orange" />
              What is Natasha&apos;s Law?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Natasha&apos;s Law (UK PPDS regulations) requires all prepacked for direct sale (PPDS) food to display full ingredients and allergen information.
              Food Label System makes compliance simple with automated label generation, allergen highlighting, and Bluetooth thermal printing.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              How the Affiliate Program Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                title: 'Sign Up Free',
                description: 'Join the Kitchen OS affiliate program powered by Push Lap Growth. Get your unique referral link instantly.',
              },
              {
                step: '2',
                title: 'Share Your Link',
                description: 'Promote Food Label System through blog posts, consultations, social media, email newsletters, or direct referrals.',
              },
              {
                step: '3',
                title: 'Earn Commissions',
                description: 'Earn 25% recurring commission (£24.75/month) for 12 months on every subscription. Track earnings in your dashboard.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl shadow-soft p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-product-fls-purple text-white text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-product-fls-purple" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
              Marketing Resources Available
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Pre-written email templates for referrals',
                'Social media posts and graphics',
                'Product brochures and spec sheets',
                'Natasha&apos;s Law compliance guides',
                'Demo videos and product walkthroughs',
                'Real-time commission tracking dashboard',
              ].map((resource, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fls-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Earning Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the Food Label System affiliate program and earn £24.75/month recurring commission (£297 over 12 months) on every customer you refer.
          </p>
          <a
            href="https://www.pushlapgrowth.com/programs/7bbce14d-c2f8-40b1-8461-f3542b9b4652/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-product-fls-purple hover:bg-product-fls-purple/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg mb-6"
          >
            Join the Affiliate Program
            <ExternalLink className="w-5 h-5" />
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/70 text-sm">
            <Link href="/affiliates" className="hover:text-white transition-colors">
              ← Back to All Programs
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/food-label-system" className="hover:text-white transition-colors">
              Learn More About Food Label System
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
