# QA Report — Lesson NA-M02-L05 "Reading Command Output Without Fear"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 1 fix)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (Label→C, Value→A, Section→B ✓).
- Glossary section order **and every section's internal order** verified programmatically.

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

**Measured reading level:** Flesch-Kincaid **6.0**, Reading Ease **73**. ✅

## Defect found & fixed
- **Professional appearance** — in the glossary S section, "Section" was placed after "Server" (should precede it). **Fixed:** reordered to Search box → Section → Server → Service…; a full within-section check now confirms every section is alphabetical. (New sections K, L, V were added correctly this lesson.)

## Notes verified
- Sample `ipconfig`/`ping` output is realistic; label:value structure taught accurately.
- Ping summary interpretation correct (0% loss perfect, 100% loss = unreachable); troubleshooting scenario models Domain-5 thinking.
- Module-wide recall references only published Module 02 lessons — no forward dependency.

## Module 02 status
Fifth and final Module 02 lesson. All of 02-01 → 02-05 are now Published. Module 02 (Windows & the Command Line) is content-complete.

## Sign-off
All eleven categories ≥ 95 after one fix. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 02-05 · CompTIA Network+ N10-009 · Instructor materials_
