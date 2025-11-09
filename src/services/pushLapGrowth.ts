/**
 * Push Lap Growth API Client
 *
 * Service for tracking affiliate referrals and sales via Push Lap Growth API
 * Documentation: https://www.pushlapgrowth.com/
 * Program ID: 7bbce14d-c2f8-40b1-8461-f3542b9b4652
 */

// Push Lap Growth API configuration
const API_BASE_URL = 'https://www.pushlapgrowth.com/api/v1';
const API_KEY = process.env.PUSH_LAP_GROWTH_API_KEY;
const ENABLED = process.env.NEXT_PUBLIC_PUSH_LAP_GROWTH_ENABLED === 'true';

/**
 * Push Lap Growth Referral (Sign Up) Request
 */
export interface PushLapReferralRequest {
  affiliateId: string; // Affiliate ID or email who referred the user
  name: string; // Customer name
  email: string; // Customer email
  referredUserExternalId?: string; // Optional: Customer ID in your database
  plan?: string; // Optional: Product/plan name
  status?: string; // Optional: Status (e.g., "active", "pending")
}

/**
 * Push Lap Growth Sale Request
 */
export interface PushLapSaleRequest {
  referralId: string; // The referral ID or email of the user who bought
  externalId?: string; // Optional: Customer ID in your database
  externalInvoiceId?: string; // Optional: Order/invoice number
  totalEarned: number; // Total sale amount
  commissionRate?: number; // Optional: Override affiliate commission rate
}

/**
 * API Response
 */
export interface PushLapResponse {
  success: boolean;
  id?: string;
  referralId?: string;
  saleId?: string;
  error?: string;
  message?: string;
}

/**
 * Track a new referral (customer sign-up)
 * Called when a customer completes checkout (before payment)
 */
export async function trackReferral(
  data: PushLapReferralRequest
): Promise<PushLapResponse> {
  // Check if Push Lap Growth is enabled
  if (!ENABLED) {
    console.log('[Push Lap Growth] Tracking disabled, skipping referral:', data.email);
    return {
      success: true,
      message: 'Tracking disabled',
    };
  }

  // Check if API key is configured
  if (!API_KEY) {
    console.error('[Push Lap Growth] API key not configured');
    return {
      success: false,
      error: 'Push Lap Growth API key not configured',
    };
  }

  try {
    console.log('[Push Lap Growth] Tracking referral:', {
      affiliateId: data.affiliateId,
      email: data.email,
      name: data.name,
    });

    const response = await fetch(`${API_BASE_URL}/referrals`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        affiliateId: data.affiliateId,
        name: data.name,
        email: data.email,
        referredUserExternalId: data.referredUserExternalId,
        plan: data.plan,
        status: data.status || 'pending',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Push Lap Growth] Referral API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });

      return {
        success: false,
        error: `Push Lap Growth API error: ${response.status} ${response.statusText}`,
      };
    }

    const result = await response.json();

    console.log('[Push Lap Growth] Referral tracked successfully:', {
      email: data.email,
      referralId: result.id || result.referralId,
    });

    return {
      success: true,
      referralId: result.id || result.referralId,
    };
  } catch (error) {
    console.error('[Push Lap Growth] Failed to track referral:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Track a sale/conversion
 * Called when payment is successfully completed
 */
export async function trackSale(
  data: PushLapSaleRequest
): Promise<PushLapResponse> {
  // Check if Push Lap Growth is enabled
  if (!ENABLED) {
    console.log('[Push Lap Growth] Tracking disabled, skipping sale:', data.externalInvoiceId);
    return {
      success: true,
      message: 'Tracking disabled',
    };
  }

  // Check if API key is configured
  if (!API_KEY) {
    console.error('[Push Lap Growth] API key not configured');
    return {
      success: false,
      error: 'Push Lap Growth API key not configured',
    };
  }

  try {
    console.log('[Push Lap Growth] Tracking sale:', {
      referralId: data.referralId,
      externalInvoiceId: data.externalInvoiceId,
      totalEarned: data.totalEarned,
    });

    const response = await fetch(`${API_BASE_URL}/sales`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        referralId: data.referralId,
        externalId: data.externalId,
        externalInvoiceId: data.externalInvoiceId,
        totalEarned: data.totalEarned,
        commissionRate: data.commissionRate,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Push Lap Growth] Sale API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });

      return {
        success: false,
        error: `Push Lap Growth API error: ${response.status} ${response.statusText}`,
      };
    }

    const result = await response.json();

    console.log('[Push Lap Growth] Sale tracked successfully:', {
      externalInvoiceId: data.externalInvoiceId,
      saleId: result.id || result.saleId,
    });

    return {
      success: true,
      saleId: result.id || result.saleId,
    };
  } catch (error) {
    console.error('[Push Lap Growth] Failed to track sale:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Legacy function for backward compatibility
 * Maps to trackSale() with proper parameters
 * @deprecated Use trackReferral() and trackSale() instead
 */
export async function trackConversion(data: {
  affiliate_id: string;
  order_id: string;
  amount: number;
  currency: string;
  customer_email?: string;
  metadata?: Record<string, unknown>;
}): Promise<PushLapResponse> {
  // For Push Lap Growth, we need to track this as a sale
  // The referralId can be the customer's email (since they were referred)
  return trackSale({
    referralId: data.customer_email || data.affiliate_id,
    externalInvoiceId: data.order_id,
    totalEarned: data.amount,
  });
}
