# TanningBedRepair.com MVP Sprint Plan
**Project:** tanningbedrepair-modern
**Timeline:** 7-9 weeks to first paying customers
**Goal:** Launch membership platform generating $250+ MRR

## Executive Summary

Transform the current static Next.js site into a subscription-based platform targeting salon owners. Revenue model: $25/month memberships providing access to troubleshooting documentation and certified technician directory.

**Strategic Priorities:**
1. Salon owners first (paying customers)
2. Membership revenue before e-commerce
3. MVP in 1-2 months (features defer to Phase 2+)
4. Content ready to upload immediately

## Current State

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS
**Codebase:** 573 lines, clean architecture
**Status:** Static site with no backend, database, auth, or payments

**What Exists:**
- 6 state pages with dynamic routing
- 1 sample technician (Florida)
- Reusable Header/Footer components
- Mobile-responsive design

**Critical Gap:** No infrastructure for user accounts, payments, or dynamic content

## MVP Feature Set (Sprint 1-4)

### Must-Have for Launch
1. **Authentication System**
   - Email/password registration with email verification
   - Session management with sharing prevention
   - Protected routes for member content

2. **Stripe Subscriptions**
   - $25/month recurring billing
   - 7-day free trial
   - Customer portal for management
   - Webhook handlers for all subscription events

3. **Troubleshooting Documentation**
   - Upload existing PDFs to cloud storage
   - Browse by category (brand, issue type)
   - Search functionality
   - Members-only access gate

4. **Technician Directory**
   - Migrate data from states.json to database
   - Search/filter by state and specialization
   - Tech profiles with reviews (read-only)
   - Admin management interface

5. **Manufacturer Directory**
   - Simple list with links to official websites
   - No copyrighted material hosting

### Deferred to Phase 2+
- Technician self-service ($10/month tier) - Month 3-4
- Community forum - Month 5-6
- AI troubleshooting chatbot - Month 5-6
- E-commerce/parts sales - Month 7+
- Tiered memberships - Month 7+

## Technology Decisions

### Backend Infrastructure
**Supabase** (recommended for MVP speed)
- PostgreSQL database with Row Level Security
- Built-in authentication
- File storage for PDFs
- Real-time capabilities for future forum
- Generous free tier ($0 for <50 users)

**Alternative:** Custom PostgreSQL + NextAuth.js (more control, slower)

### Payment Processing
**Stripe**
- Subscription billing
- Customer Portal (cancel/manage)
- Webhook security
- Industry standard

### Hosting & Services
- Vercel (Next.js hosting, auto-deploy)
- Resend or SendGrid (transactional emails)
- Sentry (error monitoring)
- Plausible or Google Analytics (usage tracking)

## Database Schema

```sql
-- Core Tables
users (id, email, full_name, account_type, subscription_status, created_at)
subscriptions (id, user_id, stripe_customer_id, stripe_subscription_id, status, current_period_end)
technicians (id, business_name, phone, state, service_areas[], certifications, specializations[], rating)
documents (id, title, category, brands[], file_url, upload_date, view_count)
reviews (id, technician_id, author_name, rating, review_text, created_at)
manufacturers (id, name, website, contact_info, equipment_types[])
```

## Sprint Breakdown

### Sprint 0: Pre-Flight (3-5 days)
**Goal:** Clean repo and prepare infrastructure

**Tasks:**
- Commit all uncommitted changes
- Create Supabase account and project
- Set up Stripe test account
- Document architecture decisions
- Create .env.example with required keys

**Deliverables:** Clean git history, accounts ready, docs updated

---

### Sprint 1: Backend Foundation (2 weeks, 21 story points)

#### Week 1: Database & Authentication
**Tasks:**
1. Set up Supabase database with schema
2. Configure Row Level Security policies
3. Implement Supabase Auth
4. Build registration/login UI
5. Email verification flow
6. Session management with sharing prevention
7. Protected route middleware

**Deliverables:** Users can register, verify email, login securely

#### Week 2: Payment Integration
**Tasks:**
1. Configure Stripe subscription product ($25/month, 7-day trial)
2. Build checkout page with Stripe Elements
3. Implement webhook endpoint (`/api/webhooks/stripe`)
4. Handle all subscription events (created, updated, deleted, payment_failed)
5. Update user subscription_status in database
6. Build subscription management page (cancel/reactivate)
7. Gate content by subscription status

**Deliverables:** End-to-end payment flow working, webhooks handling all events

**Critical Success:** Test subscription completes before Sprint 2 starts

---

### Sprint 2: Core Member Features (2 weeks, 21 story points)

#### Week 3: Documentation System
**Tasks:**
1. Set up Supabase Storage for PDFs
2. Build admin upload interface
3. Create document schema (title, category, brands, file_url)
4. Upload existing troubleshooting docs
5. Build `/docs` browse page (members only)
6. Implement category filtering (brand, issue type)
7. Add search functionality
8. Create PDF viewer component
9. Build manufacturer directory with official links

