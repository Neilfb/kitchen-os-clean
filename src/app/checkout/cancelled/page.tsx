'use client';

/**
 * Checkout Cancelled Page
 *
 * Displayed when user cancels payment.
 */

import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';

export default function CheckoutCancelledPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cancelled Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Your payment was cancelled and no charges were made. Your cart items are still saved.
          </p>

          {/* Information Box */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-gray-900 mb-2">What would you like to do?</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Return to checkout to complete your purchase</li>
              <li>• Continue shopping for more products</li>
              <li>• Review your cart and make changes</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Checkout
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
