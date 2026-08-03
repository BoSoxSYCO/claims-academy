# QA Report — Lesson NA-M01-L05 "Hardware vs. Software"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 1 fix)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (RAM→B, browser→A, cable→C ✓).
- Glossary verified alphabetical and unique (A C E F G H I M O P R S T U W).

## Scores

| Category | Round 1 | Final |
|----------|:------:|:-----:|
| Technical accuracy | 96 | 96 |
| Reading level | 97 | 97 |
| Grammar | 96 | 96 |
| Flow | 96 | 96 |
| Workbook quality | **93** | **96** |
| Quiz quality | 96 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 96 | 96 |
| Professional appearance | 96 | 96 |
| **Minimum** | **93** | **96 ✅** |

**Measured reading level:** Flesch-Kincaid **6.6**, Reading Ease **70**. ✅

## Defect found & fixed
- **Workbook quality** — fill-in-the-blank worksheet 1.5.A had two near-duplicate "memory trick" items (Q7 and Q10 mirrored the same sentence). **Fixed:** rewrote Q10 as a distinct item ("Software is like the ______ that tell the hardware what to do" → *ideas*); answer key still matches.

## Notes verified
- `winver`/Settings → Apps steps accurate; "Windows = software" reinforced.
- Introduces firmware correctly as software built into a device (bridges to the switch).
- Spaced recall references only Lessons 01-02/01-04 (published) — no forward dependency.

## Sign-off
All eleven categories ≥ 95 after one fix. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 01-05 · CompTIA Network+ N10-009 · Instructor materials_
