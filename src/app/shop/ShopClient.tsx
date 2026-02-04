'use client';

/**
 * ShopClient Component
 *
 * Main client-side shop with filtering, navigation, and product display.
 * Implements hybrid navigation (system + type filtering) with category sections.
 */

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingCart,
  Package,
  Thermometer,
  FileText,
  Check,
  ArrowRight,
  Shield,
  Truck,
  CreditCard,
  LucideIcon,
  CheckCircle,
} from 'lucide-react';
import { SystemCategory, ProductType, Product } from '@/data/types';
import { filterProducts, groupByCategory } from '@/utils/productFilters';
import { CategoryNav } from '@/components/shop/CategoryNav';
import { FilterBar } from '@/components/shop/FilterBar';
import { SubscriptionCard } from '@/components/shop/SubscriptionCard';
import { useCart } from '@/contexts/CartContext';

interface ShopClientProps {
  products: Product[];
}

interface ProductWithIcon extends Omit<Product, 'icon'> {
  icon: LucideIcon;
}

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  pricePerLabel?: number;
  pricePerProbe?: number;
  setupFee?: number;
  savings?: number | null;
  note?: string;
  disabled?: boolean;
  popular?: boolean;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  FileText,
  Thermometer,
  Package,
  ShoppingCart,
};

// Subscription products data
const SUBSCRIPTIONS = [
  {
    id: 'food-safe-system',
    name: 'Food Safe System',
    tagline: 'Digital HACCP compliance with automated temperature monitoring',
    priceFrom: 'from £15',
    features: [
      'Real-time temperature alerts',
      'Automated HACCP compliance logs',
      'Digital food safety records',
      'Twice weekly hygiene reports',
    ],
    href: '/food-safe-system',
    logoSrc: '/logos/food-safe-system/fss-full-logo-white.png',
    gradientFrom: 'from-product-fss-green',
    gradientTo: 'to-product-fss-green-light',
    systemCategory: 'food-safe' as SystemCategory,
  },
  {
    id: 'food-label-system',
    name: 'Food Label System',
    tagline: 'Automated date labelling with barcode tracking',
    priceFrom: '£35',
    features: [
      'Thermal label printer included',
      '2,000 free labels per month',
      'Allergen warnings & day dots',
      'Barcode inventory tracking',
    ],
    href: '/food-label-system',
    logoSrc: '/logos/food-label-system/fls-full-logo.png',
    gradientFrom: 'from-product-fls-primary',
    gradientTo: 'to-product-fls-blue',
    systemCategory: 'food-label' as SystemCategory,
  },
  {
    id: 'allerq',
    name: 'AllerQ',
    tagline: 'QR code allergen menus with multi-language support',
    priceFrom: '£7.49',
    features: [
      'Instant QR code allergen menus',
      'Auto-translate to 40+ languages',
      'Real-time menu updates',
      'Guest dietary preferences',
    ],
    href: '/allerq',
    logoSrc: '/logos/allerq/allerq-full-logo-white.png',
    gradientFrom: 'from-product-allerq-orange',
    gradientTo: 'to-product-allerq-yellow',
    systemCategory: 'allerq' as SystemCategory,
  },
  {
    id: 'fwaste',
    name: 'F*** Waste',
    tagline: 'IoT smart scales for food waste tracking and reduction',
    priceFrom: '£150',
    features: [
      'IoT smart scales included',
      '50%+ waste reduction',
      '14:1 ROI ratio',
      'ESG sustainability reporting',
    ],
    href: '/f-waste',
    logoSrc: '/logos/fwaste/fwaste-full-logo-white.png',
    gradientFrom: 'from-product-fw-green',
    gradientTo: 'to-product-fw-green-light',
    systemCategory: 'fwaste' as SystemCategory,
  },
  {
    id: 'foodcostai',
    name: 'FoodCostAI',
    tagline: 'Free recipe costing tool with real-time margin calculations',
    priceFrom: 'Free',
    features: [
      'Smart recipe builder',
      'Real-time margin calculator',
      'Auto supplier price updates',
      'Menu engineering insights',
    ],
    href: '/foodcostai',
    logoSrc: '/logos/foodcostai/foodcostai-full-logo-white.png',
    gradientFrom: 'from-product-fca-blue',
    gradientTo: 'to-product-fca-blue-light',
  },
];

