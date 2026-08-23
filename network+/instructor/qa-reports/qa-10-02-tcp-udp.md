# QA Report — NA-M10-L02 "TCP vs. UDP — Reliable vs. Fast"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/10-ports-protocols-and-apps/lessons/10-02-tcp-vs-udp.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.6** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; TCP/UDP steps labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping TCP→B, UDP→A verified; Q4 handshake order, Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 5 terms ✅ |
| Command accuracy | Prime Directive #7 | `netstat -an` real; TCP rows show States, UDP rows don't; sample output representative ✅ |

New glossary terms (5): **UDP, Connection-oriented, Connectionless, Three-way handshake, Acknowledgment (ACK).** (TCP from 05-03 reused.)
Cheat sheet: `ports-and-protocols-quick-reference.md` gained a TCP-vs-UDP comparison table.

> **Reading-level note:** FK 5.6 is below the 6–8 aim but on the *easy* side (gate guards > 8). The short phone-vs-broadcast sentences plus the comparison tables and `netstat` lines pull the average down. The prose is grade-appropriate; a clear compare/contrast lesson benefits from plain sentences, so no complexity was added to inflate the number (CLAUDE.md §2).

> **Accuracy note:** The three-way handshake is SYN → SYN-ACK → ACK (correct order, tested in Q4). `netstat -an` is a genuine Windows command; TCP rows show connection States (ESTABLISHED/LISTENING) and UDP rows show `*:*` with no state — a real, observable difference. Service-to-protocol mappings (web/email/files = TCP; voice/video/games/DNS = UDP) are standard. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | TCP/UDP traits, handshake order, service mappings all correct; maps to N10-009 1.5. |
| 2 | Reading level / clarity | 96 | FK 5.6 (easy side); phone-vs-broadcast analogy carries it cleanly. |
| 3 | WHY-before-HOW structure | 97 | Opens with two ways to send a message before the protocol mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on ports (10-01), segments (05-04), TCP (05-03); UDP fully taught. |
| 5 | Diagram quality & accessibility | 96 | Side-by-side TCP handshake/reliable vs. UDP just-send + trade-off; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. netstat lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target UDP-is-broken and handshake-order errors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; handshake pacing; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 5 terms added, alpha-verified, footer dated NA-M10-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 7) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 10-02 · CompTIA Network+ N10-009 · Instructor materials_
