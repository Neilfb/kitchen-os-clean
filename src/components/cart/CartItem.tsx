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
    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
      {/* Product Image */}
      <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg p-2 relative">
        <Image
          src={item.productImage}
          alt={item.productName}
          fill
          className="object-contain p-1"
          sizes="80px"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 truncate">
          {item.productName}
        </h3>
        <p className="text-xs text-gray-600 mt-1">{item.variantName}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-sm font-bold text-gray-900">
            £{item.price.toFixed(2)}
          </span>
          {item.pricePerLabel && (
            <span className="text-xs text-gray-500">
              ({item.pricePerLabel.toFixed(2)}p per label)
            </span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={handleDecrement}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="px-4 py-2 text-sm font-medium text-gray-900 min-w-[3rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
