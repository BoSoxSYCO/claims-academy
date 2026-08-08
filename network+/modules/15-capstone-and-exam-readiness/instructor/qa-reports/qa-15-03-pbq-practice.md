# QA Report — NA-M15-L03 "Performance-Based Question (PBQ) Practice"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness
> Reviewed: package complete (lesson, SVG, 7 worksheets, quiz, answer key, teaching notes, cheat-sheet growth, README board).

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (exam readiness) | 98 | One clean objective: recognize PBQ formats and apply a systematic five-step approach. |
| 2 | Reading level (FK ≤ 8) | 98 | Flesch-Kincaid 5.9; Reading Ease 77. First-draft pass, no remediation. |
| 3 | WHY-before-HOW | 97 | Opens with "PBQs feel scary" and the time danger before the method. |
| 4 | Template fidelity (21 sections) | 97 | All sections present, in order, including §18 glossary note and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; steps/formats labeled in words, not color. |
| 6 | Glossary coverage | 98 | All bolded terms verified in `glossary-all.md`; no new terms (PBQ added in 15-02). Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | Three worked PBQs reuse taught content; all IP/port values are varying examples marked `[TO VERIFY ON HARDWARE]`; crossover/auto-MDIX nuance marked `[VERIFY WITH CompTIA]`. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (three PBQs on paper), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 items, recall→applied ladder, PBQ-style scenario closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | PBQ-practice section added to `exam-readiness-quick-reference.md`; README board updated (15-03 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Term-coverage grep

Ran `grep -oE '\*\*[^*]+\*\*'`. Bold classes kept by design:

- **Five-step spine** — `**Read** **Plan** **Do** **Guess** **Check**` are the named-phase method labels (same convention as prior lessons' method-step spines), kept bold, not treated as glossary terms.
- **Format labels** — the three PBQ format names (Drag-and-drop / matching, Fill-in / configure, Label / identify) are structural list labels.
- **Standard callout labels** — Tip / Watch out / Exam tip / Lab link, plus section-frame labels.

Generic emphasis de-bolded this pass (lesson + quiz copies): `**first**`, `**each**`, `**255.255.255.0**` (value), `**PC to a switch**` (phrase). Every exam term left bold verified in the glossary: Performance-Based Question (PBQ), OSI model, subnet mask, default gateway, straight-through, crossover, fiber, IP address.

## Glossary

No insertions. §18 states "No new terms" — PBQ was added in 15-02; the rest are earlier-module vocabulary. Glossary footer unchanged (`last: NA-M15-L02`).

## Module 15 status

Third lesson of the final module published. Board: 15-01, 15-02, 15-03 ✅ Published; 15-04 → 15-07 Planned. Next: 15-04 — Full-Length Practice Exam #1 + Review.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L03 · Module 15_