**Deliverables:** Members can browse, search, and view uploaded documentation

#### Week 4: Technician Directory
**Tasks:**
1. Migrate technician data from states.json to database
2. Populate all 50 states with available techs
3. Build enhanced tech profile pages
4. Implement search by state/region
5. Add specialization filters
6. Create admin interface for tech management
7. Test contact links (phone, email)

**Deliverables:** Members can search and find technicians by state/specialization

---

### Sprint 3: Polish & Launch Prep (2 weeks, 13 story points)

#### Week 5: Admin & UX
**Tasks:**
1. Build admin dashboard (`/admin`)
   - User management
   - Subscription analytics (MRR, churn, subscriber count)
   - Document/tech management
   - Most viewed content
2. Improve onboarding flow
3. Add loading states and error messages
4. Mobile optimization
5. Set up email notifications (welcome, trial ending, payment failed)
6. Accessibility audit

**Deliverables:** Polished UX, admin can manage platform, automated emails

#### Week 6: Testing & Production Setup
**Tasks:**
1. User acceptance testing (all user flows)
2. Payment testing (success, failure, cancellation)
3. Cross-browser/device testing
4. Security audit (XSS, CSRF, SQL injection)
5. Configure production environment (Vercel)
6. Set up custom domain and SSL
7. Switch Stripe to live mode
8. Set up monitoring (Sentry, analytics)
9. Create FAQ and support pages

**Deliverables:** All tests passing, production ready, launch checklist complete

**Go/No-Go:** Must resolve all critical bugs before launch

---

### Sprint 4: Launch (1 week, 8 story points)

**Tasks:**
1. Deploy to production
2. Soft launch to email list
3. Marketing push (social media, ads, industry forums)
4. Set up live chat support
5. Monitor errors and user feedback
6. Quick bug fixes
7. Track conversion metrics

**Success Metrics:**
- 10+ signups in Week 7
- 5+ paid conversions
- $125+ MRR
- <10% bounce rate
- Zero critical bugs

**Deliverables:** Live platform with first paying customers

## Timeline & Milestones

| Week | Sprint | Key Milestone | Success Criteria |
|------|--------|---------------|------------------|
| 0 | Pre-flight | Repo clean | All commits pushed, docs ready |
| 1 | Sprint 1.1 | Auth working | User can register/login |
| 2 | Sprint 1.2 | Payments working | Test subscription completes |
| 3 | Sprint 2.1 | Docs live | Members view uploaded docs |
| 4 | Sprint 2.2 | Directory live | Members search techs by state |
| 5 | Sprint 3.1 | Admin complete | Analytics dashboard live |
| 6 | Sprint 3.2 | Tests passing | UAT complete, no critical bugs |
| 7 | Sprint 4 | **LAUNCH** | 10+ signups, 5+ conversions |
| 8 | Post-launch | Iterate | 10+ paying, <10% churn |

**Total Timeline:** 7-9 weeks (optimistic 7, realistic 8-9)

## Cost Structure (Monthly)

### MVP Phase (<50 users)
- Supabase: $0 (free tier)
- Vercel: $0 (hobby tier)
- Stripe fees: ~$7.25 on $250 MRR
- Resend: $0 (3K emails/month)
- Domain: $1/month
- **Total: ~$10/month (96% profit margin)**

### Growth Phase (100+ subscribers, $2,500 MRR)
- Supabase Pro: $25
- Vercel Pro: $20
- Stripe fees: ~$72.50
- Email/monitoring: $46
- **Total: ~$165/month (93% profit margin)**

## Risk Mitigation

### High-Risk Areas

**1. Payment Integration Complexity**
- **Risk:** Webhook failures, payment edge cases
- **Mitigation:** Use Stripe pre-built components, comprehensive testing, manual fallback

**2. Account Sharing**
- **Risk:** Revenue leakage from shared accounts
- **Mitigation:** Email verification required, session limits (1 device), monitor unusual login patterns

**3. Low Initial Conversion**
- **Risk:** Few signups after launch
- **Mitigation:** 7-day free trial, launch discount for first 50 customers, A/B test pricing

**4. Content Quality Concerns**
- **Risk:** Outdated or incorrect documentation
- **Mitigation:** Review all docs before upload, user feedback mechanism, quarterly updates

**5. Tech Directory Data Accuracy**
- **Risk:** Outdated phone numbers, incorrect information
- **Mitigation:** Email verification for listings, quarterly verification emails, user reporting system

## Critical Files to Modify

### Existing Files
1. **app/layout.tsx** - Add auth context, protected routes, user session
2. **app/page.tsx** - Add auth state checks, subscription CTA, trial messaging
3. **app/states/[state]/page.tsx** - Connect to database instead of JSON, add member gates
4. **data/states.json** - Template for database migration structure
5. **package.json** - Add dependencies (Supabase, Stripe SDK, react-hook-form, zod)
6. **components/Header.tsx** - Add user menu, login/logout, subscription status
7. **components/Footer.tsx** - Update links for new pages

