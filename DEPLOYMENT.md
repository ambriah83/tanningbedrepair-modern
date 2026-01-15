# Deployment Guide

## Live Production Site

🌐 **URL:** https://tanningbedrepair-modern.vercel.app/

## Deployment Platform

The site is deployed on **Vercel** with automatic CI/CD.

### How It Works

1. **Code Changes** → Push to GitHub repository
2. **Auto-Deploy** → Vercel detects changes automatically
3. **Build** → Vercel builds the Next.js app
4. **Deploy** → Live in ~2 minutes

### Deployment Settings

- **Platform:** Vercel
- **Framework:** Next.js 16
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 18.x

## To Deploy Changes

### Method 1: Git Push (Automatic)

```bash
# Make your changes locally
git add .
git commit -m "Your commit message"
git push origin main

# Vercel automatically deploys!
```

### Method 2: Vercel CLI (Manual)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Environment Variables

If you add environment variables locally (`.env.local`), you must also add them in Vercel:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add the same variables

**Current Environment Variables:**
- `NEXT_PUBLIC_SUPABASE_URL` (if using Supabase)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if using Supabase)
- `STRIPE_PUBLISHABLE_KEY` (when Stripe is integrated)

## Monitoring

### Check Deployment Status
- Dashboard: https://vercel.com/dashboard
- Build logs available for each deployment
- Real-time deployment status

### Performance
- Vercel provides automatic CDN
- Edge optimization enabled
- SSL/HTTPS automatic

## Rollback

If a deployment has issues:

1. Go to Vercel Dashboard
2. Select the project
3. Click "Deployments"
4. Find a previous working deployment
5. Click "..." → "Promote to Production"

## Custom Domain (Future)

When ready to use tanningbedrepair.com:

1. Go to Project Settings → Domains
2. Add custom domain
3. Update DNS records at your domain registrar
4. Vercel automatically provisions SSL

## Important Notes

- ✅ All changes to `main` branch auto-deploy
- ✅ Preview deployments created for pull requests
- ✅ Environment variables are separate for production/preview
- ⚠️ Always test locally before pushing to production
- ⚠️ Database changes (states.json) deploy immediately

## Contact

For Vercel support: https://vercel.com/support
