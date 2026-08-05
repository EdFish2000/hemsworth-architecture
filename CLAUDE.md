# Hemsworth Architecture — Website Project

## Status: COMPLETE AND LIVE
- **Live URL:** https://hemswortharchitecture.com (and https://hemsworth-architecture.netlify.app)
- **Hosting:** Netlify, auto-deploying from GitHub (`main` branch)
- **GitHub:** https://github.com/EdFish2000/hemsworth-architecture
- **SSH key configured** on this Mac (ed25519, EdFish2000 account) — `git push` works without confirmation

## Project Overview
Portfolio website for Hemsworth Architecture, a Vancouver-based architecture firm specialising in mass timber and high-performance buildings.

## Visual Reference
- Primary: keijidesign.com
- Aesthetic: Japanese minimalism, monochromatic (black/white), full-viewport imagery, restrained typography, generous whitespace, smooth transitions

## Design Decisions
- **Color palette:** Black (#000) on white (#f5f4f2), dark home page (#0a0a0a background)
- **Typography:** Arial, Helvetica, sans-serif — font-weight 300 throughout, uppercase + letter-spacing for labels
- **Navigation:** Wordmark top-left on all pages; hamburger hidden on desktop (≥641px), visible on mobile only; left sidebar: Projects (toggle), Approach, Team, Recognition, Contact; Projects sub-nav shows All / In Progress / Mass Timber / Industrial / Public / Education; sub-nav stays expanded on the projects grid, filtered views, and all project detail pages; collapses on inner pages (Approach etc.) unless toggled; clicking Projects always toggles open/closed, never navigates; `+` / `−` indicator; active category highlighted based on `?cat=` URL param
- **Home hero:** Full-bleed, 4-slide crossfade, 6s interval, 1.8s transition; click or scroll navigates to projects
- **Page transitions:** Slow white dissolve (1.5s each way) between all pages
- **Projects grid:** Single column, full-width 16:9 images, continuous scroll
- **Project detail:** Full-width 16:9 gallery; full-height left/right click zones; arrows edge-aligned, subtle at rest, bolder on hover; dot indicators at bottom; project title full-width above two-column info grid; facts left (labels + values both `rgba(0,0,0,0.38)` grey), description right; no divider lines; `← Prev` / `← All Projects` / `Next →` bottom nav, category-aware (cycles within active category, wrapping at ends)
- **Inner pages (Approach, Team, Recognition, Contact):** Left sidebar with site nav; hero image at top; no footer contact links on Approach, Team, Recognition
- **Mobile (<640px):** Sidebar becomes stacked header; hamburger opens `#mobile-nav` in sidebar flow; body scroll enabled; project page restructures to vertical sequence (hero → title/year → description → remaining images → facts); category filters appear as horizontal scroll strip between header and grid on projects.html

## Tech Stack
- Plain HTML / CSS / JS — no framework, no build tools
- Python 3 local preview server (`./serve.sh` → http://localhost:8000)
- Node.js + sharp for image optimisation (WebP conversion) — `npm install sharp` already done
- SSH key configured on this Mac (ed25519), added to GitHub account EdFish2000 — `git push` works without confirmation

## File Structure
```
/
├── index.html                        Home page (hero slideshow)
├── projects.html                     Projects grid with category filter + mobile filter strip
├── about.html                        Redirects to approach.html (meta refresh)
├── approach.html                     Practice philosophy — hero image + body text
├── team.html                         Team list — hero image + member names/roles
├── contact.html                      Address, phone, emails, Instagram — two-column layout
├── recognition.html                  Awards / Publications / Press — no divider lines
├── serve.sh                          Local preview server (port 8000)
├── CLAUDE.md                         This file
├── OPERATIONS.md                     Plain-language operating manual
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
│   │       ├── 4-PH1/                8 WebP images
│   │       ├── 5-BCPH2/              6 WebP images
│   │       ├── 6-NHMH/               7 WebP images (4:3 source — see gallery note)
│   │       ├── 7-PHi1/               7 WebP images (visualizations — Mirage Studio)
│   │       ├── 8-ON5/                Low-res web downloads (ON HOLD — awaiting original KK Law files)
│   │       ├── 9-MES/                5 WebP images (photography)
│   │       ├── 10-FLPS/              3 WebP images (rendering + model + session)
│   │       ├── 11-WEDGE/             6 WebP images (incl. 1 drawing)
│   │       ├── 12-WMAS/              6 WebP images (3 renderings + 2 process + 1 composite)
│   │       ├── 13-WWKO/              3 WebP images (2 renderings + 1 process)
│   │       └── 14-Stanley/           6 WebP images (firm photography, 2008) — rebuilt from JH originals
│   └── content/
├── css/
│   ├── style.css           Global reset, home page, transitions
│   ├── projects.css        Projects page, sidebar, shared inner-page styles
│   ├── project.css         Individual project detail page
│   ├── about.css           Approach/Team/Contact/Recognition pages, hamburger, editorial image
│   └── recognition.css     Recognition page
├── js/
│   ├── main.js             Home page slideshow + navigation
│   ├── projects.js         Projects page fade-in + category filter + ?cat= forwarding on card clicks
│   ├── project.js          Gallery zones, dots, keyboard/touch nav, category-aware Prev/Next, mobile DOM restructure
│   └── about.js            Hamburger toggle + sub-nav expand/collapse + auto-expand on project pages
└── projects/
    ├── upper-skeena-rec-centre.html
    ├── leon-lebeniste.html
    ├── bc-passive-house-factory.html
    ├── 1-lonsdale.html
    ├── ajax-mass-timber-warehouse.html
    ├── indigenous-aquatic-research-centre.html
    ├── whistler-museum-and-archives.html
    ├── bc-passive-house-factory-addition.html
    ├── fleetwood-park-secondary-school.html
    ├── new-hazelton-municipal-hall.html
    ├── wedge-lane.html
    ├── morgan-elementary-school.html
    ├── whistler-skiers-chapel.html
    └── listen-stanley-park.html
```

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Home (`index.html`) | ✅ Live | Real hero photography, white fade transition, scroll/click nav |
| Projects (`projects.html`) | ✅ Live | 14 live projects; desktop sub-nav + mobile scroll strip filter; ?cat= param forwarded on card clicks |
| About (`about.html`) | ✅ Live | Redirects to approach.html |
| Approach (`approach.html`) | ✅ Live | Hero image (Leon Lebeniste rooftop), practice text, territorial acknowledgement |
| Team (`team.html`) | ✅ Live | Hero image (BCPH); two-column grid (300px name+credentials / title); 5 members |
| Contact (`contact.html`) | ✅ Live | Address, phone, office@ + employment@ emails, Instagram; two-column layout with hero image |
| Recognition (`recognition.html`) | ✅ Live | Awards/Publications/Press; no divider lines; dates in aligned column |
| Upper Skeena Rec Centre | ✅ Live | 16 images, Territory, Video, awards |
| Leon Lebeniste | ✅ Live | 12 images, awards |
| BC Passive House Factory | ✅ Live | 7 images, awards; cross-links to BCPH Addition |
| 1 Lonsdale | ✅ Live | 8 images, size omitted pending confirmation; cross-link to BCPH |
| BC Passive House Factory Addition | ✅ Live | 6 images, Territory; cross-links to BCPH; slides 3+4 cropped to center bottom |
| New Hazelton Municipal Hall | ✅ Live | 7 images (incl. 1 portrait), Territory; page-specific 3:2 gallery override; hero at center 70% |
| Ajax Mass Timber Warehouse | ✅ Live | 7 images (Mirage Studio), Territory; label "Visualization"; Year: "Current"; in-progress |
| Morgan Elementary School | ✅ Live | 5 images, no photographer/territory/awards |
| Fleetwood Park Secondary School | ✅ Live | 3 images (rendering + model + session); in-progress |
| Wedge Lane Residence | ✅ Live | 6 images (incl. 1 drawing as portrait+white bg), Territory, internal link to BCPH |
| Whistler Museum and Archives | ✅ Live | 6 images, Territory, label "Visualization", Year: "Current"; in-progress |
| Indigenous Aquatic Research Centre | ✅ Live | 3 images, Territory, Client field, label "Visualization", Year: "Current"; in-progress |
| Whistler Skiers Chapel | ✅ Live | 3 images, Territory, label "Visualization", Year: "Current"; in-progress |
| Listen — Stanley Park | ✅ Live | 6 images rebuilt from JH2008 originals, Collaboration field |
| Ontario and Fifth | ⏸ ON HOLD | Awaiting original high-res KK Law photos. Low-res copies in `8-ON5/` — do NOT use. Draft HTML (`ontario-and-fifth.html`) exists locally, not committed. Size unverified (Word doc: 936 m², external: 840 m²). Video: https://youtu.be/B23XVhen9z0 |

## Category System

Filter order (everywhere — sub-nav, mobile strip): **All → In Progress → Mass Timber → Industrial → Public → Education**

| Category | data-cat value | Projects |
|----------|---------------|---------|
| All | `all` | All 14 |
| In Progress | `in-progress` | Ajax, Indigenous Aquatic, Whistler Museum, Fleetwood, Whistler Skiers Chapel |
| Mass Timber | `mass-timber` | USRC, Leon, BCPH, 1 Lonsdale, Ajax, Indigenous Aquatic, Whistler Museum, BCPH Addition, NHMH, Whistler Skiers Chapel |
| Industrial | `industrial` | Leon, BCPH, Ajax, BCPH Addition |
| Public | `public` | USRC, 1 Lonsdale, Indigenous Aquatic, Whistler Museum, Fleetwood, NHMH, Morgan, Whistler Skiers Chapel |
| Education | `education` | Indigenous Aquatic, Whistler Museum, Fleetwood, Morgan |
| *(no category)* | `""` | Wedge Lane, Listen — Stanley Park |

Categories are additive (space-separated in `data-cat`). `first-nations` exists in the PROJECTS registry for Prev/Next nav but is not a displayed filter.

## projects.html — Current Grid Order

1. Upper Skeena Recreation Centre — `first-nations mass-timber public`
2. Leon Lebeniste — `mass-timber industrial`
3. BC Passive House Factory — `mass-timber industrial`
4. 1 Lonsdale — `mass-timber public`
5. Ajax Mass Timber Warehouse — `mass-timber industrial in-progress`
6. Indigenous Aquatic Research Centre — `first-nations mass-timber public education in-progress`
7. Whistler Museum and Archives — `mass-timber public education in-progress`
8. BC Passive House Factory Addition — `mass-timber industrial`
9. Fleetwood Park Secondary School — `public education in-progress`
10. New Hazelton Municipal Hall — `mass-timber public`
11. Wedge Lane Residence — *(no category)*
12. Morgan Elementary School — `public education`
13. Whistler Skiers Chapel — `mass-timber public in-progress`
14. Listen — Stanley Park — *(no category)*

**Pending:** Ontario and Fifth slots in at ~position 5–6 once original KK Law photos arrive.

## Prev/Next Navigation — How It Works

`js/project.js` maintains a `PROJECTS` array (module-level) with each project's slug and category tags. A dedicated IIFE runs `buildProjectNav()` before the gallery code:

1. Reads the current slug from `window.location.pathname`
2. Reads `?cat=` from the URL (defaults to `'all'`; validates against known cats)
3. Filters `PROJECTS` to the active category subset
4. Finds the current project's index in that subset
5. Sets `← Prev` and `Next →` hrefs to adjacent slugs (wrapping at ends), preserving `?cat=`
6. Sets `← All Projects` href to `projects.html` (with `?cat=` if active)

Uses `setAttribute('href', ...)` — nav IIFE is separate from gallery IIFE so gallery errors can't block it.

**Sub-nav persistence:** `about.js` auto-expands the sub-nav on project detail pages (detected by presence of `#nav-prev` element) and when `?cat=` is in the URL. The active cat-link gets `.active` class from the same `?cat=` value. This means navigating from a filtered grid into a project and Prev/Next-ing through projects all keep the sub-nav open with the right category highlighted.

## Project Pages — Pattern
Each project page follows a consistent structure:
- HTML: `projects/{slug}.html`
- Loads: `../css/style.css`, `../css/projects.css`, `../css/project.css`, `../css/about.css`
- Scripts: `../js/projects.js`, `../js/project.js`, `../js/about.js`
- Gallery: `<img>` tags inside `.gallery-slide` divs; portrait images get class `gallery-slide portrait`
- Navigation zones: `#zone-prev` and `#zone-next` divs inside `#gallery-track`; dot indicators via `#gallery-dots` (populated by JS)
- Sidebar: site-nav with `class="site-link active"` on Projects link; `.sub-nav` without `expanded` (JS handles it)
- Info panel: `<h1 class="project-title">` direct child of `#project-info`; `#project-info-columns` wraps `#project-facts` and `#project-description`; `#project-facts` starts with `<dl class="facts-list">` — no heading
- Fields in order (omit if not applicable): Location, Territory, Client, Collaboration, Year, Size, Photographer/Visualization, Video, Awards
- Awards: one `<span class="award-line">` per award inside `<dd>`, format "YEAR — AWARD NAME"
- Video: plain `<a href="...">` inside `<dd>` — inherits inline display, no text-transform
- Image paths: `../assets/images/projects/...`; `object-position` overridden inline per-image as needed
- Bottom nav: static HTML `#nav-prev`, `#nav-all`, `#nav-next` — JS updates hrefs at runtime
- **Gallery aspect ratio:** Default 16:9. Override per-page with `<style>#gallery-track { aspect-ratio: 3 / 2; }</style>` in `<head>` if photos are 4:3 (do NOT edit shared `project.css`). New Hazelton uses this. **Always preview the gallery on a new project page before committing.**

## Image Optimisation — Convention
- Tool: Node.js + sharp (`npm install sharp` already done in project root)
- Landscape: max width 1920px; Portrait: max height 1920px; Quality: WebP q80
- Filenames: hyphens only, no spaces
- Original source JPGs committed alongside WebPs

## Team — Members and Credentials

| Name | Title | Credentials |
|------|-------|-------------|
| John Hemsworth | Principal, Design Lead | Architect AIBC \| OAA \| M.ARCH \| B.ENG \| LEED AP \| MRAIC |
| Dean Shwedyk | Senior Associate, Project Lead | MAA \| M.ARCH \| LEED AP |
| Niall Jones | Associate, Project Lead | Associate M.ARCH \| NZIA \| CPHD |
| Jorne van der Voorn | Project Lead | Architect AIBC \| M.ARCH \| B.ENG |
| Rebecca Boese | Project Lead | Senior Designer BSc Arch. \| RIBA |

Layout: two-column CSS grid, `grid-template-columns: 300px 1fr`, `column-gap: 10px`. Left = `.member-name-block`. Right = `.member-role`. Mobile: flex column.

## Outstanding

### Ontario and Fifth (ON HOLD)
- Awaiting original high-res photography from KK Law — do NOT use the low-res copies in `8-ON5/`
- Draft `projects/ontario-and-fifth.html` exists locally but is not committed
- When photos arrive: optimize with sharp, slot into grid at ~position 5–6, confirm categories, confirm size (Word doc: 936 m² / external sources: 840 m²), embed video https://youtu.be/B23XVhen9z0

### Whistler Skiers Chapel
- Currently tagged `in-progress`; confirm this tag stays once construction begins

### Netlify Plan — Downgrade Before Next Billing
- Site is on a paid Netlify plan for this build cycle
- Downgrade to Free tier before the next billing date — Free is sufficient for this static site

## Minor Known Gaps
- No 404 page
- No favicon
- 1 Lonsdale: Size field omitted pending client confirmation
