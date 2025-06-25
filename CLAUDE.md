# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run Next.js linting
```

## Architecture

This is a Next.js 15.2.4 portfolio website using the App Router architecture with TypeScript and Tailwind CSS v4.

**Key Technologies:**
- Next.js 15.2.4 with App Router
- React 19.0.0
- TypeScript 5 with strict configuration
- Tailwind CSS v4 (uses `@tailwindcss/postcss` plugin)
- Geist fonts via `next/font/google`

**Project Structure:**
- `/src/app/` - App Router directory with layout.tsx and page.tsx
- `/public/` - Static assets (SVG icons)
- Single-page portfolio with Hero, Story, and Contact sections
- Responsive design with dark mode support via CSS custom properties

**Configuration:**
- `next.config.ts` - Minimal Next.js configuration
- `postcss.config.mjs` - PostCSS setup for Tailwind CSS v4
- `tsconfig.json` - Strict TypeScript with path mapping (`@/*` → `./src/*`)
- No separate Tailwind config file (v4 uses inline configuration)

**Current Limitations:**
- No testing framework configured
- No custom components directory
- No API routes
- No database/CMS integration
- Static content only

**Development Notes:**
- Uses Turbopack for faster development builds
- Font optimization handled by Next.js
- Ready for Vercel deployment
- Dark mode automatically detected via `prefers-color-scheme`