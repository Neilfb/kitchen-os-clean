/**
 * Tax Calculation Utilities
 *
 * Handles UK VAT and international tax logic:
 * - UK customers: 20% VAT
 * - Non-UK customers: 0% VAT (zero-rated export)
 * - Non-UK companies with valid VAT number: 0% VAT (reverse charge)
 */

export const UK_VAT_RATE = 0.2; // 20%

export interface TaxCalculationInput {
  subtotal: number; // Amount before tax
  country: string; // ISO country code (e.g., 'GB', 'US', 'FR')
  vatNumber?: string; // Optional VAT/tax registration number
}

export interface TaxCalculationResult {
  taxRate: number; // e.g., 0.20 for 20%
  taxAmount: number; // Calculated tax amount
  total: number; // subtotal + taxAmount
  isVatExempt: boolean; // Whether VAT exemption was applied
  exemptionReason?: string; // Why VAT was not charged
}

/**
 * Calculate tax for an order based on customer location and VAT status
 */
export function calculateTax(input: TaxCalculationInput): TaxCalculationResult {
  const { subtotal, country, vatNumber } = input;

  // Case 1: UK customer (default)
  if (country === 'GB' || country === 'UK') {
    return {
      taxRate: UK_VAT_RATE,
      taxAmount: parseFloat((subtotal * UK_VAT_RATE).toFixed(2)),
      total: parseFloat((subtotal * (1 + UK_VAT_RATE)).toFixed(2)),
      isVatExempt: false,
    };
  }

  // Case 2: Non-UK customer with valid VAT number (reverse charge)
  if (vatNumber && vatNumber.trim().length > 0) {
    return {
      taxRate: 0,
      taxAmount: 0,
      total: subtotal,
      isVatExempt: true,
      exemptionReason: 'Reverse charge - Non-UK company with VAT number',
    };
  }

  // Case 3: Non-UK customer without VAT number (zero-rated export)
  return {
    taxRate: 0,
    taxAmount: 0,
    total: subtotal,
    isVatExempt: true,
    exemptionReason: 'Zero-rated export - Non-UK customer',
  };
}

/**
 * Format tax amount for display
 */
export function formatTaxAmount(amount: number): string {
  return `£${amount.toFixed(2)}`;
}

/**
 * Format tax rate as percentage
 */
export function formatTaxRate(rate: number): string {
  return `${(rate * 100).toFixed(0)}%`;
}

/**
 * Calculate VAT-inclusive price from VAT-exclusive price
 */
export function calculateVatInclusive(exVatPrice: number, vatRate: number = UK_VAT_RATE): number {
  return parseFloat((exVatPrice * (1 + vatRate)).toFixed(2));
}

/**
 * Calculate VAT-exclusive price from VAT-inclusive price
 */
export function calculateVatExclusive(incVatPrice: number, vatRate: number = UK_VAT_RATE): number {
  return parseFloat((incVatPrice / (1 + vatRate)).toFixed(2));
}

/**
 * Extract VAT amount from VAT-inclusive price
 */
export function extractVatAmount(incVatPrice: number, vatRate: number = UK_VAT_RATE): number {
  const exVat = calculateVatExclusive(incVatPrice, vatRate);
  return parseFloat((incVatPrice - exVat).toFixed(2));
}
