# GitHub Pages Chatbot Setup Guide

The Uplift Project now includes an AI-powered chatbot that works with GitHub Pages! Here's how to set it up:

## How It Works

The chatbot is built to work entirely in the browser using OpenAI's API. It includes:

✅ **Complete campaign knowledge** - Team info, donation impact, contact details  
✅ **Mobile responsive design** - Works perfectly on all devices  
✅ **GitHub Pages compatible** - No server required  
✅ **Smart error handling** - Fallback to contact information  
✅ **Campaign-focused responses** - Optimized for fundraising questions

## Setup Options

### Option 1: With OpenAI API (Recommended)

**Step 1: Get OpenAI API Key**
1. Go to https://platform.openai.com/api-keys
2. Create an account or sign in
3. Click "Create new secret key"
4. Copy your API key (starts with `sk-`)

**Step 2: Add to GitHub Repository**
1. Go to your repository: https://github.com/TheVirus-Limiter/theupliftproject
2. Click "Settings" tab
3. Click "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Name: `VITE_OPENAI_API_KEY`
6. Value: Your OpenAI API key
7. Click "Add secret"

**Step 3: Deploy**
The chatbot will automatically work once deployed to GitHub Pages!

### Option 2: Without API Key (Limited Functionality)

If you don't want to use OpenAI, the chatbot will still appear and show helpful fallback messages directing users to:
- Email: rehanraj0911@gmail.com
- Instagram: @theupliftproject25
- Website sections for donation info

## What the Chatbot Knows

The AI assistant has complete knowledge of:

### Team Information
- **Leadership**: Rehan Raj (Team Leader), Alexis Holmes (Co-Leader)
- **Members**: All 6 student team members with schools and grades
- **Adult Support**: Principal, teachers, and sponsors
- **Honored Hero**: Miguel Roman

### Campaign Details
- **Goal**: $50,000 for blood cancer research
- **Donation Impact**: Specific dollar amounts and what they fund
- **Statistics**: Blood cancer facts and research impact
- **Contact Info**: All social media and contact methods

### Sample Conversations
- "Who leads your team?" → Details about Rehan and Alexis
- "How can I donate?" → Links to donation section and impact info
- "What does $25 do?" → Specific impact of donation amounts
- "Tell me about blood cancer" → Educational statistics and facts
- "How can I help?" → Donation options and sharing suggestions

## GitHub Pages Deployment

The chatbot is specifically designed for static hosting:

### Features that work on GitHub Pages:
✅ **Client-side AI processing**  
✅ **Secure API key handling**  
✅ **Mobile responsive design**  
✅ **Real-time conversations**  
✅ **Campaign-specific knowledge**  
✅ **Error handling and fallbacks**

### Technical Implementation:
- Uses OpenAI's REST API directly from the browser
- Environment variables handled through build process
- No server-side code required
- Optimized for static site generation

## Cost Considerations

**OpenAI API Pricing (2025):**
- GPT-3.5-turbo: ~$0.002 per conversation
- Typical conversation cost: $0.01-0.05
- Expected monthly cost: $5-20 for moderate traffic

**Free Alternative:**
- Chatbot still provides value without API key
- Shows contact information and helpful links
- Directs users to appropriate website sections

## Security & Privacy

✅ **API Key Security**: Keys stored as GitHub secrets, not in source code  
✅ **No Data Storage**: Conversations not stored or logged  
✅ **Privacy Focused**: No user tracking or data collection  
✅ **Rate Limiting**: Built-in protections against API abuse

## Customization Options

The chatbot can be easily customized:

### Visual Styling
- Colors match your campaign branding (uplift-red)
- Mobile-first responsive design
- Consistent with website theme

### Content Updates
- Add new team members
- Update donation goals and progress
- Include new campaign information
- Modify conversation prompts

### Behavioral Changes
- Adjust response length and tone
- Add specific fundraising calls-to-action
- Include event information and updates

## Troubleshooting

### If chatbot doesn't respond:
1. Check that `VITE_OPENAI_API_KEY` is set in GitHub secrets
2. Verify API key is valid and has credits
3. Check browser console for error messages

### If API key isn't working:
1. Confirm key starts with `sk-`
2. Check OpenAI account has available credits
3. Verify secret name is exactly `VITE_OPENAI_API_KEY`

### For development testing:
- Test locally by adding API key to `.env` file
- Use browser dev tools to check network requests
- Monitor API usage in OpenAI dashboard

## Final Result

Your visitors will see a red chat button in the bottom-right corner. Clicking it opens an intelligent assistant that can:

🎯 **Answer campaign questions**  
🎯 **Provide donation information**  
🎯 **Share team details**  
🎯 **Give contact information**  
🎯 **Encourage engagement**

The chatbot enhances your fundraising website by providing instant, helpful responses to visitor questions 24/7!