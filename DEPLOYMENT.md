# The Uplift Project - Deployment Guide

## Quick Setup for GitHub Pages

### 1. Repository Configuration

1. **GitHub Pages Settings**
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"
   - Add custom domain: `theupliftproject.us`

2. **Required Files**
   
   **client/public/CNAME**
   ```
   theupliftproject.us
   ```

   **client/public/404.html**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="utf-8">
       <title>The Uplift Project</title>
       <script>
           var pathSegmentsToKeep = 1;
           var l = window.location;
           l.replace(
               l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
               l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + 
               '/?p=/' +
               l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
               (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
               l.hash
           );
       </script>
   </head>
   <body></body>
   </html>
   ```

### 2. GitHub Actions Deployment

**.github/workflows/deploy.yml**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build static site
      run: npm run build:static
      env:
        VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
        VITE_OPENAI_API_KEY: ${{ secrets.VITE_OPENAI_API_KEY }}
        
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
    - name: Deploy to GitHub Pages
      uses: actions/deploy-pages@v4
```

## Admin Dashboard Setup

### Admin Access
- **Login URL**: `theupliftproject.us/admin-login`
- **Password**: `upliftproject50k2025$$$$`
- **Dashboard**: `theupliftproject.us/admin`

### Admin Features
- Update fundraising progress (current amount, goal, donor count)
- Create and manage campaign updates
- Publish/unpublish content
- Mobile-responsive interface
- Real-time progress visualization

## OpenAI Chatbot Integration

### 1. Get OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com)
2. Create account or sign in
3. Go to API Keys section
4. Create new secret key
5. Copy the key (starts with `sk-`)

### 2. Add API Key to GitHub

1. Go to Repository Settings
2. Navigate to Secrets and Variables > Actions
3. Click "New repository secret"
4. **Name**: `VITE_OPENAI_API_KEY`
5. **Value**: Your OpenAI API key (sk-...)

### 3. Chatbot Features (when API key is added)

**Automatic Integration:**
- Chatbot button appears on website
- Interactive Q&A about the campaign
- Information about blood cancer research
- Team and donation guidance
- No additional setup required

**Cost Estimates:**
- ~$0.015 per 1K input tokens
- ~$0.060 per 1K output tokens  
- Typical conversation: $0.02-0.10
- Budget: $5-15/month for regular use

### 4. Without OpenAI Key
- Website works normally without chatbot
- All other features remain functional
- Admin dashboard works independently

## Google Analytics (Optional)

### Setup
1. Create Google Analytics account
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to GitHub Secrets as `VITE_GA_MEASUREMENT_ID`

## Deployment Process

### Automatic Deployment
Every push to `main` branch automatically:
1. Builds the static site
2. Deploys to GitHub Pages
3. Updates theupliftproject.us

### Manual Deployment
```bash
npm run build:static
git add .
git commit -m "Deploy updates"
git push origin main
```

## Verification Checklist

After deployment, verify:
- [ ] Main site loads: https://theupliftproject.us
- [ ] Admin login works with new password
- [ ] All images display correctly  
- [ ] Donation links function
- [ ] Mobile responsiveness
- [ ] Chatbot appears (if API key added)

## Troubleshooting

**Site not updating:**
- Check GitHub Actions tab for errors
- Clear browser cache
- Verify CNAME file exists

**Admin dashboard issues:**
- Use correct password: `upliftproject50k2025$$$$`
- Try incognito/private browsing
- Check browser console for errors

**Chatbot not working:**
- Verify OpenAI API key in GitHub Secrets
- Check API key format (starts with sk-)
- Ensure sufficient API credits

## Support

For issues or questions:
- Team Contact: rehanraj0911@gmail.com
- Check repository documentation
- Review GitHub Actions logs for deployment errors

---

**Quick Reference:**
- Website: https://theupliftproject.us
- Admin: https://theupliftproject.us/admin-login  
- Password: `upliftproject50k2025$$$$`
- Required Secrets: `VITE_OPENAI_API_KEY`, `VITE_GA_MEASUREMENT_ID`