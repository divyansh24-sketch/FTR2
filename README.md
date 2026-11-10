# Bentro - Modern React Application

This is the complete, modular React conversion of **Bentro** ([bentro.webflow.io](https://bentro.webflow.io)), engineered with **React 18**, **Vite**, **Framer Motion**, and the complete Bentro Design System.

## 🚀 Quick Start

### 1. Start the Dev Server
From the project folder:
```bash
npm run dev
```
Or:
```bash
npx vite
```
This starts the local development server at `http://localhost:5173` with instant Hot Module Replacement (HMR).

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### 3. Open in VS Code
```bash
code /Users/divyansh/.gemini/antigravity/scratch/bentro-react
```

---

## 🏗️ Architecture & Component Directory

```
bentro-react/
├── public/
│   └── assets/                     # 100% localized assets (CSS, Fonts, Images, Videos)
├── src/
│   ├── components/                 # Reusable Modular UI Components
│   │   ├── Navbar.jsx              # Responsive navigation, interactive drawer & expanding CTA
│   │   ├── HeroSection.jsx         # Hero title, mountain backdrop & slider cards
│   │   ├── ClientsSection.jsx      # Client partner brand showcase
│   │   ├── WorksSection.jsx        # Featured portfolio cards & case studies
│   │   ├── ServicesSection.jsx     # Agency capabilities & interactive service stack
│   │   ├── AccentSection.jsx       # Manifesto banner & background video atoms
│   │   ├── StatsSection.jsx        # Agency performance metrics & numbers
│   │   ├── TestimonialsSection.jsx # Client review cards & endorsements
│   │   ├── PricingSection.jsx      # Transparent agency pricing tiers & features
│   │   ├── BlogSection.jsx         # Featured articles & editorial insights
│   │   ├── FAQSection.jsx          # Interactive accordion questions & answers
│   │   └── Footer.jsx              # Full footer, newsletter form, socials & copyright
│   ├── pages/                      # Page Views
│   │   ├── Home.jsx                # Complete landing page aggregating all sections
│   │   ├── AboutPage.jsx           # Agency story, vision, team culture & values
│   │   ├── WorksPage.jsx           # Complete portfolio gallery
│   │   ├── ServicesPage.jsx        # Deep dive into agency offerings
│   │   ├── PricingPage.jsx         # Complete pricing models & deliverables
│   │   ├── BlogPage.jsx            # Articles archive & insights
│   │   └── ContactPage.jsx         # Interactive inquiry form & contact details
│   ├── context/
│   │   └── NavigationContext.jsx   # Client-side router & page transition engine
│   ├── App.jsx                     # Root application coordinator
│   └── main.jsx                    # React 18 DOM mount entrypoint
├── index.html                      # HTML entry with font preconnects & tokens
├── vite.config.js                  # Vite bundler configuration
└── package.json                    # Project dependencies & scripts
```

---

## ✨ Key Features & React Innovations

1. **Modular Component-Driven Architecture**: Every section of the original site has been isolated into cleanly encapsulated JSX components.
2. **Zero CDN Dependencies**: All 270+ image assets, 10 background videos (MP4/WebM), and custom Goli font weights reside inside `public/assets/`.
3. **Smooth Client-Side Navigation**: Instant zero-reload switching between Home, About, Works, Services, Pricing, Blog, and Contact.
4. **Interactive States**:
   - Expanding "Get in touch" CTA button with spring hover physics.
   - Dynamic full-screen overlay menu drawer.
   - Responsive video loops with fallback posters.
   - Accordion FAQ toggles.
   - Interactive newsletter and inquiry forms with React state.
