# HDT AI Education Platform

## Overview

This is a full-stack web application for an AI education platform called "HDT AI" that offers courses on AI automation, ChatGPT mastery, and related technologies. The platform features a modern landing page with course information, instructor profiles, and a registration system for potential students. Built with React frontend and Express backend, it provides a comprehensive solution for educational course marketing and student registration management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API
- **Language**: TypeScript for type safety across the entire stack
- **API Design**: RESTful endpoints for registration management (`/api/registrations`)
- **Data Storage**: In-memory storage using Map data structure (designed to be easily replaceable with database)
- **Request Logging**: Custom middleware for API request/response logging with performance metrics
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Database**: PostgreSQL (configured but not currently used, falls back to in-memory storage)
- **Schema**: Structured registration data with fields for personal info, course selection, and notes
- **Validation**: Zod schemas for runtime type validation shared between frontend and backend
- **Migrations**: Drizzle Kit for database schema migrations

### Development Tools
- **Package Manager**: npm with lockfile for dependency consistency
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Linting**: Configured for React and TypeScript best practices
- **Build Process**: Separate build commands for client (Vite) and server (esbuild)
- **Development**: Hot module replacement and runtime error overlay for enhanced DX

### Deployment Architecture
- **Production Build**: Client assets served as static files from Express server
- **Server Bundling**: Single JavaScript bundle using esbuild for efficient deployment
- **Environment Configuration**: Environment variables for database connection and deployment settings
- **Static Assets**: Optimized client build served from `/dist/public` directory

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives for components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe styling variants for component systems

### Data Management
- **TanStack Query**: Server state management with caching, synchronization, and error handling
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Zod**: Schema validation library for runtime type checking

### Database and Storage
- **Neon Database**: Serverless PostgreSQL provider (configured via `@neondatabase/serverless`)
- **PostgreSQL**: Primary database system with connection pooling support

### Development and Build Tools
- **Vite**: Frontend build tool with React plugin and development server
- **esbuild**: Fast bundler for server-side code compilation
- **TypeScript**: Type system for both client and server code
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Utility Libraries
- **clsx**: Conditional CSS class name utility
- **date-fns**: Date manipulation and formatting library
- **nanoid**: URL-safe unique ID generator