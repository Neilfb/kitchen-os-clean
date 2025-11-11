'use client';

import { useEffect, useRef } from 'react';

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
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('.encharge-form-embed-script');

    const loadScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.className = 'encharge-form-embed-script';
      script.src = 'https://resources-app.encharge.io/embed-production.min.js';
      script.async = true;

      // Wait for script to load before initializing forms
      script.onload = () => {
        // Give Encharge time to initialize
        setTimeout(() => {
          // Trigger re-initialization if needed
          if (formRef.current) {
            const event = new Event('DOMContentLoaded', { bubbles: true });
            document.dispatchEvent(event);
          }
        }, 100);
      };

      document.head.appendChild(script);
    };

    if (!existingScript) {
      loadScript();
    } else {
      // Script already exists, just trigger initialization
      setTimeout(() => {
        if (formRef.current) {
          const event = new Event('DOMContentLoaded', { bubbles: true });
          document.dispatchEvent(event);
        }
      }, 100);
    }
  }, [formId]);

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
        ref={formRef}
        className="encharge-form-embed"
        data-encharge-form-id={formId}
      />
    </div>
  );
}
