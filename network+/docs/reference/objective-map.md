# N10-009 Objective → Lesson Coverage Map

> **Purpose:** the authoritative table linking each CompTIA Network+ (N10-009) exam objective to the Published lesson(s) that teach it. Referenced from `docs/CURRICULUM-ROADMAP.md`; required for the pre-v1.0 coverage sign-off in `docs/PROJECT-PLAN.md`.
>
> **How this was built:** the objective-ID → lesson rows are generated from each lesson's front-matter `objective_ids`, so they reflect what the course actually claims to cover. The domain names use CompTIA's five N10-009 domains. **Objective descriptions below are course-side summaries of what the mapped lessons teach — not verbatim CompTIA objective titles.** Before the Curriculum Director signs off, reconcile this table against the official *CompTIA Network+ N10-009 Exam Objectives* document to confirm exact wording and that no official sub-objective is left unmapped. Items needing that check are marked **[VERIFY WITH CompTIA]**.

**Domain legend:** `[1]` Networking Concepts · `[2]` Network Implementation · `[3]` Network Operations · `[4]` Network Security · `[5]` Network Troubleshooting · `on-ramp` / `orientation` / `exam-readiness` = foundation & meta lessons (not a directly tested objective).

**Status:** all 16 modules (00–15) Published · 96 lessons · 2 full practice exams · flashcard decks · 482-term glossary.

---

## Domain 1 — Networking Concepts

| Obj | What the mapped lessons teach | Published lessons |
|-----|-------------------------------|-------------------|
| 1.1 | OSI & TCP/IP models, layers, PDUs; the capstone build applies them | NA-M05-L01 · NA-M05-L02 · NA-M05-L03 · NA-M05-L04 · NA-M05-L05 · NA-M15-L01 |
| 1.2 | Network types & topologies (LAN/WAN/PAN, star/mesh, P2P/client-server, cloud) | NA-M04-L03 · NA-M04-L04 · NA-M04-L05 · NA-M04-L06 |
| 1.4 | IPv4/IPv6 addressing, subnetting, ARP, and core services (DHCP, DNS, NAT) | NA-M08-L01 … NA-M08-L08 · NA-M09-L01 … NA-M09-L05 |
| 1.5 | Cabling, media & transceivers; ports, protocols & their applications | NA-M06-L01 … NA-M06-L06 · NA-M10-L01 … NA-M10-L05 |

> **[VERIFY WITH CompTIA]** No lesson declares 1.3, 1.6, 1.7, or 1.8. Confirm against the official objectives whether those IDs exist for N10-009 and, if so, whether their content is already covered under the rows above (e.g., transceivers/services) or needs an explicit mapping.

## Domain 2 — Network Implementation

| Obj | What the mapped lessons teach | Published lessons |
|-----|-------------------------------|-------------------|
| 2.1 | Switching, devices & routing basics; static addressing; the capstone build | NA-M07-L01 … NA-M07-L05 · NA-M09-L01 · NA-M11-L08 · NA-M15-L01 |
| 2.2 | Routing technologies (static routes and related) | NA-M11-L05 |
| 2.3 | VLANs, trunking, wireless & switch features | NA-M07-L05 · NA-M07-L06 · NA-M11-L01 … NA-M11-L04 · NA-M11-L06 · NA-M15-L01 |
| 2.4 | Network-implementation topics (e.g., advanced switching/segmentation) | NA-M11-L07 |

> **[VERIFY WITH CompTIA]** No lesson declares 2.5. Confirm whether that ID exists for N10-009 and map it if so.

## Domain 3 — Network Operations

| Obj | What the mapped lessons teach | Published lessons |
|-----|-------------------------------|-------------------|
| 3.1 | Documentation, monitoring (SNMP, Syslog, baselines) | NA-M07-L06 · NA-M09-L05 · NA-M12-L02 |
| 3.2 | Network documentation & diagrams; change/onboarding processes | NA-M12-L01 |
| 3.3 | Disaster recovery, backups, high availability (3-2-1, RAID, nines) | NA-M12-L03 · NA-M12-L04 |
| 3.4 | Operations processes & policies (onboarding/offboarding, change mgmt) | NA-M12-L05 |

