'use client';

/**
 * CheckoutClient Component
 *
 * Main checkout page with customer details form, tax section, order summary, and payment.
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { CustomerDetailsForm } from '@/components/checkout/CustomerDetailsForm';
import { TaxSection } from '@/components/checkout/TaxSection';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { RevolutWidget } from '@/components/payment/RevolutWidget';
import type { CustomerDetails } from '@/types/order';

export function CheckoutClient() {
  const router = useRouter();
  const { cart, isEmpty, updateCustomerCountry, updateVatExemption } = useCart();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (isEmpty) {
      router.push('/shop');
    }
  }, [isEmpty, router]);

  const handleCustomerDetailsChange = (details: CustomerDetails, isValid: boolean) => {
    setCustomerDetails(details);
    setIsFormValid(isValid);

    // Update cart country and VAT exemption
    if (details.country) {
      updateCustomerCountry(details.country);
    }
    if (details.vatNumber) {
      updateVatExemption(details.vatNumber);
    } else {
      updateVatExemption(null);
    }
  };

  const handleProceedToPayment = () => {
    if (isFormValid && customerDetails) {
      setShowPayment(true);
    }
  };

  if (isEmpty) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Secure Checkout</h1>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <Lock className="w-4 h-4" />
                Encrypted payment via Revolut
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Details</h2>
              <CustomerDetailsForm
                onChange={handleCustomerDetailsChange}
                initialDetails={customerDetails}
              />
            </div>

            {/* Tax & VAT Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Tax Information</h2>
              <TaxSection
                country={customerDetails?.country || 'GB'}
                vatNumber={customerDetails?.vatNumber || ''}
                onVatChange={(vatNumber) => {
                  if (customerDetails) {
                    handleCustomerDetailsChange(
                      { ...customerDetails, vatNumber, isVatExempt: !!vatNumber },
                      isFormValid
                    );
                  }
                }}
              />
            </div>

            {/* Payment Section */}
            {showPayment && customerDetails && (
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment</h2>
                <RevolutWidget customerDetails={customerDetails} cart={cart} />
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <OrderSummary cart={cart} />

              {!showPayment && (
                <button
                  onClick={handleProceedToPayment}
                  disabled={!isFormValid}
                  className={`
                    w-full mt-6 py-4 px-6 rounded-xl font-bold text-white transition-all
                    ${
                      isFormValid
                        ? 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 cursor-not-allowed'
                    }
                  `}
                >
                  {isFormValid ? 'Proceed to Payment' : 'Complete Details to Continue'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
