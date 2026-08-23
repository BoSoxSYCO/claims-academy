# QA Report — Lesson NA-M03-L01 "Why Computers Only Understand 1s and 0s"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 1 fix)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, new Module 03 cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (Bit→C, Binary→A, Transistor→B ✓).
- Glossary section order **and** every section's internal order verified programmatically.

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

**Measured reading level:** Flesch-Kincaid **6.3**, Reading Ease **72**. ✅

## Defect found & fixed
- **Professional appearance** — in the glossary D section, "Digital" was placed after "dir" (should precede it: dig… < dir…). **Fixed:** reordered to Default gateway → Digital → dir → Directory → Drive; a full within-section check confirms every section is alphabetical. (New section B added correctly.)

## Notes verified
- Calculator Programmer-mode steps accurate; sample conversions correct (5→101, 10→1010, 255→11111111).
- Binary framed as the *same* numbers written differently — dispels the "different kind of number" misconception.
- Counting/place-value and bytes correctly **deferred to 03-02/03-03**; byte is only previewed here.
- Spaced recall references only Module 01 (published) — no forward dependency.

## Sign-off
All eleven categories ≥ 95 after one fix. Lesson package approved **Published**. Module 03 now in production (1/5).

---
_NetworkAcademy+ · QA Report 03-01 · CompTIA Network+ N10-009 · Instructor materials_
