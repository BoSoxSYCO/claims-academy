# QA Report — NA-M04-L02 "Nodes, Links, and the Idea of a Connection"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/04-networking-fundamentals/lessons/04-02-nodes-links-connections.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.9** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`, solid vs. dashed lines (color not sole signal), every node/link labeled ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Node→C (device), Link→A (connection), Wireless link→B (radio) verified ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson prose ✅ |
| Glossary order | alpha checker | All sections in order; new terms placed correctly ✅ |

New glossary terms (6): **Node, Link, Endpoint, Connection, Wired link, Wireless link.**
Cheat sheet: `networking-fundamentals-quick-reference.md` gained a "Nodes and links" section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Node/link/endpoint match N10-009 usage; diagram-reading skill flagged. |
| 2 | Reading level / clarity | 98 | FK 5.9; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the problem of "scary diagrams," then the two primitives. |
| 4 | Zero-assumed-knowledge | 97 | Builds only on Module 01–04-01; no forward terms. |
| 5 | Diagram quality & accessibility | 96 | Labeled nodes/links, legend, solid/dashed, alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. draw-your-diagram lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→scenario ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M04-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables, standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 04-02 · CompTIA Network+ N10-009 · Instructor materials_
