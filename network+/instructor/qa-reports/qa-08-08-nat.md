# QA Report — NA-M08-L08 "Public vs. Private, and the Role of NAT (Preview)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-08-public-private-and-nat.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Completes Module 08**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.6** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; inside/outside zones labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Private→B, Public→A, NAT→C verified; Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 2 terms (246 total) ✅ |
| Address examples | Prime Directive #7 | Documentation blocks used (203.0.113.0/24 RFC 5737, 192.168.x); router pages flagged `[TO VERIFY ON HARDWARE]` ✅ |

New glossary terms (2): **NAT (Network Address Translation), PAT (Port Address Translation).** (Public/Private IP reused from 08-02.)
Cheat sheet: `ip-addressing-quick-reference.md` gained a public/private & NAT section.

> **Preview scope:** PAT depends on port numbers, formally taught in Module 10. The lesson names PAT and uses the office-phone analogy, with an explicit forward-reference ("you'll learn ports in Module 10") — no undefined-term violation (Prime Directive #1). Deep NAT is Module 09.

> **Accuracy note:** Public example uses `203.0.113.7` from the RFC 5737 documentation range; private uses `192.168.1.x`. `ipconfig` is real and read-only; the router-page steps are marked `[TO VERIFY ON HARDWARE]` because addresses/logins vary by model. Carrier-grade NAT is noted as a real variation. No fabricated device output.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Public/private, NAT direction, PAT sharing, "NAT ≠ firewall" all correct; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 96 | FK 7.6 in band; office-phone analogy carries NAT; sentences ~14 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with the "private can't cross the internet, yet you browse" puzzle. |
| 4 | Zero-assumed-knowledge | 96 | Builds on public/private (08-02); ports forward-referenced, not assumed. |
| 5 | Diagram quality & accessibility | 96 | Inside→router→internet NAT path with the swap spelled out; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. private-vs-public lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target the laptop-is-public and NAT-is-firewall errors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; preview scope + misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 2 terms added, alpha-verified, footer dated NA-M08-L08. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), module-complete banner, front-matter (unit 5) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 08 is now complete** — all eight lessons (08-01 → 08-08) Published.

---
_NetworkAcademy+ · QA Report 08-08 · CompTIA Network+ N10-009 · Instructor materials_
