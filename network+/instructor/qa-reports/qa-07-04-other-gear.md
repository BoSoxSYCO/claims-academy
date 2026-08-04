# QA Report — NA-M07-L04 "Access Points, Firewalls, and Other Gear"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/07-devices-and-switching/lessons/07-04-access-points-firewalls-gear.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.6** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each device named + job in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Firewall→C, Access point→A, Proxy→B verified; Q5 IDS/IPS correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |

New glossary terms (7): **Access point (AP), Modem, Firewall, Load balancer, Proxy server, IDS/IPS, Power over Ethernet (PoE).**
Cheat sheet: `devices-and-switching-quick-reference.md` gained an Other network gear table.

> **Reading-level note:** FK 7.6 is driven by required device names (access point, firewall, load balancer, proxy server, modulator-demodulator, Power over Ethernet, intrusion detection/prevention). Each is taught with a plain one-word job and the building analogy per CLAUDE.md §2; sentences average ~14 words. Within the 6–8 acceptable band, so no forced substitution of exam terms.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Device-to-job (AP, modem, firewall, load balancer, proxy, IDS/IPS, PoE) matches N10-009 2.1. |
| 2 | Reading level / clarity | 95 | FK 7.6 within band; jargon unavoidable but each term gets a one-word job. |
| 3 | WHY-before-HOW structure | 96 | Opens with the building analogy before the device tour. |
| 4 | Zero-assumed-knowledge | 96 | Builds on hub/switch/router (07-01); ties to the home box. |
| 5 | Diagram quality & accessibility | 96 | Device path + helpers panel, each labeled with its job; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. find-your-gear lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M07-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 07-04 · CompTIA Network+ N10-009 · Instructor materials_
