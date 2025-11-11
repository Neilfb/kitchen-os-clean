/**
 * Next.js Middleware
 *
 * Handles geolocation-based currency detection using Vercel Edge.
 * Sets currency preference cookie based on visitor's country.
 *
 * Note: In Next.js 15, `request.geo` and `request.ip` are removed from
 * TypeScript definitions but still work at runtime on Vercel platform.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrencyFromCountry } from '@/lib/geolocation';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if user already has a currency preference
  const existingCurrency = request.cookies.get('preferred_currency');

  if (!existingCurrency) {
    // Detect country from Vercel Edge geolocation
    // Note: TypeScript may show error but this works on Vercel at runtime
    // @ts-expect-error - geo exists at runtime on Vercel Edge
    const country = request.geo?.country || 'GB';

    // Map country to currency
    const detectedCurrency = getCurrencyFromCountry(country);

    // Set currency cookie (30 days)
    response.cookies.set('preferred_currency', detectedCurrency, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
      httpOnly: false, // Allow client-side JavaScript to read
    });

    // Also set country for debugging/analytics (optional)
    response.cookies.set('detected_country', country, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      sameSite: 'lax',
      httpOnly: false,
    });
  }

  // Add Vary header for proper CDN caching
  response.headers.set('Vary', 'Cookie');

  return response;
}

/**
 * Configure which routes should trigger the middleware
 * Only run on pages that display pricing or currency-sensitive content
 */
export const config = {
  matcher: [
    '/pricing',
    '/shop/:path*',
    '/checkout',
    '/compare/:path*',
    '/food-safe-system',
    '/allerq',
    '/food-label-system',
    '/f-waste',
  ],
};
