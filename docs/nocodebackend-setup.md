# NoCodeBackend Integration Guide

Complete documentation for Kitchen OS NoCodeBackend database integration following NCB Standards.

## Overview

NoCodeBackend (NCB) is our REST API database solution for managing orders, customers, and product data. This integration follows the Kitchen OS NCB Standards for consistency and reliability.

---

## Environment Configuration

### Required Environment Variables

Add these to your `.env.local` file:

```bash
# NoCodeBackend Database Configuration
# API documentation: https://backend.nocodebackend.io/api
# Note: API_KEY goes in Authorization header, SECRET_KEY goes in request body
NOCODEBACKEND_API_KEY=your_api_key_here
NOCODEBACKEND_SECRET_KEY=your_secret_key_here
NOCODEBACKEND_INSTANCE=48346_kitchen_os_clean
NOCODEBACKEND_BASE_URL=https://backend.nocodebackend.io/api
```

### Vercel Environment Variables

For production deployment, add these in your Vercel project settings:
- `NOCODEBACKEND_API_KEY`
- `NOCODEBACKEND_SECRET_KEY`
- `NOCODEBACKEND_INSTANCE`
- `NOCODEBACKEND_BASE_URL` (optional, defaults to `https://backend.nocodebackend.io/api`)

---

## Authentication Contract (Auth Triplet)

Every NoCodeBackend API request requires THREE authentication components:

### 1. Authorization Header
```typescript
Authorization: `Bearer ${API_KEY}`
```

### 2. Instance Query Parameter
```typescript
?Instance=${INSTANCE}
```

### 3. Secret Key in Request Body
```json
{
  "secret_key": "your_secret_key",
  "field1": "value1",
  "field2": "value2"
}
```

**Example Complete Request:**
```bash
curl -X POST \
  'https://backend.nocodebackend.io/api/create/orders?Instance=48346_kitchen_os_clean' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "secret_key": "YOUR_SECRET_KEY",
    "order_number": "KOS-2025-123",
    "customer_email": "user@example.com",
    "total": 100.00
  }'
```

---

## Request Format Standards

### Golden Rules

1. **Flat Payloads**: Send fields at top level, NO `data:{}` wrapper
2. **Nulls Over Empty Strings**: Use `null` or omit fields, not `""`
3. **Secret Key Required**: Always include `secret_key` in request body
4. **No Timestamps**: Omit `created_at` - let database defaults handle it
5. **Money as Decimals**: Send numbers like `100.00`, NOT strings (for now)

### ✅ Correct Format
```json
{
  "secret_key": "f8d76c992d7d...",
  "order_number": "KOS-2025-123",
  "customer_email": "user@example.com",
  "customer_phone": null,
  "subtotal": 156.25,
  "total": 187.50
}
```

### ❌ Incorrect Formats
```json
// WRONG: Wrapped in data object
{
  "data": {
    "order_number": "KOS-2025-123"
  }
}

// WRONG: Empty strings instead of null
{
  "customer_phone": "",
  "customer_company": ""
}

// WRONG: Missing secret_key
{
  "order_number": "KOS-2025-123"
}

// WRONG: Including created_at
{
  "order_number": "KOS-2025-123",
  "created_at": "2025-01-05T12:34:56.789Z"
}
```

---

## Database Schema

### Orders Table
```sql
id              int(11)         PK, Auto Increment
order_number    varchar(255)    UNIQUE, NOT NULL
revolut_order_id varchar(255)   NULL
customer_email  varchar(255)    NOT NULL
customer_name   varchar(255)    NOT NULL
customer_phone  varchar(255)    NULL
customer_company varchar(255)   NULL
billing_address_line1 varchar(255) NOT NULL
billing_address_line2 varchar(255) NULL
billing_city    varchar(255)    NOT NULL
billing_county  varchar(255)    NULL
billing_postcode varchar(255)   NOT NULL
billing_country varchar(255)    NOT NULL
shipping_address_line1 varchar(255) NOT NULL
shipping_address_line2 varchar(255) NULL
shipping_city   varchar(255)    NOT NULL
shipping_county varchar(255)    NULL
shipping_postcode varchar(255)  NOT NULL
shipping_country varchar(255)   NOT NULL
vat_number      varchar(255)    NULL
vat_country     varchar(255)    NULL
subtotal        decimal(10,2)   NOT NULL
shipping_cost   decimal(10,2)   NOT NULL
tax             decimal(10,2)   NOT NULL
total           decimal(10,2)   NOT NULL
status          varchar(50)     NOT NULL
payment_method  varchar(255)    NULL
created_at      datetime        NOT NULL (auto-generated)
paid_at         datetime        NULL
cancelled_at    datetime        NULL
```

