# Portfolio Website

A modern, premium portfolio website showcasing projects, skills, and experience at the intersection of software engineering and applied AI/ML.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Deploy](https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/YOUR_REPO/deploy.yml?style=flat-square&label=deploy)

## ✨ Features

- **Dark, minimal design** with glass morphism effects
- **Command Palette** (⌘K / Ctrl+K) for quick navigation
- **Complexity Toggle** - Switch between Recruiter and Engineer views
- **Responsive design** - Works on all devices
- **Accessibility** - Keyboard navigation, focus rings, reduced motion support
- **Interactive components** - Console widgets, timeline sliders, skill matrices

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## 🚀 Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 📁 Project Structure

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
├── lib/                  # Utility functions
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions
```

## 🌐 Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source
   - The workflow will automatically run on push to `main`

3. **Access your site:**
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Or `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`

### Option 2: Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS to point to GitHub Pages:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

### Configuration Notes

**If deploying to a subpath (e.g., `username.github.io/portfolio`):**

Uncomment these lines in `next.config.js`:
```js
basePath: '/portfolio',
assetPrefix: '/portfolio/',
```

Replace `portfolio` with your repository name.

**If deploying to root (e.g., `username.github.io`):**

Leave `basePath` and `assetPrefix` commented out (default).

## 🎨 Key Components

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

## ⚙️ Customization

### Colors
Edit `tailwind.config.ts` to customize the accent color and theme.

### Content
Update project data in `/app/projects/[project-name]/page.tsx` files.

### Skills
Modify the skills matrix in `/components/skills/SkillsMatrix.tsx`.

## 📝 Environment Variables

No environment variables are required for basic deployment.

For optional features (e.g., contact form backend), create a `.env.local` file:
```env
# Example (not required for static deployment)
NEXT_PUBLIC_CONTACT_API=your-api-endpoint
```

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors, ensure:
1. All dependencies are installed: `npm ci`
2. TypeScript errors are resolved: `npm run lint`
3. No server-side features are used (static export only)

### Images Not Loading

For GitHub Pages deployment:
- Images must be in the `public/` folder
- Use relative paths or `next/image` with `unoptimized: true`

### 404 on Page Refresh

This is handled by `trailingSlash: true` in `next.config.js`, which generates `/page/index.html` instead of `/page.html`.

## 📄 License

MIT

---

Built with ❤️ by Saad Ayomide Olowolayemo
