# Airbnb Clone Project Guidelines & AI Agent Rules

## Project Scope & Objective
This repository contains a desktop clone of the reference Airbnb listing page ([Reference Site](https://airbnb-clone-umber-two.vercel.app)).

## Core Development Standards

### Visual Parity & Design System
- **Typography:** Use Inter / Airbnb Cereal styled font stack with clean line-heights and crisp letter spacing.
- **Colors:**
  - Primary Brand Red: `#FF385C` (Hover: `#E00B41`)
  - Dark Text: `#222222`
  - Secondary Muted Text: `#717171`
  - Borders: `#DDDDDD` / `#EBEBEB`
  - Card Hover/Background: `#F7F7F7`
- **Layout:** Desktop layout matching standard 1120px / 1280px max-width container with proper inline padding (24px - 80px).
- **Border Radii:** `12px` for main image grid corners, cards, and modal dialogs; `8px` for buttons and inputs; `50%` for avatars.

### Accessibility & Keyboard Navigation
- All interactive overlays (Photo Tour modal and Lightbox viewer) must trap focus correctly and handle `Escape` key to close.
- Lightbox single-photo viewer must support `ArrowLeft` (`←`) and `ArrowRight` (`→`) key events for seamless photo browsing.
- Interactive elements must possess clear focus indicators and explicit `aria-label` or `role` metadata.

### AI Workflow & Prompt Logging
- All user instructions and AI agent development prompts MUST be systematically logged in `prompt.md`.
- Code changes must adhere to modular component principles without unnecessary overhead or bloat.
