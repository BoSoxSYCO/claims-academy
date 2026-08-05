# QA Report — NA-M08-L02 "IPv4 Structure, Classes, and Private Ranges"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-02-ipv4-structure-classes-private-ranges.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.5** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; classes/ranges named in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 first-octet mapping 45→B(A), 150→C(B), 200→A(C) verified; Q1–Q5, Q7 keys correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |
| Range accuracy | manual vs. RFC/standards | Private 10/8, 172.16/12, 192.168/16; loopback 127/8; APIPA 169.254/16; class ranges A 1–126 / B 128–191 / C 192–223 all correct ✅ |

New glossary terms (7): **Address class, APIPA, Host portion, Loopback address, Network portion, Private IP address, Public IP address.**
Cheat sheet: `ip-addressing-quick-reference.md` gained a class table and a private-ranges table.

> **Accuracy note:** All numeric ranges are exact and standards-based (RFC 1918 private blocks; 127.0.0.0/8 loopback; 169.254.0.0/16 APIPA). `ipconfig` and `ping 127.0.0.1` are real commands (taught in Module 02); the shown loopback reply is a representative example and the lesson tells learners their exact timing/TTL may differ (CLAUDE.md Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Classes, private ranges, loopback, APIPA all exact; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 97 | FK 6.5; phone-number analogy carries structure; sentences ~13 words. |
| 3 | WHY-before-HOW structure | 96 | Opens with the phone-number pattern before the class/range tables. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-01 and bits/octets (03-02); DHCP forward-referenced to Module 09. |
| 5 | Diagram quality & accessibility | 96 | Address split + class table + private/special panels, each labeled in text; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. classify-your-IP + loopback lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder; distractors target the real 172-range and APIPA misconceptions. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + private-range chant + accuracy note. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M08-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🎯 exam + 🔧 lab), naming, front-matter (unit 5) all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 08-02 · CompTIA Network+ N10-009 · Instructor materials_
