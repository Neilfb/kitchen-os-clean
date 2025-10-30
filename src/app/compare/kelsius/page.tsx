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
    { feature: 'Food Waste Tracking', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes F*** Waste' },
    { feature: 'Digital Allergen Menus', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes AllerQ' },
    { feature: 'Automated Date Labels', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Label System' },
    { feature: 'Cloud Dashboard', kitchenOS: true, competitor: true, notes: 'Both offer cloud platforms' },
    { feature: 'Ireland-Based Support', kitchenOS: false, competitor: true, notes: 'Kelsius is Ireland-based, Kitchen OS is UK-based' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen OS vs Kelsius</h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fss-green-light">
              Compare temperature monitoring solutions for professional kitchens.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Quick Summary</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Kelsius</strong> is a specialist temperature monitoring provider based in Ireland.
              Strong sensor technology and reliable monitoring platform.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Kitchen OS</strong> offers the same quality temperature monitoring plus allergen management,
              date labelling, and waste tracking. One integrated platform instead of multiple point solutions.
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

      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch?</h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Get the same great monitoring plus allergen menus, labelling, and waste tracking.
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
