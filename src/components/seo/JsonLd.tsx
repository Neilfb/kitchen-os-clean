/**
 * JSON-LD Schema Markup Components for Kitchen OS
 * Optimized for search engines and AI assistants (ChatGPT, Claude, Perplexity)
 *
 * These components render structured data that helps search engines understand
 * our content and display rich snippets in search results.
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Base JSON-LD component that renders structured data
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization Schema for Kitchen OS company
 * Used on the homepage and footer
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kitchen OS',
    alternateName: 'Kitchen Operating System',
    url: 'https://www.kitchen-os.com',
    logo: 'https://www.kitchen-os.com/assets/KitchenOS-03.png',
    description:
      'Kitchen OS is the operating system for professional kitchens, providing integrated food safety, allergen management, labelling, and waste tracking solutions.',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@kitchen-os.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/KitchenOS',
      'https://www.linkedin.com/company/kitchen-os',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return <JsonLd data={schema} />;
}

/**
 * Product Schema for individual products
 */
interface ProductSchemaProps {
  name: string;
  description: string;
  price: string;
  currency?: string;
  image: string;
  url: string;
  sku?: string;
  brand?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    priceValidUntil?: string;
  };
}

export function ProductSchema({
  name,
  description,
  price,
  currency = 'GBP',
  image,
  url,
  sku,
  aggregateRating,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `https://www.kitchen-os.com${image}`,
    url: `https://www.kitchen-os.com${url}`,
    brand: {
      '@type': 'Brand',
      name: 'Kitchen OS',
    },
    ...(sku && { sku }),
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9.]/g, ''),
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split('T')[0],
      url: `https://www.kitchen-os.com${url}`,
    },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  };

  return <JsonLd data={schema} />;
}

/**
 * FAQ Schema for product pages
 */
interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * BreadcrumbList Schema for navigation
 */
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.kitchen-os.com${item.url}`,
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * Software Application Schema for SaaS products
 */
interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  price: string;
  currency?: string;
  screenshot?: string;
}

export function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem,
  price,
  currency = 'GBP',
  screenshot,
}: SoftwareApplicationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9.]/g, ''),
      priceCurrency: currency,
    },
    ...(screenshot && { screenshot: `https://www.kitchen-os.com${screenshot}` }),
    creator: {
      '@type': 'Organization',
      name: 'Kitchen OS',
    },
  };

  return <JsonLd data={schema} />;
}

/**
 * Service Schema for Kitchen OS services
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider: string;
  areaServed: string;
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  serviceType,
  provider,
  areaServed,
  priceRange,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed,
    ...(priceRange && { priceRange }),
  };

  return <JsonLd data={schema} />;
}

/**
 * WebSite Schema for the main site
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kitchen OS',
    url: 'https://www.kitchen-os.com',
    description:
      'The Operating System for Professional Kitchens - Food safety, allergen management, labelling, and waste tracking in one platform',
    publisher: {
      '@type': 'Organization',
      name: 'Kitchen OS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kitchen-os.com/assets/KitchenOS-03.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.kitchen-os.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLd data={schema} />;
}

/**
 * Review Schema for testimonials
 */
interface ReviewSchemaProps {
  itemName: string;
  reviewBody: string;
  reviewRating: string;
  authorName: string;
  authorJobTitle?: string;
  datePublished?: string;
}

export function ReviewSchema({
  itemName,
  reviewBody,
  reviewRating,
  authorName,
  authorJobTitle,
  datePublished,
}: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: itemName,
      brand: {
        '@type': 'Brand',
        name: 'Kitchen OS',
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody,
    author: {
      '@type': 'Person',
      name: authorName,
      ...(authorJobTitle && { jobTitle: authorJobTitle }),
    },
    ...(datePublished && { datePublished }),
  };

  return <JsonLd data={schema} />;
}
