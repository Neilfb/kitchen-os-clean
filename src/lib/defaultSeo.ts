import type { Metadata } from "next";

/**
 * Default metadata configuration for Kitchen OS site
 * Compatible with Next.js App Router metadata API
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://www.kitchen-os.com"),
  title: {
    default: "Kitchen OS – Connected Kitchen Technology",
    template: "%s | Kitchen OS",
  },
  description:
    "Kitchen OS connects food safety, labeling, allergen management and waste tracking into one intuitive platform built for modern food businesses.",
  keywords: [
    "kitchen management",
    "food safety",
    "allergen management",
    "food labeling",
    "waste tracking",
    "restaurant technology",
    "commercial kitchen software",
  ],
  authors: [{ name: "Kitchen OS" }],
  creator: "Kitchen OS",
  publisher: "Kitchen OS",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Kitchen OS",
    title: "Kitchen OS – Connected Kitchen Technology",
    description:
      "Kitchen OS connects food safety, labeling, allergen management and waste tracking into one intuitive platform built for modern food businesses.",
    images: [
      {
        url: "/assets/KitchenOS-03.png",
        width: 1200,
        height: 630,
        alt: "Kitchen OS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KitchenOS",
    creator: "@KitchenOS",
    title: "Kitchen OS – Connected Kitchen Technology",
    description:
      "Kitchen OS connects food safety, labeling, allergen management and waste tracking into one intuitive platform built for modern food businesses.",
    images: ["/assets/KitchenOS-03.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens when available
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  },
};
