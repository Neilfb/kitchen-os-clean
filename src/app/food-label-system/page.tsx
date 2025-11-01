import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Printer, Clock, Shield, TrendingDown, Zap, Database } from 'lucide-react';
import { ProductSchema, FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from '@/components/seo/JsonLd';
import { ProductLogo } from '@/components/ProductLogo';

export const metadata: Metadata = {
  title: 'Food Label System - Automated Date Labels & Barcodes',
  description: 'Print compliant food labels with barcodes in seconds. Automated use-by dates, allergen warnings, and complete traceability for professional kitchens.',
  keywords: [
    'food labelling system',
    'automated food labels',
    'barcode food labels',
    'use-by date labels',
    'restaurant label printer',
    'food traceability',
    'kitchen label software',
    'commercial kitchen labels',
  ],
  openGraph: {
    title: 'Food Label System - Automated Date Labels & Barcodes | Kitchen OS',
    description: 'Print compliant food labels with barcodes in seconds. Automated use-by dates, allergen warnings, and complete traceability for professional kitchens.',
    url: '/food-label-system',
    type: 'website',
    images: [{ url: '/assets/food label system-01.png', width: 1200, height: 630, alt: 'Food Label System - Automated Date Labels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Label System - Automated Date Labels & Barcodes',
    description: 'Print compliant food labels with barcodes in seconds. Automated use-by dates, allergen warnings, and complete traceability for professional kitchens.',
    images: ['/assets/food label system-01.png'],
  },
};

export default function FoodLabelSystemPage() {
  const keyBenefits = [
    {
      icon: Printer,
      title: 'Replace Handwriting',
      description: 'Eliminate illegible labels and inconsistent information',
    },
    {
      icon: Zap,
      title: 'Faster Process',
      description: 'Print labels in seconds with standardised information',
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      description: 'Ensure consistent food safety protocols across operations',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Saves chef time',
      description: 'No more handwriting or confusion between shifts. Labels printed in seconds.',
    },
    {
      icon: CheckCircle,
      title: 'Clear food safety standards',
      description: 'Consistent labelling ensures compliance. Reduces risk of food safety incidents.',
    },
    {
      icon: TrendingDown,
      title: 'Reduces food waste',
      description: 'Better shelf-life tracking means less wastage. Clear dates prevent early disposal.',
    },
    {
      icon: Database,
      title: 'Boosts management confidence',
      description: 'Visible, reliable kitchen practices. Easy auditing and compliance verification.',
    },
  ];

  const benefits = [
    'Print labels in under 10 seconds',
    'Eliminate handwritten labels forever',
    'Reduce food waste by 20%+',
    'Full ingredient and allergen traceability',
    'FIFO stock rotation made automatic',
    'Pass every health inspection',
  ];

  const faqs = [
    {
      question: 'What kind of printer do I need?',
      answer: 'Food Label System works with any Bluetooth thermal label printer. We recommend the Brother QL series for best results. Labels are waterproof, grease-resistant, and dishwasher-safe.',
    },
    {
      question: 'Can I create custom label templates?',
      answer: 'Yes. You can create unlimited custom templates for your specific dishes and prep items. Include your logo, custom fields, allergen warnings, and storage instructions. Templates save massive amounts of time once set up.',
    },
    {
      question: 'How does the system calculate use-by dates?',
      answer: 'The system uses food safety guidelines (FSA, HACCP) to calculate use-by dates based on food type, preparation method, and storage conditions. You can also set custom shelf lives for your specific recipes and processes.',
    },
    {
      question: 'Can I track where ingredients came from?',
      answer: 'Absolutely. Food Label System includes full batch tracking. Scan supplier delivery barcodes or enter batch numbers manually. If there\'s ever a recall, you can instantly identify affected items.',
    },
    {
      question: 'How much does it cost?',
      answer: '£35/month per site, which includes 2,000 FREE labels as a starter pack. Additional labels cost just 1.25p each (compare to 3-5p for pre-printed labels). No upfront costs. The Android-powered label printer is included with your subscription, plus remote setup and support. This saves most kitchens 40-90% compared to buying pre-printed date labels.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <ProductSchema
        name="Food Label System"
        description="Automated food labelling system with barcodes for professional kitchens. Print compliant labels in seconds with automated use-by dates, allergen warnings, and complete traceability. Includes 2,000 free labels monthly."
        price="35"
        currency="GBP"
        image="/logos/food-label-system/fls-icon.png"
        url="/food-label-system"
        sku="FLS-001"
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "29"
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Food Label System', url: '/food-label-system' },
        ]}
      />
      <SoftwareApplicationSchema
        name="Food Label System"
        description="Automated food labelling software with barcode tracking for restaurants and commercial kitchens"
        applicationCategory="BusinessApplication"
        operatingSystem="Web, iOS, Android"
        price="35"
        currency="GBP"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fls-green to-product-fls-green-dark text-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <img
              src="/logos/food-label-system/fls-full-logo.png"
              alt="Food Label System"
              className="h-16 md:h-20 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Smart Digital Solution for Modern Kitchens
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-navy-dark font-semibold">
              Introducing a revolutionary approach to food labelling that saves time, reduces waste and ensures compliance.
            </p>
            <p className="text-lg md:text-xl mb-8 text-brand-navy-light">
              Replace handwriting. Print labels in seconds. Maintain safety compliance across all operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-brand-navy"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Smarter Labelling */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Smarter Labelling, Better Kitchens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-product-fls-green to-product-fls-green-dark rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
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

      {/* Operational Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Operational Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your kitchen operations with smart, automated food labelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-product-fls-green-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-product-fls-green-dark" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing That Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Pricing That Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">£35/month per site</h3>
              <p className="text-gray-600 leading-relaxed">
                Predictable monthly cost with no hidden charges. Simple budgeting for multi-site operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">No upfront cost</h3>
              <p className="text-gray-600 leading-relaxed">
                Start immediately without capital expenditure. See ROI from the first month of implementation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">2,000 free labels included</h3>
              <p className="text-gray-600 leading-relaxed">
                One-off starter pack covers initial implementation. Additional labels just 1.25p each thereafter.
              </p>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="bg-gradient-to-br from-product-fls-green-light to-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">
              Cost Comparison: Digital vs Pre-Printed
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-brand-navy">
                    <th className="text-left py-4 px-4 text-brand-navy font-bold">Label Type</th>
                    <th className="text-left py-4 px-4 text-brand-navy font-bold">Cost Per Label</th>
                    <th className="text-left py-4 px-4 text-brand-navy font-bold">Monthly Volume</th>
                    <th className="text-left py-4 px-4 text-brand-navy font-bold">Est. Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-4 text-gray-700">Pre-Printed Rolls</td>
                    <td className="py-4 px-4 text-gray-700">3-5p</td>
                    <td className="py-4 px-4 text-gray-700">2,000</td>
                    <td className="py-4 px-4 font-bold text-gray-700">£60-£100</td>
                  </tr>
                  <tr className="bg-product-fls-green/10">
                    <td className="py-4 px-4 text-brand-navy font-semibold">Food Label System</td>
                    <td className="py-4 px-4 text-brand-navy font-semibold">1.25p</td>
                    <td className="py-4 px-4 text-brand-navy font-semibold">2,000</td>
                    <td className="py-4 px-4 font-bold text-product-fls-green-dark text-lg">£60*</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-6 text-center">
              *£35 subscription + ~£25 for labels (after initial 2,000 free)
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-product-fls-green-dark mr-2" />
                <span className="text-brand-navy font-semibold">Cheaper per label</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-product-fls-green-dark mr-2" />
                <span className="text-brand-navy font-semibold">No over-ordering</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-product-fls-green-dark mr-2" />
                <span className="text-brand-navy font-semibold">No wasted rolls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chefs Love It */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Chefs Love Food Label System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Food Label System transforms kitchen labelling from a tedious chore into a quick,
                accurate process. Print professional labels in seconds, track everything, and never
                guess use-by dates again.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-product-fls-green-dark mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-product-fls-green-light to-white p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;Food Label System has saved us hours every week. Before, we were handwriting
                hundreds of labels daily - messy, inconsistent, and time-consuming. Now we just
                tap a few buttons and print professional labels with barcodes. The automated
                use-by dates are brilliant - no more guessing or errors. Our prep team loves it.&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-navy">Tom Henderson</p>
                  <p className="text-gray-600">Head Chef, Riverside Bistro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/pexels-4louette-11129150.jpg"
            alt="Kitchen food preparation"
            className="w-full h-full object-cover"
          />
          {/* Lighter gradient overlay - shows image more */}
          <div className="absolute inset-0 bg-gradient-to-r from-product-fls-green/75 via-product-fls-green/65 to-product-fls-green-dark/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Full logo will go here once provided */}
          <div className="mb-8 flex justify-center">
            <ProductLogo
              fullLogoSrc="/logos/food-label-system/fls-full-logo-white.png"
              iconFallbackSrc="/logos/food-label-system/fls-icon.png"
              alt="Food Label System"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy drop-shadow-lg">
            Ready to Automate Your Food Labelling?
          </h2>
          <p className="text-xl mb-8 text-brand-navy-dark drop-shadow-md">
            Join hundreds of kitchens using Food Label System. 14-day free trial, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-dark transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fls-green-dark text-white font-bold rounded-xl hover:bg-opacity-90 transition-all border-2 border-brand-navy shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            Complete Your Kitchen OS Setup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/food-safe-system" className="group">
              <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-fss-green transition-colors">
                  Food Safe System
                </h3>
                <p className="text-gray-600">
                  Automated HACCP and temperature monitoring for complete compliance.
                </p>
              </div>
            </Link>
            <Link href="/allerq" className="group">
              <div className="bg-gradient-to-br from-product-allerq-orange-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-allerq-orange transition-colors">
                  AllerQ
                </h3>
                <p className="text-gray-600">
                  Digital allergen menus with QR codes. Keep customers safe and compliant.
                </p>
              </div>
            </Link>
            <Link href="/f-waste" className="group">
              <div className="bg-gradient-to-br from-product-fw-green-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-fw-green-dark transition-colors">
                  F*** Waste
                </h3>
                <p className="text-gray-600">
                  Track food waste, reduce costs, and hit sustainability targets.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
