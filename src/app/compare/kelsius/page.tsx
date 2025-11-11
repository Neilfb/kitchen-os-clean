import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Kelsius - Temperature Monitoring Comparison',
  description: 'Compare Kitchen OS and Kelsius for temperature monitoring and HACCP compliance.',
  openGraph: {
    title: 'Kitchen OS vs Kelsius - Temperature Monitoring Comparison',
    description: 'Compare Kitchen OS and Kelsius for temperature monitoring and HACCP compliance.',
    url: '/compare/kelsius',
  },
};

export default function CompareKelsiusPage() {
  const comparisonFeatures = [
    { feature: 'Wireless Temperature Sensors', kitchenOS: true, competitor: true, notes: 'Both use LoRaWAN technology' },
    { feature: '24/7 Automated Monitoring', kitchenOS: true, competitor: true, notes: 'Continuous temperature tracking' },
    { feature: 'Real-Time Alerts', kitchenOS: true, competitor: true, notes: 'Instant notifications for issues' },
    { feature: 'Suitable for Small Operators', kitchenOS: true, competitor: false, notes: 'FSS designed for all sizes, Kelsius enterprise-focused' },
    { feature: 'Simple Hardware Setup', kitchenOS: true, competitor: false, notes: 'FSS plug-and-play, Kelsius can be complicated' },
    { feature: 'Food Waste Tracking', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes F*** Waste' },
    { feature: 'Digital Allergen Menus', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes AllerQ' },
    { feature: 'Automated Date Labels', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Label System' },
    { feature: 'Cloud Dashboard', kitchenOS: true, competitor: true, notes: 'Both offer cloud platforms' },
    { feature: 'Multi-Site Management', kitchenOS: true, competitor: true, notes: 'Both support multiple locations' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen OS vs Kelsius</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Compare temperature monitoring solutions for professional kitchens.
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
                <strong>Kelsius</strong> is a specialist temperature monitoring provider based in Ireland with
                strong sensor technology and a reliable monitoring platform. They focus primarily on enterprise
                and larger operations, offering robust but often complicated and expensive hardware solutions.
                Like Navitas, Kelsius can require 20-month contract commitments and device-specific hardware.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Food Safe System (Kitchen OS)</strong> offers the same quality LoRaWAN temperature monitoring
                but with a focus on simplicity and accessibility for all business sizes. Customer feedback highlights
                FSS as being more user-focused with superior customer support. The system is designed for easy setup -
                plug-and-play rather than complicated installations - and works on flexible month-to-month contracts
                at a transparent £15/month per location.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond temperature monitoring, Kitchen OS provides allergen management (AllerQ), automated date
                labelling (Food Label System), and waste tracking (F*** Waste) - all integrated into one platform.
                If you want enterprise-quality monitoring without enterprise complexity or costs, Food Safe System is the clear choice.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Kelsius</th>
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
                  <span><strong>Simple plug-and-play</strong> hardware setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-product-fss-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing for all business sizes</span>
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
              <h3 className="text-xl font-bold text-brand-navy mb-4">Kelsius</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">Quote-based</div>
              <div className="text-sm text-gray-600 mb-4">contact for pricing</div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>20-month</strong> contract commitments typical</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Complicated</strong> and expensive hardware installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Enterprise-focused pricing (often prohibitive for small/medium operators)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Established temperature monitoring platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ireland-based support</span>
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
                Target Market: All Business Sizes vs Enterprise-Focused
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Designed for all business sizes - from single-location
                independent restaurants to multi-site chains. Transparent £15/month pricing makes it accessible
                for small operators while still offering the enterprise features larger businesses need. No business
                is too small or too large for FSS.
              </p>
              <p className="text-gray-700">
                <strong>Kelsius:</strong> Primarily targets enterprise and larger operations. Pricing and complexity
                can be prohibitive for small to medium-sized businesses. Quote-based pricing means smaller operators
                often find the costs unaffordable, leaving them without access to professional temperature monitoring.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Hardware Setup: Simple Plug-and-Play vs Complicated Installations
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Designed for simple, plug-and-play installation. Sensors are
                easy to set up - no specialized installation required. Most customers are up and running within
                hours, not days or weeks. The system is user-friendly from the first moment.
              </p>
              <p className="text-gray-700">
                <strong>Kelsius:</strong> Hardware installations can be complicated and expensive, often requiring
                professional installation and configuration. This adds time, cost, and complexity to deployment.
                The enterprise focus means the system assumes technical expertise that smaller operators may not have.
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                Superior User Experience & Customer Support
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Food Safe System:</strong> Customer feedback consistently highlights FSS as being more
                user-focused with intuitive interfaces and workflows. UK-based support teams are responsive and
                understand hospitality operations. The platform is designed around actual kitchen workflows, not
                abstract enterprise requirements.
              </p>
              <p className="text-gray-700">
                <strong>Kelsius:</strong> While technically robust, the system can be less intuitive for non-technical
                users. Ireland-based support serves their enterprise customer base, but smaller operators may find
                support less tailored to their specific needs and challenges.
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
                <strong>Kelsius:</strong> Like Navitas, typically requires 20-month contract commitments. This locks
                you in for nearly two years, reducing your flexibility to switch if the system doesn&apos;t meet your
                needs. Combined with quote-based pricing, this can make the total commitment very significant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Kitchen OS in Action?</h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo to see how Kitchen OS compares to Kelsius for your specific needs.
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
