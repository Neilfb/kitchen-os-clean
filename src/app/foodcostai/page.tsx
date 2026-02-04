import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Calculator, TrendingUp, RefreshCw, BarChart3, Scissors, ArrowUpDown, FileDown, Users } from 'lucide-react';
import { ProductSchema, FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from '@/components/seo/JsonLd';
import { ProductLogo } from '@/components/ProductLogo';

export const metadata: Metadata = {
  title: 'FoodCostAI - Free Recipe Costing Tool for Chefs',
  description: 'Calculate recipe costs in seconds with FoodCostAI. Real-time margin calculations, auto supplier price updates, and smart menu engineering — completely free for chefs and restaurants.',
  keywords: [
    'recipe costing tool',
    'food cost calculator',
    'restaurant profit margins',
    'menu engineering software',
    'ingredient cost calculator',
    'chef costing tool',
    'food cost management',
    'recipe cost software',
  ],
  alternates: {
    canonical: '/foodcostai',
  },
  openGraph: {
    title: 'FoodCostAI - Free Recipe Costing Tool for Chefs | Kitchen OS',
    description: 'Calculate recipe costs in seconds with FoodCostAI. Real-time margin calculations, auto supplier price updates, and smart menu engineering — completely free.',
    url: '/foodcostai',
    type: 'website',
    images: [{ url: '/logos/foodcostai/foodcostai-icon.png', width: 1200, height: 630, alt: 'FoodCostAI - Free Recipe Costing Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoodCostAI - Free Recipe Costing Tool for Chefs',
    description: 'Calculate recipe costs in seconds with FoodCostAI. Real-time margin calculations, auto supplier price updates, and smart menu engineering — completely free.',
    images: ['/logos/foodcostai/foodcostai-icon.png'],
  },
};

export default function FoodCostAIPage() {
  const features = [
    {
      icon: Calculator,
      title: 'Smart Recipe Builder',
      description: 'Build and manage all your recipes in one place. Add ingredients, set quantities, and get instant cost breakdowns for every dish on your menu.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Margin Calculator',
      description: 'See your profit margins update instantly as ingredient costs change. Know exactly what each dish is earning you before it leaves the kitchen.',
    },
    {
      icon: RefreshCw,
      title: 'Auto Supplier Price Updates',
      description: 'Keep your costs current without lifting a finger. Supplier prices update automatically so your margin calculations are always accurate.',
    },
    {
      icon: BarChart3,
      title: 'Menu Engineering',
      description: 'Identify your star dishes and problem items with data-driven insights. Optimise your menu layout for maximum profitability.',
    },
    {
      icon: Scissors,
      title: 'Cost Breakdown',
      description: 'Detailed ingredient-by-ingredient cost analysis for every recipe. Understand exactly where your money is going.',
    },
    {
      icon: ArrowUpDown,
      title: 'Multi-Recipe Scaling',
      description: 'Scale any recipe up or down instantly. Perfect for catering, batch cooking, or adapting dishes for different service sizes.',
    },
    {
      icon: FileDown,
      title: 'Export & Reports',
      description: 'Generate professional cost reports and export to PDF or CSV. Share insights with your team or use for business planning.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multiple users can work on recipes simultaneously. Keep your whole kitchen team aligned on costs and margins.',
    },
  ];

  const benefits = [
    'Cut food costs by up to 30%',
    'Build menus that maximise profit margins',
    'Keep supplier costs current automatically',
    'Make data-driven menu decisions',
    'Save hours on recipe costing every week',
    'Improve profitability across every dish',
  ];

  const faqs = [
    {
      question: 'How does FoodCostAI work?',
      answer: 'Simply sign up, add your recipes, and enter your ingredient costs. FoodCostAI instantly calculates the total cost of each dish and your profit margin based on the selling price you set. As supplier prices change, your margins update in real time.',
    },
    {
      question: 'Is FoodCostAI really free?',
      answer: 'Yes — FoodCostAI is completely free for chefs and restaurants. There are no hidden fees or credit card requirements. Sign up today and start costing your recipes in minutes.',
    },
    {
      question: 'What do I need to get started?',
      answer: 'Just your recipes and a rough idea of your ingredient costs. You can start with a single dish and build from there. FoodCostAI makes it easy to add and update ingredients as you go.',
    },
    {
      question: 'Can I update supplier prices automatically?',
      answer: 'Yes. FoodCostAI supports auto supplier price updates, so your cost calculations stay accurate without manual input. When prices change, your margins across all affected recipes update instantly.',
    },
    {
      question: 'How does FoodCostAI fit with the rest of Kitchen OS?',
      answer: 'FoodCostAI works alongside the full Kitchen OS platform — Food Safe System, AllerQ, Food Label System, and more. It\'s a standalone free tool that complements your existing kitchen operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <ProductSchema
        name="FoodCostAI"
        description="Free recipe costing tool for chefs and restaurants. Calculate dish costs in seconds with real-time margin calculations, auto supplier price updates, and smart menu engineering."
        price="0"
        currency="GBP"
        image="/logos/foodcostai/foodcostai-icon.png"
        url="/foodcostai"
        sku="FCA-001"
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "24"
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FoodCostAI', url: '/foodcostai' },
        ]}
      />
      <SoftwareApplicationSchema
        name="FoodCostAI"
        description="Free recipe costing and menu engineering tool for professional kitchens"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        price="0"
        currency="GBP"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fca-blue to-product-fca-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <img
              src="/logos/foodcostai/foodcostai-full-logo-white.png"
              alt="FoodCostAI"
              className="h-16 md:h-20 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Recipe Costing Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-product-fca-blue-light">
              Know exactly what every dish costs to make. Build smarter menus,
              protect your margins, and run a more profitable kitchen — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fca-blue font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started — It&apos;s Free
              </Link>
              <a
                href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-product-fca-blue-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Everything You Need to Cost Your Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FoodCostAI gives you the tools to understand, control, and improve
              the profitability of every dish you serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-product-fca-blue-light rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-product-fca-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Chefs Choose FoodCostAI
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stop guessing what your dishes cost. FoodCostAI turns recipe costing
                from a tedious manual process into a powerful business tool.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-product-fca-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-product-fca-blue-light to-white p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;FoodCostAI completely changed how we think about our menu. We
                discovered two dishes that were actually losing us money — and within
                a week of adjusting prices, our margins improved by 8%. It&apos;s
                the kind of tool every chef should be using, and it&apos;s free.&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-navy">Sarah Chen</p>
                  <p className="text-gray-600">Head Chef, The Green Kitchen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-product-fca-blue via-product-fca-blue to-product-fca-blue-dark"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <ProductLogo
              fullLogoSrc="/logos/foodcostai/foodcostai-full-logo-white.png"
              iconFallbackSrc="/logos/foodcostai/foodcostai-icon.png"
              alt="FoodCostAI"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
            Start Costing Your Recipes Today
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            Join chefs and restaurants already using FoodCostAI. No credit card needed — just sign up and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fca-blue font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Sign Up — It&apos;s Free
            </Link>
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fca-blue-dark text-white font-bold rounded-xl hover:bg-opacity-90 transition-all border-2 border-white shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            Complete Your Kitchen OS Setup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/food-safe-system" className="group">
              <div className="bg-gradient-to-br from-product-fss-green-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-fss-green transition-colors">
                  Food Safe System
                </h3>
                <p className="text-gray-600">
                  Automated HACCP and temperature monitoring for complete compliance.
                </p>
              </div>
            </Link>
            <Link href="/allerq" className="group">
              <div className="bg-gradient-to-br from-product-allerq-orange-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-allerq-orange transition-colors">
                  AllerQ
                </h3>
                <p className="text-gray-600">
                  Digital allergen menus with QR codes in 30+ languages.
                </p>
              </div>
            </Link>
            <Link href="/food-label-system" className="group">
              <div className="bg-gradient-to-br from-product-fls-green-light to-white p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-product-fls-green-dark transition-colors">
                  Food Label System
                </h3>
                <p className="text-gray-600">
                  Automated date labels with barcodes. Never mislabel food again.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
