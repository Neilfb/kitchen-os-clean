import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign Up - Kitchen OS Platform',
  description: 'Create your Kitchen OS account and get started with professional kitchen management. 14-day free trial, no credit card required.',
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="min-h-screen flex">
        {/* Left Side - Sign Up Redirect */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <img
                  src="/assets/KitchenOS-01.png"
                  alt="Kitchen OS"
                  className="h-12 w-auto mx-auto mb-6"
                />
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Start Your Free Trial
              </h1>
              <p className="text-gray-600">
                14 days free • No credit card required
              </p>
            </div>

            {/* Sign Up Redirect Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-600 mb-6">
                  Click below to create your Kitchen OS account and start your free trial
                </p>
              </div>

              {/* Sign Up Button */}
              <a
                href="https://app.kitchen-os.com/signup"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg text-center"
              >
                Start Free Trial
              </a>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <a
                    href="https://app.kitchen-os.com/login"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  <span>2-minute setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - What You Get */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-500 to-green-600 p-12 items-center justify-center">
          <div className="max-w-md">
            <div className="text-white mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Everything You Need to Run a Modern Kitchen
              </h2>
              <p className="text-green-50 text-lg">
                Join 500+ professional kitchens using Kitchen OS to save time, reduce costs, and ensure compliance.
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">14-Day Free Trial</div>
                  <div className="text-green-50 text-sm">
                    Full access to all features. No credit card required. Cancel anytime.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Choose Your Products</div>
                  <div className="text-green-50 text-sm">
                    Start with one product or bundle all four. Add more as you grow.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Free Onboarding & Setup</div>
                  <div className="text-green-50 text-sm">
                    Personal onboarding call, remote setup, and staff training included.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Unlimited Support</div>
                  <div className="text-green-50 text-sm">
                    Email, phone, and live chat support. Average response time under 2 hours.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">No Long-Term Contract</div>
                  <div className="text-green-50 text-sm">
                    Month-to-month subscription. Cancel anytime with 30 days notice.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Regular Updates</div>
                  <div className="text-green-50 text-sm">
                    New features, integrations, and improvements at no extra cost.
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-green-100 text-xs">Active Kitchens</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-green-100 text-xs">Pass Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">£2.5M</div>
                <div className="text-green-100 text-xs">Saved Annually</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-50 italic mb-4">
                &ldquo;We were up and running in under 10 minutes. The ROI was obvious within the first week when we avoided a failed inspection and caught £400 of waste.&rdquo;
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Sarah Mitchell</div>
                  <div className="text-green-100 text-xs">General Manager, The Grove Hotel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
