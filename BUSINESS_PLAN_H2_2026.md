# HerPCOS — 6-Month Business Plan
**Period: July – December 2026**
**Current status:** Live at HerPCOS.com · AI chatbot active · SEO content published · Pre-revenue

---

## Where We Stand Today

**Strengths**
- Working AI chatbot powered by Anthropic Claude Haiku
- 10+ indexed SEO content pages covering core PCOS topics
- Newsletter signup infrastructure in place
- Medical disclaimers and legal pages complete
- Deployed on Vercel with HTTPS

**Gaps to close**
- No analytics / no visibility into traffic or engagement
- No email list yet (signup form exists but list is likely tiny)
- No monetization
- No social presence / inbound link strategy
- Chatbot quality not yet validated with real users

---

## North Star Metrics (end of December 2026)

| Metric | Target |
|---|---|
| Monthly organic visitors | 5,000+ |
| Email subscribers | 500+ |
| Monthly active chatbot users | 300+ |
| Bounce rate on content pages | < 65% |
| Monthly revenue | $500+ MRR (first dollar) |

---

## Month 1 — July 2026: Instrument & Fix the Foundation

**Goal: Know what's happening before building more.**

### Analytics
- [ ] Set `NEXT_PUBLIC_GA4_ID` env var in Vercel — GA4 code is already in the codebase
- [ ] Add scroll-depth tracking on content pages
- [ ] Track chatbot session starts and message counts (logging is in place, needs pipeline)
- [ ] Verify Google Search Console — sitemap.xml is already submitted

### SEO foundation
- [ ] Audit all 10 content pages: title tags, meta descriptions, H1s
- [ ] Add structured data (FAQ schema) to top 5 pages
- [ ] Fix any missing canonical tags or duplicate content
- [ ] Compress and optimize all images

### Chatbot quality
- [ ] Log (anonymized) chatbot questions to identify most common topics
- [ ] Review first 50 real conversations and fix hallucinations or gaps
- [ ] Add a "Was this helpful? Yes / No" feedback button after each response
- [ ] Improve the system prompt based on findings

**Month 1 success signal:** Analytics installed, Search Console verified, chatbot logging live.

---

## Month 2 — August 2026: Content Depth & Email List

**Goal: Double the content surface area and start building the email list.**

### Content (4 new pages targeting high-intent keywords)
- [ ] `/pcos-supplements` — Inositol, magnesium, spearmint, berberine (evidence-based)
- [ ] `/pcos-and-acne` — Hormonal acne breakdown
- [ ] `/pcos-exercise` — Best exercise types for PCOS
- [ ] `/pcos-diagnosis` — How PCOS is diagnosed, what tests to ask for

### Email list
- [ ] Create a free lead magnet: "PCOS Lab Results Cheat Sheet" (1-page PDF)
- [ ] Add lead magnet opt-in to homepage and top 3 content pages
- [ ] Set up a 3-email welcome sequence (introduce HerPCOS, chatbot tour, top article)
- [ ] Connect Mailchimp or ConvertKit — `/api/subscribe` already has the integration hook, just needs `MAILCHIMP_API_KEY` + `MAILCHIMP_LIST_ID` env vars

### Social proof
- [ ] Create a Reddit presence: contribute to r/PCOS (answer questions, no spam)
- [ ] Post 2x/week on Pinterest (PCOS infographics from existing content)

**Month 2 success signal:** Email list at 50+ subscribers, 4 new pages indexed.

---

## Month 3 — September 2026: Traffic & Partnerships

**Goal: Break 1,000 monthly visitors and get first backlinks.**

### SEO link building
- [ ] Write 2 guest posts for women's health or fertility blogs
- [ ] Pitch HerPCOS to 3 PCOS-related podcasts for mention/interview
- [ ] Submit to PCOS directories and women's health resource lists
- [ ] Create a shareable "PCOS Symptom Checklist" (embeddable widget)

### Content
- [ ] `/pcos-and-thyroid` — Co-occurring thyroid issues
- [ ] `/pcos-mental-health` — Anxiety, depression, and PCOS
- [ ] Add internal linking across all content pages (currently isolated)
- [ ] Add "Related articles" section to every page

### Chatbot improvements
- [ ] Add topic-specific follow-up prompts ("Ask me about diet", "Ask about supplements")
- [ ] Show top 5 suggested questions on the chat landing page
- [ ] Add a brief chatbot intro explaining what it can/cannot do (set expectations)

