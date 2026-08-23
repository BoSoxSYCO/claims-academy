# QA Report — Lesson NA-M03-L05 "Why This Matters for IP and MAC Addresses"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 2 fixes)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script.
- SVG validated as well-formed XML.
- Octet binary verified programmatically (192/168/1/10 → correct 8-bit values).
- **Matching answer set checked for uniqueness** (8 distinct letters).
- Quiz Q8 mapping checked vs. answer key (IPv4→C, MAC→A, Octet→B ✓).
- Glossary section + within-section order verified.

## Scores

| Category | Round 1 | Final |
|----------|:------:|:-----:|
| Technical accuracy | 97 | 97 |
| Reading level | 97 | 97 |
| Grammar | **93** | **96** |
| Flow | 96 | 96 |
| Workbook quality | **93** | **96** |
| Quiz quality | 96 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 97 | 97 |
| Professional appearance | 96 | 96 |
| **Minimum** | **93** | **96 ✅** |

**Measured reading level:** Flesch-Kincaid **6.5**, Reading Ease **71**. ✅

## Defects found & fixed
1. **Workbook quality** — the matching worksheet (3.5.B) had two Column-A items ("MAC address" and "MAC byte count") both mapping to "Six bytes," making a unique 1:1 match impossible. **Fixed:** changed item 8 to "Octet value range" → maps to "Range 0–255"; all 8 answers now unique (C, A, D, G, F, B, E, H).
2. **Grammar** — a stray `**` left the objective line's bold unbalanced in 3.5.B. **Fixed.**

## Notes verified
- Octet conversions correct (192=11000000, 168=10101000, 1=00000001, 10=00001010).
- IP (4 decimal bytes / 32 bits) vs. MAC (6 hex bytes / 48 bits) framed accurately; deep addressing correctly deferred to Modules 07–08.
- New glossary entries **IPv4 address** (I) and **Octet** (O) placed correctly.

## Module 03 / on-ramp status
Fifth and final Module 03 lesson. All of 03-01 → 03-05 are Published — **Module 03 (Numbers & Binary) is content-complete, finishing Unit 1 (the on-ramp).**

## Sign-off
All eleven categories ≥ 95 after two fixes. Lesson package approved **Published**.

---
_NetworkAcademy+ · QA Report 03-05 · CompTIA Network+ N10-009 · Instructor materials_
