# QA Report — NA-M13-L05 "Securing Switch Ports and Wireless"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-05-securing-switch-ports-and-wireless.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.5** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; two panels; Wi-Fi ranking shown as **best / ok / never** text (not color alone) ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 C, Q5 B, Q6 False, Q7 B, Q8 Port security→B/Guest network→A/WPA3→C, Q9 native, Q10 port security + disable unused — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → C/A/B/D) and Part 2 (5–7 → F/G/E) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 6 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (port security, MAC filtering, sticky MAC, PSK, WPS, guest network, SSID, WEP, WPA2/WPA3, native VLAN) resolve to glossary headwords; de-bolded "access layer", "shut down", the two action lead-ins, "nobody uses", "unused" ✅ |
| Command accuracy | Prime Directive #7 | `netsh wlan show interfaces` is a **real** Windows command; shown output marked as a varying example; **all** Dell 3424 port commands flagged **[TO VERIFY ON HARDWARE]** — nothing fabricated ✅ |

New glossary terms (6): **Port security, MAC filtering, Sticky MAC, PSK (Pre-Shared Key), WPS (Wi-Fi Protected Setup), Guest network.** (SSID, WEP, WPA2/WPA3 reused from 11-07; MAC address from 03/07; native VLAN from 11-03.) Footer bumped to NA-M13-L05.
Cheat sheet: `network-security-quick-reference.md` gained the securing-ports-and-wireless section.
Module 13 README: 13-05 Published (5 of 7).

> **Reading-level note:** FK 6.5 on the first pass — in target, no remediation. Fifth straight Module-13 lesson with no remediation loop.

> **Real-gear note (Prime Directive #7):** This is an E2 lesson tied to the learner's actual gear. The Windows Wi-Fi check (`netsh wlan show interfaces` → **Authentication**) is real and verifiable; the sample `WPA2-Personal` output is explicitly marked as varying. Every Dell PowerConnect 3424 port-security/disable command is `[TO VERIFY ON HARDWARE]`, and the switch lab is a paper plan — no switch output is invented.

> **Term-coverage note:** "WPA2"/"WPA3" map to the combined glossary headword "WPA2 / WPA3 (Wi-Fi Protected Access)" (11-07). Bolded action lead-ins and emphasis words ("access layer", "shut down", "Disable unused ports.", "Change the native VLAN.", "nobody uses", "unused") were de-bolded; the "native VLAN" term stays bolded where it's the reused glossary term.

> **Accuracy note:** Port security/sticky MAC, disabling unused ports, the native-VLAN change, the WPA3 > WPA2 > WEP ranking, strong PSK, changing default SSID/admin, disabling WPS, and guest networks are all exam-correct for N10-009 objective 4.3.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Port + Wi-Fi hardening all correct; maps to N10-009 4.3. |
| 2 | Reading level / clarity | 97 | FK 6.5; house-locks analogy carries it. |
| 3 | WHY-before-HOW structure | 97 | Opens with "every open port is a doorway." |
| 4 | Zero-assumed-knowledge | 96 | Reuses MAC (07), VLANs/Wi-Fi (11-07); new terms defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Two panels; Wi-Fi ranking in words; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a real Windows Wi-Fi check; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; wall-jack scenario; default-password T/F. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 6 terms added, alpha-verified, footer NA-M13-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.3, E2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-05 · CompTIA Network+ N10-009 · Instructor materials_
