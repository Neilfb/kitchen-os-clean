# Release0 AI Chatbot Implementation Guide for Kitchen OS

## Overview

This guide provides step-by-step instructions for implementing Release0, a no-code conversational AI platform, as the Kitchen OS customer support and lead generation chatbot.

**Selected Plan**: Release0 Plan 2 (AppSumo Lifetime Deal)
- **Cost**: $118 one-time payment (originally $480/year)
- **Capacity**: 3,000 monthly conversations, 100 agents, 5 team users
- **Lifetime Access**: No recurring fees

---

## Phase 1: Purchase & Account Setup

### Step 1: Purchase on AppSumo

1. Visit: https://appsumo.com/products/release0/
2. Select **Plan 2** ($118) or **Plan 3** ($177 if expecting >3K chats/month)
3. Complete purchase
4. Check email for redemption code

### Step 2: Redeem Code & Create Account

1. Go to: https://release0.com/redeem
2. Enter AppSumo code
3. Create account with Kitchen OS email
4. Set organization name: "Kitchen OS"
5. Complete profile setup

### Step 3: Configure Workspace

1. Navigate to Settings → General
2. Set timezone: Europe/London
3. Set language: English (UK)
4. Add team members (up to 5):
   - Add primary contacts
   - Set roles: Admin, Agent, or Viewer

---

## Phase 2: AI Configuration

### Step 1: Get Anthropic API Key

1. Go to: https://console.anthropic.com/
2. Sign up/login with Kitchen OS account
3. Navigate to API Keys
4. Create new key: "Kitchen OS Chatbot"
5. Copy API key (starts with `sk-ant-`)
6. **Save securely** - you'll need this

**Recommended Model**: Claude 3.5 Sonnet
- Balance of intelligence and cost
- Excellent for customer service
- Strong product knowledge capabilities

### Step 2: Connect AI to Release0

1. In Release0: Settings → Integrations → AI Providers
2. Click "Add Provider" → Select "Anthropic (Claude)"
3. Paste API key
4. Select model: `claude-3-5-sonnet-20241022`
5. Test connection
6. Save configuration

### Step 3: Set System Prompt

Create global system prompt for Kitchen OS context:

```
You are the Kitchen OS AI Assistant, helping professional kitchens discover digital solutions for food safety, allergen management, and waste tracking.

## Our Products:

**Food Safe System (FSS)**
- Digital HACCP compliance & automated temperature monitoring
- Pricing: £90/month average
- Key features: Automated temp checks, real-time alerts, cloud reporting
- Ideal for: Restaurants, hotels, care homes, catering

**AllerQ**
- Digital allergen menus with QR codes
- Pricing: £7.49/month (£74/year)
- Key features: 30+ languages, instant updates, customer accessibility
- Ideal for: Any restaurant with allergen concerns

**Food Label System (FLS)**
- Automated date labels with allergen compliance
- Pricing: £35/month (includes tablet + printer)
- Key features: Natasha's Law compliance, 2,000 free labels, barcode scanning
- Ideal for: Businesses selling prepacked food (PPDS)

**F*** Waste**
- IoT smart scales for waste tracking
- Pricing: £150/month
- Key features: 50%+ waste reduction, 14:1 ROI, real-time analytics
- Ideal for: Large kitchens, hotels, chains focused on sustainability

## Your Role:
- Ask qualifying questions to understand their needs
- Recommend appropriate products based on their challenges
- Provide pricing and ROI information
- Capture lead information (name, email, company)
- Book demos when interest is high
- Be friendly, professional, and concise
- Focus on value and outcomes, not just features

## Tone:
Professional yet approachable. Think of yourself as a knowledgeable consultant who genuinely wants to help kitchens improve operations.
```

---

## Phase 3: Build Conversation Flows

### Flow 1: Welcome & Product Discovery

**Agent Name**: "Kitchen OS Product Discovery"

**Flow Structure**:

