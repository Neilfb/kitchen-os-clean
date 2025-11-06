'use client';

/**
 * CartDrawer Component
 *
 * Slide-out cart panel that displays cart items, summary, and checkout button.
 */

import Link from 'next/link';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, isEmpty, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] animate-fade-in-fast"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[9999] flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">
              Your Cart {!isEmpty && `(${itemCount})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {isEmpty ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <CartItem key={item.variantId} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer with Summary and Checkout */}
        {!isEmpty && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <CartSummary cart={cart} />

            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-700 transition-colors shadow-lg"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={onClose}
              className="w-full text-center text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
