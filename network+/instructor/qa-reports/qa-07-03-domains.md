# QA Report — NA-M07-L03 "Broadcast vs. Collision Domains"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/07-devices-and-switching/lessons/07-03-broadcast-collision-domains.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.0** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; domains shown by outline style (small dashed vs. large solid) + labels, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Hub→B, Switch→A, Router→C verified; Q3 hub=1, Q9 (5 collision/1 broadcast) correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |

New glossary terms (4): **Collision, Collision domain, Broadcast domain, CSMA/CD.**
Cheat sheet: `devices-and-switching-quick-reference.md` gained a Collision & broadcast domains section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Domain counting (hub 1, switch N/1, router per-side) and the mantra match N10-009 2.1. |
| 2 | Reading level / clarity | 96 | FK 7.0 on target; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with rooms + PA announcements before the terms. |
| 4 | Zero-assumed-knowledge | 96 | Builds on hub/switch/router (07-01) and broadcast flooding (07-02). |
| 5 | Diagram quality & accessibility | 96 | Hub/switch/router domains with outline styles + labels; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. draw-and-count lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations incl. counting scenarios; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 4 terms added, alpha-verified, footer dated NA-M07-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 07-03 · CompTIA Network+ N10-009 · Instructor materials_
