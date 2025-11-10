# Release0 Conversation Flows for Kitchen OS

This document provides detailed conversation flow templates ready to be implemented in the Release0 visual builder.

---

## Table of Contents

1. [Flow 1: Welcome & Product Discovery](#flow-1-welcome--product-discovery)
2. [Flow 2: Food Safe System Deep Dive](#flow-2-food-safe-system-deep-dive)
3. [Flow 3: AllerQ Deep Dive](#flow-3-allerq-deep-dive)
4. [Flow 4: Food Label System Deep Dive](#flow-4-food-label-system-deep-dive)
5. [Flow 5: F*** Waste Deep Dive](#flow-5-f-waste-deep-dive)
6. [Flow 6: Lead Qualification & Scoring](#flow-6-lead-qualification--scoring)
7. [Flow 7: Affiliate Program Flow](#flow-7-affiliate-program-flow)
8. [Flow 8: Pricing Calculator](#flow-8-pricing-calculator)
9. [Flow 9: Product Comparison](#flow-9-product-comparison)
10. [Flow 10: Demo Booking](#flow-10-demo-booking)

---

## System Prompt for All Flows

Add this as the global system prompt in Release0 settings:

```
You are the Kitchen OS AI Assistant, a knowledgeable and friendly consultant helping professional kitchens discover digital solutions.

## Products Overview:

**Food Safe System (FSS)** - £90/month avg
Digital HACCP compliance & automated temperature monitoring
- Automated wireless temp sensors
- Real-time alerts for non-compliance
- Cloud-based audit-ready records
- Saves 3-5 hours/week on paperwork

**AllerQ** - £7.49/month (£74/year)
Digital allergen menus with multilingual QR codes
- 30+ languages instant translation
- Customer-facing allergen information
- Update menus in seconds
- Improves customer trust and accessibility

**Food Label System (FLS)** - £35/month
Automated allergen-safe date labeling
- Natasha's Law (UK PPDS) compliant
- Integrated Android tablet + thermal printer
- 2,000 free labels included
- Barcode scanning for inventory

**F*** Waste** - £150/month
IoT smart scales for waste tracking & reduction
- 50%+ waste reduction typical
- 14:1 ROI average
- Real-time analytics dashboard
- Identifies waste patterns

## Your Communication Style:
- Ask thoughtful qualifying questions
- Focus on problems solved, not just features
- Provide specific ROI examples when relevant
- Be concise but informative (2-3 sentences per response)
- Use emojis sparingly and professionally
- Always offer next steps (demo, pricing, more info)

## Remember:
You're not just selling products—you're helping kitchens solve real operational challenges. Understand their pain points first, then recommend solutions that truly fit their needs.
```

---

## Flow 1: Welcome & Product Discovery

**Agent Name**: `Kitchen OS - Product Discovery`
**Description**: Main entry point for all visitors

### Block 1: Welcome Message

**Type**: Text Block

```
Hi! 👋 I'm the Kitchen OS AI assistant.

I help professional kitchens find the perfect digital solutions for:
• Food safety & HACCP compliance
• Allergen management & labeling
• Food waste tracking & reduction

What brings you here today?
```

**Buttons**:
- `Food safety & HACCP` → Go to Flow 2 (Food Safe System)
- `Allergen management` → Show Allergen Options
- `Food waste tracking` → Go to Flow 5 (F*** Waste)
- `I'm not sure` → Go to AI Discovery Block

---

### Block 2: Allergen Options Split

**Type**: Button Group

```
Great! We have two allergen solutions:

**AllerQ** - Digital multilingual allergen menus (£7.49/month)
**Food Label System** - Automated PPDS labeling (£35/month)

Which sounds more relevant to you?
```

**Buttons**:
- `AllerQ (digital menus)` → Go to Flow 3
- `Food Label System (labeling)` → Go to Flow 4
- `Tell me about both` → Go to AI Comparison Block

---

### Block 3: AI Discovery (For "I'm not sure")

**Type**: AI Chat Block

**AI Prompt**:
```
The user isn't sure what they need. Ask them 3-4 qualifying questions to understand their kitchen:

1. What type of kitchen do you operate? (restaurant, hotel, care home, catering, etc.)
2. What are your biggest operational challenges right now?
3. Have you had any compliance issues or audit concerns recently?
4. How many meals/covers do you serve daily?

Based on their answers, recommend 1-2 products that would be most beneficial and explain why specifically for their situation. Keep your recommendation to 3-4 sentences maximum.

Then ask if they'd like to learn more about your recommendation.
```

**Follow-up Buttons**:
- `Yes, tell me more` → Route to appropriate product flow based on recommendation
- `See all products` → Go to Product Overview Block
- `Book a demo` → Go to Flow 10

---

### Block 4: Product Overview (If requested)

**Type**: Text Block with Cards

```
Here's our complete product lineup:

**Food Safe System** - £90/month
✓ Automated HACCP & temperature monitoring
✓ 3-5 hours saved per week
→ Best for: Restaurants, hotels, care homes

**AllerQ** - £7.49/month
✓ Digital allergen menus in 30+ languages
✓ QR code access for customers
→ Best for: Any restaurant serving allergic customers

**Food Label System** - £35/month
✓ Automated allergen-safe labeling
✓ Natasha's Law compliant
→ Best for: Businesses selling prepacked food

**F*** Waste** - £150/month
✓ IoT scales + waste analytics
✓ 50%+ waste reduction
→ Best for: Large operations focused on sustainability

Which would you like to explore first?
```

**Buttons**:
- `Food Safe System` → Flow 2
- `AllerQ` → Flow 3
- `Food Label System` → Flow 4
- `F*** Waste` → Flow 5
- `Compare products` → Flow 9

---

## Flow 2: Food Safe System Deep Dive

**Agent Name**: `Kitchen OS - Food Safe System`

### Block 1: FSS Introduction

**Type**: Text Block

```
**Food Safe System** automates your HACCP compliance and temperature monitoring.

🌡️ **Wireless Temperature Sensors**
Automatic readings every 15 minutes - no more manual checks

📋 **Digital HACCP Checklists**
Pre-configured workflows for kitchens, delivered, allergens, cleaning

🔔 **Real-time Alerts**
Instant notifications if temps go out of range

☁️ **Cloud Storage & Reporting**
Audit-ready records available 24/7 from any device

**Average price: £90/month** (base £25 + £15 per sensor)

Typical savings: **3-5 hours/week** on manual paperwork
```

**Buttons**:
- `Show me pricing options` → Go to FSS Pricing Block
- `How does it work?` → Go to FSS Demo Video
- `Book a 15-min demo` → Go to Flow 10
- `Talk to AI about my needs` → Go to FSS AI Chat

---

### Block 2: FSS Pricing Calculator

**Type**: Input Block → Calculation → Result Display

**Question**: "How many temperature monitoring points do you have?"
**Input Type**: Number (1-50)
**Variable**: `fss_sensor_count`

**Calculation Logic**:
```
base_price = 25
sensor_price = 15
monthly_total = base_price + (fss_sensor_count * sensor_price)
annual_total = monthly_total * 12
annual_savings = 260 * 12  // 5 hours/week at £50/hour average
net_benefit = annual_savings - annual_total
```

**Display Result**:
```
Your estimated Food Safe System cost:

**£{monthly_total}/month** or **£{annual_total}/year**

This includes:
✓ Unlimited users & cloud storage
✓ 24/7 technical support
✓ Free software updates
✓ All HACCP digital checklists

**Expected savings**: ~£{annual_savings}/year in labor
**Net benefit**: ~£{net_benefit}/year

💡 Most customers see ROI within 2-3 months.
```

**Buttons**:
- `Book a demo` → Flow 10
- `Email me a proposal` → Capture Email Block
- `Ask more questions` → FSS AI Chat

---

### Block 3: FSS AI Chat

**Type**: AI Chat Block

**AI Prompt**:
```
The user wants to learn more about Food Safe System. Answer their questions about:
- Technical specifications (wireless sensors, cloud platform, mobile apps)
- Compliance coverage (HACCP, SFBB, local health department requirements)
- Integration with existing systems
- Training and onboarding process
- Support and maintenance
- Case studies and customer results

Be specific and technical if they ask detailed questions, but keep responses concise (3-4 sentences max).

If they seem ready to move forward, suggest booking a demo or getting a personalized proposal.

Key talking points:
- Battery-powered sensors (2-3 year battery life)
- Works on any device with internet (phone, tablet, computer)
- Setup in 1-2 hours typically
- Training included, most staff confident within 30 minutes
- 24/7 support via phone, email, and WhatsApp
```

**Always-available Buttons**:
- `Book a demo` → Flow 10
- `See pricing` → FSS Pricing Block
- `Compare with competitors` → Flow 9
- `Back to products` → Flow 1

---

### Block 4: FSS Use Cases

**Type**: Text Block

```
**Who benefits most from Food Safe System?**

✅ **Restaurants** struggling with daily manual temp checks
→ Case study: 12-location chain saved 60 hours/week

✅ **Hotels** managing multiple kitchens and service areas
→ Case study: 4-star hotel passed audit with zero findings

✅ **Care Homes** needing consistent, audit-ready records
→ Case study: Care home group eliminated failed inspections

✅ **Catering Companies** with mobile/temporary operations
→ Case study: Caterer monitors 15 events simultaneously

✅ **Dark Kitchens** needing centralized monitoring
→ Case study: Ghost kitchen group scaled from 3→10 locations

Does any of these sound like your situation?
```

**Buttons**:
- `Yes, similar to us` → FSS AI Chat (discuss their specific situation)
- `Show me case studies` → FSS Case Studies Block
- `I'm ready for a demo` → Flow 10

---

## Flow 3: AllerQ Deep Dive

**Agent Name**: `Kitchen OS - AllerQ`

### Block 1: AllerQ Introduction

**Type**: Text Block

```
**AllerQ** makes allergen information accessible to every customer in their own language.

🌍 **30+ Languages Instantly**
Customer scans QR code → sees menu in their language

📱 **Always Up-to-Date**
Update your menu once → changes reflect everywhere immediately

🍽️ **Clear Allergen Information**
All 14 major allergens clearly highlighted for each dish

✅ **Build Customer Trust**
Show you take allergen safety seriously

**Price: £7.49/month** (£74/year)

Perfect for any restaurant serving customers with allergies or dietary restrictions.
```

**Buttons**:
- `See a demo menu` → AllerQ Demo Link
- `How does setup work?` → AllerQ Setup Block
- `Book a demo` → Flow 10
- `Ask questions` → AllerQ AI Chat

---

### Block 2: AllerQ Setup Process

**Type**: Text Block

```
**Getting started with AllerQ is simple:**

**Step 1:** Add your menu items (15-30 minutes)
- Enter dish names and descriptions
- Mark which allergens are present
- Add dietary info (vegan, gluten-free, etc.)

**Step 2:** We generate your QR codes (instant)
- Unique code for each location
- Print or display digitally
- Customizable with your branding

**Step 3:** Customers scan and browse (seconds)
- Choose their language
- See allergen warnings highlighted
- Feel confident ordering

**Total setup time: ~30 minutes**
**Ongoing updates: ~2 minutes per menu change**

Most restaurants are live within 24 hours of signing up.
```

**Buttons**:
- `This sounds perfect` → Capture Lead Info
- `Can I see pricing?` → Show "£7.49/month, first month free"
- `Book a demo` → Flow 10

---

## Flow 4: Food Label System Deep Dive

**Agent Name**: `Kitchen OS - Food Label System`

### Block 1: FLS Introduction

**Type**: Text Block

```
**Food Label System** automates your allergen-safe date labeling for Natasha's Law compliance.

📱 **Integrated Android Tablet & Printer**
All-in-one system - no separate devices needed

🏷️ **Professional Labels in Seconds**
No more handwriting dates and allergens

⚖️ **UK Natasha's Law Compliant**
All 14 allergens + ingredients automatically displayed

📊 **Digital Recipe Database**
Track ingredients, allergens, and use-by dates

**Price: £35/month** (includes hardware + 2,000 labels)

Ideal for: Delis, bakeries, cafes, farm shops, catering companies
```

**Buttons**:
- `See label examples` → FLS Label Gallery
- `How much does it cost?` → FLS Pricing Block
- `Book a demo` → Flow 10
- `Ask about Natasha's Law` → FLS Compliance Block

---

### Block 2: Natasha's Law Explained

**Type**: Text Block

```
**What is Natasha's Law?**

UK regulations (PPDS - Prepacked for Direct Sale) require:
✅ Full ingredient list on every label
✅ Clear allergen warnings (14 major allergens)
✅ Use-by or best-before dates
✅ Company name and address

**Who needs to comply?**
Any business selling food:
- Prepared on-site
- Packaged before customer orders
- Sold from same premises

Examples: sandwiches, salads, baked goods, meal prep, takeaway containers

**Penalties for non-compliance:**
- Unlimited fines
- Closure orders
- Reputational damage

**Food Label System ensures you're always compliant** - labels are generated automatically with all required information.
```

**Buttons**:
- `This applies to us` → FLS Pricing Block
- `Not sure if we need this` → AI Chat (assess their situation)
- `Show me the system` → FLS Demo Video

---

### Block 3: FLS Pricing Details

**Type**: Text Block

```
**Food Label System Pricing:**

**£35/month** (excluding VAT)

Includes:
✅ Integrated Android tablet
✅ Thermal label printer
✅ 2,000 allergen-safe labels per month
✅ Unlimited products in database
✅ Unlimited team members
✅ All software updates
✅ Technical support

**Additional labels:** £19.99 per 1,000 labels

**One-time setup:** £99 (waived for annual plans)

**Annual plan discount:** Pay £350/year (save £70 = 2 months free)

Most businesses use 1,500-2,500 labels/month.
```

**Buttons**:
- `Perfect, let's get started` → Capture Lead + Demo
- `Email me a quote` → Capture Email
- `Talk to sales` → Flow 10

---

## Flow 5: F*** Waste Deep Dive

**Agent Name**: `Kitchen OS - F*** Waste`

### Block 1: F*** Waste Introduction

**Type**: Text Block

```
**F*** Waste** helps you cut food waste by 50%+ using IoT smart scales.

⚖️ **Smart Under-Bin Scales**
Track what's thrown away automatically - no manual logging

📊 **Real-time Analytics Dashboard**
See waste patterns by day, shift, staff, ingredient

💰 **Proven ROI: 14:1 Average**
£150/month investment typically saves £2,100/month

♻️ **Sustainability Reporting**
Track CO2 reduction, meet net-zero goals

**Price: £150/month**

Typical results:
- 50-70% waste reduction within 3 months
- £10,000-50,000 annual savings (depending on size)
- Staff behavior change through awareness

Best for: Hotels, large restaurants, catering companies, chains
```

**Buttons**:
- `Calculate my potential savings` → Waste Calculator
- `How does it work?` → F*** Waste Demo Video
- `Book a demo` → Flow 10
- `Ask questions` → Waste AI Chat

---

### Block 2: Waste Savings Calculator

**Type**: Multi-Step Input → Calculation

**Question 1**: "How many covers do you serve per day?"
**Input Type**: Number
**Variable**: `covers_per_day`

**Question 2**: "What's your approximate food cost percentage?"
**Options**:
- 25-30% (Most restaurants)
- 30-35% (Higher-end)
- 35-40% (Premium/fine dining)
- 40%+ (Specialty/low volume)

**Variable**: `food_cost_percent`

**Question 3**: "What's your average check/cover value?"
**Input Type**: Currency (£)
**Variable**: `avg_check`

**Calculation**:
```
daily_revenue = covers_per_day * avg_check
daily_food_cost = daily_revenue * (food_cost_percent / 100)
annual_food_cost = daily_food_cost * 365

// Industry average: 4-10% of food cost is wasted
// We use conservative 6%
current_annual_waste = annual_food_cost * 0.06

// F*** Waste typically achieves 50-70% reduction
// We use conservative 50%
potential_savings = current_annual_waste * 0.50

// Subtract F*** Waste cost
fw_annual_cost = 150 * 12  // £1,800
net_annual_benefit = potential_savings - fw_annual_cost
roi_multiple = potential_savings / fw_annual_cost
payback_months = 12 / roi_multiple
```

**Display Result**:
```
Based on your inputs:

**Current estimated food waste:** £{current_annual_waste:,.0f}/year

**Potential savings with F*** Waste:**
💰 **£{potential_savings:,.0f}/year** (50% reduction)

**F*** Waste cost:** £1,800/year

**Net benefit:** £{net_annual_benefit:,.0f}/year
**ROI:** {roi_multiple}:1
**Payback period:** {payback_months} months

🌱 **Environmental impact:**
- Reduce CO2 by ~{(potential_savings * 2.5):,.0f} kg/year
- Equivalent to planting {(potential_savings * 0.1):,.0f} trees

This is a conservative estimate. Many customers see 60-70% reduction.
```

**Buttons**:
- `This is huge! Book demo` → Flow 10
- `Email me this calculation` → Capture Email + Send
- `How do you achieve this?` → Waste AI Chat

---

## Flow 6: Lead Qualification & Scoring

**Agent Name**: `Kitchen OS - Lead Qualification`

This flow should be called from other flows when capturing lead information.

### Block 1: Collect Basic Info

**Type**: Multi-Step Form

**Field 1 - Name:**
```
Let's get you the right information. What's your name?
```
**Input Type**: Text
**Variable**: `user_name`
**Required**: Yes

**Field 2 - Email:**
```
And your email address? I'll send you detailed information.
```
**Input Type**: Email
**Variable**: `user_email`
**Required**: Yes

**Field 3 - Company:**
```
What's your company or kitchen name?
```
**Input Type**: Text
**Variable**: `company_name`
**Required**: No

**Field 4 - Phone (Optional):**
```
Phone number? (Optional, but helps us respond faster)
```
**Input Type**: Phone
**Variable**: `user_phone`
**Required**: No

---

### Block 2: Qualification Questions

**Question 1 - Role:**
```
What's your role in the business?
```
**Options**:
- Owner/Partner (score: 10)
- Head Chef/Kitchen Manager (score: 7)
- Operations Manager (score: 7)
- General Manager (score: 5)
- Consultant/Advisor (score: 3)
- Other (score: 2)

**Variable**: `role`
**Variable**: `role_score`

---

**Question 2 - Budget:**
```
What's your budget range for digital kitchen solutions?
```
**Options**:
- Under £50/month (score: 1)
- £50-£150/month (score: 3)
- £150-£300/month (score: 5)
- £300-£500/month (score: 7)
- £500+/month (score: 10)
- Not sure yet (score: 2)

**Variable**: `budget`
**Variable**: `budget_score`

---

**Question 3 - Timeline:**
```
When are you looking to implement a solution?
```
**Options**:
- Immediately (score: 10)
- Within 2 weeks (score: 8)
- Within 1 month (score: 7)
- 1-3 months (score: 5)
- 3-6 months (score: 3)
- Just exploring options (score: 1)

**Variable**: `timeline`
**Variable**: `timeline_score`

---

**Question 4 - Authority:**
```
Are you the decision-maker for purchasing kitchen software?
```
**Options**:
- Yes, I make the final decision (score: 10)
- I'm part of the decision team (score: 5)
- I'll present to decision-makers (score: 3)
- I'm researching for someone else (score: 1)

**Variable**: `authority`
**Variable**: `authority_score`

---

### Block 3: Calculate Lead Score

**Type**: Logic Block

**Calculation**:
```javascript
total_score = role_score + budget_score + timeline_score + authority_score

if (total_score >= 20) {
  lead_quality = "Hot"
  lead_priority = "high"
} else if (total_score >= 12) {
  lead_quality = "Warm"
  lead_priority = "medium"
} else {
  lead_quality = "Cold"
  lead_priority = "low"
}

// Store for webhook
lead_score = total_score
```

---

### Block 4: Route Based on Quality

**Type**: Conditional Router

**If lead_quality == "Hot":**
```
Perfect! Based on your situation, I think we can help you significantly.

{user_name}, you're exactly the type of customer who sees the fastest ROI with our solutions.

Would you like to:
→ Book a 15-min demo call this week?
→ Or speak with someone today?
```

**Buttons**:
- `Book demo this week` → Flow 10 (Calendar)
- `Call me today` → Urgent Lead Block
- `Email me information first` → Send Info Email

---

**If lead_quality == "Warm":**
```
Thanks {user_name}! I'll send you detailed information about the products you're interested in.

In the meantime, would you like to:
→ See a quick product demo video?
→ Download our product comparison guide?
→ Book a demo for next week?
```

**Buttons**:
- `Watch demo video` → Product Demo Video
- `Download guide` → PDF Download + Email
- `Book demo` → Flow 10

---

**If lead_quality == "Cold":**
```
Thanks for your interest, {user_name}!

I'll send you information about {product_interest} and add you to our newsletter for:
- Product updates
- Case studies
- Industry tips

Feel free to reach out anytime at hello@kitchenos.com
```

**Buttons**:
- `Visit our blog` → External Link
- `Follow on LinkedIn` → External Link
- `Done` → End Conversation

---

### Block 5: Webhook Trigger

**Type**: Webhook Block

**Endpoint**: `https://kitchenos.com/api/chatbot/release0`
**Method**: POST

**Payload** (all variables collected in flow):
```json
{
  "conversation_id": "{{conversation_id}}",
  "user_data": {
    "name": "{{user_name}}",
    "email": "{{user_email}}",
    "company": "{{company_name}}",
    "phone": "{{user_phone}}",
    "role": "{{role}}"
  },
  "variables": {
    "product_interest": "{{product_interest}}",
    "lead_score": "{{lead_score}}",
    "lead_quality": "{{lead_quality}}",
    "budget": "{{budget}}",
    "timeline": "{{timeline}}",
    "authority": "{{authority}}",
    "affiliate_id": "{{affiliate_id}}"
  },
  "metadata": {
    "source": "chatbot",
    "page_url": "{{page_url}}",
    "referrer": "{{referrer}}"
  }
}
```

---

## Flow 7: Affiliate Program Flow

**Agent Name**: `Kitchen OS - Affiliate Program`

### Block 1: Detect Affiliate Referral

**Type**: Logic Block

**Condition**: Check if URL contains `?ref=` parameter

**If affiliate detected:**
```
Welcome! 👋

I see you were referred by one of our partners.

Are you here to:
→ Learn about our products for your business?
→ Learn about our affiliate program?
→ Both?
```

**Buttons**:
- `Products for my business` → Flow 1 (track affiliate_id)
- `Affiliate program` → Affiliate Info Block
- `Both` → Affiliate Info Block

---

### Block 2: Affiliate Program Info

**Type**: Text Block

```
**Kitchen OS Affiliate Program**

Earn generous recurring commissions by referring customers to our products:

💰 **25% recurring commission for 12 months**
🔧 **10% commission on hardware sales**

**Earnings per product:**

**Food Safe System** (£90/month avg)
→ You earn: **£22.50/month per customer**
→ Introduce 1/month = **£3,240/year**

**Food Label System** (£35/month)
→ You earn: **£8.75/month per customer**
→ Introduce 1/month = **£1,050/year**

**Who's a good fit?**
- Food safety consultants
- Restaurant equipment suppliers
- Hospitality trainers
- Industry bloggers/influencers
- Anyone with connections to professional kitchens

Powered by Push Lap Growth - reliable tracking & monthly payouts.
```

**Buttons**:
- `Join affiliate program` → External Link (Push Lap Growth)
- `Learn about products first` → Flow 1
- `Speak with partnerships team` → Capture Lead + Contact

---

## Flow 8: Pricing Calculator

**Agent Name**: `Kitchen OS - Pricing Calculator`

**Description**: Multi-product pricing calculator

### Block 1: Product Selection

```
Let's calculate pricing for your specific needs.

Which product(s) are you interested in?
(Select all that apply)
```

**Checkboxes**:
- Food Safe System
- AllerQ
- Food Label System
- F*** Waste

**Variable**: `selected_products` (array)

---

### Block 2: FSS Pricing (If selected)

**Conditional Block - Only show if FSS selected**

```
**Food Safe System Pricing:**

How many temperature monitoring points do you need?
(fridges, freezers, hot holds, etc.)
```

**Input Type**: Number (1-50)
**Variable**: `fss_sensors`

**Calculate**:
```
fss_monthly = 25 + (fss_sensors * 15)
fss_annual = fss_monthly * 12
```

---

### Block 3: Combined Pricing Display

**Type**: Text Block with Dynamic Content

```
**Your Estimated Pricing:**

{if fss_selected}
**Food Safe System**
- Monthly: £{fss_monthly}
- Annual: £{fss_annual}
{endif}

{if allerq_selected}
**AllerQ**
- Monthly: £7.49
- Annual: £74 (save £15)
{endif}

{if fls_selected}
**Food Label System**
- Monthly: £35
- Annual: £350 (save £70)
{endif}

{if waste_selected}
**F*** Waste**
- Monthly: £150
- Annual: £1,620 (save £180)
{endif}

**Total Monthly:** £{total_monthly}
**Total Annual:** £{total_annual}

💡 **Bundle discount available:** Save an additional 10% when you purchase 2+ products together.

**With bundle discount:** £{total_with_discount}/month
```

**Buttons**:
- `Email me this quote` → Capture Email + Send PDF
- `Book a demo` → Flow 10
- `Speak with sales` → Urgent Contact

---

## Flow 9: Product Comparison

**Agent Name**: `Kitchen OS - Product Comparison`

### Block 1: Comparison Request

```
I can help you compare Kitchen OS products or compare us with competitors.

What would you like to compare?
```

**Buttons**:
- `Kitchen OS products` → Internal Comparison
- `vs Competitors` → Competitor Comparison
- `Both` → Full Comparison

---

### Block 2: Competitor Selection (If selected)

```
Which competitor are you considering?
```

**Buttons** (each leads to specific comparison page):
- Trail (food safety)
- Kelsius (food safety)
- Navitas (food safety)
- Labl.it (labeling)
- Winnow (waste)
- Leanpath (waste)
- Orbisk (waste)
- Other (opens AI chat for discussion)

---

## Flow 10: Demo Booking

**Agent Name**: `Kitchen OS - Demo Booking`

### Block 1: Demo Type Selection

```
Great! Let's get you a personalized demo.

What type of demo works best for you?
```

**Buttons**:
- `15-min quick overview` → Cal.com (15-min event)
- `30-min detailed walkthrough` → Cal.com (30-min event)
- `Request callback` → Urgent Contact Form
- `Watch pre-recorded demo first` → Demo Video → Then booking

---

### Block 2: Calendar Integration

**Type**: Calendar Block (Cal.com)

**Event Types**:
1. "Kitchen OS - Quick Demo" (15 min)
2. "Kitchen OS - Detailed Demo" (30 min)

**Pre-fill data**:
- Name: `{{user_name}}`
- Email: `{{user_email}}`
- Notes: `Interested in: {{product_interest}}, Lead quality: {{lead_quality}}`

---

### Block 3: Booking Confirmation

**Type**: Text Block

```
Perfect! You're all set.

**Your demo is booked for:**
{date_time}

You'll receive:
✅ Calendar invitation at {{user_email}}
✅ Reminder 24 hours before
✅ Product information to review beforehand

**Before the call, we'll discuss:**
- Your specific operational challenges
- How {product_interest} can help
- Live product demonstration
- Pricing and implementation

See you soon!
```

**Buttons**:
- `Add more to discuss` → Notes Field
- `Done` → End Conversation

---

## Conversation Best Practices

### 1. Always Offer Next Steps

Every conversation should end with clear next steps:
- Book a demo
- Download information
- Email me details
- Speak with team

### 2. Personalization

Use collected variables throughout:
- `{user_name}` - Use their name
- `{company_name}` - Reference their business
- `{product_interest}` - Tailor recommendations

### 3. Progressive Disclosure

Don't overwhelm with all information at once:
1. Start with high-level overview
2. Let them ask questions or choose path
3. Provide details based on interest level
4. Save technical specs for later in conversation

### 4. Clear Value Propositions

Every product mention should include:
- Problem it solves
- Key benefit/outcome
- Approximate cost
- Typical ROI or savings

### 5. Urgency Without Pressure

Encourage action without being pushy:
- "Most customers see ROI within 2-3 months"
- "Setup typically takes less than a day"
- "Would you like to see how this works for you?"

NOT:
- "Limited time offer!"
- "Act now!"
- "Don't miss out!"

### 6. Fallback to Human

Always provide escape hatch:
- "Want to speak with someone directly?"
- "Need help? Email hello@kitchenos.com"
- "Or call us at [phone number]"

---

## Testing Checklist

Before launching flows:

### Functionality Tests
- [ ] All buttons work and route correctly
- [ ] Calculations are accurate (test with known values)
- [ ] Variables store and display properly
- [ ] Conditional logic works (test all paths)
- [ ] Webhook sends correct data
- [ ] Calendar integration books successfully
- [ ] Email capture and sends work

### Content Tests
- [ ] No typos or grammatical errors
- [ ] Pricing is current and accurate
- [ ] Links open in correct pages
- [ ] Product information is up-to-date
- [ ] Contact information is correct

### User Experience Tests
- [ ] Flows feel natural and conversational
- [ ] Not too long (under 10 exchanges for most paths)
- [ ] Mobile-friendly display
- [ ] Load times are fast
- [ ] Images/videos display properly

### Edge Cases
- [ ] What if user enters invalid data?
- [ ] What if user goes back?
- [ ] What if API/webhook fails?
- [ ] What if user abandons mid-conversation?

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: After first 500 conversations (gather real user data)
