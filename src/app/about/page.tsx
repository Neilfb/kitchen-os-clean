import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Kitchen OS',
  description: 'Learn about Kitchen OS - the professional kitchen management platform built by chefs, for chefs. Our mission, values, and story.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - Kitchen OS',
    description: 'Learn about Kitchen OS - the professional kitchen management platform built by chefs, for chefs. Our mission, values, and story.',
    url: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Built by Chefs, for Chefs',
      description: 'Our founder and team have years of professional kitchen experience. We understand your challenges because we\'ve lived them.',
    },
    {
      icon: Target,
      title: 'No Technical Debt',
      description: 'We build software that works reliably, every day. No workarounds, no temporary fixes - just solid, dependable technology.',
    },
    {
      icon: Heart,
      title: 'Customer Success First',
      description: 'Your success is our success. We\'re here to help you reduce costs, improve compliance, and make your operation more efficient.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Kitchens evolve, and so do we. We constantly improve based on customer feedback and industry best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Kitchen OS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              We&apos;re building the operating system for professional kitchens. One platform for
              food safety, allergen management, labelling, and waste reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Kitchen OS was founded by <strong>Neil Bradley</strong>, a professional chef who spent years
              managing multi-site restaurant operations. Neil experienced firsthand the frustration of
              juggling multiple disconnected systems for temperature monitoring, allergen information,
              date labelling, and waste tracking.
            </p>
            <p>
              Every system required separate logins, different training, and none of them talked to each other.
              More importantly, they were all designed by software companies - not by people who&apos;d actually
              worked in professional kitchens.
            </p>
            <p>
              In 2024, Neil decided to build something better. Kitchen OS started as a simple HACCP monitoring
              tool (Food Safe System) but quickly evolved into a complete kitchen management platform. Today,
              hundreds of kitchens use Kitchen OS to manage food safety, allergen compliance, labelling, and
              waste reduction - all from one integrated system.
            </p>
            <p>
              We&apos;re still a small, focused team. Every feature we build solves a real problem that we or
              our customers have actually experienced. No bloat, no unnecessary complexity - just tools that
              make your kitchen run better.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To make professional kitchen operations safer, more efficient, and more sustainable through
              simple, integrated technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do - from product development to customer support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-product-fss-green-light rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-product-fss-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-product-fss-green-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from Kitchen OS customers across the UK and Europe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-product-fss-green mb-2">£9M+</div>
              <div className="text-xl text-gray-700">Food Waste Saved</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-product-fss-green mb-2">500+</div>
              <div className="text-xl text-gray-700">Kitchens Using Kitchen OS</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-product-fss-green mb-2">2,400</div>
              <div className="text-xl text-gray-700">Tonnes CO2 Saved</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-product-fss-green mb-2">100%</div>
              <div className="text-xl text-gray-700">Inspection Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              A small, dedicated team of chefs, engineers, and customer success specialists.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Neil Bradley</h3>
            <p className="text-xl text-product-fss-green mb-4">Founder & CEO</p>
            <p className="text-gray-700 mb-4">
              Professional chef with 15+ years in hospitality management. Neil has run multi-site
              restaurant operations, managed HACCP compliance, and dealt with every challenge that
              Kitchen OS now solves. He founded Kitchen OS to build the tools he always wished existed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book a demo to see Kitchen OS in action, or start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green text-white font-semibold rounded-lg hover:bg-product-fss-green-dark transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
