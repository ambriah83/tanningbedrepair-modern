# Tanning Bed Repair - Modern Next.js Version

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
   - Go to: http://localhost:3000
   - You'll see the modern website running!

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

- **Next.js 16** - React framework with file-based routing
- **React 19** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js** - JavaScript runtime

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

### To Deploy (When Ready):

Popular hosting options:
- **Vercel** (recommended - built by Next.js creators)
- **Netlify**
- **AWS Amplify**

All offer free tiers and automatic SSL certificates!

---

## 📞 SSL Certificate Status

**Current Issue:** The live site (tanningbedrepair.com) has an expired SSL certificate that needs Apache restart.

**Solution:** Contact GoDaddy support to restart Apache server. The new certificate is installed in cPanel but not active on the web server yet.

---

## ✅ Project Status

- ✅ Next.js project set up
- ✅ Components created (Header, Footer)
- ✅ Home page built
- ✅ Dynamic state pages (template for all states)
- ✅ Sample state data (6 states for demo)
- ✅ Modern responsive design
- ✅ Documentation complete

### To Do:
- [ ] Add remaining 44 states to states.json
- [ ] Copy all images from original site
- [ ] Create manuals page
- [ ] Create quick-fixes page
- [ ] Create service technicians page
- [ ] Add contact form
- [ ] Deploy to production

---

## 💡 Questions?

This project demonstrates modern web development best practices. Compare it to the original HTML site to see the advantages of:
- Component reusability
- Data-driven architecture
- Modern tooling
- Maintainable code structure

**Generated with Claude Code**
**Date:** November 24, 2025
