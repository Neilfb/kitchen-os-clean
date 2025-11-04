import { Building2, TrendingDown } from 'lucide-react';

interface DiscountTier {
  locations: string;
  discount: string;
  example?: string;
}

export default function VolumeDiscountTable() {
  const tiers: DiscountTier[] = [
    { locations: '1-2 locations', discount: 'Standard pricing', example: 'Full price per location' },
    { locations: '3-5 locations', discount: '5% off', example: 'All products discounted 5%' },
    { locations: '6-12 locations', discount: '10% off', example: 'All products discounted 10%' },
    { locations: '13+ locations', discount: '15% off', example: 'All products discounted 15%' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-8 h-8 text-product-fss-green" />
        <div>
          <h3 className="text-2xl font-bold text-brand-navy">Multi-Location Discounts</h3>
          <p className="text-gray-600">Save more as you scale across locations - applies to ALL products</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Number of Locations</th>
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Discount</th>
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Applies To</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-900">{tier.locations}</td>
                <td className="py-4 px-4">
                  {tier.discount !== 'Standard pricing' ? (
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-product-fss-green" />
                      <span className="font-bold text-product-fss-green">{tier.discount}</span>
                    </div>
                  ) : (
                    <span className="text-gray-600">{tier.discount}</span>
                  )}
                </td>
                <td className="py-4 px-4 font-semibold text-brand-navy">{tier.example}</td>
              </tr>
            ))}
            <tr className="bg-gradient-to-br from-product-fss-green-light to-white">
              <td className="py-4 px-4 font-bold text-brand-navy">Enterprise (20+ locations)</td>
              <td className="py-4 px-4 font-bold text-product-fss-green" colSpan={2}>
                Custom pricing - Contact us for a quote
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-product-fss-green-light rounded-lg border border-product-fss-green/30">
        <p className="text-sm text-gray-700">
          <span className="font-bold">Important:</span> Volume discounts apply to ALL Kitchen OS products - Food Safe System, AllerQ, Food Label System, and F*** Waste. The more locations you have, the more you save across your entire Kitchen OS subscription.
        </p>
      </div>
    </div>
  );
}
