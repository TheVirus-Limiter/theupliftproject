# The Uplift Project - Website and Fundraising Platform

## Overview

The Uplift Project is a React-based single-page application built for a Leukemia & Lymphoma Society Student Visionaries of the Year fundraising campaign. The project aims to raise $50,000 for blood cancer research and patient support through an engaging web presence that showcases the campaign's mission, progress, and impact.

## User Preferences

Preferred communication style: Simple, everyday language.

## Team Information

**Leadership:**
- Team Leader: Rehan Raj (LHS, 11th grade)
- Co-Leader: Alexis Holmes (LHS, 12th grade)

**Team Members:**
- Abraham Sutton (LHS, 12th grade)
- Benjamin Storandt (LHS, 12th grade) 
- Landon Hansen (RIT, Freshman)
- Keegan Stinson (LHS, 12th grade)
- Sierra Rogler (LHS, 10th grade)
- Hildie Villagomez (LHS, 11th grade)

**Adult Sponsors & Support:**
- Andrew Eickstead (LHS Principal)
- Matthew Bomersbach (LHS Finance Teacher)
- Meagan Rikard (LLS Biology Teacher)
- Andrew Schuetze (LHS Robotics Teacher)

**Honored Hero:**
- Miguel Roman (Blinn College, Freshman) - Campaign's Honored Hero

Note: LHS = Local High School, RIT = Rochester Institute of Technology

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Development Environment
- **Monorepo Structure**: Shared schema between client and server
- **Hot Reload**: Vite development server with HMR
- **TypeScript**: Strict type checking across the entire codebase
- **ESM**: Modern ES modules throughout

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **Fundraising Progress**: Real-time donation tracking with visual progress indicators
- **About Section**: Campaign information and mission statement
- **Impact Stats**: Visual representation of campaign achievements
- **Instagram Integration**: Social media feed integration
- **Campaign Updates**: News and milestone announcements
- **Blood Cancer Facts**: Educational content with statistics
- **Call to Action**: Donation and sharing functionality
- **Footer**: Contact information and social links

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **User Management**: Basic user schema with authentication capabilities
- **API Routes**: RESTful endpoints prefixed with `/api`
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints

### UI System
- **Design System**: Custom color palette with "uplift-red" primary color
- **Typography**: Playfair Display for headings, Open Sans for body text
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components from Radix UI
- **Dark Mode**: CSS variable-based theming system

## Data Flow

### Client-Side Data Flow
1. React components fetch data using TanStack Query hooks
2. Query client manages caching, background updates, and error states
3. API requests include credentials for session-based authentication
4. Components update reactively based on query state changes

### Server-Side Data Flow
1. Express middleware handles request parsing and logging
2. Route handlers interact with storage abstraction layer
3. Storage layer communicates with PostgreSQL via Drizzle ORM
4. Responses are JSON-formatted with appropriate HTTP status codes

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Extensible Design**: Schema designed for future expansion with additional fundraising-related entities

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Query for frontend state
- **UI Framework**: Radix UI primitives, Lucide React icons, class-variance-authority
- **Styling**: Tailwind CSS, clsx for conditional classes
- **Backend**: Express, Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, PostCSS, Autoprefixer

### Third-Party Integrations
- **Donation Platform**: External Leukemia & Lymphoma Society donation portal
- **Social Media**: Instagram (@theupliftproject25) for campaign updates
- **Font Service**: Google Fonts for Playfair Display and Open Sans

### Development Tools
- **Replit Integration**: Cartographer plugin for development environment
- **Error Handling**: Runtime error overlay for development
- **Build Process**: ESBuild for server bundling, Vite for client bundling

## Deployment Strategy

### Build Process
- **Client Build**: Vite bundles React application into static assets
- **Server Build**: ESBuild creates Node.js compatible server bundle
- **Asset Output**: Client assets output to `dist/public`, server to `dist/`

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL-backed session storage for user authentication
- **Static Assets**: Express serves built client assets in production

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage fallback
- **Production**: Express serves static files, PostgreSQL for persistence
- **Environment Detection**: NODE_ENV-based configuration switching

The application is designed for deployment on platforms that support Node.js with PostgreSQL databases, with particular optimization for Replit's development environment.

## GitHub Pages Deployment Configuration

The project is now fully configured for static deployment to GitHub Pages with custom domain support:

### Deployment Files Added
- **`client/public/CNAME`**: Custom domain configuration for theupliftproject.us
- **`client/public/404.html`**: SPA routing handler for GitHub Pages
- **`.github/workflows/deploy.yml`**: Automated GitHub Actions deployment workflow
- **`deploy.sh`**: Manual deployment script with build and deploy commands
- **`build-static.js`**: Custom static build script optimized for GitHub Pages
- **`README.md`**: Comprehensive project documentation with deployment instructions
- **`DEPLOYMENT.md`**: Detailed deployment guide with DNS configuration

### Static Build Process
- Client-only build without Express server dependencies
- Optimized for static hosting with proper asset handling
- SPA routing configured to work with GitHub Pages
- Custom domain (theupliftproject.us) pre-configured

### Deployment Methods
1. **Automated**: GitHub Actions workflow on push to main branch
2. **Manual**: Using deploy.sh script or npm commands
3. **Development**: Local testing with preview server

The static deployment maintains all functionality while being optimized for GitHub Pages hosting with the custom domain theupliftproject.us.

## Admin Dashboard System

### Admin Features Added
- **Admin Authentication**: Simple password-based authentication system compatible with GitHub Pages static hosting
- **Admin Login Page**: Secure login interface at `/admin-login` with password "upliftproj"
- **Admin Dashboard**: Full-featured dashboard at `/admin` with comprehensive content management
- **Fundraising Progress Management**: Real-time updating of donation amounts, goals, and donor counts
- **Campaign Updates System**: Create, edit, publish, and delete campaign updates with rich content support
- **Mobile-Responsive Design**: Fully responsive admin interface optimized for all device sizes
- **Footer Integration**: Admin link discretely added to footer for easy access

### Technical Implementation
- **Storage System**: In-memory storage with proper interface abstraction for future database migration
- **API Authentication**: Bearer token authentication using the admin password
- **REST API Endpoints**: Complete CRUD operations for progress tracking and content management
- **Real-time Updates**: Live progress visualization with percentage calculations and visual indicators
- **GitHub Pages Compatible**: No server-side dependencies, all admin functionality works in static environment

### Admin Dashboard Access
- **URL**: theupliftproject.us/admin-login
- **Password**: upliftproj
- **Features**: Fundraising progress updates, campaign content management, publish/unpublish controls
- **Responsive**: Fully optimized for mobile, tablet, and desktop administration