### New Files to Create
**Authentication:**
- `lib/supabase.ts` - Database client configuration
- `lib/auth.ts` - Auth helpers and middleware
- `app/auth/login/page.tsx`
- `app/auth/register/page.tsx`
- `app/auth/verify-email/page.tsx`

**Payments:**
- `lib/stripe.ts` - Stripe client and helpers
- `app/api/webhooks/stripe/route.ts` - Webhook handler
- `app/checkout/page.tsx` - Subscription checkout
- `app/dashboard/page.tsx` - Member dashboard

**Content:**
- `app/docs/page.tsx` - Documentation browser
- `app/docs/[id]/page.tsx` - Document viewer
- `app/admin/page.tsx` - Admin dashboard
- `app/admin/docs/upload/page.tsx` - Upload interface

**Components:**
- `components/auth/LoginForm.tsx`
- `components/auth/RegisterForm.tsx`
- `components/checkout/SubscriptionCard.tsx`
- `components/admin/Analytics.tsx`

**Configuration:**
- `.env.example` - Environment variables template
- `middleware.ts` - Route protection

## Success Metrics & KPIs

### MVP Success Definition (End of Month 2)
- ✅ 10+ active paying subscribers
- ✅ $250+ Monthly Recurring Revenue
- ✅ <10% churn rate
- ✅ >75% positive user feedback
- ✅ All core features functional
- ✅ Zero critical bugs in production

### Week-by-Week Targets
- **Week 2:** Authentication functional
- **Week 4:** First test payment completes
- **Week 6:** All content uploaded
- **Week 7:** 10 signups
- **Week 8:** 10 paying customers

### Go/No-Go Decision Points
1. **End of Sprint 1:** Auth + payments must work before proceeding
2. **End of Sprint 3:** No launch until critical bugs resolved
3. **End of Sprint 4:** If <5 customers, analyze before Phase 2 investment

## Phase 2-4 Preview

### Phase 2: Technician Features (Months 3-4)
- Self-service technician registration ($10/month)
- Techs create/manage their own listings
- Preventative maintenance documentation
- Suggestion box for feature requests

### Phase 3: Community & AI (Months 5-6)
- Discussion forum (threaded conversations)
- AI troubleshooting chatbot (OpenAI + RAG)
- Tech Q&A section

### Phase 4: E-Commerce (Months 7+)
- Sell lamps, parts, acrylics (drop shipping)
- Used equipment marketplace
- Tiered membership levels (Basic/Pro/Enterprise)
- Advanced analytics

**Rule:** Only start Phase 2 after reaching 50+ active subscribers

## Immediate Next Steps (Pre-Sprint)

1. **Commit Current Work**
   ```bash
   cd C:\Users\ambri\Projects\tanningbedrepair-modern
   git add .
   git commit -m "Pre-sprint checkpoint: MVP planning complete"
   git push origin main
   ```

2. **Create Accounts**
   - Sign up for Supabase (supabase.com)
   - Create Stripe account (stripe.com)
   - Set up Resend for emails (resend.com)

3. **Environment Setup**
   - Get Supabase API keys (project URL, anon key, service role key)
   - Get Stripe API keys (publishable, secret, webhook secret)
   - Create `.env.local` file

4. **Project Documentation**
   - Add CLAUDE.md to project root with architecture
   - Document database schema decisions
   - Create GitHub Project board with Sprint 1 tasks

5. **Content Preparation**
   - Organize troubleshooting docs for upload
   - Prepare manufacturer directory data
   - Review technician data for all 50 states

## Key Architectural Decisions

### Why Supabase over Custom Backend?
- **Speed:** Auth + database + storage in one service
- **Security:** Row Level Security built-in
- **Cost:** Free for MVP, scales affordably
- **DX:** Excellent TypeScript support, auto-generated types
- **Trade-off:** Less control, vendor lock-in (mitigated by PostgreSQL compatibility)

### Why Single Tier for MVP?
- **Simplicity:** Faster to build, easier to test
- **Validation:** Test willingness to pay before optimizing pricing
- **Flexibility:** Easy to add tiers later based on user feedback
- **Risk:** May leave money on table, but minimizes complexity

### Why No E-Commerce in MVP?
- **Focus:** Revenue from memberships proven faster than physical product sales
- **Complexity:** Inventory, shipping, returns add 3-4 weeks
- **Risk:** Unproven market demand for parts vs. directory access
- **Strategy:** Build customer base first, add shopping later

## Conclusion

This plan prioritizes speed to revenue while building a solid foundation for future growth. The 7-9 week timeline is aggressive but achievable with focused execution and no scope creep.

**Critical Success Factors:**
1. Stay ruthlessly focused on MVP features only
2. Test payment integration thoroughly before launch
3. Upload quality content immediately (you already have it)
4. Allocate time for marketing and customer acquisition
5. Launch imperfect and iterate based on real user feedback

**Next Action:** Approve this plan and begin Sprint 0 (commit code, create accounts, set up environment).