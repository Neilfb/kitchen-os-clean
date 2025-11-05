import Link from 'next/link';
import { CheckCircle, ArrowRight, Mail, Package } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Successful | Kitchen OS Shop',
  description: 'Your order has been successfully placed. Thank you for choosing Kitchen OS.',
  robots: 'noindex, nofollow', // Don't index checkout pages
};

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; email?: string }>;
}) {
  const params = await searchParams;
  const orderId = params.orderId || 'N/A';
  const email = params.email || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-product-fss-green opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-product-fss-green rounded-full p-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Order Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your order
          </p>
          <p className="text-lg text-gray-500">
            Your order has been confirmed and is being processed
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Order Details</h2>

          <div className="space-y-4">
            {/* Order Number */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-product-fss-green" />
                <span className="text-gray-600">Order Number</span>
              </div>
              <span className="font-bold text-brand-navy text-lg">{orderId}</span>
            </div>

            {/* Confirmation Email */}
            {email && (
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-product-fss-green" />
                  <span className="text-gray-600">Confirmation sent to</span>
                </div>
                <span className="font-semibold text-brand-navy">{email}</span>
              </div>
            )}

            {/* Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Status</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-product-fss-green-light text-product-fss-green font-semibold rounded-full">
                <div className="w-2 h-2 bg-product-fss-green rounded-full animate-pulse"></div>
                Processing
              </span>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-gradient-to-br from-product-fss-green-light to-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-product-fss-green text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Order Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  You&apos;ll receive an email confirmation with your order details shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-product-fss-green text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Order Processing</h3>
                <p className="text-gray-600 text-sm">
                  Our team will prepare your items for dispatch. This usually takes 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-product-fss-green text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Shipping & Delivery</h3>
                <p className="text-gray-600 text-sm">
                  You&apos;ll receive tracking information once your order ships. Typical delivery time is 3-5 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-product-fss-green text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Setup Support</h3>
                <p className="text-gray-600 text-sm">
                  Our team will contact you to schedule installation and training for your Kitchen OS products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-product-fss-green text-white font-semibold rounded-lg hover:bg-product-fss-green-dark transition-all hover:scale-105"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-brand-navy font-semibold rounded-lg hover:border-product-fss-green hover:bg-gray-50 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Support</span>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help? Email us at{' '}
            <a
              href="mailto:hello@kitchen-os.com"
              className="text-product-fss-green hover:underline font-semibold"
            >
              hello@kitchen-os.com
            </a>{' '}
            or call <span className="font-semibold">+44 (0) 20 1234 5678</span>
          </p>
        </div>
      </div>
    </div>
  );
}
