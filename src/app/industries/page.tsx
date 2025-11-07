import type { Metadata } from 'next';
import Link from 'next/link';
import { Hotel, Utensils, GraduationCap, Building2, Coffee, Home, Factory, ShoppingCart, ArrowRight } from 'lucide-react';
import IndustryCard from '@/components/IndustryCard';

export const metadata: Metadata = {
  title: 'Industries We Serve - Kitchen OS',
  description: 'Kitchen OS serves restaurants, hotels, healthcare facilities, schools, cafes, food production, food retail, and more. Tailored solutions for every professional kitchen.',
  openGraph: {
    title: 'Industries We Serve - Kitchen OS',
    description: 'Kitchen OS serves restaurants, hotels, healthcare facilities, schools, cafes, food production, food retail, and more. Tailored solutions for every professional kitchen.',
    url: '/industries',
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      iconName: 'Utensils',
      name: 'Restaurants',
      description: 'From independent bistros to multi-site restaurant groups',
      imageSrc: '/assets/restaurant_wc.png',
      challenges: [
        'Managing HACCP compliance across multiple sites',
        'Providing multi-language allergen information for international guests',
        'Reducing food waste to improve margins',
        'Ensuring consistent labelling and stock rotation',
      ],
      solution: 'Kitchen OS gives restaurant operators complete visibility across all locations. Food Safe System handles HACCP automatically, AllerQ provides multi-language allergen menus, and F*** Waste helps identify cost-saving opportunities. Flexible per-site pricing with volume discounts for multi-location groups.',
    },
    {
      iconName: 'Hotel',
      name: 'Hotels & Hospitality',
      description: 'Large-scale catering for hotels, conference centers, and event venues',
      imageSrc: '/assets/Hotel_wc.png',
      challenges: [
        'Managing multiple kitchens and service points',
        'High volume temperature monitoring across large sites',
        'Allergen management for banqueting and events',
        'Waste tracking for sustainability reporting',
      ],
      solution: 'Kitchen OS scales to handle large hotel operations with unlimited temperature sensors, multi-site management, and comprehensive waste analytics. Enterprise customers get dedicated support and custom integrations with existing hotel systems.',
    },
    {
      iconName: 'GraduationCap',
      name: 'Schools & Universities',
      description: 'Educational institutions serving hundreds of meals daily',
      imageSrc: '/assets/school_canteen.png',
      challenges: [
        'Strict allergen compliance for student safety',
        'Budget constraints requiring waste reduction',
        'Meeting Natasha\'s Law requirements',
        'Managing multiple dining facilities across campus',
      ],
      solution: 'AllerQ ensures every student can see allergen information instantly via QR codes. F*** Waste helps schools reduce costs and meet sustainability targets. Food Safe System maintains compliance with minimal staff training required.',
    },
    {
      iconName: 'Building2',
      name: 'Healthcare & Care Homes',
      description: 'Hospitals, nursing homes, and care facilities',
      imageSrc: '/assets/hospital_wc.png',
      challenges: [
        'Critical food safety for vulnerable populations',
        'Detailed allergen tracking for dietary requirements',
        'Regulatory compliance and inspection readiness',
        'Managing special diets and medical nutrition',
      ],
      solution: 'Healthcare facilities require the highest food safety standards. Food Safe System provides 24/7 monitoring with instant alerts. AllerQ manages complex dietary requirements and allergen information. Complete audit trails for CQC inspections.',
    },
    {
      iconName: 'Coffee',
      name: 'Cafes & Coffee Shops',
      description: 'Independent cafes and coffee shop chains',
      imageSrc: '/assets/cafe_wc.png',
      challenges: [
        'Quick allergen information display for customers',
        'Simple date labelling for daily prep',
        'Managing food waste to improve profitability',
        'Maintaining compliance without dedicated compliance staff',
      ],
      solution: 'Kitchen OS is perfect for cafes of all sizes. AllerQ (£7.49/month) provides instant allergen menus via QR codes. Food Label System (£35/month) eliminates handwritten labels and ensures compliance. Start with what you need and add more products as you grow.',
    },
    {
      iconName: 'Home',
      name: 'Contract Catering',
      description: 'Corporate catering, workplace restaurants, and catering companies',
      imageSrc: '/assets/factory_canteen_wc.png',
      challenges: [
        'Managing multiple client sites',
        'Different compliance requirements per client',
        'Demonstrating value and cost savings to clients',
        'Sustainability reporting for corporate clients',
      ],
      solution: 'Enterprise plan supports unlimited sites with centralized management. Generate client-specific compliance and sustainability reports. F*** Waste provides ROI metrics to demonstrate cost savings. White-label options available.',
    },
    {
      iconName: 'Factory',
      name: 'Food Production',
      description: 'Food manufacturers, central production kitchens, and processing facilities',
      imageSrc: '/assets/food_prod_wc.png',
      challenges: [
        'High-volume temperature monitoring across production lines',
        'Complex HACCP compliance for multiple product ranges',
        'Accurate date labelling and batch tracking',
        'Waste reduction in large-scale production',
      ],
      solution: 'Food Safe System scales to handle production environments with unlimited sensor support and automated HACCP logging. Food Label System ensures accurate batch labels and traceability. F*** Waste identifies production inefficiencies and cost-saving opportunities. Real-time alerts prevent costly recalls.',
    },
    {
      iconName: 'ShoppingCart',
      name: 'Food Retail',
      description: 'Supermarkets, delis, food halls, and retail food counters',
      imageSrc: '/assets/butcher_shop.png',
      challenges: [
        'Managing hot food counters and prepared foods',
        'Customer-facing allergen information requirements',
        'Date labelling for short shelf-life products',
        'Compliance across multiple retail locations',
      ],
      solution: 'AllerQ provides instant customer-accessible allergen information via QR codes. Food Safe System handles temperature monitoring for hot counters and chill displays. Food Label System streamlines date labelling for grab-and-go items. Multi-site dashboard provides visibility across all locations.',
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

      {/* Industries Grid with Flip Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Explore Our Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click or tap any card to discover how Kitchen OS solves the unique challenges of your industry
            </p>
          </div>

          {/* Grid of Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.name}
                description={industry.description}
                imageSrc={industry.imageSrc}
                iconName={industry.iconName}
                challenges={industry.challenges}
                solution={industry.solution}
              />
            ))}
          </div>
        </div>
      </section>

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
              <div className="text-5xl font-bold text-product-fss-green mb-2">8</div>
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
