# QA Report — Lesson NA-M02-L04 "Your First Commands: ipconfig, ping, cd, dir"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 1 fix)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (ipconfig→C, ping→A, dir→B ✓).
- Glossary section order **and** within-C entry order verified programmatically.

## Scores

| Category | Round 1 | Final |
|----------|:------:|:-----:|
| Technical accuracy | 96 | 96 |
| Reading level | 97 | 97 |
| Grammar | 96 | 96 |
| Flow | 96 | 96 |
| Workbook quality | 96 | 96 |
| Quiz quality | 96 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 96 | 96 |
| Professional appearance | **94** | **96** |
| **Minimum** | **94** | **96 ✅** |

**Measured reading level:** Flesch-Kincaid **6.5**, Reading Ease **71**. ✅

## Defect found & fixed
- **Professional appearance** — the glossary entry `cd` was misfiled under section **D** (it belongs in **C**). **Fixed:** moved to the C section; within-C alphabetical order verified (cd, client, command, command line, command prompt, computer, control panel, cpu).

## Notes verified
- Command syntax accurate (`ipconfig`, `ping <addr>`, `cd`, `cd ..`, `dir`, `cd %USERPROFILE%`); realistic sample output.
- IP-address depth correctly **deferred to Module 08** — the lesson explicitly says so, honoring the no-future-knowledge rule while giving a safe first exposure.
- The troubleshooting scenario (gateway vs. 8.8.8.8) models Domain-5 thinking well.
- Spaced recall references only Lesson 02-03 (published) — no forward dependency.

## Sign-off
All eleven categories ≥ 95 after one fix. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 02-04 · CompTIA Network+ N10-009 · Instructor materials_
