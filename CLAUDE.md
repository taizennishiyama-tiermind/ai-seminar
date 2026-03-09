# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains presentation assets for AI seminar events (AI活用セミナー). Each event gets a dynamic, animated web-based "storybook site" that serves as both a presentation tool and a shareable link with all relevant resources.

The primary deliverable is interactive web pages built with React + Vite that visually communicate seminar content with rich animations, illustrations, and dynamic design.

## Repository Structure

```
event/
  YYYYMMDD<イベント名>/
    outline.md        # Seminar content outline (goals, talking points)
    manifest.md       # Build instructions and creative direction
assets/
  png/                # Transparent PNG illustrations (s_, m_, l_ prefixes)
  illustration_guideline.pdf  # Official illustration usage guidelines
docs/
  design-system.md    # Complete design system specification
```

## Tech Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS v4** (uses `@theme` directive for design tokens in `index.css`)
- **Framer Motion** for all animations (page transitions, scroll-triggered, hover effects)
- **Lucide React** for icons
- **react-router-dom v7** for SPA routing

## Key Design Decisions

- **Design system is in [docs/design-system.md](docs/design-system.md)** — follow it strictly for colors, typography, spacing, components, and animation patterns. Blue primary palette with Warm Sand accent.
- **Fonts**: Inter + Noto Sans JP (sans), JetBrains Mono (mono)
- **Illustrations** in `assets/png/` are transparent PNGs. Prefixes: `l_` (large/hero), `m_` (medium/decorative), `s_human` (small/avatars). Use `mix-blend-multiply`, low opacity (`0.12`-`0.18`), and `pointer-events-none` for decorative placement.
- **Japanese content** — all UI text, labels, and content are in Japanese.
- **Storybook-style narrative** — pages should flow like a story with scroll-triggered animations, not static slides.

## Event Workflow

1. Read the event's `outline.md` for content goals
2. Read `manifest.md` for specific build instructions and creative direction
3. Reference `docs/design-system.md` for all visual implementation
4. Build a dynamic web page that makes the seminar content intuitive and visually engaging
5. Each page should include `CopyPageButton` for LLM-friendly Markdown export

## Animation Patterns (Framer Motion)

- Page transitions: `AnimatePresence mode="wait"` with fade + slide
- Sections: `whileInView` with `viewport={{ once: true }}` and stagger delays (`index * 0.06`)
- Cards: `whileHover={{ y: -6, scale: 1.01 }}` with spring physics
- Counters: `useSpring` + `useTransform` for animated numbers
- Always use `once: true` on viewport animations to fire only on first scroll
