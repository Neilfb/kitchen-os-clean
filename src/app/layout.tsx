import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/defaultSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import { CartProvider } from "@/contexts/CartContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Release0Widget from "@/components/chatbot/Release0Widget";
import GrainAnalytics from "@/components/GrainAnalytics";
import { getExchangeRates } from "@/lib/currency";
import { cookies } from "next/headers";
import type { Currency } from "@/types/currency";

// Export metadata using Next.js App Router native metadata API
export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch exchange rates server-side (cached for 24 hours)
  const exchangeRates = await getExchangeRates();

  // Get preferred currency from cookie
  const cookieStore = await cookies();
  const preferredCurrency = cookieStore.get('preferred_currency')?.value as Currency || 'GBP';

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
        {/* Encharge Site Tracking */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.EncTracking||!window.EncTracking.started){window.EncTracking=Object.assign({}, window.EncTracking, {queue:window.EncTracking&&window.EncTracking.queue?window.EncTracking.queue:[],track:function(t){this.queue.push({type:"track",props:t})},identify:function(t){this.queue.push({type:"identify",props:t})},started:!0});var t=window.EncTracking;t.writeKey="vPyFR9a5FyuvV1sm5FPEuTUWh",t.hasOptedIn=true,t.shouldGetConsent=true,t.hasOptedIn&&(t.shouldGetConsent=!1),t.optIn=function(){t.hasOptedIn=!0,t&&t.init&&t.init()},t.optOut=function(){t.hasOptedIn=!1,t&&t.setOptOut&&t.setOptOut(!0)};var n=function(t){var n=document.createElement("script");n.type="text/javascript",n.async=void 0===t||t,n.src="https://resources-app.encharge.io/encharge-tracking.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};"complete"===document.readyState?n():window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}();`,
          }}
        />
        {/* Encharge Form Embed Script */}
        <script
          type="text/javascript"
          src="https://resources-app.encharge.io/embed-production.min.js"
          async
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <CurrencyProvider
          initialCurrency={preferredCurrency}
          initialRates={exchangeRates.rates}
          initialRatesDate={exchangeRates.date}
        >
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            {/* Grain Analytics - Web analytics */}
            <GrainAnalytics />
            {/* Release0 AI Chatbot - Conversational lead capture & product discovery */}
            <Release0Widget
              mode="bubble"
              position="bottom-right"
              primaryColor="#00A651"
              showGreeting={true}
              greetingMessage="Hi! 👋 I'm the Kitchen OS AI assistant. How can I help you today?"
            />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
