# QA Report — NA-M11-L07 "Wireless Standards, Channels, and Security"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-07-wireless-standards-channels-security.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.1** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; strips labeled in words; security uses ✗/✓ + worst/best text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 C, Q2 A, Q3 B, Q4 D, Q5 A, Q6 False, Q7 C, Q8 n→C/ac→A/ax→B, Q9 5, Q10 WPA2/3 + channel 1/6/11 — verified ✅ |
| Matching uniqueness | cross-check | 11.7.B Part 1 (1–3→A–C) and Part 2 (4–9→D–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms; **802.11 placed before 802.1Q** in the ## 0-9 section (11 < 1Q by char) ✅ |
| Command accuracy | **Prime Directive #7** | `netsh wlan show interfaces` real; sample output marked **[TO VERIFY ON HARDWARE]** (fields vary by adapter/driver); learner records own ✅ |

New glossary terms (6): **802.11** (in ## 0-9), **Band, Channel, SSID, WEP, WPA2 / WPA3.** (Access point + Wi-Fi reused.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the wireless section.
Module 11 README: 11-07 marked Published (7 of 8).

> **Glossary structure note:** 802.11 is the second numeric-leading term; it was placed **before** 802.1Q in the ## 0-9 section because "80211" < "8021q" character-by-character. The order-checker (which recognizes the ## 0-9 section) confirms both numeric entries and all lettered sections remain correctly ordered.

> **Prime Directive #7 note:** `netsh wlan show interfaces` is a genuine Windows command, but the exact field names (Radio type, Band, Authentication) vary by wireless adapter and driver, so the sample is tagged **[TO VERIFY ON HARDWARE]** and the learner records their own values. Router settings are view-only. No fabricated output.

> **Reading-level note:** FK 6.1 — kept short-sentenced throughout; the highway/lane analogy carries bands and channels in plain language.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | 802.11↔Wi-Fi numbers, bands, 1/6/11, WPA3/WEP all correct; maps to N10-009 2.4. |
| 2 | Reading level / clarity | 97 | FK 6.1; highway/lane analogy anchors bands/channels. |
| 3 | WHY-before-HOW structure | 97 | Opens with speed/space/safety before the tables. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 04-03 and 07-04; band, channel, SSID, security all defined. |
| 5 | Diagram quality & accessibility | 96 | Three-strip overview; full alt text; ✗/✓ + words, not color alone. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. netsh Wi-Fi lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "5 GHz always better" and hidden-SSID. |
| 8 | Answer key & instructor notes | 97 | Full explanations; three misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 6 terms added (incl. 802.11 in 0-9), alpha-verified, footer NA-M11-L07. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, objective 2.4) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-07 · CompTIA Network+ N10-009 · Instructor materials_
