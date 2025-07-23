# The Uplift Project - Complete Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying The Uplift Project fundraising website with admin dashboard to GitHub Pages, including optional OpenAI API integration for enhanced functionality.

## Prerequisites

- GitHub account
- Custom domain (theupliftproject.us) configured
- Basic understanding of GitHub repositories
- Optional: OpenAI API key for AI-powered features

## Part 1: Repository Setup & Basic Deployment

### 1. Repository Configuration

1. **Fork or Clone the Repository**
   ```bash
   git clone <repository-url>
   cd uplift-project
   ```

2. **Update Repository Settings**
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"
   - Add custom domain: `theupliftproject.us`

### 2. Environment Configuration

Create the following files if they don't exist:

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

### 3. GitHub Actions Workflow

**.github/workflows/deploy.yml**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
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
      with:
        fetch-depth: 0
        
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
      id: deployment
      uses: actions/deploy-pages@v4
```

### 4. Build Configuration

Update **package.json** scripts:
```json
{
  "scripts": {
    "build:static": "node build-static.js",
    "preview": "vite preview --port 3000",
    "deploy": "./deploy.sh"
  }
}
```

## Part 2: Admin Dashboard Setup

### 1. Admin Authentication

The admin dashboard uses simple password authentication compatible with GitHub Pages:
- **Login URL**: `theupliftproject.us/admin-login`
- **Admin Password**: `upliftproject50k2025$$$$`
- **Dashboard URL**: `theupliftproject.us/admin`

### 2. Admin Features

#### Fundraising Progress Management
- Update current donation amount
- Modify goal amount
- Track donor count
- Real-time progress visualization

#### Campaign Updates Management
- Create new campaign updates
- Edit existing updates
- Publish/unpublish updates
- Delete updates
- Rich text content support

### 3. Mobile-Responsive Design

The admin dashboard is fully responsive with:
- Mobile-first design approach
- Collapsible navigation on small screens
- Touch-friendly interface elements
- Optimized typography and spacing

## Part 3: OpenAI Chatbot Integration

### 1. OpenAI API Setup for Chatbot

1. **Get OpenAI API Key**
   - Visit [OpenAI Platform](https://platform.openai.com)
   - Create account or sign in
   - Navigate to API Keys section
   - Create new secret key
   - Copy the key (starts with `sk-`)

2. **Add to GitHub Secrets**
   - Go to Repository Settings > Secrets and Variables > Actions
   - Click "New repository secret"
   - Name: `VITE_OPENAI_API_KEY`
   - Value: Your OpenAI API key

### 2. Client-Side Configuration

The chatbot will automatically use the OpenAI API key when available. No additional client-side configuration is needed as the chatbot component is already implemented and will detect the API key presence.

### 3. Chatbot Features

**Functionality:**
- Interactive Q&A about The Uplift Project
- Information about blood cancer research
- Donation guidance and campaign details
- Automatic responses about team members and goals
- Integration with existing website design

**Usage Guidelines:**
- The chatbot appears as a floating button on the website
- Users can ask questions about the campaign, team, or blood cancer research
- Responses are contextually aware of The Uplift Project's mission
- Costs approximately $0.01-0.05 per conversation

**API Cost Management:**
- GPT-4o model: ~$0.015 per 1K input tokens, ~$0.060 per 1K output tokens
- Typical chatbot conversation: $0.02-0.10 per interaction
- Budget $5-15/month for moderate usage
- No content generation features to minimize costs

## Part 4: SEO & Performance Optimization

### 1. Meta Tags & SEO

Update **client/index.html**:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>The Uplift Project - Ending Blood Cancer Through Hope and Research</title>
  <meta name="title" content="The Uplift Project - Ending Blood Cancer Through Hope and Research">
  <meta name="description" content="Join The Uplift Project's mission to raise $50,000 for blood cancer research through the Leukemia & Lymphoma Society Student Visionaries program. Every donation brings us closer to finding cures.">
  <meta name="keywords" content="blood cancer research, leukemia lymphoma society, student visionaries, fundraising, cancer cure, donation, uplift project">
  <meta name="author" content="The Uplift Project Team">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://theupliftproject.us/">
  <meta property="og:title" content="The Uplift Project - Ending Blood Cancer Through Hope and Research">
  <meta property="og:description" content="Join our mission to raise $50,000 for blood cancer research. Every donation brings us closer to finding cures and supporting patients in their fight.">
  <meta property="og:image" content="https://theupliftproject.us/og-image.jpg">
  <meta property="og:site_name" content="The Uplift Project">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://theupliftproject.us/">
  <meta property="twitter:title" content="The Uplift Project - Ending Blood Cancer Through Hope and Research">
  <meta property="twitter:description" content="Join our mission to raise $50,000 for blood cancer research. Every donation brings us closer to finding cures.">
  <meta property="twitter:image" content="https://theupliftproject.us/og-image.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#dc2626">
</head>
```

