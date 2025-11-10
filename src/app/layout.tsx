import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/defaultSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { CartProvider } from "@/contexts/CartContext";
import Release0Widget from "@/components/chatbot/Release0Widget";

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
          {/* Release0 AI Chatbot - Conversational lead capture & product discovery */}
          <Release0Widget
            mode="bubble"
            position="bottom-right"
            primaryColor="#00A651"
            showGreeting={true}
            greetingMessage="Hi! 👋 I'm the Kitchen OS AI assistant. How can I help you today?"
          />
        </CartProvider>
      </body>
    </html>
  );
}
