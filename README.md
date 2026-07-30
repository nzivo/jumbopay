# Jumbopay

A marketing and product site for **Jumbopay**, a fictional global payments platform. Built with React, React Router, and Vite.

## Features

- **Full site navigation** — Home, About, Services (with individual service detail pages), Pricing, FAQ, Blog (with individual post pages), Contact, and legal pages (Privacy Policy, Terms of Service, Cookies Settings with working preference toggles).
- **Auth flows** — Login, Signup, and Forgot Password, each with an animated OTP verification step (success/error states with theme-aware glow animations).
- **Full-screen search** — searches across pages, services, and blog posts from a single command-palette-style overlay.
- **5 color themes** — switchable at runtime via the floating theme picker; every component reads colors from CSS variables so it re-themes with no per-component changes.
- **Responsive** — mobile nav, mobile search, and layouts that adapt down to small screens.

## Tech stack

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/)
- [Vite 5](https://vitejs.dev/)
- Plain CSS (no framework), organized per-component with shared design tokens in `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Other scripts

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Shared UI building blocks (Header, Footer, PageHero, OTP flow, search modal, etc.)
  pages/        Route-level pages, one file per route
  data/         Static content (services, blog posts, legal copy, search index)
  hooks/        Small reusable hooks (e.g. countdown timer)
  App.jsx       Route definitions
  main.jsx      App entry point
```

## Notes

This is a template/demo project — there is no real backend. Forms, OTP verification, and account creation are simulated client-side for demonstration purposes.

## Author

John Nzivo — johnnzivo56@gmail.com
