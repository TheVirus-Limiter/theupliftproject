# The Uplift Project - Campaign Archive

## Overview
This is the archived website for The Uplift Project, a Blood Cancer United (formerly LLS) Student Visionaries of the Year fundraiser that ran from January 16 to March 7, 2026. The campaign raised $15,931. All South Texas teams combined raised $1,121,651.

## Tech Stack
- **Frontend**: React 18 + TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js (Node.js)
- **Routing**: Wouter
- **Data Fetching**: TanStack Query
- **Build**: Vite (dev), esbuild (server bundle)
- **ORM**: Drizzle (configured but using in-memory storage)

## Project Structure
- `client/src/pages/` - Page components (home, corporations, admin)
- `client/src/components/` - UI components
  - `hero.tsx` - Archive hero with $15,931 total and Instagram CTA
  - `fundraising-progress.tsx` - Campaign results (replaces countdown timer)
  - `ksat-section.tsx` - KSAT media coverage (articles + YouTube embeds)
  - `best-day-ever.tsx` - Miguel's Best Day Ever section
  - `forbes-feature.tsx` - Forbes article + campaign video
  - `impact-stats.tsx` - Interactive mission section
  - `navigation.tsx` - Archive-mode nav (Follow Us instead of Donate)
  - `footer.tsx` - Updated with final totals
- `server/` - Express backend
- `shared/` - Shared schemas (Drizzle/Zod)

## Key Details
- Campaign total: $15,931
- South Texas total: $1,121,651
- All donate buttons replaced with Instagram/follow links
- Instagram: @theupliftproject25
- Dev server runs on port 5000
