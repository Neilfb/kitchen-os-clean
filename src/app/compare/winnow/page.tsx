import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'F*** Waste vs Winnow | Reduce Food Waste & Boost ROI in Your Kitchen',
  description: 'Compare F*** Waste with Winnow to see how our affordable smart-scale system delivers faster ROI, easier setup, and higher waste reduction for restaurants and hotels worldwide.',
  openGraph: {
    title: 'F*** Waste vs Winnow | Reduce Food Waste & Boost ROI in Your Kitchen',
    description: 'Compare F*** Waste with Winnow to see how our affordable smart-scale system delivers faster ROI, easier setup, and higher waste reduction for restaurants and hotels worldwide.',
    url: '/compare/winnow',
  },
};

export default function CompareWinnowPage() {
  const comparisonFeatures = [
    {
      feature: 'Core Technology',
      kitchenOS: 'Smart LoRaWAN Scales + Cloud Analytics',
      competitor: 'AI Camera + Bin Scale',
    },
    {
      feature: 'Target Users',
      kitchenOS: 'Restaurants, Hotels, Caterers, SMEs',
      competitor: 'Large Hotels & Enterprises',
    },
    {
      feature: 'Average ROI',
      kitchenOS: '14:1',
      competitor: '<10:1 (undisclosed exact)',
    },
    {
      feature: 'Hardware Setup',
      kitchenOS: 'Plug-and-play Smart Scales',
      competitor: 'Custom install + AI Camera Unit',
    },
    {
      feature: 'Monthly Cost',
      kitchenOS: 'From £150 / month',
      competitor: 'Typically £400–£1000+ / month',
    },
    {
      feature: 'Integration',
      kitchenOS: 'Part of the Kitchen OS suite (Food Safe System, Food Label System)',
      competitor: 'Stand-alone waste tracking',
    },
    {
      feature: 'Setup Time',
      kitchenOS: '<1 hour',
      competitor: 'Multi-day install',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              F*** Waste vs Winnow: The Smarter Way to Cut Food Waste and Costs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Winnow&apos;s AI camera bins made headlines for reducing food waste in luxury hotels. But not every kitchen needs a £10,000 system to make a real impact.
            </p>
            <p className="text-lg text-white/90">
              <strong>F*** Waste</strong> gives you the same insight at a fraction of the cost — delivering over 50% waste reduction and an average 14:1 ROI, all powered by simple IoT smart scales that fit seamlessly into any kitchen, from small restaurants to global hotel groups.
            </p>
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fw-green">F*** Waste</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Winnow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{item.feature}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-900">{item.kitchenOS}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">{item.competitor}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Operational Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Operational Advantages
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">1️⃣</span>
                Easier to implement
              </h3>
              <p className="text-gray-700 ml-11">
                No complex cameras, calibrations, or enterprise contracts. Just smart scales that connect securely via LoRaWAN and start sending data instantly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">2️⃣</span>
                Built for real kitchens
              </h3>
              <p className="text-gray-700 ml-11">
                Designed by chefs who understand service chaos — use it during prep, service, and cleanup with no disruption.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">3️⃣</span>
                Complete visibility
              </h3>
              <p className="text-gray-700 ml-11">
                Cloud dashboard consolidates all locations in one place. Track patterns by day, team, or menu item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Pricing Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            ROI & Pricing Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Get ROI faster.</h3>
              <p className="text-gray-700 text-lg">
                Our customers typically see <strong>50%+ waste reduction within the first month</strong>. That means payback in under 12 months — not &quot;eventually.&quot;
              </p>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Save thousands, not spend them.</h3>
              <p className="text-gray-700 text-lg">
                At <strong>£150/month</strong>, F*** Waste delivers enterprise-level insights for a fraction of Winnow&apos;s cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">
            Verdict
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            If you run a restaurant, hotel, or catering group that wants measurable results without enterprise complexity, <strong>F*** Waste outperforms Winnow in value, speed, and ROI.</strong>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Cutting Your Food Waste?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book a demo and see how F*** Waste can deliver faster ROI than Winnow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
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
