# QA Report — NA-M13-L01 "Security Goals: Confidentiality, Integrity, Availability"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-01-security-goals-cia-triad.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 13**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.8** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three columns read by **word + letter labels** (C/I/A) and "kept safe by / broken when" text rows, not color ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 C, Q5 B, Q6 False, Q7 C, Q8 C→B/I→C/A→A, Q9 availability, Q10 integrity — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–3 → C/A/B) and Part 2 (4–6 → F/D/E) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 4 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (CIA triad, confidentiality, integrity, availability, checksum) resolve to glossary headwords; de-bolded "bank account" and "three goals" (generic emphasis) ✅ |
| Command accuracy | Prime Directive #7 | Concept lesson — **no commands run, no output claimed** ✅ |

New glossary terms (4): **Checksum, CIA triad, Confidentiality, Integrity.** (Availability reused from 12-03 as the "A".) Footer bumped to NA-M13-L01.
New cheat sheet created: `resources/cheat-sheets/network-security-quick-reference.md` (CIA-triad section).
Module 13 README: status board **populated with all 7 lessons**; 13-01 Published; module status → "In production — Unit 10."

> **Reading-level note:** FK 6.8 on the first pass — in target, no remediation. Short subject-verb-object sentences from the draft kept the syllable-dense security vocab (confidentiality, availability, integrity) under the gate, avoiding a 12-05-style remediation loop.

> **Scope note:** The roadmap scopes 13-01 to the CIA triad only; AAA (authentication/authorization/accounting) is its own lesson (13-03), and attacks are 13-02, so this lesson stays on one clean objective (4.1). Non-repudiation and hashing-vs-encryption are flagged as extension ideas, not taught here.

> **Term-coverage note:** "CIA" (the bare acronym) is emphasis on the glossary term "CIA triad" — covered. "bank account" and "three goals" were de-bolded as generic emphasis.

> **Accuracy note:** The CIA triad and the mapping of controls to goals (password → confidentiality, checksum → integrity, backup/redundancy → availability) are exam-correct for N10-009 objective 4.1. Nothing is run, so no device data is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | CIA triad + control-to-goal mapping correct; maps to N10-009 4.1. |
| 2 | Reading level / clarity | 97 | FK 6.8; bank-account and diary analogies carry it. |
| 3 | WHY-before-HOW structure | 97 | Opens with "what does secure even mean?" before the three goals. |
| 4 | Zero-assumed-knowledge | 96 | Reuses availability from 12-03; all new terms defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Three-column CIA triad; word+letter labels; full alt text; text-labeled rows. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. C/I/A sorting lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; scenario targets an integrity attack; CIA-vs-agency distractor. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions (security=secrecy, I=C) corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified (0 errors), footer NA-M13-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-01 · CompTIA Network+ N10-009 · Instructor materials · Module 13 begins_
