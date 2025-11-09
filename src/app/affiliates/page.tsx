import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, Users, TrendingUp, Target, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Affiliate Program - Earn Recurring Commissions | Kitchen OS',
  description: 'Join the Kitchen OS affiliate program and earn 25% recurring commissions for 12 months. Partner with us to help professional kitchens digitize food safety, allergen management, and waste tracking.',
  keywords: [
    'Kitchen OS affiliate program',
    'food safety affiliate',
    'HACCP affiliate program',
    'restaurant software affiliate',
    'recurring commissions',
    'SaaS affiliate program',
    'food tech partnership',
  ],
  openGraph: {
    title: 'Affiliate Program - Earn Recurring Commissions | Kitchen OS',
    description: 'Join the Kitchen OS affiliate program and earn 25% recurring commissions for 12 months. Partner with us to help professional kitchens digitize their operations.',
    url: '/affiliates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Program - Earn Recurring Commissions | Kitchen OS',
    description: 'Join the Kitchen OS affiliate program and earn 25% recurring commissions for 12 months.',
  },
};

export default function AffiliatesPage() {
  const products = [
    {
      name: 'Food Safe System',
      slug: 'food-safe-system',
      description: 'Digital HACCP and automated temperature monitoring for professional kitchens',
      price: 'from £90/month',
      commission: '£22.50/month',
      yearlyEarning: '£3,240',
      yearlyDescription: 'Introduce 1 restaurant per month',
      color: 'product-fss-green',
      features: [
        'Automated temperature monitoring',
        'Digital HACCP compliance',
        'Real-time alerts',
        'Cloud-based reporting',
      ],
    },
    {
      name: 'Food Label System',
      slug: 'food-label-system',
      description: 'Automated allergen-safe food labeling and compliance for professional kitchens',
      price: 'from £35/month',
      commission: '£8.75/month',
      yearlyEarning: '£1,050',
      yearlyDescription: 'Introduce 1 restaurant per month',
      color: 'product-fls-purple',
      features: [
        'Allergen-safe labeling',
        'UK Natasha\'s Law compliance',
        'Integrated Android tablet & printer',
        'Instant label printing',
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: '25% Recurring Commission',
      description: 'Earn 25% of every monthly subscription. Introduce 1 restaurant per month to Food Safe System and earn £3,240/year.',
    },
    {
      icon: TrendingUp,
      title: 'Hardware Commission Too',
      description: 'Earn 10% commission on all hardware sales (thermal printers, temperature probes, labels).',
    },
    {
      icon: Users,
      title: 'Trusted Brand',
      description: 'Kitchen OS is backed by UN Tourism, MassChallenge, and EIT Food. Enterprise-grade products customers trust.',
    },
    {
      icon: Target,
      title: 'Perfect For Your Audience',
      description: 'Ideal for food safety consultants, restaurant trainers, hospitality bloggers, and industry influencers.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up Free',
      description: 'Join our affiliate program powered by Push Lap Growth. Get your unique referral link instantly.',
    },
    {
      step: '2',
      title: 'Share Your Link',
      description: 'Share your affiliate link with your audience - blog posts, social media, email newsletters, or consultations.',
    },
    {
      step: '3',
      title: 'Earn Commissions',
      description: 'Earn 25% recurring commission for 12 months on every subscription. Track earnings in your dashboard.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Affiliates', url: '/affiliates' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-fls-purple rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Partner with Kitchen OS
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
            Earn 25% Recurring Commissions for 12 Months
          </p>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our affiliate program and help professional kitchens digitize food safety, allergen management, and waste tracking while earning generous recurring commissions.
          </p>
          <a
            href="https://www.pushlapgrowth.com/programs/7bbce14d-c2f8-40b1-8461-f3542b9b4652/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-product-fss-green hover:bg-product-fss-green/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg"
          >
            Join the Affiliate Program
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Promote Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our suite of professional kitchen management software. Each product offers generous recurring commissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-transparent hover:border-product-fss-green/30 transition-all"
              >
                <div className={`h-3 bg-${product.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  {/* Pricing & Commission */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Subscription Price</p>
                        <p className="text-2xl font-bold text-brand-navy">{product.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">25% Commission</p>
                        <p className="text-2xl font-bold text-product-fss-green">{product.commission}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">{product.yearlyDescription}</p>
                      <p className="text-3xl font-bold text-brand-navy">{product.yearlyEarning}</p>
                      <p className="text-sm text-gray-500 mt-1">per year*</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-product-fss-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/affiliates/${product.slug}`}
                    className="inline-flex items-center gap-2 text-product-fss-green hover:text-product-fss-green/80 font-semibold transition-colors"
                  >
                    Learn More About {product.name}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-4">
              *Earnings are subject to sales performance and confirmed sales. Hardware sales earn 10% commission.
            </p>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              <strong>Coming Soon:</strong> Similar subscription commissions will be available for AllerQ and F*** Waste when launched.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Why Partner with Kitchen OS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a growing network of affiliates earning recurring commissions by promoting enterprise-grade kitchen management software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-product-fss-green/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-product-fss-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Start earning in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl shadow-soft p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-product-fss-green text-white text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-product-fss-green" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our affiliate program today and start earning 25% recurring commissions for 12 months on every customer you refer.
          </p>
          <a
            href="https://www.pushlapgrowth.com/programs/7bbce14d-c2f8-40b1-8461-f3542b9b4652/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-product-fss-green hover:bg-product-fss-green/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg"
          >
            Join the Affiliate Program
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-white/60 mt-6 text-sm">
            Powered by Push Lap Growth
          </p>
        </div>
      </section>
    </>
  );
}
