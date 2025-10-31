import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for Kitchen OS
 * Optimized for search engines including AI crawlers (ChatGPT, Claude, Perplexity)
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.kitchen-os.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/builder/', // Builder.io preview pages
          '/login',
          '/signup',
          '/*?*', // Disallow query parameters to avoid duplicate content
        ],
      },
      // Explicitly allow AI search engine bots
      {
        userAgent: 'GPTBot', // OpenAI ChatGPT
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user agent
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by many AI systems)
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Claude web crawler
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google AI/ML
        allow: '/',
      },
      // Standard search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
