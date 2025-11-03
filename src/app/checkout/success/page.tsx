'use client';

/**
 * Checkout Success Page
 *
 * Displayed after successful payment completion.
 */

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  // Clear cart on success
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order. We&apos;ve received your payment and are processing your order now.
          </p>

          {/* Order Confirmation Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Order Confirmation Email</p>
                  <p className="text-sm text-gray-600">
                    You&apos;ll receive a confirmation email with your order details shortly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Order Processing</p>
                  <p className="text-sm text-gray-600">
                    Your order will be dispatched within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Questions about your order?{' '}
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
