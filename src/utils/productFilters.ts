/**
 * Product Filtering Utilities for Kitchen OS Shop
 *
 * Functions for filtering, sorting, and categorizing shop products.
 */

import { Product, SystemCategory, ProductType } from '@/data/types';

/**
 * Filter products by system category (Food Safe, Food Label, etc.)
 */
export function filterBySystem(
  products: Product[],
  system: SystemCategory | 'all'
): Product[] {
  if (system === 'all') return products;
  return products.filter((product) => product.systemCategory === system);
}

/**
 * Filter products by product type (hardware, consumable, etc.)
 */
export function filterByType(
  products: Product[],
  type: ProductType | 'all'
): Product[] {
  if (type === 'all') return products;
  return products.filter((product) => product.productType === type);
}

/**
 * Filter products by both system and type
 */
export function filterProducts(
  products: Product[],
  system: SystemCategory | 'all',
  type: ProductType | 'all'
): Product[] {
  let filtered = products;

  if (system !== 'all') {
    filtered = filterBySystem(filtered, system);
  }

  if (type !== 'all') {
    filtered = filterByType(filtered, type);
  }

  return filtered;
}

/**
 * Get related products for cross-selling
 * Returns products from different systems that complement the given product
 */
export function getRelatedProducts(
  product: Product,
  allProducts: Product[]
): Product[] {
  // If viewing Food Safe System products, suggest Food Label System
  if (product.systemCategory === 'food-safe') {
    return allProducts.filter((p) => p.systemCategory === 'food-label' && p.isFeatured);
  }

  // If viewing Food Label System products, suggest Food Safe System
  if (product.systemCategory === 'food-label') {
    return allProducts.filter((p) => p.systemCategory === 'food-safe' && p.isFeatured);
  }

  return [];
}

/**
 * Calculate total cost of ownership for hardware with subscriptions
 */
export function calculateTotalCost(
  hardwarePrice: number,
  setupFee: number = 0,
  monthlySubscription: number = 0,
  quantity: number = 1
): {
  firstMonth: number;
  monthlyOngoing: number;
  annualOngoing: number;
} {
  const firstMonth = hardwarePrice + setupFee + monthlySubscription * quantity;
  const monthlyOngoing = monthlySubscription * quantity;
  const annualOngoing = monthlyOngoing * 12;

  return {
    firstMonth,
    monthlyOngoing,
    annualOngoing,
  };
}

/**
 * Group products by category for section-based display
 */
export function groupByCategory(products: Product[]): Record<string, Product[]> {
  const grouped: Record<string, Product[]> = {};

  products.forEach((product) => {
    const category = product.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
  });

  return grouped;
}

/**
 * Get product count by system category
 */
export function getProductCountBySystem(
  products: Product[]
): Record<SystemCategory | 'all', number> {
  return {
    all: products.length,
    'food-safe': products.filter((p) => p.systemCategory === 'food-safe').length,
    'food-label': products.filter((p) => p.systemCategory === 'food-label').length,
    allerq: products.filter((p) => p.systemCategory === 'allerq').length,
    fwaste: products.filter((p) => p.systemCategory === 'fwaste').length,
  };
}

/**
 * Get product count by type
 */
export function getProductCountByType(
  products: Product[]
): Record<ProductType | 'all', number> {
  return {
    all: products.length,
    hardware: products.filter((p) => p.productType === 'hardware').length,
    consumable: products.filter((p) => p.productType === 'consumable').length,
    accessory: products.filter((p) => p.productType === 'accessory').length,
    subscription: products.filter((p) => p.productType === 'subscription').length,
    merchandise: products.filter((p) => p.productType === 'merchandise').length,
    digital: products.filter((p) => p.productType === 'digital').length,
  };
}

/**
 * Sort products by featured status and price
 */
export function sortProducts(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    // Featured products first
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;

    // Then by lowest variant price
    const aPrice = Math.min(...a.variants.map((v) => v.price));
    const bPrice = Math.min(...b.variants.map((v) => v.price));
    return aPrice - bPrice;
  });
}
