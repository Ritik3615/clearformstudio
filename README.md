<<<<<<< HEAD
# clearformstudio
This is official website of clearform studio .
=======
# ClearForm Studio

A modern, responsive web application built with React and Vite, featuring beautiful UI components, smooth animations, and a professional design system using TailwindCSS.

## 🚀 Features

- **Multi-page Application** - Built with React Router for seamless navigation
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Modern UI Components** - Using Radix UI for accessible, unstyled components
- **Beautiful Animations** - Smooth transitions and interactive elements
- **Form Management** - Contact forms with toast notifications
- **Icon Library** - Lucide React icons throughout the app
- **Hot Module Reloading (HMR)** - Fast refresh during development

## 📋 Project Structure

```
src/
├── components/              # Reusable React components
│   ├── cards/              # Card components (Service, Pricing, Audience, Contact, ProcessStep)
│   ├── forms/              # Form components (ContactForm)
│   ├── layout/             # Layout components (PageHeader)
│   ├── ui/                 # UI primitives (Button, Card, Input, Label, Select, Separator, Textarea)
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── pages/                  # Page components
│   ├── HomePage.jsx        # Landing page with hero carousel
│   ├── ServicesPage.jsx    # Services showcase
│   ├── AudiencePage.jsx    # Audience/Samples page
│   ├── ProcessPage.jsx     # Process/Workflow page
│   └── ContactPage.jsx     # Contact form page
├── data/                   # Data and constants
│   ├── services.js         # Services data
│   ├── audiences.js        # Audience data
│   └── process.js          # Process steps data
├── assets/                 # Images and media files
├── lib/                    # Utility functions
│   └── utils.js
├── App.jsx                 # Main app component with routing
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Styling:** TailwindCSS 4 + Class Variance Authority
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Utilities:** CLSX, Tailwind Merge
- **Linting:** ESLint
- **Development Server:** Vite with HMR

## 📖 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero carousel and featured services |
| `/services` | Services | Detailed service offerings |
| `/samples` | Audience | Portfolio/samples showcase |
| `/process` | Process | Workflow and process steps |
| `/contact` | Contact | Contact form and inquiries |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd clearformstudio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

### Lint the Code

```bash
npm run lint
```

## 🎨 Design System

### Color Palette
- Primary: Blue (blue-500)
- Secondary: Purple (purple-500)
- Accent: Pink (pink-500)
- Text: Slate-900
- Background: White

### Components
All UI components are located in `src/components/ui/` and built with Radix UI for accessibility:
- Button
- Card
- Input
- Label
- Select
- Separator
- Textarea

## 📝 Component Usage

### Using the Button Component
```jsx
import { Button } from '@/components/ui/button'

<Button variant="default">Click me</Button>
```

### Using the Card Component
```jsx
import { Card, CardContent } from '@/components/ui/card'

<Card>
  <CardContent>Your content here</CardContent>
</Card>
```

### Using Forms
```jsx
import ContactForm from '@/components/forms/ContactForm'

<ContactForm />
```

## 📱 Responsive Breakpoints

The application uses TailwindCSS responsive prefixes:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration
- `tailwind.config.js` - TailwindCSS configuration (if exists)
- `package.json` - Project dependencies and scripts

## 🌟 Key Features Implementation

### Hero Carousel
The HomePage features an auto-rotating carousel with navigation controls:
- Auto-rotation every 5 seconds
- Manual navigation with arrow buttons
- Smooth transitions

### Responsive Navigation
Mobile-first navigation with hamburger menu on smaller screens and full menu on desktop

### Form Handling
Contact forms with validation and toast notifications using Sonner

## 📚 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📦 Dependencies

See `package.json` for the complete list of dependencies and their versions.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test your changes locally
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## ✨ Notes for Developers

- Keep components modular and reusable
- Use TailwindCSS utilities instead of custom CSS when possible
- Follow the existing component structure and naming conventions
- Ensure all new components are accessible (WCAG compliant)
- Test responsive design on multiple screen sizes
>>>>>>> 06d9e72 (Initial commit: ClearForm Studio project)
