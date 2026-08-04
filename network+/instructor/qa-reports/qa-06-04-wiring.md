# QA Report — NA-M06-L04 "Straight-Through vs. Crossover, T568A/B"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-04-straight-through-crossover.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.2** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; wire colors NAMED in text, cable types labeled, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Straight-through→B, Crossover→A, Auto-MDI-X→C verified; Q2 (swap orange/green), Q9 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Pinout, T568A, T568B, Straight-through cable, Crossover cable, Auto-MDI-X.**
Cheat sheet: `cabling-and-media-quick-reference.md` gained a Wiring section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | T568A/B orange-green swap, straight/crossover use, Auto-MDI-X all match N10-009 1.5. |
| 2 | Reading level / clarity | 97 | FK 6.2; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 96 | Opens with the mouth-to-ear problem before the standards. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 06-01/06-02; ties to the RJ45's 8 pins. |
| 5 | Diagram quality & accessibility | 96 | Two standards with named colors + two cable types + Auto-MDI-X note; alt text spells it all out. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. compare-both-ends lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M06-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe; wire colors named for B&W print (never color-only). |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 06-04 · CompTIA Network+ N10-009 · Instructor materials_
