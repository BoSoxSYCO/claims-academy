# QA Report — NA-M00-L02 "How This Academy Works"

> 🔒 Instructor QA record · **Module:** 00 · **Unit:** 1 · **Objective:** orientation (on-ramp)
> Reviewed: lesson + SVG + 7 worksheets + quiz + answer key + teaching notes + cheat-sheet growth + README board.

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (orientation) | 98 | One clean objective: know how the course is organized and how to work through one lesson. |
| 2 | Reading level (FK ≤ 8) | 98 | Flesch-Kincaid 6.2; Reading Ease 75 — comfortable on-ramp level. First-draft pass. |
| 3 | WHY-before-HOW | 97 | Opens with "a course you understand is one you'll finish" before the structure tour. |
| 4 | Template fidelity (21 sections) | 97 | All 21 sections present, in order, including §18 glossary note and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; tree labeled in words, not color. |
| 6 | Glossary coverage | 98 | No new terms — course-structure words (module, lesson, workbook, quiz, cheat sheet, glossary) are not networking terms and were intentionally left unbolded and unglossarized. Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | Describes only what exists in this repo (lessons, workbooks, quizzes, answer keys, cheat sheets, one glossary, labs, two practice exams, flashcard deck). No promised videos, logins, auto-grading, or progress tracking. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (tour the course), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 gentle items, recall→apply ladder, scenario closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | "How the course works" section added to `orientation-quick-reference.md`; README board updated (00-02 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Term-coverage grep

Ran `grep -oE '\*\*[^*]+\*\*'`. **Course-structure words de-bolded** (modules, units, lessons, workbook, quiz, cheat sheet, glossary, practice exams, flashcards, Labs, and the phrase "in order") — these describe the course's construction, are not glossary/networking terms, and so should not carry key-term bolding. The **§5 vocabulary table intentionally lists them without bold**, consistent with them not being glossary headwords. Kept bold: the five routine-step verbs (**Read**, **Look**, **Do**, **Take**, **Keep**) as the lesson's named-phase spine, and the standard callout labels.

## Glossary

No insertions. §18 "No new terms" — grepped candidate structure words first; none belong in the networking glossary. Footer unchanged (`last: NA-M00-L01`).

## Module 00 status

Board: 00-01, 00-02 ✅ Published; 00-03 → 00-05 Planned. Next: 00-03 — How to Study So It Sticks.

## Curriculum-completion context

Modules 01–15 complete. Module 00 now at 2 of 5. Three on-ramp lessons remain (00-03 → 00-05) to complete all 16 modules (00–15).

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M00-L02 · Module 00_
