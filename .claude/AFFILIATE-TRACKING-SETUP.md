# Push Lap Growth Affiliate Tracking - Setup Guide

## Phase 1: Hardware Purchase Tracking (COMPLETED)

Affiliate tracking for hardware purchases (thermal labels, temperature probes) via shop.

### Implementation Status

✅ **Completed:**
- Client-side affiliate detection (URL parameters, cookies)
- Checkout flow integration
- Order creation with affiliate attribution
- Revolut webhook conversion tracking
- Push Lap Growth API client

### Required Setup Steps

#### 1. Database Schema Updates (NoCodeBackend)

**CRITICAL**: Add these fields to the `orders` table:

| Field Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `affiliate_id` | Text | No | null | Push Lap Growth affiliate identifier (e.g., "AFFILIATE123") |
| `affiliate_commission_tracked` | Boolean | No | false | Prevents duplicate conversion tracking |

**How to update:**
1. Login to NoCodeBackend: https://backend.nocodebackend.io/
2. Navigate to `48346_kitchen_os_clean` instance
3. Go to Tables → `orders`
4. Add new columns:
   - Click "Add Column"
   - Name: `affiliate_id`, Type: Text, Nullable: Yes
   - Click "Add Column"
   - Name: `affiliate_commission_tracked`, Type: Boolean, Default: false

#### 2. Get Push Lap Growth API Credentials

1. **Find Your API Key**:
   - Login to Push Lap Growth: https://www.pushlapgrowth.com/
   - Navigate to Settings → API or Developer settings
   - Copy your API key

2. **Verify API Documentation**:
   - Check API endpoint structure: https://developers.pushlapgrowth.com/
   - Confirm conversion tracking endpoint (may need to update `/src/services/pushLapGrowth.ts`)
   - Note: Current implementation assumes endpoint `https://api.pushlapgrowth.com/v1/conversions`

#### 3. Update Environment Variables

**Local Development** (`.env.local`):
```bash
PUSH_LAP_GROWTH_API_KEY=your-actual-api-key-here
NEXT_PUBLIC_PUSH_LAP_GROWTH_ENABLED=true
```

**Production** (Vercel Dashboard):
1. Go to Vercel dashboard: https://vercel.com
2. Select `kitchen-os-clean` project
3. Settings → Environment Variables
4. Add:
   - **Name**: `PUSH_LAP_GROWTH_API_KEY`
   - **Value**: `your-actual-api-key-here`
   - **Environments**: Production, Preview, Development

   - **Name**: `NEXT_PUBLIC_PUSH_LAP_GROWTH_ENABLED`
   - **Value**: `true`
   - **Environments**: Production, Preview, Development

5. Redeploy application for changes to take effect

#### 4. Verify Push Lap Growth API Integration

Once you have your API key, test the connection:

**Option A: Test with Development Build**
```bash
# In your local terminal
npm run dev

# Open browser console at http://localhost:3000
# Check for any Push Lap Growth connection errors
```

**Option B: Create Test Script**
```typescript
// test-push-lap-growth.ts
import { testConnection } from './src/services/pushLapGrowth';

async function test() {
  const isConnected = await testConnection();
  console.log('Push Lap Growth connected:', isConnected);
}

test();
```

**NOTE**: You may need to update the API endpoints in `/src/services/pushLapGrowth.ts` based on actual Push Lap Growth documentation.

### Testing Affiliate Tracking

#### Test Flow:

1. **Create Affiliate Link**:
   ```
   https://kitchen-os.com/shop?ref=TEST_AFFILIATE
   ```

2. **Add Product to Cart**:
   - Use the Test Product (£0.10) for minimal cost
   - Or any real product

3. **Complete Checkout**:
   - Fill in customer details
   - Proceed to payment

4. **Check Console Logs**:
   ```
   [Affiliate] Tracking initialized with affiliate: TEST_AFFILIATE
   [Checkout] Affiliate ID detected: TEST_AFFILIATE
   [Affiliate] Order KOS-2025-XXXXXX attributed to affiliate: TEST_AFFILIATE
   ```

5. **Complete Payment**:
   - Use real payment method (test product is only £0.10)
   - Wait for Revolut webhook

