# QA Report — NA-M09-L02 "DNS: Turning Names into Numbers"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/09-core-network-services/lessons/09-02-dns-names-into-numbers.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.0** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each step numbered/labeled, records in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping A→C, CNAME→A, AAAA→B verified; Q3–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |
| Command accuracy | Prime Directive #7 | `nslookup`/`ping` are real; returned IPs labeled representative (vary/change) ✅ |

New glossary terms (7): **DNS, Domain name, DNS resolver, DNS cache, A record, CNAME record, MX record.**
Cheat sheet: `network-services-quick-reference.md` gained a DNS section (flow + records table).

> **Accuracy note:** `nslookup` and `ping` are genuine Windows commands. Returned IPs vary — large sites have many addresses that change — so the sample output and the `142.250.72.14` example are explicitly labeled representative ("real addresses vary and change") in both the lab and the diagram. No fabricated fixed answers; only normal public-name DNS queries (Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Record types (A/AAAA/CNAME/MX/PTR/TXT) and the lookup flow correct; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 96 | FK 6.0; phone-book/contacts analogy carries DNS; sentences ~13 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "you type names, computers need numbers" before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on IP (08-01) and DHCP-gives-DNS (09-01); milliseconds/hierarchy explained plainly. |
| 5 | Diagram quality & accessibility | 96 | Numbered lookup chain (cache→resolver→root→.com→authoritative) + records table; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. nslookup lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target A-vs-PTR and CNAME-vs-A. |
| 8 | Answer key & instructor notes | 97 | Full explanations; record-analogy pacing; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M09-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 6) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 09-02 · CompTIA Network+ N10-009 · Instructor materials_
