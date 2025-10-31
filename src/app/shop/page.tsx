import { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Package, Thermometer, FileText, Check, ArrowRight, Shield, Truck, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop - Kitchen OS Hardware & Consumables',
  description: 'Purchase thermal labels for your Food Label System and Bluetooth temperature probes for your Food Safe System. Fast UK delivery with Revolut Pay.',
};

const products = [
  {
    id: 'thermal-labels',
    name: 'Thermal Labels',
    category: 'Food Label System',
    tagline: 'Premium thermal labels for your Food Label System printer',
    description: 'High-quality 58mm thermal labels compatible with your Food Label System printer. Each label includes day dots, use-by fields, and allergen warnings.',
    image: '/logos/food-label-system/fls-icon.png',
    icon: FileText,
    variants: [
      {
        id: 'labels-1000',
        name: '1,000 Labels',
        price: 12.50,
        pricePerLabel: 1.25,
        savings: null,
      },
      {
        id: 'labels-5000',
        name: '5,000 Labels',
        price: 56.25,
        pricePerLabel: 1.13,
        savings: 10,
      },
      {
        id: 'labels-10000',
        name: '10,000 Labels',
        price: 100.00,
        pricePerLabel: 1.00,
        savings: 20,
        popular: true,
      },
    ],
    features: [
      'Compatible with Food Label System printers',
      'Pre-printed day dots and use-by fields',
      'Allergen warning sections included',
      'Strong adhesive for cold surfaces',
      'Certified food-safe materials',
      'Free UK delivery on orders over £50',
    ],
    relatedProduct: {
      name: 'Food Label System',
      href: '/food-label-system',
      note: 'Requires Food Label System subscription',
    },
  },
  {
    id: 'bluetooth-probes',
    name: 'Bluetooth Temperature Probes',
    category: 'Food Safe System',
    tagline: 'Industrial-grade Bluetooth probes for automatic temperature monitoring',
    description: 'Professional wireless temperature sensors with real-time monitoring and alerts. IP67 waterproof rating with ±0.3°C accuracy.',
    image: '/logos/food-safe-system/fss-icon.png',
    icon: Thermometer,
    variants: [
      {
        id: 'probe-1',
        name: 'Single Probe',
        price: 89.00,
        note: 'Minimum 3 probes required for Food Safe System',
        disabled: true,
      },
      {
        id: 'probe-3',
        name: '3 Probes',
        price: 249.00,
        pricePerProbe: 83.00,
        savings: null,
        setupFee: 200.00,
      },
      {
        id: 'probe-5',
        name: '5 Probes',
        price: 399.00,
        pricePerProbe: 79.80,
        savings: 5,
        setupFee: 200.00,
        popular: true,
      },
      {
        id: 'probe-10',
        name: '10 Probes',
        price: 749.00,
        pricePerProbe: 74.90,
        savings: 10,
        setupFee: 200.00,
      },
    ],
    features: [
      'IP67 waterproof rating (1m depth)',
      '±0.3°C accuracy across -40°C to +125°C',
      '100m Bluetooth range (open space)',
      '2-year battery life with replaceable CR2032',
      'Real-time alerts via Food Safe System app',
      'Includes mounting hardware and setup',
    ],
    relatedProduct: {
      name: 'Food Safe System',
      href: '/food-safe-system',
      note: 'Requires Food Safe System subscription (£12/probe/month)',
    },
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kitchen OS Shop</h1>
              <p className="text-gray-600 mt-1">Hardware and consumables for your kitchen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-green-800">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <Truck className="w-4 h-4" />
              <span className="font-medium">Free UK Delivery Over £50</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <CreditCard className="w-4 h-4" />
              <span className="font-medium">Pay with Revolut</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <Package className="w-4 h-4" />
              <span className="font-medium">Next Day Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="scroll-mt-24">
              {/* Product Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md p-4 flex items-center justify-center flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-green-600 mb-1">
                    {product.category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-gray-700">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Variants */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Quantity</h3>

                  {product.variants.map((variant) => (
                    <div
                      key={variant.id}
                      className={`
                        relative bg-white rounded-xl border-2 p-6 transition-all
                        ${variant.disabled
                          ? 'border-gray-200 opacity-60 cursor-not-allowed'
                          : variant.popular
                          ? 'border-green-500 shadow-lg'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md cursor-pointer'
                        }
                      `}
                    >
                      {variant.popular && (
                        <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {variant.name}
                          </h4>

                          {variant.pricePerLabel && (
                            <p className="text-sm text-gray-600 mb-2">
                              {variant.pricePerLabel.toFixed(2)}p per label
                            </p>
                          )}

                          {variant.pricePerProbe && (
                            <p className="text-sm text-gray-600 mb-2">
                              £{variant.pricePerProbe.toFixed(2)} per probe
                            </p>
                          )}

                          {variant.savings && (
                            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                              Save {variant.savings}%
                            </div>
                          )}

                          {variant.setupFee && (
                            <p className="text-sm text-gray-500 mb-2">
                              + £{variant.setupFee.toFixed(2)} one-time setup fee
                            </p>
                          )}

                          {variant.note && (
                            <p className="text-sm text-amber-600 font-medium">
                              {variant.note}
                            </p>
                          )}
                        </div>

                        <div className="text-right">
                          <div className="text-3xl font-bold text-gray-900">
                            £{variant.price.toFixed(2)}
                          </div>

                          {!variant.disabled && (
                            <button
                              className={`
                                mt-3 px-6 py-2 rounded-lg font-semibold transition-all
                                ${variant.popular
                                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-md'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
                              `}
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Info */}
                <div className="space-y-6">
                  {/* Features */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Product */}
                  <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {product.relatedProduct.note}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Learn more about the {product.relatedProduct.name} and start your subscription.
                        </p>
                        <Link
                          href={product.relatedProduct.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          View {product.relatedProduct.name}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revolut Pay Integration Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Checkout with Revolut Pay
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Fast, secure payments powered by Revolut. Pay with your Revolut account, card, or Apple/Google Pay. All transactions are encrypted and PCI-DSS compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Instant confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Buyer protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do I need a subscription to purchase hardware?
            </h3>
            <p className="text-gray-700">
              Yes. The Bluetooth temperature probes require an active Food Safe System subscription (£12/probe/month). Thermal labels require a Food Label System subscription (£35/month, includes 2,000 free labels). Hardware purchases are one-time costs, while subscriptions provide the software platform, cloud storage, and ongoing support.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What&apos;s your delivery policy?
            </h3>
            <p className="text-gray-700">
              We offer free UK delivery on orders over £50. Orders are dispatched next working day via Royal Mail Tracked 24 or DPD. Typical delivery is 1-2 working days. For orders under £50, standard delivery is £4.95. Express delivery options available at checkout.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I return products if they don&apos;t work for me?
            </h3>
            <p className="text-gray-700">
              Yes. We offer a 30-day money-back guarantee on all hardware purchases. If you&apos;re not satisfied, return the products in their original condition for a full refund. Opened thermal label rolls cannot be returned for hygiene reasons, but unopened rolls are eligible for return.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do you offer bulk discounts for multi-site operators?
            </h3>
            <p className="text-gray-700">
              Yes! If you&apos;re ordering for multiple sites (5+ locations), contact our sales team for volume pricing on both hardware and consumables. We also offer consolidated billing and centralized account management for restaurant groups. Email sales@kitchenos.uk or call 0800 123 4567.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-700">
              We accept all major credit and debit cards via Revolut Pay, including Visa, Mastercard, and American Express. You can also pay directly through your Revolut account, Apple Pay, or Google Pay. All payments are secured with 3D Secure authentication and encrypted end-to-end.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 border-t border-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-green-50 text-lg mb-8">
            Our team can help you select the right products and quantities for your kitchen setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all border-2 border-green-400 inline-flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-6">
            Free consultation • No obligation • Same-day response
          </p>
        </div>
      </div>
    </main>
  );
}
