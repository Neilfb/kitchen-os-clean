import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Orbisk - Food Waste Tracking Comparison',
  description: 'Compare Kitchen OS F*** Waste and Orbisk for food waste tracking and reduction.',
  openGraph: {
    title: 'Kitchen OS vs Orbisk - Food Waste Tracking Comparison',
    description: 'Compare Kitchen OS F*** Waste and Orbisk for food waste tracking and reduction.',
    url: '/compare/orbisk',
  },
};

export default function CompareOrbiskPage() {
  const comparisonFeatures = [
    { feature: 'AI-Powered Waste Recognition', kitchenOS: true, competitor: true, notes: 'Both use AI to identify waste items' },
    { feature: 'Photo-Based Tracking', kitchenOS: true, competitor: false, notes: 'Kitchen OS uses smartphone photos, Orbisk uses camera system' },
    { feature: 'Sustainability Reporting', kitchenOS: true, competitor: true, notes: 'Both offer CO2 and ESG reports' },
    { feature: 'HACCP & Temperature Monitoring', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Safe System' },
    { feature: 'Digital Allergen Menus', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes AllerQ' },
    { feature: 'Automated Date Labels', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Label System' },
    { feature: 'Hardware Installation Required', kitchenOS: false, competitor: true, notes: 'Orbisk requires camera installation above bins' },
    { feature: 'UK Support & Pricing', kitchenOS: true, competitor: false, notes: 'Orbisk is Netherlands-based' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen OS vs Orbisk</h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fw-green-light">
              Compare waste tracking platforms. See how Kitchen OS compares to Orbisk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Quick Summary</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Orbisk</strong> uses ceiling-mounted cameras with AI to automatically track waste in bins.
              Popular in European contract catering and large hotels.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Kitchen OS F*** Waste</strong> offers similar AI tracking with simpler setup - just take photos.
              No hardware installation. Plus complete kitchen management (HACCP, allergens, labelling).
            </p>
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fw-green">Kitchen OS</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Orbisk</th>
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

      <section className="py-20 bg-gradient-to-br from-product-fw-green to-product-fw-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Kitchen OS F*** Waste</h2>
          <p className="text-xl mb-8 text-product-fw-green-light">
            No cameras to install. Start tracking waste with just your phone.
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
