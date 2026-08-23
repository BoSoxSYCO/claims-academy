# QA Report — NA-M06-L02 "Connectors and Jacks (RJ45, Keystones)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-02-connectors-and-jacks.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.0** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; RJ45/RJ11 differ by size + label, parts text-labeled ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping RJ45→B, Patch panel→A, Patch cable→C verified; Q3 (8 pins), Q5 (RJ11 smaller) correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |

New glossary terms (7): **Connector, Jack, RJ45, RJ11, Keystone jack, Patch panel, Patch cable.**
Cheat sheet: `cabling-and-media-quick-reference.md` gained a Connectors & jacks section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | RJ45 (8 pins) vs. RJ11, connector/jack, keystone/patch panel all match N10-009 1.5. |
| 2 | Reading level / clarity | 98 | FK 5.0; short, concrete sentences. |
| 3 | WHY-before-HOW structure | 96 | Opens with plug-and-outlet before the parts. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 06-01; ties 8 pins to the 8 wires. |
| 5 | Diagram quality & accessibility | 96 | Connector/jack, RJ45-vs-RJ11 size, building path; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. seat-an-RJ45 lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M06-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 06-02 · CompTIA Network+ N10-009 · Instructor materials_
