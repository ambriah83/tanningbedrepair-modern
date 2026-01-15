# Tanning Bed Repair - Modern Next.js Version

🌐 **Live Site:** https://tanningbedrepair-modern.vercel.app/

## 📋 Project Overview

This is a modern rebuild of tanningbedrepair.com using Next.js and React. This demo showcases how modern web frameworks eliminate code duplication and make websites easier to maintain.

### The Problem with the Old Site
- **56 separate HTML files** (one for each state)
- **Massive code duplication** - same header, footer, and layout copied 56 times
- **Hard to maintain** - changing the menu requires editing 56 files manually
- **Old design** - table-based layouts from early 2000s
- **Not mobile-responsive**

### The Solution: Modern Component-Based Architecture
- **1 template file** replaces all 56 state pages
- **1 data file** (states.json) stores all state-specific content
- **Reusable components** (Header, Footer) written once, used everywhere
- **Modern, responsive design** works on all devices
- **Easy to maintain** - update in one place, changes everywhere

---

## 🗂️ Project Structure

```
tanningbedrepair-modern/
├── app/
│   ├── layout.tsx           # Root layout (wraps all pages with Header/Footer)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles with Tailwind
│   └── states/
│       └── [state]/
│           └── page.tsx     # ONE template that generates all 56 state pages!
│
├── components/
│   ├── Header.tsx           # Navigation header (used on every page)
│   └── Footer.tsx           # Footer (used on every page)
│
├── data/
│   └── states.json          # All state data (replaces 56 HTML files)
│
├── public/                  # Static assets (images, PDFs, etc.)
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md               # This file!
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd C:\Users\ambri\Projects\tanningbedrepair-modern
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Local: http://localhost:3000
   - Production: https://tanningbedrepair-modern.vercel.app/

### Available Commands

```bash
npm run dev      # Start development server (auto-reloads on changes)
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check code quality
```

---

## 🎯 Key Features Demonstrated

### 1. Component Reusability
**Old way:** Copy/paste header and footer into 56 HTML files
```html
<!-- alabama.html -->
<header>...</header>
<main>Alabama content</main>
<footer>...</footer>

