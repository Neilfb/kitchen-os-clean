import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'F*** Waste vs Leanpath | Higher ROI, Lower Cost, Same Goal — Zero Waste',
  description: 'Compare F*** Waste with Leanpath to discover how our modern system delivers 14:1 ROI, faster deployment, and complete kitchen integration for £150/month.',
  openGraph: {
    title: 'F*** Waste vs Leanpath | Higher ROI, Lower Cost, Same Goal — Zero Waste',
    description: 'Compare F*** Waste with Leanpath to discover how our modern system delivers 14:1 ROI, faster deployment, and complete kitchen integration for £150/month.',
    url: '/compare/leanpath',
  },
};

export default function CompareLeanpathPage() {
  const comparisonFeatures = [
    {
      feature: 'Core Tech',
      kitchenOS: 'Smart Scales + Cloud Analytics',
      competitor: 'Scale + Camera Terminals',
    },
    {
      feature: 'Deployment',
      kitchenOS: 'Plug-and-play',
      competitor: 'Custom install & training',
    },
    {
      feature: 'Average ROI',
      kitchenOS: '14:1',
      competitor: '2–7:1',
    },
    {
      feature: 'Focus',
      kitchenOS: 'Restaurants, Hotels, Catering',
      competitor: 'Enterprise & Institutional',
    },
    {
      feature: 'Monthly Cost',
      kitchenOS: '£150/month',
      competitor: 'Typically £500–£1200/month',
    },
    {
      feature: 'Data Ownership',
      kitchenOS: '100% yours',
      competitor: 'Hosted proprietary platform',
    },
    {
      feature: 'Integration',
      kitchenOS: 'Full Kitchen OS ecosystem',
      competitor: 'Stand-alone system',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              F*** Waste vs Leanpath: Higher ROI, Lower Cost, Same Goal — Zero Waste
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Leanpath pioneered kitchen waste tracking. <strong>F*** Waste perfected it for the modern kitchen.</strong>
            </p>
            <p className="text-lg text-white/90">
              While Leanpath&apos;s systems target enterprise operations with complex hardware and pricing, <strong>F*** Waste brings the same power to any kitchen</strong> — delivering 14× ROI, &gt;50% waste reduction, and instant visibility for just £150/month.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            Comparison Snapshot
          </h2>
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fw-green">F*** Waste</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Leanpath</th>
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
                Quick rollout
              </h3>
              <p className="text-gray-700 ml-11">
                Install smart scales in minutes, connect to the Kitchen OS cloud, and start tracking immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">2️⃣</span>
                Empower your team
              </h3>
              <p className="text-gray-700 ml-11">
                Simple interface for chefs — no training manuals, no data overload.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">3️⃣</span>
                Connected insights
              </h3>
              <p className="text-gray-700 ml-11">
                Cross-analyse food waste data with temperature logs and production schedules using the broader Kitchen OS suite.
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
          <div className="bg-gradient-to-br from-product-fw-green-light to-white p-8 rounded-lg shadow-soft text-center">
            <p className="text-2xl text-gray-900 mb-6">
              <strong>Leanpath delivers 2–7× ROI. We deliver up to 14×.</strong>
            </p>
            <p className="text-xl text-gray-700">
              At a tenth of the price, that&apos;s a no-brainer for any operator serious about sustainability and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">
            Verdict
          </h2>
          <p className="text-2xl text-gray-900 mb-4">
            <strong>Leanpath built the movement. F*** Waste made it accessible.</strong>
          </p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            With lower costs, faster ROI, and built-in integration with your daily operations, F*** Waste is the clear choice for forward-thinking kitchens.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Evolution of Waste Tracking
          </h2>
          <p className="text-xl mb-8 text-white/90">
            See how F*** Waste delivers up to double the ROI at a fraction of the cost.
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
