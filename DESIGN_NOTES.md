# DESIGN NOTES — WashU MS in Computer Science Redesign

**Course:** CSE 2004 Web Development — Graduate Program Redesign (extra credit)
**Author:** Bobby Yu (current MS in CS student)
**Date:** 2026-11-24
**Status:** Research & design planning (no implementation yet)

---

## 1. Sources reviewed

| # | Source | URL | Reviewed? |
|---|--------|-----|-----------|
| 1 | Original WashU MS in CS page | https://cse.washu.edu/academics/graduate/MS-in-Computer-Science.html | ✅ Full content extracted |
| 2 | WashU CSE — Resources for Current Master's Students | https://cse.washu.edu/academics/graduate/current-students/Resources-for-Current-Masters-Students.html | ✅ |
| 3 | McKelvey Graduate Admissions (landing) | https://engineering.washu.edu/academics/graduate-admissions/ | ✅ |
| 4 | McKelvey Application Deadlines | https://engineering.washu.edu/academics/graduate-admissions/deadlines.html | ✅ |
| 5 | McKelvey Application Checklist | https://engineering.washu.edu/academics/graduate-admissions/application-checklist.html | ✅ |
| 6 | McKelvey Tuition & Financial Assistance | https://engineering.washu.edu/academics/graduate-admissions/tuition-financial-assistance/ | ✅ |
| 7 | WashU Brand Guides (overview) | https://marcomm.washu.edu/brand-guides/ | ✅ |
| 8 | WashU Brand Color Palette | https://marcomm.washu.edu/brand-color-palette/ | ✅ |
| 9 | WashU Typography | https://marcomm.washu.edu/typography/ | ✅ |
| 10 | WashU Official Logo Usage Guide | https://marcomm.washu.edu/official-logo-usage-guide/ | ✅ |
| 11 | Stanford CS Master's Overview | https://www.cs.stanford.edu/masters-program-overview | ✅ |
| 12 | CMU MS in CS | https://csd.cs.cmu.edu/academics/masters/ms-in-computer-science | ✅ |
| 13 | UIUC Siebel School MS Program | https://siebelschool.illinois.edu/academics/graduate/ms-program | ✅ (text only; colors/fonts inferred) |

