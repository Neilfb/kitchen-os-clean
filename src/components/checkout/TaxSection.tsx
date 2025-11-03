'use client';

/**
 * TaxSection Component
 *
 * Displays tax information and VAT number input for tax exemption.
 */

import { useState } from 'react';
import { validateVatNumber, formatVatNumber } from '@/utils/vatValidator';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface TaxSectionProps {
  country: string;
  vatNumber: string;
  onVatChange: (vatNumber: string) => void;
}

export function TaxSection({ country, vatNumber, onVatChange }: TaxSectionProps) {
  const [inputValue, setInputValue] = useState(vatNumber);
  const [validationResult, setValidationResult] = useState<{ isValid: boolean; error?: string } | null>(null);

  const handleVatChange = (value: string) => {
    setInputValue(value);

    if (!value.trim()) {
      setValidationResult(null);
      onVatChange('');
      return;
    }

    const result = validateVatNumber(value);
    setValidationResult(result);

    if (result.isValid) {
      onVatChange(value);
    } else {
      onVatChange('');
    }
  };

  const isUK = country === 'GB' || country === 'UK';

  return (
    <div className="space-y-4">
      {/* Tax Information Display */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Tax Information</h3>
        {isUK ? (
          <p className="text-sm text-gray-700">
            <strong>UK VAT (20%)</strong> will be applied to your order.
          </p>
        ) : (
          <p className="text-sm text-gray-700">
            <strong>No VAT</strong> - Zero-rated export for non-UK delivery.
            {vatNumber && ' (Reverse charge applies)'}
          </p>
        )}
      </div>

      {/* VAT Number Input (for non-UK businesses) */}
      {!isUK && (
        <div>
          <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-1">
            VAT/Tax Registration Number (Optional)
          </label>
          <p className="text-xs text-gray-600 mb-2">
            If you are a registered business outside the UK, enter your VAT/tax number for reverse charge.
          </p>
          <input
            type="text"
            id="vatNumber"
            value={inputValue}
            onChange={(e) => handleVatChange(e.target.value.toUpperCase())}
            placeholder="e.g., DE123456789, FR12345678901"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              validationResult
                ? validationResult.isValid
                  ? 'border-green-500'
                  : 'border-red-500'
                : 'border-gray-300'
            }`}
          />

          {/* Validation Feedback */}
          {validationResult && (
            <div className={`flex items-start gap-2 mt-2 text-sm ${
              validationResult.isValid ? 'text-green-700' : 'text-red-700'
            }`}>
              {validationResult.isValid ? (
                <>
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Valid VAT number - Reverse charge will apply (0% VAT)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{validationResult.error}</span>
                </>
              )}
            </div>
          )}

          {validationResult?.isValid && (
            <div className="mt-2 text-xs text-gray-600">
              Formatted: {formatVatNumber(inputValue)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
