import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Clock, Bell, Cloud, TrendingDown, Users, FileText, ExternalLink } from 'lucide-react';
import { ProductSchema, FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from '@/components/seo/JsonLd';
import { ProductLogo } from '@/components/ProductLogo';

export const metadata: Metadata = {
  title: 'Food Safe System - Digital HACCP & Temperature Monitoring',
  description: 'Automated HACCP management and temperature monitoring for professional kitchens. Real-time alerts, cloud backup, and complete compliance documentation.',
  keywords: [
    'HACCP software',
    'temperature monitoring',
    'food safety management',
    'digital HACCP',
    'restaurant compliance',
    'temperature sensors',
    'food safety automation',
    'kitchen temperature monitoring',
  ],
  openGraph: {
    title: 'Food Safe System - Digital HACCP & Temperature Monitoring | Kitchen OS',
    description: 'Automated HACCP management and temperature monitoring for professional kitchens. Real-time alerts, cloud backup, and complete compliance documentation.',
    url: '/food-safe-system',
    type: 'website',
    images: [{ url: '/assets/fss_social_logo.png', width: 1200, height: 630, alt: 'Food Safe System - HACCP & Temperature Monitoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Safe System - Digital HACCP & Temperature Monitoring',
    description: 'Automated HACCP management and temperature monitoring for professional kitchens. Real-time alerts, cloud backup, and complete compliance documentation.',
    images: ['/assets/fss_social_logo.png'],
  },
};

export default function FoodSafeSystemPage() {
  const features = [
    {
      icon: Clock,
      title: 'Automated Temperature Checks',
      description: 'LoRaWAN sensors monitor fridges, freezers, and cooking equipment 24/7. No manual logging required.',
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications when temperatures go out of range. Prevent food spoilage before it happens.',
    },
    {
      icon: Shield,
      title: 'Complete HACCP Compliance',
      description: 'Digital records of all critical control points. Pass inspections with confidence.',
    },
    {
      icon: Cloud,
      title: 'Cloud Backup',
      description: 'All data securely stored in the cloud. Access reports from anywhere, anytime.',
    },
    {
      icon: FileText,
      title: 'Audit-Ready Reports',
      description: 'Generate compliance reports instantly. Export data for EHO inspections.',
    },
    {
      icon: Users,
      title: 'Team Accountability',
      description: 'Track who completed which tasks and when. Full audit trail of all actions.',
    },
    {
      icon: TrendingDown,
      title: 'Reduce Food Waste',
      description: 'Prevent spoilage with proactive monitoring. Save thousands on wasted stock.',
    },
    {
      icon: CheckCircle,
      title: 'Easy Setup',
      description: 'Install sensors in minutes. No wiring, no complicated configuration.',
    },
  ];

  const benefits = [
    'Save 3+ hours per week on paperwork',
    'Reduce food waste by up to 30%',
    'Pass every health inspection',
    'Never miss a temperature check',
    'Complete visibility across all sites',
    'Automated compliance documentation',
  ];

  const faqs = [
    {
      question: 'How does Food Safe System work?',
      answer: 'Food Safe System uses wireless LoRaWAN temperature sensors placed in fridges, freezers, and cooking equipment. These sensors automatically monitor temperatures 24/7 and send data to the cloud. If temperatures go out of safe range, you receive instant alerts via the mobile app or web dashboard.',
    },
    {
      question: 'Do I need special equipment or wiring?',
      answer: 'No wiring required. Our LoRaWAN sensors are battery-powered and connect wirelessly to a central gateway. Installation takes minutes - just place sensors in your equipment and they start monitoring automatically.',
    },
    {
      question: 'What happens if a fridge temperature goes too high?',
      answer: 'You receive an instant alert via push notification, email, or SMS. The alert includes which equipment is affected, the current temperature, and recommended actions. All alerts are logged in your compliance records.',
    },
    {
      question: 'Is this suitable for multi-site operations?',
      answer: 'Absolutely. Food Safe System is designed for multi-site management. View all locations from one dashboard, compare performance across sites, and generate consolidated reports for your entire operation.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Three tiers available: FSS Chef (£15/month or £150/year) for single users, FSS Kitchens (£25/month or £225/year) for multi-user teams, and FSS Kitchens & Sensors (£15/month per sensor, minimum 3 sensors) which includes all software and apps. All tiers include twice weekly hygiene & compliance reports. £200 one-time setup fee applies to sensor installations. Typical 3-sensor setup costs £45/month + £200 setup. See our pricing page for full details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <ProductSchema
        name="Food Safe System"
        description="Automated HACCP management and temperature monitoring for professional kitchens. Real-time alerts, cloud backup, and complete compliance documentation. Save 3+ hours per week on paperwork while ensuring 100% compliance."
        price="15.00"
        currency="GBP"
        image="/logos/food-safe-system/fss-icon.png"
        url="/food-safe-system"
        sku="FSS-001"
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "43"
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Food Safe System', url: '/food-safe-system' },
        ]}
      />
      <SoftwareApplicationSchema
        name="Food Safe System"
        description="Digital HACCP and temperature monitoring software for restaurants and professional kitchens"
        applicationCategory="BusinessApplication"
        operatingSystem="Web, iOS, Android"
        price="15.00"
        currency="GBP"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <img
              src="/logos/food-safe-system/fss-full-logo-white.png"
              alt="Food Safe System"
              className="h-16 md:h-20 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital HACCP & Temperature Monitoring
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fss-green-light">
              Automated temperature monitoring and HACCP management for professional kitchens.
              Save time, reduce waste, and pass every inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </Link>
              <a
                href="https://www.foodsafesystem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
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
              Everything You Need for Food Safety Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by chefs and food safety experts, Food Safe System handles all your HACCP requirements automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-product-fss-green-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-product-fss-green" />
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
                Why Kitchen Teams Love Food Safe System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Food Safe System eliminates manual temperature logging, reduces paperwork by 90%,
                and gives you complete confidence in your food safety compliance.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;Food Safe System has transformed how we manage food safety. We used to spend hours
                every week on temperature logs and HACCP paperwork. Now it&apos;s all automated.
                Our last EHO inspection was the easiest we&apos;ve ever had - we just showed the inspector
                the dashboard and they were impressed.&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-navy">Sarah Mitchell</p>
                  <p className="text-gray-600">Head Chef, The Grove Hotel</p>
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
            src="/assets/pexels-carlo-martin-alcordo-1279322-2449665.jpg"
            alt="Professional kitchen"
            className="w-full h-full object-cover"
          />
          {/* Lighter gradient overlay - shows image more */}
          <div className="absolute inset-0 bg-gradient-to-r from-product-fss-green/75 via-product-fss-green/65 to-product-fss-green-dark/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Full logo will go here once provided - placeholder for icon for now */}
          <div className="mb-8 flex justify-center">
            <ProductLogo
              fullLogoSrc="/logos/food-safe-system/fss-full-logo-white.png"
              iconFallbackSrc="/logos/food-safe-system/fss-icon.png"
              alt="Food Safe System"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
            Ready to Automate Your Food Safety?
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            Join hundreds of kitchens using Food Safe System. 14-day free trial, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Book a Demo
            </Link>
            <a
              href="https://www.foodsafesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-product-fss-green font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green-dark text-white font-bold rounded-xl hover:bg-opacity-90 transition-all border-2 border-white shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
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
            <Link href="/food-label-system" className="group">
              <div className="bg-gradient-to-br from-product-fls-green-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-fls-green-dark transition-colors">
                  Food Label System
                </h3>
                <p className="text-gray-600">
                  Automated date labels with barcodes. Never mislabel food again.
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
