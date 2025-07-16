# Digital ID Card Application

## Overview

This is a modern, responsive digital ID card application built with React and TypeScript. The application displays a professional personal profile card with social media integration and contact information. It features a clean, modern design with proper visual hierarchy and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 16, 2025)

- **Digital ID Card Implementation**: Created a complete digital ID card for JINGFONG TAN
- **Profile Integration**: Added personal profile photo and professional information
- **Social Media Links**: Integrated GitHub, LinkedIn, Facebook, Email, and Telegram with proper icons
- **Responsive Design**: Implemented modern card layout with Tailwind CSS and hover effects
- **Asset Management**: Fixed image handling and Vite configuration issues
- **Documentation**: Created comprehensive README.md with setup instructions and project details

## System Architecture

The application follows a modern frontend-centric architecture with a lightweight backend setup:

### Frontend Architecture
- **Framework**: React 18+ with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Component Library**: Shadcn/ui for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Layer**: RESTful API structure with Express routes
- **Session Management**: Express sessions with PostgreSQL store

## Key Components

### Frontend Structure
- **Client Directory**: Contains all React application code
- **Components**: Reusable UI components using Shadcn/ui
- **Pages**: Main application pages (Home, NotFound)
- **Hooks**: Custom React hooks for mobile detection and toast notifications
- **Styling**: Global CSS with Tailwind utilities and custom properties

### Backend Structure
- **Server Directory**: Express.js application with middleware setup
- **Routes**: API route handlers (currently minimal setup)
- **Storage**: Database abstraction layer with memory storage fallback
- **Schema**: Drizzle ORM schema definitions for PostgreSQL

### UI Components
- Comprehensive component library including:
  - Cards, Buttons, Forms, Navigation
  - Dialogs, Tooltips, Accordions
  - Data display components (Tables, Progress bars)
  - Input components (Forms, Selects, Checkboxes)

## Data Flow

### Current Implementation
- **Static Content**: Profile information is hardcoded in the Home component
- **Asset Management**: Profile images stored in `attached_assets` directory
- **Client-Side Routing**: Wouter handles navigation between pages
- **API Integration**: TanStack Query setup for future API consumption

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Extensible**: Schema can be extended for profile information storage

## External Dependencies

### Core Dependencies
- **UI Framework**: React with comprehensive Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: Drizzle ORM with Neon Database integration
- **Development**: Vite with React plugin and error handling
- **Icons**: Lucide React icon library

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Backend bundling for production
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR support
- **Database**: Drizzle Kit for schema management and migrations
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production

### Current State
The application is primarily a static frontend showcase. The backend infrastructure is prepared for future expansion with user authentication, profile management, and dynamic content serving. The database schema and API structure are minimal but extensible for adding features like user profiles, contact management, or analytics.

The design prioritizes responsive layouts, accessibility, and modern UI patterns while maintaining a clean, professional appearance suitable for a digital business card or portfolio site.