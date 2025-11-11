'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import EnchargeForm from '@/components/EnchargeForm';

export default function ContactForm() {
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
            {/* Contact Form - Now using Encharge */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <EnchargeForm
                  formId="9c1b1ddf-90db-4f82-aa42-63d2e57fc581"
                  title="Book a Demo or Start Free Trial"
                  description="Fill out the form below and we'll get back to you within 24 hours."
                />
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
                      <a href="mailto:neil@kitchen-os.com" className="text-product-fss-green hover:underline">
                        neil@kitchen-os.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-product-fss-green mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+447588427222" className="text-product-fss-green hover:underline">
                        +44 7588 427222
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
                  href="https://www.foodsafesystem.com/book-a-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
