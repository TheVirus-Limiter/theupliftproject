# GitHub Deployment Guide for The Uplift Project

This guide will help you update your existing GitHub repository to deploy the latest version to theupliftproject.us.

## Prerequisites

- Access to your GitHub repository: https://github.com/TheVirus-Limiter/theupliftproject
- GitHub Pages already configured for theupliftproject.us
- Git installed on your local machine

## Step 1: Backup Your Current Repository

```bash
# Clone your current repository
git clone https://github.com/TheVirus-Limiter/theupliftproject.git
cd theupliftproject

# Create a backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

## Step 2: Download the New Version from Replit

1. **Download from Replit:**
   - In your Replit project, click the three dots menu
   - Select "Download as zip"
   - Extract the zip file to a temporary folder

2. **Alternative - Manual File Copy:**
   - Copy all files from your Replit project to your local machine

## Step 3: Update Your Repository

```bash
# Navigate to your local repository
cd theupliftproject

# Switch to main branch
git checkout main

# Remove old files (keep .git, README.md, and any custom files you want to preserve)
find . -maxdepth 1 -not -name '.git' -not -name 'README.md' -not -name '.gitignore' -delete

# Copy new files from the extracted Replit project
cp -r /path/to/extracted/replit/files/* .

# Make sure these critical deployment files are present:
ls -la client/public/CNAME
ls -la .github/workflows/deploy.yml
ls -la deploy.sh
ls -la build-static.js
```

## Step 4: Verify Deployment Configuration

Ensure these files exist with correct content:

### `client/public/CNAME`
```
theupliftproject.us
```

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
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
      
    - name: Build static site
      run: npm run build:static
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
        cname: theupliftproject.us
```

### `package.json` scripts section should include:
```json
{
  "scripts": {
    "build:static": "node build-static.js",
    "deploy": "npm run build:static && gh-pages -d dist/public"
  }
}
```

## Step 5: Commit and Push Changes

```bash
# Add all files
git add .

# Commit changes
git commit -m "Update to latest version with improved features"

# Push to GitHub
git push origin main
```

## Step 6: Verify Deployment

1. **Check GitHub Actions:**
   - Go to your repository on GitHub
   - Click the "Actions" tab
   - Verify the deployment workflow runs successfully

2. **Test the Website:**
   - Visit https://theupliftproject.us
   - Verify all features work:
     - Navigation
     - Donation calculator
     - "Our Team" button
     - Mobile responsiveness
     - All sections and animations

## Step 7: Manual Deployment (If Needed)

If GitHub Actions isn't working, deploy manually:

```bash
# Install gh-pages if not already installed
npm install -g gh-pages

# Build and deploy
npm run deploy
```

## Important Files for GitHub Pages Deployment

These files are crucial for deployment:

- `client/public/CNAME` - Custom domain configuration
- `client/public/404.html` - SPA routing support
- `.github/workflows/deploy.yml` - Automated deployment
- `build-static.js` - Static build script
- `deploy.sh` - Manual deployment script

## Troubleshooting

### If the site doesn't load:
1. Check that CNAME file contains exactly: `theupliftproject.us`
2. Verify GitHub Pages settings point to `gh-pages` branch
3. Check GitHub Actions for build errors

### Features on GitHub Pages:
- All website features work perfectly on static GitHub Pages
- Interactive donation calculator
- Responsive design for all devices
- Contact forms (open email client)

### If custom domain doesn't work:
1. Verify DNS settings point to GitHub Pages IPs
2. Check CNAME file is in the correct location
3. Wait up to 24 hours for DNS propagation

## DNS Configuration (If Needed)

For theupliftproject.us to work, ensure these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: thevirus-limiter.github.io
```

## Final Verification Checklist

- [ ] Repository updated with latest code
- [ ] GitHub Actions deployment successful
- [ ] https://theupliftproject.us loads correctly
- [ ] All sections display properly on mobile and desktop
- [ ] "Our Team" button links to Instagram
- [ ] Donation calculator works
- [ ] Contact forms function properly
- [ ] Images and assets load correctly

Your site should now be live at https://theupliftproject.us with all the latest features!