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
      feature: 'Automated Temperature Monitoring',
      kitchenOS: true,
      competitor: true,
      notes: 'Both offer LoRaWAN sensors for 24/7 monitoring',
    },
    {
      feature: 'Real-Time Alerts',
      kitchenOS: true,
      competitor: true,
      notes: 'Instant notifications when temperatures go out of range',
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
      notes: 'Both offer iOS and Android apps',
    },
    {
      feature: 'UK Support Team',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS has UK-based support, Trailapp is US-based',
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
                <strong>Trailapp</strong> is a solid HACCP management platform focused on temperature monitoring
                and compliance documentation. It&apos;s popular in the US market and offers reliable sensor technology.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Kitchen OS</strong> goes beyond HACCP to offer a complete kitchen management platform.
                In addition to temperature monitoring (Food Safe System), you get allergen menu management (AllerQ),
                automated date labelling (Food Label System), and food waste tracking (F*** Waste) - all in one integrated platform.
              </p>
              <p className="text-lg leading-relaxed">
                If you only need temperature monitoring, both products work well. If you want to solve multiple
                kitchen challenges with one integrated system, Kitchen OS is the better choice.
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
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Kitchen OS</h3>
              <div className="text-3xl font-bold text-product-fss-green mb-4">From £49/month</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Temperature monitoring (Food Safe System)</span>
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
              <h3 className="text-xl font-bold text-brand-navy mb-4">Trailapp</h3>
              <div className="text-3xl font-bold text-gray-700 mb-4">From $49/month</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Temperature monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>HACCP compliance tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>US-based support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Free trial available</span>
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
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Integrated Platform vs Single Purpose
              </h3>
              <p className="text-gray-700">
                Kitchen OS is a complete kitchen management platform. Beyond temperature monitoring,
                you can add allergen menus, date labelling, and waste tracking - all integrated and
                managed from one system. Trailapp focuses solely on HACCP and temperature monitoring.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                UK vs US Focus
              </h3>
              <p className="text-gray-700">
                Kitchen OS is built in the UK, with UK-based support and pricing in GBP. We understand
                UK regulations, FSA guidelines, and EHO requirements. Trailapp is US-based with primarily
                US market focus.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Built by Chefs
              </h3>
              <p className="text-gray-700">
                Kitchen OS was built by professional chefs who understand real kitchen challenges.
                Every feature is designed around actual kitchen workflows, not abstract theory.
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
