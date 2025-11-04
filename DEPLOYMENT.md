# Deployment Guide

This guide covers deploying your Crypto App to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All tests pass locally
- [ ] Build completes successfully (`npm run build`)
- [ ] Storybook builds without errors (`npm run build-storybook`)
- [ ] No console errors in production build (`npm run preview`)
- [ ] Environment variables are properly configured
- [ ] `.gitignore` excludes all build artifacts and dependencies

## 🚀 Deploying to Vercel (Recommended)

Vercel is the recommended platform for deploying this app as it's optimized for Vite applications.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/crypto-app.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers a production deployment
   - Pull requests get preview deployments

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment (interactive setup)
   vercel

   # Production deployment
   vercel --prod
   ```

### Method 3: Deploy Button

Use the one-click deploy button in the README:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/crypto-app)

## 📚 Deploying Storybook

### Separate Storybook Deployment on Vercel

1. **Build Storybook**
   ```bash
   npm run build-storybook
   ```

2. **Deploy the static folder**
   ```bash
   vercel storybook-static --prod --name crypto-app-storybook
   ```

### Chromatic (Recommended for Storybook)

[Chromatic](https://www.chromatic.com/) provides visual testing and hosting for Storybook:

1. **Install Chromatic**
   ```bash
   npm install --save-dev chromatic
   ```

2. **Publish to Chromatic**
   ```bash
   npx chromatic --project-token=YOUR_PROJECT_TOKEN
   ```

3. **Add to package.json**
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --exit-zero-on-changes"
     }
   }
   ```

## 🌐 Other Deployment Platforms

### Netlify

1. **netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   netlify deploy --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/crypto-app"
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/crypto-app/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### AWS Amplify

1. **amplify.yml**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

2. Connect repository in AWS Amplify Console

### Docker

1. **Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **nginx.conf**
   ```nginx
   server {
     listen 80;
     location / {
       root /usr/share/nginx/html;
       index index.html;
       try_files $uri $uri/ /index.html;
     }
   }
   ```

3. **Build and run**
   ```bash
   docker build -t crypto-app .
   docker run -p 80:80 crypto-app
   ```

## 🔧 Build Configuration

### Vite Build Options

Customize build in `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true for debugging
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
```

## 🌍 Environment Variables

### Production Variables

Create `.env.production`:
```bash
VITE_APP_NAME=Crypto App
VITE_API_URL=https://api.yourservice.com
```

### Using in Code
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### Vercel Environment Variables

Add in Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add variables for Production/Preview/Development

## 📊 Performance Optimization

### Before Deployment

1. **Analyze Bundle Size**
   ```bash
   npm run build
   npx vite-bundle-visualizer
   ```

2. **Lighthouse Audit**
   - Run production build
   - Open Chrome DevTools
   - Run Lighthouse audit

3. **Optimize Images**
   - Use WebP format
   - Implement lazy loading
   - Use proper image sizing

## 🔍 Post-Deployment

### Monitoring

1. **Vercel Analytics**
   - Automatically included in Vercel deployments
   - View in project dashboard

2. **Error Tracking**
   Consider adding Sentry:
   ```bash
   npm install @sentry/react @sentry/vite-plugin
   ```

### Testing

1. **Smoke Tests**
   - Verify all pages load
   - Test theme switching
   - Check responsive design
   - Test all order types in OrderForm

2. **Performance**
   - Check load times
   - Verify bundle sizes
   - Test on slow connections

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 🛠️ Troubleshooting

### Build Fails

**Issue**: TypeScript errors during build
```bash
# Check for errors
npm run build

# Fix type errors
npm run type-check
```

**Issue**: Out of memory
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Routing Issues

**Issue**: 404 on page refresh

Add to `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Theme Not Working

**Issue**: CSS variables not loading

Ensure `tokens.css` is imported first in `main.tsx`:
```typescript
import './tokens/tokens.css' // Must be first
import './index.css'
```

## 📝 Deployment Checklist

- [ ] Code is committed and pushed to GitHub
- [ ] Build passes locally (`npm run build`)
- [ ] Environment variables configured
- [ ] Custom domain set up (if applicable)
- [ ] SSL/HTTPS enabled
- [ ] Error tracking configured
- [ ] Analytics set up
- [ ] Performance tested
- [ ] SEO meta tags added
- [ ] README updated with live URL

## 🎉 You're Deployed!

Your Crypto App is now live! Update the README.md with your live URLs:

```markdown
## 🌐 Live Demo

- **App**: https://your-app.vercel.app
- **Storybook**: https://your-storybook.vercel.app
```