```
1. [WELCOME BLOCK]
   Text: "Hi! 👋 I'm the Kitchen OS AI assistant. I help professional kitchens find the perfect digital solutions for food safety, allergen management, and waste tracking.

   What brings you here today?"

   Buttons:
   - "Food safety & HACCP compliance" → Go to FSS Flow
   - "Allergen management & labeling" → Go to Allergen Flow
   - "Food waste tracking" → Go to Waste Flow
   - "I'm not sure, help me decide" → Go to Qualification Flow

2. [AI BLOCK - Qualification Flow]
   Prompt: "Ask the user about their kitchen:
   - What type of kitchen? (restaurant, hotel, catering, care home, etc.)
   - How many covers per day?
   - What are their main operational challenges?
   - What systems are they currently using?

   Based on their answers, recommend 1-2 products that would be most beneficial."

3. [COLLECT NAME]
   Input type: Text
   Label: "Before I show you personalized recommendations, what's your name?"
   Variable: user_name

4. [COLLECT EMAIL]
   Input type: Email
   Label: "And what's your email address? I'll send you detailed information."
   Variable: user_email

5. [COLLECT COMPANY]
   Input type: Text
   Label: "What's your company or kitchen name?"
   Variable: company_name

6. [AI RECOMMENDATION]
   Prompt: "Based on the conversation, provide:
   1. Primary recommended product with pricing
   2. Why it's a good fit for their needs
   3. Expected ROI or benefits
   4. Option to book a demo or ask more questions"

7. [CALL TO ACTION]
   Buttons:
   - "Book a demo" → Calendar integration (Cal.com)
   - "See pricing details" → Go to Pricing Flow
   - "Ask another question" → Return to AI chat
   - "Send me information" → End conversation + trigger email
```

### Flow 2: Food Safe System Deep Dive

```
1. [FSS INTRO]
   Text: "**Food Safe System** is our digital HACCP compliance solution.

   🌡️ Automated temperature monitoring
   📋 Digital HACCP checklists
   🔔 Real-time alerts for non-compliance
   ☁️ Cloud-based reporting

   Average price: £90/month

   Want to learn more?"

   Buttons:
   - "Yes, tell me more" → Continue
   - "Show me pricing options" → Pricing flow
   - "Book a demo" → Calendar
   - "Back to main menu" → Welcome

2. [FSS BENEFITS VIDEO]
   Embed: YouTube video or product demo
   (If available, embed https://www.foodsafesystem.com demo)

3. [FSS USE CASE]
   Text: "Perfect for:
   • Restaurants struggling with daily temp checks
   • Hotels managing multiple kitchens
   • Care homes needing audit-ready records
   • Catering companies with mobile operations

   Typical savings: 3-5 hours/week on paperwork"

4. [FSS PRICING CALCULATOR]
   Input: "How many temperature monitoring points?"
   Variable: temp_points

   Logic: Calculate = £25 base + (temp_points × £15)

   Display: "Your estimated monthly cost: £{calculated_price}

   This includes unlimited users, cloud storage, and 24/7 support."

5. [FSS CTA]
   Buttons:
   - "Book a 15-min demo" → Calendar
   - "Email me a proposal" → Capture email + end
   - "Compare with other products" → Product comparison flow
```

### Flow 3: Lead Qualification & Scoring

```
1. [QUALIFYING QUESTIONS]
   Multi-step form:

   Q1: "What's your role?"
   Options: Owner/Partner, Head Chef, Kitchen Manager, Operations Manager, Consultant, Other
   Variable: role

   Q2: "What's your budget range for digital solutions?"
   Options:
   - Under £50/month (score: 1)
   - £50-£150/month (score: 3)
   - £150-£300/month (score: 5)
   - £300+ per month (score: 7)
   - Not sure yet (score: 2)
   Variable: budget_score

   Q3: "When are you looking to implement?"
   Options:
   - Immediately (score: 10)
   - Within 1 month (score: 7)
   - 1-3 months (score: 5)
   - 3-6 months (score: 3)
   - Just exploring (score: 1)
   Variable: timeline_score

   Q4: "Are you the decision-maker?"
   Options:
   - Yes, I make the final decision (score: 10)
   - I'm part of the decision team (score: 5)
   - I'll present to decision-makers (score: 3)
   Variable: authority_score

2. [CALCULATE LEAD SCORE]
   Logic Block:
   total_score = budget_score + timeline_score + authority_score

   If total_score >= 17: lead_quality = "Hot"
   Else if total_score >= 10: lead_quality = "Warm"
   Else: lead_quality = "Cold"

3. [CONDITIONAL ROUTING]
   If lead_quality == "Hot":
   → Show immediate demo booking
   → Send high-priority notification to team
   → Offer phone call option

   If lead_quality == "Warm":
   → Send detailed product information email
   → Add to nurture sequence
   → Offer demo in 1-2 weeks

   If lead_quality == "Cold":
   → Add to newsletter
   → Send educational content
   → Follow up in 3 months
```

### Flow 4: Affiliate Program Flow

