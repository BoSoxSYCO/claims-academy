# QA Report — NA-M15-L02 "Exam-Day Logistics and What to Expect"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness (meta)
> Reviewed: package complete (lesson, SVG, 7 worksheets, quiz, answer key, teaching notes, glossary +6, cheat-sheet growth, README board).

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (exam readiness) | 97 | One clean objective: know how the exam works and how to approach it. |
| 2 | Reading level (FK ≤ 8) | 98 | Flesch-Kincaid 6.1; Reading Ease 74. First-draft pass, no remediation. |
| 3 | WHY-before-HOW | 97 | Opens with the "race with no start line" problem before the format facts. |
| 4 | Template fidelity (21 sections) | 97 | All sections present, in order, including §18 glossary updates and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; decision/flag branches labeled in words, not color. |
| 6 | Glossary coverage | 98 | 6 new terms added alphabetically (checker: 480 headwords, 0 errors); footer bumped to NA-M15-L02. |
| 7 | Accuracy / Prime Directive #7 | 99 | Confident facts stated (90 min, 720/900, PBQs, no guessing penalty); variable specifics (exact count, retake policy, price, delivery detail) marked `[VERIFY WITH CompTIA]`; no fabricated numbers. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (timed dry run), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 items, recall→applied ladder, scenario/PBQ-style closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | Exam-day section added to `exam-readiness-quick-reference.md`; README board updated (15-02 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Glossary insertions (6, alpha-checked)

| Term | Section | Position |
|------|---------|----------|
| N10-009 | N | before NAT (key `n10 009`) |
| Online proctoring | O | after Onboarding |
| Pearson VUE | P | after PDU |
| Performance-Based Question (PBQ) | P | after Peer-to-peer |
| Scaled score | S | after Scale |
| Voucher | V | after VLAN tag |

Alpha checker: 480 headwords, section + order errors = 0. Straight apostrophes only. Footer: `last: NA-M15-L02`.

## Term-coverage grep

Ran `grep -oE '\*\*[^*]+\*\*'`. All bolded exam terms verified in the glossary (N10-009, PBQ, Pearson VUE, scaled score, voucher, online proctoring). Standard callout/section labels kept. Generic emphasis de-bolded this pass: `**Network+**` (product name; N10-009 carries the term signal), `**flag**` (×2, verb), `**no**`, `**720 of 900**` (factual emphasis in summary).

## Module 15 status

Second lesson of the final module published. Board: 15-01, 15-02 ✅ Published; 15-03 → 15-07 Planned. Next: 15-03 — Performance-Based Question (PBQ) Practice.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L02 · Module 15_
