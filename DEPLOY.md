# 🚀 Quick Deployment Guide for Vercel

## Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub

```bash
cd bird-law-app
git init
git add .
git commit -m "Initial commit: Bird Law app"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your `bird-law-app` repository
5. Click **"Import"**

### Step 3: Deploy

Vercel will automatically detect Next.js settings. Just click **"Deploy"**!

Your app will be live at: `https://your-project-name.vercel.app`

## Optional: Add Giphy Integration

To display GIFs from It's Always Sunny:

1. Get a free API key from [developers.giphy.com](https://developers.giphy.com/)
2. In Vercel project settings, go to **Environment Variables**
3. Add:
   - Key: `NEXT_PUBLIC_GIPHY_API_KEY`
   - Value: Your API key
4. Redeploy (Vercel will automatically redeploy)

## Vercel CLI (Alternative Method)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd bird-law-app
vercel

# Follow the prompts
```

## Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Update your DNS records as instructed
4. Wait for SSL certificate (automatic)

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GIPHY_API_KEY` | No | Giphy API key for GIF gallery |

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure TypeScript types are correct
- Check build logs in Vercel dashboard

### GIFs Not Loading

- Verify API key is set in environment variables
- Check that the key is prefixed with `NEXT_PUBLIC_`
- Redeploy after adding environment variables

### Styling Issues

- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`
- Clear build cache and redeploy

## Post-Deployment

After deployment, you can:

- View deployment logs
- Set up automatic deployments on git push
- Add collaborators
- Monitor analytics
- Set up custom redirects

Your Bird Law app is now live! 🦅⚖️

---

*"I'm well versed in bird law." - Charlie Kelly*
