import { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Mail, Eye, Shield, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login - Kitchen OS Platform',
  description: 'Access your Kitchen OS dashboard. Manage Food Safe System, Food Label System, AllerQ, and F*** Waste from one unified platform.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="min-h-screen flex">
        {/* Left Side - Login Form */}
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

            {/* Login Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <form className="space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="you@restaurant.com"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* SSO Options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium text-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/signup"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Sign up for free
                  </Link>
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
