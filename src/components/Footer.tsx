import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const productLinks = [
    { name: 'Food Safe System', href: '/food-safe-system', website: 'https://www.foodsafesystem.com' },
    { name: 'AllerQ', href: '/allerq', website: 'https://allerq.com' },
    { name: 'Food Label System', href: '/food-label-system', website: 'https://foodlabelsystem.com' },
    { name: 'F*** Waste', href: '/f-waste', website: 'https://f-waste.com' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const comparisonLinks = [
    { name: 'Food Safe System vs Trailapp', href: '/compare/trailapp' },
    { name: 'Food Safe System vs Navitas', href: '/compare/navitas' },
    { name: 'Food Safe System vs Kelsius', href: '/compare/kelsius' },
    { name: 'Food Safe System vs Chomp', href: '/compare/chomp' },
    { name: 'Food Label System vs Labl.it', href: '/compare/lablit' },
    { name: 'F*** Waste vs Winnow', href: '/compare/winnow' },
    { name: 'F*** Waste vs Leanpath', href: '/compare/leanpath' },
    { name: 'F*** Waste vs Orbisk', href: '/compare/orbisk' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/KitchenOS', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/kitchen-os', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/kitchenos', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@kitchenos', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark border-t-4 border-product-fss-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-allerq-orange rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <img
                src="/assets/KitchenOS-03.png"
                alt="Kitchen OS"
                className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-white/80 mb-8 max-w-md leading-relaxed">
              The operating system for professional kitchens. One platform for food safety, allergen management, labeling, and waste tracking.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white hover:bg-product-fss-green/30 transition-all rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-product-fss-green/50 touch-target"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href} className="space-y-1">
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:text-white"
                  >
                    {link.name}
                  </Link>
                  <a
                    href={link.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/50 hover:text-white/80 text-sm transition-colors"
                  >
                    Visit website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Compare</h3>
            <ul className="space-y-3">
              {comparisonLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Kitchen OS. All rights reserved.
          </p>
          <p className="text-white/60 font-medium">
            Built for chefs who give a f*** about excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
