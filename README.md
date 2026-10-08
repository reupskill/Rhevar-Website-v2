# Rhevar Website

Marketing homepage for Rhevar — infrastructure for the creator business. Built with Next.js (App Router), TypeScript, and styled-components, implementing the `Rhevar Home.dc.html` design from the Claude Design handoff bundle.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **styled-components** for hover/active states, responsive breakpoints, and global design tokens (`app/GlobalStyle.tsx`)
- **next/font/local** for the Satoshi typeface (`app/fonts/`)
- Section components live in `components/`; the interactive page state (scroll-reveal, the rotating tagline, the connected-business graph toggle, the creator-type selector, the global map tab, and the join form) lives in `lib/useHomeState.ts`.

## Structure

- `app/page.tsx` — assembles all homepage sections
- `components/` — one component per page section (`Hero`, `Problem`, `Cost`, `RhevarSection`, `Possible`, `Creators`, `Global`, `Product`, `Future`, `Join`, `Footer`) plus shared primitives (`primitives.tsx`, `Reveal.tsx`)
- `lib/` — `useHomeState.ts` (page state + content data), `sx.ts` (inline-style string helper), `registry.tsx` (styled-components SSR registry)
- `public/assets/` — brand marks (full-color and white Rhevar logo)
