'use client';

import { Builder } from '@builder.io/react';
import Hero from '@/components/ui/Hero';
import CTASection from '@/components/ui/CTASection';
import FeatureCard from '@/components/ui/FeatureCard';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCard from '@/components/ui/TestimonialCard';

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'headline', type: 'text', defaultValue: 'Connected Kitchens, Simplified' },
    { name: 'title', type: 'text' },
    {
      name: 'subheadline',
      type: 'longText',
      defaultValue:
        'Kitchen OS links food safety, allergen management, smart labeling, and waste tracking into one intuitive platform built for modern food businesses.',
    },
    { name: 'subtitle', type: 'longText' },
    { name: 'primaryCTA', type: 'text', defaultValue: 'Talk to our team' },
    { name: 'primaryLink', type: 'url', defaultValue: '/contact' },
    { name: 'secondaryCTA', type: 'text' },
    { name: 'secondaryLink', type: 'url' },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'url' },
    {
      name: 'backgroundGradient',
      type: 'text',
      helperText: 'Tailwind gradient classes, e.g. from-brand-navy to-brand-navy',
    },
    {
      name: 'gradient',
      type: 'boolean',
      helperText: 'Enable gradient background (defaults to true)',
      defaultValue: true,
    },
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'png', 'svg', 'webp'] },
  ],
});

Builder.registerComponent(CTASection, {
  name: 'CTASection',
  inputs: [
    { name: 'headline', type: 'text', defaultValue: 'Ready to connect your kitchen?' },
    { name: 'title', type: 'text' },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'End-to-end compliance, monitoring, and automation for modern food businesses.',
    },
    { name: 'buttonText', type: 'text', defaultValue: 'Book a Demo' },
    { name: 'buttonLink', type: 'url', defaultValue: '/contact' },
    { name: 'primaryCTA', type: 'text' },
    { name: 'primaryLink', type: 'url' },
    { name: 'secondaryCTA', type: 'text' },
    { name: 'secondaryLink', type: 'url' },
    { name: 'backgroundColor', type: 'color', defaultValue: '#091C35' },
  ],
});

Builder.registerComponent(FeatureCard, {
  name: 'FeatureCard',
  inputs: [
    { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'webp'] },
    { name: 'title', type: 'text', defaultValue: 'Smart Monitoring' },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'Automate compliance and monitor your kitchen in real time with cloud alerts.',
    },
    { name: 'linkText', type: 'text', defaultValue: 'Learn More' },
    { name: 'linkUrl', type: 'url', defaultValue: '/products' },
  ],
});

Builder.registerComponent(ProductCard, {
  name: 'ProductCard',
  inputs: [
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'png', 'svg', 'webp'] },
    { name: 'name', type: 'text', defaultValue: 'Food Safe System' },
    { name: 'title', type: 'text' },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'Digitize HACCP logs and keep every site compliant without paper checklists.',
    },
    { name: 'price', type: 'text', defaultValue: 'From £22.50/month' },
    { name: 'buttonText', type: 'text', defaultValue: 'See Details' },
    { name: 'buttonLink', type: 'url', defaultValue: '/products/food-safe-system' },
  ],
});

Builder.registerComponent(TestimonialCard, {
  name: 'TestimonialCard',
  inputs: [
    {
      name: 'quote',
      type: 'longText',
      defaultValue:
        'Kitchen OS transformed how we run our kitchen — everything just works seamlessly.',
    },
    { name: 'author', type: 'text', defaultValue: 'Chef Neil Bradley' },
    { name: 'role', type: 'text', defaultValue: 'Founder, Kitchen OS' },
    { name: 'company', type: 'text', defaultValue: 'Kitchen OS' },
    { name: 'avatar', type: 'file', allowedFileTypes: ['jpeg', 'png', 'webp'] },
  ],
});
