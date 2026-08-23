# QA Report — NA-M08-L01 "What an IP Address Is and Why We Need It"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-01-what-an-ip-address-is.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 08**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.9** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; MAC vs. IP named + job in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping MAC→C, IP→A, Dotted-decimal→B verified; Q1–Q5, Q7 keys correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |
| Command / output claims | Prime Directive #7 | `ipconfig` is real (taught M02); shown output flagged as a representative example, learner's own numbers differ ✅ |

New glossary terms (4): **Dotted-decimal notation, Host, Logical address, Physical address.** (IP address, IPv4 address, octet reused from earlier modules.)
New cheat sheet created for the module: `ip-addressing-quick-reference.md` (IP vs. MAC table + delivery path).
Module 08 README status board populated with the full 8-lesson list (08-01 Published).

> **Accuracy note:** The `ipconfig` output in Section 9b is a representative example (192.168.1.24 / 255.255.255.0 / 192.168.1.1). The lesson states plainly "your numbers will differ," and the answer key tells graders to accept any valid IPv4 the learner reports. No device-specific value is presented as a fixed fact (CLAUDE.md Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | MAC (L2, local) vs. IP (L3, routing) and IPv4 format map to N10-009 1.4. |
| 2 | Reading level / clarity | 97 | FK 6.9; name/mailing-address analogy carries the abstraction; sentences ~14 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "a name can't route a letter" before defining the IP address. |
| 4 | Zero-assumed-knowledge | 96 | Builds on MAC (07-02), IPv4/octet (03-05), routers (07-01); no undefined terms. |
| 5 | Diagram quality & accessibility | 96 | Two-card MAC/IP compare + delivery path, each labeled in text; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. find-your-IP lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors (six-hex-pairs foil for IPv4). |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing + accuracy note covered. |
| 9 | Glossary & cross-refs | 96 | 4 terms added, alpha-verified, footer dated NA-M08-L01; reused terms noted. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🎯 exam + 🔧 lab), naming, front-matter (unit 5) all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 08 is now in production** — Lesson 08-01 Published; 08-02 → 08-08 Planned.

---
_NetworkAcademy+ · QA Report 08-01 · CompTIA Network+ N10-009 · Instructor materials_
