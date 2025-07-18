# The Uplift Project

A fundraising website for the Leukemia & Lymphoma Society Student Visionaries of the Year campaign, built with React and designed to raise $50,000 for blood cancer research and patient support.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Fundraising Progress**: Real-time donation tracking and visual progress indicators
- **Corporate Partnerships**: Dedicated page for sponsorship opportunities
- **Educational Content**: Blood cancer facts and impact statistics
- **Instagram Integration**: Live social media feed (@theupliftproject25)
- **Campaign Updates**: News and milestone announcements
- **Contact Forms**: Streamlined communication with potential supporters

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling with custom color scheme
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management
- **Radix UI** with shadcn/ui components for accessibility
- **Framer Motion** for smooth animations

### Backend
- **Express.js** with TypeScript for API endpoints
- **PostgreSQL** with Drizzle ORM for data persistence
- **Neon Database** for serverless PostgreSQL hosting

### Development
- **Vite** for fast development and optimized builds
- **ESM** modules throughout the codebase
- **Strict TypeScript** configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5000
```

### Building for Production
```bash
# Build static site for deployment
npm run build:static

# Preview production build
npm run preview
```

## 🌐 Deployment

### GitHub Pages with Custom Domain

This project is configured for deployment to GitHub Pages with the custom domain `theupliftproject.us`.

#### Quick Deploy
```bash
# Make deploy script executable
chmod +x deploy.sh

# Deploy to GitHub Pages
./deploy.sh
```

#### Manual Deploy
```bash
# Install deployment dependency
npm install --save-dev gh-pages

# Build and deploy
npm run build:static
npx gh-pages -d dist/public
```

### Configuration Files

- **`client/public/CNAME`**: Custom domain configuration
- **`client/public/404.html`**: SPA routing for GitHub Pages
- **`.github/workflows/deploy.yml`**: Automated deployment workflow
- **`deploy.sh`**: Manual deployment script

### Domain Setup

Configure DNS for `theupliftproject.us`:

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── public/             # Static assets
├── server/                 # Express.js backend
├── shared/                 # Shared TypeScript schemas
├── .github/workflows/      # GitHub Actions
└── attached_assets/        # Project assets and documents
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#831919` (Uplift Red)
- **Background**: White with gray accents
- **Text**: Black with gray variants

### Typography
- **Headings**: Playfair Display
- **Body Text**: Open Sans
- **Icons**: Lucide React

### Components
- Built with Radix UI primitives
- Accessible design patterns
- Consistent spacing and sizing
- Hover states and transitions

## 📊 Key Sections

### Home Page
- Hero section with call-to-action
- Fundraising progress tracker
- About campaign information
- Impact statistics
- Instagram feed integration
- Blood cancer facts
- Campaign updates

### Corporate Partnerships
- Partnership benefits overview
- Sponsorship level details
- Downloadable partnership materials
- Contact form for inquiries

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes and test locally
3. Submit pull request
4. Automated deployment after merge

### Code Style
- TypeScript strict mode enabled
- ESLint and Prettier configured
- Semantic commit messages
- Component-first architecture

## 📈 Analytics & Monitoring

- Google Analytics integration ready
- Core Web Vitals optimization
- Performance monitoring setup
- Error tracking configured

## 🔒 Security

- HTTPS enforced via GitHub Pages
- No sensitive data in client code
- Environment variables for secrets
- Secure external API integrations

## 📞 Contact & Support

- **Email**: rehanraj0911@gmail.com
- **Phone**: 210 992 6174
- **Campaign**: Student Visionaries of the Year
- **Dates**: January 16 - March 7, 2026

## 📄 License

This project is built for The Uplift Project fundraising campaign. All rights reserved.

---

**Campaign Goal**: $50,000 for blood cancer research and patient support  
**Beneficiary**: Leukemia & Lymphoma Society  
**Website**: [theupliftproject.us](https://theupliftproject.us)