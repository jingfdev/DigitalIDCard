# Digital ID Card - JINGFONG TAN

A modern, responsive digital ID card built with React and Tailwind CSS, featuring professional design and social media integration.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, modern card design with proper visual hierarchy
- **Social Media Integration**: Direct links to GitHub, LinkedIn, Facebook, Email, and Telegram
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Modern Styling**: Tailwind CSS utility classes for consistent design

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **UI Components**: Shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-id-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Ensure you have Node.js 16+ installed
   - No additional environment variables required for basic setup

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5000`
   - The application will be running with hot reload enabled

## Project Structure

```
digital-id-card/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main application pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main application component
│   └── index.html          # HTML entry point
├── server/                 # Express backend (minimal setup)
│   ├── index.ts           # Server entry point
│   └── routes.ts          # API routes
├── shared/                 # Shared types and schemas
├── attached_assets/        # Static assets (images, etc.)
└── package.json           # Project dependencies
```

## Requirements

### System Requirements
- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher (comes with Node.js)
- **Operating System**: Windows 10+, macOS 10.14+, or Linux

### Development Dependencies
- **TypeScript**: For type safety
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Frontend framework
- **Express**: Backend server framework

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## Features Overview

### Design Features
- **Modern Card Layout**: Professional ID card design with clean aesthetics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Typography**: Inter font family for clean readability

### Technical Features
- **React 18+**: Latest React features with TypeScript support
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Component Architecture**: Modular, reusable components
- **Asset Management**: Optimized image handling and imports
- **Modern Build Process**: Vite for fast development and optimized builds

### Social Integration
- **GitHub**: Direct link to development portfolio
- **LinkedIn**: Professional networking profile
- **Email**: Direct contact capability
- **Facebook**: Social media presence
- **Telegram**: Instant messaging contact

## Customization

### Profile Information
Edit `client/src/pages/home.tsx` to update:
- Name and title
- About me section
- Social media links
- Profile image

### Styling
- Modify `client/src/index.css` for global styles
- Update Tailwind classes in components for specific styling
- Color scheme can be adjusted in the CSS custom properties

### Adding New Features
- Add new pages in `client/src/pages/`
- Register routes in `client/src/App.tsx`
- Create reusable components in `client/src/components/`

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+

## License

This project is for personal use and showcase purposes.

## Contact

For questions or support, reach out through any of the social media links displayed on the digital ID card.