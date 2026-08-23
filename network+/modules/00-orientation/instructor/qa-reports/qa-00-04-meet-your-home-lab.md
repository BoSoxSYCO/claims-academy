# QA Report — NA-M00-L04 "Meet Your Home Lab — a Tour of Your Equipment"

> 🔒 Instructor QA record · **Module:** 00 · **Unit:** 1 · **Objective:** orientation (on-ramp)
> Reviewed: lesson + SVG + 7 worksheets + quiz + answer key + teaching notes + cheat-sheet growth + README board.

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (orientation) | 98 | One clean objective: recognize the four pieces of home-lab gear and what each does. |
| 2 | Reading level (FK ≤ 8) | 98 | Flesch-Kincaid 6.2; Reading Ease 76 — comfortable on-ramp level. First-draft pass. |
| 3 | WHY-before-HOW | 97 | Opens with "reading is good, touching is better" before the gear tour. |
| 4 | Template fidelity (21 sections) | 97 | All 21 sections present, in order, including §18 glossary note and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; gear labeled in words, not color. |
| 6 | Glossary coverage | 98 | No new terms — all gear terms exist already; grepped each first. Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | Dell PowerConnect 3424 kept general (24-port managed switch + console port); exact port layout/LEDs marked `[TO VERIFY ON HARDWARE]`; photos are `[PHOTO NEEDED]` placeholders (CLAUDE.md §12) — none fabricated; command output marked as varying. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (find and name your gear), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 gentle items, recall→apply ladder, scenario closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | "Home lab gear" section added to `orientation-quick-reference.md`; README board updated (00-04 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Glossary check (no insertions)

Grepped each candidate before writing: **Router** (M07-L01), **Switch** (M07-L01), **Managed switch** / **Console port** / **Uplink port** (M07-L05), **Ethernet** (M06-L05), **RJ45** (M06-L02), **Port** (M01-L03), **Link light** (M14-L05) all already exist. Reused and bold-linked; **nothing inserted** (per the 15-06 duplicate lesson). "Laptop" and the model name "Dell PowerConnect 3424" are not networking terms and were left unbolded/unglossarized. Footer unchanged (`last: NA-M00-L01`).

## Term-coverage grep

Bolded terms all resolve to existing glossary headwords (switch, managed switch, router, Ethernet, RJ45, console port, port, link light, uplink port). De-bolded non-term words: `**laptop**` and `**Dell PowerConnect 3424**` (a product/model name, not a glossary term). Standard callout/section labels kept.

## Prime Directive #7 detail

The switch is described only at a safe general level. Every hardware specific a reader might expect (exact port count/layout, LED colors/behavior, console cable pinout) is either omitted or marked `[TO VERIFY ON HARDWARE]`. No real photos were described as seen — all are `[PHOTO NEEDED: ...]` placeholders for the production team.

## Module 00 status

Board: 00-01 → 00-04 ✅ Published; 00-05 Planned. Next: 00-05 — Setting Up Your Workspace and a Lab Notebook (the final lesson of Module 00 and of the whole course).

## Curriculum-completion context

Modules 01–15 complete. Module 00 now at 4 of 5. One on-ramp lesson remains (00-05); publishing it completes all 16 modules (00–15).

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M00-L04 · Module 00_
