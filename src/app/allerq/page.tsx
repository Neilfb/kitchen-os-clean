import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, QrCode, Globe, Smartphone, Shield, Zap, Languages, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AllerQ - Digital Allergen Menus with QR Codes',
  description: 'Create compliant digital allergen menus with QR codes. Multi-language support, instant updates, and complete allergen traceability for restaurants and cafes.',
  openGraph: {
    title: 'AllerQ - Digital Allergen Menus with QR Codes | Kitchen OS',
    description: 'Create compliant digital allergen menus with QR codes. Multi-language support, instant updates, and complete allergen traceability for restaurants and cafes.',
    url: '/allerq',
    images: [{ url: '/assets/allerq_logo_small_icon_only.png', width: 1200, height: 630 }],
  },
};

export default function AllerQPage() {
  const features = [
    {
      icon: QrCode,
      title: 'QR Code Menus',
      description: 'Customers scan a QR code to view your menu with full allergen information. No app download required.',
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Display your menu in multiple languages automatically. Perfect for international customers and tourist areas.',
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Update your menu and allergen information in seconds. Changes go live immediately across all QR codes.',
    },
    {
      icon: Shield,
      title: 'Full Compliance',
      description: 'Meets UK allergen labelling requirements (Natasha\'s Law). Keep customers safe and your business compliant.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-Optimized',
      description: 'Beautiful, fast-loading menus designed for mobile devices. Works on any smartphone or tablet.',
    },
    {
      icon: Globe,
      title: 'Works Anywhere',
      description: 'No Wi-Fi needed for customers. QR codes work anywhere with mobile data. Perfect for outdoor seating.',
    },
    {
      icon: Utensils,
      title: 'Dietary Filters',
      description: 'Customers filter by dietary requirements (vegan, gluten-free, dairy-free, etc.) to find safe dishes instantly.',
    },
    {
      icon: CheckCircle,
      title: 'Audit Trail',
      description: 'Track which customers viewed allergen information. Full records for due diligence and inspections.',
    },
  ];

  const benefits = [
    'Eliminate printed allergen folders',
    'Update menus in seconds, not hours',
    'Reduce allergen-related incidents',
    'Serve international customers effortlessly',
    'Meet Natasha\'s Law requirements',
    'Track customer allergen queries',
  ];

  const faqs = [
    {
      question: 'How does AllerQ work for customers?',
      answer: 'Customers simply scan a QR code on your table or menu using their phone camera. The digital menu opens instantly in their web browser - no app download required. They can then filter dishes by allergens, view ingredients, and select their preferred language.',
    },
    {
      question: 'Is this compliant with Natasha\'s Law?',
      answer: 'Yes. AllerQ meets all UK allergen labelling requirements including Natasha\'s Law (PPD regulations). You can display full ingredient lists and allergen information for every menu item, with a complete audit trail.',
    },
    {
      question: 'Can I update the menu myself?',
      answer: 'Absolutely. AllerQ includes an easy-to-use web dashboard where you can update dishes, ingredients, and allergen information in minutes. Changes go live instantly across all your QR codes.',
    },
    {
      question: 'What languages are supported?',
      answer: 'AllerQ supports over 30 languages including English, Spanish, French, German, Italian, Polish, Arabic, Mandarin, and more. Customers can switch languages with one tap.',
    },
    {
      question: 'How much does AllerQ cost?',
      answer: '£7.49/month per restaurant for unlimited menus. Annual plan available at £74/year (save £15). This includes unlimited menu items, all 30+ languages, QR code generation, and customer analytics. See our pricing page for full details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-allerq-orange to-product-allerq-orange-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <img
              src="/logos/allerq/allerq-icon.png"
              alt="AllerQ"
              className="w-20 h-20 mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Allergen Menus with QR Codes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-product-allerq-orange-light">
              Keep customers safe with compliant digital allergen menus. Multi-language support,
              instant updates, and complete traceability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-allerq-orange font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-product-allerq-orange-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
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
              Everything You Need for Allergen Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AllerQ makes it easy to provide clear allergen information to every customer, in any language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-product-allerq-orange-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-product-allerq-orange" />
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
                Why Restaurants Choose AllerQ
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AllerQ eliminates the hassle of printed allergen folders, makes menu updates instant,
                and gives your customers confidence in every dish they order.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-product-allerq-orange mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-product-allerq-orange-light to-white p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;AllerQ has been a game-changer for our restaurant. We used to spend hours
                reprinting allergen folders every time the menu changed. Now we just update
                it once in the dashboard and it&apos;s live instantly. Our international customers
                love the multi-language feature too - we&apos;ve had zero allergen incidents since switching.&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-navy">Marco Rossi</p>
                  <p className="text-gray-600">Owner, La Cucina Italiana</p>
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
      <section className="py-20 bg-gradient-to-br from-product-allerq-orange to-product-allerq-orange-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Digital with Allergen Menus?
          </h2>
          <p className="text-xl mb-8 text-product-allerq-orange-light">
            Join hundreds of restaurants using AllerQ. 14-day free trial, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-allerq-orange font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-allerq-orange-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors border-2 border-white"
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
