# QA Report — NA-M12-L05 "Common Network Policies and Best Practices"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/12-network-operations/lessons/12-05-common-network-policies.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95) · **Closes Module 12**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.9** after remediation (in the 6–8 target ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; four cards read by **word labels**, not color; onboarding→offboarding shown as an arrow ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 B, Q5 A, Q6 False, Q7 B, Q8 SLA→B/MOU→C/SOW→A, Q9 onboarding, Q10 offboarding + remote-access/account control — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–5 → C/D/A/E/B) and Part 2 (6–8 → H/F/G) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 11 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (AUP, BYOD, MOU, NDA, on/offboarding, password/remote-access/data-handling policy, SLA, SOW, policy) resolve to glossary headwords; remaining bold hits are callout labels / worksheet names / emphasis ✅ |
| Command accuracy | Prime Directive #7 | Paper/policy lesson — **no commands run, no output claimed** ✅ |

New glossary terms (11): **AUP (Acceptable Use Policy), BYOD (Bring Your Own Device), Data-handling policy, MOU (Memorandum of Understanding), NDA (Non-Disclosure Agreement), Offboarding, Onboarding, Password policy, Policy, Remote-access policy, SOW (Statement of Work).** (SLA reused from 12-03.) Footer bumped to NA-M12-L05.
Cheat sheet: `network-operations-quick-reference.md` gained the common-policies section.
Module 12 README: 12-05 Published (5 of 5) — **module marked ✅ Complete.**

> **Reading-level note:** First pass FK 8.8 — over the ≤8 gate, driven by dense policy vocabulary (avg syllables/word 1.59: *acceptable, agreement, memorandum, understanding, confidential, complexity, on/offboarding*). Remediated by splitting sentences in §2, §3, the big-idea box, the recap, and the intro, and swapping a few long words. Result **7.9** (syllables/word still 1.57 — inherent to the topic; words/sentence pulled from 14.5 → 12.8). The tool's "longest sentences" are structural artifacts (the quiz Q1 option block, the cheat-sheet table, the matching block, and the diagram alt text), not prose.

> **Term-coverage note:** "BYOD policy" / "remote-access" appear as descriptive shorthand around their glossary headwords ("BYOD (Bring Your Own Device)", "Remote-access policy") — covered, not missing. "honestly" and "Module 13 — Network Security" are emphasis/preview, not terms.

> **Accuracy note:** Policy definitions, the on/offboarding process, NDA, data-handling/retention, and the SLA vs. MOU vs. SOW distinction are all exam-correct for N10-009 objective 3.4. No device data fabricated (nothing is run).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Policy names + one-line meanings, on/offboarding, SLA/MOU/SOW correct; maps to N10-009 3.4. |
| 2 | Reading level / clarity | 95 | FK 7.9 after remediation; dense vocab is inherent but every term is defined. |
| 3 | WHY-before-HOW structure | 97 | Opens with "a workplace with no rules" before naming policies. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 12-01 (docs) and 12-04; reuses SLA from 12-03; all new terms defined. |
| 5 | Diagram quality & accessibility | 96 | Four-card 2×2; onboarding→offboarding arrow; word-labeled, full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. policy-drafting lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; scenario targets skipped offboarding + remote access. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions (offboarding optional, MOU=SOW) corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added, alpha-verified (0 errors), footer NA-M12-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 9, objective 3.4) conform. |

**All categories ≥ 95 after the reading-level remediation.**

---
_NetworkAcademy+ · QA Report 12-05 · CompTIA Network+ N10-009 · Instructor materials · Module 12 complete_