6. **Verify Conversion Tracking**:
   ```
   [Affiliate] Tracking conversion for order KOS-2025-XXXXXX, affiliate: TEST_AFFILIATE
   [Affiliate] Conversion tracked successfully for order KOS-2025-XXXXXX
   ```

7. **Check Push Lap Growth Dashboard**:
   - Login to Push Lap Growth
   - Navigate to Conversions or Analytics
   - Verify conversion appears for TEST_AFFILIATE

### Cookie Behavior

- **Cookie Name**: `plg_affiliate_id`
- **Expiration**: 30 days
- **Attribution Model**: First-click (first affiliate gets credit, subsequent affiliate links are ignored)
- **Clear Cookie** (for testing):
  ```javascript
  // Browser console
  document.cookie = 'plg_affiliate_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  ```

### Supported URL Parameters

Any of these parameters will be detected:
- `?ref=AFFILIATE_ID`
- `?plg=AFFILIATE_ID`
- `?affiliate=AFFILIATE_ID`
- `?partner=AFFILIATE_ID`

### Troubleshooting

#### Issue: "Push Lap Growth API key not configured"
**Solution**: Add `PUSH_LAP_GROWTH_API_KEY` to .env.local and restart dev server

#### Issue: Conversion not appearing in Push Lap Growth dashboard
**Checks**:
1. Verify `NEXT_PUBLIC_PUSH_LAP_GROWTH_ENABLED=true`
2. Check NoCodeBackend orders table for `affiliate_id` field
3. Review server logs for `[Affiliate]` messages
4. Confirm API endpoint in `/src/services/pushLapGrowth.ts` matches Push Lap Growth docs
5. Test API key with curl:
   ```bash
   curl https://api.pushlapgrowth.com/v1/account \
     -H "Authorization: Bearer YOUR_API_KEY"
   ```

#### Issue: affiliate_commission_tracked not working
**Solution**: Ensure database field exists with Boolean type, default false

#### Issue: Duplicate conversions
**Checks**:
1. Verify webhook only processes each order once
2. Check `affiliate_commission_tracked` is being set to true after successful tracking
3. Review webhook logs for duplicate `ORDER_COMPLETED` events

---

## Phase 2: Food Label System GoCardless Subscriptions

**Status**: Not yet implemented

### Planned Features:
- GoCardless Direct Debit integration
- Subscription tracking with affiliate attribution
- Monthly recurring payment handling
- Subscription cancellation tracking

### Requirements:
- GoCardless account signup
- GoCardless API credentials
- New `subscriptions` table in NoCodeBackend

---

## Phase 3: Manual Subscription Conversion Tracking

**Status**: Not yet implemented

### Planned Features:
- Admin API endpoint for manual conversion reporting
- Food Safe System subscription attribution
- Sales team workflow integration

### Requirements:
- Admin API key for security
- CRM integration (optional)
- Manual conversion reporting process

---

## Phase 4: Cross-Domain Tracking

**Status**: Not yet implemented

### Planned Features:
- Pass affiliate parameter to external sites (foodsafesystem.com, etc.)
- External sites fire conversions back to Push Lap Growth
- Unified attribution across multiple domains

### Requirements:
- Coordination with external site developers
- Shared affiliate ID format
- Cross-domain cookie handling (optional)

---

## File Structure

```
src/
├── types/
│   └── affiliate.ts                    # TypeScript types for affiliate tracking
├── utils/
│   └── affiliateTracking.ts           # Client-side affiliate detection & cookies
├── services/
│   └── pushLapGrowth.ts              # Push Lap Growth API client
├── app/
│   ├── checkout/
│   │   └── CheckoutClient.tsx         # Captures affiliate ID from cookie
│   └── api/
│       ├── orders/
│       │   └── create/route.ts        # Saves affiliate ID to database
│       └── webhooks/
│           └── revolut/route.ts       # Fires Push Lap Growth conversions
└── components/
    └── payment/
        └── RevolutWidget.tsx          # Passes affiliate ID to order API
```

---

## Support

If you encounter issues:
1. Check server logs for `[Affiliate]` prefixed messages
2. Review browser console for client-side tracking logs
3. Verify database schema changes were applied
4. Confirm environment variables are set correctly
5. Test API key with Push Lap Growth support

**Push Lap Growth Documentation**: https://developers.pushlapgrowth.com/
**Support Contact**: [Check Push Lap Growth dashboard for support email]
