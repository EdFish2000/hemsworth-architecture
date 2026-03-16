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
│   │       └── 3-BCPH/               7 WebP images
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
    └── bc-passive-house-factory.html
```

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Home (`index.html`) | ✅ Complete | Real hero photography, white fade transition, scroll/click nav |
| Projects (`projects.html`) | ✅ Complete | 3 real project cards wired up; remaining cards are placeholders |
| About (`about.html`) | ✅ Complete | Philosophy, team, justified text, email/Instagram footer |
| Recognition (`recognition.html`) | ✅ Complete | Awards/Publications/Press, email/Instagram footer |
| Upper Skeena Rec Centre | ✅ Complete | 16 images, facts, awards (AFBC, Wood Design), description |
| Leon Lebeniste | ✅ Complete | 12 images, facts, award (Architecture Master Prize), description |
| BC Passive House Factory | ✅ Complete | 7 images, facts, awards (GG Medal, AIBC, Wood Design), description |

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

## Known Issues / Pending
- `recognition.html` placeholder email and Instagram URL need real values
- No 404 page
- No favicon
- Projects grid still has placeholder gradient cards (no photos yet): Strathcona Cultural Hall, UBC Mass Timber Library, and residential/other categories

## Next Session — Exact Next Steps
Build additional project pages as photography is provided. The following placeholder cards remain in projects.html:

**Public:**
- Strathcona Cultural Hall — Vancouver, BC · 2024 (placeholder)
- UBC Mass Timber Library — Vancouver, BC · 2024 (placeholder)

**Industrial:**
- (Delta Logistics Centre placeholder removed — replaced by BCPH)

**Residential / Other:**
- All cards are still placeholders

For each new project:
1. Check `assets/images/projects/` for a new numbered folder
2. Run sharp conversion (WebP, max 1920px, q80)
3. Create `projects/{slug}.html` following the existing pattern
4. Replace the corresponding placeholder card in `projects.html`
5. Commit

Also pending: update `recognition.html` with real email address and Instagram URL once provided.
