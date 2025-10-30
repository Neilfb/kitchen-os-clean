import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Winnow - Food Waste Tracking Comparison',
  description: 'Compare Kitchen OS F*** Waste and Winnow for food waste tracking. See features, pricing, and key differences.',
  openGraph: {
    title: 'Kitchen OS vs Winnow - Food Waste Tracking Comparison',
    description: 'Compare Kitchen OS F*** Waste and Winnow for food waste tracking. See features, pricing, and key differences.',
    url: '/compare/winnow',
  },
};

export default function CompareWinnowPage() {
  const comparisonFeatures = [
    {
      feature: 'AI-Powered Waste Recognition',
      kitchenOS: true,
      competitor: true,
      notes: 'Both use AI to identify waste items from photos',
    },
    {
      feature: 'Cost Tracking',
      kitchenOS: true,
      competitor: true,
      notes: 'Calculate financial impact of waste',
    },
    {
      feature: 'HACCP & Temperature Monitoring',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes Food Safe System',
    },
    {
      feature: 'Digital Allergen Menus',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes AllerQ',
    },
    {
      feature: 'Automated Date Labels',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes Food Label System',
    },
    {
      feature: 'Sustainability Reporting',
      kitchenOS: true,
      competitor: true,
      notes: 'Both offer CO2 and ESG reports',
    },
    {
      feature: 'Weighing Scales Required',
      kitchenOS: false,
      competitor: true,
      notes: 'Winnow requires specialized smart scales, Kitchen OS uses photo-based estimation',
    },
    {
      feature: 'UK Support & Pricing',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS has UK-based support and GBP pricing',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kitchen OS vs Winnow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fw-green-light">
              Both platforms track food waste. Here&apos;s how F*** Waste compares to Winnow.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Quick Summary</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Winnow</strong> is a well-established food waste tracking platform popular with large hotels
                and contract caterers. It uses smart scales and AI cameras to track waste with high accuracy.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Kitchen OS F*** Waste</strong> offers similar waste tracking capabilities but with a simpler,
                more flexible approach - just take a photo. Beyond waste tracking, Kitchen OS provides temperature
                monitoring, allergen management, and date labelling in one integrated platform.
              </p>
              <p className="text-lg leading-relaxed">
                Winnow excels for large-scale operations requiring maximum accuracy. Kitchen OS is better for
                restaurants and smaller operations wanting waste tracking plus complete kitchen management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fw-green">Kitchen OS</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Winnow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{item.feature}</div>
                      {item.notes && (
                        <div className="text-sm text-gray-500 mt-1">{item.notes}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.kitchenOS ? (
                        <CheckCircle className="w-6 h-6 text-product-fw-green mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitor ? (
                        <CheckCircle className="w-6 h-6 text-gray-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Pricing Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Kitchen OS</h3>
              <div className="text-3xl font-bold text-product-fw-green mb-4">From £79/month</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fw-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>F*** Waste tracking with photo-based AI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fw-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optional: Food Safe System, AllerQ, Food Label System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fw-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>No specialized hardware required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fw-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>14-day free trial</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Winnow</h3>
              <div className="text-3xl font-bold text-gray-700 mb-4">Custom pricing</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Smart scales and AI cameras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>High-accuracy waste tracking</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Requires specialized hardware (£5k+ upfront)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Enterprise-focused pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Key Differences
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Photo-Based vs Hardware-Based
              </h3>
              <p className="text-gray-700">
                Winnow requires smart scales and AI cameras (£5,000+ upfront investment).
                Kitchen OS F*** Waste uses simple photo capture - just snap a picture with your phone.
                Lower barrier to entry, faster setup, no specialized hardware to maintain.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Complete Platform vs Single Purpose
              </h3>
              <p className="text-gray-700">
                Winnow focuses solely on waste tracking. Kitchen OS offers waste tracking plus temperature
                monitoring, allergen menus, and date labelling - all integrated. One platform for all
                kitchen challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Restaurant vs Enterprise Focus
              </h3>
              <p className="text-gray-700">
                Winnow targets large hotels and contract caterers with enterprise budgets.
                Kitchen OS serves restaurants, cafes, and smaller operations. More flexible pricing,
                easier to get started, no long-term contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Try F*** Waste?
          </h2>
          <p className="text-xl mb-8 text-product-fw-green-light">
            No smart scales required. Start tracking waste today with just your smartphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
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
    </div>
  );
}
