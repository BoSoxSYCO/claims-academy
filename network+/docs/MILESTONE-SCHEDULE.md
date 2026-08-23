# Milestone Schedule — NetworkAcademy+

This schedule serves **two audiences**:
- **You, the learner** — how long the journey takes and when each milestone lands.
- **The production team** — the order lessons are built and released.

Pick **one pace track** below. Everything else in this document scales to your choice.

---

## Choose your pace

| Track | Weekly study time | Total length | Best for |
|-------|------------------|--------------|----------|
| 🐢 **Steady** | ~5 hrs/week | ~24 weeks (6 months) | Busy schedule, no rush |
| ⭐ **Standard** *(default)* | ~8–10 hrs/week | ~16 weeks (4 months) | Balanced, recommended |
| 🚀 **Intensive** | ~15–20 hrs/week | ~8 weeks (2 months) | Career-change sprint |

> The week numbers below use the **Standard** track. For Steady, multiply weeks by ~1.5. For Intensive, halve them.

---

## The 6 major milestones

Each milestone is a real, provable checkpoint — not just "finished reading."

| Milestone | Name | You can prove it by… | Standard week |
|-----------|------|----------------------|---------------|
| **M1** | **Computer-Ready** | Navigating Windows, running `ipconfig`/`ping`, reading binary | End of Week 2 |
| **M2** | **Networking Literate** | Explaining OSI layers and drawing a simple network | End of Week 5 |
| **M3** | **Addressing Master** | Subnetting on paper + planning your home IP scheme | End of Week 8 |
| **M4** | **Lab Builder** | VLANs configured and routing between them on real gear | End of Week 11 |
| **M5** | **Operator & Defender** | Documenting, monitoring, and securing your network | End of Week 13 |
| **M6** | **Exam-Ready** | Scoring 85%+ on two full practice exams | End of Week 16 |

---

## Week-by-week plan (Standard track)

| Week | Modules in focus | Lab milestone | Milestone reached |
|------|------------------|---------------|-------------------|
| 1 | 00 Orientation · 01 Computer Foundations | Tour equipment | |
| 2 | 02 Windows & CLI · 03 Numbers & Binary | — | **M1 · Computer-Ready** |
| 3 | 04 Networking Fundamentals | — | |
| 4 | 05 OSI & TCP/IP Models | — | |
| 5 | 06 Cabling & Media | LAB-A (wire a link) | **M2 · Networking Literate** |
| 6 | 07 Devices & Switching | LAB-B (switch login) | |
| 7 | 08 IP Addressing & Subnetting (part 1) | — | |
| 8 | 08 Subnetting (part 2) · 09 Core Services | LAB-C, LAB-D | **M3 · Addressing Master** |
| 9 | 10 Ports & Protocols | — | |
| 10 | 11 Implementation (VLANs, trunks, STP) | LAB-E | |
| 11 | 11 Implementation (routing, wireless, design) | LAB-F | **M4 · Lab Builder** |
| 12 | 12 Network Operations | LAB-G (document) | |
| 13 | 13 Network Security | LAB-G (secure) | **M5 · Operator & Defender** |
| 14 | 14 Troubleshooting | LAB-H (break/fix) | |
| 15 | 15 Capstone build + PBQ practice | LAB-CAP | |
| 16 | 15 Practice exams + weak-spot review | — | **M6 · Exam-Ready** |

**Suggested exam booking:** schedule your CompTIA Network+ exam for the **end of Week 16 or start of Week 17**, while everything is fresh.

---

## Production release plan (for the build team)

Lessons are produced and released **module by module, in order**, so you can start learning Module 00 while later modules are still being written. Each release is a versioned batch.

| Release | Contents | Definition of done |
|---------|----------|--------------------|
| **R0 — Blueprint** *(current)* | All planning docs + repo scaffold | Approved by product owner |
| **R1 — On-Ramp** | Modules 00–03 | All lessons Published; M1 achievable |
| **R2 — Core I** | Modules 04–05 | Published; M2 achievable |
| **R3 — Physical & Devices** | Modules 06–07 | Published; LAB-A/B tested |
| **R4 — Addressing & Services** | Modules 08–10 | Published; M3 achievable |
| **R5 — Implementation** | Module 11 | Published; M4 achievable; LAB-E/F tested |
| **R6 — Ops & Security** | Modules 12–13 | Published; M5 achievable |
| **R7 — Troubleshooting** | Module 14 | Published; LAB-H tested |
| **R8 — Readiness** | Module 15 + practice exams + flashcards | M6 achievable; coverage checklist signed |

Each release is committed and pushed with a tagged milestone (see [Naming Conventions](NAMING-CONVENTIONS.md) for tag format).

---

## Weekly rhythm (a healthy study loop)

To keep momentum and make it stick, each study week follows the same loop:

```
 LEARN ──▶ SEE ──▶ DO ──▶ CHECK ──▶ REVIEW
 read      diagrams  lab    quiz      flashcards
 lessons   & photos  work   yourself  from earlier weeks
```

Spaced review of **earlier** flashcards every week is what turns short-term reading into exam-day memory.

---
*Next document: [REPOSITORY-STRUCTURE.md](REPOSITORY-STRUCTURE.md)*
