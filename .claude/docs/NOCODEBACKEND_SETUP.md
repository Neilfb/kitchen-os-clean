# NoCodeBackend Setup Guide - Kitchen OS

**Database Solution:** NoCodeBackend (as requested - alternative to Supabase)
**Purpose:** Handle contact forms, newsletter signups, product inquiries, orders
**Cost:** Free tier available, paid plans from $19/month

---

## 🎯 What is NoCodeBackend?

NoCodeBackend is a no-code database and API platform similar to Airtable or Firebase, but simpler.

**Official Website:** https://nocodebackend.com

**Features:**
- Visual database builder
- Auto-generated REST API
- Built-in authentication
- File storage
- Real-time updates
- Easy integration

---

## 🚀 Step 1: Sign Up & Create Project

### 1.1 Create Account
1. Visit https://nocodebackend.com
2. Click "Sign Up" or "Get Started"
3. Enter email and password
4. Verify your email

### 1.2 Create New Project
1. Click "New Project"
2. Name: "Kitchen OS"
3. Region: Choose closest to your users (e.g., EU West if UK-based)
4. Click "Create"

### 1.3 Get API Credentials
1. Go to Project Settings
2. Copy your **API Key** (you'll need this)
3. Copy your **Project ID**
4. Save these securely

---

## 📊 Step 2: Create Database Tables

Create these collections/tables in NoCodeBackend:

### Table 1: Contact Submissions

**Table Name:** `contact_submissions`

**Fields:**
| Field Name | Type | Required | Notes |
|------------|------|----------|-------|
| name | Text | Yes | Person's name |
| email | Email | Yes | Contact email |
| company | Text | No | Company name |
| phone | Text | No | Phone number |
| message | Text | Yes | Message content |
| source | Text | No | Where form was submitted (e.g., "contact_page") |
| status | Select | No | Options: "new", "replied", "closed" |
| created_at | DateTime | Auto | Submission timestamp |

### Table 2: Newsletter Subscribers

**Table Name:** `newsletter_subscribers`

**Fields:**
| Field Name | Type | Required | Notes |
|------------|------|----------|-------|
| email | Email | Yes | Subscriber email (unique) |
| subscribed | Boolean | Yes | Default: true |
| source | Text | No | Where they subscribed |
| subscribed_at | DateTime | Auto | Signup timestamp |
| unsubscribed_at | DateTime | No | If they unsubscribe |

### Table 3: Product Inquiries

**Table Name:** `product_inquiries`

**Fields:**
| Field Name | Type | Required | Notes |
|------------|------|----------|-------|
| name | Text | Yes | Person's name |
| email | Email | Yes | Contact email |
| company | Text | No | Company name |
| product | Select | Yes | Options: "food-safe-system", "allerq", "food-label-system", "f-waste" |
| message | Text | No | Additional details |
| created_at | DateTime | Auto | Submission timestamp |

### Table 4: Orders (For Shop)

**Table Name:** `orders`

**Fields:**
| Field Name | Type | Required | Notes |
|------------|------|----------|-------|
| order_number | Text | Yes | Auto-generated |
| customer_name | Text | Yes | |
| customer_email | Email | Yes | |
| customer_phone | Text | No | |
| status | Select | Yes | Options: "pending", "paid", "shipped", "completed", "cancelled" |
| total_amount | Number | Yes | Total in GBP |
| payment_id | Text | No | Revolut payment ID |
| shipping_address | JSON | No | Full address object |
| items | JSON | Yes | Array of order items |
| created_at | DateTime | Auto | |

---

## 🔌 Step 3: Integration with Next.js

### 3.1 Install SDK

```bash
npm install nocodebackend-js
```

### 3.2 Add Environment Variables

Create/update `.env.local`:

```env
# NoCodeBackend
NEXT_PUBLIC_NOCODEBACKEND_API_KEY=your-api-key-here
NEXT_PUBLIC_NOCODEBACKEND_PROJECT_ID=your-project-id-here
```

### 3.3 Create Client Library

**File:** `/src/lib/nocodebackend.ts`

```typescript
import { NoCodeBackend } from 'nocodebackend-js';

export const ncb = new NoCodeBackend({
  apiKey: process.env.NEXT_PUBLIC_NOCODEBACKEND_API_KEY!,
  projectId: process.env.NEXT_PUBLIC_NOCODEBACKEND_PROJECT_ID!,
});

// TypeScript interfaces
export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: string;
}

export interface NewsletterSubscriber {
  email: string;
  subscribed: boolean;
  source?: string;
}

export interface ProductInquiry {
  name: string;
  email: string;
  company?: string;
  product: 'food-safe-system' | 'allerq' | 'food-label-system' | 'f-waste';
  message?: string;
}

export interface Order {
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  total_amount: number;
  payment_id?: string;
  shipping_address?: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
  items: Array<{
    product_type: string;
    variant: string;
    quantity: number;
    unit_price: number;
    total_price: number;
  }>;
}
```

---

## 📝 Step 4: Implement Contact Form

### 4.1 Create Server Action

**File:** `/src/app/contact/actions.ts`

```typescript
'use server';

import { ncb } from '@/lib/nocodebackend';
import type { ContactSubmission } from '@/lib/nocodebackend';

export async function submitContactForm(data: ContactSubmission) {
  try {
    const result = await ncb.collection('contact_submissions').create({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      message: data.message,
      source: data.source || 'contact_page',
      status: 'new',
    });

    return { success: true, id: result.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form. Please try again.' };
  }
}
```

### 4.2 Create Contact Form Component

**File:** `/src/components/ContactForm.tsx`

```typescript
'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/contact/actions';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const result = await submitContactForm({
      ...formData,
      source: 'contact_page',
    });

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-product-fss-green-light border border-product-fss-green rounded-lg">
          <p className="text-product-fss-green-dark font-semibold">
            Thank you! We'll be in touch soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-semibold">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-product-fss-green text-white font-bold rounded-xl hover:bg-product-fss-green-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### 4.3 Use in Contact Page

**File:** `/src/app/contact/page.tsx`

```typescript
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your kitchen operations? Let's talk.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
```

---

## 📧 Step 5: Newsletter Signup

### 5.1 Create Newsletter Action

**File:** `/src/app/actions/newsletter.ts`

```typescript
'use server';

import { ncb } from '@/lib/nocodebackend';

export async function subscribeToNewsletter(email: string, source: string = 'footer') {
  try {
    // Check if already subscribed
    const existing = await ncb.collection('newsletter_subscribers')
      .where('email', '==', email)
      .get();

    if (existing.length > 0) {
      return { success: true, message: 'Already subscribed!' };
    }

    // Add new subscriber
    await ncb.collection('newsletter_subscribers').create({
      email,
      subscribed: true,
      source,
    });

    return { success: true, message: 'Successfully subscribed!' };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error: 'Failed to subscribe. Please try again.' };
  }
}
```

### 5.2 Add to Footer

**File:** `/src/components/Footer.tsx` (add this section)

```typescript
'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions/newsletter';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const result = await subscribeToNewsletter(email, 'footer');

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-brand-navy mb-4">
        Stay Updated
      </h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-product-fss-green focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-product-fss-green text-white font-semibold rounded-lg hover:bg-product-fss-green-dark transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-sm text-product-fss-green mt-2">Subscribed!</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-2">Error. Try again.</p>
      )}
    </div>
  );
}
```

---

## 🛒 Step 6: Shop Orders (Revolut Integration)

### 6.1 Create Order

```typescript
'use server';

