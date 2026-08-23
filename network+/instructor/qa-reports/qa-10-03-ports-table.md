# QA Report — NA-M10-L03 "The Must-Know Ports (Web, Mail, Remote, Files)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/10-ports-protocols-and-apps/lessons/10-03-the-must-know-ports.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.5** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each group labeled in text, TCP/UDP as text tags, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B(443), Q2 A(22), Q3 C(SMTP), Q4 B(RDP), Q5 C(445), Q6 False, Q7 B(DNS 53), Q8 HTTP→B/SMTP→C/FTP→A, Q9 80, Q10 SSH 22 + SMB 445 — all verified ✅ |
| Matching uniqueness | cross-check | Worksheet 10.3.B items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson table ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 11 terms; also fixed a pre-existing Single-mode/Single-point inversion ✅ |
| Port accuracy | Prime Directive #7 | All 16 port/protocol pairs are IANA well-known assignments; `netstat -an` real; sample output representative ✅ |

New glossary terms (11): **HTTP, HTTPS, SMTP, POP3, IMAP, SSH, Telnet, RDP, FTP, TFTP, SMB.** (DNS/DHCP/NTP/SNMP/Syslog reused from Module 09.)
Cheat sheet: `ports-and-protocols-quick-reference.md` gained the full 16-row must-know table grouped by job.

> **Reading-level note:** FK 5.5 is below the 6–8 aim but on the *easy* side (the gate guards > 8). This is a recall lesson built on short grouped lines and a reference table, which pulls the average down. The `readability.py` "long sentence" flags are table rows and the production briefs (SVG/photo), not prose. No complexity was added to inflate the number (CLAUDE.md §2).

> **Accuracy note:** Every port is a standards-based IANA well-known assignment — FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53 (TCP+UDP), DHCP 67/68, TFTP 69, HTTP 80, POP3 110, NTP 123, IMAP 143, SNMP 161/162, HTTPS 443, SMB 445, Syslog 514, RDP 3389. DNS correctly shown as both TCP and UDP. `netstat -an` is a genuine Windows command; observed rows vary by machine, so the learner records their own — no fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | All 16 port/protocol/TCP-UDP rows correct; maps to N10-009 1.5. |
| 2 | Reading level / clarity | 96 | FK 5.5 (easy side); 911/411 analogy and job-grouping carry it. |
| 3 | WHY-before-HOW structure | 97 | Opens with "famous fixed numbers" before the list of ports. |
| 4 | Zero-assumed-knowledge | 96 | Builds on ports (10-01) and TCP/UDP (10-02); every acronym spelled out. |
| 5 | Diagram quality & accessibility | 96 | Four job groups + services row; each entry has number and TCP/UDP in text; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. netstat lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target SSH/Telnet swap, SMTP-direction, HTTP/HTTPS, DNS-UDP-only. |
| 8 | Answer key & instructor notes | 97 | Full explanations; three misconceptions named and corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added, alpha-verified, footer dated NA-M10-L03; pre-existing inversion fixed. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (💡/⚠️/🎯/🔧), naming, front-matter (unit 7) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 10-03 · CompTIA Network+ N10-009 · Instructor materials_
