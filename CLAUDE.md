# Hemsworth Architecture — Website Project

## Project Overview
Portfolio website for Hemsworth Architecture, a Vancouver-based architecture firm specialising in mass timber and high-performance buildings.

## Visual Reference
- Primary: keijidesign.com
- Aesthetic: Japanese minimalism, monochromatic (black/white), full-viewport imagery, restrained typography, generous whitespace, smooth transitions

## Design Decisions
- **Color palette:** Black (#000) on white (#f5f4f2), dark home page (#0a0a0a background)
- **Typography:** Helvetica Neue, font-weight 300 throughout, uppercase + letter-spacing for labels
- **Navigation:** Wordmark top-left on all pages; hamburger top-right on all inner pages (Projects / About / Recognition)
- **Home hero:** Full-bleed, 4-slide crossfade, 6s interval, 1.8s transition; click or scroll navigates to projects
- **Page transitions:** Slow white dissolve (1.5s each way) between all pages
- **Projects grid:** Single column, full-width 16:9 images, continuous scroll
- **Project detail:** Full-width 16:9 gallery with arrow navigation, two-column info below (facts left, description right)
- **About / Recognition:** Left sidebar wordmark only; hamburger top-right; justified body text
- **Mobile (<640px):** Sidebar becomes stacked header; hamburger opens #mobile-nav row in sidebar flow; body scroll enabled

## Tech Stack
- Plain HTML / CSS / JS — no framework, no build tools
- Python 3 local preview server (`./serve.sh` → http://localhost:8000)

## File Structure
```
/
├── index.html              Home page (hero slideshow)
├── projects.html           Projects grid with category filter
├── project.html            Individual project detail (Burnaby Civic Pavilion)
├── about.html              About page
├── recognition.html        Recognition page
├── serve.sh                Local preview server (port 8000)
├── CLAUDE.md               This file
├── assets/
│   ├── logo/
│   ├── images/
│   │   ├── hero/           (placeholder gradients used)
│   │   └── projects/       (placeholder gradients used)
│   └── content/
├── css/
│   ├── style.css           Global reset, home page, transitions
│   ├── projects.css        Projects page, sidebar, shared inner-page styles
│   ├── project.css         Individual project detail page
│   ├── about.css           About page, hamburger menu (shared across pages)
│   └── recognition.css     Recognition page
└── js/
    ├── main.js             Home page slideshow + navigation
    ├── projects.js         Projects page fade-in + category filter
    ├── project.js          Gallery arrows, keyboard/touch nav, mobile DOM restructure
    └── about.js            Hamburger toggle (shared across all inner pages)
```

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Home (`index.html`) | ✅ Complete | Hero slideshow, white fade transition, scroll/click nav |
| Projects (`projects.html`) | ✅ Complete | Single-column grid, category filter, hamburger |
| Project detail (`project.html`) | ✅ Complete | Gallery, facts/description, mobile restructure |
| About (`about.html`) | ✅ Complete | Philosophy, team, justified text, email/Instagram footer |
| Recognition (`recognition.html`) | ✅ Complete | Awards/Publications/Press, email/Instagram footer |
| Recognition stub | — | `recognition.html` used as hamburger link target from earlier pages — now fully built |

## Completed This Session (2026-03-14)
1. Git repository initialised, CLAUDE.md created, preview server set up
2. Folder structure created: assets/logo, assets/images/hero, assets/images/projects, assets/content
3. **Home page** — full-bleed hero with 4 distinct gradient slides (amber, slate, sage, ash), wordmark top-left, scroll hint animation, custom cursor, white-dissolve transition
4. **Projects page** — fixed left sidebar with category nav, single-column full-width grid, white fade-in
5. **Project detail page** — 16:9 gallery with arrow/keyboard/touch navigation, photo counter, two-column facts + description, mobile restructure (first image → title/year → description → remaining images → facts)
6. **About page** — philosophy statement (4 paragraphs, justified), team (4 members), email left/Instagram right footer, hamburger menu
7. **Recognition page** — three sections (Awards/Publications/Press), label-left / entries-right grid layout, placeholder content referencing BC Passive House Factory and Upper Skeena Recreation Centre
8. **Site-wide hamburger** — consistent Projects / About / Recognition nav on all inner pages; mobile hamburger opens inline link row in sidebar without overlapping content
9. **Mobile fixes** — scroll enabled, sidebar reflows, project page restructures to vertical sequence

## Pending / Known Issues
- All images are CSS gradient placeholders — real photography not yet provided
- Logo asset not yet provided — wordmark is text only
- `projects.html` category filter driven by `data-cat` attributes; only Burnaby Civic Pavilion links through to a project detail page
- `recognition.html` placeholder email and Instagram URL need real values
- No 404 page
- No favicon

## Next Session — Exact Next Step
**Wire up the remaining project cards on projects.html to individual project detail pages.** Each project currently links to `#` except Burnaby Civic Pavilion. The next step is to either:
  (a) Create a single reusable `project.html` template and pass project data via URL query string + JS, or
  (b) Duplicate `project.html` per project with unique content

Recommended: option (a) — query-string driven template. This keeps the codebase lean and makes it easy to add/remove projects later. Discuss with John before implementing.

After that: swap placeholder gradients for real photography once assets are provided.
