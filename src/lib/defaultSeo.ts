import type { Metadata } from "next";

/**
 * Default metadata configuration for Kitchen OS site
 * Compatible with Next.js App Router metadata API
 * Optimized for search engines and AI assistants (ChatGPT, Claude, Perplexity)
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://www.kitchen-os.com"),
  title: {
    default: "Kitchen OS – The Operating System for Professional Kitchens",
    template: "%s | Kitchen OS",
  },
  description:
    "Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform. Trusted by 500+ professional kitchens.",
  keywords: [
    "kitchen management software",
    "restaurant management system",
    "food safety software",
    "HACCP software",
    "allergen management",
    "food labeling system",
    "food waste tracking",
    "restaurant technology",
    "commercial kitchen software",
    "hospitality management",
    "temperature monitoring",
    "digital allergen menus",
    "kitchen compliance software",
  ],
  authors: [{ name: "Kitchen OS" }],
  creator: "Kitchen OS",
  publisher: "Kitchen OS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Kitchen OS",
    title: "Kitchen OS – The Operating System for Professional Kitchens",
    description:
      "Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform. Trusted by 500+ professional kitchens.",
    images: [
      {
        url: "/assets/KitchenOS-03.png",
        width: 1200,
        height: 630,
        alt: "Kitchen OS Platform - The Operating System for Professional Kitchens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KitchenOS",
    creator: "@KitchenOS",
    title: "Kitchen OS – The Operating System for Professional Kitchens",
    description:
      "Transform your kitchen operations with Kitchen OS. Food safety, allergen management, labelling, and waste tracking in one intelligent platform.",
    images: ["/assets/KitchenOS-03.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // Add your verification tokens when available
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
    // bing: 'your-bing-verification-token',
  },
  category: "technology",
};
