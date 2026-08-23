# QA Report — NA-M08-L05 "Subnetting Step by Step (the Beginner Method)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-05-subnetting-step-by-step.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.6** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; network/broadcast/host labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping .0→B(network), .63→A(broadcast), .1–.62→C(usable) verified; Q3–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Subnetting arithmetic | manual (full) | /26: block 64, subnets .0/.64/.128/.192, broadcasts .63/.127/.191/.255, 62 hosts; /27: block 32, 8 subnets, 30 hosts — all verified ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Subnetting, Borrowing bits, Block size, Network address, Broadcast address, Usable host.**
Cheat sheet: `ip-addressing-quick-reference.md` gained the 5-step method and a slash/block/host quick table (/25–/30).

> **Reading-level note:** FK 5.6 is below the 6–8 aim but on the *easy* side (the gate guards against > 8). The score is deflated by dense numeric content — masks, block sizes, subnet tables, and host counts — which shortens sentences and lowers syllables/word. The teaching prose is grade-appropriate; easier reading suits a topic learners fear, so no complexity was added to inflate the number (CLAUDE.md §2).

> **Accuracy note (critical for this lesson):** Every worked number was verified independently. `192.168.1.0/26`: mask 255.255.255.192, block 64, four subnets (.0/.64/.128/.192), broadcasts .63/.127/.191/.255, usable hosts 2^6−2 = 62. `/27`: block 32, 8 subnets, 30 hosts. Scenario `10.0.0.0/26` networks: .0/.64/.128/.192. `ipconfig` is used read-only to place the learner's own IP; no fabricated device output (Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | All subnet math verified; one repeatable method answers subnet/broadcast/host/count; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 96 | FK 5.6 (easy side, numeric density); prose clear; method broken into 5 explicit steps. |
| 3 | WHY-before-HOW structure | 97 | Opens with the open-office/walls problem before the borrowing-bits mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on masks (08-03) and CIDR (08-04); every step named; nothing assumed. |
| 5 | Diagram quality & accessibility | 96 | Number line split into four /26 blocks + 5-step box, each part labeled; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. subnet-by-hand lab; all keyed with worked math. |
| 7 | Quiz quality | 97 | 10 items incl. PBQ-style "list the four networks"; distractors target the −2 and block-size errors. |
| 8 | Answer key & instructor notes | 97 | Every item worked out; misconceptions + "do one example completely" pacing. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M08-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), no-fear tone, front-matter (unit 5, est 32) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 08-05 · CompTIA Network+ N10-009 · Instructor materials_
