# Quick Start - Add Video to Homepage

**Status:** ✅ Code is ready! Just need to add video files.
**Time:** 15-20 minutes

---

## 🎬 Step 1: Download Video (5 min)

### Recommended Video (Best Option)
**Pexels - Chefs Working in Commercial Kitchen**
📹 https://www.pexels.com/video/chefs-working-in-a-commercial-kitchen-3195440/

1. Click the link above
2. Click **"Free Download"** button
3. Select **"Full HD (1920x1080)"**
4. Save to your computer

**Alternative if link doesn't work:**
- Search "restaurant kitchen" on https://www.pexels.com/videos/
- Choose any 10-15 second clip
- Download Full HD version

---

## ⚡ Step 2: Optimize Video (10 min)

The downloaded video is ~5MB. We need it to be 1-3MB for fast loading.

### Option A: Online Tool (Easiest)
1. Go to: https://www.freeconvert.com/video-compressor
2. Upload your downloaded video
3. Set **Target size: 2MB**
4. Click "Compress Video"
5. Download the compressed file
6. Rename it to: `kitchen-hero.mp4`

### Option B: Use FFmpeg (If you have it installed)
```bash
ffmpeg -i downloaded-video.mp4 \
  -vcodec h264 \
  -b:v 1M \
  -movflags +faststart \
  public/assets/videos/kitchen-hero.mp4
```

---

## 🖼️ Step 3: Create Poster Image (5 min)

You need a still image from the video as a fallback.

### Option A: Online Tool (Easiest)
1. Go to: https://www.media.io/video-to-image-converter.html
2. Upload your video
3. Choose a frame from around 3-5 seconds
4. Download as JPG
5. Go to: https://tinyjpg.com/
6. Upload the JPG to compress it
7. Download and rename to: `kitchen-hero-poster.jpg`

**Alternative tool:** https://www.kapwing.com/tools/video-to-image

### Option B: Screenshot Method (Quick & Free)
1. Play the video locally (double-click the MP4 file)
2. Pause at a good frame (3-5 seconds in)
3. Take a screenshot (Mac: Cmd+Shift+4, Windows: Win+Shift+S)
4. Save as JPG
5. Compress at https://tinyjpg.com/
6. Rename to: `kitchen-hero-poster.jpg`

### Option C: FFmpeg (If installed)
```bash
ffmpeg -i kitchen-hero.mp4 -ss 00:00:03 -vframes 1 -q:v 2 public/assets/videos/kitchen-hero-poster.jpg
```

---

## 📁 Step 4: Add Files to Project (1 min)

Place both files in this directory:
```
/public/assets/videos/
  ├── kitchen-hero.mp4 (1-3MB)
  └── kitchen-hero-poster.jpg (50-150KB)
```

**From your terminal:**
```bash
# Copy your files (adjust paths as needed)
cp ~/Downloads/kitchen-hero.mp4 public/assets/videos/
cp ~/Downloads/kitchen-hero-poster.jpg public/assets/videos/
```

**Or drag and drop:**
- Open Finder
- Navigate to your project folder
- Go to `public/assets/videos/`
- Drag both files into that folder

---

## ✅ Step 5: Test (2 min)

```bash
# Build the site
npm run build

# Start the server
npm start

# Open in browser
# Go to: http://localhost:3000
```

**What to check:**
- ✅ Video plays automatically on desktop
- ✅ Video is muted (no sound)
- ✅ Video loops smoothly
- ✅ Text is readable over video
- ✅ On mobile: poster image shows (not video)

---

## 🎯 Done!

Your homepage now has a dynamic video background! 🎉

**Next steps:**
- Deploy to Vercel (video will work automatically)
- Monitor performance in Vercel Analytics
- Consider adding videos to product pages (optional)

---

## 🔧 Troubleshooting

### Video won't play
**Check:** Is the file in the right location?
```bash
ls -lh public/assets/videos/
# Should show both files
```

**Check:** Is the file size reasonable?
```bash
# Should be 1-3MB for video, 50-150KB for poster
```

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Video plays but looks bad
- Re-compress with higher quality (target 3MB instead of 2MB)
- Ensure original video is 1920x1080

---

## 📊 File Sizes

**Target:**
- `kitchen-hero.mp4`: 1-3MB
- `kitchen-hero-poster.jpg`: 50-150KB

**Too large?**
- Video > 5MB: Will slow down page load significantly
- Poster > 500KB: Will slow down initial render

**Re-compress if needed!**

---

## 🎨 Current State

**What's already done:**
- ✅ HeroVideo component created
- ✅ Homepage updated to use video
- ✅ Mobile fallback configured (shows poster only)
- ✅ Accessibility features included
- ✅ Build tested and passing

**What you need to do:**
- [ ] Download video from Pexels
- [ ] Compress to 2MB
- [ ] Create poster image
- [ ] Add files to `/public/assets/videos/`
- [ ] Test locally
- [ ] Deploy!

**Estimated time: 15-20 minutes**
