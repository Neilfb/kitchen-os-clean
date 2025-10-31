import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { HeroVideo } from '@/components/HeroVideo';

export const metadata: Metadata = {
  title: 'Kitchen OS - The Operating System for Professional Kitchens',
  description: 'Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform. Trusted by hospitality leaders.',
  keywords: [
    'kitchen management software',
    'restaurant management system',
    'food safety software',
    'kitchen operations platform',
    'HACCP software',
    'allergen management',
    'food waste tracking',
    'restaurant technology',
    'commercial kitchen software',
    'hospitality management system',
  ],
  openGraph: {
    title: 'Kitchen OS - The Operating System for Professional Kitchens',
    description: 'Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform. Trusted by hospitality leaders.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/assets/KitchenOS-03.png',
        width: 1200,
        height: 630,
        alt: 'Kitchen OS - The Operating System for Professional Kitchens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KitchenOS',
    title: 'Kitchen OS - The Operating System for Professional Kitchens',
    description: 'Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform.',
    images: ['/assets/KitchenOS-03.png'],
  },
};

export default function HomePage() {
  const products = [
    {
      name: 'Food Safe System',
      tagline: 'HACCP & Temperature Monitoring',
      description: 'Automated compliance with real-time temperature monitoring and digital HACCP management.',
      price: 'From £22.50/month',
      href: '/food-safe-system',
      icon: '/logos/food-safe-system/fss-icon.png',
      color: 'product-fss-green',
      colorLight: 'product-fss-green-light',
      colorDark: 'product-fss-green-dark',
    },
    {
      name: 'AllerQ',
      tagline: 'Digital Allergen Menus',
      description: 'QR code allergen menus in 30+ languages. Keep customers safe and compliant.',
      price: '£7.49/month',
      href: '/allerq',
      icon: '/logos/allerq/allerq-icon.png',
      color: 'product-allerq-orange',
      colorLight: 'product-allerq-orange-light',
      colorDark: 'product-allerq-orange-dark',
    },
    {
      name: 'Food Label System',
      tagline: 'Automated Date Labels',
      description: 'Print compliant labels in seconds. 2,000 free labels included every month.',
      price: '£35/month',
      href: '/food-label-system',
      icon: '/logos/food-label-system/fls-icon.png',
      color: 'product-fls-green',
      colorLight: 'product-fls-green-light',
      colorDark: 'product-fls-green-dark',
    },
    {
      name: 'F*** Waste',
      tagline: 'Food Waste Tracking',
      description: 'AI-powered waste tracking. Reduce waste by 30-50% and save thousands.',
      price: '£150/month',
      href: '/f-waste',
      icon: '/logos/fwaste/fwaste-icon.png',
      color: 'product-fw-green',
      colorLight: 'product-fw-green-light',
      colorDark: 'product-fw-green-dark',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Save 12+ Hours Weekly',
      description: 'Eliminate manual paperwork and streamline kitchen operations',
    },
    {
      icon: Shield,
      title: 'Pass Every Inspection',
      description: 'Automated compliance records and instant audit trails',
    },
    {
      icon: TrendingUp,
      title: 'Reduce Costs by 30%',
      description: 'Cut food waste, prevent spoilage, and optimize inventory',
    },
    {
      icon: Users,
      title: 'Trusted by 500+ Kitchens',
      description: 'From independent restaurants to multi-site operators',
    },
  ];

  const stats = [
    { value: '500+', label: 'Kitchens Served' },
    { value: '£2.5M+', label: 'Saved Annually' },
    { value: '100%', label: 'Compliance Rate' },
    { value: '12hrs', label: 'Saved Weekly' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
        ]}
      />

      {/* Hero Section with Video */}
      <section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <HeroVideo
            src="/assets/videos/kitchen-hero.mp4"
            poster="/assets/videos/kitchen-hero-poster.jpg"
            alt="Professional kitchen operations with chefs at work"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm font-semibold text-product-fss-green">
                  Trusted by 500+ Professional Kitchens
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                The Operating System for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-product-fss-green to-product-allerq-orange">
                  Professional Kitchens
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                One intelligent platform for food safety, allergen management, labelling, and waste tracking.
                Save time, reduce costs, and never fail an inspection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green text-white font-bold rounded-xl hover:bg-product-fss-green-dark transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/20"
                >
                  View Pricing
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-product-fss-green mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Floating Card (video provides visual interest) */}
            <div className="relative hidden lg:block">
              {/* Floating Card with backdrop blur */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-product-fss-green mr-3" />
                  <span className="text-lg font-bold text-white">
                    100% Compliance Rate
                  </span>
                </div>
                <p className="text-base text-gray-200 leading-relaxed">
                  Every Kitchen OS customer passes health inspections with confidence.
                  Join 500+ professional kitchens already using our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Why Kitchen Teams Choose Kitchen OS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by chefs and food safety experts. Designed for the modern hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="w-14 h-14 bg-product-fss-green-light rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-product-fss-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Complete Kitchen Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful products that work seamlessly together. Use one or use them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft hover:shadow-soft-xl transition-all duration-300 border-2 border-transparent overflow-hidden"
                style={{
                  '--hover-border-color': `var(--${product.color})`,
                } as React.CSSProperties}
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(135deg, var(--${product.color}) 0%, var(--${product.colorDark}) 100%)`,
                       padding: '2px',
                       mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       maskComposite: 'exclude',
                     }}
                />

                <div className="relative">
                  <div className="flex items-start mb-6">
                    {/* Icon with gradient background */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, var(--${product.color}) 0%, var(--${product.colorDark}) 100%)`
                      }}
                    >
                      <img
                        src={product.icon}
                        alt={product.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold text-brand-navy mb-1 group-hover:transition-colors duration-300"
                        style={{
                          color: `var(--${product.color})`,
                        } as React.CSSProperties}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                        {product.tagline}
                      </p>
                    </div>
                    {/* Price badge */}
                    <div
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        background: `var(--${product.colorLight})`,
                        color: `var(--${product.colorDark})`,
                        border: `1px solid var(--${product.color})20`,
                      } as React.CSSProperties}
                    >
                      {product.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div
                    className="flex items-center font-semibold group-hover:translate-x-2 transition-transform"
                    style={{color: `var(--${product.color})`} as React.CSSProperties}
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Testimonial */}
              <div className="p-12 lg:p-16">
                <div className="mb-8">
                  <svg className="w-12 h-12 text-product-fss-green opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                </div>
                <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8">
                  Kitchen OS transformed our operations completely. We&apos;ve saved over £15,000 this year on waste alone,
                  and our last health inspection was the easiest we&apos;ve ever had.
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-brand-navy text-lg">Sarah Mitchell</p>
                    <p className="text-gray-600">Head Chef, The Grove Hotel</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-full min-h-[400px]">
                <img
                  src="/assets/pexels-marcus-aurelius-4063796.jpg"
                  alt="Professional chef"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            Join 500+ professional kitchens using Kitchen OS. 14-day free trial, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green text-white font-bold rounded-xl hover:bg-product-fss-green-dark transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/20"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
