import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS vs Lablit - Food Labelling Comparison',
  description: 'Compare Kitchen OS Food Label System and Lablit for automated food labelling and date tracking.',
  openGraph: {
    title: 'Kitchen OS vs Lablit - Food Labelling Comparison',
    description: 'Compare Kitchen OS Food Label System and Lablit for automated food labelling and date tracking.',
    url: '/compare/lablit',
  },
};

export default function CompareLablitPage() {
  const comparisonFeatures = [
    { feature: 'Automated Date Labels', kitchenOS: true, competitor: true, notes: 'Both print date labels automatically' },
    { feature: 'Barcode Tracking', kitchenOS: true, competitor: true, notes: 'Track items with barcodes' },
    { feature: 'Use-By Date Calculation', kitchenOS: true, competitor: true, notes: 'Automatic date calculation' },
    { feature: 'Allergen Information on Labels', kitchenOS: true, competitor: false, notes: 'Kitchen OS integrates with AllerQ' },
    { feature: 'HACCP & Temperature Monitoring', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes Food Safe System' },
    { feature: 'Food Waste Tracking', kitchenOS: true, competitor: false, notes: 'Kitchen OS includes F*** Waste' },
    { feature: 'Mobile App', kitchenOS: true, competitor: true, notes: 'Both offer mobile printing' },
    { feature: 'UK-Based Support', kitchenOS: true, competitor: true, notes: 'Both UK companies' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-product-fls-green to-product-fls-green-dark text-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen OS vs Lablit</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-navy-light">
              Compare food labelling solutions for professional kitchens.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Quick Summary</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Lablit</strong> is a UK food labelling solution focused on automated date labels
              with barcode tracking. Good for prep tracking and stock rotation.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Kitchen OS Food Label System</strong> offers the same labelling capabilities plus
              integration with allergen menus, HACCP monitoring, and waste tracking. One unified platform
              instead of separate systems.
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-product-fls-green-dark">Kitchen OS</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Lablit</th>
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
                        <CheckCircle className="w-6 h-6 text-product-fls-green-dark mx-auto" />
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

      <section className="py-20 bg-gradient-to-br from-product-fls-green to-product-fls-green-dark text-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Food Label System</h2>
          <p className="text-xl mb-8 text-brand-navy-light">
            Smart labelling plus complete kitchen management in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-brand-navy"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
