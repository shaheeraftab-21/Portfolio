# Shaheer Aftab — Portfolio

Personal portfolio site for [Shaheer Aftab](https://github.com/shaheeraftab-21) — software engineer focused on web applications and machine learning systems. Built with Next.js and TypeScript.

**Live site:** https://your-portfolio.vercel.app

## Features

- **Particle-network hero** — Canvas animation that reads its colors from the theme, pauses cleanly on resize, and renders a static frame for `prefers-reduced-motion`
- **Light and dark themes** — follows the visitor's system preference through CSS variables, with Bricolage Grotesque and IBM Plex Sans loaded via `next/font`
- **About section** with a portrait, availability badge and a stack pill list
- **Experience timeline** — internships at DHA Lahore and InnoVista Ravi, each with its company logo, skills and a viewable internship certificate
- **Grouped skills** across languages, web and backend, AI and ML, and tools
- **Selected work** showing three featured projects, plus an **All work** page (`/work`) listing every project with stack tags, GitHub and live demo links
- **Certifications** from Udemy and HP LIFE with verification links, a chat-style **FAQ**, and a flip business card **Contact** section
- Downloadable résumé, sticky navigation with a "Hire me" button, keyboard-accessible and reduced-motion aware

## Featured Projects

- **[FinanceIQ](https://github.com/shaheeraftab-21/Personal-Finance-Manager)** — AI financial intelligence platform with fraud detection, subscription tracking, budget planning and a conversational assistant (Python, Streamlit, scikit-learn, Claude API)
- **[Lost & Found Pakistan](https://github.com/shaheeraftab-21/Lost-and-Found-Pakistan)** — national item recovery portal with an owner-approved claim flow (React, Flask, Tailwind CSS, PostgreSQL, Docker)
- **DHA Document Management Portal** — role-based portal to digitize land records, built during the DHA Lahore internship (PHP 8, MySQL, Bootstrap 5, Chart.js)
- **[Smart Navigation System](https://github.com/shaheeraftab-21/Smart-Navigation-System)** — fastest-route finder across ten Lahore locations using Dijkstra's algorithm (C++)

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- Hand-written CSS (`src/app/globals.css`, `src/app/extras.css` and per-component stylesheets) — no UI or animation libraries
- Fonts via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx         # Header, footer, fonts, metadata
    page.tsx           # Homepage
    work/page.tsx      # All work page
    globals.css        # Theme variables and base styles
    extras.css         # Section styles
  components/
    About.tsx          # About section (heading, photo, pills)
    Experience.tsx     # Internship timeline
    Skills.tsx         # Grouped skills
    ProjectCard.tsx    # Project card used on / and /work
    Certificates.tsx   # Certification cards
    Faq.tsx            # Chat-style FAQ
    Contact.tsx        # Flip business card and contact links
    Network.tsx        # Canvas particle-network hero
  data/
    site.ts            # Name, links, skills, projects, certificates, experience
public/
  images/              # Profile photo and project screenshots
  certificates/        # Internship certificates
  logos/               # Company logos
  resume.pdf           # Downloadable résumé
```

Most content lives in `src/data/site.ts`, so updating the portfolio rarely means touching component code. To add a project, add an entry to the `projects` array (and a screenshot in `public/images/`). The first three projects in the list appear on the homepage; the rest show on `/work`. The About text and FAQ answers are edited at the top of `About.tsx` and `Faq.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com/) with zero configuration (no environment variables needed).

## License

Personal project — all rights reserved.
