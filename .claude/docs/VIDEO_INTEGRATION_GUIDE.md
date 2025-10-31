# Video Integration Guide - Kitchen OS

**Status:** Ready to Implement
**Component:** `HeroVideo.tsx` ✅ Created
**Footage:** Free stock videos from Pexels

---

## 📹 Stock Video Sources (FREE - Commercial Use)

### Recommended Videos from Pexels

All videos below are **FREE for commercial use** with no attribution required.

#### Option 1: Busy Restaurant Kitchen (RECOMMENDED)
**Video:** Chefs Working in Commercial Kitchen
**URL:** https://www.pexels.com/video/chefs-working-in-a-commercial-kitchen-3195440/
**Duration:** 13 seconds (perfect for looping)
**Resolution:** 1920x1080 (Full HD)
**Why:** Shows professional kitchen operations, multiple chefs, dynamic movement
**File size:** ~5MB (will need compression to 1-3MB)

#### Option 2: Chef Cooking in Kitchen
**URL:** https://www.pexels.com/video/a-chef-cooking-in-the-kitchen-3196178/
**Duration:** 11 seconds
**Resolution:** 1920x1080
**Why:** Close-up of professional cooking, high-quality production
**File size:** ~4MB

#### Option 3: Restaurant Kitchen Preparation
**URL:** https://www.pexels.com/video/chef-preparing-food-in-a-restaurant-kitchen-3205571/
**Duration:** 10 seconds
**Resolution:** 1920x1080
**Why:** Shows food preparation, professional environment
**File size:** ~3.5MB

#### Option 4: Commercial Kitchen Wide Shot
**URL:** https://www.pexels.com/video/food-preparation-in-commercial-kitchen-4253312/
**Duration:** 15 seconds
**Resolution:** 1920x1080
**Why:** Wide angle showing scale of operations
**File size:** ~6MB (needs compression)

### Alternative Source: Pixabay
**URL:** https://pixabay.com/videos/search/restaurant%20kitchen/
**License:** Free for commercial use
**Similar videos** available if Pexels links don't work

---

## 🎬 How to Download & Prepare Videos

### Step 1: Download from Pexels

1. Visit one of the URLs above
2. Click the **"Free Download"** button
3. Select **"Full HD (1920x1080)"** option
4. Save to your computer

### Step 2: Optimize Video (CRITICAL for Performance)

Videos from Pexels are 4-6MB. We need **1-3MB** for web use.

#### Option A: Online Tool (Easiest)
**Use:** https://www.freeconvert.com/video-compressor

1. Upload your video
2. Set **Target size:** 2MB
3. Keep resolution: 1920x1080
4. Click "Compress Video"
5. Download optimized file

#### Option B: FFmpeg Command (Best Quality)
If you have FFmpeg installed:

```bash
ffmpeg -i input.mp4 \
  -vcodec h264 \
  -acodec aac \
  -movflags +faststart \
  -vf scale=1920:1080 \
  -b:v 1M \
  -preset slow \
  -pix_fmt yuv420p \
  output.mp4
```

**What this does:**
- `-b:v 1M` = Target 1Mbps bitrate (results in ~1-2MB file)
- `-preset slow` = Better compression (smaller file, same quality)
- `-movflags +faststart` = Enables streaming (video plays while loading)
- `-pix_fmt yuv420p` = Max browser compatibility

#### Option C: HandBrake (Free Desktop App)
**Download:** https://handbrake.fr/

1. Open HandBrake
2. Load your video
3. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
4. Adjust quality slider to get ~2MB file size
5. Start encode

### Step 3: Create Poster Image

Extract a frame from the video to use as poster/fallback:

#### Online Tool (Easiest):
**Option 1:** https://www.media.io/video-to-image-converter.html
**Option 2:** https://www.kapwing.com/tools/video-to-image

1. Upload your video
2. Choose a frame (around 3-5 seconds in)
3. Download as JPG
4. Optimize at https://tinyjpg.com/ (reduce to ~50-100KB)

#### Screenshot Method (Quick & Free):
1. Play the video locally (double-click the MP4 file)
2. Pause at a good frame (3-5 seconds in)
3. Take a screenshot (Mac: Cmd+Shift+4, Windows: Win+Shift+S)
4. Save as JPG and compress at https://tinyjpg.com/