export function ShopClient({ products: productsData }: ShopClientProps) {
  const [activeSystem, setActiveSystem] = useState<SystemCategory | 'all'>('all');
  const [activeType, setActiveType] = useState<ProductType | 'all'>('all');

  // Transform products to include icon components
  const products = useMemo(
    () =>
      productsData.map((product) => ({
        ...product,
        icon: iconMap[product.icon || 'FileText'] || FileText,
      })) as ProductWithIcon[],
    [productsData]
  );

  // Filter products
  const filteredProducts = useMemo(() => {
    return filterProducts(products as unknown as Product[], activeSystem, activeType) as unknown as ProductWithIcon[];
  }, [products, activeSystem, activeType]);

  // Filter subscriptions
  const filteredSubscriptions = useMemo(() => {
    if (activeSystem === 'all') return SUBSCRIPTIONS;
    return SUBSCRIPTIONS.filter((sub) => sub.systemCategory === activeSystem);
  }, [activeSystem]);

  // Group products by category for section display
  const productsByCategory = useMemo(() => {
    return groupByCategory(filteredProducts as unknown as Product[]) as unknown as Record<string, ProductWithIcon[]>;
  }, [filteredProducts]);

  const hasProducts = filteredProducts.length > 0;
  const hasSubscriptions = filteredSubscriptions.length > 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kitchen OS Shop</h1>
              <p className="text-gray-600 mt-1">
                Hardware, consumables, and subscriptions for your kitchen
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryNav
        products={products as unknown as Product[]}
        activeSystem={activeSystem}
        onSystemChange={setActiveSystem}
      />

      {/* Filter Bar */}
      <FilterBar
        filteredProducts={filteredProducts as unknown as Product[]}
        activeType={activeType}
        onTypeChange={setActiveType}
        activeSystem={activeSystem}
      />

      {/* Trust Signals */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-green-800">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <Truck className="w-4 h-4" />
              <span className="font-medium">Free UK Delivery Over £50</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <CreditCard className="w-4 h-4" />
              <span className="font-medium">Pay with Revolut</span>
            </div>
            <div className="flex items-center gap-2 text-green-800">
              <Package className="w-4 h-4" />
              <span className="font-medium">Next Day Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products - Organized by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subscriptions Section */}
        {hasSubscriptions && activeType === 'all' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSubscriptions.map((subscription) => (
                <SubscriptionCard key={subscription.id} {...subscription} />
              ))}
            </div>
          </section>
        )}

        {/* Hardware Products by Category */}
        {hasProducts ? (
          <div className="space-y-12">
            {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category}{' '}
                  <span className="text-gray-500 font-normal text-lg">
                    ({categoryProducts.length})
                  </span>
                </h2>
                <div className="space-y-12">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              {activeSystem !== 'all'
                ? `No hardware available for this system yet.`
                : 'Try adjusting your filters.'}
            </p>
            <button
              onClick={() => {
                setActiveSystem('all');
                setActiveType('all');
              }}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="Do I need a subscription to purchase hardware?"
              answer="Yes, all temperature monitoring hardware requires an active Food Safe System subscription (£15/probe/month). Thermal labels require a Food Label System subscription (£35/month, includes 2,000 free labels)."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit/debit cards and Revolut Pay. Secure payment processing via Stripe."
            />
            <FAQItem
              question="What's your delivery policy?"
              answer="Free UK delivery on orders over £50. Standard delivery is 3-5 business days. Next-day dispatch on orders placed before 2pm."
            />
            <FAQItem
              question="Can I get a bulk discount?"
              answer="Yes! Contact our sales team for volume pricing on bulk orders (10+ probes or 50,000+ labels). Email neil@kitchen-os.com or call +447588427222."
            />
            <FAQItem
              question="What's your returns policy?"
              answer="30-day money-back guarantee on all hardware purchases. Unused thermal labels can be returned within 14 days. Contact neil@kitchen-os.com to initiate a return."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl mb-8 text-green-100">
            Our team can help you select the right products for your kitchen and answer any
            questions about subscriptions, bulk pricing, or installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl"
            >
              Get Expert Advice
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-all"
            >
              View Full Pricing
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-6">
            Free consultation • No obligation • Same-day response
          </p>
        </div>
      </div>
    </main>
  );
}

