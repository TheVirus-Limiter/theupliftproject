#!/usr/bin/env node

/**
 * Static Build Script for GitHub Pages Deployment
 * This script builds the React app as a static site without the Express server
 */

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  try {
    console.log('🔨 Building static site for GitHub Pages...');
    
    await build({
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist/public'),
        emptyOutDir: true,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "client", "src"),
          "@shared": path.resolve(__dirname, "shared"),
          "@assets": path.resolve(__dirname, "attached_assets"),
        },
      },
      base: '/',
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });
    
    console.log('✅ Static build complete! Files are in dist/public/');
    console.log('🚀 Ready for deployment to GitHub Pages');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildStatic();