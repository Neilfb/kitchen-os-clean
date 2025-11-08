'use client';

/**
 * Cart Context
 *
 * Provides global cart state management across the application.
 * Cart is session-only (not persisted to localStorage).
 */

import { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { CartItem, CartState } from '@/types/cart';
import { calculateTax } from '@/utils/taxCalculator';
import { calculateShipping } from '@/utils/shippingCalculator';

interface CartContextValue {
  // State
  cart: CartState;

  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;

  // Tax/Location actions
  updateCustomerCountry: (country: string) => void;
  updateVatExemption: (vatNumber: string | null) => void;

  // Computed values
  itemCount: number;
  isEmpty: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const INITIAL_CART_STATE: CartState = {
  items: [],
  subtotal: 0,
  shippingCost: 0,
  taxRate: 0.2, // Default UK VAT
  taxAmount: 0,
  total: 0,
  currency: 'GBP',
  customerCountry: 'GB', // Default to UK
  isVatExempt: false,
};

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartState>(INITIAL_CART_STATE);

  /**
   * Recalculate cart totals (subtotal, shipping, tax, total)
   */
  const recalculateCart = useCallback((items: CartItem[], country: string | null, vatNumber?: string | null) => {
    // Default to GB if country is null
    const effectiveCountry = country || 'GB';
    // Calculate subtotal (sum of all item prices * quantities)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Extract product IDs for shipping calculation
    const productIds = items.map(item => item.productId);

    // Calculate shipping
    const shipping = calculateShipping({
      subtotal,
      country: effectiveCountry,
      productIds,
    });

    // Calculate tax
    const tax = calculateTax({
      subtotal: subtotal + shipping.cost, // Tax applies to subtotal + shipping
      country: effectiveCountry,
      vatNumber: vatNumber || undefined,
    });

    // Calculate final total
    const total = subtotal + shipping.cost + tax.taxAmount;

    return {
      items,
      subtotal: parseFloat(subtotal.toFixed(2)),
      shippingCost: shipping.cost,
      taxRate: tax.taxRate,
      taxAmount: tax.taxAmount,
      total: parseFloat(total.toFixed(2)),
      currency: 'GBP' as const,
      customerCountry: effectiveCountry,
      isVatExempt: tax.isVatExempt,
    };
  }, []);

  /**
   * Add item to cart or increment quantity if already exists
   */
  const addItem = useCallback(
    (newItem: Omit<CartItem, 'quantity'>) => {
      setCart((prevCart) => {
        const existingItemIndex = prevCart.items.findIndex((item) => item.variantId === newItem.variantId);

        let updatedItems: CartItem[];

        if (existingItemIndex >= 0) {
          // Item exists - increment quantity
          updatedItems = prevCart.items.map((item, index) =>
            index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // New item - add with quantity 1
          updatedItems = [...prevCart.items, { ...newItem, quantity: 1 }];
        }

        return recalculateCart(updatedItems, prevCart.customerCountry, undefined);
      });
    },
    [recalculateCart]
  );

  /**
   * Remove item from cart
   */
  const removeItem = useCallback(
    (variantId: string) => {
      setCart((prevCart) => {
        const updatedItems = prevCart.items.filter((item) => item.variantId !== variantId);
        return recalculateCart(updatedItems, prevCart.customerCountry, undefined);
      });
    },
    [recalculateCart]
  );

  /**
   * Update item quantity
   */
  const updateQuantity = useCallback(
    (variantId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(variantId);
        return;
      }

      setCart((prevCart) => {
        const updatedItems = prevCart.items.map((item) =>
          item.variantId === variantId ? { ...item, quantity } : item
        );
        return recalculateCart(updatedItems, prevCart.customerCountry, undefined);
      });
    },
    [recalculateCart, removeItem]
  );

  /**
   * Clear all items from cart
   */
  const clearCart = useCallback(() => {
    setCart(INITIAL_CART_STATE);
  }, []);

  /**
   * Update customer country (triggers tax/shipping recalculation)
   */
  const updateCustomerCountry = useCallback(
    (country: string) => {
      setCart((prevCart) => recalculateCart(prevCart.items, country, null));
    },
    [recalculateCart]
  );

  /**
   * Update VAT exemption status (triggers tax recalculation)
   */
  const updateVatExemption = useCallback(
    (vatNumber: string | null) => {
      setCart((prevCart) => recalculateCart(prevCart.items, prevCart.customerCountry, vatNumber));
    },
    [recalculateCart]
  );

  // Computed values
  const itemCount = useMemo(() => cart.items.reduce((sum, item) => sum + item.quantity, 0), [cart.items]);
  const isEmpty = useMemo(() => cart.items.length === 0, [cart.items]);

  const value: CartContextValue = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    updateCustomerCountry,
    updateVatExemption,
    itemCount,
    isEmpty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to access cart context
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
