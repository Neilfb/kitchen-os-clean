import { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login - Kitchen OS Platform',
  description: 'Access your Kitchen OS dashboard. Manage Food Safe System, Food Label System, AllerQ, and F*** Waste from one unified platform.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="min-h-screen flex">
        {/* Left Side - Login Redirect */}
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
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to your Kitchen OS platform
              </p>
            </div>

            {/* Login Redirect Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-600 mb-6">
                  Click below to access your Kitchen OS dashboard
                </p>
              </div>

              {/* Login Button */}
              <a
                href="https://app.kitchen-os.com/login"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg text-center"
              >
                Go to Login
              </a>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{' '}
                  <a
                    href="https://app.kitchen-os.com/signup"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Sign up for free
                  </a>
                </p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>256-bit SSL encryption • SOC 2 Type II certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Features & Benefits */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-500 to-green-600 p-12 items-center justify-center">
          <div className="max-w-md">
            <div className="text-white mb-8">
              <h2 className="text-4xl font-bold mb-4">
                One Platform.<br />All Your Kitchen Systems.
              </h2>
              <p className="text-green-50 text-lg">
                Access all Kitchen OS products from a single unified dashboard. Manage compliance, reduce waste, and streamline operations.
              </p>
            </div>

            {/* Product Logos Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <img
                  src="/logos/food-safe-system/fss-icon.png"
                  alt="Food Safe System"
                  className="w-12 h-12 mb-3"
                />
                <div className="text-white font-semibold text-sm">Food Safe System</div>
                <div className="text-green-100 text-xs">HACCP & Monitoring</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <img
                  src="/logos/allerq/allerq-icon.png"
                  alt="AllerQ"
                  className="w-12 h-12 mb-3"
                />
                <div className="text-white font-semibold text-sm">AllerQ</div>
                <div className="text-green-100 text-xs">Digital Allergen Menus</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <img
                  src="/logos/food-label-system/fls-icon.png"
                  alt="Food Label System"
                  className="w-12 h-12 mb-3"
                />
                <div className="text-white font-semibold text-sm">Food Label System</div>
                <div className="text-green-100 text-xs">Automated Labels</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <img
                  src="/logos/fwaste/fwaste-icon.png"
                  alt="F*** Waste"
                  className="w-12 h-12 mb-3"
                />
                <div className="text-white font-semibold text-sm">F*** Waste</div>
                <div className="text-green-100 text-xs">Waste Tracking</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Unified Dashboard</div>
                  <div className="text-green-50 text-sm">
                    Manage all products from one place. No more switching between apps.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Real-Time Sync</div>
                  <div className="text-green-50 text-sm">
                    Your data syncs instantly across all devices and locations.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Enterprise Security</div>
                  <div className="text-green-50 text-sm">
                    Bank-level encryption, SSO support, and compliance-ready.
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-50 italic mb-4">
                &ldquo;Having all our kitchen systems in one login has saved us hours every week. The unified dashboard gives us visibility we never had before.&rdquo;
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">James Morrison</div>
                  <div className="text-green-100 text-xs">Head Chef, The Riverside</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