<!-- alaska.html -->
<header>...</header>  <!-- Same header copied again! -->
<main>Alaska content</main>
<footer>...</footer>  <!-- Same footer copied again! -->
```

**New way:** Write once, use everywhere
```tsx
// layout.tsx
<Header />      // Written once in components/Header.tsx
{children}      // Page content changes
<Footer />      // Written once in components/Footer.tsx
```

### 2. Data-Driven Pages
**Old way:** 56 separate HTML files
```
alabama.html    (23 KB)
alaska.htm      (23 KB)
arizona.htm     (24 KB)
... (53 more files, all nearly identical!)
```

**New way:** 1 template + 1 data file
```
app/states/[state]/page.tsx  (ONE template)
data/states.json             (ALL state data)
```

### 3. Easy Updates
**Old way:**
- Want to add a menu item? Edit 56 files manually
- Change phone number? Find/replace across 56 files
- Update design? Modify 56 files

**New way:**
- Add menu item → Edit `components/Header.tsx` → Done!
- Change phone number → Edit `data/states.json` → Done!
- Update design → Edit CSS/components → All pages update!

---

## 📊 Comparison: Old vs New

| Feature | Old Site | Modern Site |
|---------|----------|-------------|
| **Files for 56 states** | 56 HTML files | 1 template + 1 data file |
| **Code duplication** | Massive | None |
| **Mobile responsive** | No | Yes |
| **Easy to update** | No (56 files) | Yes (1 place) |
| **Modern design** | No (2000s tables) | Yes (2024 standards) |
| **Maintenance time** | Hours | Minutes |
| **Load speed** | Slow | Fast |
| **SEO friendly** | Basic | Optimized |

---

## 🔄 How to Add More States

### Old Way (56 HTML files):
1. Copy an existing state HTML file
2. Search/replace the state name throughout
3. Update the image path
4. Add link to all other 56 pages
5. Repeat 56 times...

### New Way (This project):
Just add to `data/states.json`:
```json
{
  "name": "New York",
  "slug": "new-york",
  "description": "New York tanning bed repair services...",
  "phone": "1-800-XXX-XXXX",
  "image": "/images/new-york-tanning-bed-repair.jpg"
}
```

That's it! The page is automatically created and linked.

---

## 📁 Original Site Files

The original website backup is in:
```
C:\Users\ambri\Projects\tanningbedrepair-original\
```

You can compare the old HTML files to see the duplication problem firsthand.

**GitHub Repository:**
- Original backup: https://github.com/ambriah83/tanningbedrepair

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with file-based routing
- **React 19** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Node.js** - JavaScript runtime

### Backend & Infrastructure
- **Supabase** - PostgreSQL database, authentication, and file storage
  - Project: `mrsynnjcjfigxbtasxvp`
  - Integrated with GitHub for automatic deployments
  - Row Level Security (RLS) for data protection
- **Stripe** - Subscription billing and payment processing
- **Vercel** - Hosting and CI/CD

---

## 🔧 Environment Setup

This project requires environment variables for Supabase and Stripe integration.

### 1. Copy the example environment file:
```bash
cp .env.example .env.local
```

### 2. Get your Supabase credentials:
- Go to [Supabase Dashboard](https://supabase.com/dashboard/project/mrsynnjcjfigxbtasxvp)
- Navigate to Settings → API
- Copy your Project URL and API keys

### 3. Get your Stripe credentials:
- Go to [Stripe Dashboard](https://dashboard.stripe.com)
- Get your test API keys

### 4. Fill in your `.env.local` file with actual values

**Note:** The `.env.local` file is git-ignored for security. Never commit API keys to version control!

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🚢 Next Steps

### To Continue Development:

1. **Add all 50 states** to `data/states.json`
2. **Copy images** from original site to `public/images/`
3. **Create additional pages:**
   - `/service-technicians`
   - `/manuals`
   - `/quick-fixes`
4. **Add contact form** functionality
5. **Set up domain** and deploy to production

### Deployment

**Currently Deployed on Vercel:**
- 🌐 Live URL: https://tanningbedrepair-modern.vercel.app/
- ✅ Automatic deployments from GitHub
- ✅ SSL certificate included
- ✅ CDN and edge optimization enabled

**To Deploy Updates:**
1. Push changes to GitHub repository
2. Vercel automatically detects and deploys changes
3. Production updates go live in ~2 minutes

---

## 📞 SSL Certificate Status

**Current Issue:** The live site (tanningbedrepair.com) has an expired SSL certificate that needs Apache restart.

**Solution:** Contact GoDaddy support to restart Apache server. The new certificate is installed in cPanel but not active on the web server yet.

---

## ✅ Project Status

### Completed
- ✅ Next.js 16 + React 19 + TypeScript foundation
- ✅ Tailwind CSS 4 styling system
- ✅ Full navigation menu (Services, Used Equipment, About, Training)
- ✅ Modern responsive design
- ✅ **164 technicians imported** across 40 states
- ✅ Searchable technician directory (`/directory`)
- ✅ Individual state pages (all 50 states)
- ✅ Email signup popup
- ✅ Text help banner
- ✅ Service pages (Repair, Troubleshooting, Install/Relocation)
- ✅ Used Equipment page
- ✅ About Us page
- ✅ Training page
- ✅ **Deployed to Vercel**: https://tanningbedrepair-modern.vercel.app/

### Sprint 1: Backend Foundation (In Progress)
- [ ] Supabase authentication (email/password + verification)
- [ ] Database schema (users, subscriptions, technicians, documents)
- [ ] Stripe subscription integration ($25/month)
- [ ] Payment webhooks
- [ ] Protected routes middleware

### Sprint 2: Core Features (Planned)
- [ ] Troubleshooting documentation system
- [ ] Technician directory search
- [ ] Admin dashboard
- [ ] Content upload interface

### Sprint 3-4: Launch (Planned)
- [ ] UX polish and testing
- [ ] Production deployment
- [ ] First paying customers

See **SPRINT_PLAN.md** for complete 7-9 week roadmap to $250+ MRR.

---

## 💡 Questions?

This project demonstrates modern web development best practices. Compare it to the original HTML site to see the advantages of:
- Component reusability
- Data-driven architecture
- Modern tooling
- Maintainable code structure

**Generated with Claude Code**
**Date:** November 24, 2025
