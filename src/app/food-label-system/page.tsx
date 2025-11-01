import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Printer, Barcode, Clock, Shield, TrendingDown, Zap, Database } from 'lucide-react';
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
  const features = [
    {
      icon: Printer,
      title: 'Print Labels in Seconds',
      description: 'Create and print food labels instantly from your phone or tablet. No complicated systems or training required.',
    },
    {
      icon: Barcode,
      title: 'Barcode Tracking',
      description: 'Every label includes a unique barcode. Scan to view preparation date, use-by date, ingredients, and allergens.',
    },
    {
      icon: Clock,
      title: 'Automated Use-By Dates',
      description: 'System calculates use-by dates automatically based on food type and storage method. Never guess again.',
    },
    {
      icon: Shield,
      title: 'Allergen Warnings',
      description: 'Add allergen information to labels with one tap. Clear, compliant labelling for all 14 major allergens.',
    },
    {
      icon: Database,
      title: 'Batch Tracking',
      description: 'Track which batch ingredients came from. Full traceability for recalls or quality issues.',
    },
    {
      icon: Zap,
      title: 'Template Library',
      description: 'Pre-built templates for common dishes and prep items. Customize once, use forever.',
    },
    {
      icon: TrendingDown,
      title: 'Reduce Waste',
      description: 'Accurate date labels mean less food thrown out unnecessarily. FIFO rotation made easy.',
    },
    {
      icon: CheckCircle,
      title: 'Inspection-Ready',
      description: 'Complete labelling records stored in the cloud. Show EHO officers everything instantly.',
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
              Automated Date Labels & Barcodes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-navy-light">
              Print compliant food labels in seconds. Automated use-by dates, allergen warnings,
              and complete traceability for every dish.
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

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Smart Food Labelling for Professional Kitchens
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Food Label System eliminates handwritten labels and gives you complete traceability from delivery to service.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
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
