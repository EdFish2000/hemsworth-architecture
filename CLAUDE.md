# Hemsworth Architecture — Website Project

## Project Overview
Portfolio website for Hemsworth Architecture, a Vancouver-based architecture firm specialising in mass timber and high-performance buildings.

## Visual Reference
- Primary: keijidesign.com
- Aesthetic: Japanese minimalism, monochromatic (black/white), full-viewport imagery, restrained typography, generous whitespace, smooth transitions

## Design Decisions
- **Color palette:** Black (#000) on white (#f5f4f2), dark home page (#0a0a0a background)
- **Typography:** Arial, Helvetica, sans-serif — font-weight 300 throughout, uppercase + letter-spacing for labels
- **Navigation:** Wordmark top-left on all pages; hamburger top-right on all inner pages (Projects / About / Recognition)
- **Home hero:** Full-bleed, 4-slide crossfade, 6s interval, 1.8s transition; click or scroll navigates to projects
- **Page transitions:** Slow white dissolve (1.5s each way) between all pages
- **Projects grid:** Single column, full-width 16:9 images, continuous scroll
- **Project detail:** Full-width 16:9 gallery with arrow navigation, two-column info below (facts left, description right); no separator line between gallery and info
- **About / Recognition:** Left sidebar wordmark only; hamburger top-right; justified body text
- **Mobile (<640px):** Sidebar becomes stacked header; hamburger opens #mobile-nav row in sidebar flow; body scroll enabled; project page restructures to vertical sequence (hero → title/year → description → remaining images → facts)

## Tech Stack
- Plain HTML / CSS / JS — no framework, no build tools
- Python 3 local preview server (`./serve.sh` → http://localhost:8000)
- Node.js + sharp for image optimisation (WebP conversion)
- GitHub: https://github.com/EdFish2000/hemsworth-architecture

## File Structure
```
/
├── index.html                        Home page (hero slideshow)
├── projects.html                     Projects grid with category filter
├── about.html                        About page
├── recognition.html                  Recognition page
├── serve.sh                          Local preview server (port 8000)
├── CLAUDE.md                         This file
├── assets/
│   ├── logo/
│   │   ├── Hemsworth-Logo-white.svg  Used on home page (dark background)
│   │   └── Hemsworth-Logo-dark.svg   Used on all inner pages
│   ├── images/
│   │   ├── hero/                     4 WebP + JPEG hero images (real photography)
│   │   └── projects/
│   │       ├── 1-USRC/               16 WebP images
│   │       ├── 2-Leon-Lebeniste/     12 WebP images
│   │       ├── 3-BCPH/               7 WebP images
│   │       └── 4-PH1/                8 WebP images
│   └── content/
├── css/
│   ├── style.css           Global reset, home page, transitions
│   ├── projects.css        Projects page, sidebar, shared inner-page styles
│   ├── project.css         Individual project detail page
│   ├── about.css           About page, hamburger menu (shared across pages)
│   └── recognition.css     Recognition page
├── js/
│   ├── main.js             Home page slideshow + navigation
│   ├── projects.js         Projects page fade-in + category filter
│   ├── project.js          Gallery arrows, keyboard/touch nav, mobile DOM restructure
│   └── about.js            Hamburger toggle (shared across all inner pages)
└── projects/
    ├── upper-skeena-rec-centre.html
    ├── leon-lebeniste.html
    ├── bc-passive-house-factory.html
    └── 1-lonsdale.html
```

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Home (`index.html`) | ✅ Complete | Real hero photography, white fade transition, scroll/click nav |
| Projects (`projects.html`) | ✅ Complete | 4 live projects at top, placeholders below; category filter works across all |
| About (`about.html`) | ✅ Complete | Real practice text, territorial acknowledgement, 6 team members, real email/Instagram |
| Recognition (`recognition.html`) | ✅ Complete | Awards/Publications/Press, email/Instagram footer |
| Upper Skeena Rec Centre | ✅ Complete | 16 images, facts, awards (AFBC, Wood Design), description |
| Leon Lebeniste | ✅ Complete | 12 images, facts, award (Architecture Master Prize), description |
| BC Passive House Factory | ✅ Complete | 7 images, facts, awards (GG Medal, AIBC, Wood Design), description |
| 1 Lonsdale | ✅ Complete | 8 images, facts (size omitted pending confirmation), award (AFBC Innovation), description |

## Project Pages — Pattern
Each project page follows a consistent structure:
- HTML: `projects/{slug}.html`
- Loads: `../css/style.css`, `../css/projects.css`, `../css/project.css`, `../css/about.css`
- Scripts: `../js/projects.js`, `../js/project.js`, `../js/about.js`
- Gallery: `<img>` tags inside `.gallery-slide` divs; portrait images get class `gallery-slide portrait` (object-fit: contain, white background)
- Counter: `counter-total` must be set manually to match slide count
- Active category highlighted in sidebar via `class="cat-link active"` on the correct link
- Image paths all use `../assets/images/projects/...`
- `background-position` / `object-position` can be overridden inline per-image to frame the shot correctly

## Image Optimisation — Convention
- Tool: Node.js + sharp (`npm install sharp` already done)
- Landscape images: resize to max width 1920px
- Portrait images: resize to max height 1920px
- Quality: WebP q80
- Filenames: hyphens only, no spaces (URL safety)
- Original source JPGs are committed alongside WebPs

## projects.html — Category Filter
- Cards use `data-cat="public"`, `data-cat="industrial"`, `data-cat="residential"`, `data-cat="other"`
- Filter driven by URL query string (`?cat=public` etc.) via `projects.js`
- Active sidebar category link set via `class="cat-link active"` on each project page

## projects.html — Current Grid Order
Live projects appear first (top of grid), placeholders follow:

1. Upper Skeena Recreation Centre — Public ✅
2. Leon Lebeniste — Industrial ✅
3. BC Passive House Factory — Industrial ✅
4. 1 Lonsdale — Public ✅
5. Burnaby Civic Pavilion — Public (placeholder, links to project.html)
6. UBC Mass Timber Library — Public (placeholder)
7. Port Moody Fabrication Hall — Industrial (placeholder)
8. Surrey Distribution Hub — Industrial (placeholder)
9. Kitsilano Timber House — Residential (placeholder)
10. Squamish Mountain Retreat — Residential (placeholder)
11. West End Residences — Residential (placeholder)
12. Pacific Spirit Research Station — Other (placeholder)
13. Granville Island Canopy — Other (placeholder)
14. Whistler Alpine Pavilion — Other (placeholder)

## Known Issues / Pending
- No 404 page
- No favicon
- 1 Lonsdale: Size field omitted pending confirmation
- `recognition.html` contact details need real values
- Remaining grid cards are placeholder gradients — replace as photography is provided

## Next Session — Exact Next Steps
Build additional project pages as photography is provided:

1. Check `assets/images/projects/` for a new numbered folder
2. Run sharp conversion (WebP, max 1920px, q80)
3. Create `projects/{slug}.html` following the existing pattern
4. Insert the new card above the placeholder block in `projects.html` (maintain live-first order)
5. Commit
