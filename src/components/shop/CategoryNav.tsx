'use client';

/**
 * CategoryNav Component
 *
 * Primary navigation for filtering products by Kitchen OS system.
 * Desktop: Full horizontal tabs
 * Mobile: Horizontal scroll with scroll indicators
 */

import { SystemCategory } from '@/data/types';
import { getProductCountBySystem } from '@/utils/productFilters';
import type { Product } from '@/data/types';

interface CategoryNavProps {
  products: Product[];
  activeSystem: SystemCategory | 'all';
  onSystemChange: (system: SystemCategory | 'all') => void;
}

const SYSTEM_LABELS: Record<SystemCategory | 'all', string> = {
  all: 'All Products',
  'food-safe': 'Food Safe System',
  'food-label': 'Food Label System',
  allerq: 'AllerQ',
  fwaste: 'F*** Waste',
};

const SYSTEM_COLORS: Record<SystemCategory, string> = {
  'food-safe': 'from-product-fss-green to-product-fss-green-light',
  'food-label': 'from-product-fls-primary to-product-fls-blue',
  allerq: 'from-product-allerq-orange to-product-allerq-yellow',
  fwaste: 'from-product-fw-green to-product-fw-green-light',
};

export function CategoryNav({ products, activeSystem, onSystemChange }: CategoryNavProps) {
  const productCounts = getProductCountBySystem(products);

  const systems: (SystemCategory | 'all')[] = ['all', 'food-safe', 'food-label', 'allerq', 'fwaste'];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Tablet: Full tabs */}
        <div className="hidden md:flex space-x-2 py-4 overflow-x-auto">
          {systems.map((system) => {
            const isActive = system === activeSystem;
            const count = productCounts[system];
            const hasProducts = count > 0;

            return (
              <button
                key={system}
                onClick={() => onSystemChange(system)}
                disabled={!hasProducts && system !== 'all'}
                className={`
                  relative px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all
                  ${
                    isActive
                      ? system === 'all'
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                        : `bg-gradient-to-r ${SYSTEM_COLORS[system as SystemCategory]} text-white shadow-md`
                      : hasProducts
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {SYSTEM_LABELS[system]}
                {hasProducts && (
                  <span
                    className={`
                    ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                    ${isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-600'}
                  `}
                  >
                    {count}
                  </span>
                )}
                {!hasProducts && system !== 'all' && (
                  <span className="ml-2 text-xs">(coming soon)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden flex space-x-2 py-3 overflow-x-auto scrollbar-hide">
          {systems.map((system) => {
            const isActive = system === activeSystem;
            const count = productCounts[system];
            const hasProducts = count > 0;

            return (
              <button
                key={system}
                onClick={() => onSystemChange(system)}
                disabled={!hasProducts && system !== 'all'}
                className={`
                  relative px-4 py-2 rounded-lg font-semibold text-xs whitespace-nowrap transition-all flex-shrink-0
                  ${
                    isActive
                      ? system === 'all'
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                        : `bg-gradient-to-r ${SYSTEM_COLORS[system as SystemCategory]} text-white`
                      : hasProducts
                      ? 'bg-gray-100 text-gray-700'
                      : 'bg-gray-50 text-gray-400'
                  }
                `}
              >
                {SYSTEM_LABELS[system]}
                {hasProducts && (
                  <span
                    className={`
                    ml-1.5 px-1.5 py-0.5 rounded-full text-xs
                    ${isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-600'}
                  `}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
