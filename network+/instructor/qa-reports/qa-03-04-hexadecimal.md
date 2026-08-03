# QA Report — Lesson NA-M03-L04 "Hexadecimal — Shorthand for Computers"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95, first pass)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- **Every hex↔binary↔decimal conversion checked programmatically** (`int(hex,16)==int(bin,2)==dec`).
- Quiz Q8 mapping checked vs. answer key (Nibble→C, Hexadecimal→A, Byte→B ✓).
- Glossary section order and within-section order verified.

## Scores

| Category | Score |
|----------|:-----:|
| Technical accuracy | 97 |
| Reading level | 96 |
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

**Measured reading level:** Flesch-Kincaid **5.8**, Reading Ease **73** (easy side, appropriate for a number-dense lesson).

## Findings
No sub-95 defects. Verified:
- All conversions correct: CA=202, FF=255, B2=178, 2B=43, 3C=60, F0=240, A=10, C=12, F=15.
- Nibble concept (1 hex digit = 4 bits; 2 = 1 byte) taught cleanly; base-16 place-value math correctly avoided in favor of nibble splitting.
- `ipconfig /all` MAC-address sighting ties hex to a real, tested artifact (MAC detail correctly deferred to Module 07).
- New glossary section **N** (Nibble) added; sections A B C D E F G H I K L M N O P R S T U V W all alphabetical.
- Spaced recall references only Lessons 03-02/03-03 (published) — no forward dependency.

## Sign-off
All eleven categories ≥ 95. Lesson package approved **Published**. Module 03 now 4/5.

---
_NetworkAcademy+ · QA Report 03-04 · CompTIA Network+ N10-009 · Instructor materials_
