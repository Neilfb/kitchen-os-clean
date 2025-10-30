import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-dark-text mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-medium-text mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-product-fss-green text-white px-6 py-3 rounded-xl font-bold hover:bg-product-fss-green-dark transition-all focus:outline-none focus:ring-2 focus:ring-product-fss-green focus:ring-offset-2"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-white text-product-fss-green border-2 border-product-fss-green px-6 py-3 rounded-xl font-bold hover:bg-product-fss-green-light transition-all focus:outline-none focus:ring-2 focus:ring-product-fss-green focus:ring-offset-2"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
