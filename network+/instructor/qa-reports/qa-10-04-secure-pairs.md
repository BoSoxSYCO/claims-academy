# QA Report — NA-M10-L04 "Secure vs. Insecure Protocol Pairs"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/10-ports-protocols-and-apps/lessons/10-04-secure-vs-insecure-protocol-pairs.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.8** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each side labeled in words + lock emoji (not color alone) ✅ |
| Quiz key ↔ quiz | cross-check | Q1 A, Q2 B, Q3 C(993), Q4 B(SSH 22), Q5 B(TLS), Q6 False, Q7 A(LDAPS 636), Q8 HTTPS→B/POP3S→C/IMAPS→A, Q9 995, Q10 HTTPS 443/TLS — verified ✅ |
| Matching uniqueness | cross-check | 10.4.B Part 1 (1–5→A–E) and Part 2 (6–10→F–J) each one-to-one ✅ |
| Fill-in-blank | cross-check | 9 answers + challenge consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 9 terms ✅ |
| Port accuracy | Prime Directive #7 | Secure ports IANA/standards-based; SNMPv3 same 161/162 noted; browser padlock/cert real ✅ |

New glossary terms (9): **Encryption, Clear text, TLS, SFTP, FTPS, POP3S, IMAPS, LDAP, LDAPS.** (HTTPS/SSH reused from 10-03.)
Cheat sheet: `ports-and-protocols-quick-reference.md` gained the secure-vs-insecure pairs table.

> **Reading-level note:** FK 5.8 is below the 6–8 aim but on the *easy* side (gate guards > 8). The lesson is pair-and-table driven, which shortens sentences and pulls the average down. `readability.py` "long sentence" flags are table rows and the SVG/photo briefs, not prose. No complexity was added to inflate the number (CLAUDE.md §2).

> **Accuracy note:** Secure ports are standards-based — HTTPS 443, SFTP 22 (over SSH), FTPS 989/990, POP3S 995, IMAPS 993, SMTP submission 587, LDAPS 636, DoT 853. The lesson correctly separates SFTP (SSH) from FTPS (TLS), and notes SNMPv3 keeps 161/162. The browser padlock, `https`, and certificate view are genuine features; learners record what they actually see. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | All pairs/ports/locks correct; maps to N10-009 1.5 and 4.1. |
| 2 | Reading level / clarity | 96 | FK 5.8 (easy side); postcard/envelope analogy carries the WHY. |
| 3 | WHY-before-HOW structure | 97 | Opens with privacy (postcard vs. envelope) before the pairs. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 10-03 ports; encryption, TLS, LDAP all taught here. |
| 5 | Diagram quality & accessibility | 96 | Two-column insecure→secure map with ports and lock; full alt text; lock emoji + words. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. HTTPS/TLS browser lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target 993/995 and SFTP-vs-FTPS. |
| 8 | Answer key & instructor notes | 97 | Full explanations; SFTP≠FTPS and "secure≠+S port" corrected. |
| 9 | Glossary & cross-refs | 97 | 9 terms added, alpha-verified, footer dated NA-M10-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 7, objectives 1.5/4.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 10-04 · CompTIA Network+ N10-009 · Instructor materials_
