# Quick Start - Adding Products to Shop

## ✅ Best Method: Spreadsheet → CSV → JSON

### Step 1: Prepare Your Spreadsheet

**Option A: Use Google Sheets (Recommended)**
1. Open Google Sheets
2. Create new sheet called "Products"
3. Add headers in first row:

```
id | name | category | tagline | description | image | icon | features | relatedProductName | relatedProductHref | relatedProductNote
```

**Option B: Use Excel**
- Same column headers as above
- Save as CSV when done

### Step 2: Fill In Product Data

**Example Row:**
```
thermal-labels-2 | Premium Labels | Food Label System | Best value labels | High quality labels | /logos/food-label-system/fls-icon.png | FileText | Waterproof, Durable, FDA approved | Food Label System | /food-label-system | Requires subscription
```

**Tips:**
- `id`: Use lowercase, dashes (e.g., "premium-labels")
- `features`: Comma-separated list
- `icon`: FileText, Thermometer, Package, or ShoppingCart

### Step 3: Create Variants Sheet

For each product, create a new sheet named: `{product-id}-variants`

**Example: "thermal-labels-2-variants"**

Headers:
```
id | name | price | pricePerLabel | pricePerProbe | setupFee | savings | note | disabled | popular
```

Example rows:
```
labels-500 | 500 Labels | 7.50 | 1.50 | | | null | | |
labels-2000 | 2000 Labels | 25.00 | 1.25 | | | 10 | | | true
```

### Step 4: Export to CSV

**Google Sheets:**
1. File → Download → Comma Separated Values (.csv)
2. Save as `products.csv`
3. Repeat for each variant sheet: `{product-id}-variants.csv`

**Excel:**
1. File → Save As → CSV (Comma delimited) (*.csv)
2. Save main file as `products.csv`
3. Save variant sheets as `{product-id}-variants.csv`

### Step 5: Convert to JSON

Open terminal in project folder:

```bash
# Navigate to your project
cd /path/to/kitchen-os-clean

# Run converter
node scripts/csv-to-json.js products.csv

# Check output
cat src/data/products.json
```

### Step 6: Test

```bash
# Build site
npm run build

# If successful, you'll see:
# ✓ Generating static pages (30/30)
```

### Step 7: Deploy

```bash
git add src/data/products.json
git commit -m "Add new products"
git push
```

Done! 🎉

---

## 🎯 Even Quicker: Edit JSON Directly

If adding just 1-2 products, edit JSON file directly:

```bash
# Open file
code src/data/products.json

# Copy existing product object
# Change all values
# Save
```

---

## 📋 Common Product Examples

### Example 1: Simple Product (No Variants)

```json
{
  "id": "starter-kit",
  "name": "Starter Kit",
  "category": "Food Safe System",
  "tagline": "Everything you need to get started",
  "description": "Complete starter package",
  "image": "/logos/food-safe-system/fss-icon.png",
  "icon": "Package",
  "variants": [
    {
      "id": "kit-basic",
      "name": "Basic Kit",
      "price": 299.00
    }
  ],
  "features": [
    "Includes all hardware",
    "Setup guide included",
    "1 year warranty"
  ],
  "relatedProduct": {
    "name": "Food Safe System",
    "href": "/food-safe-system",
    "note": "Requires subscription"
  }
}
```

### Example 2: Product with Multiple Variants

```json
{
  "id": "label-rolls",
  "name": "Label Rolls",
  "category": "Food Label System",
  "tagline": "Professional thermal label rolls",
  "description": "Compatible with all printers",
  "image": "/logos/food-label-system/fls-icon.png",
  "icon": "FileText",
  "variants": [
    {
      "id": "roll-500",
      "name": "500 Labels",
      "price": 12.50,
      "pricePerLabel": 2.50
    },
    {
      "id": "roll-1000",
      "name": "1000 Labels",
      "price": 20.00,
      "pricePerLabel": 2.00,
      "savings": 20,
      "popular": true
    },
    {
      "id": "roll-5000",
      "name": "5000 Labels",
      "price": 75.00,
      "pricePerLabel": 1.50,
      "savings": 40
    }
  ],
  "features": [
    "Thermal printing",
    "Pre-printed designs",
    "Food safe materials"
  ],
  "relatedProduct": {
    "name": "Food Label System",
    "href": "/food-label-system",
    "note": "Printer required"
  }
}
```

---

## 🚨 Common Mistakes

### ❌ Wrong: Forgetting variant file
```
Error: No variants file found for product-id
```
**Fix:** Create `{product-id}-variants.csv` even if empty

### ❌ Wrong: Invalid JSON syntax
```
Error: Unexpected token in JSON
```
**Fix:** Use online JSON validator or run `npm run build` to check

### ❌ Wrong: Icon doesn't exist
```
TypeScript error: Icon 'BadIcon' not in iconMap
```
**Fix:** Use FileText, Thermometer, Package, or ShoppingCart

### ❌ Wrong: Missing required fields
```
Error: Product missing required fields
```
**Fix:** Ensure id, name, category, tagline, description are filled

---

## 📞 Need Help?

1. Check full docs: `/src/data/README.md`
2. View examples: `/scripts/*-template.csv`
3. Test build: `npm run build`
4. Check types: `/src/data/types.ts`

---

**Pro Tip:** Keep your master spreadsheet in Google Sheets/Excel and re-export whenever you make bulk changes. The CSV converter handles the rest!
