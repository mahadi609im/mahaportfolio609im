# Mahadi Portfolio - React Application

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS,
showcasing Mahadi Hasan Milon's work as a MERN Stack Developer.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: CSS animations and transitions for better UX
- **Component-Based**: Reusable and maintainable component structure
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui Components**: Modern UI components for consistent design

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Material Symbols)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mahadi-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🔧 Recent Fixes & Updates

### ✅ **Issues Fixed:**

1. **Vite Configuration Error**

   - **Problem**: `__dirname` not available in ES modules
   - **Fix**: Updated to use `fileURLToPath` and `URL` for proper path
     resolution
   - **Why**: Vite uses ES modules by default, requiring modern Node.js path
     handling

2. **Dynamic Tailwind Classes Issue**

   - **Problem**: Dynamic class names like `bg-${color}` weren't working due to
     Tailwind's purging
   - **Fix**: Replaced with static class mappings and added safelist in Tailwind
     config
   - **Why**: Tailwind CSS purges unused classes at build time, dynamic classes
     need to be safelisted

3. **Missing tailwindcss-animate Dependency**

   - **Problem**: Build error due to missing plugin
   - **Fix**: Removed dependency and implemented animations directly in Tailwind
     config
   - **Why**: Simplified dependencies and used built-in Tailwind animation
     capabilities

4. **Theme Initialization**

   - **Problem**: Theme not properly initialized on first load
   - **Fix**: Added `class="dark"` to HTML element for proper dark mode
     initialization
   - **Why**: Ensures consistent theme state across page loads

5. **Component Optimization**
   - **Problem**: Some components had potential performance issues
   - **Fix**: Optimized component structure and removed unnecessary re-renders
   - **Why**: Better performance and cleaner code structure

### 🎨 **Improvements Made:**

1. **Better Error Handling**: Added proper error boundaries and fallbacks
2. **Performance Optimization**: Optimized component re-renders and state
   management
3. **Code Structure**: Improved component organization and readability
4. **Type Safety**: Better prop handling and component interfaces
5. **Accessibility**: Enhanced keyboard navigation and screen reader support

## 🎯 Key Features Implemented

1. **Header Navigation**: Responsive navigation with mobile menu
2. **Hero Section**: Eye-catching landing area with animations
3. **About Section**: Personal information and tech stack
4. **Technologies**: Animated skill showcase with progress bars
5. **Projects**: Portfolio project cards with tech stack icons
6. **Contact**: Contact form and social media links
7. **Footer**: Simple footer with social links
8. **Scroll to Top**: Floating scroll-to-top button

## 🚀 Deployment

The project can be deployed to various platforms:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📞 Contact

- **Email**: maha609im@gmail.com
- **LinkedIn**: [mahadi609im](https://www.linkedin.com/in/mahadi609im/)
- **GitHub**: [mahadi609im](https://github.com/mahadi609im)

---

Built with ❤️ by Mahadi Hasan Milon
