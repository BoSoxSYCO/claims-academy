# QA Report — Lesson NA-M01-L06 "What a Server and a Client Are"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95, first pass)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (Client→C, Server→A, Request→B ✓).
- Glossary verified alphabetical and unique (A C E F G H I M O P R S T U W; 31 entries).

## Scores

| Category | Score |
|----------|:-----:|
| Technical accuracy | 96 |
| Reading level | 97 |
| Grammar | 96 |
| Flow | 96 |
| Workbook quality | 96 |
| Quiz quality | 96 |
| Hands-on activity | 96 |
| Diagrams | 96 |
| Learning effectiveness | 96 |
| Engagement | 96 |
| Professional appearance | 96 |
| **Minimum** | **96 ✅** |

**Measured reading level:** Flesch-Kincaid **6.9**, Reading Ease **69** (on the grade-7 target). ✅

## Findings
No sub-95 defects. Verified:
- The `ping` lab correctly warns that some servers ignore ping ("Request timed out" is acceptable) and offers the browser step as a fallback — no false promise.
- Objective IDs include the first "1.0" tag (Networking Concepts), correctly marking this lesson as the bridge into the tested domains.
- Spaced/module recall references only Module 01 lessons (all published) — no forward dependency.

## Module 01 status
This is the sixth and final Module 01 lesson. All of 01-01 → 01-06 are now Published. Module 01 (Computer Foundations) is content-complete.

## Sign-off
All eleven categories ≥ 95. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 01-06 · CompTIA Network+ N10-009 · Instructor materials_
