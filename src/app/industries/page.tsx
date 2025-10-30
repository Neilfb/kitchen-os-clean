import type { Metadata } from 'next';
import Link from 'next/link';
import { Hotel, Utensils, GraduationCap, Building2, Coffee, Home, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve - Kitchen OS',
  description: 'Kitchen OS serves restaurants, hotels, healthcare facilities, schools, cafes, and more. Tailored solutions for every professional kitchen.',
  openGraph: {
    title: 'Industries We Serve - Kitchen OS',
    description: 'Kitchen OS serves restaurants, hotels, healthcare facilities, schools, cafes, and more. Tailored solutions for every professional kitchen.',
    url: '/industries',
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: Utensils,
      name: 'Restaurants',
      description: 'From independent bistros to multi-site restaurant groups',
      challenges: [
        'Managing HACCP compliance across multiple sites',
        'Providing multi-language allergen information for international guests',
        'Reducing food waste to improve margins',
        'Ensuring consistent labelling and stock rotation',
      ],
      solution: 'Kitchen OS gives restaurant operators complete visibility across all locations. Food Safe System handles HACCP automatically, AllerQ provides multi-language allergen menus, and F*** Waste helps identify cost-saving opportunities. Professional plan covers up to 5 sites for £149/month.',
    },
    {
      icon: Hotel,
      name: 'Hotels & Hospitality',
      description: 'Large-scale catering for hotels, conference centers, and event venues',
      challenges: [
        'Managing multiple kitchens and service points',
        'High volume temperature monitoring across large sites',
        'Allergen management for banqueting and events',
        'Waste tracking for sustainability reporting',
      ],
      solution: 'Kitchen OS scales to handle large hotel operations with unlimited temperature sensors, multi-site management, and comprehensive waste analytics. Enterprise customers get dedicated support and custom integrations with existing hotel systems.',
    },
    {
      icon: GraduationCap,
      name: 'Schools & Universities',
      description: 'Educational institutions serving hundreds of meals daily',
      challenges: [
        'Strict allergen compliance for student safety',
        'Budget constraints requiring waste reduction',
        'Meeting Natasha\'s Law requirements',
        'Managing multiple dining facilities across campus',
      ],
      solution: 'AllerQ ensures every student can see allergen information instantly via QR codes. F*** Waste helps schools reduce costs and meet sustainability targets. Food Safe System maintains compliance with minimal staff training required.',
    },
    {
      icon: Building2,
      name: 'Healthcare & Care Homes',
      description: 'Hospitals, nursing homes, and care facilities',
      challenges: [
        'Critical food safety for vulnerable populations',
        'Detailed allergen tracking for dietary requirements',
        'Regulatory compliance and inspection readiness',
        'Managing special diets and medical nutrition',
      ],
      solution: 'Healthcare facilities require the highest food safety standards. Food Safe System provides 24/7 monitoring with instant alerts. AllerQ manages complex dietary requirements and allergen information. Complete audit trails for CQC inspections.',
    },
    {
      icon: Coffee,
      name: 'Cafes & Coffee Shops',
      description: 'Independent cafes and coffee shop chains',
      challenges: [
        'Quick allergen information display for customers',
        'Simple date labelling for daily prep',
        'Managing food waste to improve profitability',
        'Maintaining compliance without dedicated compliance staff',
      ],
      solution: 'Starter plan (£49/month) is perfect for single-site cafes. AllerQ provides instant allergen menus via QR codes. Food Label System eliminates handwritten labels. F*** Waste helps identify over-prepping and reduce costs.',
    },
    {
      icon: Home,
      name: 'Contract Catering',
      description: 'Corporate catering, workplace restaurants, and catering companies',
      challenges: [
        'Managing multiple client sites',
        'Different compliance requirements per client',
        'Demonstrating value and cost savings to clients',
        'Sustainability reporting for corporate clients',
      ],
      solution: 'Enterprise plan supports unlimited sites with centralized management. Generate client-specific compliance and sustainability reports. F*** Waste provides ROI metrics to demonstrate cost savings. White-label options available.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Kitchen OS works for any professional kitchen - from independent restaurants to
              large multi-site operations.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-product-fss-green-light rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-8 h-8 text-product-fss-green" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-brand-navy">{industry.name}</h2>
                    <p className="text-xl text-gray-600">{industry.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">Common Challenges:</h3>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-gray-700 pl-4 border-l-2 border-product-fss-green">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-product-fss-green-light to-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">How Kitchen OS Helps:</h3>
                <p className="text-gray-700 leading-relaxed">{industry.solution}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Michelin-starred restaurants to university dining halls, Kitchen OS helps
              professional kitchens stay compliant and reduce costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-product-fss-green mb-2">500+</div>
              <div className="text-xl text-gray-700">Professional Kitchens</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-product-fss-green mb-2">6</div>
              <div className="text-xl text-gray-700">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-product-fss-green mb-2">100%</div>
              <div className="text-xl text-gray-700">Inspection Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-product-fss-green to-product-fss-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See How Kitchen OS Works for Your Industry?
          </h2>
          <p className="text-xl mb-8 text-product-fss-green-light">
            Book a demo tailored to your specific operation and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-product-fss-green font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors border-2 border-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
