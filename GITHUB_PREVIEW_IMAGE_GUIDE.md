# How to Change the Preview Image in GitHub

## What is the Preview Image?
The preview image appears when you share your website link on social media, messaging apps, or other platforms. It's controlled by Open Graph meta tags.

## Step 1: Edit the HTML File in GitHub
1. Go to your repository → `client/index.html`
2. Click the **Edit** button (pencil icon)

## Step 2: Find the Open Graph Tags
Look for these lines around **line 8-10**:
```html
<meta property="og:title" content="The Uplift Project - Launching Hope, Ending Blood Cancer" />
<meta property="og:description" content="Student Visionaries fundraising $50,000 for blood cancer research and patient support through the Leukemia & Lymphoma Society." />
<meta property="og:type" content="website" />
```

## Step 3: Add the Preview Image
**Add this line right after the existing og:type line:**
```html
<meta property="og:image" content="https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687a7a6b&is=687928eb&hm=222e44c662610569ca4d1b552b22856d08ebcc76b5a634f3c974a9ddd76ae6c8&=&format=webp&quality=lossless&width=930&height=930" />
```

## Step 4: Add Additional Meta Tags (Optional but Recommended)
Add these lines for better social media support:
```html
<meta property="og:image:width" content="930" />
<meta property="og:image:height" content="930" />
<meta property="og:url" content="https://theupliftproject.us" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687a7a6b&is=687928eb&hm=222e44c662610569ca4d1b552b22856d08ebcc76b5a634f3c974a9ddd76ae6c8&=&format=webp&quality=lossless&width=930&height=930" />
```

## Step 5: Save and Commit
1. Add commit message: "Update preview image for social sharing"
2. Click **Commit changes**

## Final Result
Your complete meta tags section should look like this:
```html
<meta property="og:title" content="The Uplift Project - Launching Hope, Ending Blood Cancer" />
<meta property="og:description" content="Student Visionaries fundraising $50,000 for blood cancer research and patient support through the Leukemia & Lymphoma Society." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687a7a6b&is=687928eb&hm=222e44c662610569ca4d1b552b22856d08ebcc76b5a634f3c974a9ddd76ae6c8&=&format=webp&quality=lossless&width=930&height=930" />
<meta property="og:image:width" content="930" />
<meta property="og:image:height" content="930" />
<meta property="og:url" content="https://theupliftproject.us" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687a7a6b&is=687928eb&hm=222e44c662610569ca4d1b552b22856d08ebcc76b5a634f3c974a9ddd76ae6c8&=&format=webp&quality=lossless&width=930&height=930" />
```

**The change will automatically deploy to theupliftproject.us within 2-3 minutes after committing.**

## Testing the Preview
After deployment, test your preview image at:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/