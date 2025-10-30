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
            <p className="text-lg text-gray-700 mb-4">
              <strong>Navitas</strong> is an established UK-based HACCP platform with strong temperature
              monitoring and compliance tools. Popular in hospitality and healthcare.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Kitchen OS</strong> offers similar HACCP capabilities plus allergen management,
              date labelling, and waste tracking - all integrated. One platform for all kitchen challenges.
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

      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See Kitchen OS in Action</h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo to compare features side-by-side.
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