**Access limitations (reported honestly):**
- `wustl-public.courseleaf.com/.../financial/` returned a TLS error; tuition was instead verified on the official `engineering.washu.edu` tuition page (source #6).
- The official S/M/T/A course mapping lives in a Google Sheet; its contents could not be retrieved via web fetch. The sheet's *existence* and the breadth rules themselves are confirmed on source #2, but the individual course lists are treated as **unverified** and will be represented as a linked reference, not reproduced.
- UIUC's page was analyzed as rendered text only; its exact palette/spacing was inferred, not measured.

---

## 2. The original page — what it does well and where it fails

**What it gets right**
- Real, accurate, detailed degree requirements (30-unit structure, breadth split, grading rules, capstone process).
- Up-to-date policy specifics (CSE 7998 model since Fall 2025; termination rules since Fall 2024).
- Named contacts with offices, phones, emails.
- Breadcrumbs and a rich global navigation already exist.

**Weaknesses (the redesign's mandate)**
1. **No tuition or cost anywhere.** The only finance hint is a trending-search link. This is the single biggest gap for prospective/international students.
2. **Admissions is a stub** — two deadlines and an "apply" link, with no documents, no GPA policy, no GRE policy, no English-proficiency minimums.
3. **No "at-a-glance" summary.** Units, duration, format, start terms, and prerequisites are buried in prose.
4. **Requirements are dense walls of text** with no visual breakdown of the 9/9/12 unit structure.
5. **Breadth course lists are only referenced**, not shown (they point to the current-students page).
6. **No research-opportunities section**; research appears only implicitly via the thesis/project path.
7. **No FAQ**, no career/outcomes framing, no international-student guidance.
8. **Copy inconsistencies**: "CSE2407" vs "CSE 2407", "listed above" vs "listed below", "5000-level" vs "500-level".
9. **Contacts are buried** at the bottom rather than surfaced where students need them.
10. **No clear next step / CTA hierarchy** — the page ends without guiding the user to a decision.

---

## 3. Reference universities — adopt vs. avoid

### Stanford (cs.stanford.edu/masters-program-overview)
**Adopt:** a factual overview paragraph stating units/timeline/degree-type up front; mirrored secondary navigation for orientation; skip-links + landmark semantics + back-to-top (accessibility scaffolding); serif-heading + sans-body academic tone.
**Avoid:** four identical full-width image cards that push real content down; redundant mega-menu + secondary nav; no admissions/deadline cues on the page; thin single-event section.

### Carnegie Mellon (csd.cs.cmu.edu)
**Adopt:** a clean separation of requirements (numbered list) → practical notes (prose) → next step (CTA + program email); a definitional footnote for grading terms; breadcrumbs; an inclusive "students come from many backgrounds" message.
**Avoid:** duplicate title/subtitle ("M.S. in Computer Science" twice); dense five-column footer; a decorative hero image that adds no information; nested menus that require JavaScript with weak fallback.

### UIUC Siebel School (siebelschool.illinois.edu)
**Adopt:** a degree-planning PDF alongside requirements; a worked coursework example; a credit-hour summary table; explicit policy-change notices; named advising contacts.
**Avoid:** the same requirements stated three different ways (scattered and partly contradictory); a course-number wall with no filters; no admissions/CTA in the body; an empty "Fax:" link defect.

**Cross-cutting lesson:** every reference either omits cost/admissions on the program page (Stanford, UIUC) or keeps it minimal (CMU). The redesign's differentiator is to put **cost, deadlines, and a clear application checklist directly on the page** — that is the information prospective students actually look for.

---

## 4. WashU brand system (verified)

### Colors
**Primary**
- WashU Red — `#BA0C2F` (Pantone 200). "Layouts should lead with red."
- WashU Green — `#215732` (Pantone 350). Use deliberately; red/green can clash for color-blind users.

**Accents** (support, not the main focus)
- Dark Red `#971B2F` · Dark Green `#13322B` · Coral `#FF6D6A` · Teal `#007D8A` · Gold `#F1B434` · Mint `#B5E3D8`

**Neutrals**
- Cool Gray `#D9D9D9` · Warm Gray `#D7D2CB` · Black `#000000` · White `#FFFFFF`

**Accessibility (approved ratios from MarComm):** white-on-red `6.60:1`, white-on-green `8.49:1`, black-on-Cool-Gray `14.88:1`. Use full-opacity WashU Red + Dark Red (never reduce red opacity).

### Typography
- **IvyPresto Headline** (serif) — display/headlines. Close to the wordmark; must not be used to typeset "WashU" unless surrounding copy is also IvyPresto, and never as a logo substitute.
- **IvyStyle Sans** (sans) — body.
- **IvyPresto Text** (serif) — body alternative.
- **Fallbacks (non-Adobe users): Georgia (serif) and Calibri (sans).**
- Rules: sentence case preferred; left-aligned ragged right.

> **Licensing note for this build:** the brand faces are Adobe Fonts, not freely redistributable. For a GitHub Pages static site we will use the *official WashU fallbacks* — Georgia for display serif and a system sans stack approximating IvyStyle Sans/Calibri — rather than an unlicensed font. This is license-safe and brand-compliant.

### Logo
- "Official WashU logo" = **shield + wordmark**, reproduced only from approved artwork.
- Full-color logo on light backgrounds; reverse logo on dark backgrounds.
- Clear space = height of the shield on all sides; digital minimum 30 px high.
- Shield must stay transparent (never filled white); wordmark never used alone; never recolor or re-typeset.
- One university logo per layout.

> **Note for the build:** we must not generate a fake WashU logo. The real mark is protected artwork. The plan will use the WashU name in text (live type, per brand guidance) and, if a logo image is available from an official public source, reference it with clear attribution — otherwise a text-only lockup.

---

## 5. Prospective student needs (informed by being in the program)

A prospective applicant — domestic or international — arrives asking, in roughly this order:

1. **What is this degree, and is it for me?** (positioning, audience, format/length)
2. **The numbers that gate my decision:** units, duration, cost, deadlines, GRE, TOEFL, GPA, format (on-campus vs online).
3. **What will I actually study?** (requirements, breadth areas, course/project/thesis options)
4. **Can I do research?** (opportunities, thesis path)
5. **Can I get in?** (documents, English requirements, deadlines, fee)
6. **Can I afford it, and is there funding?** (tuition, scholarships, assistantships, loans — international students especially need the funding section)
7. **Where does it lead?** (career resources — without fabricated outcomes)
8. **Who do I ask?** (contacts, FAQ)

The original page answers only #3 and #8, partially.

---

## 6. Verified program facts + source URLs

> ⚠️ All facts below are cited to official WashU pages. Facts flagged **[verify]** came from a secondary/aggregator search result and should be re-confirmed on an official page before the build.

### Degree requirements (sources #1, #2)
- **30 units total** for the MS.
- **18 units** must be CSE at the 5000 level or higher:
  - **Breadth (9 units):** one **T** (Theory), one **S** (Software Systems), one **M** (Machines) **or A** (Applications) course.
  - **Departmental (9 units):** any CSE 5000-level course.
- **12 units electives:** CSE 4000- or 5000-level.
- **Out-of-department:** up to 6 units may count (Graduate Coordinator approval; electives only; cap raised to 12 only by exception).
- **Excluded:** independent study (CSE 400/4000, CSE 500/5999) and any course marked "N".
- **Grading:** coursework-only = all 30 units graded C− or better; 3-unit project = 27 graded + CSE 7998 P/NP; 6-unit project/thesis = 24 graded + CSE 7998.
- **Minimum program GPA 2.70** (School of Engineering policy).
- **Prerequisites:** CSE 1301 and CSE 2407 (or equivalents) — complete, test out, or take at start. **[verify course numbers against the Graduate Bulletin — see §7.]**
- **S/M/T/A course mappings:** live in a Google Sheet on source #2 (contents unverified; will be a linked reference).

### Capstone: project / thesis (sources #1, #2)
- Since **Fall 2025**, project/thesis students register for **CSE 7998**.
- Options: **3-unit project**, **6-unit project**, **6-unit thesis**.
- Units count toward the 30 only after a successful defense. Thesis waives breadth after defense.
- CSE 7998 is letter-graded each semester; a 6-unit sequence requires C− or higher in semester one to continue.
- Process: proposal (≥72 h before add/drop) → committee approval → mid-point progress report (two-semester work) → defense → final report.
- Termination rules (Fall 2024 onward) affect W/failing grades; first-semester work may be defended as a 3-unit project.

### Admissions (sources #4, #5 — official)
- **Application fee:** $75, non-refundable (waived for current WashU students/employees and info-session attendees).
- **Documents:** transcripts (all schools), **3 letters of recommendation** (full-time), statement of purpose (1–2 pages), resume/CV.
- **GRE:** **optional** for full-time master's; not required for part-time. "Will neither help nor hurt."
- **English proficiency (international):** TOEFL iBT 90 (old scale) / 5.0 (new scale), IELTS 6.5, Duolingo 125.
- **GPA:** no stated minimum; requires an earned (or in-progress) bachelor's degree.
- **Deadlines** (full-time master's; all close 11:59 PM ET):
  - Fall: opens **Sept 1**, deadline **March 1**, decision by **March 31**, reply by **May 1**. Early decision **Dec 31**.
  - Spring: opens **March 1**, deadline **Oct 1**, decision by **Oct 15**, reply by **Nov 1**.
- **Part-time:** Fall deadline July 15; Spring deadline Dec 1 (part-time requires US citizenship/PR/eligible visa).
- Application portal: https://gradadmit.wustl.edu/apply/

### Tuition & funding (source #6 — official, 2026–27)
- **Full-time (9–21 units): $34,595/semester** ($69,190/year). Over 21 units: +$2,883/unit.
- **Part-time (≤8 units): $2,450/unit.**
- **Fees (full-time):** Graduate Activity $15/sem; Health & Wellness $350/sem; Student Health Insurance $2,923 (fall).
- **Estimated total cost of attendance: $99,120.**
- **Scholarships:** Master's Excellence Scholarship (merit, up to $16,000, no separate application); Bachelor's/Master's 50%; Dual Degree 50%.
- **Assistantships:** Chair's Fellowship (full tuition + health subsidy); MS Research Assistantship (full tuition + stipend, 2 years); Master's Fellowship (15% tuition).
- **Financial aid:** FAFSA (school code 002520); Direct Unsubsidized Loan up to $20,500/yr; Work-Study; Yellow Ribbon for veterans.
- Contact: mckelveygradfinancialaid@wustl.edu · 314-935-1155.

### Contacts (source #1)
- **Jonathan Shidal** — Master's Program Director, Lopata Hall 204A, shidalj@wustl.edu
- **Cleopatra Benos** — Graduate Program Coordinator, McKelvey Hall 1010, 314-935-6132, benos@wustl.edu

---

## 7. Unverified / flagged items

1. **Prerequisite course numbers** ("CSE 1301", "CSE 2407") — as written on the original page, but the new WashU numbering should be confirmed against the Graduate Bulletin before the build. **[verify]**
2. **S/M/T/A course lists** — exist only in a Google Sheet; contents not retrievable. Will be a *link*, not reproduced content. **Do not invent courses.**
3. **TOEFL "new scale 5.0 / old scale 4.5 ≥ 90"** wording on the official checklist is ambiguous; surface as "TOEFL iBT 90" and note the new-scale equivalent. **[verify exact figure]**
4. **Tuition figures** are 2026–27 and change annually; label clearly as "2026–27" and link to the live page.
5. **Any career/outcome statistics** — none used; the redesign intentionally omits outcomes claims to avoid fabrication.
6. **UIUC visual details** (exact palette/spacing) were inferred, not measured.

---

## 8. Proposed information architecture

Single page, ordered to match the prospective-student journey, with a sticky in-page table of contents.

1. **Global header** — text wordmark/lockup + primary nav (Program, Requirements, Admissions, Cost & Funding, FAQ) + "Apply" button.
2. **Breadcrumb** — Home › Academics › Graduate Programs › MS in Computer Science.
3. **Hero (typographic)** — program name, one-sentence positioning, key facts strip (30 units · Fall/Spring · On-campus · GRE optional).
4. **Program at a glance** — facts panel (units, duration, format, deadlines, GRE/TOEFL/GPA, cost anchor).
5. **Overview / Is this for you?** — positioning + audience (incl. "students from many backgrounds").
6. **Degree requirements** — interactive path switcher (Coursework-only / 3-unit project / 6-unit project / Thesis) → unit breakdown (Breadth 9 / Departmental 9 / Electives 12), breadth T·S·M/A explanation, grading & GPA rules, prerequisites.
7. **Curriculum & breadth** — the T/S/M/A area definitions + link to official course mapping; capstone options.
8. **Research opportunities** — thesis path + link to faculty research areas (11 areas listed on the CSE site).
9. **Admissions** — checklist (documents, GRE, English minimums), deadlines timeline, fee, application portal CTA.
10. **Cost & funding** — tuition table, fees, scholarships/assistantships, financial aid (domestic + international note).
11. **Careers** — link to career resources (no fabricated outcomes).
12. **FAQ** — accessible accordion (deadlines, GRE, English, funding, project-vs-thesis).
13. **Contacts** — program director + coordinator (surfaced, not buried).
14. **Footer** — department/school links, contact, copyright, and the **unofficial-redesign disclaimer**.

---

## 9. Visual design direction

**Concept: "academic prospectus / editorial handbook," not a SaaS landing page.**

- **Editorial typography.** Large Georgia-serif display for H1/H2 (official WashU fallback for IvyPresto Headline), system sans for body. Section labels styled as small red "running heads" with numbers ("01 · Degree Requirements") for a catalog feel.
- **Hairline rules over cards.** Sections separated by 1 px warm-gray rules and generous whitespace — no rounded cards, no gradients, no glassmorphism.
- **Color restraint, brand-led.** White and warm off-white backgrounds; black text; **WashU Red `#BA0C2F`** for the top bar, primary CTA, links, and thin accents; **WashU Green `#215732`** used only as a small "funding/cost" accent. Warm Gray `#D7D2CB` for the facts panel and subtle banded backgrounds.
- **Typographic hero, not a photo.** A color-field hero (deep red band or warm off-white with a red rule) carrying the program name in large serif — distinctive vs. the references' hero photos and license-safe (no unlicensed photography).
- **"At a glance" facts panel** — a bordered, structured block (not a rounded card) with a small grid of the decision-driving numbers. Right rail on desktop; compact summary near the top on mobile.
- **Sticky in-page TOC** with scroll-spy, so the long requirements/admissions content stays navigable.
- **Deadlines timeline** — a clean date list (opens → deadline → decision → reply), no animation.

**Mobile behavior:** single column; facts panel stacks; sticky TOC collapses into a top "On this page" dropdown; the requirements path-switcher becomes a horizontal segmented control; nav collapses to a hamburger.

---

## 10. Interactions (minimal, accessible)

1. **Degree path switcher** — segmented control (Coursework-only / 3-unit project / 6-unit project / Thesis) that swaps the unit-breakdown and grading summary. Vanilla JS, no framework.
2. **FAQ accordion** — native `<details>`/`<summary>` where possible (progressive enhancement) or a tiny JS toggle.
3. **Sticky TOC with scroll-spy** — IntersectionObserver, `aria-current` for the active item.
4. **"Apply" CTA** — persistent in header; secondary CTAs at admissions/cost section ends.
5. **Skip-to-content link** and full landmark/heading semantics throughout.

**Deliberately omitted:** carousels, hover-tilt, parallax, count-up stats, dark-mode toggle, i18n. None serve the task.

---

## 11. Content decisions (include / omit)

**Include** — everything in §8 (all verified). Research opportunities via the thesis path + link to the 11 research areas. International-student notes: English minimums, part-time visa restriction, funding/loan constraints. A clearly-worded **disclaimer** (e.g., in the footer): *"This is an unofficial student redesign of the WashU MS in Computer Science page, created for CSE 2004. It is not maintained by Washington University; visit cse.washu.edu for official information."*

**Omit** — fabricated statistics, student testimonials, invented career outcomes, unlicensed photos, fake logos, generic marketing slogans ("Shape the future"), decorative animations, redundant nav mega-menus.
