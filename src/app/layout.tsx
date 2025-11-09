import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/defaultSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { CartProvider } from "@/contexts/CartContext";

// Export metadata using Next.js App Router native metadata API
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        {/* Push Lap Growth Affiliate Tracker (Step 1) */}
        <script
          src="https://pushlapgrowth.com/affiliate-tracker.js"
          data-affiliate
          data-program-id="7bbce14d-c2f8-40b1-8461-f3542b9b4652"
          async
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
