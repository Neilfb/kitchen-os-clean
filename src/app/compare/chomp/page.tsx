import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Chomp - Temperature Monitoring Comparison',
  description: 'Compare Food Safe System and Chomp for temperature monitoring. See pricing, features, and cost savings for New Zealand hospitality operations.',
  openGraph: {
    title: 'Kitchen OS vs Chomp - Temperature Monitoring Comparison',
    description: 'Compare Food Safe System and Chomp for temperature monitoring. See pricing, features, and cost savings for New Zealand hospitality operations.',
    url: '/compare/chomp',
  },
};

export default function CompareChompPage() {
  const comparisonFeatures = [
    {
      feature: 'Wireless Range',
      kitchenOS: true,
      competitor: false,
      notes: 'FSS: 1,000m LoRaWAN range. Chomp: 5m Bluetooth range (severely limited)'
    },
    {
      feature: '24/7 Automated Monitoring',
      kitchenOS: true,
      competitor: true,
      notes: 'Both offer continuous temperature tracking'
    },
    {
      feature: 'Real-Time Alerts',
      kitchenOS: true,
      competitor: true,
      notes: 'Instant notifications when temperatures go out of range'
    },
    {
      feature: 'Sensor Replacement Included',
      kitchenOS: true,
      competitor: false,
      notes: 'FSS: Free with subscription. Chomp: Must purchase replacements'
    },
    {
      feature: 'Affordable Setup Costs',
      kitchenOS: true,
      competitor: false,
      notes: 'FSS: $400 setup. Chomp: $1,779 upfront (4.5x more)'
    },
    {
      feature: 'Food Waste Tracking',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes F*** Waste for cost savings'
    },
    {
      feature: 'Digital Allergen Menus',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes AllerQ for allergen compliance'
    },
    {
      feature: 'Automated Date Labels',
      kitchenOS: true,
      competitor: false,
      notes: 'Kitchen OS includes Food Label System with barcode tracking'
    },
    {
      feature: 'Cloud Dashboard',
      kitchenOS: true,
      competitor: true,
      notes: 'Both offer web-based management'
    },
    {
      feature: 'Multi-Site Management',
      kitchenOS: true,
      competitor: true,
      notes: 'Both support multiple locations'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kitchen OS vs Chomp
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Compare temperature monitoring solutions. See why Food Safe System saves New Zealand operators $3,491 in the first year alone.
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
                <strong>Chomp</strong> is a New Zealand-based temperature monitoring system that uses Bluetooth
                technology with a severely limited 5-meter range. While Chomp offers basic monitoring capabilities,
                the short range means sensors must be very close to base stations, requiring more hardware for
                complete coverage. First-year costs are high: $1,779 upfront plus $326/month for 6 sensors ($5,691 total).
                When sensors fail, you must purchase replacements.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Food Safe System (Kitchen OS)</strong> uses advanced LoRaWAN technology with a 1,000-meter
                range - 200x greater than Chomp&apos;s Bluetooth. This means fewer base stations, simpler installations,
                and lower costs. FSS costs just $400 setup plus $150/month for 6 sensors ($2,200 first year).
                Sensor replacement is included with your subscription at no extra cost. <strong>Save $3,491 in year one alone.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                Beyond temperature monitoring, Kitchen OS provides allergen management (AllerQ), automated date
                labelling (Food Label System), and waste tracking (F*** Waste) - all integrated into one platform.
                If you want superior technology at half the cost, Food Safe System is the clear choice for New Zealand operations.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Chomp</th>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Detailed Cost Comparison
          </h2>

          {/* Cost Breakdown Table */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost Item</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fss-green">Food Safe System</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Chomp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">Setup / Upfront Costs</div>
                    <div className="text-sm text-gray-500 mt-1">Initial investment to get started</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-product-fss-green">$400</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-gray-700">$1,779</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">Monthly Cost (6 sensors)</div>
                    <div className="text-sm text-gray-500 mt-1">Ongoing subscription for temperature monitoring</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-product-fss-green">$150/month</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-gray-700">$326/month</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">Year 1 Total Cost</div>
                    <div className="text-sm text-gray-500 mt-1">Setup + 12 months subscription</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-product-fss-green">$2,200</div>
                    <div className="text-xs text-gray-600 mt-1">$400 + ($150 × 12)</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-gray-700">$5,691</div>
                    <div className="text-xs text-gray-600 mt-1">$1,779 + ($326 × 12)</div>
                  </td>
                </tr>
                <tr className="bg-product-fss-green text-white">
                  <td className="px-6 py-4">
                    <div className="text-base font-bold">First Year Savings with FSS</div>
                    <div className="text-sm text-green-100 mt-1">Save more than half with Food Safe System</div>
                  </td>
                  <td className="px-6 py-4 text-center" colSpan={2}>
                    <div className="text-3xl font-bold">$3,491</div>
                    <div className="text-sm text-green-100 mt-1">61% cost reduction</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Cost Considerations */}
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h3 className="text-xl font-bold text-brand-navy mb-4">Additional Cost Considerations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-product-fss-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Sensor Replacement</p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-product-fss-green">FSS:</strong> Included free with subscription.
                    <strong className="text-gray-900 ml-2">Chomp:</strong> Must purchase replacements when sensors fail (additional cost).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-product-fss-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Installation Complexity</p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-product-fss-green">FSS:</strong> 1,000m range means fewer base stations, simpler setup.
                    <strong className="text-gray-900 ml-2">Chomp:</strong> 5m Bluetooth range requires more hardware for coverage (higher costs).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-product-fss-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Integrated Platform Benefits</p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-product-fss-green">FSS:</strong> Includes AllerQ (allergen menus), Food Label System (date labelling),
                    F*** Waste (waste tracking) - complete kitchen management in one platform.
                  </p>
                </div>
              </div>
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
                Significant Cost Savings: $3,491 First Year
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Total first-year cost of just $2,200 ($400 setup + $150/month).
                That&apos;s less than half the cost of Chomp. The $3,491 savings in year one alone can be reinvested
                in your business - better ingredients, staff training, or equipment upgrades.
              </p>
              <p className="text-gray-700">
                <strong>Chomp:</strong> First-year cost of $5,691 ($1,779 upfront + $326/month). The high upfront
                cost creates a barrier to entry, and ongoing monthly costs are more than double FSS. This pricing
                makes professional temperature monitoring unaffordable for many New Zealand hospitality operators.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Superior Technical Capabilities: 1,000m vs 5m Range
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Uses LoRaWAN technology with 1,000-meter range. This means sensors
                can be placed throughout large kitchens, storage areas, and even separate buildings - all communicating
                with a single base station. Fewer hardware units means lower costs and simpler management.
              </p>
              <p className="text-gray-700">
                <strong>Chomp:</strong> Uses Bluetooth with only 5-meter range. Sensors must be within 5 meters of
                base stations, severely limiting placement options. Large kitchens need multiple base stations for
                coverage, increasing both upfront and ongoing costs. The short range is a fundamental technical limitation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Sensor Replacement Included vs Must Purchase
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Sensor replacement is included with your subscription at no extra cost.
                When sensors fail (which they eventually will), we replace them free. This predictable cost structure
                makes budgeting simple and ensures your monitoring system never goes down due to cost concerns.
              </p>
              <p className="text-gray-700">
                <strong>Chomp:</strong> When sensors fail, you must purchase replacements. This creates unpredictable
                costs and potential downtime if budget isn&apos;t available for immediate replacement. Over time, these
                replacement costs add significantly to the total cost of ownership.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Low Setup Costs: $400 vs $1,779
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Just $400 to get started with professional temperature monitoring.
                This low barrier to entry means businesses of all sizes can afford proper HACCP compliance. Get up and
                running quickly without a major capital investment.
              </p>
              <p className="text-gray-700">
                <strong>Chomp:</strong> $1,779 upfront - more than 4 times FSS&apos;s setup cost. This high initial
                investment puts professional monitoring out of reach for smaller operators. Combined with expensive
                monthly fees, Chomp pricing favors only larger, well-funded operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For New Zealand Operations Callout */}
      <section className="py-12 bg-blue-50 border-t-4 border-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                NZ
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">For New Zealand Hospitality Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                While Chomp is based in New Zealand, Food Safe System offers superior value for Kiwi operators.
                The $3,491 first-year savings, combined with LoRaWAN&apos;s 200x greater range and included sensor
                replacement, makes FSS the smarter choice. Our UK support team understands hospitality operations
                and provides responsive service. Kitchen OS works seamlessly for New Zealand businesses looking to
                save costs while improving food safety compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save $3,491 in Your First Year?
          </h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo to see how Kitchen OS delivers superior temperature monitoring at half the cost of Chomp.
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
