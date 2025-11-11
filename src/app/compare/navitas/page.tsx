import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Navitas - HACCP Comparison',
  description: 'Compare Kitchen OS and Navitas for HACCP management and food safety compliance.',
  openGraph: {
    title: 'Kitchen OS vs Navitas - HACCP Comparison',
    description: 'Compare Kitchen OS and Navitas for HACCP management and food safety compliance.',
    url: '/compare/navitas',
  },
};

export default function CompareNavitasPage() {
  const comparisonFeatures = [
    { feature: 'Temperature Monitoring', kitchenOS: true, competitor: true, notes: 'Both offer automated monitoring' },
    { feature: 'HACCP Compliance Tools', kitchenOS: true, competitor: true, notes: 'Digital checklists and documentation' },
    { feature: 'Real-Time Alerts', kitchenOS: true, competitor: true, notes: 'Instant notifications for issues' },
    { feature: 'Food Waste Tracking', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes F*** Waste' },
    { feature: 'Digital Allergen Menus', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes AllerQ' },
    { feature: 'Automated Date Labels', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Label System' },
    { feature: 'Multi-Site Management', kitchenOS: true, competitor: true, notes: 'Both support multiple locations' },
    { feature: 'UK-Based Support', kitchenOS: true, competitor: true, notes: 'Both have UK presence' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen OS vs Navitas</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Compare HACCP management platforms. See the key differences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Quick Summary</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Navitas</strong> is an established UK-based HACCP platform with strong temperature
                monitoring and compliance tools. Popular in hospitality and healthcare sectors, Navitas has
                built a solid reputation over the years. However, customers report that their system can be
                device-specific with higher upfront costs, and they typically require 20-month contract commitments.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Food Safe System (Kitchen OS)</strong> offers similar HACCP capabilities but with a
                more user-focused approach. Customer feedback consistently highlights FSS&apos;s superior customer
                support and ease of use. The platform is app-based and works on any device - no expensive
                proprietary hardware required. Most importantly, FSS operates on flexible month-to-month contracts
                at a transparent £15/month per location.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond temperature monitoring, Kitchen OS provides allergen management (AllerQ), automated date
                labelling (Food Label System), and waste tracking (F*** Waste) - all integrated into one platform.
                If you want flexibility, superior support, and a more affordable solution, Food Safe System is the clear choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Feature Comparison</h2>
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fss-green">Kitchen OS</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Navitas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{item.feature}</div>
                      {item.notes && <div className="text-sm text-gray-500 mt-1">{item.notes}</div>}
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
                  <span><strong>Month-to-month</strong> contracts - no lengthy commitments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>App-based</strong> - works on all devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Superior customer support (per customer feedback)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>14-day free trial</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Navitas</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">Quote-based</div>
              <div className="text-sm text-gray-600 mb-4">contact for pricing</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>20-month</strong> contract commitments typical</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Device-specific</strong> hardware required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Higher upfront costs for hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Established HACCP platform</span>
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
                Superior User Experience & Customer Support
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Customer feedback consistently highlights FSS as being more
                user-focused with intuitive interfaces and workflows designed around actual kitchen operations.
                Users report superior customer support with responsive UK-based teams who understand hospitality challenges.
              </p>
              <p className="text-gray-700">
                <strong>Navitas:</strong> While offering solid functionality, customers report that the system
                can be less intuitive and support responsiveness varies. The platform has been on the market longer
                but hasn&apos;t evolved as quickly to meet modern user experience expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Contract Flexibility: Month-to-Month vs 20-Month Commitments
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Operates on flexible month-to-month contracts at a transparent
                £15/month per location. No lengthy tie-ins, no cancellation fees. If it doesn&apos;t work for you,
                you can cancel anytime. This demonstrates confidence in the product and puts you in control.
              </p>
              <p className="text-gray-700">
                <strong>Navitas:</strong> Typically requires 20-month contract commitments. This locks you in for
                nearly two years, reducing your flexibility to switch if the system doesn&apos;t meet your needs
                or if better alternatives become available. Pricing is quote-based rather than transparent.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Device Compatibility: Universal App vs Device-Specific Hardware
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> App-based platform that works on any device - smartphones,
                tablets, or computers. No expensive proprietary hardware required. Use the devices you already
                have, reducing upfront costs and making deployment simple. Staff can use their own familiar devices.
              </p>
              <p className="text-gray-700">
                <strong>Navitas:</strong> System can be device-specific, requiring proprietary hardware that adds
                significantly to upfront costs. This means higher initial investment and potential compatibility
                issues if you want to expand or change devices later. Tied to specific hardware vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Kitchen OS in Action?</h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo to see how Kitchen OS compares to Navitas for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
