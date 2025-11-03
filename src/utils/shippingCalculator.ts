/**
 * Shipping Cost Calculation
 *
 * UK Shipping Rules:
 * - Free delivery on orders over £50
 * - £5.99 standard delivery under £50
 *
 * International Shipping:
 * - Flat rate £15.99 for all international orders
 */

import { DEFAULT_SHIPPING_RULES } from '@/types/cart';

export interface ShippingCalculationInput {
  subtotal: number; // Order subtotal (ex VAT)
  country: string; // ISO country code
}

export interface ShippingCalculationResult {
  cost: number;
  isFree: boolean;
  reason?: string; // Explanation of shipping cost
}

/**
 * Calculate shipping cost based on order subtotal and destination country
 */
export function calculateShipping(input: ShippingCalculationInput): ShippingCalculationResult {
  const { subtotal, country } = input;
  const rules = DEFAULT_SHIPPING_RULES;

  // UK Shipping
  if (country === 'GB' || country === 'UK') {
    if (subtotal >= rules.ukFreeThreshold) {
      return {
        cost: 0,
        isFree: true,
        reason: `Free UK delivery on orders over £${rules.ukFreeThreshold}`,
      };
    } else {
      const amountUntilFree = rules.ukFreeThreshold - subtotal;
      return {
        cost: rules.ukStandardCost,
        isFree: false,
        reason: `Add £${amountUntilFree.toFixed(2)} more for free UK delivery`,
      };
    }
  }

  // International Shipping (flat rate)
  return {
    cost: rules.internationalCost,
    isFree: false,
    reason: 'International shipping',
  };
}

/**
 * Format shipping cost for display
 */
export function formatShippingCost(cost: number, isFree: boolean): string {
  if (isFree || cost === 0) {
    return 'FREE';
  }
  return `£${cost.toFixed(2)}`;
}

/**
 * Calculate amount needed to reach free UK shipping threshold
 */
export function amountUntilFreeShipping(subtotal: number, country: string): number {
  const rules = DEFAULT_SHIPPING_RULES;

  if (country === 'GB' || country === 'UK') {
    const remaining = rules.ukFreeThreshold - subtotal;
    return remaining > 0 ? remaining : 0;
  }

  return 0; // International orders don't have free shipping threshold
}

/**
 * Check if order qualifies for free shipping
 */
export function qualifiesForFreeShipping(subtotal: number, country: string): boolean {
  if (country === 'GB' || country === 'UK') {
    return subtotal >= DEFAULT_SHIPPING_RULES.ukFreeThreshold;
  }
  return false;
}
