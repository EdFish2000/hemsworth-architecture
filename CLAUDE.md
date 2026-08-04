# Hemsworth Architecture — Website Project

## Project Overview
Portfolio website for Hemsworth Architecture, a Vancouver-based architecture firm specialising in mass timber and high-performance buildings.

## Visual Reference
- Primary: keijidesign.com
- Aesthetic: Japanese minimalism, monochromatic (black/white), full-viewport imagery, restrained typography, generous whitespace, smooth transitions

## Design Decisions
- **Color palette:** Black (#000) on white (#f5f4f2), dark home page (#0a0a0a background)
- **Typography:** Arial, Helvetica, sans-serif — font-weight 300 throughout, uppercase + letter-spacing for labels
- **Navigation:** Wordmark top-left on all pages; hamburger hidden on desktop (≥641px), visible on mobile only; left sidebar shows flat site nav: Projects, Approach, Team, Recognition, Contact; category filters nested as sub-nav under Projects on desktop; sub-nav collapsed by default on all non-projects pages, clicking PROJECTS toggles expand/collapse with `+` indicator; always expanded on projects.html via hardcoded `expanded` class
- **Home hero:** Full-bleed, 4-slide crossfade, 6s interval, 1.8s transition; click or scroll navigates to projects
- **Page transitions:** Slow white dissolve (1.5s each way) between all pages
- **Projects grid:** Single column, full-width 16:9 images, continuous scroll
- **Project detail:** Full-width 16:9 gallery; full-height left/right click zones for navigation; arrows edge-aligned, subtle at rest, bolder stroke on hover; dot indicators at bottom; project title full-width above two-column info grid; facts left (labels + values both `rgba(0,0,0,0.38)` grey), description right; no divider lines
- **Inner pages (Approach, Team, Recognition, Contact):** Left sidebar with site nav; no footer contact links on Approach, Team, Recognition
- **Mobile (<640px):** Sidebar becomes stacked header; hamburger opens #mobile-nav row in sidebar flow; body scroll enabled; project page restructures to vertical sequence (hero → title/year → description → remaining images → facts); category filters appear as horizontal scroll strip between header and grid on projects.html

## Tech Stack
- Plain HTML / CSS / JS — no framework, no build tools
- Python 3 local preview server (`./serve.sh` → http://localhost:8000)
- Node.js + sharp for image optimisation (WebP conversion)
- GitHub: https://github.com/EdFish2000/hemsworth-architecture
- Netlify: https://hemsworth-architecture.netlify.app — auto-deploys on every push to main
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
│   │       └── 14-Stanley/           6 WebP images (firm photography, 2008)
│   └── content/
├── css/
│   ├── style.css           Global reset, home page, transitions
│   ├── projects.css        Projects page, sidebar, shared inner-page styles
│   ├── project.css         Individual project detail page
│   ├── about.css           Approach/Team/Contact/Recognition pages, hamburger, editorial image
│   └── recognition.css     Recognition page
├── js/
│   ├── main.js             Home page slideshow + navigation
│   ├── projects.js         Projects page fade-in + category filter
│   ├── project.js          Gallery zones, dot indicators, keyboard/touch nav, mobile DOM restructure
│   └── about.js            Hamburger toggle (shared across all inner pages)
└── projects/
    ├── upper-skeena-rec-centre.html
    ├── leon-lebeniste.html
    ├── bc-passive-house-factory.html
    ├── 1-lonsdale.html
    ├── bc-passive-house-factory-addition.html
    ├── new-hazelton-municipal-hall.html
    ├── ajax-mass-timber-warehouse.html
    ├── morgan-elementary-school.html
    ├── fleetwood-park-secondary-school.html
    ├── wedge-lane.html
    ├── whistler-museum-and-archives.html
    ├── indigenous-aquatic-research-centre.html
    └── listen-stanley-park.html
```

## Pages — Status

| Page | Status | Notes |
|------|--------|-------|
| Home (`index.html`) | ✅ Complete | Real hero photography, white fade transition, scroll/click nav |
| Projects (`projects.html`) | ✅ Complete | 13 live projects; desktop sub-nav + mobile scroll strip filter |
| About (`about.html`) | ✅ Complete | Redirects to approach.html |
| Approach (`approach.html`) | ✅ Complete | Hero image (USRC), practice text, territorial acknowledgement |
| Team (`team.html`) | ✅ Complete | Hero image (BCPH); two-column grid (300px name+credentials / title); 5 members with credentials |
| Contact (`contact.html`) | ✅ Complete | Address, phone, office@ + employment@ emails, Instagram; two-column layout with hero image |
| Recognition (`recognition.html`) | ✅ Complete | Awards/Publications/Press; no divider lines; dates in aligned column |
| Upper Skeena Rec Centre | ✅ Complete | 16 images, Territory field, Video field, awards on separate lines |
| Leon Lebeniste | ✅ Complete | 12 images, awards on separate lines |
| BC Passive House Factory | ✅ Complete | 7 images, awards on separate lines |
| 1 Lonsdale | ✅ Complete | 8 images, size omitted pending confirmation, award on separate line |
| BC Passive House Factory Addition | ✅ Complete | 6 images, Territory field, no awards |
| New Hazelton Municipal Hall | ✅ Complete | 7 images (incl. 1 portrait), Territory field, no awards; page-specific 3:2 gallery override |
| Ajax Mass Timber Warehouse | ✅ Complete | 7 images (Mirage Studio visualizations), Territory field, no awards; label is "Visualization" not "Photographer"; Year: "Current" |
| Morgan Elementary School | ✅ Complete | 5 images, no photographer credit, no territory, no awards |
| Fleetwood Park Secondary School | ✅ Complete | 3 images (rendering + model + session), no photographer credit, in-progress |
| Wedge Lane Residence | ✅ Complete | 6 images (incl. 1 drawing as portrait+white bg), Territory field, internal link to BCPH |
| Whistler Museum and Archives | ✅ Complete | 6 images (3 renderings + 2 process + 1 model composite), Territory field, label "Visualization", Year: "Current" |
| Indigenous Aquatic Research Centre | ✅ Complete | 3 images (2 renderings + 1 process), Territory field, Client field, label "Visualization", Year: "Current" |
| Listen — Stanley Park | ✅ Complete | 6 images (firm photography, 2008), Collaboration field, no size/photographer/awards; panoramic cover as portrait+white bg |
| Ontario and Fifth | ⏸ ON HOLD | Awaiting original high-res KK Law files — images in 8-ON5 are low-res web downloads from naturallywood.com. Page HTML (ontario-and-fifth.html) drafted but NOT committed. Size unverified: Word doc says 936 m², external sources say 840 m². Model photo still to be added. Project video: https://youtu.be/B23XVhen9z0 (to embed when page is built). |

## Project Pages — Pattern
Each project page follows a consistent structure:
- HTML: `projects/{slug}.html`
- Loads: `../css/style.css`, `../css/projects.css`, `../css/project.css`, `../css/about.css`
- Scripts: `../js/projects.js`, `../js/project.js`, `../js/about.js`
- Gallery: `<img>` tags inside `.gallery-slide` divs; portrait images get class `gallery-slide portrait`
- Navigation zones: `#zone-prev` and `#zone-next` divs inside `#gallery-track` (full-height left/right halves); dot indicators via `#gallery-dots` (populated by JS — no manual count needed)
- Sidebar: site-nav with `class="site-link active"` on Projects link; `.sub-nav` present without `expanded` (toggle handled by `about.js`)
- Info panel: `<h1 class="project-title">` is a direct child of `#project-info` (full-width, above the grid); `#project-info-columns` wraps `#project-facts` and `#project-description` side by side; `#project-facts` starts directly with `<dl class="facts-list">` — no `<h3>` heading
- Fields in order (omit any that don't apply): Location, Territory, Client, Collaboration, Year, Size, Photographer/Visualization, Video, Awards
- Client field: used on Indigenous Aquatic Research Centre; same `<div class="fact-row">` pattern as all other fields — no new CSS needed
- Collaboration field: used on Listen — Stanley Park; same `<div class="fact-row">` pattern — no new CSS needed
- Awards format: one `<span class="award-line">` per award inside the `<dd>`, text as "YEAR — AWARD NAME"
- Video field: plain `<a href="...">` inside `<dd>` — inherits inline display, no text-transform
- Image paths all use `../assets/images/projects/...`
- `object-position` can be overridden inline per-image to frame the shot correctly
- **Gallery aspect ratio:** Default is 16:9 (set in `project.css`). Most projects use Ema Peter photography delivered at 3:2, which fits well. If a project's photos are 4:3 (e.g. Martin Knowles), the 16:9 container crops ~25% of height — in that case add a page-specific `<style>#gallery-track { aspect-ratio: 3 / 2; }</style>` in the page `<head>` (do NOT edit the shared `project.css`). New Hazelton Municipal Hall uses this override. **Standing guidance: always preview the gallery after building a new project page and check for clipping before committing.**

## Image Optimisation — Convention
- Tool: Node.js + sharp (`npm install sharp` already done)
- Landscape images: resize to max width 1920px
- Portrait images: resize to max height 1920px
- Quality: WebP q80
- Filenames: hyphens only, no spaces (URL safety)
- Original source JPGs are committed alongside WebPs

## projects.html — Category Filter
- Categories: `in-progress`, `first-nations`, `public`, `industrial`, `commercial`, `education`, `residential`, `other`, `all`
- Cards use `data-cat="..."` matching the above slugs
- Desktop: filters in `.sub-nav` nested under Projects in `#site-nav`
- Mobile: filters in `#mobile-filters` strip (horizontal scroll, no wrap, hidden on desktop)
- Active state managed by JS — do not hardcode `active` class on any filter link
- Filter driven by click events via `projects.js`

## projects.html — Current Grid Order

1. Upper Skeena Recreation Centre — Public ✅
2. Leon Lebeniste — Industrial ✅
3. BC Passive House Factory — Industrial ✅
4. 1 Lonsdale — Public ✅
5. BC Passive House Factory Addition — Industrial ✅
6. New Hazelton Municipal Hall — Public ✅
7. Ajax Mass Timber Warehouse — Industrial (in-progress) ✅
8. Morgan Elementary School — Education ✅
9. Fleetwood Park Secondary School — Education (in-progress) ✅
10. Wedge Lane Residence — Residential ✅
11. Whistler Museum and Archives — Public (in-progress) ✅
12. Indigenous Aquatic Research Centre — First Nations (in-progress) ✅
13. Listen — Stanley Park — Other ✅

## Team — Members and Credentials

| Name | Title | Credentials |
|------|-------|-------------|
| John Hemsworth | Principal, Design Lead | Architect AIBC \| OAA \| M.ARCH \| B.ENG \| LEED AP \| MRAIC |
| Dean Shwedyk | Senior Associate, Project Lead | MAA \| M.ARCH \| LEED AP |
| Niall Jones | Associate, Project Lead | Associate M.ARCH \| NZIA \| CPHD |
| Jorne van der Voorn | Project Lead | Architect AIBC \| M.ARCH \| B.ENG |
| Rebecca Boese | Project Lead | Senior Designer BSc Arch. \| RIBA |

Layout: two-column CSS grid, `grid-template-columns: 300px 1fr`, `column-gap: 10px`. Left cell = `.member-name-block` (name + credentials stacked). Right cell = `.member-role`. Mobile: flex column.

## Known Issues / Pending
- No 404 page
- No favicon
- 1 Lonsdale: Size field omitted pending confirmation
- Mobile: second round of review pending

## Pending — Final Pass (do once all project pages are built)

1. **Prev / Next project navigation on project detail pages**
   - Add Previous Project and Next Project links to the bottom carousel nav on every project detail page
   - Keep the existing `← All Projects` link (`../projects.html`) in the centre between them
   - Order must follow the main projects grid order (see projects.html — Current Grid Order above)
   - Decide end behaviour at build time: either loop (last project wraps to first) or hide the arrow that has no target

2. **Category assignments on projects.html**
   - Set the correct `data-cat="..."` attribute on every live project card
   - Categories: `in-progress`, `first-nations`, `public`, `industrial`, `commercial`, `education`, `residential`, `other`
   - Currently the four live cards have placeholder categories — confirm final assignments with client before implementing

## Next Session — Exact Next Steps
Build additional project pages as photography is provided:

1. Check `assets/images/projects/` for a new numbered folder
2. Run sharp conversion (WebP, max 1920px, q80)
3. Create `projects/{slug}.html` following the existing pattern (see Project Pages — Pattern above)
4. Insert the new card above the placeholder block in `projects.html` (maintain live-first order)
5. Commit and push
