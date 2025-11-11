'use client';

import { useState } from 'react';

interface EnchargeFormProps {
  formId: string;
  title?: string;
  description?: string;
}

/**
 * Temporary fallback form component
 *
 * Encharge forms are not rendering. This provides a working alternative.
 * Options to fix Encharge:
 * 1. Check form IDs in Encharge dashboard (app.encharge.io/forms)
 * 2. Verify forms are published
 * 3. Check domain restrictions
 *
 * Alternative: Switch to Tally, Typeform, or Netlify Forms
 */
export default function EnchargeForm({ formId, title, description }: EnchargeFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to your contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message, formId }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
        setMessage('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {submitted ? (
        <div className="bg-product-fss-green-light border-2 border-product-fss-green rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-brand-navy mb-2">Thank you!</p>
          <p className="text-gray-700">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-product-fss-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-product-fss-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}

      {/* Debug info - remove in production */}
      <p className="text-xs text-gray-400 mt-4">Form ID: {formId}</p>
    </div>
  );
}
