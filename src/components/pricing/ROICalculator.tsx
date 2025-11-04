'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function ROICalculator() {
  const [selectedProducts, setSelectedProducts] = useState({
    fss: false,
    fls: false,
    fwaste: true, // Default to F*** Waste for ROI showcase
    allerq: false,
  });
  const [locations, setLocations] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing (monthly)
  const pricing = {
    fss: 25, // FSS Kitchens
    fls: 35,
    fwaste: 150,
    allerq: 7.49,
  };

  // Calculate total cost
  const calculateCost = () => {
    let monthlyCost = 0;
    if (selectedProducts.fss) monthlyCost += pricing.fss;
    if (selectedProducts.fls) monthlyCost += pricing.fls;
    if (selectedProducts.fwaste) monthlyCost += pricing.fwaste;
    if (selectedProducts.allerq) {
      // Apply volume discounts
      let allerqPrice = pricing.allerq;
      if (locations >= 13) allerqPrice *= 0.85; // 15% off
      else if (locations >= 6) allerqPrice *= 0.9; // 10% off
      else if (locations >= 3) allerqPrice *= 0.95; // 5% off
      monthlyCost += allerqPrice * locations;
    } else {
      // Other products scale with locations
      monthlyCost *= locations;
    }

    return isAnnual ? monthlyCost * 12 : monthlyCost;
  };

  // Calculate ROI (based on F*** Waste 14:1 ROI)
  const calculateROI = () => {
    let totalSavings = 0;

    if (selectedProducts.fwaste) {
      // F*** Waste: 14:1 ROI
      const fwasteCost = isAnnual ? pricing.fwaste * 12 * locations : pricing.fwaste * locations;
      totalSavings += fwasteCost * 14;
    }

    if (selectedProducts.fss) {
      // FSS: Estimated 5:1 ROI (reduced food spoilage, better compliance)
      const fssCost = isAnnual ? pricing.fss * 12 * locations : pricing.fss * locations;
      totalSavings += fssCost * 5;
    }

    if (selectedProducts.fls) {
      // FLS: Estimated 3:1 ROI (better rotation, reduced waste)
      const flsCost = isAnnual ? pricing.fls * 12 * locations : pricing.fls * locations;
      totalSavings += flsCost * 3;
    }

    if (selectedProducts.allerq) {
      // AllerQ: Risk mitigation value (hard to quantify, add modest ROI)
      const allerqCost = isAnnual ? pricing.allerq * 12 * locations : pricing.allerq * locations;
      totalSavings += allerqCost * 2;
    }

    return totalSavings;
  };

  const totalCost = calculateCost();
  const totalROI = calculateROI();
  const netGain = totalROI - totalCost;

  const toggleProduct = (product: keyof typeof selectedProducts) => {
    setSelectedProducts((prev) => ({ ...prev, [product]: !prev[product] }));
  };

  return (
    <div className="bg-gradient-to-br from-product-fss-green-light to-white rounded-2xl shadow-soft p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-product-fss-green" />
        <div>
          <h3 className="text-2xl font-bold text-brand-navy">ROI Calculator</h3>
          <p className="text-gray-600">See your potential savings with Kitchen OS</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Inputs */}
        <div>
          <h4 className="font-bold text-brand-navy mb-4">Select Your Products:</h4>
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <input
                type="checkbox"
                checked={selectedProducts.fss}
                onChange={() => toggleProduct('fss')}
                className="w-5 h-5 text-product-fss-green rounded focus:ring-2 focus:ring-product-fss-green"
              />
              <div className="flex-1">
                <span className="font-semibold text-brand-navy">Food Safe System</span>
                <span className="text-sm text-gray-600 ml-2">£{pricing.fss}/mo</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <input
                type="checkbox"
                checked={selectedProducts.fls}
                onChange={() => toggleProduct('fls')}
                className="w-5 h-5 text-product-fls-green rounded focus:ring-2 focus:ring-product-fls-green"
              />
              <div className="flex-1">
                <span className="font-semibold text-brand-navy">Food Label System</span>
                <span className="text-sm text-gray-600 ml-2">£{pricing.fls}/mo</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <input
                type="checkbox"
                checked={selectedProducts.fwaste}
                onChange={() => toggleProduct('fwaste')}
                className="w-5 h-5 text-product-fwaste-green rounded focus:ring-2 focus:ring-product-fwaste-green"
              />
              <div className="flex-1">
                <span className="font-semibold text-brand-navy">F*** Waste</span>
                <span className="text-sm text-gray-600 ml-2">£{pricing.fwaste}/mo</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <input
                type="checkbox"
                checked={selectedProducts.allerq}
                onChange={() => toggleProduct('allerq')}
                className="w-5 h-5 text-product-allerq-orange rounded focus:ring-2 focus:ring-product-allerq-orange"
              />
              <div className="flex-1">
                <span className="font-semibold text-brand-navy">AllerQ</span>
                <span className="text-sm text-gray-600 ml-2">£{pricing.allerq}/mo</span>
              </div>
            </label>
          </div>

          <h4 className="font-bold text-brand-navy mb-3">Number of Locations:</h4>
          <input
            type="range"
            min="1"
            max="20"
            value={locations}
            onChange={(e) => setLocations(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-product-fss-green"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>1</span>
            <span className="font-bold text-brand-navy text-lg">{locations}</span>
            <span>20+</span>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
                className="w-5 h-5 text-product-fss-green rounded focus:ring-2 focus:ring-product-fss-green"
              />
              <span className="font-semibold text-brand-navy">Annual billing (save up to 20%)</span>
            </label>
          </div>
        </div>

        {/* Right: Results */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">Your Investment</span>
            </div>
            <p className="text-4xl font-bold text-brand-navy">
              £{totalCost.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-600 mt-1">per {isAnnual ? 'year' : 'month'}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-product-fss-green mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Estimated Savings</span>
            </div>
            <p className="text-4xl font-bold text-product-fss-green">
              £{totalROI.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-600 mt-1">per {isAnnual ? 'year' : 'month'}</p>
          </div>

          <div className="bg-gradient-to-br from-product-fss-green to-product-fss-green-dark rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm font-semibold mb-2">Net Gain</p>
            <p className="text-5xl font-bold mb-2">
              £{netGain.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-white/90 text-sm">
              {netGain > 0 ? (
                <>
                  <span className="font-bold">
                    {((totalROI / totalCost) * 1).toFixed(1)}x ROI
                  </span>{' '}
                  - Kitchen OS pays for itself and saves you money
                </>
              ) : (
                'Select products to see your potential ROI'
              )}
            </p>
          </div>

          <p className="text-xs text-gray-500 italic">
            *ROI estimates based on average customer data. F*** Waste delivers 14:1 ROI through ingredient savings and
            reduced waste costs. Actual results may vary by kitchen.
          </p>
        </div>
      </div>
    </div>
  );
}
