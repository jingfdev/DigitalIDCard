# Digital ID Card

A modern, full-stack digital ID card application built with React, TypeScript, and Express. This application serves as a professional digital identity card with a clean, responsive design.

## 🚀 Features

- **Full-Stack Application**: Built with React frontend and Express backend
- **Modern UI**: Built with Tailwind CSS and Shadcn/ui components
- **Type Safety**: Full TypeScript support throughout the application
- **Responsive Design**: Works on all device sizes
- **Developer Experience**: Vite for fast development and optimized builds
- **Database Ready**: Configured with Drizzle ORM for database operations

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (via Neon)
- **ORM**: Drizzle ORM
- **Authentication**: Passport.js
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Query
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- PostgreSQL database (or use Neon for a free cloud database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jingfdev/DigitalIDCard.git
   cd DigitalIDCard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env` and update with your configuration
   - Set up your database connection string in the `.env` file

4. **Database Setup**
   - Ensure your database is running
   - Run migrations:
     ```bash
     npm run db:push
     ```

5. **Start the development server**
   ```bash
   # For Windows
   set PORT=3000 && npx tsx server/index.ts
   
   # For macOS/Linux
   PORT=3000 npx tsx server/index.ts
   ```

6. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`
   - The application will be running with hot reload enabled

## 📁 Project Structure

```
DigitalIDCard/
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   └── src/                # Source code
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page components
│       ├── lib/            # Utility functions
│       └── App.tsx         # Main application component
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database configuration
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Shared validation schemas
├── .env.example           # Environment variables example
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=your_database_connection_string
NODE_ENV=development
PORT=3000
SESSION_SECRET=your_session_secret
```

## 🧪 Testing

To run tests:

```bash
npm test
```

## 🌐 Deployment

### Vercel (Recommended)

1. Import your GitHub repository to Vercel
2. Add your environment variables
3. Deploy!

### Self-Hosted

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   NODE_ENV=production node dist/index.js
   ```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database access