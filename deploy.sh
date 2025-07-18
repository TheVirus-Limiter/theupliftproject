#!/bin/bash

# GitHub Pages Deployment Script for The Uplift Project

echo "🚀 Starting deployment to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the static site
echo "🔨 Building static site..."
node build-static.js

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages
    echo "🌐 Deploying to GitHub Pages..."
    npx gh-pages -d dist/public -m "Deploy to GitHub Pages"
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📋 Your site should be available at: https://theupliftproject.us"
        echo ""
        echo "⚠️  Note: It may take a few minutes for changes to appear."
        echo "📖 If this is your first deployment, configure your domain in GitHub Settings."
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi