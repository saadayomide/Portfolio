# Portfolio Website - User Flow & Content Overview

## 📍 Site Map

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              PORTFOLIO WEBSITE                                   │
│                         Saad Ayomide Olowolayemo                                │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         │                            │                            │
         ▼                            ▼                            ▼
   ┌──────────┐                 ┌──────────┐                 ┌──────────┐
   │   HOME   │                 │  ABOUT   │                 │  SKILLS  │
   │    /     │                 │  /about  │                 │  /skills │
   └────┬─────┘                 └────┬─────┘                 └────┬─────┘
        │                            │                            │
        │                            │                            │
        ▼                            ▼                            ▼
   ┌──────────┐                 ┌──────────┐                 ┌──────────┐
   │ PROJECTS │ ◄───────────────│ TIMELINE │                 │  MATRIX  │
   │/projects │                 │  CARDS   │                 │  MODAL   │
   └────┬─────┘                 └──────────┘                 └──────────┘
        │
        ├──────────────────────────────────────────────────────────┐
        │                                                          │
        ▼                                                          ▼
   ┌────────────────┐                                        ┌──────────┐
   │  CASE STUDIES  │                                        │ CONTACT  │
   │ /projects/[id] │                                        │ /contact │
   └────────────────┘                                        └──────────┘
```

---

## 🔄 User Flow Diagram

```
                                    ┌─────────────┐
                                    │   VISITOR   │
                                    │   ARRIVES   │
                                    └──────┬──────┘
                                           │
                                           ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                 🏠 HOME PAGE                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ HERO SECTION                                                                │ │
│  │  • Profile photo + Name: Saad Ayomide Olowolayemo                          │ │
│  │  • Title: Software & AI/ML Engineer                                        │ │
│  │  • Tagline: "Building production-ready systems at the intersection         │ │
│  │             of software and AI/ML"                                         │ │
│  │  • Badges: Madrid, Spain | US work authorization | IE internship           │ │
│  │  • CTAs: [View Projects] [Resume] [Contact]                               │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ CONSOLE WIDGET (Interactive)                                               │ │
│  │  Tabs: [Systems] [AI/ML] [DevOps]                                         │ │
│  │  • Hover nodes → See project links                                        │ │
│  │  • Click → Navigate to project case study                                  │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FEATURED PROJECTS (3 cards)                                                │ │
│  │  1. ShopSmart → Deployed                                                   │ │
│  │  2. Government Spending Tracker → 93% coverage                            │ │
│  │  3. Student Dropout Prediction → Fairness-aware                           │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ PILLARS (3 expandable cards)                                               │ │
│  │  1. Production-Ready Systems                                               │ │
│  │  2. Responsible ML                                                         │ │
│  │  3. Ship with Confidence                                                   │ │
│  │  [Click "Show proof" → See evidence]                                       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ VIEW TOGGLE DEMO                                                           │ │
│  │  [Recruiter View] vs [Engineer View]                                      │ │
│  │  • Recruiter: "Built a price comparison platform"                         │ │
│  │  • Engineer: "FastAPI + SQLAlchemy with async scrapers"                   │ │
│  │  [See it in action →]                                                      │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────┘
                                           │
              ┌────────────────────────────┼────────────────────────────┐
              │                            │                            │
              ▼                            ▼                            ▼
┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│      📖 ABOUT        │    │      💻 SKILLS       │    │      📁 PROJECTS     │
└──────────────────────┘    └──────────────────────┘    └──────────────────────┘
```

---

## 📄 Page-by-Page Content

### 🏠 HOME (`/`)

#### Hero Section
| Element | Content |
|---------|---------|
| **Name** | Saad Ayomide Olowolayemo |
| **Title** | Software & AI/ML Engineer |
| **Headline** | Building production-ready systems at the intersection of software and AI/ML |
| **Description** | CS & AI student crafting practical systems with modern engineering practices. Passionate about clean architecture, responsible ML, and shipping impactful products. |
| **Badges** | `Madrid, Spain` `US work authorization` `IE internship agreement` |
| **Status** | Available for internships |

#### Console Widget (Interactive Diagram)
```
┌─────────────────────────────────────────────────────────┐
│  what_i_build.tsx                                       │
├─────────────────────────────────────────────────────────┤
│  [Systems]    [AI/ML]    [DevOps]                      │
│                                                         │
│  SYSTEMS TAB:          AI/ML TAB:       DEVOPS TAB:    │
│       ┌─────┐         ┌────┐  ┌─────┐      ┌─────┐    │
│       │ API │         │Data├──►Model│      │CI/CD│    │
│       └──┬──┘         └────┘  └──┬──┘      └──┬──┘    │
│    ┌─────┴─────┐                 │            │        │
│ ┌──┴──┐  ┌──┴──┐           ┌────▼────┐  ┌────┴────┐   │
│ │Serv.│  │Logic│           │Evaluate │  │Deploy│Mon│   │
│ └──┬──┘  └──┬──┘           └─────────┘  └────────┘    │
│    └─────┬─────┘                                       │
│       ┌──┴──┐                                          │
│       │ DB  │                                          │
│       └─────┘                                          │
│                                                         │
│           Hover nodes to see project links             │
└─────────────────────────────────────────────────────────┘
```

#### Featured Projects
| Project | Impact | Tech Stack | Metric |
|---------|--------|------------|--------|
| **ShopSmart** | Full-stack price comparison system with real-time scraping | FastAPI, Azure, PostgreSQL | Deployed |
| **Government Spending Tracker** | Production-grade budget management with testing & observability | FastAPI, React, CI/CD | 93% coverage |
| **Student Dropout Prediction** | End-to-end ML pipeline with ensemble models | Python, LightGBM, SHAP | Fairness-aware |

#### Core Pillars
| Pillar | Description | Proof Points |
|--------|-------------|--------------|
| **Production-Ready Systems** | Full-stack development with clean architecture, comprehensive testing, and cloud deployment | ShopSmart: FastAPI + Azure • Gov Tracker: 93% coverage • Lost & Found: MVC + JUnit |
| **Responsible ML** | Machine learning with interpretability, fairness analysis, and ethical considerations | Dropout Prediction: SHAP + fairness audits • Predictive Social: Explainability-first RAG |
| **Ship with Confidence** | Agile workflows, automated testing, and continuous delivery | GitHub Actions • Integration tests • Prometheus/Grafana monitoring |

---

### 📖 ABOUT (`/about`)

#### Story Section
> "Building clear systems people can trust."

**Biography:**
- Computer Science & AI student at IE University
- Passionate about building practical systems that solve real problems
- Work sits at intersection of software engineering and applied ML
- Eager to contribute in fast-paced, collaborative environments

**Core Values:**
| Value | Description |
|-------|-------------|
| **Explainability-first** | Every ML model includes interpretability analysis |
| **Production mindset** | Testing, monitoring, deployment from day one |
| **Systems thinking** | Understanding how components interact, scale, and fail |
| **Bias-aware ML** | Fairness audits, subgroup analysis, ethical considerations |

#### Snapshot
| Field | Value |
|-------|-------|
| **Location** | Madrid, Spain |
| **Focus** | Software Engineering + AI/ML |
| **Looking for** | Computer Science Internship |
| **Roles** | AI/ML Engineering • Backend • Full-Stack |
| **Status** | Eligible for IE internship agreement |

#### Timeline
```
2023 ────────── 2024 ────────── 2025 ────────────────────►

  │               │               │
  ▼               ▼               ▼
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│Predictive │ │ IE Student│ │ ShopSmart │ │Government │ │ Dropout   │
│  Social   │ │Government │ │           │ │  Tracker  │ │Prediction │
│ Media     │ │           │ │           │ │           │ │           │
│           │ │ Research  │ │ Co-Founder│ │ Founder   │ │ Founder   │
│ Co-Founder│ │ Analyst   │ │           │ │           │ │           │
└───────────┘ └───────────┘ └───────────┘ └───────────┘ └───────────┘
```

---

### 💻 SKILLS (`/skills`)

#### Skills Matrix

| Category | Skills |
|----------|--------|
| **Languages** | Python● • Java● • JavaScript/TS● • C • Bash● |
| **Backend/API** | FastAPI● • Django • RESTful APIs● • SQLAlchemy● |
| **Data/ML** | scikit-learn● • PyTorch • Pandas● • SHAP● • LightGBM● |
| **Cloud/DevOps** | Azure● • Docker● • GitHub Actions● • CI/CD● |
| **Testing** | pytest● • JUnit● • Integration Testing● |

*● = Deployed in production*

#### Skill Evidence (Click to expand)
| Skill | Projects | Example Usage |
|-------|----------|---------------|
| **Python** | ShopSmart, Gov Tracker, Dropout Pred. | FastAPI backends, ML pipelines, data processing |
| **FastAPI** | ShopSmart, Gov Tracker | RESTful endpoints, async operations, Pydantic |
| **SHAP** | Dropout Prediction | Model interpretability, global/local explanations |
| **Azure** | ShopSmart, Gov Tracker | App Service, PostgreSQL hosting |
| **Docker** | Gov Tracker | Containerization for consistent environments |
| **Java** | Lost & Found | JavaFX desktop app with MVC architecture |

---

### 📁 PROJECTS (`/projects`)

#### Filter Options
`All` | `Backend` | `AI/ML` | `Cloud/DevOps` | `Full-stack` | `Research`

#### Project Cards

| Project | Description | Stack | Category Tags | Date |
|---------|-------------|-------|---------------|------|
| **ShopSmart** | Full-stack price comparison system with real-time scraping and intelligent matching engine | FastAPI, Azure, PostgreSQL, Web Scraping | Backend, Scraping/Data, Cloud/DevOps | Jan 2026 |
| **Government Spending Tracker** | Production-grade budget management with comprehensive testing and observability | FastAPI, React, PostgreSQL, Prometheus | Backend, Full-stack, Cloud/DevOps | Jan 2026 |
| **Student Dropout Prediction** | End-to-end ML pipeline with ensemble models and interpretable fairness analysis | Python, LightGBM, SHAP, Fairness | AI/ML, Research | Jan 2026 |
| **Lost & Found** | Desktop application with clean MVC architecture and comprehensive testing | Java, JavaFX, SQLite, JUnit | Full-stack | Jan 2026 |
| **Predictive Social Media** | End-to-end content intelligence system with explainability-first RAG architecture | Python, RAG, FAISS, Embeddings | AI/ML, Backend, Research | 2023 - Present |

---

### 📬 CONTACT (`/contact`)

#### Header
> "Let's build something together."

**Subtitle:** I'm actively looking for internship opportunities in software engineering, AI/ML, or backend development. Let's connect!

#### Quick Links
| Platform | Description |
|----------|-------------|
| **Email** | solowolayemo.ieu2023@student.ie.edu — Best for formal inquiries |
| **LinkedIn** | linkedin.com/in/saad-ayomide-olowolayemo — Let's connect professionally |
| **GitHub** | github.com/saadayomide — See my code |

#### Contact Form
| Field | Type |
|-------|------|
| Name | Text input |
| Email | Email input |
| Subject | Dropdown: Internship opportunity, Project collaboration, Technical discussion, Feedback on portfolio, Other |
| Message | Textarea |

---

## 🎛 Global Features

### Header (Persistent)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  SAO          Home  About  Skills  Projects  Contact        [⌘K]       │
│  (logo)                                                   Command      │
│                                                           Palette      │
└─────────────────────────────────────────────────────────────────────────┘
```
- **Logo:** SAO (S=accent, A=white, O=accent)
- **Compact mode on scroll:** Reduces height with glass blur effect

