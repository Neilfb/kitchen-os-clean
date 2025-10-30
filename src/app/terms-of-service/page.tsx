import type { Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Kitchen OS',
  description: 'Kitchen OS Terms of Service. Read our terms and conditions for using the Kitchen OS platform.',
  openGraph: {
    title: 'Terms of Service - Kitchen OS',
    description: 'Kitchen OS Terms of Service. Read our terms and conditions for using the Kitchen OS platform.',
    url: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300">Last updated: October 30, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using Kitchen OS (&quot;the Service&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service. Kitchen OS Ltd (&quot;Company&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) reserves the right to modify these Terms at any time.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Kitchen OS provides a cloud-based kitchen management platform including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Food Safe System: HACCP management and temperature monitoring</li>
              <li>AllerQ: Digital allergen menu management</li>
              <li>Food Label System: Automated date labelling with barcode tracking</li>
              <li>F*** Waste: Food waste tracking and analytics</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Account Registration and Security</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 mb-4">
              You must provide accurate, complete information when creating an account. You are responsible
              for maintaining the confidentiality of your account credentials.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">3.2 Account Security</h3>
            <p className="text-gray-700 mb-6">
              You are responsible for all activities under your account. Notify us immediately of any
              unauthorized use or security breach.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Subscription and Payment</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">4.1 Subscription Plans</h3>
            <p className="text-gray-700 mb-4">
              Kitchen OS offers Starter, Professional, and Enterprise subscription plans. Current pricing
              is available at{' '}
              <Link href="/pricing" className="text-product-fss-green hover:underline">
                kitchen-os.com/pricing
              </Link>
              .
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">4.2 Billing</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Subscriptions are billed monthly in advance</li>
              <li>Fees are non-refundable except as required by law</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Failed payments may result in service suspension</li>
            </ul>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">4.3 Free Trial</h3>
            <p className="text-gray-700 mb-6">
              New customers receive a 14-day free trial. No credit card required. After the trial, you
              will be charged unless you cancel before the trial ends.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">4.4 Cancellation</h3>
            <p className="text-gray-700 mb-6">
              You may cancel your subscription at any time with 30 days notice. Cancellation takes effect
              at the end of the current billing period. No refunds for partial months.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Reverse engineer or decompile the software</li>
              <li>Resell or redistribute the Service without authorization</li>
              <li>Use the Service to spam or harass others</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Data Ownership and License</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">6.1 Your Data</h3>
            <p className="text-gray-700 mb-4">
              You retain all rights to data you input into Kitchen OS (&quot;Customer Data&quot;). You grant us
              a license to use Customer Data solely to provide the Service.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">6.2 Our Platform</h3>
            <p className="text-gray-700 mb-6">
              Kitchen OS and all intellectual property rights remain our property. We grant you a
              limited, non-exclusive, non-transferable license to use the Service during your subscription.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Service Level and Uptime</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">7.1 Availability Target</h3>
            <p className="text-gray-700 mb-4">
              We target 99.5% uptime (excluding scheduled maintenance). Enterprise customers receive
              custom SLA with uptime guarantees and credits.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">7.2 Maintenance</h3>
            <p className="text-gray-700 mb-6">
              Scheduled maintenance windows are announced 48 hours in advance. Emergency maintenance
              may occur with minimal notice.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Data Protection and Privacy</h2>
            <p className="text-gray-700 mb-6">
              We process personal data in accordance with our{' '}
              <Link href="/privacy-policy" className="text-product-fss-green hover:underline">
                Privacy Policy
              </Link>
              {' '}and applicable data protection laws (GDPR, UK GDPR). We act as a Data Processor
              for Customer Data - you remain the Data Controller.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Liability and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">9.1 Service Provided &quot;As Is&quot;</h3>
            <p className="text-gray-700 mb-4">
              The Service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee
              error-free or uninterrupted service.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Our liability is limited to fees paid in the 12 months prior to the claim</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not liable for food safety incidents or regulatory violations</li>
              <li>You remain responsible for food safety compliance and regulatory adherence</li>
            </ul>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">9.3 Important Note on Compliance</h3>
            <p className="text-gray-700 mb-6">
              <strong>Kitchen OS is a tool to assist with food safety management. You remain solely
              responsible for:</strong> HACCP compliance, temperature monitoring protocols, allergen
              accuracy, food labelling compliance, and all food safety regulations. Kitchen OS provides
              tools but does not replace qualified food safety professionals or compliance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless Kitchen OS Ltd from claims arising from your
              use of the Service, violation of these Terms, or violation of any rights of third parties.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account if you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violate these Terms</li>
              <li>Fail to pay fees</li>
              <li>Engage in fraudulent or abusive behavior</li>
              <li>Pose a security risk</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Upon termination, you lose access to the Service. We will retain data for 90 days to
              allow export, then permanently delete it unless legally required to retain longer.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Governing Law and Disputes</h2>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">12.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of England and Wales.
            </p>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">12.2 Dispute Resolution</h3>
            <p className="text-gray-700 mb-6">
              Disputes will be resolved through good faith negotiation. If unresolved, disputes will
              be subject to the exclusive jurisdiction of courts in England and Wales.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Entire Agreement</h2>
            <p className="text-gray-700 mb-6">
              These Terms, together with our Privacy Policy, constitute the entire agreement between
              you and Kitchen OS Ltd. They supersede all prior agreements and understandings.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions about these Terms:</p>
            <ul className="list-none mb-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:legal@kitchen-os.com" className="text-product-fss-green hover:underline">legal@kitchen-os.com</a></li>
              <li><strong>Address:</strong> Kitchen OS Ltd, London, United Kingdom</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Document Version:</strong> 1.0<br />
                <strong>Last Updated:</strong> October 30, 2025<br />
                <strong>Effective Date:</strong> October 30, 2025
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
