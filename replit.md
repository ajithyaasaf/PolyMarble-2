# Polymarbles 3D - Luxury Marble Visualization Platform

## Overview

Polymarbles 3D is a modern web application showcasing luxury marble sculptures and surfaces with interactive 3D visualization capabilities. The platform serves as a marketing and portfolio website for a marble craftsmanship company, featuring an elegant dark theme with gold accents and immersive visual experiences.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **3D Rendering**: Three.js with React Three Fiber for interactive marble visualizations
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage (expandable to PostgreSQL sessions)
- **API Pattern**: RESTful API with /api prefix

### Build and Development
- **Development**: Vite dev server with HMR
- **Production Build**: Vite build + esbuild for server bundling
- **TypeScript**: Strict mode with path mapping
- **Package Manager**: npm with lockfile version 3

## Key Components

### Frontend Components
- **Landing Page**: Hero section with video background and smooth scrolling
- **Interactive Gallery**: 3D marble viewer with texture selection
- **Project Portfolio**: Featured projects with glassmorphism effects
- **Contact Form**: Multi-field form with validation and toast notifications
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route system for API endpoints
- **Middleware**: Request logging, error handling, and body parsing
- **Database Schema**: User management with Drizzle ORM schema definitions

### Design System
- **Color Palette**: 
  - Rich Black (#0a1412)
  - Deep Jade (#24473E) 
  - Metallic Gold (#D4AF37)
  - Slate Grey (#5A5A5A)
- **Typography**: Space Grotesk font family
- **Effects**: Glassmorphism, parallax scrolling, reveal animations

## Data Flow

### Client-Side Flow
1. **Page Load**: React router renders Home component
2. **Component Mounting**: useScrollReveal hook sets up intersection observers
3. **3D Interactions**: Three.js renders marble spheres with drag/rotation controls
4. **Form Submissions**: React Hook Form validates and submits via TanStack Query
5. **State Updates**: Query client manages server state and caching

### Server-Side Flow
1. **Request Processing**: Express middleware chain handles incoming requests
2. **Route Matching**: Dynamic route registration system matches API endpoints
3. **Storage Operations**: Abstract storage interface handles CRUD operations
4. **Response Handling**: Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **three** & **@react-three/fiber**: 3D rendering capabilities
- **wouter**: Lightweight routing solution

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts Vite dev server and Express backend
- **Hot Module Replacement**: Vite HMR for instant frontend updates
- **Type Checking**: `npm run check` for TypeScript validation
- **Database Management**: `npm run db:push` for schema migrations

### Production Deployment
- **Build Process**: `npm run build` creates optimized client and server bundles
- **Server Bundle**: esbuild creates Node.js compatible server bundle
- **Static Assets**: Vite builds client assets to `dist/public`
- **Runtime**: `npm start` runs production server with NODE_ENV=production

### Database Strategy
- **Development**: In-memory storage for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM migrations
- **Schema Management**: Drizzle Kit for database schema evolution
- **Connection**: Environment variable based database URL configuration

## Changelog

- July 05, 2025: Initial setup and migration from Replit Agent to Replit environment
- July 05, 2025: Implemented comprehensive scroll-triggered animation system
  - Added multiple reveal animation types (up, left, right, fade, scale, rotate)
  - Implemented staggered animations for grouped elements
  - Added parallax effects for depth and immersion
  - Created text shimmer effects for gold highlights
  - Integrated progress bar animations with data attributes
  - Added floating animations for enhanced visual appeal
  - Included reduced motion accessibility support
- July 05, 2025: Major site enhancement implementing comprehensive feature roadmap
  - **Phase 1**: Hero section complete redesign with new messaging, layered parallax marble veins, sample request modal with micro-interactions
  - **Phase 1**: About section converted to two-panel horizontal timeline with founder's story and key milestones
  - **Phase 1**: Footer enhanced with newsletter signup, local contact information, and click-to-call/mail functionality
  - **Phase 1**: Added sticky Quick Quote sidebar for desktop with expandable form
  - **Phase 2**: Gallery transformed to full-width auto-playing carousel with ultra-close-up texture videos and 3D hover effects
  - **Phase 2**: Projects renamed to "Case Studies" with Before→During→After narrative format, ROI callouts, and filtering controls
  - **Phase 2**: Added flip-slab animation for "Show more" button with infinite scroll functionality
  - **Phase 3**: Created Products & Configurator page with live preview, interactive controls, and material specifications table
  - **Phase 3**: Built Inspiration Lab page with mood-board gallery, auto-playing styled spaces, and hover-reveal video reels
  - **Phase 4**: Developed Support & Community page with DIY video hub, architect portal with gated login, and technical FAQs
  - **Phase 4**: Created SEO micro-landing pages for Madurai and Chennai with localized content and unique H1s
  - **Phase 4**: Enhanced navigation system with multi-page routing and location-aware menu states

## User Preferences

Preferred communication style: Simple, everyday language.