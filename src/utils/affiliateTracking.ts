/**
 * Affiliate Tracking Utility
 *
 * Client-side utility for detecting and storing affiliate referrals
 * Used with Push Lap Growth affiliate tracking system
 */

import { AFFILIATE_CONFIG, type AffiliateData } from '@/types/affiliate';

/**
 * Get affiliate ID from URL parameters or cookie
 * Implements first-click attribution by default (doesn't override existing cookie)
 */
export function getAffiliateId(): string | null {
  if (typeof window === 'undefined') return null;

  // Check URL parameters for affiliate ID
  const params = new URLSearchParams(window.location.search);
  let affiliateId: string | null = null;

  // Check all possible parameter names
  for (const paramName of AFFILIATE_CONFIG.PARAM_NAMES) {
    const value = params.get(paramName);
    if (value) {
      affiliateId = value;
      break;
    }
  }

  // If found in URL, store in cookie (respecting attribution model)
  if (affiliateId) {
    const existingAffiliate = getAffiliateCookie();

    // First-click attribution: don't override existing cookie
    if (AFFILIATE_CONFIG.ATTRIBUTION_MODEL === 'first-click' && existingAffiliate) {
      console.log('[Affiliate] Using first-click attribution, keeping existing affiliate:', existingAffiliate);
      return existingAffiliate;
    }

    // Last-click attribution OR no existing cookie: store new affiliate ID
    setAffiliateCookie(affiliateId);
    console.log('[Affiliate] New affiliate detected and stored:', affiliateId);
    return affiliateId;
  }

  // If not in URL, check cookie
  return getAffiliateCookie();
}

/**
 * Get full affiliate data including metadata
 */
export function getAffiliateData(): AffiliateData {
  const affiliateId = getAffiliateId();

  if (!affiliateId) {
    return { affiliateId: null };
  }

  // Extract additional data from cookie if available
  const cookieData = getAffiliateCookieData();

  return {
    affiliateId,
    affiliateCode: cookieData?.code || null,
    source: cookieData?.source || null,
    timestamp: cookieData?.timestamp || null,
  };
}

/**
 * Set affiliate cookie with expiration
 */
function setAffiliateCookie(affiliateId: string): void {
  if (typeof document === 'undefined') return;

  const expiryDays = AFFILIATE_CONFIG.COOKIE_EXPIRY_DAYS;
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + expiryDays * 24 * 60 * 60 * 1000);

  // Store affiliate data as JSON in cookie
  const affiliateData = {
    id: affiliateId,
    timestamp: new Date().toISOString(),
    source: getPageSource(),
  };

  document.cookie = `${AFFILIATE_CONFIG.COOKIE_NAME}=${JSON.stringify(affiliateData)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;

  console.log(`[Affiliate] Cookie set with ${expiryDays}-day expiration`);
}

/**
 * Get affiliate ID from cookie
 */
function getAffiliateCookie(): string | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const affiliateCookie = cookies.find((c) =>
    c.trim().startsWith(`${AFFILIATE_CONFIG.COOKIE_NAME}=`)
  );

  if (!affiliateCookie) return null;

  try {
    const cookieValue = affiliateCookie.split('=')[1];
    const data = JSON.parse(decodeURIComponent(cookieValue));
    return data.id || null;
  } catch {
    // If cookie is not JSON (old format), return raw value
    return affiliateCookie.split('=')[1] || null;
  }
}

/**
 * Get full affiliate cookie data
 */
function getAffiliateCookieData(): {
  id: string;
  timestamp?: string;
  source?: string;
  code?: string;
} | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const affiliateCookie = cookies.find((c) =>
    c.trim().startsWith(`${AFFILIATE_CONFIG.COOKIE_NAME}=`)
  );

  if (!affiliateCookie) return null;

  try {
    const cookieValue = affiliateCookie.split('=')[1];
    return JSON.parse(decodeURIComponent(cookieValue));
  } catch {
    // If cookie is not JSON, return just the ID
    return { id: affiliateCookie.split('=')[1] };
  }
}

/**
 * Clear affiliate cookie (useful for testing)
 */
export function clearAffiliateCookie(): void {
  if (typeof document === 'undefined') return;

  document.cookie = `${AFFILIATE_CONFIG.COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  console.log('[Affiliate] Cookie cleared');
}

/**
 * Check if user came from an affiliate link
 */
export function hasAffiliateReferral(): boolean {
  return getAffiliateId() !== null;
}

/**
 * Get the page source where the affiliate link was clicked
 */
function getPageSource(): string {
  if (typeof window === 'undefined') return 'unknown';

  const pathname = window.location.pathname;

  // Map pathname to friendly source names
  if (pathname === '/' || pathname === '/shop') return 'shop';
  if (pathname.startsWith('/food-safe-system')) return 'food-safe-system';
  if (pathname.startsWith('/food-label-system')) return 'food-label-system';
  if (pathname.startsWith('/allerq')) return 'allerq';
  if (pathname.startsWith('/f-waste')) return 'f-waste';

  return pathname;
}

/**
 * Initialize affiliate tracking on page load
 * Call this in your root layout or app component
 */
export function initAffiliateTracking(): void {
  if (typeof window === 'undefined') return;

  // Detect and store affiliate ID if present
  const affiliateId = getAffiliateId();

  if (affiliateId) {
    console.log('[Affiliate] Tracking initialized with affiliate:', affiliateId);
  }
}