#### FFmpeg Command (If installed):
```bash
ffmpeg -i input.mp4 -ss 00:00:03 -vframes 1 -q:v 2 poster.jpg
```

### Step 4: Add to Project

Place files in:
```
/public/assets/videos/
  ├── kitchen-hero.mp4 (optimized video, 1-3MB)
  └── kitchen-hero-poster.jpg (poster image, 50-100KB)
```

---

## 🚀 Integration Instructions

### Homepage Hero Video

**File:** `/src/app/page.tsx`

**Current code (lines 123-204):**
```tsx
<section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark text-white overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-96 h-96 bg-product-fss-green rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-product-allerq-orange rounded-full blur-3xl"></div>
  </div>
  {/* ... rest of hero content ... */}
</section>
```

**Replace with:**
```tsx
import { HeroVideo } from '@/components/HeroVideo';

<section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0">
    <HeroVideo
      src="/assets/videos/kitchen-hero.mp4"
      poster="/assets/videos/kitchen-hero-poster.jpg"
      alt="Professional kitchen operations"
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/60"></div>
  </div>

  {/* Content (stays the same, just make it relative) */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    {/* All your existing hero content */}
  </div>
</section>
```

**Full Implementation:**
```tsx
{/* Hero Section with Video */}
<section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0">
    <HeroVideo
      src="/assets/videos/kitchen-hero.mp4"
      poster="/assets/videos/kitchen-hero-poster.jpg"
      alt="Professional kitchen operations"
      showControls={false}
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/60"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Hero Content */}
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <span className="text-sm font-semibold text-product-fss-green">
            Trusted by 500+ Professional Kitchens
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          The Operating System for
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-product-fss-green to-product-allerq-orange">
            Professional Kitchens
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          One intelligent platform for food safety, allergen management, labelling, and waste tracking.
          Save time, reduce costs, and never fail an inspection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-product-fss-green text-white font-bold rounded-xl hover:bg-product-fss-green-dark transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/20"
          >
            View Pricing
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-product-fss-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Remove or keep floating card */}
      <div className="relative hidden lg:block">
        {/* Floating Card (optional - video provides visual interest) */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center mb-3">
            <CheckCircle className="w-6 h-6 text-product-fss-green mr-2" />
            <span className="text-sm font-semibold text-white">
              100% Compliance Rate
            </span>
          </div>
          <p className="text-sm text-gray-300">
            Every Kitchen OS customer passes health inspections with confidence
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 Optional: Product Page Videos

If you want videos on product pages too, download product-specific footage:

### Food Safe System
**Search:** "restaurant temperature check" OR "food safety inspection"
**URL:** https://www.pexels.com/search/videos/food%20safety/

### AllerQ
**Search:** "restaurant customer dining" OR "waiter serving food"
**URL:** https://www.pexels.com/search/videos/restaurant%20service/

### Food Label System
**Search:** "food labeling" OR "kitchen food prep"
**URL:** https://www.pexels.com/search/videos/food%20preparation/

### F*** Waste
**Search:** "fresh vegetables" OR "food waste"
**URL:** https://www.pexels.com/search/videos/fresh%20produce/

---

## 🧪 Testing Checklist

After implementation:

### Desktop Testing
- [ ] Video plays automatically on desktop
- [ ] Video is muted
- [ ] Video loops seamlessly
- [ ] Text is readable over video (gradient overlay works)
- [ ] Page loads within 3 seconds
- [ ] Video doesn't cause layout shift

### Mobile Testing
- [ ] Poster image shows on mobile (not video)
- [ ] Page loads quickly on mobile
- [ ] Text is readable
- [ ] No "play" button appears on mobile

### Accessibility Testing
- [ ] Video pauses if user has "prefers-reduced-motion" enabled
- [ ] Poster image shows if JavaScript is disabled
- [ ] Video has proper `aria-label`
- [ ] Keyboard users can pause video (if controls enabled)

### Performance Testing
```bash
# Check file sizes
ls -lh public/assets/videos/

