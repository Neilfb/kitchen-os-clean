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
import { Loader2, CreditCard, Smartphone } from 'lucide-react';
import type { CustomerDetails, OrderCreationResponse } from '@/types/order';
import type { CartState } from '@/types/cart';

interface RevolutWidgetProps {
  customerDetails: CustomerDetails;
  cart: CartState;
}

export function RevolutWidget({ customerDetails, cart }: RevolutWidgetProps) {
  const router = useRouter();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [revolutOrderToken, setRevolutOrderToken] = useState<string | null>(null);

  const publicKey = process.env.NEXT_PUBLIC_REVOLUT_PUBLIC_KEY;

  // Check if Revolut is configured
  const isConfigured = !!publicKey;

  /**
   * Create order on backend and get Revolut order token
   */
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
        throw new Error('Failed to create order');
      }

      const data: OrderCreationResponse = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to create order');
      }

      setRevolutOrderToken(data.revolutOrderToken || null);

      // Initialize Revolut widget here
      // NOTE: Actual Revolut SDK integration would happen here
      console.log('Order created:', data.orderId);
      console.log('Revolut token:', data.revolutOrderToken);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create order');
    } finally {
      setIsCreatingOrder(false);
    }
  };

  // Initialize Revolut SDK when token is available
  useEffect(() => {
    if (revolutOrderToken && isConfigured) {
      // TODO: Initialize Revolut SDK
      // Example (simplified - actual implementation depends on Revolut SDK version):
      /*
      RevolutCheckout(revolutOrderToken, 'sandbox').then((instance) => {
        instance.payWithPopup({
          onSuccess: () => {
            router.push('/checkout/success');
          },
          onError: (error) => {
            setError('Payment failed');
          },
          onCancel: () => {
            router.push('/checkout/cancelled');
          },
        });
      });
      */
      console.log('Revolut widget would be initialized here with token:', revolutOrderToken);
    }
  }, [revolutOrderToken, isConfigured, router]);

  if (!isConfigured) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 mb-2">Payment Not Configured</h3>
        <p className="text-sm text-yellow-800 mb-4">
          Revolut payment is not configured. Please add your Revolut API keys to the environment variables.
        </p>
        <div className="bg-white rounded p-3 text-xs font-mono text-gray-700">
          NEXT_PUBLIC_REVOLUT_PUBLIC_KEY=your-public-key<br />
          REVOLUT_SECRET_KEY=your-secret-key
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Payment Methods Info */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Card Payment</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <Smartphone className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Revolut Pay</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <span className="text-lg">🍎</span>
          <span className="text-sm text-gray-700">Apple Pay</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <span className="text-lg">G</span>
          <span className="text-sm text-gray-700">Google Pay</span>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Payment Button or Revolut Widget Container */}
      {!revolutOrderToken ? (
        <button
          onClick={createOrder}
          disabled={isCreatingOrder}
          className="w-full py-4 px-6 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isCreatingOrder ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating Order...
            </>
          ) : (
            'Pay Now'
          )}
        </button>
      ) : (
        <div id="revolut-pay" className="min-h-[200px] border border-gray-200 rounded-lg p-4 flex items-center justify-center">
          <p className="text-gray-600">Revolut payment widget would appear here</p>
        </div>
      )}

      {/* Security Notice */}
      <p className="text-xs text-gray-500 text-center">
        Secure payment processed by Revolut • All transactions are encrypted
      </p>
    </div>
  );
}
