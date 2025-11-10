# Release0 Chatbot - Quick Start Guide

**Get your AI chatbot live in 3-5 days with this step-by-step guide.**

---

## ✅ Pre-Setup Checklist

Before you begin, make sure you have:

- [ ] Credit card or PayPal for AppSumo purchase ($118-177)
- [ ] Anthropic account for Claude API (or OpenAI for GPT)
- [ ] Access to Kitchen OS NoCodeBackend database
- [ ] Access to `.env.local` file for configuration
- [ ] 3-5 hours total time over 3-5 days

---

## Day 1: Purchase & Setup (2 hours)

### Morning: Purchase Release0 (30 minutes)

1. **Visit AppSumo**: https://appsumo.com/products/release0/
2. **Select Plan**:
   - **Recommended**: Plan 2 ($118)
     - 3,000 monthly conversations
     - 100 agents
     - 5 team users
   - **Alternative**: Plan 1 ($59) if testing first
   - **Premium**: Plan 3 ($177) if expecting high traffic

3. **Complete Purchase**
4. **Check Email** for redemption code
5. **Redeem Code** at https://release0.com/redeem
6. **Create Account** with Kitchen OS email

### Afternoon: AI Configuration (1.5 hours)

7. **Get Anthropic API Key**:
   - Go to: https://console.anthropic.com/
   - Sign up/login
   - API Keys → Create new key
   - Copy key (starts with `sk-ant-`)
   - **Save securely**

8. **Connect AI to Release0**:
   - Release0: Settings → Integrations → AI Providers
   - Add Provider → Anthropic (Claude)
   - Paste API key
   - Select model: `claude-3-5-sonnet-20241022`
   - Test connection
   - Save

9. **Set System Prompt**:
   - Settings → AI Configuration → System Prompt
   - Copy prompt from `.claude/RELEASE0-CONVERSATION-FLOWS.md` (top of file)
   - Paste and save

10. **Configure Workspace**:
    - Settings → General
    - Timezone: Europe/London
    - Language: English (UK)
    - Add team members (up to 5 email addresses)

---

## Day 2: Build First Flow (2 hours)

### Morning: Welcome Flow (1 hour)

11. **Create New Agent**:
    - Dashboard → Agents → Create New
    - Name: "Kitchen OS - Product Discovery"
    - Description: "Main entry point for all visitors"

12. **Build Welcome Message Block**:
    - Drag "Text" block to canvas
    - Add text:
      ```
      Hi! 👋 I'm the Kitchen OS AI assistant.

      I help professional kitchens find the perfect digital solutions for:
      • Food safety & HACCP compliance
      • Allergen management & labeling
      • Food waste tracking & reduction

      What brings you here today?
      ```
    - Add 4 buttons:
      - "Food safety & HACCP"
      - "Allergen management"
      - "Food waste tracking"
      - "I'm not sure"

13. **Add AI Discovery Block** (for "I'm not sure"):
    - Drag "AI Chat" block
    - Connect from "I'm not sure" button
    - Configure AI prompt (see `.claude/RELEASE0-CONVERSATION-FLOWS.md` Flow 1, Block 3)

14. **Test Flow**:
    - Click "Preview" button (top right)
    - Test all conversation paths
    - Verify AI responses make sense

### Afternoon: Lead Capture (1 hour)

15. **Add Lead Capture Form**:
    - After product discussion, add "Form" block
    - Fields:
      - Name (text, required)
      - Email (email, required)
      - Company (text, optional)
      - Phone (phone, optional)

16. **Add Thank You Message**:
    - "Text" block after form
    - Message:
      ```
      Thanks {name}! I've sent you information about {product} to {email}.

      Want to see it in action?
      ```
    - Button: "Book a 15-min demo"

