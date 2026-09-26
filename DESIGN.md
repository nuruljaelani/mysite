---
version: 1.0.0
name: Jay Fullstack Bento
description: Tactile dark-mode bento-grid design system for Jay's Fullstack Software Engineer portfolio with high-craft typography, 3D WebGL globe, chromatic telemetry gauge, and fullstack architecture matrix.
colors:
  bg: "#ffffff"
  bg-dots: "rgba(0, 0, 0, 0.15)"
  card-bg: "#141519"
  card-border: "rgba(255, 255, 255, 0.08)"
  card-border-hover: "rgba(255, 255, 255, 0.18)"
  text-primary: "#ffffff"
  text-secondary: "#9da1b0"
  text-muted: "#5b6070"
  pill-active-bg: "#ffffff"
  pill-active-text: "#000000"
  pill-inactive-text: "#8f94a6"
  accent-green: "#1db954"
  accent-teal: "#00c7be"
  accent-blue: "#007aff"
typography:
  headline:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  subheading:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08em
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 6px
  md: 12px
  lg: 18px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.xl}"
  pill:
    rounded: "{rounded.full}"
    padding: 8px
---

# Jay — Fullstack Software Engineer Portfolio Design System

## Overview
Solo Fullstack Software Engineer & Distributed Systems portfolio for hiring engineering leads, founders, and tech managers, featuring an ultra-tactile dark bento-grid on a crisp white dotted canvas, interactive engineering time gauges, tech stack architecture matrix, audio devlog widget, and a 3D WebGL deployment globe.
Dials: `DESIGN_VARIANCE: 8`, `MOTION_INTENSITY: 7`, `VISUAL_DENSITY: 5`.

## Colors
- **Background**: Crisp white (`#ffffff`) with subtle radial dot matrix (`rgba(0, 0, 0, 0.15)` 1.25px / 24px grid).
- **Cards**: Graphite carbon (`#141519`) with delicate frosted border (`rgba(255, 255, 255, 0.08)`) and elevated drop shadow.
- **Pills**: Frosted dark glass pills with high-contrast active white pill badges.
- **Accents**: Rainbow chromatic spectrum gradient on engineering hours arc gauge; vibrant floral petals; Spotify vibrant green (`#1db954`); teal badge (`#00c7be`).

## Typography
- Primary: **Inter** (weights 400, 500, 600, 700, 800) for crisp precision and high legibility.
- Display numerals: **Outfit** / **Inter** for large metrics like "25,467".
- Monospace: Standard tabular monospaced numbers for velocity and audio timers.

## Layout
- Top floating navigation bar: `sticky top-0 z-40` with frosted glass backdrop blur (`bg-white/80 backdrop-blur-md`), keeping pill selectors (Mode, Tabs, Velocity, Sound, Avatar) always accessible during scroll.
- Bento Grid: 12-column grid layout spanning up to 1600px width with generous card dimensions:
  - Row 1: Profile Card (3 cols / 25%), Engineering Time Spent (3 cols / 25%), Tech Stack & Architecture (6 cols / 50%).
  - Row 2: Hero Status Card (4 cols / 33.3%), The Pragmatic Engineer Audio (4 cols / 33.3%), Experience Globe (4 cols / 33.3%).
- Tactile internal padding: 28px-32px per card with distinct internal hierarchies.

## Elevation & Depth
- Cards lift with smooth cubic-bezier transitions on hover (`translateY(-2px)`).
- Subtle ambient drop shadows (`0 12px 36px -8px rgba(0,0,0,0.6)`).
- 3D perspective mode available via the `3D` pill selector.

## Shapes
- Large rounded card corners (`rounded-3xl`, 24px).
- Capsule/pill buttons and badges (`rounded-full`).

## Components
1. **Pill Navbar**: Mode selector, navigation tabs, velocity counter, sound toggle, avatar.
2. **Profile Card**: Portrait, fullstack statement from Cirebon, Indonesia.
3. **Engineering Time Spent Card**: Animated 25,467 hours counter, interactive chromatic arc slider scrubbing career milestones (2018-2026: Cirebon, Jakarta, Remote).
4. **Tech Stack & Architecture Card**: Backend & Systems (Go, Node, Laravel, Kafka, RabbitMQ, DBs), Frontend & DevOps (React, Next.js, Docker, Observability), Tooling column, botanical garden, and "DEV" badge.
5. **Hero Status Card**: "0 -> 1 Fullstack Software Engineer - Systems", night skyline graphic with illuminated city and particles.
6. **System Telemetry & Pipeline Simulator Card**: Real-time distributed architecture monitor showcasing simulated Kafka ingestion sparklines, gRPC p99 latency, worker pool status, interactive traffic spike stress tester, and direct architecture case study inspector.
7. **Experience Globe Card**: Interactive 3D WebGL globe with location pins across Cirebon, Jakarta, Bandung, Singapore, Tokyo and CV inspector modal.

## Do's and Don'ts
- **DO**: Maintain deep dark graphite contrast without muddy grey surfaces.
- **DO**: Ensure all interactive controls have tactile feedback (sound clicks, cursor indicators, hover highlights).
- **DON'T**: Use generic purple AI mesh gradients.
- **DON'T**: Break the balanced proportions of the bento grid cards.
