/**
 * Push Lap Growth API Client
 *
 * Service for tracking affiliate conversions and leads via Push Lap Growth API
 * Documentation: https://developers.pushlapgrowth.com/
 */

import type {
  PushLapGrowthConversionRequest,
  PushLapGrowthConversionResponse,
  PushLapGrowthLeadRequest,
  PushLapGrowthLeadResponse,
} from '@/types/affiliate';

// Push Lap Growth API configuration
const API_BASE_URL = 'https://api.pushlapgrowth.com/v1';
const API_KEY = process.env.PUSH_LAP_GROWTH_API_KEY;
const ENABLED = process.env.NEXT_PUBLIC_PUSH_LAP_GROWTH_ENABLED === 'true';

/**
 * Track a conversion (sale/purchase) with Push Lap Growth
 * Called when a payment is successfully completed
 */
export async function trackConversion(
  data: PushLapGrowthConversionRequest
): Promise<PushLapGrowthConversionResponse> {
  // Check if Push Lap Growth is enabled
  if (!ENABLED) {
    console.log('[Push Lap Growth] Tracking disabled, skipping conversion:', data.order_id);
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
    console.log('[Push Lap Growth] Tracking conversion:', {
      affiliate_id: data.affiliate_id,
      order_id: data.order_id,
      amount: data.amount,
    });

    const response = await fetch(`${API_BASE_URL}/conversions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        affiliate_id: data.affiliate_id,
        order_id: data.order_id,
        amount: data.amount,
        currency: data.currency || 'GBP',
        customer_email: data.customer_email,
        product_ids: data.product_ids,
        commission_amount: data.commission_amount,
        metadata: {
          ...data.metadata,
          source: 'kitchen-os',
          timestamp: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Push Lap Growth] API error:', {
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

    console.log('[Push Lap Growth] Conversion tracked successfully:', {
      order_id: data.order_id,
      conversion_id: result.id || result.conversion_id,
    });

    return {
      success: true,
      conversion_id: result.id || result.conversion_id,
    };
  } catch (error) {
    console.error('[Push Lap Growth] Failed to track conversion:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Track a lead (demo booking, inquiry, etc.) with Push Lap Growth
 * Used for tracking non-purchase conversions
 */
export async function trackLead(
  data: PushLapGrowthLeadRequest
): Promise<PushLapGrowthLeadResponse> {
  // Check if Push Lap Growth is enabled
  if (!ENABLED) {
    console.log('[Push Lap Growth] Tracking disabled, skipping lead:', data.email);
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
    console.log('[Push Lap Growth] Tracking lead:', {
      affiliate_id: data.affiliate_id,
      email: data.email,
      lead_type: data.lead_type,
    });

    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        affiliate_id: data.affiliate_id,
        email: data.email,
        name: data.name,
        phone: data.phone,
        lead_type: data.lead_type,
        product: data.product,
        metadata: {
          ...data.metadata,
          source: 'kitchen-os',
          timestamp: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Push Lap Growth] API error:', {
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

    console.log('[Push Lap Growth] Lead tracked successfully:', {
      email: data.email,
      lead_id: result.id || result.lead_id,
    });

    return {
      success: true,
      lead_id: result.id || result.lead_id,
    };
  } catch (error) {
    console.error('[Push Lap Growth] Failed to track lead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Test API connection and authentication
 * Useful for verifying Push Lap Growth setup
 */
export async function testConnection(): Promise<boolean> {
  if (!API_KEY) {
    console.error('[Push Lap Growth] API key not configured');
    return false;
  }

  try {
    // Try to fetch account info or make a test request
    // Note: Update this endpoint based on actual Push Lap Growth API docs
    const response = await fetch(`${API_BASE_URL}/account`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    if (response.ok) {
      console.log('[Push Lap Growth] API connection successful');
      return true;
    } else {
      console.error('[Push Lap Growth] API connection failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('[Push Lap Growth] Connection test failed:', error);
    return false;
  }
}
