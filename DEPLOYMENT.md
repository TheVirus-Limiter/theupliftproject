# Deployment Guide - The Uplift Project

## GitHub Pages Deployment

This guide walks you through deploying The Uplift Project website to GitHub Pages with a custom domain (theupliftproject.us).

### Prerequisites

- GitHub account
- Domain ownership (theupliftproject.us)
- Node.js installed locally

### Step 1: Prepare Your Repository

1. **Create a GitHub Repository**
   ```bash
   # Create a new repository on GitHub named 'the-uplift-project'
   # Clone it locally or push your existing code
   git clone https://github.com/your-username/the-uplift-project.git
   cd the-uplift-project
   ```

2. **Install GitHub Pages Package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**
   Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://theupliftproject.us",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist/public"
     }
   }
   ```

### Step 2: Configure Build for Static Deployment

1. **Update vite.config.ts**
   Ensure your Vite config includes the correct base path:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   
   export default defineConfig({
     plugins: [react()],
     base: '/', // Use '/' for custom domain
     build: {
       outDir: 'dist/public'
     }
   });
   ```

2. **Create a Static Build Script**
   Add to package.json scripts:
   ```json
   {
     "build:static": "vite build --mode production"
   }
   ```

### Step 3: Build and Deploy

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Step 4: Domain Configuration

#### A. GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select "Deploy from a branch"
4. Choose **gh-pages** branch and **/ (root)** folder
5. Under **Custom domain**, enter: `theupliftproject.us`
6. Check "Enforce HTTPS"

#### B. DNS Configuration

Configure your domain's DNS settings with your domain registrar:

**For Apex Domain (theupliftproject.us):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153  
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: your-username.github.io
TTL: 3600
```

#### C. Create CNAME File

Create a file named `CNAME` in your `public` directory:
```
theupliftproject.us
```

### Step 5: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
        cname: theupliftproject.us
```

### Step 6: Environment Variables

For production deployment, ensure any environment variables are properly configured:

1. **In GitHub Repository Settings:**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add any required secrets (API keys, etc.)

2. **Update Build Process:**
   Make sure your build process includes environment variables:
   ```bash
   # Example for build with environment variables
   VITE_API_URL=https://your-api.com npm run build
   ```

### Step 7: Verification

1. **Check Deployment Status**
   - Monitor the Actions tab in your GitHub repository
   - Verify the build completes successfully

2. **Test Domain**
   - Visit `https://theupliftproject.us`
   - Verify all functionality works
   - Test responsive design on mobile devices

3. **SSL Certificate**
   - GitHub Pages automatically provides SSL
   - Verify HTTPS is working: `https://theupliftproject.us`

### Troubleshooting

#### Common Issues

1. **404 Errors on Refresh**
   - Create a `404.html` file that redirects to `index.html`
   - For SPAs, this handles client-side routing

2. **CSS/JS Not Loading**
   - Verify the base path in `vite.config.ts`
   - Check that assets are using relative paths

3. **Domain Not Resolving**
   - DNS changes can take 24-48 hours to propagate
   - Use `dig theupliftproject.us` to check DNS status

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`

### Maintenance

#### Regular Updates
1. Update dependencies regularly
2. Monitor GitHub Actions for failed builds
3. Renew domain registration annually
4. Review and update content regularly

#### Content Updates
1. Make changes to your local repository
2. Push to main branch
3. GitHub Actions will automatically redeploy

### Security Considerations

1. **Secrets Management**
   - Never commit API keys to the repository
   - Use GitHub Secrets for sensitive data

2. **HTTPS Enforcement**
   - Always use HTTPS in production
   - GitHub Pages provides free SSL certificates

3. **Domain Security**
   - Enable domain lock with your registrar
   - Use strong passwords for domain management

### Performance Optimization

1. **Asset Optimization**
   - Images are optimized during build
   - CSS and JS are minified automatically

2. **Caching**
   - GitHub Pages provides CDN caching
   - Set appropriate cache headers

3. **Monitoring**
   - Use Google Analytics for traffic monitoring
   - Monitor Core Web Vitals for performance

---

## Quick Deployment Checklist

- [ ] Repository created on GitHub
- [ ] `gh-pages` package installed
- [ ] `package.json` scripts configured
- [ ] Application builds successfully
- [ ] Domain DNS configured
- [ ] CNAME file created
- [ ] GitHub Pages settings configured
- [ ] GitHub Actions workflow created
- [ ] SSL certificate verified
- [ ] Website accessible at `https://theupliftproject.us`

For support with this deployment, contact the development team or refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).