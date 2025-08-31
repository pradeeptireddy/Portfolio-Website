# Portfolio Website

## Overview

This is a personal portfolio website built as a full-stack application showcasing a software engineer's professional experience, projects, and skills. The application features a modern, responsive design with smooth scrolling navigation and a clean, minimalist aesthetic. The portfolio highlights experience in healthcare technology, full-stack development, and regulatory compliance systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured for production deployment
- **Session Management**: Express sessions with PostgreSQL store using connect-pg-simple
- **Development**: Hot module replacement and error overlay for improved developer experience

### Component Structure
- **Modular Components**: Separated into logical sections (Hero, Projects, Experience, Skills, Education, Contact)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Navigation**: Smooth scrolling with active section detection
- **Typography**: Custom font stack with Playfair Display for headings and Inter for body text

### Build and Deployment
- **Development**: Concurrent client and server development with Vite dev server
- **Production**: Static asset generation with Express server for API endpoints
- **Database Migrations**: Drizzle Kit for schema management and migrations
- **Environment**: Replit-optimized with development banner and error handling

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **drizzle-zod**: Schema validation integration with Zod

### UI and Styling
- **@radix-ui/***: Comprehensive suite of accessible UI primitives (dialogs, dropdowns, navigation, forms)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with @hookform/resolvers for validation
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette interface component

### Development and Build
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for server development
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration for development environment