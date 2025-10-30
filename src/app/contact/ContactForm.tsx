'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sites: '1',
    interest: 'food-safe-system',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Implement actual form submission (e.g., to Supabase, email service, or API)
    // For now, simulate submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        sites: '1',
        interest: 'food-safe-system',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Ready to transform your kitchen operations? Book a demo or start your free trial today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">
                  Book a Demo or Start Free Trial
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company / Restaurant Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                        placeholder="Your restaurant or company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sites" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Sites
                      </label>
                      <select
                        id="sites"
                        name="sites"
                        value={formData.sites}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                      >
                        <option value="1">1 site</option>
                        <option value="2-5">2-5 sites</option>
                        <option value="6-10">6-10 sites</option>
                        <option value="11-20">11-20 sites</option>
                        <option value="20+">20+ sites</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                      >
                        <option value="food-safe-system">Food Safe System (HACCP)</option>
                        <option value="allerq">AllerQ (Allergen Menus)</option>
                        <option value="food-label-system">Food Label System</option>
                        <option value="f-waste">F*** Waste</option>
                        <option value="complete-platform">Complete Platform (All Products)</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
                      placeholder="Tell us about your kitchen operation and what challenges you're facing..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-product-fss-green-light border border-product-fss-green text-product-fss-green-dark px-4 py-3 rounded-lg">
                      <p className="font-semibold">Thank you for your inquiry!</p>
                      <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                      <p className="font-semibold">Something went wrong.</p>
                      <p className="text-sm">Please try again or email us directly at support@kitchen-os.com</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-product-fss-green text-white font-semibold px-8 py-4 rounded-lg hover:bg-product-fss-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy.
                    We&apos;ll never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:support@kitchen-os.com" className="text-product-fss-green hover:underline">
                        support@kitchen-os.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+442012345678" className="text-product-fss-green hover:underline">
                        +44 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Kitchen OS Ltd<br />
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Support Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm GMT<br />
                        Weekend: Emergency support only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-product-fss-green-light to-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Response Time</h3>
                <p className="text-gray-700 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                  Enterprise customers get priority support with guaranteed response times.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Prefer to Talk?</h3>
                <p className="text-gray-300 mb-4">
                  Book a 30-minute call with our team to discuss your specific needs and see a live demo.
                </p>
                <a
                  href="https://calendly.com/kitchen-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