```
1. [DETECT AFFILIATE]
   Check URL parameter: ?ref={affiliate_id}
   If present, store: affiliate_id variable

2. [AFFILIATE WELCOME]
   Text: "Welcome! 👋 I see you were referred by one of our partners.

   Are you interested in:
   - Learning about our products?
   - Joining our affiliate program?
   - Both?"

   Buttons based on choice

3. [AFFILIATE INFO]
   Text: "Our Affiliate Program offers:

   💰 25% recurring commission for 12 months
   🔧 10% commission on hardware sales

   **Food Safe System**: £22.50/month per customer
   **Food Label System**: £8.75/month per customer

   Introduce 1 restaurant per month → Earn £3,240/year

   Want to learn more?"

   Button: "Join Affiliate Program" → External link to Push Lap Growth

4. [TRACK CONVERSION]
   Webhook: Send affiliate_id + lead email to Kitchen OS API
   Endpoint: /api/affiliates/track-lead
```

---

## Phase 4: Integrations Setup

### Integration 1: Google Sheets (Lead Capture)

**Purpose**: Automatically save all lead data to Google Sheets

**Setup**:
1. Release0 → Integrations → Google Sheets
2. Connect Google account
3. Create new sheet: "Kitchen OS Chatbot Leads"
4. Map fields:
   - Column A: Timestamp
   - Column B: Name (user_name)
   - Column C: Email (user_email)
   - Column D: Company (company_name)
   - Column E: Product Interest
   - Column F: Lead Score (lead_quality)
   - Column G: Budget
   - Column H: Timeline
   - Column I: Conversation ID

**Action**: Add to end of every lead capture flow

### Integration 2: Zapier → NoCodeBackend

**Purpose**: Save leads directly to Kitchen OS database

**Setup**:
1. Release0 → Integrations → Zapier
2. Create Zap:
   - Trigger: New Release0 conversation completed
   - Action: HTTP POST to NoCodeBackend API

**Webhook Payload**:
```json
{
  "name": "{{user_name}}",
  "email": "{{user_email}}",
  "company": "{{company_name}}",
  "product_interest": "{{product}}",
  "lead_score": "{{lead_quality}}",
  "conversation_id": "{{conversation_id}}",
  "source": "chatbot",
  "created_at": "{{timestamp}}"
}
```

**NoCodeBackend Endpoint**:
- Table: `chat_leads`
- Method: POST /api/chat_leads

### Integration 3: Cal.com (Demo Booking)

**Purpose**: Let users book demos directly in chat

**Setup**:
1. Create Cal.com account (if not exists)
2. Set up event type: "Kitchen OS Product Demo" (15 min)
3. Release0 → Add "Calendar" block
4. Connect Cal.com
5. Select event type
6. Add to CTA flows

**Result**: Users can book directly, gets added to team calendar

### Integration 4: EmailIt Notifications

**Purpose**: Notify team of hot leads immediately

**Setup via Zapier**:
1. Zap trigger: Release0 conversation with lead_quality = "Hot"
2. Action: HTTP POST to Kitchen OS API → EmailIt
3. Email template:

```
Subject: 🔥 Hot Lead from Website Chatbot

Name: {{user_name}}
Email: {{user_email}}
Company: {{company_name}}
Interest: {{product}}
Budget: {{budget}}
Timeline: {{timeline}}

Conversation: https://release0.com/conversations/{{conversation_id}}

Action: Follow up within 4 hours
```

### Integration 5: Google Analytics

**Purpose**: Track chatbot engagement and conversions

**Setup**:
1. Release0 → Integrations → Google Analytics
2. Enter GA4 Measurement ID: `{{NEXT_PUBLIC_GA_MEASUREMENT_ID}}`
3. Configure events:
   - `chat_started`
   - `product_viewed` (with product_name parameter)
   - `lead_captured`
   - `demo_booked`
   - `hot_lead_generated`

---

## Phase 5: Website Integration

### Step 1: Add Environment Variables

Add to `.env.local`:

```bash
# Release0 Chatbot Configuration
NEXT_PUBLIC_RELEASE0_AGENT_ID=your-agent-id-here
NEXT_PUBLIC_RELEASE0_ENABLED=true
RELEASE0_WEBHOOK_SECRET=your-webhook-secret-here
```

Add to `.env.production`:

```bash
NEXT_PUBLIC_RELEASE0_AGENT_ID=your-production-agent-id
NEXT_PUBLIC_RELEASE0_ENABLED=true
RELEASE0_WEBHOOK_SECRET=your-production-webhook-secret
```

### Step 2: Add Embed Code to Website

The embed code will be added to `src/app/layout.tsx` to display on all pages.

**Implementation**: See code in next file

---

## Phase 6: Testing Checklist

### Pre-Launch Testing

