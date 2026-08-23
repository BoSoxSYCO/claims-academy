# QA Report — NA-M12-L01 "Documentation: Diagrams, Labels, and IPAM"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/12-network-operations/lessons/12-01-documentation-diagrams-labels-ipam.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95, after one readability remediation) — **opens Module 12**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | First pass **FK 8.1** (over gate) → remediated to **FK 7.8** (in target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; four cards titled by their question in words, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 B, Q5 B, Q6 False, Q7 B, Q8 Phys→B/Logic→C/IPAM→A, Q9 rack, Q10 phys/logic/IPAM — verified ✅ |
| Matching uniqueness | cross-check | 12.1.B Part 1 (1–5→A–E) and Part 2 (6–9→F–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |
| **Term coverage** | CLAUDE.md §13 | Grepped every bolded term; **Labeling** needed a glossary entry (added); de-bolded incidental "rack" so only "Rack diagram" is a term ✅ |
| Command accuracy | Prime Directive #7 | `ipconfig` real; learner records own address for their IPAM table; no fabricated output ✅ |

New glossary terms (7): **Physical diagram, Logical diagram, Rack diagram, Labeling, IPAM, Asset inventory, Baseline.** (Network diagram reused from Module 11.)
New cheat sheet created: `resources/cheat-sheets/network-operations-quick-reference.md` (Module 12).
Module 12 README status board populated (all 5 lessons; 12-01 Published).

> **Term-coverage note (the 11-08 lesson learned, applied):** Before publish I grep-listed every `**bold**` term in the lesson. Two needed attention: **Labeling** was bolded and defined but not yet in the glossary (added to the L section), and the word **rack** was incidentally bolded inside the Rack-diagram definition (de-bolded, since "Rack diagram" is the real term). All other bold spans are callout labels or emphasis, not glossary terms.

> **Readability remediation (CLAUDE.md §2):** First pass **FK 8.1** — over the ≤ 8 gate, driven by the inherently polysyllabic ops vocabulary (documentation, physical, logical, diagram, inventory, baseline; ~1.57 syllables/word). Fix: split long sentences across sections 2–3 into shorter ones, no jargon added, no exam terms dropped. Re-measured **FK 7.8** (12.6 words/sentence), in the 6–8 target. Syllables/word stays high because the required terms can't be simplified — acceptable now that the gate passes.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Physical vs. logical, IPAM, baseline, inventory, rack diagram all correct; maps to N10-009 3.2. |
| 2 | Reading level / clarity | 96 | FK 7.8 after remediation; building-blueprint analogy carries the types. |
| 3 | WHY-before-HOW structure | 97 | Opens with the "network in one person's head" failure before the doc types. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-08 and 08-03; every doc type defined; Labeling now covered. |
| 5 | Diagram quality & accessibility | 96 | Four-card 2×2 with each question; full alt text; labels carry meaning. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a document-your-own-network lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target physical/logical mix-ups and stale docs. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected; module-setup note. |
| 9 | Glossary & cross-refs | 97 | 7 terms added, alpha-verified, footer NA-M12-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 9, objective 3.2) conform. |

**All categories ≥ 95 after the readability remediation and the term-coverage fix.**

---
_NetworkAcademy+ · QA Report 12-01 · CompTIA Network+ N10-009 · Instructor materials_
