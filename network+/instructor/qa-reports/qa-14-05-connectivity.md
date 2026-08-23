# QA Report — NA-M14-L05 "Troubleshooting Connectivity (Layers 1–3)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-05-troubleshooting-connectivity-layers-1-3.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.6** (at/below the 6–8 aim — acceptable; layer numbers/labels pull it down, in-policy since the gate flags only *above* 8) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three-rung ladder; layers named in **words + numbers**; "start here" in text; full alt text ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 B, Q5 B, Q6 False, Q7 B, Q8 link/cable→C/VLAN-duplex→A/IP-gateway→B, Q9 ping, Q10 Layer 3/APIPA — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–3 → C/A/B) and Part 2 (4–6 → E/F/D) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors after adding 4 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all 4 new terms + reused APIPA/OSI/VLAN/cable tester/ipconfig/ping/default gateway resolve; de-bolded generic emphasis (first, plugged in, no DHCP, vary) and the bare 169.254.x.x value ✅ |
| Command accuracy | Prime Directive #7 | `ipconfig`/`ping` real; the **169.254 APIPA "no DHCP" symptom is real and teachable**; exact IPs/replies marked varying / `[TO VERIFY ON HARDWARE]`; lab is read-only ✅ |

New glossary terms (4): **Bottom-up troubleshooting, Top-down troubleshooting, Link light, Duplex mismatch.** (OSI model from 05-01, Duplex from 06-05, APIPA from 08-02, default gateway/VLAN, and the CLI/hardware tools from 14-02/14-04 all reused.) Footer bumped to NA-M14-L05.
Cheat sheet: `troubleshooting-quick-reference.md` gained the connectivity-by-layer section.
Module 14 README: 14-05 Published (5 of 7).

> **Application-lesson note:** This is the first lesson to *combine* the method (14-01), CLI tools (14-02/03), and hardware tools (14-04) into one approach — the bottom-up OSI ladder for Layers 1–3. The single highest-value takeaways (start at Layer 1; 169.254 = APIPA = no DHCP) are reinforced across §2, §3, the tip, the diagram, the quiz (Q4, Q10), and the cheat sheet.

> **Term-coverage note:** The "Layer 1/2/3" bolds are the applied OSI layers (the ladder's named rungs) — kept bold as the lesson's structural spine, parallel to keeping the 7 method-step names bold in 14-01. "bottom-up"/"top-down" shorthand map to their full glossary headwords. Generic emphasis and the bare 169.254.x.x address value were de-bolded (APIPA stays bold as the term).

> **Reading-level note:** FK 5.6 — below the 6–8 aim but in-policy; the many "Layer N" labels and address numbers lower it while the prose stays plain. No remediation.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Bottom-up order, layer-to-symptom mapping, APIPA/no-DHCP, duplex mismatch all correct; maps to N10-009 5.2/5.3. |
| 2 | Reading level / clarity | 96 | FK 5.6; lamp/plug analogy makes the "check the plug first" rule stick. |
| 3 | WHY-before-HOW structure | 97 | Opens with "'the internet is down' — where do you start?" |
| 4 | Zero-assumed-knowledge | 96 | Reuses OSI (05), APIPA (08), duplex (06), tools (14-02/04); new terms defined. |
| 5 | Diagram quality & accessibility | 96 | Three-rung ladder, bottom-up arrow, "start here"; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a climb-the-ladder lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; check-Layer-1-first T/F; APIPA scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified, footer NA-M14-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objectives 5.2/5.3, E2) conform. |

**All categories ≥ 95 — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-05 · CompTIA Network+ N10-009 · Instructor materials_
