'use client';

import { useEffect } from 'react';

interface EnchargeFormProps {
  formId: string;
  title?: string;
  description?: string;
}

/**
 * Encharge Form Embed Component
 *
 * Embeds an Encharge form by form ID with automatic script loading
 */
export default function EnchargeForm({ formId, title, description }: EnchargeFormProps) {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('.encharge-form-embed-script');

    if (!existingScript) {
      // Load Encharge embed script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.className = 'encharge-form-embed-script';
      script.src = 'https://resources-app.encharge.io/embed-production.min.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Cleanup is not needed as the form should persist
  }, []);

  return (
    <div className="encharge-form-container">
      {title && (
        <h2 className="text-3xl font-bold text-brand-navy mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-600 mb-6">
          {description}
        </p>
      )}
      <div
        className="encharge-form-embed"
        data-encharge-form-id={formId}
      />
    </div>
  );
}
