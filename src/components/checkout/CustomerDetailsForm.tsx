'use client';

/**
 * CustomerDetailsForm Component
 *
 * Form for collecting customer billing and contact information.
 */

import { useState, useEffect } from 'react';
import type { CustomerDetails } from '@/types/order';

interface CustomerDetailsFormProps {
  onChange: (details: CustomerDetails, isValid: boolean) => void;
  initialDetails: CustomerDetails | null;
}

export function CustomerDetailsForm({ onChange, initialDetails }: CustomerDetailsFormProps) {
  const [details, setDetails] = useState<CustomerDetails>({
    email: initialDetails?.email || '',
    phone: initialDetails?.phone || '',
    firstName: initialDetails?.firstName || '',
    lastName: initialDetails?.lastName || '',
    company: initialDetails?.company || '',
    addressLine1: initialDetails?.addressLine1 || '',
    addressLine2: initialDetails?.addressLine2 || '',
    city: initialDetails?.city || '',
    postcode: initialDetails?.postcode || '',
    country: initialDetails?.country || 'GB',
    vatNumber: initialDetails?.vatNumber || '',
    isVatExempt: initialDetails?.isVatExempt || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validate form
  const validate = (values: CustomerDetails): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!values.phone || values.phone.length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }

    if (!values.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!values.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!values.addressLine1?.trim()) {
      newErrors.addressLine1 = 'Address is required';
    }

    if (!values.city?.trim()) {
      newErrors.city = 'City is required';
    }

    if (!values.postcode?.trim()) {
      newErrors.postcode = 'Postcode is required';
    }

    if (!values.country) {
      newErrors.country = 'Country is required';
    }

    return newErrors;
  };

  // Update parent when details or validation changes
  useEffect(() => {
    const validationErrors = validate(details);
    setErrors(validationErrors);
    const isValid = Object.keys(validationErrors).length === 0;
    onChange(details, isValid);
  }, [details]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (field: keyof CustomerDetails, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      {/* Email & Phone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={details.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={details.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+44 20 1234 5678"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Name */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            value={details.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            value={details.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      {/* Company (Optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="company"
          value={details.company}
          onChange={(e) => handleChange('company', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
          Address Line 1 *
        </label>
        <input
          type="text"
          id="addressLine1"
          value={details.addressLine1}
          onChange={(e) => handleChange('addressLine1', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
            errors.addressLine1 ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.addressLine1 && <p className="text-red-600 text-xs mt-1">{errors.addressLine1}</p>}
      </div>

      <div>
        <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
          Address Line 2 (Optional)
        </label>
        <input
          type="text"
          id="addressLine2"
          value={details.addressLine2}
          onChange={(e) => handleChange('addressLine2', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* City, Postcode, Country */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            id="city"
            value={details.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Postcode *
          </label>
          <input
            type="text"
            id="postcode"
            value={details.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
              errors.postcode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.postcode && <p className="text-red-600 text-xs mt-1">{errors.postcode}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <select
            id="country"
            value={details.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="NL">Netherlands</option>
            <option value="BE">Belgium</option>
            <option value="IE">Ireland</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
          </select>
        </div>
      </div>
    </div>
  );
}
