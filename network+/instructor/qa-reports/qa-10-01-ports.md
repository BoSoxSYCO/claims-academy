# QA Report — NA-M10-L01 "What Ports and Protocols Are (the Mailbox Idea)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/10-ports-protocols-and-apps/lessons/10-01-what-ports-and-protocols-are.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 10**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.9** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each mailbox/port labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 range mapping 0–1023→C, 1024–49151→A, 49152–65535→B verified; Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |
| Command accuracy | Prime Directive #7 | `netstat -n` is real; sample output representative; ranges standards-based ✅ |

New glossary terms (4): **Socket, Well-known ports, Registered ports, Ephemeral port.** (Protocol from 05-01 and Port number from 09-03 reused.)
New cheat sheet created for the module: `ports-and-protocols-quick-reference.md` (ports/protocols/socket + ranges).
Module 10 README status board populated with the full 5-lesson list (10-01 Published).

> **Redeems a forward reference:** Lesson 09-03 introduced ports lightly with a promise that "you'll learn ports fully in Module 10." This lesson delivers that full treatment (mailbox model, socket, three ranges, ephemeral↔well-known), keeping the zero-assumed-knowledge chain honest.

> **Accuracy note:** Port ranges are standards-based (well-known 0–1023, registered 1024–49151, dynamic/ephemeral 49152–65535); ports are 16-bit (0–65535). 443 = HTTPS is correct; the full common-ports table is deferred to Lesson 10-03. `netstat -n` is a genuine Windows command; sample output is representative (ports vary). The network **port** vs. **physical port** ambiguity is called out explicitly. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Protocol/port/socket and the three ranges correct; maps to N10-009 1.5. |
| 2 | Reading level / clarity | 97 | FK 6.9; mailbox analogy carries the abstraction; sentences ~13 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "one IP, many programs — how does data find the right one?" |
| 4 | Zero-assumed-knowledge | 97 | Builds on IP (08-01) and ports intro (09-03); port-vs-physical-port ambiguity resolved. |
| 5 | Diagram quality & accessibility | 96 | Building/mailboxes + client-server + ranges table, each labeled; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. netstat lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target port-vs-plug and client-uses-well-known errors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; mailbox pacing; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 4 terms added, alpha-verified, footer dated NA-M10-L01; reused terms noted. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 7) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 10 is now in production** — Lesson 10-01 Published; 10-02 → 10-05 Planned.

---
_NetworkAcademy+ · QA Report 10-01 · CompTIA Network+ N10-009 · Instructor materials_
