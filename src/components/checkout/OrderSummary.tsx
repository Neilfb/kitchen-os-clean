'use client';

/**
 * OrderSummary Component
 *
 * Displays order items and totals in checkout.
 */

import type { CartState } from '@/types/cart';
import { formatShippingCost } from '@/utils/shippingCalculator';

interface OrderSummaryProps {
  cart: CartState;
}

export function OrderSummary({ cart }: OrderSummaryProps) {
  const isFreeShipping = cart.shippingCost === 0 && cart.customerCountry === 'GB';

  return (
    <div className="space-y-4">
      {/* Cart Items */}
      <div className="space-y-3 pb-4 border-b border-gray-200">
        {cart.items.map((item) => (
          <div key={item.variantId} className="flex justify-between text-sm">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.productName}</p>
              <p className="text-gray-600 text-xs">{item.variantName}</p>
              <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
            </div>
            <p className="font-medium text-gray-900">
              £{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">£{cart.subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-900">
            {formatShippingCost(cart.shippingCost, isFreeShipping)}
          </span>
        </div>

        {/* VAT */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            VAT ({(cart.taxRate * 100).toFixed(0)}%)
            {cart.isVatExempt && (
              <span className="ml-1 text-xs text-green-600">(Exempt)</span>
            )}
          </span>
          <span className="font-medium text-gray-900">£{cart.taxAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">
            £{cart.total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Free Shipping Message */}
      {isFreeShipping && (
        <p className="text-xs text-green-600 text-center">
          Free UK delivery included!
        </p>
      )}
    </div>
  );
}
