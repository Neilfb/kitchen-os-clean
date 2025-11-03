/**
 * VAT/Tax Number Format Validation
 *
 * Validates VAT/tax registration numbers for various countries.
 * Format validation only - does not verify with government APIs.
 */

export interface VatValidationResult {
  isValid: boolean;
  country?: string; // Detected country code
  error?: string;
}

/**
 * VAT number format patterns by country
 */
const VAT_PATTERNS: Record<string, RegExp> = {
  // UK: GB followed by 9 or 12 digits
  GB: /^GB\d{9}$|^GB\d{12}$|^GBGD\d{3}$|^GBHA\d{3}$/,

  // EU Countries
  AT: /^ATU\d{8}$/, // Austria
  BE: /^BE0\d{9}$/, // Belgium
  BG: /^BG\d{9,10}$/, // Bulgaria
  CY: /^CY\d{8}[A-Z]$/, // Cyprus
  CZ: /^CZ\d{8,10}$/, // Czech Republic
  DE: /^DE\d{9}$/, // Germany
  DK: /^DK\d{8}$/, // Denmark
  EE: /^EE\d{9}$/, // Estonia
  ES: /^ES[A-Z0-9]\d{7}[A-Z0-9]$/, // Spain
  FI: /^FI\d{8}$/, // Finland
  FR: /^FR[A-HJ-NP-Z0-9]{2}\d{9}$/, // France
  GR: /^GR\d{9}$|^EL\d{9}$/, // Greece
  HR: /^HR\d{11}$/, // Croatia
  HU: /^HU\d{8}$/, // Hungary
  IE: /^IE\d[A-Z0-9]\d{5}[A-Z]$|^IE\d{7}[A-WY][A-I]$/, // Ireland
  IT: /^IT\d{11}$/, // Italy
  LT: /^LT(\d{9}|\d{12})$/, // Lithuania
  LU: /^LU\d{8}$/, // Luxembourg
  LV: /^LV\d{11}$/, // Latvia
  MT: /^MT\d{8}$/, // Malta
  NL: /^NL\d{9}B\d{2}$/, // Netherlands
  PL: /^PL\d{10}$/, // Poland
  PT: /^PT\d{9}$/, // Portugal
  RO: /^RO\d{2,10}$/, // Romania
  SE: /^SE\d{12}$/, // Sweden
  SI: /^SI\d{8}$/, // Slovenia
  SK: /^SK\d{10}$/, // Slovakia

  // Other countries (common formats)
  US: /^\d{2}-\d{7}$/, // US EIN format
  CA: /^\d{9}(RT\d{4})?$/, // Canada BN
  AU: /^\d{11}$/, // Australian ABN
  NZ: /^\d{8,9}$/, // New Zealand GST
  CH: /^CHE-\d{3}\.\d{3}\.\d{3}( TVA| MWST| IVA)?$/, // Switzerland
  NO: /^NO\d{9}MVA$/, // Norway
};

/**
 * Validate VAT/tax number format
 */
export function validateVatNumber(vatNumber: string): VatValidationResult {
  if (!vatNumber || vatNumber.trim().length === 0) {
    return {
      isValid: false,
      error: 'VAT number is required',
    };
  }

  // Remove spaces and convert to uppercase
  const cleaned = vatNumber.trim().replace(/\s/g, '').toUpperCase();

  // Check if it's too short
  if (cleaned.length < 4) {
    return {
      isValid: false,
      error: 'VAT number is too short',
    };
  }

  // Try to detect country code (first 2 characters)
  const countryCode = cleaned.substring(0, 2);

  // Check against known patterns
  if (VAT_PATTERNS[countryCode]) {
    const pattern = VAT_PATTERNS[countryCode];
    if (pattern.test(cleaned)) {
      return {
        isValid: true,
        country: countryCode,
      };
    } else {
      return {
        isValid: false,
        error: `Invalid ${countryCode} VAT number format`,
      };
    }
  }

  // Fallback: Accept any alphanumeric string of reasonable length
  // (for countries not in our pattern list)
  if (/^[A-Z]{2}[A-Z0-9]{4,20}$/.test(cleaned)) {
    return {
      isValid: true,
      country: countryCode,
    };
  }

  return {
    isValid: false,
    error: 'Invalid VAT number format. Should start with 2-letter country code.',
  };
}

/**
 * Format VAT number for display (adds spaces for readability)
 */
export function formatVatNumber(vatNumber: string): string {
  const cleaned = vatNumber.trim().replace(/\s/g, '').toUpperCase();

  // UK format: GB 123 456 789 or GB 123 456 789 012
  if (cleaned.startsWith('GB') && /^GB\d{9,12}$/.test(cleaned)) {
    const numbers = cleaned.substring(2);
    if (numbers.length === 9) {
      return `GB ${numbers.substring(0, 3)} ${numbers.substring(3, 6)} ${numbers.substring(6)}`;
    } else if (numbers.length === 12) {
      return `GB ${numbers.substring(0, 3)} ${numbers.substring(3, 6)} ${numbers.substring(6, 9)} ${numbers.substring(9)}`;
    }
  }

  // For other countries, just add space after country code
  return `${cleaned.substring(0, 2)} ${cleaned.substring(2)}`;
}

/**
 * Check if a country requires VAT number for B2B transactions
 */
export function isVatCountry(countryCode: string): boolean {
  return countryCode in VAT_PATTERNS;
}

/**
 * Get list of countries that support VAT validation
 */
export function getSupportedVatCountries(): string[] {
  return Object.keys(VAT_PATTERNS);
}
