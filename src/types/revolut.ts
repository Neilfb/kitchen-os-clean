/**
 * Revolut Payment Integration Types
 * Documentation: https://developer.revolut.com/docs/merchant/merchant-api
 */

// Revolut Order Creation Request
export interface RevolutOrderRequest {
  amount: number; // Amount in smallest currency unit (pence for GBP)
  currency: string; // ISO 4217 currency code (e.g., 'GBP')
  description?: string;
  merchant_order_ext_ref?: string; // External reference (our order number)
  customer_email?: string;
  customer_phone?: string;
  settlement_currency?: string;
  shipping_address?: {
    street_line_1?: string;
    street_line_2?: string;
    region?: string;
    city?: string;
    country_code?: string; // ISO 3166-1 alpha-2
    postcode?: string;
  };
  billing_address?: {
    street_line_1?: string;
    street_line_2?: string;
    region?: string;
    city?: string;
    country_code?: string;
    postcode?: string;
  };
  webhook_url?: string; // URL where Revolut POSTs order status events
}

// Revolut Order Creation Response
// Note: API version 2024-09-01 returns 'token', older versions return 'public_id'
export interface RevolutOrderResponse {
  id: string; // Revolut order ID
  token?: string; // Public token for frontend widget (API version 2024-09-01+)
  public_id?: string; // Public token for frontend widget (older API versions)
  type: 'PAYMENT';
  state: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED' | 'FAILED';
  created_at: string; // ISO 8601 datetime
  updated_at: string;
  completed_at?: string;
  amount: number;
  currency: string;
  description?: string;
  merchant_order_ext_ref?: string;
  customer_email?: string;
  order_amount?: {
    value: number;
    currency: string;
  };
  order_outstanding_amount?: {
    value: number;
    currency: string;
  };
  checkout_url?: string;
}

// Revolut Widget Instance Type
export interface RevolutCheckoutInstance {
  payWithPopup: (options?: PaymentOptions) => Promise<PaymentResult>;
  destroy: () => void;
}

export interface PaymentOptions {
  email?: string;
  name?: string;
  phone?: string;
  savePaymentMethodFor?: 'merchant' | 'customer';
  billingAddress?: Address;
  shippingAddress?: Address;
}

export interface Address {
  countryCode: string;
  region?: string;
  city?: string;
  postcode?: string;
  streetLine1?: string;
  streetLine2?: string;
}

export interface CardField {
  mount: (selector: string) => void;
  unmount: () => void;
  submit: (options?: PaymentOptions) => Promise<PaymentResult>;
  on: (event: string, callback: (data: unknown) => void) => void;
}

export interface PaymentResult {
  status: 'SUCCESS' | 'DECLINED' | 'ERROR' | 'CANCELLED';
  orderId?: string;
  publicId?: string;
  error?: {
    type: string;
    message: string;
  };
}

// Webhook Event Types
export interface RevolutWebhookEvent {
  event: 'ORDER_COMPLETED' | 'ORDER_AUTHORISED' | 'ORDER_CANCELLED' | 'ORDER_PAYMENT_FAILED';
  timestamp: string; // ISO 8601
  order_id: string;
  merchant_order_ext_ref?: string;
  amount: number;
  currency: string;
  customer_email?: string;
  payment_method?: {
    type: 'CARD' | 'REVOLUT_PAY' | 'APPLE_PAY' | 'GOOGLE_PAY';
    card?: {
      card_brand: string;
      card_type: string;
      last_four: string;
      bin: string;
      expiry_month: number;
      expiry_year: number;
    };
  };
}

// Order Status Mapping
export type RevolutOrderState = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED' | 'FAILED';

export const REVOLUT_ORDER_STATES = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  FAILED: 'FAILED',
} as const;

// Payment Method Types
export type PaymentMethodType = 'CARD' | 'REVOLUT_PAY' | 'APPLE_PAY' | 'GOOGLE_PAY';

// Error Response
export interface RevolutErrorResponse {
  error: string;
  message: string;
  code?: number;
}
