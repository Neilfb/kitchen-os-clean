/**
 * Product Data Types for Kitchen OS Shop
 *
 * These types define the structure of shop products.
 * Used by both products.json and the shop page component.
 */

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  pricePerLabel?: number;
  pricePerProbe?: number;
  setupFee?: number;
  savings?: number | null;
  note?: string;
  disabled?: boolean;
  popular?: boolean;
}

export interface RelatedProduct {
  name: string;
  href: string;
  note: string;
}

export type SystemCategory = 'food-safe' | 'food-label' | 'allerq' | 'fwaste';
export type ProductType = 'hardware' | 'consumable' | 'accessory' | 'subscription' | 'merchandise' | 'digital';

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  icon: string; // Icon name from lucide-react (e.g., 'FileText', 'Thermometer')
  variants: ProductVariant[];
  features: string[];
  relatedProduct: RelatedProduct;
  systemCategory?: SystemCategory; // Which Kitchen OS system this belongs to
  productType?: ProductType; // Type of product for filtering
  isFeatured?: boolean; // For homepage/promotional placement
}

/**
 * Icon Mapping
 *
 * Maps icon names (strings in JSON) to lucide-react components.
 * Add new icon mappings here when adding products.
 */
export const ICON_MAP = {
  FileText: 'FileText',
  Thermometer: 'Thermometer',
  Package: 'Package',
  ShoppingCart: 'ShoppingCart',
  // Add more icon names as needed
} as const;

export type IconName = keyof typeof ICON_MAP;
