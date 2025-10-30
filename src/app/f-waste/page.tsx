import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, TrendingDown, BarChart3, Target, Leaf, DollarSign, Camera, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'F*** Waste - Food Waste Tracking & Reduction',
  description: 'Track food waste, identify patterns, and reduce costs. AI-powered insights, photo capture, and sustainability reporting for professional kitchens.',
  openGraph: {
    title: 'F*** Waste - Food Waste Tracking & Reduction | Kitchen OS',
    description: 'Track food waste, identify patterns, and reduce costs. AI-powered insights, photo capture, and sustainability reporting for professional kitchens.',
    url: '/f-waste',
    images: [{ url: '/assets/fuckwaste-02.png', width: 1200, height: 630 }],
  },
};

export default function FWastePage() {
  const features = [
    {
      icon: Camera,
      title: 'Photo Capture',
      description: 'Take a photo of waste before discarding. AI identifies items and suggests prevention strategies.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'See exactly what you\'re wasting, when, and why. Identify patterns and trends instantly.',
    },
    {
      icon: TrendingDown,
      title: 'Waste Reduction Targets',
      description: 'Set reduction goals and track progress. Celebrate wins with your team as waste decreases.',
    },
    {
      icon: DollarSign,
      title: 'Cost Tracking',
      description: 'Calculate the financial impact of waste. See how much money you\'re throwing away each month.',
    },
    {
      icon: Leaf,
      title: 'Sustainability Reporting',
      description: 'Generate CO2 impact reports. Prove your environmental credentials to customers and stakeholders.',
    },
    {
      icon: Target,
      title: 'Root Cause Analysis',
      description: 'Understand why waste happens. Over-prepping? Customer plate waste? Spoilage? Get answers.',
    },
    {
      icon: Users,
      title: 'Team Engagement',
      description: 'Gamify waste reduction with team leaderboards. Turn waste tracking into a team effort.',
    },
    {
      icon: CheckCircle,
      title: 'Multi-Site Comparison',
      description: 'Compare waste across locations. Identify best practices and share them across your operation.',
    },
  ];

  const benefits = [
    'Reduce food waste by 30-50%',
    'Save £5,000-£20,000 per site annually',
    'Cut CO2 emissions and hit sustainability targets',
    'Identify over-ordering and over-prepping',
    'Improve portion control and reduce plate waste',
    'Generate ESG and sustainability reports',
  ];

  const faqs = [
    {
      question: 'How does F*** Waste actually help reduce waste?',
      answer: 'F*** Waste makes waste visible. Most kitchens have no idea what they\'re actually throwing away. By tracking waste with photos and categorization, you quickly identify patterns - like over-prepping salads on Mondays or customers consistently leaving chips. Once you know the problem, you can fix it with better ordering, portion control, or menu changes.',
    },
    {
      question: 'Do we have to weigh every item we throw away?',
      answer: 'No. F*** Waste uses AI-powered photo recognition to estimate weights and identify items. Just take a quick photo before discarding. For more accuracy, you can optionally weigh items, but it\'s not required.',
    },
    {
      question: 'What kind of savings can we expect?',
      answer: 'Most kitchens reduce waste by 30-50% within 6 months. For a typical restaurant doing £500k annual revenue, that translates to £5,000-£15,000 in annual savings. Larger operations save even more - we\'ve seen sites save £20k+ per year.',
    },
    {
      question: 'Can this help with sustainability reporting?',
      answer: 'Absolutely. F*** Waste generates detailed sustainability reports including CO2 emissions saved, waste diverted from landfill, and progress toward net-zero targets. Perfect for ESG reporting, B Corp certification, or marketing your green credentials.',
    },
    {
      question: 'How much does F*** Waste cost?',
      answer: 'Pricing starts at £79/month for a single site. This includes unlimited photo uploads, AI recognition, analytics, and sustainability reporting. Most customers see ROI within the first month. Volume discounts available for multi-site operators. See our pricing page for full details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Track Food Waste, Reduce Costs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fw-green-light">
              AI-powered food waste tracking for professional kitchens. Reduce waste by 30-50%,
              save thousands, and hit your sustainability targets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-product-fw-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
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
              Turn Waste Into Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              F*** Waste gives you complete visibility into food waste, helping you identify problems
              and implement solutions that stick.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-product-fw-green-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-product-fw-green" />
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

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Real Impact, Real Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kitchen OS customers have collectively achieved incredible results with F*** Waste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-product-fw-green mb-2">£9M+</div>
              <div className="text-xl text-gray-700">Total Savings</div>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-product-fw-green mb-2">42%</div>
              <div className="text-xl text-gray-700">Average Waste Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-product-fw-green mb-2">2,400</div>
              <div className="text-xl text-gray-700">Tonnes CO2 Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why F*** Waste Works
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most kitchens throw away 10-15% of the food they buy. That&apos;s money straight into
                the bin. F*** Waste helps you identify exactly what&apos;s being wasted and why,
                so you can take targeted action.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-product-fw-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;F*** Waste opened our eyes to how much we were throwing away. We discovered
                we were over-prepping vegetables by 40% on weekdays. Once we adjusted our prep
                quantities, we cut waste in half and saved over £12,000 in the first year.
                The photo tracking is brilliant - takes 5 seconds and the AI does the rest.&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-navy">Emma Williams</p>
                  <p className="text-gray-600">Operations Manager, GreenLeaf Restaurants (5 sites)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-soft">
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
      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Slash Your Food Waste?
          </h2>
          <p className="text-xl mb-8 text-product-fw-green-light">
            Join hundreds of kitchens using F*** Waste. 14-day free trial, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fw-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors border-2 border-white"
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
          </div>
        </div>
      </section>
    </div>
  );
}
