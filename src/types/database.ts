/**
 * Database Types
 *
 * TypeScript interfaces for NoCodeBackend database records.
 */

/**
 * Order record from database
 */
export interface DBOrder {
  id: number;
  order_number: string;
  revolut_order_id: string | null;

  // Customer information
  customer_email: string;
  customer_name: string;
  customer_phone: string | null;
  customer_company: string | null;

  // Billing address
  billing_address_line1: string;
  billing_address_line2: string | null;
  billing_city: string;
  billing_county: string | null;
  billing_postcode: string;
  billing_country: string;

  // Shipping address
  shipping_address_line1: string;
  shipping_address_line2: string | null;
  shipping_city: string;
  shipping_county: string | null;
  shipping_postcode: string;
  shipping_country: string;

  // VAT information
  vat_number: string | null;
  vat_country: string | null;

  // Financial summary
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;

  // Order status
  status: 'pending' | 'paid' | 'failed' | 'cancelled' | 'authorized';
  payment_method: string | null;

  // Affiliate tracking
  affiliate_id: string | null;
  affiliate_commission_tracked: boolean;

  // Timestamps
  created_at: string;
  paid_at: string | null;
  cancelled_at: string | null;
}

/**
 * Order item record from database
 */
export interface DBOrderItem {
  id: number;
  order_id: number;

  // Product information
  product_id: string;
  product_name: string;
  product_image: string | null;

  // Variant information
  variant_id: string;
  variant_name: string;

  // Pricing
  quantity: number;
  unit_price: number;
  line_total: number;

  // Timestamps
  created_at: string;
}

/**
 * Contact submission record from database
 */
export interface DBContactSubmission {
  id: number;

  // Contact information
  name: string;
  email: string;
  phone: string | null;
  company: string | null;

  // Business details
  number_of_sites: number | null;
  product_interest: string | null;
  message: string;

  // Status tracking
  status: 'new' | 'contacted' | 'converted';

  // Timestamps
  created_at: string;
}
