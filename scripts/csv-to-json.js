#!/usr/bin/env node

/**
 * CSV to JSON Converter for Kitchen OS Shop Products
 *
 * Usage:
 *   node scripts/csv-to-json.js products.csv
 *   node scripts/csv-to-json.js products.csv -o custom-output.json
 *
 * CSV Format (with headers):
 *   id, name, category, tagline, description, image, icon, features, relatedProductName, relatedProductHref, relatedProductNote
 *   thermal-labels, Thermal Labels, Food Label System, "Premium thermal labels...", ...
 *
 * For variants, create a separate CSV file named: {product-id}-variants.csv
 * Variant CSV Format:
 *   id, name, price, pricePerLabel, pricePerProbe, setupFee, savings, note, disabled, popular
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
CSV to JSON Converter for Kitchen OS Shop Products

Usage:
  node scripts/csv-to-json.js <products.csv> [-o output.json]

Arguments:
  products.csv    Path to the main products CSV file
  -o, --output    Output file path (default: src/data/products.json)

CSV Format:
  Main products CSV must include these columns (in any order):
  - id, name, category, tagline, description, image, icon, features
  - relatedProductName, relatedProductHref, relatedProductNote

  Features column: Comma-separated list in quotes
  Example: "Feature 1, Feature 2, Feature 3"

  For product variants, create separate CSV files:
  - Name format: {product-id}-variants.csv
  - Example: thermal-labels-variants.csv
  - Columns: id, name, price, pricePerLabel, pricePerProbe, setupFee, savings, note, disabled, popular

Examples:
  node scripts/csv-to-json.js products.csv
  node scripts/csv-to-json.js products.csv -o custom-output.json
  `);
  process.exit(0);
}

const inputFile = args[0];
const outputIndex = args.indexOf('-o') >= 0 ? args.indexOf('-o') : args.indexOf('--output');
const outputFile = outputIndex >= 0 && args[outputIndex + 1]
  ? args[outputIndex + 1]
  : path.join(__dirname, '../src/data/products.json');

// Validate input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`❌ Error: Input file not found: ${inputFile}`);
  process.exit(1);
}

// Parse CSV line (handles quoted fields with commas)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Parse CSV file
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());

  if (lines.length < 2) {
    throw new Error('CSV file must have at least a header row and one data row');
  }

  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index] || '';
    });
    rows.push(row);
  }

  return rows;
}

// Convert CSV row to product object
function csvToProduct(row) {
  const product = {
    id: row.id,
    name: row.name,
    category: row.category,
    tagline: row.tagline,
    description: row.description,
    image: row.image,
    icon: row.icon,
    variants: [],
    features: row.features ? row.features.split(',').map(f => f.trim()).filter(Boolean) : [],
    relatedProduct: {
      name: row.relatedProductName || '',
      href: row.relatedProductHref || '',
      note: row.relatedProductNote || '',
    },
  };

  return product;
}

// Convert variant CSV row to variant object
function csvToVariant(row) {
  const variant = {
    id: row.id,
    name: row.name,
    price: parseFloat(row.price),
  };

  // Add optional fields only if they exist
  if (row.pricePerLabel) variant.pricePerLabel = parseFloat(row.pricePerLabel);
  if (row.pricePerProbe) variant.pricePerProbe = parseFloat(row.pricePerProbe);
  if (row.setupFee) variant.setupFee = parseFloat(row.setupFee);
  if (row.savings) variant.savings = row.savings === 'null' ? null : parseInt(row.savings);
  if (row.note) variant.note = row.note;
  if (row.disabled) variant.disabled = row.disabled === 'true';
  if (row.popular) variant.popular = row.popular === 'true';

  return variant;
}

// Main conversion
try {
  console.log('🔄 Converting CSV to JSON...\n');

  // Parse main products CSV
  const productRows = parseCSV(inputFile);
  console.log(`✅ Parsed ${productRows.length} products from ${inputFile}`);

  // Convert to product objects
  const products = productRows.map(csvToProduct);

  // Load variants for each product
  const inputDir = path.dirname(inputFile);
  products.forEach((product) => {
    const variantsFile = path.join(inputDir, `${product.id}-variants.csv`);
    if (fs.existsSync(variantsFile)) {
      const variantRows = parseCSV(variantsFile);
      product.variants = variantRows.map(csvToVariant);
      console.log(`✅ Loaded ${product.variants.length} variants for ${product.id}`);
    } else {
      console.log(`⚠️  No variants file found for ${product.id} (expected: ${variantsFile})`);
    }
  });

  // Validate products
  products.forEach((product) => {
    if (!product.id || !product.name) {
      throw new Error(`Product missing required fields: ${JSON.stringify(product)}`);
    }
    if (product.variants.length === 0) {
      console.warn(`⚠️  Warning: Product ${product.id} has no variants`);
    }
  });

  // Write output JSON
  fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
  console.log(`\n✅ Successfully wrote ${products.length} products to ${outputFile}`);
  console.log(`\n📦 Summary:`);
  console.log(`   Products: ${products.length}`);
  console.log(`   Total variants: ${products.reduce((sum, p) => sum + p.variants.length, 0)}`);

} catch (error) {
  console.error(`\n❌ Error: ${error.message}`);
  process.exit(1);
}
