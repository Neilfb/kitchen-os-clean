/**
 * Cart Data Types
 *
 * Defines the structure for shopping cart items and cart state.
 * Cart is session-only (not persisted to localStorage).
 */

export interface CartItem {
  // Product identification
  productId: string;
  productName: string;
  productImage: string;

  // Variant information
  variantId: string;
  variantName: string;
  price: number; // Base price in GBP (ex VAT)

  // Quantity
  quantity: number;

  // Optional fields
  pricePerLabel?: number;
  pricePerProbe?: number;

  // Product metadata
  systemCategory?: string;
  productType?: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number; // Sum of all items (ex VAT, ex shipping)
  shippingCost: number; // Calculated based on rules
  taxRate: number; // VAT percentage (0.20 for UK, 0 for international)
  taxAmount: number; // Calculated VAT amount
  total: number; // Final total (inc VAT, inc shipping)
  currency: 'GBP';

  // Customer location for tax calculation
  customerCountry: string | null; // ISO country code (e.g., 'GB', 'US')
  isVatExempt: boolean; // True if valid non-UK company VAT number provided
}

export interface ShippingRules {
  ukFreeThreshold: number; // £50 for free UK delivery
  ukStandardCost: number; // Standard UK shipping cost
  internationalCost: number; // Flat rate international shipping
}

export const DEFAULT_SHIPPING_RULES: ShippingRules = {
  ukFreeThreshold: 50,
  ukStandardCost: 5.99,
  internationalCost: 15.99,
};
