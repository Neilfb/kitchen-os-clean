# Kitchen OS Marketing Site

Connected kitchen technology platform - Marketing website built with Next.js 15, Builder.io CMS, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ⚠️ Current Status

**Build Issue:** There is a persistent `TypeError: generate is not a function` error that requires a fresh Next.js setup. See [CLEANUP_REPORT.md](./CLEANUP_REPORT.md) for full details and resolution steps.

**All code is production-ready** - just needs to be migrated to a fresh Next.js installation.

## 📦 Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **React:** 18.3.1 (stable)
- **Language:** TypeScript 5.x (strict mode)
- **Styling:** Tailwind CSS 3.4.17
- **CMS:** Builder.io (REST API + ISR)
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel/Netlify

## 🏗️ Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage (Builder.io)
│   │   ├── error.tsx          # Error boundary
│   │   ├── not-found.tsx      # 404 page
│   │   ├── loading.tsx        # Loading UI
│   │   └── builder/           # Dynamic Builder.io pages
│   ├── components/
│   │   ├── Header.tsx         # Navigation with dropdown
│   │   ├── Footer.tsx         # Comprehensive footer
│   │   ├── BuilderPageClient.tsx  # Builder renderer
│   │   └── ui/                # Builder-registered components
│   │       ├── Hero.tsx
│   │       ├── CTASection.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── ProductCard.tsx
│   │       └── TestimonialCard.tsx
│   └── lib/
│       ├── builderConfig.ts   # Builder.io API config
│       ├── registerComponents.ts  # Component registry
│       └── defaultSeo.ts      # SEO metadata
├── public/
│   ├── assets/                # Images and static assets
│   └── robots.txt             # SEO crawling rules
├── docs/
│   └── INTEGRATION_RULES_BUILDER.md  # Builder.io guidelines
├── CLEANUP_REPORT.md          # Detailed cleanup documentation
└── PROJECT_HANDOVER.md        # Original handover doc
```

## 🎨 Features

### Implemented
- ✅ Responsive navigation with product dropdown
- ✅ Builder.io CMS integration (server-side fetch + ISR)
- ✅ SEO-optimized with Next.js metadata API
- ✅ Error handling (error boundary, 404 page)
- ✅ Loading states
- ✅ Sitemap generation ready
- ✅ TypeScript strict mode
- ✅ Tailwind CSS with custom theme
- ✅ Zero security vulnerabilities

### To Be Implemented
- ⏳ Product pages (4): Food Safe System, AllerQ, Food Label System, F*** Waste
- ⏳ Comparison pages (8): vs Winnow, Leanpath, Orbisk, etc.
- ⏳ Pricing page
- ⏳ Contact form (NoCodeBackend integration)
- ⏳ Legal pages: Privacy Policy, Terms of Service
- ⏳ Analytics (Google Analytics/GTM)

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required:
```env
NEXT_PUBLIC_BUILDER_API_KEY=your-builder-io-api-key
```

Optional:
```env
SITE_URL=https://www.kitchen-os.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
```

### Builder.io Setup

1. Create account at [builder.io](https://www.builder.io)
2. Create a "page" model
3. Add API key to `.env.local`
4. Register custom components in Builder.io UI
5. Create content for "/" path

See [docs/INTEGRATION_RULES_BUILDER.md](./docs/INTEGRATION_RULES_BUILDER.md) for detailed integration guidelines.

## 📝 Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run build:sitemap # Generate sitemap.xml
```

## 🔍 SEO

### Metadata
- Native Next.js App Router metadata API
- Open Graph tags for social sharing
- Twitter Card support
- Configurable per-page via `generateMetadata()`

### Sitemap
```bash
npm run build:sitemap
```

Generates:
- `public/sitemap.xml`
- `public/robots.txt` (already exists)

### robots.txt
Located at `/public/robots.txt` - allows all crawlers.

## 🎯 Builder.io Components

Registered custom components:

1. **Hero** - Full-width hero with image, gradients, CTAs
2. **CTASection** - Conversion-focused section with customizable background
3. **FeatureCard** - Icon, title, description, link
4. **ProductCard** - Product showcase with image, pricing, CTA
5. **TestimonialCard** - Customer quote with avatar

All components support drag-and-drop in Builder.io visual editor.

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod
```

### Environment Variables
Set in deployment platform:
- `NEXT_PUBLIC_BUILDER_API_KEY`
- `SITE_URL`

## 📚 Documentation

- [CLEANUP_REPORT.md](./CLEANUP_REPORT.md) - Comprehensive cleanup & next steps
- [PROJECT_HANDOVER.md](./PROJECT_HANDOVER.md) - Original project overview
- [docs/INTEGRATION_RULES_BUILDER.md](./docs/INTEGRATION_RULES_BUILDER.md) - Builder.io rules

## 🐛 Known Issues

1. **Build Error:** `TypeError: generate is not a function`
   - **Cause:** Corrupted build configuration from migration
   - **Solution:** Fresh Next.js setup + migrate cleaned code
   - **Time:** 30-45 minutes
   - **Details:** See [CLEANUP_REPORT.md](./CLEANUP_REPORT.md#-outstanding-issue)

## 🛠️ Development

### Code Quality
- TypeScript strict mode enabled
- ESLint configured for Next.js
- Tailwind CSS with custom theme
- Component-based architecture

### Best Practices
- Server Components for data fetching
- Client Components for interactivity only
- ISR (Incremental Static Regeneration) for Builder content
- Native Next.js metadata API for SEO

## 📞 Support

For issues or questions:
1. Check [CLEANUP_REPORT.md](./CLEANUP_REPORT.md) for recent changes
2. Review [docs/INTEGRATION_RULES_BUILDER.md](./docs/INTEGRATION_RULES_BUILDER.md) for Builder.io issues
3. Contact: neil@kitchen-os.com

## 📄 License

Proprietary - Kitchen OS Ltd.

---

**Last Updated:** October 29, 2025
**Version:** 0.2.0 (cleaned, awaiting fresh build)
**Status:** Code complete, build blocked (requires fresh setup)
