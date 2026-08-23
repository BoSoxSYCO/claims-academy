# QA Report — NA-M06-L03 "Fiber Optic Basics (Single vs. Multimode)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-03-fiber-optic-basics.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.8** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; SMF/MMF differ by core width + ray count + text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Core→B, Single-mode→A, Multimode→C verified; Q4/Q5 SMF/MMF correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Fiber optic cable, Core, Cladding, Mode, Single-mode fiber (SMF), Multimode fiber (MMF).**
Cheat sheet: `cabling-and-media-quick-reference.md` gained a Fiber optic section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | SMF/MMF (core, laser/LED, distance) and fiber-vs-copper advantages match N10-009 1.5. |
| 2 | Reading level / clarity | 97 | FK 6.8; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 96 | Opens with the flashlight-in-a-tube before internals. |
| 4 | Zero-assumed-knowledge | 96 | Contrasts with copper (06-01); ties to EMI/100 m limit. |
| 5 | Diagram quality & accessibility | 96 | Fiber cut-away + SMF/MMF panels; alt text; core width shown. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. flashlight-in-a-tube lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M06-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 06-03 · CompTIA Network+ N10-009 · Instructor materials_
