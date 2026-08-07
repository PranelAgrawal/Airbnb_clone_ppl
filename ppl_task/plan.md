# Implementation Plan: Airbnb Clone App (PlayPower Take-Home Task)

## Overview
This document outlines the phase-wise implementation plan for building a pixel-perfect, production-quality desktop clone of the reference Airbnb listing page ([Reference URL](https://airbnb-clone-umber-two.vercel.app)).

---

## Phase 1: Project Setup & AI Workflow Architecture
- **Objective:** Initialize the codebase and set up AI agent/skill configurations.
- **Tasks:**
  - Create a modern React application (using Next.js or Vite + Tailwind CSS + Lucide Icons / Framer Motion).
  - Configure workspace `.agents/` directory containing customized subagent prompts and skills to document modern AI workflows.
  - Setup core structure for components, mock data, and state management.

---

## Phase 2: Data Extraction & Asset Preparation
- **Objective:** Gather high-resolution images, exact copy, icons, and listing details from the reference site.
- **Tasks:**
  - Extract photo assets and listing data (title, location, host info, specs, amenities, pricing, reviews, house rules).
  - Create a structured mock dataset (`listingData.json`) containing category tags, captions, and image URLs.
  - Define theme variables (Airbnb brand colors `#FF385C`, typography fonts, drop shadows, border radiuses).

---

## Phase 3: Main Listing Page UI & Components
- **Objective:** Recreate the desktop listing page visually and structurally.
- **Tasks:**
  - **Header & Navigation Bar:** Global top bar with search trigger, share/save buttons, user menu, and sticky scroll header behavior.
  - **Hero Photo Grid:** 5-photo grid layout with primary large image on the left and 4 sub-images on the right, including the "Show all photos" trigger button.
  - **Listing Content Sections:**
    - Property header (Title, badges, rating, host details).
    - Highlights & description sections.
    - Amenities grid with modal preview.
    - Interactive calendar widget for date selection.
  - **Sticky Reserve / Booking Card:** Floating reservation widget with date picker inputs, guest dropdown, price breakdown math, and "Reserve" button.
  - **Footer & Legal Section:** Standard Airbnb footer links, language/currency selectors, and copyright info.

---

## Phase 4: Full-Screen Photo Tour Overlay
- **Objective:** Recreate the categorized full-screen photo gallery view.
- **Tasks:**
  - Build overlay modal triggered by clicking "Show all photos" or any hero image.
  - Categorized image list (e.g., Living Room, Bedroom, Full Kitchen, Exterior, Pool).
  - Sticky header inside the modal with "Back" button, title, and action icons (Share/Save).
  - Smooth scroll behavior and photo selection click handler to launch Lightbox.

---

## Phase 5: Lightbox Viewer Overlay
- **Objective:** Build single-photo light box viewer with rich interactions.
- **Tasks:**
  - Modal overlay featuring a focused single image display.
  - Previous / Next navigation controls (`←` / `→` buttons).
  - Full keyboard event listener for `ArrowLeft`, `ArrowRight`, and `Escape` keys.
  - Photo counter display (e.g., `1 / 18`) and image title/caption.
  - Fade/slide transition animations using Framer Motion or smooth CSS transitions.

---

## Phase 6: Micro-Interactions, Animations & Accessibility
- **Objective:** Ensure behavioral parity, responsive hover states, and keyboard accessibility.
- **Tasks:**
  - Implement smooth hover scale/darken effects on buttons and photo grid items.
  - Focus ring management and ARIA attributes for keyboard accessibility (`tabindex`, `aria-label`, dialog roles).
  - Implement sticky navbar transition on scroll when user scrolls past the photo grid.

---

## Phase 7: Production Architecture Diagram
- **Objective:** Create a system architecture diagram for a production-scale vacation-rental marketplace.
- **Tasks:**
  - Draw/generate architecture diagram covering:
    - **Client Layer:** Next.js SSR / CDN distribution (Vercel / Cloudflare).
    - **API Gateway:** Microservices routing, rate limiting, authentication.
    - **Core Services:** Listing service, Booking/Reservation service, Search & Recommendation engine (Elasticsearch/Algolia).
    - **Database & Storage:** PostgreSQL (relational listing/booking data), Redis (caching), AWS S3/Cloudinary (Media assets).
  - Export diagram as PDF/PNG for final submission bundle.

---

## Phase 8: Prompt Logging, QA & Submission Package
- **Objective:** Audit clone parity and package deliverables.
- **Tasks:**
  - Maintain and update all prompt history in `prompt.md`.
  - Conduct visual regression audit comparing the clone against reference site screenshots.
  - Package deliverables into `.zip` containing:
    1. Clean source code + AI subagent/skill configs.
    2. Production architecture diagram (PDF/PNG).
    3. `prompt.md` containing all prompt logs.
