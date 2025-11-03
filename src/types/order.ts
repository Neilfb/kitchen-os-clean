/**
 * Order Data Types
 *
 * Defines the structure for completed orders and customer information.
 */

import { CartItem } from './cart';

export interface CustomerDetails {
  // Contact information
  email: string;
  phone: string;

  // Billing address
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  country: string; // ISO country code (e.g., 'GB', 'US', 'FR')

  // Tax information
  vatNumber?: string; // Optional VAT/tax registration number
  isVatExempt: boolean; // Calculated based on vatNumber + country
}

export interface OrderSummary {
  subtotal: number; // Ex VAT, ex shipping
  shippingCost: number;
  taxRate: number; // e.g., 0.20 for 20%
  taxAmount: number;
  total: number; // Final amount charged
  currency: 'GBP';
}

export interface Order {
  // Order identification
  id: string; // UUID or Revolut order ID
  orderNumber: string; // Human-readable order number (e.g., 'KOS-2025-0001')
  status: 'pending' | 'paid' | 'failed' | 'cancelled';

  // Customer information
  customer: CustomerDetails;

  // Order items
  items: CartItem[];

  // Financial summary
  summary: OrderSummary;

  // Payment information
  paymentMethod?: 'revolut_pay' | 'card' | 'apple_pay' | 'google_pay';
  revolutOrderId?: string;

  // Timestamps
  createdAt: string; // ISO date string
  paidAt?: string; // ISO date string
  cancelledAt?: string; // ISO date string

  // Metadata
  notes?: string;
}

export interface OrderCreationRequest {
  customer: CustomerDetails;
  items: CartItem[];
  summary: OrderSummary;
}

export interface OrderCreationResponse {
  success: boolean;
  orderId: string;
  revolutOrderToken?: string; // Token for initializing Revolut widget
  error?: string;
}