### Footer (Persistent)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  © 2026 Saad Ayomide Olowolayemo          GitHub  LinkedIn  Email      │
└─────────────────────────────────────────────────────────────────────────┘
```

### View Toggle (Recruiter/Engineer)
```
┌─────────────────────────────────────────────────────────────────────────┐
│                    RECRUITER VIEW          ENGINEER VIEW               │
│  ┌─────────────────────────┐    ┌─────────────────────────┐           │
│  │ ✓ Built a price         │    │ ✓ FastAPI + SQLAlchemy  │           │
│  │   comparison platform   │    │   with async scrapers   │           │
│  │                         │    │                         │           │
│  │ ✓ Achieved 93% test     │    │ ✓ pytest fixtures,      │           │
│  │   coverage              │    │   integration tests     │           │
│  │                         │    │                         │           │
│  │ ✓ Deployed to Azure     │    │ ✓ Docker → Azure App    │           │
│  │   cloud                 │    │   Service + PostgreSQL  │           │
│  └─────────────────────────┘    └─────────────────────────┘           │
│                                                                         │
│  Persists across all pages via localStorage                            │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| **Accent** | `#00ff88` | Primary actions, highlights |
| **Surface-0** | `#050508` | Base background |
| **Surface-1** | `#0a0a0f` | Cards, elevated surfaces |
| **Glass** | `rgba(255,255,255,0.03)` | Glassmorphism cards |

### Typography
| Role | Font |
|------|------|
| **Headings** | Outfit |
| **Body** | Inter |
| **Code** | JetBrains Mono |

### Animations
- **Page transitions:** Fade + slide (framer-motion)
- **Hover effects:** Scale, glow, border highlight
- **Scroll:** Header compacts with blur

---

## 🧭 User Journey Scenarios

### Scenario 1: Recruiter Quick Scan
```
HOME → Read tagline → See Featured Projects → Check Skills Matrix → Download Resume → Contact
     (30 seconds)      (1 minute)              (30 seconds)          (click)         (form)
```

### Scenario 2: Technical Deep Dive
```
HOME → Toggle to Engineer View → Projects → ShopSmart Case Study → Skills (click Python)
                                            → Government Tracker   → See linked projects
                                            → Dropout Prediction
```

### Scenario 3: Background Check
```
HOME → About (read story) → Timeline (scroll through) → Skills (verify competencies) → GitHub
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| **Mobile** (<640px) | Single column, hamburger menu, stacked cards |
| **Tablet** (640-1024px) | 2-column grids, condensed navigation |
| **Desktop** (>1024px) | Full layout, side-by-side hero, 3-column grids |

---

*Generated from Portfolio codebase — Last updated: January 2026*
