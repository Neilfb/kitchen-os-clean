import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, Scale, Wifi, DollarSign, Zap, Building2, ExternalLink } from 'lucide-react';
import { ProductSchema, FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from '@/components/seo/JsonLd';
import { ProductLogo } from '@/components/ProductLogo';

export const metadata: Metadata = {
  title: 'F*** Waste - Turning Waste into Profit | IoT Smart Scales',
  description: 'IoT smart under-bin scales with AI analytics. 50%+ waste reduction, 14:1 ROI. Zero workflow disruption. Reduce food waste by half and save thousands annually.',
  keywords: [
    'food waste tracking',
    'food waste reduction',
    'AI food waste',
    'restaurant waste management',
    'sustainability reporting',
    'kitchen waste analytics',
    'food waste software',
    'commercial kitchen waste',
  ],
  alternates: {
    canonical: '/f-waste',
  },
  openGraph: {
    title: 'F*** Waste - Turning Waste into Profit | Kitchen OS',
    description: 'IoT smart under-bin scales with AI analytics. 50%+ waste reduction, 14:1 ROI. Zero workflow disruption.',
    url: '/f-waste',
    type: 'website',
    images: [{ url: '/assets/fuckwaste-02.png', width: 1200, height: 630, alt: 'F*** Waste - IoT Smart Scales' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F*** Waste - Turning Waste into Profit',
    description: 'IoT smart under-bin scales with AI analytics. 50%+ waste reduction, 14:1 ROI.',
    images: ['/assets/fuckwaste-02.png'],
  },
};

export default function FWastePage() {
  const features = [
    {
      icon: Scale,
      title: 'Wireless Stainless Smart Scales',
      description: 'Built for commercial kitchen environments with food-grade materials, wireless connectivity, and precision weighing technology that captures every gram of waste data.',
    },
    {
      icon: Wifi,
      title: 'Under-Bin Placement',
      description: 'Completely invisible installation beneath existing waste bins means zero kitchen disruption whilst capturing 100% of waste streams for comprehensive analysis.',
    },
    {
      icon: Zap,
      title: 'Automated Data Capture',
      description: 'Real-time synchronisation with cloud-based analytics platform provides instant visibility into waste patterns, costs, and reduction opportunities.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Intuitive reporting interface delivers actionable insights, cost breakdowns, and ESG metrics that transform data into immediate operational improvements.',
    },
    {
      icon: Building2,
      title: 'Scalable Architecture',
      description: 'From single-site independents to multi-property hotel groups, the system scales effortlessly to meet any operational requirement or kitchen configuration.',
    },
  ];

  const faqs = [
    {
      question: 'How does F*** Waste work without disrupting our kitchen?',
      answer: 'Our IoT smart scales install beneath your existing waste bins - completely invisible to kitchen staff. There\'s no additional workflow required. Staff simply use bins as normal, and the scales automatically capture precise weight data in real-time. No training, no disruption, just instant visibility.',
    },
    {
      question: 'What kind of ROI can we expect?',
      answer: 'F*** Waste delivers a proven 14:1 ROI. Most operations achieve 50%+ waste reduction within the first 3-6 months. For a typical restaurant wasting 4-10% of purchased food, this translates to thousands in annual savings. The system typically pays for itself within the first month.',
    },
    {
      question: 'How is this different from Winnow or Leanpath?',
      answer: 'Unlike competitors that require expensive hardware, complex workflows, and significant staff training, F*** Waste offers plug-and-play simplicity. Our under-bin scales are completely invisible, require zero workflow changes, and cost a fraction of competitor solutions. You get the same insights without the friction.',
    },
    {
      question: 'Can this scale across multiple sites?',
      answer: 'Absolutely. Our architecture is designed to scale from single independent restaurants to multi-property hotel groups. We currently support 105+ customers across 9 countries, including enterprise clients with dozens of locations. The cloud-based dashboard provides unified visibility across all your operations.',
    },
    {
      question: 'What about ESG and sustainability reporting?',
      answer: 'F*** Waste generates comprehensive ESG reports including CO2 emissions saved, waste diverted from landfill, and progress toward sustainability targets. We\'re endorsed by the United Nations World Tourism Organisation (UNWTO) as the sustainability standard for global hospitality. Perfect for investor reporting and marketing your green credentials.',
    },
    {
      question: 'How much does F*** Waste cost?',
      answer: '£150/month per site with flexible deployment options for multi-site operators. This includes IoT smart scales, cloud analytics platform, real-time insights, and ESG reporting. Most customers achieve ROI within 30 days through waste reduction. Volume discounts available. See our pricing page for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <ProductSchema
        name="F*** Waste"
        description="IoT smart under-bin scales with AI analytics for food waste tracking. 50%+ waste reduction, 14:1 ROI, zero workflow disruption. Wireless scales install beneath existing bins for seamless kitchen integration."
        price="150"
        currency="GBP"
        image="/logos/fwaste/fwaste-icon.png"
        url="/f-waste"
        sku="FW-001"
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "105"
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'F*** Waste', url: '/f-waste' },
        ]}
      />
      <SoftwareApplicationSchema
        name="F*** Waste"
        description="IoT smart under-bin scales with AI analytics for food waste tracking and reduction in professional kitchens"
        applicationCategory="BusinessApplication"
        operatingSystem="Cloud-based with IoT hardware"
        price="150"
        currency="GBP"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-product-fw-green-light to-product-fw-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <img
              src="/logos/fwaste/fwaste-full-logo-white.png"
              alt="F*** Waste"
              className="h-16 md:h-20 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Less Waste, More Profits
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-semibold">
              IoT smart under-bin scales paired with AI analytics deliver real-time insights without disrupting kitchen workflow.
            </p>
            <p className="text-lg md:text-xl mb-8 text-white">
              Install beneath existing bins and immediately start capturing precise waste data. The system delivers 50%+ waste reduction with a proven 14:1 ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a Demo
              </Link>
              <a
                href="https://f-waste.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-product-fw-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-product-fw-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Smart Technology, Invisible Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No staff training required. No workflow changes. Just intelligent monitoring that turns waste visibility into immediate savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-10 rounded-2xl shadow-lg text-center">
              <div className="text-6xl font-bold text-product-fw-green mb-3">50%+</div>
              <div className="text-xl font-semibold text-brand-navy mb-2">Waste Reduction</div>
              <p className="text-gray-600">Proven results across hospitality</p>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-10 rounded-2xl shadow-lg text-center">
              <div className="text-6xl font-bold text-product-fw-green mb-3">14:1</div>
              <div className="text-xl font-semibold text-brand-navy mb-2">ROI Ratio</div>
              <p className="text-gray-600">Immediate return on investment</p>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-10 rounded-2xl shadow-lg text-center">
              <div className="text-6xl font-bold text-product-fw-green mb-3">0</div>
              <div className="text-xl font-semibold text-brand-navy mb-2">Workflow Disruption</div>
              <p className="text-gray-600">Seamless kitchen integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview - Engineering Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Product Overview: Engineering Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow border-2 border-product-fw-green/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-product-fw-green-light to-product-fw-green rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How It Works: Simple. Smart. Profitable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-product-fw-green-light to-product-fw-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">Weigh</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart scales capture precise waste data automatically as bins are used throughout service, requiring zero additional staff effort or workflow changes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-product-fw-green-light to-product-fw-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">Sync</h3>
              <p className="text-gray-600 leading-relaxed">
                Data transmits wirelessly to our cloud platform in real-time, building comprehensive waste profiles and identifying patterns across all kitchen operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-product-fw-green-light to-product-fw-green rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analytics transform raw data into actionable intelligence, highlighting waste hotspots, cost implications, and specific reduction opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-product-fw-green-light to-product-fw-green rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">Savings</h3>
              <p className="text-gray-600 leading-relaxed">
                Operators implement targeted interventions based on data-driven insights, achieving immediate cost reductions and long-term operational efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Traction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Proven Traction Across Global Markets
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-bold text-product-fw-green mb-3">105+ Customers, 9 Countries</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid expansion across diverse hospitality markets demonstrates universal appeal and proven value proposition in varied operational environments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-bold text-product-fw-green mb-3">Blue-Chip Pilot Programme</h3>
              <p className="text-gray-600 leading-relaxed">
                Active pilots with leading hospitality groups and restaurant chains demonstrate real-world impact. Early adopters report significant waste reduction and cost savings within the first 30 days of implementation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-bold text-product-fw-green mb-3">UNWTO Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                United Nations World Tourism Organisation endorsement establishes credibility and positions F*** Waste as the sustainability standard for global hospitality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-xl font-bold text-product-fw-green mb-3">Enterprise Pipeline</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading tech companies and international hospitality groups evaluating F*** Waste for deployment across their operations. Enterprise clients benefit from white-label options and centralized waste analytics dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Crisis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              The Hidden Crisis in Hospitality
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-3">
              Food Waste is Bleeding Your Bottom Line
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-soft mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hotels and restaurants routinely waste between <strong className="text-product-fw-green">4-10% of all purchased food</strong>,
                contributing to a staggering <strong className="text-product-fw-green">$1 trillion global waste crisis</strong>.
                This isn&apos;t just an environmental issue—it&apos;s a direct hit to profitability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Modern guests increasingly expect sustainable practices, with <strong className="text-product-fw-green">78% of travellers</strong> actively
                choosing eco-conscious hotels. Meanwhile, ESG reporting requirements are tightening across the hospitality sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every plate scraped, every spoiled ingredient, every over-ordered item represents lost revenue and mounting pressure
                from stakeholders demanding change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-soft border-2 border-red-100">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Hidden Daily Losses</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every kitchen haemorrhages money through invisible waste streams. Over-purchasing, spoilage, and plate waste
                  create a constant drain on margins that most operators never properly quantify.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-soft border-2 border-yellow-100">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Reputation at Risk</h3>
                <p className="text-gray-600 leading-relaxed">
                  ESG scrutiny intensifies whilst guests demand sustainability. Operators who ignore waste face reputational damage
                  and lose competitive advantage in an increasingly conscious market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why F*** Waste Wins */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why F*** Waste Wins
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border-2 border-product-fw-green/20 mb-8">
                <h3 className="text-2xl font-bold text-product-fw-green mb-4">$1 Trillion Problem</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Global food waste represents the world&apos;s third-largest carbon emitter. The hospitality sector sits at
                  the epicentre of this crisis, creating massive opportunity for solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border-2 border-product-fw-green/20">
                <h3 className="text-2xl font-bold text-product-fw-green mb-4">$20 Billion SAM</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Serviceable addressable market in foodservice technology continues expanding as operators seek competitive
                  advantage through operational efficiency and sustainability credentials.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-product-fw-green-light to-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Plug-and-Play Simplicity</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Competitors like <strong>Winnow, Leanpath, and Orbisk</strong> offer expensive, complex systems requiring
                significant operational changes. F*** Waste delivers <strong className="text-product-fw-green">plug-and-play
                simplicity</strong> at accessible pricing whilst remaining completely invisible to kitchen workflow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach eliminates barriers to adoption, accelerates implementation timelines, and delivers immediate value
                without the friction that has limited competitor market penetration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-soft">
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
        <div className="absolute inset-0">
          <img
            src="/assets/Food_Waste_5.width-1300.png"
            alt="Fresh produce and ingredients"
            className="w-full h-full object-cover"
          />
          {/* Lighter gradient overlay - shows image more */}
          <div className="absolute inset-0 bg-gradient-to-r from-product-fw-green/75 via-product-fw-green/65 to-product-fw-green-dark/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Full logo will go here once provided */}
          <div className="mb-8 flex justify-center">
            <ProductLogo
              fullLogoSrc="/logos/fwaste/fwaste-full-logo-white.png"
              iconFallbackSrc="/logos/fwaste/fwaste-icon.png"
              alt="F*** Waste"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
            Turn Waste Into Profit
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            Join 105+ kitchens across 9 countries using F*** Waste. 50%+ waste reduction. 14:1 ROI. Zero disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fw-green font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Book a Demo
            </Link>
            <a
              href="https://f-waste.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-product-fw-green font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fw-green-dark text-white font-bold rounded-xl hover:bg-opacity-90 transition-all border-2 border-white shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              View Pricing
            </Link>
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
                  Digital allergen menus with QR codes. Keep customers safe and compliant.
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