> **[VERIFY WITH CompTIA]** No lesson declares 3.5. Confirm whether that ID exists for N10-009 and map it if so.

## Domain 4 — Network Security

| Obj | What the mapped lessons teach | Published lessons |
|-----|-------------------------------|-------------------|
| 4.1 | Security concepts: CIA, AAA, least privilege; secure protocols; VPNs | NA-M10-L04 · NA-M13-L01 · NA-M13-L03 · NA-M13-L06 |
| 4.2 | Attacks & threats (phishing, on-path, DDoS) | NA-M13-L02 |
| 4.3 | Defenses: firewalls, screened subnets, hardening | NA-M13-L04 · NA-M13-L05 · NA-M13-L07 |
| 4.4 | Hardening & remote access (VPN types) | NA-M13-L06 |

> **[VERIFY WITH CompTIA]** No lesson declares 4.5. Confirm whether that ID exists for N10-009 and map it if so.

## Domain 5 — Network Troubleshooting

| Obj | What the mapped lessons teach | Published lessons |
|-----|-------------------------------|-------------------|
| 5.1 | The CompTIA 7-step troubleshooting methodology | NA-M14-L01 · NA-M14-L07 |
| 5.2 | Hardware & software tools (cable testers, loopbacks; CLI tools) | NA-M06-L06 · NA-M14-L05 · NA-M14-L06 · NA-M14-L07 |
| 5.3 | Troubleshooting connectivity by layer; the capstone build | NA-M04-L06 · NA-M14-L05 · NA-M14-L06 · NA-M14-L07 · NA-M15-L01 |
| 5.4 | Troubleshooting names, speed & wireless | NA-M14-L06 · NA-M14-L07 |
| 5.5 | Command-line troubleshooting tools (ping, tracert, ipconfig, nslookup, arp, netstat, pathping) | NA-M14-L02 · NA-M14-L03 · NA-M14-L04 · NA-M14-L07 |

Domain 5 has a lesson mapped to every declared sub-objective (5.1–5.5).

---

## Foundation & meta lessons (not a directly tested objective)

These lessons build beginner readiness or exam skills rather than mapping to a single exam objective.

- **`orientation` (Module 00, 5 lessons):** NA-M00-L01 … NA-M00-L05 — how the course and home lab work; study habits; workspace + lab notebook.
- **`on-ramp` (Modules 01–03, 16 lessons):** NA-M01-L01 … NA-M03-L05 — computer foundations, Windows & command line, numbers & binary. Some also carry a domain tag (e.g., NA-M01-L06 → [1], NA-M02-L03…L05 → [5], NA-M03-L05 → [1]).
- **`exam-readiness` (Module 15, 6 lessons):** NA-M15-L02 … NA-M15-L07 — exam-day logistics, PBQ practice, two full practice exams + review, weak-spot/flashcard sprint, the 7-day plan.

---

## Assessment & reference coverage

- **Practice exams:** two full 90-question N10-009 practice exams (`practice-exam-01`, `practice-exam-02`), each spanning all five domains, every item tagged with its objective + source module.
- **Flashcards:** master decks by domain in `assessments/flashcards/` (see `flashcards-domain-1-concepts.md` … `flashcards-domain-5-troubleshooting.md`), plus the combined `flashcards-core` deck.
- **Glossary:** `resources/glossary/glossary-all.md` — 482 headwords, alphabetical, every bolded key term defined.

---

## Sign-off checklist (Curriculum Director, pre-v1.0)

- [x] All 16 modules (00–15) Published.
- [x] Every declared objective ID maps to ≥1 Published lesson (table above).
- [x] Two full-length practice exams complete.
- [x] Flashcard decks complete (core + per-domain).
- [x] Glossary covers every bolded key term.
- [ ] **[VERIFY WITH CompTIA]** Reconcile the objective IDs above against the official *CompTIA Network+ N10-009 Exam Objectives* document — confirm exact objective titles and that every official sub-objective (including any 1.3 / 1.6–1.8 / 2.5 / 3.5 / 4.5 that may exist) is represented. This is the one open item requiring the official objectives PDF.

---
_NetworkAcademy+ · Objective Coverage Map · CompTIA Network+ N10-009_
