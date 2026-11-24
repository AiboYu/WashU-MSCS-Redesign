# PLAN — WashU MS in Computer Science Redesign (CSE 2004)

**Date:** 2026-11-24
**Status:** Awaiting approval — no implementation yet.

See **DESIGN_NOTES.md** for the full research, source list, verified facts, and rationale. This file is the implementation plan.

---

## 1. Goal & constraints

Produce a single-page, responsive, GitHub Pages-deployable redesign of the WashU MS in Computer Science program page that:
- serves prospective domestic **and** international students,
- surfaces cost, deadlines, requirements, and admissions in one place (the gaps found in the original and in all three references),
- uses authentic WashU branding (red/green palette, serif/sans hierarchy, logo rules),
- uses **only verified facts** with placeholders clearly labeled and a subtle "unofficial redesign" disclaimer,
- uses semantic HTML5 + modern CSS + vanilla JS (no framework, no backend).

## 2. Tech stack & structure

```
WashU-MSCS-Redesign/
├── index.html          # single page, all content
├── css/
│   └── styles.css      # design tokens + components + responsive rules
├── js/
│   └── main.js         # TOC scroll-spy, path switcher, FAQ toggle, nav toggle
└── assets/             # (optional) logo/brand imagery — only from licensed sources
```

- **HTML5** semantic landmarks (`header`, `nav`, `main`, `section`, `aside`, `footer`), correct H1→H3 outline.
- **CSS** custom properties for design tokens; grid/flex layout; mobile-first with breakpoints (~768px, ~1024px).
- **JS** ~100 lines total, no dependencies; each feature degrades gracefully if JS is off (requirements text still fully present; FAQ uses `<details>`).

## 3. Design tokens

```css
:root {
  --washu-red:      #BA0C2F;
  --washu-dark-red: #971B2F;
  --washu-green:    #215732;
  --washu-gold:     #F1B434;   /* sparing accent */
  --warm-gray:      #D7D2CB;
  --cool-gray:      #D9D9D9;
  --ink:            #000000;
  --paper:          #FFFFFF;
  --off-white:      #FAF8F5;   /* warm section alt */

  --font-display: Georgia, 'Times New Roman', serif;      /* WashU serif fallback */
  --font-body:    -apple-system, 'Segoe UI', Calibri, Helvetica, Arial, sans-serif;

  --rule: 1px solid var(--cool-gray);
  --max-width: 72rem;
}
```

Rationale: Georgia/Calibri are the *official* WashU fallbacks for non-Adobe users (see DESIGN_NOTES §4), so this is license-safe and brand-authentic. Contrast pairs follow MarComm's approved combinations (white-on-red 6.60:1, etc.).

## 4. Section-by-section build plan

| # | Section | Key content (all verified) | Notes |
|---|---------|---------------------------|-------|
| 1 | Header + nav | Text wordmark, nav anchors, "Apply" → gradadmit portal | No fake logo; text lockup per brand guidance |
| 2 | Breadcrumb | Home › Academics › Graduate › MS in CS | `aria-label="Breadcrumb"` |
| 3 | Typographic hero | Program name, one-line positioning, facts strip (30 units · Fall/Spring · On-campus · GRE optional) | Color-field, no photo |
| 4 | At-a-glance panel | Units 30 · GPA 2.70 · GRE optional · TOEFL 90 / IELTS 6.5 / Duolingo 125 · Fall deadline Mar 1 · Spring deadline Oct 1 · cost anchor | `<aside>`; right rail desktop, stacked mobile |
| 5 | Overview | Positioning, audience, "many backgrounds" message, prerequisites | |
| 6 | Degree requirements | Interactive path switcher → unit breakdown + grading; breadth T/S/M/A; exclusions; GPA 2.70 | Core JS feature |
| 7 | Curriculum & breadth | T·S·M·A definitions; capstone options; **link** to official SMTA mapping (not reproduced) | |
| 8 | Research | Thesis path + link to 11 CSE research areas | No invented outcomes |
| 9 | Admissions | Checklist (fee $75, 3 recs, SOP 1–2 pp, transcripts, GRE optional, English minimums) + deadlines timeline (opens/deadline/decision/reply) + portal CTA | |
| 10 | Cost & funding | Tuition table (2026–27: $34,595/sem full-time; $2,450/unit part-time), fees, scholarships, assistantships, FAFSA/loans, international note | Labeled "2026–27"; link to live page |
| 11 | Careers | Link to career resources only | No fabricated stats |
| 12 | FAQ | Accordion: deadlines, GRE, English, funding, project-vs-thesis | `<details>`/`<summary>` |
| 13 | Contacts | Shidal + Benos (with the emails/phones/offices from DESIGN_NOTES §6) | Surfaced, prominent |
| 14 | Footer | Dept/school links, copyright, **unofficial-redesign disclaimer** | |

## 5. Placeholders & disclaimer

- Every unverifiable value (prerequisite course numbers, exact TOEFL new-scale wording) is marked with an inline HTML comment `<!-- TODO: verify -->` and, where user-facing, a subtle "verify" note or a link to the official source rather than a hardcoded guess.
- The S/M/T/A mapping is a **link**, never reproduced content.
- Footer disclaimer text (draft): *"This is an unofficial student redesign of the WashU MS in Computer Science page, created for CSE 2004 Web Development. It is not maintained by Washington University in St. Louis. For official, current information visit cse.washu.edu."*

## 6. Accessibility checklist

- Skip-to-content link; one H1; logical heading order; `aria-current` on active TOC item; `aria-expanded` on accordions; keyboard-operable path switcher (radio-group pattern); 4.5:1+ text contrast using approved brand pairs; visible focus states; no reliance on color alone; `prefers-reduced-motion` respected.

## 7. Milestones

1. **Scaffold** — `index.html` skeleton with all sections stubbed, tokens in `styles.css`.
2. **Header/nav + hero + at-a-glance** — establish visual direction.
3. **Requirements + path switcher** — core content + primary interaction.
4. **Admissions + cost/funding** — checklist, timeline, tuition table.
5. **FAQ + contacts + footer + disclaimer** — finishing content.
6. **Responsive & accessibility pass** — mobile nav, TOC collapse, contrast, keyboard.
7. **Verification pass** — cross-check every fact against the URLs in DESIGN_NOTES §6; resolve the `[verify]` items.

## 8. Open questions for you (before/at build time)

1. Do you want a **hero photo** at all, or is the typographic color-field hero (license-safe, distinctive) your preference? If a photo, it must come from an official WashU public asset — please provide one or confirm I should stay typographic.
2. Confirm the **prerequisite course numbers** (currently "CSE 1301 / CSE 2407" as written on the original page) against the Graduate Bulletin, or leave them flagged `[verify]`.
3. Should the **disclaimer** live only in the footer, or also as a small ribbon under the hero?

---

*Nothing in this plan requires a framework, a backend, or a build step. Ready to implement on approval.*
