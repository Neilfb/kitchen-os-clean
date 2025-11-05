'use client';

/**
 * RevolutWidget Component
 *
 * Integrates Revolut Merchant SDK for payment processing.
 * Supports Revolut Pay, Card, Apple Pay, and Google Pay.
 *
 * IMPORTANT: Requires NEXT_PUBLIC_REVOLUT_PUBLIC_KEY in environment variables.
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, AlertCircle } from 'lucide-react';
import type { CustomerDetails, OrderCreationResponse } from '@/types/order';
import type { CartState } from '@/types/cart';
import RevolutPayment from '@/components/checkout/RevolutPayment';
import type { PaymentResult } from '@/types/revolut';

interface RevolutWidgetProps {
  customerDetails: CustomerDetails;
  cart: CartState;
}

export function RevolutWidget({ customerDetails, cart }: RevolutWidgetProps) {
  const router = useRouter();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [revolutOrderToken, setRevolutOrderToken] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const publicKey = process.env.NEXT_PUBLIC_REVOLUT_PUBLIC_KEY;

  // Check if Revolut is configured
  const isConfigured = !!publicKey;

  /**
   * Create order on backend and get Revolut order token
   */
  useEffect(() => {
    if (!customerDetails || !cart.items.length || revolutOrderToken) {
      return;
    }

    const createOrder = async () => {
      setIsCreatingOrder(true);
      setError(null);

      try {
        const response = await fetch('/api/orders/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customer: customerDetails,
            items: cart.items,
            summary: {
              subtotal: cart.subtotal,
              shippingCost: cart.shippingCost,
              taxRate: cart.taxRate,
              taxAmount: cart.taxAmount,
              total: cart.total,
              currency: cart.currency,
            },
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create order');
        }

        const data: OrderCreationResponse = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to create order');
        }

        setRevolutOrderToken(data.revolutOrderToken || null);
        setOrderNumber(data.orderId || null);

        console.log('Order created successfully:', {
          orderId: data.orderId,
          hasToken: !!data.revolutOrderToken,
        });
      } catch (err) {
        console.error('Order creation error:', err);
        setError(err instanceof Error ? err.message : 'Failed to create order');
      } finally {
        setIsCreatingOrder(false);
      }
    };

    createOrder();
  }, [customerDetails, cart, revolutOrderToken]);

  /**
   * Handle successful payment
   */
  const handlePaymentSuccess = (result: PaymentResult) => {
    console.log('Payment successful:', result);

    // Redirect to success page
    router.push(
      `/shop/success?orderId=${encodeURIComponent(orderNumber || '')}&email=${encodeURIComponent(customerDetails.email)}`
    );
  };

  /**
   * Handle payment error
   */
  const handlePaymentError = (err: Error) => {
    console.error('Payment error:', err);
    setError(err.message);

    // Optionally redirect to failure page
    if (orderNumber) {
      router.push(
        `/shop/failed?orderId=${encodeURIComponent(orderNumber)}&reason=${encodeURIComponent(err.message)}`
      );
    }
  };

  /**
   * Handle payment cancellation
   */
  const handlePaymentCancel = () => {
    console.log('Payment cancelled by user');
    setError('Payment was cancelled. You can try again when ready.');
  };

  // Configuration error
  if (!isConfigured) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900 mb-1">Payment System Not Configured</h3>
            <p className="text-sm text-red-700">
              Revolut payment processing is not configured. Please contact support.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isCreatingOrder) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-product-fss-green" />
        <p className="text-gray-600">Creating your order...</p>
        <p className="text-sm text-gray-500">Please wait while we prepare your checkout</p>
      </div>
    );
  }

  // Error state
  if (error && !revolutOrderToken) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-red-900 mb-1">Order Creation Failed</h3>
            <p className="text-sm text-red-700 mb-4">{error}</p>
            <button
              onClick={() => {
                setError(null);
                window.location.reload();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Payment widget
  if (revolutOrderToken && orderNumber) {
    return (
      <RevolutPayment
        publicToken={revolutOrderToken}
        orderNumber={orderNumber}
        amount={cart.total}
        currency={cart.currency}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        onCancel={handlePaymentCancel}
      />
    );
  }

  // Fallback loading state
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      <p className="text-gray-600">Initializing payment...</p>
    </div>
  );
}
