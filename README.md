# WashU MS in Computer Science — Unofficial Student Redesign

A single-page, responsive redesign of the Washington University in St. Louis
**MS in Computer Science** program page, built for **CSE 2004 Web Development**
(Graduate Program Redesign extra credit).

> ⚠️ **Unofficial student project.** This site is *not* maintained by Washington
> University in St. Louis. It is a redesign exercise. All program facts are
> sourced from official WashU pages and verified during research (see
> [`DESIGN_NOTES.md`](DESIGN_NOTES.md)); verify current details on the official
> site before applying.

---

## Run locally

This is a static site — no build step, no dependencies, no backend. Just open
the file in a browser:

```bash
open index.html
```

Or serve it with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

```
index.html          Single-page site (all content, semantic HTML5)
css/styles.css      Design tokens + layout + responsive rules
js/script.js        Vanilla JS: mobile nav, path switcher, scroll-spy TOC
DESIGN_NOTES.md     Full research, sources, and design rationale
PLAN.md             Implementation plan
```

## Features

- **Editorial, academic identity** — WashU brand palette (red `#BA0C2F`,
  green `#215732`), Georgia serif display (the official fallback for WashU's
  licensed IvyPresto Headline), hairline rules instead of rounded cards.
- **Degree-path comparison** — an at-a-glance table plus an interactive
  switcher (Coursework-only / 3-unit project / 6-unit project / Thesis) that
  updates a unit-breakdown bar and grading notes.
- **Prospective-student focus** — cost, deadlines, admissions checklist, English
  requirements, and funding surfaced on one page (gaps found in the original).
- **Accessible & responsive** — skip link, landmarks, scroll-spy "On this page"
  nav with `aria-current`, keyboard-operable path switcher, native `<details>`
  FAQ, and layouts for 1440/1024/768/390/320 px.

## Design decisions & honesty notes

- **No hero photo.** Only low-quality 2007-era public-domain snapshots of
  Brookings Hall were readily available; none met the professional bar, and
  WashU's own photography is license-gated. The typographic color-field hero is
  used instead — license-safe and on-brand.
- **Text identity, not a logo.** The WashU logo is protected artwork reproduced
  only from approved files. The header uses the university name as live text,
  which WashU's brand guidance explicitly permits.
- **No invented facts.** No fabricated statistics, testimonials, or outcome
  claims. Breadth course lists are *linked* to the official source, not
  reproduced. Tuition is labeled 2026–2027. The original page's capstone-grading
  ambiguity is surfaced rather than silently resolved.

## AI attribution

This project was produced with the assistance of Claude (Anthropic). Research
and factual content are sourced from official Washington University pages
(`cse.washu.edu`, `engineering.washu.edu`, `marcomm.washu.edu`). See
`DESIGN_NOTES.md` for the complete source list and `index.html` / `styles.css` /
`script.js` header comments for per-file attribution.

## Sources (key)

- Official program page — https://cse.washu.edu/academics/graduate/MS-in-Computer-Science.html
- Current-student resources (breadth list, capstone forms) — https://cse.washu.edu/academics/graduate/current-students/Resources-for-Current-Masters-Students.html
- Graduate admissions & deadlines — https://engineering.washu.edu/academics/graduate-admissions/
- Tuition & funding — https://engineering.washu.edu/academics/graduate-admissions/tuition-financial-assistance/
- Brand guidelines — https://marcomm.washu.edu/brand-guides/