import { ncb } from '@/lib/nocodebackend';
import type { Order } from '@/lib/nocodebackend';

export async function createOrder(orderData: Omit<Order, 'order_number' | 'status'>) {
  try {
    // Generate order number
    const orderNumber = `KOS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const order = await ncb.collection('orders').create({
      ...orderData,
      order_number: orderNumber,
      status: 'pending',
    });

    return { success: true, orderId: order.id, orderNumber };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: 'Failed to create order' };
  }
}

export async function updateOrderStatus(orderId: string, status: Order['status'], paymentId?: string) {
  try {
    await ncb.collection('orders').update(orderId, {
      status,
      payment_id: paymentId,
    });

    return { success: true };
  } catch (error) {
    console.error('Error updating order:', error);
    return { success: false, error: 'Failed to update order' };
  }
}
```

---

## 📊 Step 7: View Data in NoCodeBackend

### Dashboard Access
1. Log into NoCodeBackend
2. Select your "Kitchen OS" project
3. Click on each table to view data

### Features:
- **View all submissions** in table format
- **Filter** by date, status, product, etc.
- **Export** to CSV/Excel
- **Edit** records manually
- **Delete** spam/test entries

### Set Up Notifications
1. Go to Project Settings → Notifications
2. Add your email
3. Enable "New Record" notifications for:
   - `contact_submissions`
   - `product_inquiries`
   - `orders`

You'll receive an email whenever someone submits a form!

---

## 🔐 Security Considerations

### API Key Security
- **NEVER** commit `.env.local` to Git
- Use environment variables in Vercel
- NoCodeBackend API keys are scoped to project only

### Data Validation
Always validate on server-side:

```typescript
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(1000),
});

export async function submitContactForm(data: unknown) {
  // Validate input
  const validatedData = contactSchema.parse(data);

  // Now safe to use validatedData
  // ...
}
```

### Rate Limiting
Consider adding rate limiting to prevent spam:

```typescript
// Simple in-memory rate limiting (production: use Redis)
const submissionTimes = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const submissions = submissionTimes.get(ip) || [];

  // Remove submissions older than 1 hour
  const recent = submissions.filter(time => now - time < 3600000);

  // Allow max 5 submissions per hour
  if (recent.length >= 5) {
    return false;
  }

  recent.push(now);
  submissionTimes.set(ip, recent);
  return true;
}
```

---

## 🧪 Testing

### Test Contact Form
1. Visit http://localhost:3000/contact
2. Fill out form
3. Submit
4. Check NoCodeBackend dashboard
5. Verify entry appears in `contact_submissions`

### Test Newsletter Signup
1. Add newsletter form to footer
2. Enter email
3. Submit
4. Check `newsletter_subscribers` table

---

## 💰 Pricing & Limits

### NoCodeBackend Pricing (Approximate)

| Plan | Price | Records | API Calls | Storage |
|------|-------|---------|-----------|---------|
| Free | £0/mo | 1,000 | 10,000/mo | 100MB |
| Starter | £19/mo | 10,000 | 100,000/mo | 1GB |
| Pro | £49/mo | 100,000 | 1M/mo | 10GB |
| Business | £99/mo | Unlimited | Unlimited | 50GB |

**Recommendation:** Start with Free tier, upgrade to Starter (£19/mo) when you hit limits.

---

## 🚀 Launch Checklist

Before going live:

- [ ] All tables created in NoCodeBackend
- [ ] API keys added to Vercel environment variables
- [ ] Contact form tested and working
- [ ] Newsletter signup tested
- [ ] Email notifications enabled
- [ ] Data exports tested (CSV)
- [ ] Rate limiting implemented
- [ ] Error handling in place
- [ ] Success messages working
- [ ] Mobile forms tested

---

## 📞 Support

**NoCodeBackend Docs:** https://docs.nocodebackend.com
**Support Email:** support@nocodebackend.com

**Common Issues:**
- API key not working → Check environment variables
- CORS errors → Ensure correct project ID
- Forms not submitting → Check browser console for errors

---

**Ready to implement?** Start with Step 1: Sign up for NoCodeBackend! 🎉