- [ ] Test welcome flow from start to finish
- [ ] Verify all product flows (FSS, AllerQ, FLS, F*** Waste)
- [ ] Test lead capture (check Google Sheets receives data)
- [ ] Verify NoCodeBackend webhook integration
- [ ] Test demo booking (book test appointment)
- [ ] Verify email notifications for hot leads
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Verify AI responses are accurate
- [ ] Test affiliate tracking with ?ref= parameter
- [ ] Check analytics tracking in GA4
- [ ] Verify chat bubble positioning and colors
- [ ] Test "minimize" and "maximize" functionality
- [ ] Check conversation history persistence

### Load Testing

- [ ] Test with 5 simultaneous conversations
- [ ] Verify response times under load
- [ ] Check database writes are successful
- [ ] Monitor for any errors or timeouts

### Edge Cases

- [ ] Test with invalid email addresses
- [ ] Test with very long text inputs
- [ ] Test with special characters in names
- [ ] Test closing chat mid-conversation
- [ ] Test returning after closing chat
- [ ] Test on slow internet connection

---

## Phase 7: Launch Plan

### Day 1: Soft Launch

**Morning**:
1. Deploy embed code to production
2. Enable chatbot for team members only (IP restriction)
3. Team testing session
4. Fix any issues found

**Afternoon**:
5. Remove IP restriction
6. Enable for 10% of traffic (A/B test)
7. Monitor analytics closely
8. Be ready for quick fixes

### Day 2-7: Gradual Rollout

- Day 2: 25% of traffic
- Day 3: 50% of traffic
- Day 4: 75% of traffic
- Day 5: 100% of traffic
- Day 6-7: Monitor, optimize, iterate

### Post-Launch Monitoring

**Daily** (First week):
- Check conversation count
- Review lead quality
- Monitor response accuracy
- Fix any reported issues

**Weekly** (First month):
- Analyze conversion rates
- Review most common questions
- Optimize underperforming flows
- A/B test variations

**Monthly** (Ongoing):
- ROI analysis
- Cost vs. value assessment
- Feature additions
- Scale planning (if approaching 3K conversations)

---

## Conversation Flow Templates

### Template 1: Problem → Solution → CTA

```
1. Identify pain point: "What's your biggest kitchen challenge?"
2. Empathize: "I understand, that's a common issue..."
3. Introduce solution: "Our [Product] was designed specifically for..."
4. Show value: "Customers typically see [benefit] in [timeframe]"
5. Prove it: "For example, [case study]..."
6. CTA: "Want to see how it would work for you?"
```

### Template 2: Discovery → Education → Qualification

```
1. Open question: "Tell me about your kitchen operations"
2. Follow-up questions based on answers
3. Educate: "Here's what other [similar businesses] use..."
4. Qualify: "What's your budget/timeline?"
5. Route: Hot → Demo, Warm → Email, Cold → Newsletter
```

### Template 3: Quick Info → Fast Conversion

```
1. Direct question: "Looking for [specific product]?"
2. Quick overview (2-3 bullets)
3. Pricing: "Starting at £X/month"
4. Immediate CTA: "Book a 15-min demo now?"
5. Alternative: "Or send me detailed info by email"
```

---

## Prompt Engineering Tips

### For Product Recommendations

**Good**:
```
"Based on what you've told me, I recommend Food Safe System because:
1. You mentioned spending 4+ hours/week on temp checks
2. FSS automates this entirely, saving ~15 hours/month
3. Your audit concerns are addressed with cloud-based records
4. ROI typically achieved in 2-3 months

Would you like to see it in action?"
```

**Bad**:
```
"You should get Food Safe System. It's great for HACCP."
```

### For Lead Qualification

**Good**:
```
"To make sure I recommend the right solution, help me understand:
- What size is your kitchen operation?
- How urgent is solving this problem?
- What's your budget range for this kind of solution?"
```

**Bad**:
```
"How much money do you have?"
```

### For Objection Handling

**Good**:
```
"I understand the investment is a concern. Let's look at it this way:
- Current cost of manual HACCP: ~5 hours/week = £X/year in labor
- Risk of failed audit: Potentially £X,XXX in fines
- FSS cost: £90/month = £1,080/year
- Net benefit: £X,XXX saved + peace of mind

Does that help put it in perspective?"
```

**Bad**:
```
"It's actually not that expensive."
```

---

## Success Metrics & KPIs

### Month 1 Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Total Conversations | 500+ | Release0 analytics |
| Completion Rate | 40%+ | % who complete full flow |
| Leads Captured | 100+ | Google Sheets count |
| Qualified Leads (Hot) | 20+ | Lead score >= 17 |
| Demos Booked | 5+ | Cal.com bookings |
| Cost per Lead | <£2 | Total cost / leads |
| Chatbot → Customer | 1-2 | Attribution tracking |

