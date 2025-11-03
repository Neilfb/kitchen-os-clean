# Kitchen OS Shop Products - Data Management

This directory contains all shop product data in JSON format, along with TypeScript types for validation.

## Files

- **`products.json`** - Main product catalog (2 products currently)
- **`types.ts`** - TypeScript interfaces for type safety

## Product Data Structure

### Main Product Object

```typescript
{
  id: string;              // Unique ID (kebab-case, e.g., "thermal-labels")
  name: string;            // Display name
  category: string;        // Product category
  tagline: string;         // Short one-liner
  description: string;     // Full description
  image: string;           // Path to product image (/public/logos/...)
  icon: string;            // Lucide icon name ("FileText", "Thermometer", etc.)
  variants: Variant[];     // Array of product variants
  features: string[];      // Feature bullet points
  relatedProduct: {
    name: string;          // Related product name
    href: string;          // Link to product page
    note: string;          // Requirement note
  };
}
```

### Variant Object

```typescript
{
  id: string;              // Unique variant ID
  name: string;            // Variant name (e.g., "10,000 Labels")
  price: number;           // Price in GBP
  pricePerLabel?: number;  // Optional: Price per label (for labels)
  pricePerProbe?: number;  // Optional: Price per probe (for probes)
  setupFee?: number;       // Optional: One-time setup fee
  savings?: number | null; // Optional: Savings percentage
  note?: string;           // Optional: Additional note
  disabled?: boolean;      // Optional: Disable purchase
  popular?: boolean;       // Optional: Mark as "Most Popular"
}
```

## Adding Products

You have **three ways** to add products:

### Method 1: Direct JSON Editing (Quick for 1-2 products)

1. Open `products.json`
2. Copy an existing product object
3. Modify all fields
4. Save file

**Example:**
```json
{
  "id": "new-product",
  "name": "New Product",
  "category": "AllerQ",
  "tagline": "Short tagline here",
  "description": "Full description here",
  "image": "/logos/allerq/allerq-icon.png",
  "icon": "Package",
  "variants": [
    {
      "id": "variant-1",
      "name": "Starter Pack",
      "price": 99.00
    }
  ],
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "relatedProduct": {
    "name": "AllerQ",
    "href": "/allerq",
    "note": "Requires AllerQ subscription"
  }
}
```

### Method 2: Spreadsheet + CSV Export (Best for 5+ products)

**Perfect for bulk adding products!**

#### Step 1: Create Your Spreadsheet

Open Excel/Google Sheets and create a spreadsheet with these columns:

| id | name | category | tagline | description | image | icon | features | relatedProductName | relatedProductHref | relatedProductNote |
|----|------|----------|---------|-------------|-------|------|----------|-------------------|-------------------|-------------------|
| product-1 | Product Name | Category | Tagline | Description | /logos/... | FileText | Feature 1, Feature 2, Feature 3 | Related | /link | Note |

#### Step 2: Create Variants Spreadsheet (for each product)

Create a separate spreadsheet named `{product-id}-variants.csv`:

| id | name | price | pricePerLabel | pricePerProbe | setupFee | savings | note | disabled | popular |
|----|------|-------|--------------|--------------|---------|---------|------|----------|---------|
| variant-1 | Variant Name | 99.00 | | | | null | | | |

#### Step 3: Export to CSV

1. File → Save As → CSV format
2. Save main file as `products.csv`
3. Save variant files as `{product-id}-variants.csv`

#### Step 4: Convert CSV to JSON

```bash
# From project root
node scripts/csv-to-json.js products.csv

# Custom output location
node scripts/csv-to-json.js products.csv -o custom-output.json
```

The script will:
- ✅ Parse your products CSV
- ✅ Load all matching variant CSV files
- ✅ Validate the data
- ✅ Generate `src/data/products.json`

#### Step 5: Test

```bash
npm run build
```

### Method 3: TypeScript File (Advanced)

For developers who want type-checking while editing:

1. Create `/src/data/products.ts`
2. Export products array with full typing
3. Update shop page to import from `.ts` instead of `.json`

**Not recommended** - harder to bulk edit.

## Available Icons

Icons are from [Lucide React](https://lucide.dev/icons). Currently available in `iconMap`:

- `FileText` - Documents, labels
- `Thermometer` - Temperature probes
- `Package` - General products
- `ShoppingCart` - Shopping/cart

To add more icons:
1. Import icon in `/src/app/shop/page.tsx`
2. Add to `iconMap` object

Example:
```typescript
import { FileText, Thermometer, Package, ShoppingCart, Wrench } from 'lucide-react';

const iconMap = {
  FileText,
  Thermometer,
  Package,
  ShoppingCart,
  Wrench, // Added new icon
};
```

## CSV Templates

Example CSV files are provided in `/scripts/`:

- **`products-template.csv`** - Main products template
- **`thermal-labels-variants-template.csv`** - Variants template

Copy these as starting points for your data.

## Image Requirements

Product images should be:
- **Format:** PNG (transparent background preferred)
- **Size:** 200x200px to 400x400px
- **Location:** `/public/logos/{product-category}/`
- **Naming:** `{product}-icon.png` or similar

Example structure:
```
/public/logos/
  ├── food-label-system/fls-icon.png
  ├── food-safe-system/fss-icon.png
  ├── allerq/allerq-icon.png
  └── fwaste/fwaste-icon.png
```

## Validation

TypeScript automatically validates:
- ✅ Required fields present
- ✅ Correct data types
- ✅ Proper structure

Build will fail if:
- ❌ Missing required fields
- ❌ Invalid JSON syntax
- ❌ Type mismatches

## Workflow Example

**Adding 10 new products via spreadsheet:**

1. Open Excel/Google Sheets
2. Create products sheet with 10 rows
3. Create 10 variant sheets (one per product)
4. Export all as CSV
5. Run: `node scripts/csv-to-json.js products.csv`
6. Review generated `products.json`
7. Test: `npm run build`
8. Commit: `git add src/data/products.json && git commit -m "Add 10 new products"`
9. Deploy!

**Time estimate:** 15-30 minutes for 10 products

## Troubleshooting

### Build fails with "Cannot find module '@/data/products.json'"

**Solution:** Ensure `products.json` exists in `/src/data/`

### TypeScript error: "Property 'icon' does not exist"

**Solution:** Icon name in JSON doesn't match `iconMap`. Add icon to map or fix typo.

### CSV converter fails with "No variants file found"

**Solution:** Create `{product-id}-variants.csv` file. Even if no variants, create empty file with just headers.

### Products not showing on shop page

**Solution:**
1. Check browser console for errors
2. Verify JSON syntax with `jsonlint products.json`
3. Run `npm run build` to check for TypeScript errors

## Support

For questions or issues:
- Check `/scripts/csv-to-json.js --help`
- Review example CSVs in `/scripts/`
- Contact dev team

---

**Last Updated:** 2025-01-03
**Current Products:** 2 (Thermal Labels, Bluetooth Probes)
