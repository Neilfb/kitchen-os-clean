'use client';

import { useEffect, useRef, useState } from 'react';
import RevolutCheckout from '@revolut/checkout';
import type { PaymentResult } from '@/types/revolut';
import { Loader2, CreditCard, Zap } from 'lucide-react';

interface RevolutPaymentProps {
  publicToken: string;
  orderNumber: string;
  amount: number;
  currency: string;
  onSuccess?: (result: PaymentResult) => void;
  onError?: (error: Error) => void;
  onCancel?: () => void;
}

export default function RevolutPayment({
  publicToken,
  orderNumber,
  amount,
  currency,
  onSuccess,
  onError,
  onCancel,
}: RevolutPaymentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [instance, setInstance] = useState<unknown | null>(null);
  const cardFieldRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // Initialize Revolut Checkout
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const initializeRevolutCheckout = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get mode from environment (sandbox or prod)
        const mode = process.env.NEXT_PUBLIC_REVOLUT_MODE === 'production' ? 'prod' : 'sandbox';

        // Initialize RevolutCheckout
        const revolutInstance = await RevolutCheckout(publicToken, mode);
        setInstance(revolutInstance);

        setIsLoading(false);
      } catch (err) {
        console.error('Error initializing Revolut Checkout:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize payment');
        setIsLoading(false);
        onError?.(err instanceof Error ? err : new Error('Failed to initialize payment'));
      }
    };

    if (publicToken) {
      initializeRevolutCheckout();
    }

    // Cleanup
    return () => {
      if (instance) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (instance as any).destroy();
      }
    };
  }, [publicToken, onError]);

  // Handle Revolut Pay (Fast checkout for Revolut users)
  const handleRevolutPay = async () => {
    if (!instance) {
      setError('Payment system not initialized');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await (instance as any).payWithPopup({
        email: undefined, // Let user enter in popup
        name: undefined,
        savePaymentMethodFor: 'merchant',
      });

      if (result.status === 'SUCCESS') {
        onSuccess?.(result);
      } else if (result.status === 'CANCELLED') {
        onCancel?.();
      } else if (result.status === 'DECLINED' || result.status === 'ERROR') {
        const errorMessage = result.error?.message || 'Payment failed';
        setError(errorMessage);
        onError?.(new Error(errorMessage));
      }
    } catch (err) {
      console.error('Revolut Pay error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMessage);
      onError?.(new Error(errorMessage));
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle card payment
  const handleCardPayment = async () => {
    if (!instance) {
      setError('Payment system not initialized');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await (instance as any).payWithPopup({
        savePaymentMethodFor: 'merchant',
      });

      if (result.status === 'SUCCESS') {
        onSuccess?.(result);
      } else if (result.status === 'CANCELLED') {
        onCancel?.();
      } else if (result.status === 'DECLINED' || result.status === 'ERROR') {
        const errorMessage = result.error?.message || 'Payment failed';
        setError(errorMessage);
        onError?.(new Error(errorMessage));
      }
    } catch (err) {
      console.error('Card payment error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMessage);
      onError?.(new Error(errorMessage));
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-product-fss-green" />
        <p className="text-gray-600">Initializing secure payment...</p>
      </div>
    );
  }

  if (error && !isProcessing) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800 font-semibold mb-2">Payment Error</p>
        <p className="text-red-600 text-sm">{error}</p>
        <button
          onClick={() => {
            setError(null);
            hasInitialized.current = false;
          }}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-brand-navy mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order Number</span>
            <span className="font-semibold text-brand-navy">{orderNumber}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span className="text-brand-navy">Total</span>
            <span className="text-product-fss-green">
              {currency} {amount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-brand-navy">Choose Payment Method</h3>

        {/* Revolut Pay - Fast Checkout */}
        <button
          onClick={handleRevolutPay}
          disabled={isProcessing || !instance}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Pay with Revolut</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">Fast & Secure</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or pay with card</span>
          </div>
        </div>

        {/* Card Payment */}
        <button
          onClick={handleCardPayment}
          disabled={isProcessing || !instance}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 text-brand-navy font-semibold rounded-lg hover:border-product-fss-green hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              <span>Pay with Card</span>
            </>
          )}
        </button>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-4 border-t">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11.75A2.25 2.25 0 1 1 11.25 14 2.25 2.25 0 0 1 9 11.75M22.5 12c0 3.85-2.08 7.21-5.15 8.97-1.62.93-3.48 1.46-5.46 1.46a10.95 10.95 0 0 1-10.39-7.59c-.35-1.22-.5-2.54-.5-3.91C1 5.81 5.8 1 11.93 1c1.61 0 3.06.35 4.39.95C19.42 3.62 22.5 7.5 22.5 12z"/>
          </svg>
          <span>PCI Compliant</span>
        </div>
      </div>

      {/* Card field reference for embedded card form (not currently used) */}
      <div ref={cardFieldRef} className="hidden"></div>
    </div>
  );
}