### 2. Performance Optimization

- **Image Optimization**: All images hosted on GitHub file storage for fast loading
- **Code Splitting**: Vite automatically splits bundles for optimal loading
- **CDN**: GitHub Pages provides global CDN automatically
- **Minification**: Build process minifies CSS, JS, and HTML
- **Caching**: Proper cache headers set by GitHub Pages

## Part 5: Analytics & Monitoring

### 1. Google Analytics Setup

1. **Create Google Analytics Account**
   - Visit [Google Analytics](https://analytics.google.com)
   - Create new property for theupliftproject.us
   - Copy Measurement ID (starts with G-)

2. **Add to GitHub Secrets**
   - Repository Settings > Secrets and Variables > Actions
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: Your Google Analytics Measurement ID

3. **Tracking Implementation**
   The site automatically tracks:
   - Page views and navigation
   - Button clicks and interactions
   - Donation link visits
   - Admin dashboard access

### 2. Monitoring Checklist

**Daily Monitoring:**
- [ ] Website accessibility (theupliftproject.us)
- [ ] Admin dashboard functionality (/admin-login)
- [ ] Donation links working
- [ ] Contact form submissions

**Weekly Monitoring:**
- [ ] Google Analytics data
- [ ] Site performance metrics
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

## Part 6: Deployment Process

### 1. Manual Deployment

```bash
# Build the static site
npm run build:static

# Deploy using the deployment script
npm run deploy

# Or deploy manually
git add .
git commit -m "Deploy updates"
git push origin main
```

### 2. Automatic Deployment

Every push to the `main` branch automatically triggers:
1. Build process with environment variables
2. Static site generation
3. Deployment to GitHub Pages
4. Cache invalidation

### 3. Deployment Verification

After deployment, verify:
- [ ] Main site loads: https://theupliftproject.us
- [ ] Admin login works: https://theupliftproject.us/admin-login
- [ ] All images display correctly
- [ ] Donation links function
- [ ] Mobile responsiveness
- [ ] Analytics tracking

## Part 7: Maintenance & Updates

### 1. Content Updates

**Via Admin Dashboard:**
1. Login at theupliftproject.us/admin-login
2. Update fundraising progress
3. Create campaign updates
4. Publish new content

**Via Code Changes:**
1. Edit relevant component files
2. Test locally with `npm run dev`
3. Commit and push to trigger deployment

### 2. Regular Maintenance Tasks

**Monthly:**
- [ ] Update fundraising progress
- [ ] Review and update campaign content
- [ ] Check all external links
- [ ] Monitor Google Analytics performance
- [ ] Update team member information if needed

**Quarterly:**
- [ ] Review and update dependencies
- [ ] Audit site performance
- [ ] Update contact information
- [ ] Review SEO performance

### 3. Troubleshooting

**Common Issues:**

1. **Site not updating after push**
   - Check GitHub Actions tab for build errors
   - Verify CNAME file is correct
   - Clear browser cache

2. **Admin dashboard not working**
   - Verify password is correct (`upliftproject50k2025$$$$`)
   - Check browser console for errors
   - Try incognito/private browsing mode

3. **Images not loading**
   - Verify image URLs are correct
   - Check GitHub file storage accessibility
   - Update image paths if needed

## Part 8: Security & Best Practices

### 1. Security Considerations

**GitHub Pages Security:**
- HTTPS automatically enabled
- Custom domain SSL certificate auto-provisioned
- No server-side vulnerabilities (static site)

**Admin Security:**
- Simple password authentication for GitHub Pages compatibility
- No database storage of sensitive information
- Session data stored in browser localStorage only

### 2. Best Practices

**Content Management:**
- Regular backups of important content
- Version control for all changes
- Testing changes in development before deployment

**Performance:**
- Optimize images before adding
- Monitor site loading speed
- Use semantic HTML for accessibility

**SEO:**
- Regular content updates
- Proper heading structure
- Alt text for all images
- Internal linking strategy

## Conclusion

This deployment guide provides everything needed to successfully deploy and maintain The Uplift Project website with full admin functionality, optional AI integration, and professional-grade performance and SEO optimization.

For additional support or questions, contact the development team or refer to the project documentation in the repository.

---

**Quick Reference:**
- Website: https://theupliftproject.us
- Admin Login: https://theupliftproject.us/admin-login
- Admin Password: `upliftproject50k2025$$$$`
- Repository: [GitHub Repository URL]
- Team Contact: rehanraj0911@gmail.com