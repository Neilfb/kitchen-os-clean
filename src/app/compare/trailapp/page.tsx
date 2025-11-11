import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Trailapp - HACCP Comparison',
  description: 'Compare Kitchen OS and Trailapp for HACCP management and temperature monitoring. See features, pricing, and key differences.',
  openGraph: {
    title: 'Kitchen OS vs Trailapp - HACCP Comparison',
    description: 'Compare Kitchen OS and Trailapp for HACCP management and temperature monitoring. See features, pricing, and key differences.',
    url: '/compare/trailapp',
  },
};

export default function CompareTrailappPage() {
  const comparisonFeatures = [
    {
      feature: 'Native Temperature Monitoring',
      kitchenOS: true,
      competitor: false,
      notes: 'FSS includes integrated LoRaWAN sensors. TrailApp requires external provider integrations (additional costs)',
    },
    {
      feature: 'Automated Temperature Monitoring',
      kitchenOS: true,
      competitor: true,
      notes: 'FSS: Native solution included. TrailApp: Via third-party integrations',
    },
    {
      feature: 'Real-Time Alerts',
      kitchenOS: true,
      competitor: true,
      notes: 'Both offer instant notifications when temperatures go out of range',
    },
    {
      feature: 'Food Waste Tracking',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes F*** Waste for waste tracking and cost savings',
    },
    {
      feature: 'Digital Allergen Menus',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes AllerQ for QR code allergen menus',
    },
    {
      feature: 'Automated Date Labels',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes Food Label System with barcode tracking',
    },
    {
      feature: 'Multi-Site Management',
      kitchenOS: true,
      competitor: true,
      notes: 'Both support multiple locations from one dashboard',
    },
    {
      feature: 'Mobile App',
      kitchenOS: true,
      competitor: true,
      notes: 'Both are UK companies with UK-based support teams',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kitchen OS vs Trailapp
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Both Kitchen OS and Trailapp offer HACCP management solutions. Here&apos;s how they compare.
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
                <strong>TrailApp</strong> is a UK company offering a <strong>generic digital checklist</strong> platform
                that can be adapted for various industries. For temperature monitoring, TrailApp requires integration with
                external providers, which adds to overall costs.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Food Safe System (Kitchen OS)</strong> is <strong>hospitality and food safety focused</strong> from the ground up.
                FSS includes integrated LoRaWAN temperature monitoring as a native solution - no external integrations needed.
                Beyond temperature monitoring, Kitchen OS offers allergen menu management (AllerQ), automated date labelling
                (Food Label System), and food waste tracking (F*** Waste) - all in one integrated platform.
              </p>
              <p className="text-lg leading-relaxed">
                If you want a purpose-built food safety solution with integrated temperature monitoring at a significantly
                lower cost (£15/month vs £75/month per location), Food Safe System is the clear choice.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fss-green">Kitchen OS</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Trailapp</th>
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
                        <CheckCircle className="w-6 h-6 text-product-fss-green mx-auto" />
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
            <div className="bg-white p-8 rounded-lg shadow-soft border-2 border-product-fss-green">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Food Safe System</h3>
              <div className="text-3xl font-bold text-product-fss-green mb-2">From £15/month</div>
              <div className="text-sm text-gray-600 mb-4">per location</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Native</strong> temperature monitoring with LoRaWAN sensors included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time alerts and HACCP compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optional add-ons: AllerQ, Food Label System, F*** Waste</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>UK-based support team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>14-day free trial</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-4">TrailApp</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">From £75/month</div>
              <div className="text-sm text-gray-600 mb-4">per location</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Generic digital checklists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Temperature monitoring via <strong>external integrations</strong> (extra cost)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>HACCP compliance tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>UK-based support</span>
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
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg border-l-4 border-product-fss-green">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Native Temperature Monitoring vs External Integrations
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Integrated LoRaWAN temperature monitoring is included as a native solution.
                Sensors are part of the system from day one - no additional integrations needed.
              </p>
              <p className="text-gray-700">
                <strong>TrailApp:</strong> Requires integration with external temperature monitoring providers, which adds
                to your costs and complexity. You'll need to manage multiple vendor relationships and potential compatibility issues.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Food Safety Focused vs Generic Checklists
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Purpose-built for hospitality and food safety from the ground up.
                Every feature is designed specifically for professional kitchens and HACCP compliance.
              </p>
              <p className="text-gray-700">
                <strong>TrailApp:</strong> Generic digital checklist platform that can be adapted for various industries.
                While flexible, it requires more configuration to meet specific food safety needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Integrated Platform vs Single Purpose
              </h3>
              <p className="text-gray-700">
                Kitchen OS is a complete kitchen management platform. Beyond temperature monitoring,
                you can add allergen menus (AllerQ), date labelling (Food Label System), and waste tracking (F*** Waste) -
                all integrated and managed from one system. TrailApp focuses primarily on checklist management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Built by Chefs for Kitchens
              </h3>
              <p className="text-gray-700">
                Kitchen OS was built by professional chefs who understand real kitchen challenges.
                Every feature is designed around actual kitchen workflows, not abstract theory. Both companies
                are UK-based with UK support teams, but Food Safe System is specifically designed for hospitality operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See Kitchen OS in Action?
          </h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo to see how Kitchen OS compares to Trailapp for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors border-2 border-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
