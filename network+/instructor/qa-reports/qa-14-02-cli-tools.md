# QA Report — NA-M14-L02 "Command-Line Tools: ping, tracert, ipconfig, nslookup"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-02-command-line-tools.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.0** (at/below the 6–8 aim — acceptable; the gate only flags *above* 8, and short command lines pull it down, which helps beginners) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; four tool cards; each question/command in **text**; a footer note that all values vary ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 B, Q5 B, Q6 True, Q7 B, Q8 ipconfig→C/ping→A/tracert→D/nslookup→B, Q9 127.0.0.1, Q10 ipconfig/no-gateway — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → C/A/D/B) and Part 2 (5–7 → G/E/F) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 3 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; the 3 new terms + all reused tool/network terms resolve; de-bolded generic emphasis (test a theory, verify, varies, your own, real and safe, typical example that varies) ✅ |
| **Command accuracy** | **Prime Directive #7** | **ping / tracert / ipconfig / nslookup are all REAL and safe on Windows, shown with correct syntax. Every output value (IPs, reply times, TTL, hop lists) is explicitly marked a typical example that VARIES / `[TO VERIFY ON HARDWARE]` — no specific number is presented as guaranteed ✅** |

New glossary terms (3): **nslookup, Round-trip time (RTT), TTL (Time to Live).** (ping, traceroute/tracert, ipconfig, hop, latency, loopback address, default gateway, DNS all reused from earlier modules.) Footer bumped to NA-M14-L02.
Cheat sheet: `troubleshooting-quick-reference.md` gained the four-CLI-tools section.
Module 14 README: 14-02 Published (2 of 7).

> **Command-accuracy note (the key QA concern this lesson):** This is the first tool lesson, so Prime Directive #7 got the most scrutiny. The four commands and their switches (`/all`, target IPs/names, `127.0.0.1`) are real and correct. Every sample output — the `IPv4 Address … 192.168.1.42` line, the `Reply … time=14ms TTL=118` line, hop lists — is framed as a **typical example that varies by computer and network** and tagged `[TO VERIFY ON HARDWARE]`. The lab and §10 repeat "read your own output; don't expect the sample numbers." No fabricated result is presented as fact.

> **Reading-level note:** FK 5.0 — below the 6–8 aim but in-policy (the rule flags only >8). Command tokens (`ipconfig`, `ping`, `8.8.8.8`) are low-syllable and lower the score; the prose itself is plain and correct. No remediation needed.

> **Term-coverage note:** "tracert" maps to the combined headword "traceroute (tracert)" and "loopback" to "Loopback address" (both reused) — covered, not missing. Generic emphasis in the Prime-Directive warnings and method-step references was de-bolded.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Four tools + correct syntax; tool-to-question mapping correct; maps to N10-009 5.5. |
| 2 | Reading level / clarity | 96 | FK 5.0; detective-kit analogy; plain command explanations. |
| 3 | WHY-before-HOW structure | 97 | Opens with "a website won't load — is it your address, connection, name, or a far router?" |
| 4 | Zero-assumed-knowledge | 96 | Reuses DNS (09), latency (04), loopback (08); new terms defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Four tool cards with question + command; full alt text; "values vary" footer. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a real four-command lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; ping-IP-vs-name DNS T/F; no-gateway scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 3 terms added, alpha-verified, footer NA-M14-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; command blocks fenced; standard frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objective 5.5, E2) conform. |

**All categories ≥ 95 — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-02 · CompTIA Network+ N10-009 · Instructor materials_
