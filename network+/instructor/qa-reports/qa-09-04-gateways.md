# QA Report — NA-M09-L04 "Gateways and How Traffic Leaves Your Network"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/09-core-network-services/lessons/09-04-gateways-and-leaving-the-network.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.1** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; decisions/hops labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Default gateway→C, ARP→A, Next hop→B verified; Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |
| Command accuracy | Prime Directive #7 | `tracert`/`arp -a`/`ipconfig` are real; sample output representative (hops/MACs vary) ✅ |

New glossary terms (6): **ARP, Routing, Routing table, Next hop, Default route, traceroute (tracert).** (Default gateway reused from 02-04.)
Cheat sheet: `network-services-quick-reference.md` gained a gateways/leaving-the-network section.

> **Reading-level note:** FK 7.1 on the **first** pass — the deliberate shorter-sentence discipline (applied after the 09-03 remediation) kept the average at 13.5 words/sentence despite dense vocabulary (routing, gateway, translation). No remediation needed.

> **Accuracy note:** `tracert`, `arp -a`, and `ipconfig` are genuine Windows commands. Sample output (hop IPs like 192.168.1.1 / 10.x, MACs) is representative and labeled — real values vary. `* * *` hops are noted as normal. No fabricated device data (Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Default gateway, ARP (IP→MAC), routing, traceroute all correct; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 96 | FK 7.1; gated-neighborhood analogy carries the flow; sentences ~13 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "how does traffic reach the other side of the world?" before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-03 same-network test, MAC (07-02), hops (05-05); ARP taught fully here. |
| 5 | Diagram quality & accessibility | 96 | Local-vs-off-network decision + ARP + hop-by-hop path, each labeled; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. tracert lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target gateway-by-IP-only and hop-1-is-ISP errors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + neighborhood-analogy pacing. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M09-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 6) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 09-04 · CompTIA Network+ N10-009 · Instructor materials_
