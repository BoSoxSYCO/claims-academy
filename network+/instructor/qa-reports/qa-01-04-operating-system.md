# QA Report — Lesson NA-M01-L04 "What an Operating System Does"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 2 fixes)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script (before and after edits).
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (OS→C, Application→A, Hardware→B ✓).
- Glossary verified alphabetical **and** free of duplicate section headers programmatically.

## Scores

| Category | Round 1 | Final |
|----------|:------:|:-----:|
| Technical accuracy | 96 | 96 |
| Reading level | 94 | 95 |
| Grammar | 96 | 96 |
| Flow | 96 | 96 |
| Workbook quality | 96 | 96 |
| Quiz quality | 96 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 96 | 96 |
| Professional appearance | **93** | **96** |
| **Minimum** | **93** | **95 ✅** |

**Measured reading level:** Flesch-Kincaid **7.9 → 7.7** after simplification (target ~7; gate <8). ✅

## Defects found & fixed
1. **Professional appearance** — a duplicate `## A` section was introduced in the glossary when adding "Application." **Fixed:** merged into the single A section; verified sections are unique and alphabetical (A C E G H I M O P R S T U W).
2. **Reading level** — lesson measured 7.9, close to the grade-8 gate (polysyllabic terms like "operating system"). **Fixed:** split two long sentences → 7.7 for margin.

## Notes verified
- `winver` and Settings → System → About steps accurate for current Windows.
- Correctly establishes that routers/switches run their own OS — the seed for Modules 07 and 11.
- Spaced recall references only Lessons 01-02/01-03 (published) — no forward dependency.

## Sign-off
All eleven categories ≥ 95 after two fixes. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 01-04 · CompTIA Network+ N10-009 · Instructor materials_
