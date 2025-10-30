import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS - The Operating System for Professional Kitchens',
  description: 'Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform. Trusted by hospitality leaders.',
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
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'AllerQ',
      tagline: 'Digital Allergen Menus',
      description: 'QR code allergen menus in 30+ languages. Keep customers safe and compliant.',
      price: '£7.49/month',
      href: '/allerq',
      icon: '/logos/allerq/allerq-icon.png',
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Food Label System',
      tagline: 'Automated Date Labels',
      description: 'Print compliant labels in seconds. 2,000 free labels included every month.',
      price: '£35/month',
      href: '/food-label-system',
      icon: '/logos/food-label-system/fls-icon.png',
      color: 'from-green-600 to-green-700',
    },
    {
      name: 'F*** Waste',
      tagline: 'Food Waste Tracking',
      description: 'AI-powered waste tracking. Reduce waste by 30-50% and save thousands.',
      price: '£150/month',
      href: '/f-waste',
      icon: '/logos/fwaste/fwaste-icon.png',
      color: 'from-green-700 to-green-800',
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-allerq-orange rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
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

            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-product-fss-green/20 to-product-allerq-orange/20 rounded-3xl blur-2xl"></div>
              <img
                src="/assets/pexels-carlo-martin-alcordo-1279322-2449665.jpg"
                alt="Professional kitchen operations"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-product-fss-green mr-2" />
                  <span className="text-sm font-semibold text-brand-navy">
                    100% Compliance Rate
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Every Kitchen OS customer passes health inspections with confidence
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
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-product-fss-green p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-start mb-6">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-16 h-16 mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-navy group-hover:text-product-fss-green transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                      {product.tagline}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-product-fss-green">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center text-product-fss-green font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5" />
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
                  Kitchen OS transformed our operations completely. We've saved over £15,000 this year on waste alone,
                  and our last health inspection was the easiest we've ever had.
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
