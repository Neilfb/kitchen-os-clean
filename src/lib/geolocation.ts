/**
 * Geolocation Utilities
 *
 * Maps country codes to appropriate currencies based on visitor location.
 * Used by middleware to auto-detect preferred currency.
 */

/**
 * Map country code to currency code
 * Supports major English-speaking markets and Eurozone
 */
export function getCurrencyFromCountry(countryCode: string): string {
  // Normalize to uppercase
  const country = countryCode.toUpperCase();

  // Euro Zone countries (19 members as of 2024)
  const euroZone = [
    'AT', // Austria
    'BE', // Belgium
    'CY', // Cyprus
    'EE', // Estonia
    'FI', // Finland
    'FR', // France
    'DE', // Germany
    'GR', // Greece
    'IE', // Ireland
    'IT', // Italy
    'LV', // Latvia
    'LT', // Lithuania
    'LU', // Luxembourg
    'MT', // Malta
    'NL', // Netherlands
    'PT', // Portugal
    'SK', // Slovakia
    'SI', // Slovenia
    'ES', // Spain
  ];

  // Direct country mappings
  if (country === 'GB') return 'GBP';
  if (country === 'US') return 'USD';
  if (country === 'CA') return 'CAD';
  if (country === 'AU') return 'AUD';
  if (country === 'NZ') return 'NZD';

  // Eurozone check
  if (euroZone.includes(country)) return 'EUR';

  // Default fallback to GBP (UK market focus)
  return 'GBP';
}

/**
 * Get locale code from country code
 * Used for number and date formatting
 */
export function getLocaleFromCountry(countryCode: string): string {
  const country = countryCode.toUpperCase();

  const locales: Record<string, string> = {
    GB: 'en-GB',
    US: 'en-US',
    CA: 'en-CA',
    AU: 'en-AU',
    NZ: 'en-NZ',
    IE: 'en-IE',
    // Eurozone defaults
    DE: 'de-DE',
    FR: 'fr-FR',
    ES: 'es-ES',
    IT: 'it-IT',
    NL: 'nl-NL',
    PT: 'pt-PT',
  };

  return locales[country] || 'en-GB';
}

/**
 * Check if country is in a supported market
 */
export function isSupportedMarket(countryCode: string): boolean {
  const supportedCountries = [
    'GB', 'US', 'CA', 'AU', 'NZ', // English markets
    'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE',
    'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES', // Eurozone
  ];

  return supportedCountries.includes(countryCode.toUpperCase());
}

/**
 * Get all supported currencies
 */
export function getSupportedCurrencies(): string[] {
  return ['GBP', 'USD', 'EUR', 'CAD', 'AUD', 'NZD'];
}
