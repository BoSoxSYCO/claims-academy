# QA Report — NA-M04-L05 "Client-Server vs. Peer-to-Peer"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/04-networking-fundamentals/lessons/04-05-client-server-vs-peer-to-peer.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.2** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; server drawn larger AND labeled, peers labeled — size + text carry meaning, not color ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Client-server→B, Peer-to-peer→A, SPOF→C verified ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson + word bank ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Client-server, Peer-to-peer (P2P), Peer, Web server, Single point of failure, Scale.**
Cheat sheet: `networking-fundamentals-quick-reference.md` gained a client-server vs. P2P comparison table.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Model definitions, trade-offs, and SPOF framing match N10-009. |
| 2 | Reading level / clarity | 97 | FK 6.2; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with restaurant vs. potluck, then the models. |
| 4 | Zero-assumed-knowledge | 97 | Reuses client/server from 01-06; separates model from topology (04-04). |
| 5 | Diagram quality & accessibility | 96 | Two labeled panels; server sized + labeled; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. hands-on observation; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→scenario ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M04-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 04-05 · CompTIA Network+ N10-009 · Instructor materials_
