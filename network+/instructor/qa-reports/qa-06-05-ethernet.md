# QA Report — NA-M06-L05 "Ethernet Standards and Speeds"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-05-ethernet-standards-speeds.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.3** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; name parts + speed ladder labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping 100BASE-TX→C, 1000BASE-T→A, 10GBASE-T→B verified; Q2/Q3/Q5 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; standard specs correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Ethernet, BASE-T, Fast Ethernet, Gigabit Ethernet, Auto-negotiation, Duplex.**
Cheat sheet: `cabling-and-media-quick-reference.md` gained an Ethernet standards section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | BASE-T decoding, standard→speed→cable table, auto-neg/duplex all match N10-009 1.5. |
| 2 | Reading level / clarity | 97 | FK 6.3; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 96 | Opens with the road-sign analogy before decoding names. |
| 4 | Zero-assumed-knowledge | 96 | Ties speeds to Cat cables (06-01) and Mbps/Gbps (04-06). |
| 5 | Diagram quality & accessibility | 96 | Name breakdown + copper speed ladder; alt text spells out every rung. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. read-your-link-speed lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M06-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 06-05 · CompTIA Network+ N10-009 · Instructor materials_
