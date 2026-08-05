# Hemsworth Architecture Website — Operating Manual

A plain-language guide for making and publishing changes to the website.

---

## The Basics

The website lives in two places at once:

- **On this Mac:** `/Users/hacode/Documents/hemsworth-website/` — this is where you edit files
- **On the internet:** Netlify reads from GitHub and publishes automatically every time you push

The workflow is always: **edit locally → preview → commit → push → Netlify publishes**.

---

## 1. Starting a Session

Open **Terminal** and type:

```
cd ~/Documents/hemsworth-website
claude
```

If Claude asks you to log in (token expired), type `/login` and follow the prompts.

To start the local preview server so you can see changes in a browser:

```
./serve.sh
```

Then open **http://localhost:8000** in a **private / incognito browser window**. The private window prevents your browser from showing you a cached older version of the site.

To stop the server when you're done: press `Control + C` in Terminal.

---

## 2. Making and Publishing Changes

The process in order:

1. **Make changes** — ask Claude to edit the files, or edit them yourself
2. **Preview** — open http://localhost:8000 in a private window and check your changes look right
3. **Commit** — saves a snapshot of the changes locally (`git commit`)
4. **Push** — sends the committed changes to GitHub (`git push`)
5. **Netlify publishes** — automatically within about a minute of the push

Claude handles the commit and push steps when you ask it to.

### Conserving Netlify Credits

The free Netlify plan includes **300 build minutes per month**. Each push to GitHub triggers a production deploy that uses roughly **15 credits**. That works out to about 20 deploys per month before the limit.

**Batch your changes** — make several edits in one session, preview them all, then commit and push once rather than pushing after every small change. There is no penalty for how many files are in a single commit.

---

## 3. Adding a New Project

Follow these steps in order. If you ask Claude to do this, share the source images first.

### Step 1 — Create an image folder
Create a new numbered folder inside `assets/images/projects/`. Follow the existing naming pattern (e.g. `15-ProjectName/`).

### Step 2 — Add original photos or renderings
Drop in the full-resolution source files. Always use originals — never use images downloaded from other websites, even if they look fine on screen. Web-downloaded images are low-resolution and will look blurry or pixelated in the gallery.

### Step 3 — Optimise the images
Run the sharp conversion script to create web-ready WebP files. Ask Claude: *"Optimise the images in assets/images/projects/15-ProjectName/"* — it will handle the conversion (max 1920px wide, WebP format).

### Step 4 — Build the project page
Ask Claude to create the page using an existing project page as a template. Provide the project details: title, location, territory, year, size, photographer/visualization credit, description, and any awards.

**Credit conventions:**
- Photography: `Photographer: [Name]`
- Renderings / visualizations: `Visualization: [Studio Name]`
- In-house work (drawings, models, process images): no credit line

**Territory acknowledgement:** include the traditional territory line for every project on Indigenous or unceded land.

### Step 5 — Add the card to the projects grid
Add the project card to `projects.html` in the correct position (see grid order in CLAUDE.md). Assign the appropriate categories.

### Step 6 — Update the Prev/Next registry
Add the new project slug and its categories to the `PROJECTS` array in `js/project.js` so the Prev/Next navigation knows where it sits in the sequence.

### Step 7 — Preview and commit
Step through the gallery, check the crop on every image, and confirm Prev/Next works. Then commit and push.

---

## 4. Accounts and Where Things Live

| Service | What it does | Login |
|---------|-------------|-------|
| **GitHub** (github.com/EdFish2000/hemsworth-architecture) | Stores all the website code | EdFish2000 account |
| **Netlify** | Hosts the live site; deploys automatically on every push | Connected to GitHub |
| **GoDaddy** | Owns the domain `hemswortharchitecture.com`; also hosts Microsoft 365 email | GoDaddy account |

### Critical — GoDaddy DNS: Do Not Change These Records

The office email runs through GoDaddy + Microsoft 365. Changing the wrong DNS records will break email. **Never touch the nameservers or any MX records.**

The only records that point to the website are:

| Type | Name | Value |
|------|------|-------|
| A | @ (root domain) | 75.2.60.5 |
| CNAME | www | hemsworth-architecture.netlify.app |

Leave everything else in GoDaddy exactly as it is.

---

## 5. Common Gotchas

### Browser cache
Always preview in a **private/incognito window**. A regular browser window will often show you an older cached version of the site rather than your latest changes, which makes it look like your edits didn't work.

### Netlify deploy credits
Each push to GitHub costs ~15 credits. The free tier gives 300/month (~20 deploys). Batch your changes — don't push after every small tweak.

### Gallery cropping
The gallery shows images at a 16:9 aspect ratio. If a photo has a lot of sky at the top, the 16:9 crop may cut off the building. After adding images to any project, step through all the gallery slides and check that nothing important is cropped out. If a slide is cropping badly, ask Claude to adjust the `object-position` on that specific image (e.g. `center bottom` to anchor toward the ground).

### Always use original high-res images
Never use images downloaded from a website (even your own old site, or naturallywood.com, or similar). Web images are compressed and low-resolution. Always start from the original files from the photographer or visualization studio.

### Pushing to GitHub
The `git push` command sends your committed changes to GitHub, which triggers Netlify to rebuild and publish. If you commit but forget to push, the live site won't update. Claude will remind you, but it's worth knowing: **commit saves it locally, push makes it live**.

---

## 6. Netlify Plan

The site is currently on a **paid Netlify plan**. This was activated temporarily during the build. **Downgrade to the Free tier before the next billing date** — the Free plan is sufficient for this static site and avoids a recurring charge. Log into Netlify and change the plan in the team settings.