# Should see:
# kitchen-hero.mp4: 1-3MB
# kitchen-hero-poster.jpg: 50-100KB
```

---

## 📊 Expected Performance Impact

### Before Video
- Homepage load: ~800ms
- First Load JS: 102 kB

### After Video (Optimized)
- Homepage load: ~1.2-1.5s (+400-700ms)
- First Load JS: 102 kB (unchanged)
- Video load: Progressive (plays while downloading)

### Mobile Performance
- **No impact** - mobile shows poster image only
- Poster image: +50-100KB (negligible)

---

## 🛠️ Troubleshooting

### Video Won't Play

**Check 1: File format**
```bash
ffmpeg -i your-video.mp4
# Should show: Video: h264, Audio: aac
```

**Check 2: File size**
```bash
ls -lh public/assets/videos/kitchen-hero.mp4
# Should be 1-3MB, not 20MB+
```

**Check 3: Browser console**
Open DevTools → Console, look for errors

**Common fixes:**
- Re-encode with `-movflags +faststart`
- Ensure video is in `/public/assets/videos/`
- Clear Next.js cache: `rm -rf .next && npm run build`

### Video Causes Layout Shift

**Fix:** Add explicit height to section:
```tsx
<section className="relative min-h-[600px] lg:min-h-[700px]">
```

### Video Performance Issues

**Optimization checklist:**
- ✅ File size under 3MB
- ✅ Resolution 1920x1080 (not 4K)
- ✅ Bitrate ~1Mbps
- ✅ H.264 codec
- ✅ `movflags +faststart` enabled
- ✅ Mobile shows poster only

---

## 📋 Quick Start Checklist

Ready to implement? Follow these steps:

### 1. Download Video (5 minutes)
- [ ] Visit Pexels link (Option 1 recommended)
- [ ] Download Full HD version
- [ ] Save to desktop

### 2. Optimize Video (10 minutes)
- [ ] Use online compressor OR FFmpeg
- [ ] Target 2MB file size
- [ ] Test that it plays locally
- [ ] Extract poster frame
- [ ] Optimize poster image

### 3. Add to Project (2 minutes)
- [ ] Create `/public/assets/videos/` directory
- [ ] Copy `kitchen-hero.mp4` to directory
- [ ] Copy `kitchen-hero-poster.jpg` to directory

### 4. Update Homepage (5 minutes)
- [ ] Add `import { HeroVideo } from '@/components/HeroVideo';`
- [ ] Replace hero section code (see above)
- [ ] Save file

### 5. Test (5 minutes)
- [ ] Run `npm run build`
- [ ] Run `npm start`
- [ ] Visit http://localhost:3000
- [ ] Check desktop (video plays)
- [ ] Check mobile (poster shows)
- [ ] Check console for errors

**Total time: ~30 minutes**

---

## 🎯 Next Steps After Video

Once video is working:

1. **Consider product page videos** (optional)
2. **Run Lighthouse audit** (should still score 90+)
3. **Test on real mobile devices**
4. **Monitor performance in Vercel Analytics**

---

## 💡 Pro Tips

### Video Selection
- **Avoid:** Videos with text overlays
- **Choose:** 10-15 second clips for seamless loops
- **Look for:** Dynamic movement, multiple people, professional setting
- **Check:** Video doesn't start/end abruptly (good for looping)

### Performance
- **Lazy load** videos below fold: `loading="lazy"`
- **Preload poster** image for LCP: `fetchpriority="high"`
- **Monitor Core Web Vitals** in Vercel Analytics

### Accessibility
- **Never autoplay with sound** (bad UX, banned in many browsers)
- **Always provide poster** for fallback
- **Respect prefers-reduced-motion** (HeroVideo does this automatically)

---

## 📞 Need Help?

If you run into issues:

1. **Check file paths** - video in `/public/assets/videos/`?
2. **Check file size** - under 3MB?
3. **Check browser console** - any errors?
4. **Test build** - `npm run build` passes?

**Common issue:** "Video won't play on iOS"
**Fix:** Ensure `playsInline` attribute is present (HeroVideo includes this)

---

**Ready to implement?** Start with Step 1: Download video! 🎬
