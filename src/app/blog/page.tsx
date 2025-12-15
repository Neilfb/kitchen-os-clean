/**
 * Blog Listing Page
 *
 * Displays all blog posts with filtering by category and search functionality.
 * Full SEO optimization with metadata and JSON-LD schema.
 */

import type { Metadata } from 'next';
import { BlogListingClient } from './BlogListingClient';
import { BLOG_CATEGORIES } from '@/data/blogPosts';
import { fetchAllBlogPosts } from '@/lib/builderBlog';
import { WebSiteSchema, OrganizationSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Blog - Kitchen OS | Food Safety, Waste Reduction & Kitchen Operations',
  description:
    'Expert insights on food safety, waste reduction, HACCP compliance, and commercial kitchen operations. Learn from Kitchen OS industry specialists.',
  keywords: [
    'commercial kitchen blog',
    'food safety tips',
    'waste reduction strategies',
    'HACCP compliance',
    'kitchen operations',
    'food labeling',
    'allergen management',
    'restaurant technology',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Kitchen OS Blog - Expert Insights for Commercial Kitchens',
    description:
      'Expert insights on food safety, waste reduction, and kitchen operations from Kitchen OS specialists.',
    url: 'https://kitchen-os.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://kitchen-os.com/assets/KitchenOS-01.png',
        width: 1200,
        height: 630,
        alt: 'Kitchen OS Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen OS Blog - Expert Insights for Commercial Kitchens',
    description:
      'Expert insights on food safety, waste reduction, and kitchen operations.',
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await fetchAllBlogPosts();

  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <BlogListingClient posts={posts} categories={BLOG_CATEGORIES} />
    </>
  );
}
