# MetaSense — Landing Page

A minimalist Next.js landing site for **MetaSense** (Ray-Ban Meta glasses + memory cues).  
Includes smooth scroll-reveal animations and a rotating typing headline.

## Tech
- Next.js 15
- Tailwind CSS v4
- TypeScript
- Small animation utils (Reveal + TypeCycle)

## Quick Start
1. Install deps: 
pm install
2. Dev server: 
pm run dev → http://localhost:3000
3. Edit content in src/components/site/*
4. Demo images live in public/demos/

## Notable Files
- src/components/anim/Reveal.tsx — scroll reveal wrapper
- src/components/typing/TypeCycle.tsx — cycling typing effect
- src/app/globals.css — Tailwind v4 import, custom scales & styles
- src/app/page.tsx — page sections composition

## Deploy
Any Next-compatible host (Vercel, Netlify, etc.).

## Notes
- Privacy-first copy and placeholders; replace with real screenshots in /public/demos/.
- This is a hackathon prototype, **not medical advice**.
