import { Building2, TrendingDown } from 'lucide-react';

interface DiscountTier {
  locations: string;
  discount: string;
  example?: string;
}

export default function VolumeDiscountTable() {
  const tiers: DiscountTier[] = [
    { locations: '1-2 locations', discount: 'Standard pricing', example: '£7.49/mo per location' },
    { locations: '3-5 locations', discount: '5% off', example: '£7.12/mo per location' },
    { locations: '6-12 locations', discount: '10% off', example: '£6.74/mo per location' },
    { locations: '13+ locations', discount: '15% off', example: '£6.37/mo per location' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-8 h-8 text-product-allerq-orange" />
        <div>
          <h3 className="text-2xl font-bold text-brand-navy">Multi-Location Discounts</h3>
          <p className="text-gray-600">Save more as you scale across locations</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Number of Locations</th>
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Discount</th>
              <th className="text-left py-4 px-4 font-bold text-brand-navy">Price per Location</th>
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
            <tr className="bg-gradient-to-br from-product-allerq-orange-light to-white">
              <td className="py-4 px-4 font-bold text-brand-navy">Enterprise (20+ locations)</td>
              <td className="py-4 px-4 font-bold text-product-allerq-orange" colSpan={2}>
                Custom pricing - Contact us for a quote
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-product-allerq-orange-light rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-bold">Note:</span> Volume discounts apply to AllerQ subscriptions. Mix and match with
          other Kitchen OS products for even greater savings.
        </p>
      </div>
    </div>
  );
}
