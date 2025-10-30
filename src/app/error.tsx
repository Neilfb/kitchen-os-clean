'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-navy mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-brand-dark-text mb-4">
          Something went wrong
        </h2>
        <p className="text-brand-medium-text mb-8 max-w-md mx-auto">
          We&apos;re sorry, but something unexpected happened. Please try again or contact support if the problem persists.
        </p>
        {error.digest && (
          <p className="text-sm text-brand-light-text mb-4">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-product-fss-green text-white px-6 py-3 rounded-xl font-bold hover:bg-product-fss-green-dark transition-all focus:outline-none focus:ring-2 focus:ring-product-fss-green focus:ring-offset-2"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-white text-product-fss-green border-2 border-product-fss-green px-6 py-3 rounded-xl font-bold hover:bg-product-fss-green-light transition-all focus:outline-none focus:ring-2 focus:ring-product-fss-green focus:ring-offset-2"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
