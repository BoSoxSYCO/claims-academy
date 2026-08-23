# QA Report — NA-M13-L06 "VPNs and Encryption in Plain Language"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-06-vpns-and-encryption.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.6** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; encryption flow + one-way hashing note + VPN tunnel, all labeled in **words** ("encrypted tunnel" is text, not color) ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 B, Q5 B, Q6 False, Q7 B, Q8 Encryption→B/Hashing→A/VPN→C, Q9 site, Q10 VPN — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → C/A/B/D) and Part 2 (5–8 → F/E/H/G) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 11 terms (incl. 2 VPN types) ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms resolve to glossary headwords; **added** Site-to-site VPN and Remote-access VPN as distinct terms; de-bolded generic "one", "pair", "one-way" (prose) ✅ |
| Command accuracy | Prime Directive #7 | Browser-padlock steps are real; exact menu wording marked **[TO VERIFY ON HARDWARE]**; lab is read-only — nothing fabricated ✅ |

New glossary terms (11): **Plaintext, Ciphertext, Key (encryption), Symmetric encryption, Asymmetric encryption, Hashing, VPN (Virtual Private Network), Site-to-site VPN, Remote-access VPN, Tunnel, IPsec.** (Encryption/TLS from 10-04, HTTPS from 10-03, confidentiality/integrity/checksum from 13-01 all reused.) Footer bumped to NA-M13-L06.
Cheat sheet: `network-security-quick-reference.md` gained the VPNs & encryption section.
Module 13 README: 13-06 Published (6 of 7).

> **Reading-level note:** FK 7.6 on the first pass — in target, no remediation. Sixth straight Module-13 lesson with no remediation loop, despite dense vocab (encryption, asymmetric, confidentiality).

> **Curriculum note:** Encryption was deliberately deferred from 13-01; this lesson is its home and closes the CIA loop (encryption → confidentiality, hashing → integrity, both cross-referenced to 13-01). VPN maps to remote-access (domain 4.4).

> **Term-coverage note:** During the pre-commit grep, "site-to-site VPN" and "remote-access VPN" surfaced as bolded VPN types — because they are discrete N10-009 terms, each got its own glossary entry (rather than folding into "VPN"), and §18 was expanded to match. Shorthand "symmetric"/"asymmetric" map to their full headwords; generic "one"/"pair"/"one-way" were de-bolded in prose.

> **Accuracy note:** Encryption (plaintext/ciphertext/key, symmetric vs. asymmetric), hashing as one-way integrity, and VPN types (site-to-site vs. remote-access) with IPsec/TLS are exam-correct for N10-009 objectives 4.1/4.4.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Encryption/hashing/VPN all correct; maps to N10-009 4.1/4.4. |
| 2 | Reading level / clarity | 96 | FK 7.6; locked-box/armored-tunnel analogy carries dense vocab. |
| 3 | WHY-before-HOW structure | 97 | Opens with "data travels past many strangers." |
| 4 | Zero-assumed-knowledge | 96 | Reuses CIA/checksum (13-01), HTTPS/TLS (10); new terms defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Encryption flow + one-way hashing + VPN tunnel; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a real browser-padlock check; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; hash-is-one-way T/F; coffee-shop VPN scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all three misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added, alpha-verified, footer NA-M13-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objectives 4.1/4.4) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-06 · CompTIA Network+ N10-009 · Instructor materials_
