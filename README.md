# Portfolio Website

A modern, premium portfolio website showcasing projects, skills, and experience at the intersection of software engineering and applied AI/ML.

## Features

- **Dark, minimal design** with glass morphism effects
- **Command Palette** (⌘K / Ctrl+K) for quick navigation
- **Complexity Toggle** - Switch between Recruiter and Engineer views
- **Responsive design** - Works on all devices
- **Accessibility** - Keyboard navigation, focus rings, reduced motion support
- **Interactive components** - Console widgets, timeline sliders, skill matrices

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations (ready for integration)
- **Lucide React** - Icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── skills/            # Skills page
│   ├── playground/        # Playground page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page components
│   ├── about/            # About page components
│   ├── projects/         # Project components
│   ├── skills/           # Skills components
│   └── ...               # Shared components
└── lib/                  # Utility functions
```

## Key Components

### Command Palette
Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette for quick navigation.

### Complexity Toggle
Toggle between "Recruiter View" and "Engineer View" to see different levels of technical detail. The preference is saved in localStorage.

### Project Case Studies
Each project follows a structured template with:
- Problem/Goal
- Outcome
- Architecture
- Key Technical Decisions
- Deep Dive (API, Data Model, Core Logic, Testing, Deployment)
- Demo
- What's Next

## Customization

### Colors
Edit `tailwind.config.ts` to customize the accent color and theme.

### Content
Update project data in `/app/projects/[project-name]/page.tsx` files.

### Skills
Modify the skills matrix in `/components/skills/SkillsMatrix.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