### Order Items Table
```sql
id              int(11)         PK, Auto Increment
order_id        int(11)         FK to orders.id, NOT NULL
product_id      varchar(255)    NOT NULL
product_name    varchar(255)    NOT NULL
product_image   varchar(255)    NULL
variant_id      varchar(255)    NOT NULL
variant_name    varchar(255)    NOT NULL
quantity        int(11)         NOT NULL
unit_price      decimal(10,2)   NOT NULL
line_total      decimal(10,2)   NOT NULL
created_at      datetime        NOT NULL (auto-generated)
```

---

## Client Implementation

### Core Client (`src/services/nocodebackend.ts`)

Standard implementation for backward compatibility:

```typescript
import { invariant } from '@/lib/invariant';

const API_KEY = process.env.NOCODEBACKEND_API_KEY!;
const SECRET_KEY = process.env.NOCODEBACKEND_SECRET_KEY!;
const INSTANCE = process.env.NOCODEBACKEND_INSTANCE!;
const BASE_URL = process.env.NOCODEBACKEND_BASE_URL || 'https://backend.nocodebackend.io/api';

// Create record
export async function create<T = unknown>(
  table: string,
  data: Record<string, unknown>
): Promise<number> {
  const payload = { secret_key: SECRET_KEY, ...data };

  const response = await fetch(
    `${BASE_URL}/create/${table}?Instance=${INSTANCE}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`NCB API error: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  return result.id;
}
```

### Canonical Client (`src/lib/ncbClient.ts`)

Enhanced client with data sanitization following NCB Standards:

```typescript
import { invariant } from './invariant';

const BASE_URL = process.env.NOCODEBACKEND_BASE_URL!;
const INSTANCE = process.env.NOCODEBACKEND_INSTANCE!;
const API_KEY = process.env.NOCODEBACKEND_API_KEY!;
const SECRET = process.env.NOCODEBACKEND_SECRET_KEY!;

invariant(BASE_URL && INSTANCE && API_KEY && SECRET, 'NCB env vars missing');

// Sanitize payload according to NCB standards
function sanitise<T extends Record<string, unknown>>(input: T): T {
  const out: Record<string, unknown> = {};

  for (const [k, v] of Object.entries(input)) {
    if (v === undefined) continue;           // Remove undefined
    if (k === 'created_at') continue;        // Omit timestamps
    if (v === '') { out[k] = null; continue; } // Empty → null

    // Money fields (Phase 2: convert to strings)
    // if (['subtotal', 'total'].includes(k) && typeof v === 'number') {
    //   out[k] = v.toFixed(2);
    //   continue;
    // }

    out[k] = v;
  }

  return out as T;
}

export async function ncbCreate<T = unknown>(
  table: string,
  payload: Record<string, unknown>
): Promise<T> {
  const url = `${BASE_URL}/create/${table}?Instance=${INSTANCE}`;
  const body = { secret_key: SECRET, ...sanitise(payload) };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`NCB ${res.status}: ${text}`);
  }

  return res.json();
}
```

---

## Usage Examples

### Creating an Order

```typescript
import * as db from '@/services/nocodebackend';

const orderId = await db.create('orders', {
  order_number: 'KOS-2025-123456',
  customer_email: 'user@example.com',
  customer_name: 'John Doe',
  customer_phone: '+447588427222',
  customer_company: null,              // null, not ""
  billing_address_line1: '123 Main St',
  billing_address_line2: null,
  billing_city: 'London',
  billing_county: null,
  billing_postcode: 'SW1A 1AA',
  billing_country: 'GB',
  shipping_address_line1: '123 Main St',
  shipping_address_line2: null,
  shipping_city: 'London',
  shipping_county: null,
  shipping_postcode: 'SW1A 1AA',
  shipping_country: 'GB',
  vat_number: null,
  vat_country: 'GB',
  subtotal: 100.00,
  shipping_cost: 5.99,
  tax: 21.20,
  total: 127.19,
  status: 'pending',
  payment_method: null,
  // created_at is omitted - DB handles it
});

console.log(`Order created with ID: ${orderId}`);
```

### Creating Order Items

```typescript
const items = [
  {
    order_id: orderId,
    product_id: 'thermal-labels',
    product_name: 'Thermal Labels',
    product_image: 'https://example.com/image.jpg',
    variant_id: 'labels-5000',
    variant_name: '5,000 Labels',
    quantity: 2,
    unit_price: 56.25,
    line_total: 112.50,
  }
];

for (const item of items) {
  await db.create('order_items', item);
}
```