// Product Card Component
function ProductCard({ product }: { product: ProductWithIcon }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = product.images || [product.image];
  const currentImage = images[selectedImageIndex];

  return (
    <div id={product.id} className="scroll-mt-24">
      {/* Product Header */}
      <div className="flex items-start gap-6 mb-6">
        <div className="flex-shrink-0">
          {/* Main Product Image */}
          <div className="w-48 h-48 bg-white rounded-2xl shadow-md p-4 flex items-center justify-center mb-3 relative">
            <Image
              src={currentImage}
              alt={product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
          {/* Image Gallery Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-12 h-12 bg-white rounded-lg border-2 p-1 transition-all relative ${
                    selectedImageIndex === index
                      ? 'border-green-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-0.5"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-green-600 mb-1">{product.category}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-lg text-gray-600 mb-2">{product.tagline}</p>
          <p className="text-gray-700 text-sm">{product.description}</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Variants */}
        <div className="lg:col-span-2 space-y-3">
          {product.variants.map((variant) => (
            <VariantCard key={variant.id} variant={variant} product={product} />
          ))}
        </div>

        {/* Features & Related Product */}
        <div className="space-y-4">
          {/* Features */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included</h4>
            <ul className="space-y-2">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Product */}
          {product.relatedProduct && (
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-1">{product.relatedProduct.note}</h4>
              <Link
                href={product.relatedProduct.href}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 mt-2"
              >
                Learn about {product.relatedProduct.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Variant Card Component
function VariantCard({ variant, product }: { variant: ProductVariant; product: ProductWithIcon }) {
  const { addItem } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const isDisabled = variant.disabled;
  const isPopular = variant.popular;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      variantId: variant.id,
      variantName: variant.name,
      price: variant.price,
      pricePerLabel: variant.pricePerLabel,
      pricePerProbe: variant.pricePerProbe,
      systemCategory: product.systemCategory,
      productType: product.productType,
    });

    // Show success feedback
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <div
      className={`
        relative bg-white rounded-xl border-2 p-5 transition-all
        ${isDisabled ? 'border-gray-200 opacity-60' : 'border-gray-300 hover:border-green-500 hover:shadow-md'}
        ${isPopular ? 'ring-2 ring-green-500 border-green-500' : ''}
      `}
    >
      {isPopular && (
        <div className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-1">{variant.name}</h4>
          {variant.note && <p className="text-sm text-gray-600 mb-3">{variant.note}</p>}

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-gray-900">£{variant.price.toFixed(2)}</span>
            {variant.pricePerLabel && (
              <span className="text-sm text-gray-600">({variant.pricePerLabel.toFixed(2)}p per label)</span>
            )}
            {variant.pricePerProbe && (
              <span className="text-sm text-gray-600">(£{variant.pricePerProbe.toFixed(2)} per probe)</span>
            )}
          </div>

          {variant.setupFee && (
            <p className="text-sm text-gray-600 mb-2">+ £{variant.setupFee} setup fee</p>
          )}

          {variant.savings && (
            <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
              Save {variant.savings}%
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isDisabled}
          className={`
            px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2
            ${
              isDisabled
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : showAdded
                ? 'bg-green-700 text-white'
                : 'bg-green-600 text-white hover:bg-green-700'
            }
          `}
        >
          {isDisabled ? (
            'Not Available'
          ) : showAdded ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Added!
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
