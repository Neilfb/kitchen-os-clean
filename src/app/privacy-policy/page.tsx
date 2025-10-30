import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Kitchen OS',
  description: 'Kitchen OS Privacy Policy. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy - Kitchen OS',
    description: 'Kitchen OS Privacy Policy. Learn how we collect, use, and protect your personal data.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last updated: October 30, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Kitchen OS Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you use our
              Kitchen OS platform and services.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Account information (name, email address, company name, phone number)</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>HACCP and food safety data entered into the platform</li>
              <li>Temperature monitoring data from sensors</li>
              <li>Food labelling and allergen information</li>
              <li>Food waste tracking data and photos</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Location data from IoT sensors (temperature probe locations)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process temperature monitoring and send alerts</li>
              <li>Generate compliance reports and documentation</li>
              <li>Improve and optimize our platform</li>
              <li>Communicate with you about updates, support, and marketing (with your consent)</li>
              <li>Detect and prevent fraud or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Cloud hosting (AWS), payment processing (Stripe), email services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>End-to-end encryption for data transmission (TLS 1.3)</li>
              <li>Encrypted data storage at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Role-based access controls</li>
              <li>Multi-factor authentication</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your information for as long as your account is active or as needed to provide services.
              HACCP and temperature monitoring data is retained for 2 years to comply with food safety regulations.
              After account closure, data is retained for 90 days before permanent deletion, unless legally required
              to retain longer.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Your Rights (GDPR & UK GDPR)</h2>
            <p className="text-gray-700 mb-4">Under data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, contact us at <a href="mailto:privacy@kitchen-os.com" className="text-product-fss-green hover:underline">privacy@kitchen-os.com</a>
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies for:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Essential cookies:</strong> Required for platform functionality</li>
              <li><strong>Analytics cookies:</strong> To understand how you use our service</li>
              <li><strong>Preference cookies:</strong> To remember your settings</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings. Note that disabling cookies may affect
              platform functionality.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your data is primarily stored in the UK/EU. If data is transferred outside the UK/EU, we ensure
              appropriate safeguards are in place (Standard Contractual Clauses or adequacy decisions).
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Kitchen OS is not intended for use by children under 16. We do not knowingly collect information
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically. We will notify you of material changes via email
              or platform notification. Continued use after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">For privacy-related questions or requests:</p>
            <ul className="list-none mb-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:privacy@kitchen-os.com" className="text-product-fss-green hover:underline">privacy@kitchen-os.com</a></li>
              <li><strong>Post:</strong> Kitchen OS Ltd, London, United Kingdom</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Supervisory Authority</h2>
            <p className="text-gray-700 mb-6">
              If you believe we have not handled your data appropriately, you have the right to lodge a
              complaint with the UK Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-product-fss-green hover:underline">
                ico.org.uk
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Document Version:</strong> 1.0<br />
                <strong>Last Updated:</strong> October 30, 2025<br />
                <strong>Next Review:</strong> April 30, 2026
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center text-product-fss-green hover:text-product-fss-green-dark font-semibold"
            >
              Have questions? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
