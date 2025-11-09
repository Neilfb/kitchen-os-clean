/**
 * Affiliate Tracking Types
 *
 * Types for Push Lap Growth affiliate tracking integration
 */

export interface AffiliateData {
  affiliateId: string | null;
  affiliateCode?: string | null; // Optional promo/coupon code
  source?: string; // Where the affiliate link was clicked (e.g., 'shop', 'food-label-system')
  timestamp?: string; // When the affiliate cookie was set
}

export interface PushLapGrowthConversionRequest {
  affiliate_id: string;
  order_id: string; // Your order number (e.g., "KOS-2025-123456")
  amount: number; // Order total in GBP (e.g., 175.00)
  currency: string; // Always "GBP"
  customer_email?: string; // Optional: for tracking repeat customers
  product_ids?: string[]; // Optional: track which products convert
  commission_amount?: number; // Optional: override default commission
  metadata?: Record<string, unknown>; // Optional: additional tracking data
}

export interface PushLapGrowthConversionResponse {
  success: boolean;
  conversion_id?: string;
  error?: string;
  message?: string;
}

export interface PushLapGrowthLeadRequest {
  affiliate_id: string;
  email: string;
  name?: string;
  phone?: string;
  lead_type: 'demo_booking' | 'contact_form' | 'subscription_inquiry';
  product?: string; // e.g., "Food Safe System", "Food Label System"
  metadata?: Record<string, unknown>;
}

export interface PushLapGrowthLeadResponse {
  success: boolean;
  lead_id?: string;
  error?: string;
  message?: string;
}

/**
 * Affiliate tracking configuration
 */
export const AFFILIATE_CONFIG = {
  // URL parameter names to check for affiliate IDs
  PARAM_NAMES: ['ref', 'plg', 'affiliate', 'partner'] as const,

  // Cookie name for storing affiliate ID
  COOKIE_NAME: 'plg_affiliate_id',

  // Cookie expiration in days
  COOKIE_EXPIRY_DAYS: 30,

  // Attribution model
  ATTRIBUTION_MODEL: 'first-click' as const, // 'first-click' | 'last-click'
} as const;