17. **Save & Publish**:
    - Click "Save" (top right)
    - Click "Publish" → "Production"
    - Copy Agent ID (you'll need this)

---

## Day 3: Website Integration (1 hour)

### Update Environment Variables (15 minutes)

18. **Update `.env.local`**:
    ```bash
    NEXT_PUBLIC_RELEASE0_AGENT_ID=your-copied-agent-id
    NEXT_PUBLIC_RELEASE0_ENABLED=true
    RELEASE0_WEBHOOK_SECRET=create-random-string
    ```

    To create webhook secret:
    ```bash
    # Run this in terminal
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

19. **Restart Development Server**:
    ```bash
    npm run dev
    ```

### Test Integration (30 minutes)

20. **Open Website**: http://localhost:3000
21. **Look for Chat Bubble**: Bottom-right corner (green)
22. **Click & Test**:
    - Start conversation
    - Go through full flow
    - Submit test lead
    - Verify email/name captured

23. **Check Browser Console**: No errors?

### Deploy to Production (15 minutes)

24. **Update Production Environment**:
    - Vercel dashboard → Settings → Environment Variables
    - Add:
      - `NEXT_PUBLIC_RELEASE0_AGENT_ID`
      - `NEXT_PUBLIC_RELEASE0_ENABLED=true`
      - `RELEASE0_WEBHOOK_SECRET`

25. **Commit & Push Code**:
    ```bash
    git add .
    git commit -m "feat: Add Release0 AI chatbot integration"
    git push
    ```

26. **Verify Deploy**: Check Vercel deployment log

27. **Test Live Site**: https://kitchenos.com
    - Chat bubble appears?
    - Conversation works?
    - All good!

---

## Day 4: Setup Integrations (1 hour)

### Google Sheets Integration (20 minutes)

28. **Create Google Sheet**:
    - Go to Google Sheets
    - Create: "Kitchen OS Chatbot Leads"
    - Columns: Date, Name, Email, Company, Phone, Product Interest, Lead Quality

29. **Connect to Release0**:
    - Release0: Integrations → Google Sheets
    - Connect account
    - Select spreadsheet
    - Map fields (name→Name, email→Email, etc.)
    - Test connection

30. **Add to Flow**:
    - Edit your agent
    - Add "Google Sheets" block after lead capture
    - Configure to append row
    - Save & publish

### Calendar Integration (20 minutes)

31. **Setup Cal.com**:
    - Go to: https://cal.com
    - Sign up with Kitchen OS email
    - Create event type: "Kitchen OS Demo" (15 minutes)
    - Add description, location (Zoom/Meet)

32. **Connect to Release0**:
    - Release0: Integrations → Cal.com
    - Connect account
    - Select event type

33. **Add to Flow**:
    - Edit agent
    - Add "Calendar" block after CTA
    - Select Cal.com event
    - Pre-fill with {name} and {email}
    - Save & publish

### Webhook for NoCodeBackend (20 minutes)

34. **Configure Webhook in Release0**:
    - Settings → Webhooks → Add New
    - URL: `https://kitchenos.com/api/chatbot/release0`
    - Method: POST
    - Trigger: Conversation Completed
    - Header: `x-release0-secret: your-webhook-secret`
    - Test webhook

35. **Create Database Table** (if not exists):
    - NoCodeBackend: Tables → Add New
    - Name: `chat_leads`
    - Columns:
      - conversation_id (text)
      - name (text)
      - email (text)
      - company (text)
      - phone (text)
      - product_interest (text)
      - lead_quality (text)
      - lead_score (number)
      - created_at (datetime)

---

## Day 5: Build Additional Flows (1-2 hours)

### Product-Specific Flows

36. **Food Safe System Flow**:
    - Copy `.claude/RELEASE0-CONVERSATION-FLOWS.md` → Flow 2
    - Create new agent: "Kitchen OS - Food Safe System"
    - Build blocks as specified
    - Include pricing calculator
    - Test & publish

37. **AllerQ Flow**:
    - Use Flow 3 template
    - Create agent
    - Build & test
    - Publish

38. **Link from Main Flow**:
    - Edit "Product Discovery" agent
    - Update buttons to route to new agents
    - Test full journey
    - Publish all

---

## Post-Launch: Monitoring & Optimization

### Week 1 (Daily Monitoring)

- [ ] Check conversation count (Release0 dashboard)
- [ ] Review lead quality (Google Sheets)
- [ ] Read actual conversations
- [ ] Identify common questions not covered
- [ ] Fix any issues immediately

### Week 2-4 (Weekly Optimization)

- [ ] Analyze drop-off points
- [ ] Add missing FAQs
- [ ] Refine AI prompts
- [ ] Test A/B variations
- [ ] Measure conversion rate

### Month 2+ (Monthly Reviews)

- [ ] ROI analysis (leads generated vs. cost)
- [ ] Customer feedback collection
- [ ] Competitive intelligence updates
- [ ] New product feature additions
- [ ] Scale planning (approaching 3K conversations?)

---

## Success Metrics

### Month 1 Targets

- 500+ conversations initiated
- 100+ leads captured
- 20+ qualified leads (hot)
- 5+ demos booked
- Cost per lead: <£2

### Month 3 Targets

- 1,500+ conversations/month
- 300+ leads/month
- 60+ qualified leads/month
- 15+ demos/month
- Cost per lead: <£1

### Month 6 Targets

- 3,000+ conversations/month
- 600+ leads/month
- 100+ qualified leads/month
- 25+ demos/month
- 8+ customers attributed to chatbot
- 500%+ ROI

---

## Troubleshooting

### Chat Bubble Doesn't Appear

**Check**:
1. `NEXT_PUBLIC_RELEASE0_ENABLED=true` in `.env.local`
2. Agent ID is correct
3. Browser console for errors
4. Ad blocker disabled
5. Script loaded (Network tab in DevTools)

**Fix**:
```bash
# Verify environment variable
echo $NEXT_PUBLIC_RELEASE0_ENABLED

# Restart dev server
npm run dev

# Test in incognito mode
```

### Leads Not Saving to Database

**Check**:
1. Webhook configured with correct URL
2. Webhook secret matches `.env.local`
3. NoCodeBackend table exists with correct columns
4. API key valid

**Fix**:
- Test webhook with Postman/curl
- Check Release0 webhook logs
- Verify NoCodeBackend permissions

### AI Responses Are Wrong

**Check**:
1. System prompt is set correctly
2. Claude API key has credits
3. Model selection is correct

**Fix**:
- Review system prompt
- Test in Release0 AI playground
- Add more specific product information

---

## Support Resources

### Release0
- **Documentation**: https://docs.release0.com
- **Support**: support@release0.com
- **Community**: Release0 Facebook group

### Anthropic Claude
- **Documentation**: https://docs.anthropic.com
- **API Status**: https://status.anthropic.com
- **Pricing**: https://anthropic.com/pricing

### Kitchen OS Implementation
- **Full Guide**: `.claude/RELEASE0-CHATBOT-IMPLEMENTATION.md`
- **Conversation Flows**: `.claude/RELEASE0-CONVERSATION-FLOWS.md`
- **Webhook API**: `/api/chatbot/release0`

---

## Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Test webhook locally (requires ngrok or similar)
ngrok http 3000

# Check environment variables
cat .env.local | grep RELEASE0

# View chatbot logs
tail -f .next/server/app-paths-manifest.json
```

---

## Next Steps After Launch

1. **Week 1**: Monitor closely, fix issues fast
2. **Week 2**: Add FAQs based on real questions
3. **Week 3**: Build product-specific flows
4. **Week 4**: Setup A/B testing
5. **Month 2**: Analyze ROI, optimize costs
6. **Month 3**: Consider upgrading if approaching limits

---

**Need Help?**
- Check full implementation guide: `.claude/RELEASE0-CHATBOT-IMPLEMENTATION.md`
- Review conversation templates: `.claude/RELEASE0-CONVERSATION-FLOWS.md`
- Contact: hello@kitchenos.com

**Ready to Launch!** 🚀

Total time from purchase to live: **3-5 days**
Total investment: **$118** one-time (lifetime access)
Expected ROI: **500%+** within 6 months
