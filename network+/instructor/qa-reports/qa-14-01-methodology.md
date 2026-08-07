# QA Report — NA-M14-L01 "The CompTIA Troubleshooting Methodology"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-01-troubleshooting-methodology.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 14**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.4** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; seven numbered steps; the loop-back is a **labeled arrow** ("theory wrong → new theory"), not color-coded ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 C, Q4 B, Q5 C, Q6 False, Q7 B, Q8 Identify→B/Test→C/Document→A, Q9 implement, Q10 identify — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (7 step names → 1–7) and Part 2 (1–3 → B/C/A) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 3 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; the 3 new exam terms resolve; the seven **step names** are kept bold as the named phases of the (glossaried) methodology; de-bolded generic emphasis (method, next, first, wrong, seven steps, one thing at a time, preventive measures, documenting) ✅ |
| Command accuracy | Prime Directive #7 | Concept lesson — **no commands run**; real command-line tools begin in 14-02 ✅ |

New glossary terms (3): **Troubleshooting methodology, Theory of probable cause, Escalate.** (Documentation reused from 12-01 for step 7.) Footer bumped to NA-M14-L01.
New cheat sheet created: `resources/cheat-sheets/troubleshooting-quick-reference.md` (the 7-step method).
Module 14 README: status board **populated with all 7 lessons**; 14-01 Published; module status → "In production — Unit 11."

> **Reading-level note:** FK 6.4 on the first pass — in target, no remediation. Short-sentence-from-draft discipline carried straight into the new module.

> **Term-coverage note:** The seven step names (Identify, Theory, Test, Plan, Implement, Verify, Document) are the ordered phases of the glossaried "Troubleshooting methodology," not seven separate glossary entries. They're bolded on introduction as the method's named phases — a deliberate style choice for a process lesson — while the three testable concepts (methodology, theory of probable cause, escalate) each have their own glossary entry. Genuine generic emphasis was de-bolded.

> **Scope note:** Kept to objective 5.1 (the methodology). The command-line tools that *test theories* and *verify fixes* are taught starting in 14-02, keeping this lesson to one clean objective: the method and its order.

> **Accuracy note:** The seven-step order, the loop-back from a disproven theory, escalation, and end-of-process documentation are exam-correct for N10-009 objective 5.1. No device output is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Seven steps, order, and loop-back all correct; maps to N10-009 5.1. |
| 2 | Reading level / clarity | 97 | FK 6.4; doctor-visit analogy carries the method. |
| 3 | WHY-before-HOW structure | 97 | Opens with "random guessing wastes time and can make things worse." |
| 4 | Zero-assumed-knowledge | 97 | Reuses Documentation (12-01); new terms defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Seven-step flowchart with a labeled loop-back arrow; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a walk-a-problem lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; "next step" ordering; fix-before-identify scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all three misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 3 terms added, alpha-verified, footer NA-M14-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objective 5.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-01 · CompTIA Network+ N10-009 · Instructor materials · Module 14 begins_
