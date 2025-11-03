'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartDrawer } from './cart/CartDrawer';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();

  const products = [
    {
      name: 'Food Safe System',
      href: '/food-safe-system',
      color: 'product-fss-green',
      logo: '/logos/food-safe-system/fss-icon.png',
      description: 'HACCP & Temperature Monitoring'
    },
    {
      name: 'AllerQ',
      href: '/allerq',
      color: 'product-allerq-orange',
      logo: '/logos/allerq/allerq-icon.png',
      description: 'Digital Allergen Menus'
    },
    {
      name: 'Food Label System',
      href: '/food-label-system',
      color: 'product-fls-green',
      logo: '/logos/food-label-system/fls-icon.png',
      description: 'Automated Date Labels'
    },
    {
      name: 'F*** Waste',
      href: '/f-waste',
      color: 'product-fw-green',
      logo: '/logos/fwaste/fwaste-icon.png',
      description: 'Food Waste Tracking'
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-product-fss-green via-product-fss-green-dark to-product-fss-green backdrop-blur-md border-b border-product-fss-green-dark/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/assets/KitchenOS-01.png"
              alt="Kitchen OS"
              className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2 w-96">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="flex items-center px-6 py-4 text-gray-900 hover:bg-gray-50 transition-all border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-gray-50 group"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="w-10 h-10 mr-4 object-contain flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover:translate-x-1 inline-block transition-transform duration-200">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              About
            </Link>

            <Link href="/industries" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              Industries
            </Link>

            <Link href="/pricing" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              Pricing
            </Link>

            <Link href="/directory" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              Directory
            </Link>

            <Link href="/shop" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              Shop
            </Link>

            <Link href="/podcast" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
              Podcast
            </Link>

            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-white/90 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
              <Link href="/login" className="text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white/30">
                Login
              </Link>
              <Link href="/signup" className="bg-white text-product-fss-green-dark px-6 py-2.5 rounded-xl font-bold hover:bg-white/90 hover:shadow-lg active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-product-fss-green min-h-[44px]">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Cart Icon and Menu Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white p-2 hover:bg-white/10 rounded-lg transition-all touch-target"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all touch-target"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-1">
            <div className="text-gray-900 text-sm font-bold mb-3 px-3">Products</div>
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all py-3 px-3 rounded-lg font-medium min-h-[44px]"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-8 h-8 mr-3 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.description}</div>
                </div>
              </Link>
            ))}
            <Link
              href="/about"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/industries"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/pricing"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/directory"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Directory
            </Link>
            <Link
              href="/shop"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/podcast"
              className="block text-brand-medium-text hover:text-brand-dark-text hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Podcast
            </Link>
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
              <Link href="/login" className="w-full block text-center text-brand-navy hover:bg-brand-subtle-bg transition-all py-3 px-3 rounded-lg font-bold min-h-[44px]">
                Login
              </Link>
              <Link href="/signup" className="w-full block text-center bg-white text-product-fss-green-dark px-6 py-3 rounded-xl font-bold hover:bg-gray-50 active:scale-[0.98] shadow-md transition-all min-h-[44px]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
