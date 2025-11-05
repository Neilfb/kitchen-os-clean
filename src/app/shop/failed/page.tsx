import Link from 'next/link';
import { XCircle, ArrowLeft, Mail, RefreshCw } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Failed | Kitchen OS Shop',
  description: 'Your payment could not be processed. Please try again.',
  robots: 'noindex, nofollow', // Don't index checkout pages
};

export default async function OrderFailedPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; reason?: string }>;
}) {
  const params = await searchParams;
  const orderId = params.orderId;
  const reason = params.reason || 'Payment could not be processed';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-red-500 rounded-full p-6">
              <XCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Payment Failed
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            We couldn&apos;t process your payment
          </p>
          <p className="text-lg text-gray-500">
            Don&apos;t worry - no charges have been made to your account
          </p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">What went wrong?</h2>

          <div className="space-y-4">
            {orderId && (
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <span className="text-gray-600">Order Reference</span>
                <span className="font-semibold text-brand-navy">{orderId}</span>
              </div>
            )}

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold mb-2">Payment Error</p>
              <p className="text-red-700 text-sm">{reason}</p>
            </div>
          </div>
        </div>

        {/* Common Reasons */}
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Common Reasons for Payment Failure</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-300 text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">
                •
              </span>
              <span>Insufficient funds in your account</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-300 text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">
                •
              </span>
              <span>Incorrect card details or expiry date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-300 text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">
                •
              </span>
              <span>Card limit exceeded</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-300 text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">
                •
              </span>
              <span>Payment blocked by your bank for security reasons</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-300 text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">
                •
              </span>
              <span>Technical issue or connection timeout</span>
            </li>
          </ul>
        </div>

        {/* What to Do Next */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">What can you do?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Check your card details</h3>
                <p className="text-gray-600 text-sm">
                  Make sure your card number, expiry date, and CVV are correct.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Contact your bank</h3>
                <p className="text-gray-600 text-sm">
                  Your bank may have blocked the transaction for security. Ask them to authorize payments to Kitchen OS.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Try a different payment method</h3>
                <p className="text-gray-600 text-sm">
                  Use a different card or try Revolut Pay if you have a Revolut account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/shop"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-product-fss-green text-white font-semibold rounded-lg hover:bg-product-fss-green-dark transition-all hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </Link>

          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-brand-navy font-semibold rounded-lg hover:border-product-fss-green hover:bg-gray-50 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Support</span>
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-product-fss-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need immediate assistance? Email us at{' '}
            <a
              href="mailto:hello@kitchen-os.com"
              className="text-product-fss-green hover:underline font-semibold"
            >
              hello@kitchen-os.com
            </a>{' '}
            or call <span className="font-semibold">+44 (0) 20 1234 5678</span>
          </p>
          <p className="mt-2">
            We&apos;re here to help you complete your order successfully
          </p>
        </div>
      </div>
    </div>
  );
}
