# QA Report — NA-M14-L03 "More Tools: arp, netstat, pathping"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-03-arp-netstat-pathping.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.0** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three tool cards; clue/command in **text**; a "values vary" footer ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 B, Q5 B, Q6 False, Q7 C, Q8 arp→B/netstat→C/pathping→A, Q9 LISTENING, Q10 netstat — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–3 → C/A/B) and Part 2 (4–6 → E/F/D) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors after adding 4 terms (incl. Listening port) ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; the 3 new tool terms + reused ARP/packet-loss/port/hop/MAC resolve; **added** Listening port (in the §5 vocab table); de-bolded generic emphasis (varies, local, and, where, real and safe) ✅ |
| **Command accuracy** | **Prime Directive #7** | **arp -a / netstat / pathping are all REAL and safe on Windows, shown with correct switches (`-a`, `-n`, `-an`). Every sample row (MACs, connection lines, hop loss %, the `192.168.1.1 aa-bb-cc-…` example) is marked a typical example that VARIES / `[TO VERIFY ON HARDWARE]` — no invented row is presented as fact ✅** |

New glossary terms (4): **ARP table, netstat, pathping, Listening port.** (ARP from 09-04, Packet loss from 02-05, Port/Port number/Socket, hop, MAC address all reused.) Footer bumped to NA-M14-L03.
Cheat sheet: `troubleshooting-quick-reference.md` gained the three-deeper-CLI-tools section.
Module 14 README: 14-03 Published (3 of 7).

> **Command-accuracy note:** As with 14-02, Prime Directive #7 was the focus. The three commands and switches are real and correct. The one sample arp row (`192.168.1.1 aa-bb-cc-dd-ee-ff dynamic`) uses an obviously placeholder MAC and is tagged as varying; netstat and pathping outputs are described, not fabricated, and marked `[TO VERIFY ON HARDWARE]`. The "arp is local only" and "pathping is slow on purpose" facts are exam-correct.

> **Reading-level note:** FK 6.0 — in target, no remediation. Command-heavy content stays plain.

> **Term-coverage note:** "arp -a"/"tracert" map to their base headwords (ARP table/ARP; traceroute (tracert)). "Listening port" got its own entry since it's in the vocabulary table. Generic emphasis in warnings was de-bolded; cheat-sheet quick-ref emphasis kept.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Three tools + switches correct; local-only arp, per-hop loss pathping correct; maps to N10-009 5.5. |
| 2 | Reading level / clarity | 96 | FK 6.0; deeper-kit analogy (neighbors/calls/delivery). |
| 3 | WHY-before-HOW structure | 97 | Opens with the deeper questions the basic four can't answer. |
| 4 | Zero-assumed-knowledge | 96 | Builds on ARP (09), ports/sockets (10), hop (05); new terms defined. |
| 5 | Diagram quality & accessibility | 96 | Three tool cards with clue + command; full alt text; "varies" footer. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a real three-command lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; arp-is-local T/F; not-listening scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified, footer NA-M14-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; fenced command blocks; standard frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objective 5.5, E2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-03 · CompTIA Network+ N10-009 · Instructor materials_
