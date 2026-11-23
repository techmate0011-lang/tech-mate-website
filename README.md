# Tech Mate Website

React + Vite + Tailwind CSS + Framer Motion + React Router.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content (no code changes needed)
- `src/data/siteConfig.js` – company name, tagline, description
- `src/data/team.js` – team members
- `src/data/projects.js` – projects

## Structure
```
src/
  components/  Navbar, Footer, PageTransition
  data/        siteConfig, team, projects
  pages/       Home, About, Services, Projects, Contact
  App.jsx      routing + animated transitions
  main.jsx     entry
  index.css    Tailwind + global styles
```
