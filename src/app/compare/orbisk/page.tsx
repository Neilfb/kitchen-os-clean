import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'F*** Waste vs Orbisk | Affordable Smart Food Waste System with Faster ROI',
  description: 'Compare F*** Waste with Orbisk to discover the simpler, more affordable food waste solution delivering faster ROI and deeper insights for kitchens worldwide.',
  openGraph: {
    title: 'F*** Waste vs Orbisk | Affordable Smart Food Waste System with Faster ROI',
    description: 'Compare F*** Waste with Orbisk to discover the simpler, more affordable food waste solution delivering faster ROI and deeper insights for kitchens worldwide.',
    url: '/compare/orbisk',
  },
};

export default function CompareOrbiskPage() {
  const comparisonFeatures = [
    {
      feature: 'Core Tech',
      kitchenOS: 'Smart Scales + IoT Cloud',
      competitor: 'AI Camera + Scale',
    },
    {
      feature: 'Average Waste Reduction',
      kitchenOS: '50%+',
      competitor: '38% avg',
    },
    {
      feature: 'Average ROI',
      kitchenOS: '14:1',
      competitor: '~6–8:1',
    },
    {
      feature: 'Setup Cost',
      kitchenOS: 'Included',
      competitor: '$2,000–$8,000/year',
    },
    {
      feature: 'Payback Period',
      kitchenOS: '<12 months',
      competitor: '12–15 months',
    },
    {
      feature: 'Integration',
      kitchenOS: 'Kitchen OS suite',
      competitor: 'Stand-alone',
    },
    {
      feature: 'Target Users',
      kitchenOS: 'Restaurants, Hotels, Chains',
      competitor: 'Hotels, Large Kitchens',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              F*** Waste vs Orbisk: More Results, Less Hardware, Faster ROI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Orbisk&apos;s AI camera bins are powerful — but expensive, complex, and often over-engineered for daily kitchen use.
            </p>
            <p className="text-lg text-white/90">
              <strong>F*** Waste</strong> delivers the same impact using smart IoT scales that identify waste trends instantly — for just £150/month, not thousands a year.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Orbisk</th>
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
                Less complexity, same results
              </h3>
              <p className="text-gray-700 ml-11">
                No camera installations, no privacy worries — just accurate, reliable data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">2️⃣</span>
                Cloud-connected from day one
              </h3>
              <p className="text-gray-700 ml-11">
                View waste patterns across sites, teams, or menu items instantly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center">
                <span className="text-2xl mr-3">3️⃣</span>
                Designed for scaling
              </h3>
              <p className="text-gray-700 ml-11">
                Add kitchens or units easily without new hardware or big-ticket licences.
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
              At <strong>£150/month</strong>, F*** Waste customers recover their investment in under a year — while Orbisk systems often take 12–15 months to break even.
            </p>
            <p className="text-xl text-gray-700">
              You get up to <strong>double the ROI</strong> and a faster sustainability win for less upfront cost.
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
            <strong>Orbisk is powerful. F*** Waste is practical.</strong>
          </p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            You&apos;ll save faster, spend less, and achieve the same or better results — all while integrating with your broader Kitchen OS systems.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Practical Over Powerful
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get faster ROI and simpler deployment with F*** Waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
