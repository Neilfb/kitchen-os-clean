'use client';

/**
 * CartSummary Component
 *
 * Displays cart totals: subtotal, shipping, tax (VAT), and final total.
 */

import type { CartState } from '@/types/cart';
import { formatShippingCost } from '@/utils/shippingCalculator';

interface CartSummaryProps {
  cart: CartState;
}

export function CartSummary({ cart }: CartSummaryProps) {
  const isFreeShipping = cart.shippingCost === 0 && cart.customerCountry === 'GB';

  return (
    <div className="space-y-1.5">
      {/* Subtotal */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium text-gray-900">
          £{cart.subtotal.toFixed(2)}
        </span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Shipping</span>
        <span className="font-medium text-gray-900">
          {formatShippingCost(cart.shippingCost, isFreeShipping)}
        </span>
      </div>

      {/* Tax (VAT) */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">
          VAT ({(cart.taxRate * 100).toFixed(0)}%)
          {cart.isVatExempt && (
            <span className="ml-1 text-xs text-green-600">(Exempt)</span>
          )}
        </span>
        <span className="font-medium text-gray-900">
          £{cart.taxAmount.toFixed(2)}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 pt-1.5 mt-1.5" />

      {/* Total */}
      <div className="flex justify-between">
        <span className="text-base font-bold text-gray-900">Total</span>
        <span className="text-base font-bold text-gray-900">
          £{cart.total.toFixed(2)}
        </span>
      </div>

      {/* Free shipping message */}
      {isFreeShipping && (
        <p className="text-xs text-green-600 text-center mt-1.5">
          You qualify for free UK delivery!
        </p>
      )}

      {/* Amount until free shipping */}
      {cart.customerCountry === 'GB' && cart.shippingCost > 0 && (
        <p className="text-xs text-gray-600 text-center mt-1.5">
          Add £{(50 - cart.subtotal).toFixed(2)} more for free UK delivery
        </p>
      )}
    </div>
  );
}
