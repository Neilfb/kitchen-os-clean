import type { Metadata } from 'next';
import { ExternalLink, CheckCircle } from 'lucide-react';
import EnchargeForm from '@/components/EnchargeForm';

export const metadata: Metadata = {
  title: 'Kitchen Solutions Directory - Curated Partners & Suppliers | Kitchen OS',
  description: 'Discover trusted kitchen equipment, software, and service providers curated by Kitchen OS. The best solutions for professional kitchens.',
};

export default function DirectoryPage() {
  const categories = [
    {
      name: 'Kitchen Equipment',
      description: 'Professional kitchen equipment and supplies',
      suppliers: [
        {
          name: 'Nisbets',
          description: 'Complete range of commercial catering equipment, supplies and furnishings',
          website: 'https://www.nisbets.co.uk',
          verified: true,
        },
        {
          name: 'Alliance Online',
          description: 'Professional kitchen equipment and catering supplies',
          website: 'https://www.allianceonline.co.uk',
          verified: true,
        },
        {
          name: 'Cater-Kwik',
          description: 'Specialist supplier of catering equipment and supplies',
          website: 'https://www.caterkwik.co.uk',
          verified: true,
        },
      ],
    },
    {
      name: 'Point of Sale (POS) Systems',
      description: 'Restaurant POS and ordering systems',
      suppliers: [
        {
          name: 'Square',
          description: 'Complete POS system for restaurants with payment processing',
          website: 'https://squareup.com/gb/en/point-of-sale/restaurants',
          verified: true,
        },
        {
          name: 'Lightspeed',
          description: 'Cloud-based restaurant POS and management platform',
          website: 'https://www.lightspeedhq.co.uk/pos/restaurant',
          verified: true,
        },
        {
          name: 'Toast',
          description: 'All-in-one restaurant POS and management system',
          website: 'https://pos.toasttab.com',
          verified: true,
        },
      ],
    },
    {
      name: 'Accounting & Finance',
      description: 'Financial management and accounting software',
      suppliers: [
        {
          name: 'Xero',
          description: 'Cloud accounting software for small businesses',
          website: 'https://www.xero.com/uk',
          verified: true,
        },
        {
          name: 'QuickBooks',
          description: 'Accounting software with restaurant-specific features',
          website: 'https://quickbooks.intuit.com/uk',
          verified: true,
        },
        {
          name: 'FreeAgent',
          description: 'Award-winning accounting software for small businesses',
          website: 'https://www.freeagent.com',
          verified: true,
        },
      ],
    },
    {
      name: 'Food Suppliers',
      description: 'Wholesale food and ingredient suppliers',
      suppliers: [
        {
          name: 'Brakes',
          description: 'Leading foodservice supplier with nationwide delivery',
          website: 'https://www.brake.co.uk',
          verified: true,
        },
        {
          name: 'Bidfood',
          description: 'Foodservice supplier with extensive product range',
          website: 'https://www.bidfood.co.uk',
          verified: true,
        },
        {
          name: 'Booker Wholesale',
          description: 'Cash and carry wholesaler for catering businesses',
          website: 'https://www.booker.co.uk',
          verified: true,
        },
      ],
    },
    {
      name: 'Staff Management',
      description: 'HR, scheduling, and workforce management',
      suppliers: [
        {
          name: 'Deputy',
          description: 'Employee scheduling and time tracking for hospitality',
          website: 'https://www.deputy.com',
          verified: true,
        },
        {
          name: 'Rotaready',
          description: 'Smart scheduling software for hospitality teams',
          website: 'https://www.rotaready.com',
          verified: true,
        },
        {
          name: 'Planday',
          description: 'Workforce management platform for shift-based businesses',
          website: 'https://www.planday.com',
          verified: true,
        },
      ],
    },
    {
      name: 'Reservation & Booking',
      description: 'Table booking and reservation management',
      suppliers: [
        {
          name: 'OpenTable',
          description: 'Leading online restaurant reservation platform',
          website: 'https://www.opentable.co.uk',
          verified: true,
        },
        {
          name: 'Resy',
          description: 'Restaurant reservation and table management platform',
          website: 'https://resy.com',
          verified: true,
        },
        {
          name: 'SevenRooms',
          description: 'Guest experience and retention platform',
          website: 'https://sevenrooms.com',
          verified: true,
        },
      ],
    },
    {
      name: 'Online Ordering & Delivery',
      description: 'Delivery platforms and online ordering systems',
      suppliers: [
        {
          name: 'Uber Eats',
          description: 'Food delivery platform connecting restaurants with customers',
          website: 'https://www.ubereats.com/gb/business',
          verified: true,
        },
        {
          name: 'Deliveroo',
          description: 'Premium food delivery service for restaurants',
          website: 'https://restaurants.deliveroo.com/en-gb',
          verified: true,
        },
        {
          name: 'Just Eat',
          description: 'UK leading online food ordering platform',
          website: 'https://www.just-eat.co.uk/restaurants',
          verified: true,
        },
      ],
    },
    {
      name: 'Marketing & Customer Engagement',
      description: 'Marketing tools and customer relationship management',
      suppliers: [
        {
          name: 'Mailchimp',
          description: 'Email marketing and customer engagement platform',
          website: 'https://mailchimp.com',
          verified: true,
        },
        {
          name: 'Klaviyo',
          description: 'Marketing automation for restaurants and hospitality',
          website: 'https://www.klaviyo.com',
          verified: true,
        },
        {
          name: 'Google My Business',
          description: 'Manage your restaurant listing on Google',
          website: 'https://www.google.com/business',
          verified: true,
        },
      ],
    },
    {
      name: 'Insurance',
      description: 'Restaurant and hospitality insurance providers',
      suppliers: [
        {
          name: 'Hiscox',
          description: 'Specialist business insurance for restaurants',
          website: 'https://www.hiscox.co.uk/restaurant-insurance',
          verified: true,
        },
        {
          name: 'AXA Business Insurance',
          description: 'Comprehensive business insurance solutions',
          website: 'https://www.axa.co.uk/business-insurance',
          verified: true,
        },
        {
          name: 'Simply Business',
          description: 'Business insurance comparison and purchase platform',
          website: 'https://www.simplybusiness.co.uk',
          verified: true,
        },
      ],
    },
    {
      name: 'Training & Compliance',
      description: 'Staff training and food safety certification',
      suppliers: [
        {
          name: 'High Speed Training',
          description: 'Online food safety and hygiene training courses',
          website: 'https://www.highspeedtraining.co.uk/food-safety',
          verified: true,
        },
        {
          name: 'Clever Chefs',
          description: 'Professional chef training and development',
          website: 'https://www.cleverchefs.com',
          verified: true,
        },
        {
          name: 'CPD Online College',
          description: 'Accredited food safety and allergen training',
          website: 'https://cpdonline.co.uk',
          verified: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kitchen Solutions Directory
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Curated partners and suppliers trusted by professional kitchens across the UK.
              Everything you need to run a successful hospitality business.
            </p>
            <div className="flex items-center space-x-2 text-product-fss-green">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">All suppliers verified by Kitchen OS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Trusted Partners & Suppliers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve curated the best solutions for every aspect of your kitchen operations.
              No affiliates, no commissions - just genuine recommendations.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-soft p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.suppliers.map((supplier, supplierIndex) => (
                    <a
                      key={supplierIndex}
                      href={supplier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-50 hover:bg-gradient-to-br hover:from-product-fss-green-light hover:to-white p-6 rounded-lg border-2 border-gray-100 hover:border-product-fss-green transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-brand-navy group-hover:text-product-fss-green transition-colors">
                          {supplier.name}
                        </h4>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-product-fss-green transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {supplier.description}
                      </p>
                      {supplier.verified && (
                        <div className="flex items-center text-xs text-product-fss-green">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span>Verified Partner</span>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest a Supplier Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-soft p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Missing Something?
              </h2>
              <p className="text-xl text-gray-600">
                Know a great supplier we should feature? Let us know and we&apos;ll review them for inclusion.
              </p>
            </div>
            <EnchargeForm
              formId="066b4cba-033b-423d-a9aa-6c3b7d2fa308"
            />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-brand-navy mb-3">
              Our Selection Process
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kitchen OS maintains this directory as a free resource for the hospitality community. We do not receive
              commissions or affiliate payments from any listed suppliers. All recommendations are based on:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-product-fss-green mr-3 flex-shrink-0 mt-0.5" />
                <span>Reputation and reliability in the hospitality industry</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-product-fss-green mr-3 flex-shrink-0 mt-0.5" />
                <span>Quality of products and services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-product-fss-green mr-3 flex-shrink-0 mt-0.5" />
                <span>Customer support and service standards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-product-fss-green mr-3 flex-shrink-0 mt-0.5" />
                <span>Feedback from Kitchen OS customers and the wider hospitality community</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-6">
              Kitchen OS is not responsible for the products, services, or practices of listed suppliers.
              Please conduct your own due diligence before engaging with any provider.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
