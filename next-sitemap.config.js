/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kitchen-os.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/api/*', '/login', '/signup'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/login', '/signup'],
      },
    ],
    additionalSitemaps: [
      'https://www.kitchen-os.com/server-sitemap.xml',
    ],
  },
};
