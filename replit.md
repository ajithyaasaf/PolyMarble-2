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

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.