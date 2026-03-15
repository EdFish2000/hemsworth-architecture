# Hemsworth Architecture — Website Project

## Project Overview
Portfolio website for Hemsworth Architecture, a Vancouver-based architecture firm specialising in mass timber and high-performance buildings.

## Visual Reference
- Primary: keijidesign.com
- Aesthetic: Japanese minimalism, monochromatic (black/white), full-viewport imagery, restrained typography, generous whitespace, smooth transitions

## Design Decisions
- **Color palette:** Black (#000) on white (#fff), with semi-transparent blacks for overlays
- **Typography:** Clean sans-serif (system or web font TBD), understated hierarchy
- **Navigation:** Firm name top-left, no visible nav on home page
- **Hero:** Full-bleed image, slow fade cycling through 3–4 placeholders
- **Interaction:** Click or scroll anywhere on home page navigates to projects page
- **Layout:** Full-viewport home, content-focused inner pages

## Tech Stack
- Plain HTML/CSS/JS (no framework) — static site
- No build tools required
- Local preview via Python HTTP server or similar

## Pages Planned
- [ ] Home (in progress)
- [ ] Projects (next)
- [ ] Project detail
- [ ] About
- [ ] Contact

## Folder Structure
```
/
├── CLAUDE.md
├── index.html          (Home page)
├── projects.html       (Projects page — placeholder)
├── assets/
│   ├── logo/
│   ├── images/
│   │   ├── hero/
│   │   └── projects/
│   └── content/
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Current Status
- [x] Git repository initialised
- [x] CLAUDE.md created
- [ ] Preview server set up
- [ ] Folder structure created
- [ ] Home page built

## Next Steps
1. Set up local preview server
2. Create folder structure
3. Build Home page (full-bleed hero, fade slideshow, firm name, click-to-projects)

## Notes
- Use placeholder images (CSS gradients or placeholder services) until real assets provided
- Do not ask for real assets until explicitly prompted
- Stop after each major step and wait for user confirmation
