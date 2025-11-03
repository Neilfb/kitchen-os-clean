'use client';

/**
 * FilterBar Component
 *
 * Secondary filtering by product type (hardware, consumable, etc.)
 * Works in conjunction with CategoryNav for dual-path navigation.
 */

import { ProductType } from '@/data/types';
import { getProductCountByType } from '@/utils/productFilters';
import type { Product } from '@/data/types';
import { Thermometer, FileText, Package, CreditCard, ShoppingBag, Download } from 'lucide-react';

interface FilterBarProps {
  filteredProducts: Product[];
  activeType: ProductType | 'all';
  onTypeChange: (type: ProductType | 'all') => void;
  activeSystem: string;
}

const TYPE_LABELS: Record<ProductType | 'all', string> = {
  all: 'All Types',
  hardware: 'Temperature Monitoring',
  consumable: 'Labels & Consumables',
  accessory: 'Accessories',
  subscription: 'Subscriptions',
  merchandise: 'Merchandise',
  digital: 'Digital Products',
};

const TYPE_ICONS: Record<ProductType, typeof Thermometer> = {
  hardware: Thermometer,
  consumable: FileText,
  accessory: Package,
  subscription: CreditCard,
  merchandise: ShoppingBag,
  digital: Download,
};

export function FilterBar({
  filteredProducts,
  activeType,
  onTypeChange,
  activeSystem,
}: FilterBarProps) {
  // Calculate counts based on currently filtered products (by system)
  const typeCounts = getProductCountByType(filteredProducts);

  const types: (ProductType | 'all')[] = [
    'all',
    'hardware',
    'consumable',
    'accessory',
    'subscription',
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-2">
          {types.map((type) => {
            const isActive = type === activeType;
            const count = typeCounts[type];
            const hasProducts = count > 0;
            const Icon = type !== 'all' ? TYPE_ICONS[type] : null;

            return (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                disabled={!hasProducts}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all
                  ${
                    isActive
                      ? 'bg-gray-900 text-white shadow-md'
                      : hasProducts
                      ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  }
                `}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{TYPE_LABELS[type]}</span>
                {hasProducts && (
                  <span
                    className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-600'}
                  `}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
          {(activeSystem !== 'all' || activeType !== 'all') && (
            <button
              onClick={() => {
                onTypeChange('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-red-600 hover:bg-red-50 border border-red-300 transition-all"
            >
              <span>Clear Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
