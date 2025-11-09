import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, CheckCircle, ArrowRight, ExternalLink, Clock, Shield, Bell, FileText } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Food Safe System Affiliate Program - Earn 25% Recurring Commission | Kitchen OS',
  description: 'Promote Food Safe System and earn £43.75/month recurring commission (£525 over 12 months) on every customer you refer. Digital HACCP and automated temperature monitoring for professional kitchens.',
  keywords: [
    'Food Safe System affiliate',
    'HACCP affiliate program',
    'temperature monitoring affiliate',
    'food safety affiliate',
    'restaurant software affiliate',
    'recurring commissions',
  ],
  openGraph: {
    title: 'Food Safe System Affiliate Program - Earn 25% Recurring Commission',
    description: 'Promote Food Safe System and earn £43.75/month recurring commission (£525 over 12 months) on every customer you refer.',
    url: '/affiliates/food-safe-system',
    type: 'website',
    images: [{ url: '/assets/fss_social_logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Safe System Affiliate Program - Earn 25% Recurring Commission',
    description: 'Promote Food Safe System and earn £43.75/month recurring commission (£525 over 12 months).',
    images: ['/assets/fss_social_logo.png'],
  },
};

export default function FoodSafeSystemAffiliatePage() {
  const targetAudience = [
    {
      title: 'Food Safety Consultants',
      description: 'Offer your clients a complete digital HACCP solution and earn recurring income on every implementation.',
    },
    {
      title: 'Restaurant Trainers',
      description: 'Recommend Food Safe System to hospitality businesses you train and earn commissions on subscriptions.',
    },
    {
      title: 'Food Industry Bloggers',
      description: 'Write about food safety technology and earn from readers who subscribe to Food Safe System.',
    },
    {
      title: 'EHO & Compliance Professionals',
      description: 'Recommend automated compliance tools to businesses struggling with manual HACCP paperwork.',
    },
    {
      title: 'Hospitality Influencers',
      description: 'Share Food Safe System with your audience and earn generous recurring commissions.',
    },
    {
      title: 'Technology Resellers',
      description: 'Add Food Safe System to your product portfolio and earn ongoing revenue from referrals.',
    },
  ];

  const productFeatures = [
    {
      icon: Clock,
      title: 'Automated Temperature Monitoring',
      description: 'LoRaWAN sensors monitor fridges, freezers, and cooking equipment 24/7 - no manual logging.',
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications when temperatures go out of range to prevent food spoilage.',
    },
    {
      icon: Shield,
      title: 'Complete HACCP Compliance',
      description: 'Digital records of all critical control points for hassle-free inspections.',
    },
    {
      icon: FileText,
      title: 'Audit-Ready Reports',
      description: 'Generate compliance reports instantly and export data for EHO inspections.',
    },
  ];

  const idealCustomers = [
    'Multi-site restaurant chains (3+ locations)',
    'Hotels with multiple F&B outlets',
    'Contract catering companies',
    'Care homes and hospitals',
    'Food production facilities',
    'Dark kitchens and ghost restaurants',
    'Any business spending 3+ hours/week on HACCP paperwork',
    'Operations failing temperature checks or inspections',
  ];

  const commissionExamples = [
    {
      customers: 1,
      monthly: '£43.75',
      yearly: '£525',
    },
    {
      customers: 5,
      monthly: '£218.75',
      yearly: '£2,625',
    },
    {
      customers: 10,
      monthly: '£437.50',
      yearly: '£5,250',
    },
    {
      customers: 20,
      monthly: '£875.00',
      yearly: '£10,500',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Affiliates', url: '/affiliates' },
          { name: 'Food Safe System', url: '/affiliates/food-safe-system' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Food Safe System Affiliate Program
            </h1>
            <h2 className="text-4xl font-bold text-white/90 mb-6">
              Earn 25% Recurring Commission for 12 Months
            </h2>
            <p className="text-2xl text-white/90 mb-8 font-semibold">
              £43.75/month per customer (£525 total)
            </p>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Promote Food Safe System - the digital HACCP and automated temperature monitoring solution trusted by professional kitchens across the UK.
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
                  <p className="text-3xl font-bold text-product-fss-green mb-1">
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
              Based on £175/month subscription price (25% commission)
            </p>
          </div>

          <div className="text-center">
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
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              What is Food Safe System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete digital HACCP solution with automated temperature monitoring that saves professional kitchens 3+ hours per week on compliance paperwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productFeatures.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-product-fss-green/10 mb-4">
                  <feature.icon className="w-8 h-8 text-product-fss-green" />
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
                'Save 3+ hours per week on HACCP paperwork',
                'Never miss a critical temperature check',
                'Reduce food waste by up to 30%',
                'Pass every health inspection with confidence',
                'Complete visibility across all sites',
                'Automated compliance documentation',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fss-green flex-shrink-0 mt-0.5" />
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
              Who Should Promote Food Safe System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This affiliate program is perfect for professionals already serving the food service industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-soft p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-product-fss-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-product-fss-green" />
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
              Who Needs Food Safe System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help your audience identify the perfect customers for Food Safe System.
            </p>
          </div>

          <div className="bg-gradient-to-br from-product-fss-green/5 to-product-fss-green/10 rounded-2xl p-8 border-2 border-product-fss-green/20">
            <div className="grid md:grid-cols-2 gap-4">
              {idealCustomers.map((customer, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fss-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{customer}</span>
                </div>
              ))}
            </div>
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
                description: 'Promote Food Safe System through blog posts, consultations, social media, email newsletters, or direct referrals.',
              },
              {
                step: '3',
                title: 'Earn Commissions',
                description: 'Earn 25% recurring commission (£43.75/month) for 12 months on every subscription. Track earnings in your dashboard.',
              },
            ].map((item, idx) => (
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
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-product-fss-green" />
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
                'ROI calculator and case studies',
                'Demo videos and product walkthroughs',
                'Real-time commission tracking dashboard',
              ].map((resource, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-product-fss-green flex-shrink-0 mt-0.5" />
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
            Join the Food Safe System affiliate program and earn £43.75/month recurring commission (£525 over 12 months) on every customer you refer.
          </p>
          <a
            href="https://www.pushlapgrowth.com/programs/7bbce14d-c2f8-40b1-8461-f3542b9b4652/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-product-fss-green hover:bg-product-fss-green/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg mb-6"
          >
            Join the Affiliate Program
            <ExternalLink className="w-5 h-5" />
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/70 text-sm">
            <Link href="/affiliates" className="hover:text-white transition-colors">
              ← Back to All Programs
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/food-safe-system" className="hover:text-white transition-colors">
              Learn More About Food Safe System
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
