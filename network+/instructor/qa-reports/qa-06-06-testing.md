# QA Report — NA-M06-L06 "Cable Testing and Common Physical Problems"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-06-cable-testing-problems.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Closes Module 06**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.2** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; pass/fault shown by ✓/✗ + text, not color alone; tools + flow labeled ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Open→C, Short→A, Continuity→B verified; Q4 tester, Q5 toner correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |
| Encoding | manual | Stray mojibake char in ASCII diagram found and replaced with ✗ ✅ |

New glossary terms (6): **Continuity, Open, Short, Attenuation, Cable tester, Tone generator.**
Cheat sheet: `cabling-and-media-quick-reference.md` gained a Cable testing & faults section (completing the Module 06 reference).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Faults (open/short/miswire/split pair/attenuation/EMI) + tools match N10-009 1.5/5.2. |
| 2 | Reading level / clarity | 97 | FK 6.2; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 96 | Opens with the doctor's-checkup analogy before faults/tools. |
| 4 | Zero-assumed-knowledge | 96 | Capstone reusing interference (06-01), tab (06-02), pinout (06-04), 100 m limit. |
| 5 | Diagram quality & accessibility | 96 | Wire states + tester + toner + 6-step flow; ✓/✗ text, not color-only. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. check-the-basics lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M06-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 06 complete:** Lessons 06-01 → 06-06 all Published.

---
_NetworkAcademy+ · QA Report 06-06 · CompTIA Network+ N10-009 · Instructor materials_
