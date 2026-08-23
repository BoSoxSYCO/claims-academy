# QA Report — NA-M15-L06 "Weak-Spot Review and Final Flashcard Sprint"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness
> Reviewed: companion lesson + core flashcard deck + 7 worksheets + short quiz + quiz key + teaching notes + SVG + cheat-sheet growth + README board.

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (exam readiness) | 98 | One clean objective: turn weak-domain logs into a focused active-recall sprint. |
| 2 | Reading level (FK ≤ 8) | 97 | Companion lesson Flesch-Kincaid 7.0; Reading Ease 69. Flashcard deck FK 8.0 (terse Q/A reference, at gate — acceptable for a reference table). |
| 3 | WHY-before-HOW | 97 | Opens with "re-reading feels productive but isn't" before the method. |
| 4 | Template fidelity (21 sections) | 97 | Companion lesson has all 21 sections; the deck is a separate deliverable in `assessments/flashcards/`. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; box moves shown by arrows/labels, not color. |
| 6 | Glossary coverage | 98 | Bolded terms (active recall, spaced repetition, flashcard, baseline) all already in glossary from NA-M10-L05. **No new terms; footer unchanged** — see correction note below. |
| 7 | Accuracy / Prime Directive #7 | 99 | Every flashcard answer traces to a taught module (ports M10, OSI M05, IP/subnet M08, devices/VLANs M06/07/11, ops M12, security M13, troubleshooting M14); sample outputs `[TO VERIFY ON HARDWARE]`. No fabricated ports/specs. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (self-quiz / Leitner log), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 items on review technique; recall→applied ladder, scenario closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | Weak-spot + flashcards section added (with Leitner boxes and deck pointer); README board updated (15-06 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1 per file, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Deliverable: core flashcard deck

`assessments/flashcards/flashcards-core.md` — seven decks of high-yield, taught-content facts:
1. Common ports (M10), 2. OSI 7 layers + PDUs (M05), 3. IP/subnet masks/APIPA/DNS/DHCP/ARP (M08), 4. devices/media/VLANs (M06/M07/M11), 5. operations (M12), 6. security CIA/AAA/attacks (M13), 7. troubleshooting method + CLI tools (M14). Port numbers are card facts, not glossary headwords (correctly not glossarized).

## Glossary correction (caught in QA)

Initial draft treated "active recall," "spaced repetition," and "flashcard" as new and inserted them + bumped the footer. QA found all three were already defined in the glossary (first taught NA-M10-L05). The duplicate entries were removed, the footer reverted to `last: NA-M15-L02`, and §18 + the teaching notes were corrected to "No new terms (reused from M10-L05)." Alpha checker after cleanup: 480 headwords, 0 errors.

## Term-coverage grep

Method-step spine kept bold (**Prioritize**, **Drill**, **Confirm**, **Space**); glossary-backed bolds verified (active recall, spaced repetition, flashcard, baseline). De-bolded descriptive-phrase emphases: `**closed**` and `**cold, correctly, twice, spaced apart**`.

## Module 15 status

Board: 15-01 → 15-06 ✅ Published; 15-07 Planned (the final lesson). Next: 15-07 — Your 7-Day Pre-Exam Plan, which completes Module 15 and the entire course.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L06 · Module 15_
