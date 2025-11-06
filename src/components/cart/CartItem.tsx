'use client';

/**
 * CartItem Component
 *
 * Individual cart item with image, name, price, quantity controls, and remove button.
 */

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import type { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.variantId, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.variantId, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.variantId);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      {/* Product Image */}
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-1 relative">
        <Image
          src={item.productImage}
          alt={item.productName}
          fill
          className="object-contain p-1"
          sizes="64px"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 truncate">
          {item.productName}
        </h3>
        <p className="text-xs text-gray-600">{item.variantName}</p>

        {/* Quantity Controls & Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={handleDecrement}
              className="p-1.5 hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-1.5 hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Item Total */}
      <div className="flex-shrink-0 text-right">
        <p className="text-sm font-bold text-gray-900">
          £{itemTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