### Month 3 Targets

| Metric | Target |
|--------|--------|
| Total Conversations | 1,500+ |
| Completion Rate | 50%+ |
| Leads Captured | 300+ |
| Qualified Leads (Hot) | 60+ |
| Demos Booked | 15+ |
| Cost per Lead | <£1 |
| Chatbot → Customer | 5+ |

### Month 6 Targets

| Metric | Target |
|--------|--------|
| Total Conversations | 3,000+ |
| Completion Rate | 60%+ |
| Leads Captured | 600+ |
| Qualified Leads (Hot) | 100+ |
| Demos Booked | 25+ |
| Chatbot → Customer | 8+ |
| ROI | 500%+ |

---

## Troubleshooting Guide

### Issue: Chat Widget Not Appearing

**Check**:
1. Is `NEXT_PUBLIC_RELEASE0_ENABLED=true`?
2. Is agent ID correct in `.env.local`?
3. Check browser console for errors
4. Verify embed script loaded (Network tab)
5. Check if ad blocker is interfering

**Fix**:
- Verify environment variables
- Clear browser cache
- Test in incognito mode

### Issue: Leads Not Saving to Database

**Check**:
1. Webhook endpoint configured correctly?
2. NoCodeBackend API key valid?
3. Check Release0 webhook logs
4. Verify table name and column names match

**Fix**:
- Test webhook with Postman
- Check API logs for errors
- Verify database permissions

### Issue: AI Responses Are Incorrect

**Check**:
1. System prompt configured properly?
2. Claude API key valid and has credits?
3. Model selection correct?

**Fix**:
- Review and update system prompt
- Test AI responses in Release0 playground
- Add more specific product information

### Issue: High Drop-off Rate

**Check**:
1. Where are users dropping off? (Analytics)
2. Are questions too complex?
3. Is flow too long?

**Fix**:
- Simplify early questions
- Reduce steps to lead capture
- A/B test variations

---

## Cost Management

### Claude API Usage Optimization

**Current Pricing** (Anthropic Claude 3.5 Sonnet):
- Input: $3 per million tokens
- Output: $15 per million tokens
- Prompt caching: 90% discount on repeated content

**Expected Costs**:
- 1,000 conversations/month: ~£20-30
- 3,000 conversations/month: ~£60-90
- 5,000 conversations/month: ~£100-150

**Optimization Tips**:
1. Use prompt caching for product information
2. Keep system prompt concise but comprehensive
3. Limit conversation length (10-15 exchanges max)
4. Use structured responses instead of long-form text

### Release0 Plan Management

**Plan 2 Limits**:
- 3,000 conversations/month
- 100 agents
- 5 team users

**If Approaching Limits**:
1. Upgrade to Plan 3 (5,000 conversations) - $177 lifetime
2. Stack additional AppSumo code
3. Archive unused agents
4. Optimize flows to reduce conversation length

---

## Maintenance Schedule

### Daily (First 2 Weeks)
- Check for new conversations
- Review lead quality
- Respond to hot leads within 4 hours
- Monitor for errors or issues

### Weekly
- Review analytics (conversions, drop-offs)
- Optimize underperforming flows
- Add new FAQs based on common questions
- Test new conversation paths

### Monthly
- Full ROI analysis
- Competitor research (update positioning)
- Product updates (new features, pricing changes)
- Team training on any new features

### Quarterly
- Comprehensive flow audit
- A/B test major changes
- Review AI model options (new releases?)
- Scale planning assessment

---

## Next Steps

1. **Purchase Release0**: Go to AppSumo and buy Plan 2 ($118)
2. **Set up account**: Follow Phase 1 instructions
3. **Configure AI**: Get Anthropic key, connect Claude
4. **Build first flow**: Start with Welcome & Product Discovery
5. **Integrate website**: Add embed code (see integration guide)
6. **Test thoroughly**: Complete all testing checklist items
7. **Soft launch**: Start with team/limited traffic
8. **Monitor & optimize**: Daily monitoring first week
9. **Scale gradually**: 10% → 25% → 50% → 100% traffic

**Estimated Timeline**: 3-5 days from purchase to full launch

**Support Resources**:
- Release0 Docs: https://docs.release0.com
- Release0 Support: support@release0.com
- Anthropic Docs: https://docs.anthropic.com
- Kitchen OS Team: [Your team contacts]

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Owner**: Kitchen OS Development Team
