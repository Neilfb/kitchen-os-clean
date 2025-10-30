# Kitchen OS Clean - Strategic Project Plan

**Created:** October 30, 2025
**Status:** Deployment successful but styling/layout broken
**Approach:** Systematic diagnosis and implementation (not whack-a-mole)

---

## Current Situation

### ✅ What's Working
- Vercel deployment succeeds
- Build passes all checks
- Site is live and accessible
- React components render
- No console errors (presumably)

### ❌ What's Broken
- No styling/layout visible
- Tailwind CSS not loading/applying
- Header/Footer may not be rendering correctly

### 🔍 Root Cause Analysis Needed
Rather than fix symptoms, we need to understand WHY styling isn't working.

---

## Phase 1: Comprehensive Diagnosis (15-20 minutes)

### Step 1.1: Visual Inspection
**Action:** User provides screenshots showing:
1. Homepage as currently deployed
2. Browser DevTools Console (any errors?)
3. Network tab (is CSS loading?)
4. Elements inspector (are Tailwind classes present in HTML?)

**What This Tells Us:**
- If Tailwind classes are in HTML but not styled → PostCSS/config issue
- If Tailwind classes missing from HTML → Component rendering issue
- If CSS file not loading → Build output issue
- If console errors → Runtime issue

### Step 1.2: Build Output Analysis
**Action:** Check what was actually built and deployed
```bash
# Locally check build output
cd /Users/neilbradley/Documents/kitchen-os-clean
npm run build
# Check .next/static/css/ for generated CSS files
ls -la .next/static/css/
```

**What This Tells Us:**
- If CSS files exist → Build is working, deployment might be issue
- If CSS files missing → PostCSS/Tailwind not running
- File sizes tell us if Tailwind is being purged correctly

### Step 1.3: Configuration Verification
**Action:** Systematically verify each config file
1. `tailwind.config.js` - content paths correct?
2. `postcss.config.mjs` - plugins configured?
3. `next.config.mjs` - any conflicting settings?
4. `src/app/globals.css` - Tailwind directives present?
5. `src/app/layout.tsx` - globals.css imported?

**What This Tells Us:**
- Which config is causing the issue
- Whether it's a path problem, syntax problem, or logic problem

---

## Phase 2: Root Cause Identification (10 minutes)

Based on Phase 1 findings, we'll identify the exact root cause:

### Scenario A: PostCSS Not Running
**Symptoms:** No CSS file generated, or empty CSS file
**Root Cause:** PostCSS config incorrect or Tailwind not installed
**Fix:** Reconfigure PostCSS, verify Tailwind installation

### Scenario B: Tailwind Purging Everything
**Symptoms:** Very small CSS file, no styles applied
**Root Cause:** Content paths in tailwind.config.js don't match actual files
**Fix:** Update content paths to match actual structure

### Scenario C: CSS Not Imported
**Symptoms:** CSS file exists but not loaded in browser
**Root Cause:** Import statement missing or incorrect
**Fix:** Add/correct import in layout.tsx

### Scenario D: Runtime Error
**Symptoms:** Components crash before rendering
**Root Cause:** JavaScript error preventing render
**Fix:** Debug and fix the error

### Scenario E: Vercel Build vs Local Build Difference
**Symptoms:** Works locally, broken on Vercel
**Root Cause:** Environment-specific issue (paths, dependencies, etc.)
**Fix:** Align Vercel environment with local

---

## Phase 3: Systematic Fix Implementation (20-30 minutes)

Once root cause is identified, implement fix following this process:

### 3.1: Create Test Branch (Optional but Recommended)
```bash
git checkout -b fix/styling-issue
```
**Why:** Isolates changes, easy to revert if needed

### 3.2: Implement Fix
- Make ONE focused change to address root cause
- Don't fix other "nice to have" issues yet
- Document what was changed and why

### 3.3: Local Verification
```bash
npm run build
npm run start
# Open localhost:3000 and verify styling works
```
**Why:** Catch issues before deploying

### 3.4: Commit and Deploy
```bash
git add .
git commit -m "Fix: [specific description of what was fixed]"
git push origin fix/styling-issue
# Or push to main if confident
```

### 3.5: Verify on Vercel
- Wait for deployment
- Check live site
- Verify fix worked
- Check for any new issues introduced

---

## Phase 4: Complete Feature Implementation (1-2 hours)

Once styling is working, systematically implement remaining features:

### 4.1: Builder.io Integration
1. Add API key to Vercel
2. Test content fetching works
3. Create sample homepage content
4. Verify components render with Builder data

### 4.2: Image Optimization
- Replace `<img>` tags with Next.js `<Image>`
- Configure image domains
- Optimize image loading

### 4.3: Create Remaining Pages
**Priority Order:**
1. About page
2. Product pages (4 pages)
3. Pricing page
4. Comparison pages (8 pages)
5. Contact page
6. Legal pages (2 pages)

### 4.4: SEO Finalization
- Add meta descriptions for each page
- Create sitemap
- Configure robots.txt
- Add JSON-LD structured data

---

## Phase 5: Testing & QA (30-45 minutes)

### 5.1: Functional Testing
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Forms submit (when implemented)
- [ ] Builder.io content updates appear

### 5.2: Visual Testing
- [ ] Desktop layout correct
- [ ] Tablet layout correct
- [ ] Mobile layout correct
- [ ] All fonts loading
- [ ] All images loading

### 5.3: Performance Testing
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms

### 5.4: Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

---

## Success Criteria

### Minimum Viable Product (MVP)
- [ ] Styling fully working
- [ ] Header and Footer render correctly
- [ ] Homepage with Builder.io content displays
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Fast page load (<3s)

### Complete Product
- [ ] All pages created
- [ ] Builder.io fully integrated
- [ ] Forms working
- [ ] SEO optimized
- [ ] Analytics integrated
- [ ] Custom domain configured

---

## Lessons Learned (To Update After Completion)

### What Caused the Issues
1. [To be filled in after diagnosis]
2. [To be filled in after diagnosis]

### What We'll Do Differently Next Time
1. [To be filled in]
2. [To be filled in]

### Best Practices Established
1. [To be filled in]
2. [To be filled in]

---

## Decision Log

| Date | Decision | Rationale | Outcome |
|------|----------|-----------|---------|
| Oct 30 | Fresh Next.js installation | Local build corrupted | Successful deployment but styling broken |
| Oct 30 | Switch to systematic approach | Avoid whack-a-mole fixing | TBD |

---

## Next Immediate Actions

1. **User provides screenshots** showing current deployment state
2. **Run diagnostic checks** (Phase 1) to identify root cause
3. **Implement focused fix** (Phase 3) once root cause identified
4. **Verify fix works** before moving to next feature
5. **Document learnings** for future reference

---

**This plan ensures:**
- We understand WHY things are broken (not just fixing symptoms)
- Fixes are tested before deployment
- No regression of previously working features
- Clear success criteria
- Learning from mistakes

**Time Estimate:**
- Diagnosis: 20 minutes
- Fix: 30 minutes
- Verification: 15 minutes
- **Total to working site: ~1 hour**

Then Builder.io setup and content creation can proceed smoothly.