### Searching Orders

```typescript
const orders = await db.search('orders', {
  order_number: 'KOS-2025-123456'
});

if (orders.length > 0) {
  console.log('Order found:', orders[0]);
}
```

### Updating an Order

```typescript
await db.update('orders', orderId, {
  status: 'paid',
  payment_method: 'CARD',
  paid_at: new Date().toISOString(),
});
```

---

## Error Handling

### Common Errors

#### 403 - Invalid secret_key
```
NoCodeBackend API error: 403 - {"status":"failed","error":"Invalid secret_key"}
```
**Fix:** Ensure `secret_key` is included in request body at top level

#### 500 - Error creating record
```
NoCodeBackend API error: 500 - {"status":"failed","error":"Error creating record."}
```
**Possible causes:**
- Field name mismatch with database schema
- Wrong data type (e.g., string instead of number)
- Missing required field
- Invalid null value for NOT NULL column

#### 401 - Unauthorized
```
NoCodeBackend API error: 401 - Unauthorized
```
**Fix:** Check `Authorization: Bearer ${API_KEY}` header is set correctly

### Debugging Tips

1. **Enable Debug Logging**: Check Vercel function logs for detailed request/response info
2. **Verify Schema**: Ensure field names match database exactly (snake_case)
3. **Check Data Types**: Numbers should be numbers, not strings (except Phase 2 money fields)
4. **Test Minimal Payload**: Start with required fields only, add optional fields incrementally

---

## API Endpoints

### Create Record
```
POST /create/{table}?Instance={INSTANCE}
```

### Read All Records
```
GET /read/{table}?Instance={INSTANCE}
```

### Read Single Record
```
GET /read/{table}/{id}?Instance={INSTANCE}
```

### Search Records
```
POST /search/{table}?Instance={INSTANCE}
Body: { "secret_key": "...", "field": "value" }
```

### Update Record
```
PUT /update/{table}/{id}?Instance={INSTANCE}
Body: { "secret_key": "...", "field": "new_value" }
```

### Delete Record
```
DELETE /delete/{table}/{id}?Instance={INSTANCE}
```

---

## Phase 2 Enhancements (Future)

### Planned Improvements

1. **Zod Validation**
   ```typescript
   import { z } from 'zod';

   const OrderSchema = z.object({
     order_number: z.string().max(50),
     customer_email: z.string().email(),
     total: z.number().nonnegative(),
   });
   ```

2. **Money as Strings**
   ```typescript
   // Convert money fields to 2-decimal strings
   subtotal: "156.25",
   total: "187.50"
   ```

3. **OpenAPI Type Generation**
   ```bash
   npm run ncb:pull-openapi
   npm run ncb:types
   ```

4. **Comprehensive Error Types**
   ```typescript
   type NCBError =
     | { code: 'INVALID_SECRET'; message: string }
     | { code: 'FIELD_MISMATCH'; field: string; message: string }
     | { code: 'VALIDATION_ERROR'; errors: Record<string, string> };
   ```

---

## Troubleshooting Checklist

- [ ] Auth triplet present? (Header, Query, Body)
- [ ] Field names match table schema exactly?
- [ ] Using `null` for optional fields (not `""`)?
- [ ] Money formatted as numbers (not strings yet)?
- [ ] `created_at` omitted from payloads?
- [ ] `secret_key` at top level of request body?
- [ ] No `data:{}` wrapper around fields?
- [ ] Environment variables set in Vercel?
- [ ] API key and secret key valid and not expired?

---

## Support & Documentation

- **NoCodeBackend Docs**: https://backend.nocodebackend.io/api
- **NoCodeBackend Dashboard**: https://backend.nocodebackend.io
- **Swagger/OpenAPI**: https://openapi.nocodebackend.com
- **Kitchen OS NCB Standards**: See internal documentation

---

## Change Log

### 2025-01-06
- ✅ Fixed 403 "Invalid secret_key" by adding `secret_key` to request body
- ✅ Fixed 500 errors by using `null` instead of empty strings
- ✅ Removed `created_at` from payloads (DB auto-generates)
- ✅ Created canonical NCB client with sanitization
- ✅ Added comprehensive error logging
- ✅ Successfully tested order creation with 201 responses

### Future
- [ ] Add Zod validation schemas
- [ ] Convert money fields to strings with `.toFixed(2)`
- [ ] Generate TypeScript types from OpenAPI
- [ ] Create BUG.md for incident tracking
