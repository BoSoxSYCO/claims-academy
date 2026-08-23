# QA Report — NA-M14-L06 "Troubleshooting Names, Speed, and Wireless"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-06-names-speed-wireless.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.1** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three symptom-family cards; symptoms/causes/fixes in **text**, not color ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 B, Q5 B, Q6 False, Q7 B, Q8 name→C/video→A/wifi→B, Q9 attenuation, Q10 wireless — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–3 → C/A/B) and Part 2 (4–7 → E/F/G/D) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors after adding 2 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; the 2 new terms + reused DNS/latency/jitter/throughput/bandwidth/interference/attenuation/band/channel/SSID/nslookup/Wi-Fi analyzer/duplex mismatch resolve; de-bolded generic emphasis (name resolution, vary, real) ✅ |
| Command accuracy | Prime Directive #7 | `nslookup`, `ipconfig /flushdns`, `netsh wlan show interfaces` are **real** Windows commands; sample outputs (IPs, flush message, Signal %) marked varying / `[TO VERIFY ON HARDWARE]` ✅ |

New glossary terms (2): **RSSI (Received Signal Strength Indicator), Bandwidth saturation.** (DNS, DNS cache, nslookup, latency, jitter, throughput, bandwidth, interference, attenuation, band, channel, SSID, duplex mismatch, Wi-Fi analyzer all reused from earlier modules.) Footer bumped to NA-M14-L06.
Cheat sheet: `troubleshooting-quick-reference.md` gained the names/speed/wireless section.
Module 14 README: 14-06 Published (6 of 7).

> **Reuse-heavy note:** By design, this symptoms lesson mostly *reuses* Module 04/06/09/11/14 vocabulary and adds only two genuinely new terms (RSSI, bandwidth saturation). The teaching value is in **sorting** a complaint into name/speed/wireless and separating bandwidth vs. throughput vs. latency vs. jitter — all reinforced in §3, the diagram, the quiz (Q3/Q4/Q6), and the cheat sheet.

> **Term-coverage note:** The Name/Speed/Wireless bolds are the three structural family labels (the lesson's spine), kept bold like the OSI layers in 14-05. Generic emphasis ("name resolution" — DNS is the term; "vary"; "real") was de-bolded. The cheat-sheet "not" in "more bandwidth does not fix latency" is kept as quick-ref emphasis on the key rule.

> **Accuracy note:** ping-IP-vs-name = DNS, bandwidth ≠ latency, jitter as delay variation, low RSSI/attenuation/channel/band for wireless are all exam-correct for N10-009 5.2/5.3/5.4. The three real commands are shown correctly; no output is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Name/speed/wireless causes and the real commands all correct; maps to N10-009 5.2/5.3/5.4. |
| 2 | Reading level / clarity | 96 | FK 7.1; busy-diner analogy sorts the three families. |
| 3 | WHY-before-HOW structure | 97 | Opens with the three recurring complaints. |
| 4 | Zero-assumed-knowledge | 96 | Reuses DNS (09), speed terms (04), Wi-Fi (11); 2 new terms defined. |
| 5 | Diagram quality & accessibility | 96 | Three symptom-family cards; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a real DNS + Wi-Fi-signal lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; bandwidth-vs-latency T/F; wired-vs-wireless scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 2 terms added, alpha-verified, footer NA-M14-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objectives 5.2/5.3/5.4, E2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-06 · CompTIA Network+ N10-009 · Instructor materials_