**Month 3 success signal:** 1,000+ monthly visitors in Google Analytics.

---

## Month 4 — October 2026: Engagement & Retention

**Goal: Get visitors to return and engage beyond one page.**

### Product
- [ ] Build a "PCOS Symptom Tracker" — simple form, no auth required, results shown inline
- [ ] Add a "What type of PCOS do you have?" quiz (4 questions, shows personalized result page)
- [ ] Display chatbot on content pages as an inline widget ("Have a question? Ask HerPCOS AI")

### Email
- [ ] Launch a weekly email: "HerPCOS Weekly" — one PCOS tip + one research update
- [ ] Segment list by interest (diet, fertility, weight loss) based on lead magnet downloaded
- [ ] A/B test subject lines on 2 sends

### SEO
- [ ] Update Month 1–2 content pages with new data and expand word count
- [ ] Add author bio / AuthorCard component (already exists) to all content pages
- [ ] Improve page speed score to 90+ on Lighthouse

**Month 4 success signal:** Email open rate > 30%, quiz/tracker gets 100+ completions.

---

## Month 5 — November 2026: First Revenue

**Goal: Generate the first dollar without compromising trust.**

### Monetization options (pick 1–2 based on Month 3–4 data)

**Option A — Affiliate income (lowest effort)**
- Partner with 2–3 PCOS supplement brands (Ovasitol, Myo-inositol products)
- Add evidence-based "HerPCOS recommends" section to relevant content pages
- Disclose affiliate relationships clearly

**Option B — Sponsored content**
- Pitch 1 sponsored post to a PCOS-aligned brand (fertility tracking apps, supplements)
- Rate: $300–$500 per post at 5,000 visitors/month

**Option C — Premium chatbot tier**
- Free: 10 messages/day
- Premium ($9/month): unlimited messages + saved history
- Only build this if free chatbot has proven engagement (300+ MAU)

### Legal / trust
- [ ] Add affiliate disclosure page
- [ ] Update privacy policy for any email marketing
- [ ] Ensure all monetized content still passes the "evidence-based" standard

**Month 5 success signal:** First $100 in revenue.

---

## Month 6 — December 2026: Review, Double Down & Plan 2027

**Goal: Audit what worked, cut what didn't, plan the next phase.**

### Review checklist
- [ ] Which content pages drive the most traffic? → Write 5 more like them
- [ ] Which chatbot topics are asked most? → Build dedicated content pages for them
- [ ] What's the email list size? → If < 300, double down on lead magnet; if > 300, test paid newsletter
- [ ] What's the MRR? → If < $500, focus on traffic; if > $500, invest in product

### 2027 preview (only if traffic validated)
- User accounts (Supabase) — saved chatbot history, personalized dashboard
- PCOS Protocol library — curated treatment approaches by type
- Fertility category launch — expand beyond PCOS
- Community (Discord or forum) — if engagement signals are strong

---

## Resource Requirements

| Resource | Cost | Notes |
|---|---|---|
| Anthropic API (Claude Haiku) | ~$5–20/mo | Very low cost per token at Haiku pricing |
| Vercel Pro | $20/mo | If traffic exceeds free tier limits |
| Email platform | $0 | Mailchimp free or Resend free tier |
| Domain | Already paid | HerPCOS.com |
| Design tools | $0–15/mo | Canva for Pinterest/lead magnet |
| **Total** | **~$40–85/mo** | Pre-revenue budget |

---

## Key Risks

| Risk | Mitigation |
|---|---|
| OpenAI gives wrong medical advice | Improve system prompt, add disclaimers inline, log & review responses |
| Google de-indexes AI content | Ensure all pages are evidence-based and human-reviewed |
| Low organic traffic | Start Pinterest + Reddit early; don't rely solely on Google |
| Email list doesn't grow | Test 2nd lead magnet; add exit-intent popup |
| Burnout (solo founder) | Time-box each month's tasks; ship small, ship often |

---

## Monthly Focus Summary

| Month | Theme | Primary Output |
|---|---|---|
| July | Instrument | Analytics live, chatbot logging |
| August | Content + Email | 4 new pages, lead magnet, 50 subscribers |
| September | Traffic | 1,000 visitors/mo, backlinks, 2 guest posts |
| October | Engagement | Quiz/tracker, chatbot widget, weekly email |
| November | Revenue | First $100 via affiliate or sponsored post |
| December | Review + Plan | Audit, double down, 2027 roadmap |
