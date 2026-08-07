---
name: airbnb-clone-guidelines
description: Engineering and UI/UX guidelines for recreating the desktop Airbnb listing clone.
---

# Airbnb Clone Technical Skill & Guidelines

## 1. UI Components Specification

### A. Main Listing Page (`ListingPage`)
- **Top Header (`Navbar`):** Search bar pill, host links, user menu. Sticky behavior on scroll.
- **Header Title Section:** Property title, Share & Save buttons, star rating, review count, location.
- **Hero Photo Grid (`HeroGallery`):**
  - Left primary photo (spans 2 rows).
  - Right 4 sub-photos (2x2 grid).
  - Bottom-right overlay button: `"Show all photos"` with grid icon.
- **Content Columns (2-Column Desktop Grid):**
  - **Left Column (~65% width):** Host info avatar, property highlights (e.g. Dedicated workspace, Self check-in), listing description, amenities grid, date picker calendar, reviews section, map placeholder, host profile.
  - **Right Column (~35% width - Sticky Card):** Floating booking box containing price per night, date inputs, guest selector, reserve button, fee breakdown table, and host contact.

### B. Full-Screen Photo Tour Overlay (`PhotoTour`)
- Full-page overlay displaying categorized images (Living Room, Bedroom, Kitchen, Bathrooms, Exterior).
- Sticky modal header with back arrow icon and title.
- Direct click listener on any image to trigger Lightbox viewer.

### C. Lightbox Overlay (`Lightbox`)
- Dark ambient backdrop modal for single-photo inspection.
- Fixed prev/next directional buttons.
- Global keydown handlers (`ArrowLeft`, `ArrowRight`, `Escape`).
- Counter badge displaying `Current Image / Total Images`.

## 2. Code Quality & State Management
- Modal states managed cleanly (`isPhotoTourOpen`, `lightboxIndex`, `isReserveCardSticky`).
- Body scroll locking (`overflow: hidden`) when modal overlays are active.
