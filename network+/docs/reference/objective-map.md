# N10-009 Objective → Lesson Coverage Map

> **Purpose:** the authoritative table linking each CompTIA Network+ (N10-009) exam objective to the Published lesson(s) that teach it. Referenced from `docs/CURRICULUM-ROADMAP.md`; required for the pre-v1.0 coverage sign-off in `docs/PROJECT-PLAN.md`.
>
> **Source of the objective list:** the official *CompTIA Network+ N10-009 Certification Exam Objectives* document (V4.0) — the 25 sub-objective titles below are quoted from it. Lesson mappings are by **content** (what each lesson teaches). As of the front-matter re-tag, every lesson's `objective_ids` now uses these official numbers (or a non-tested label: `orientation`, `on-ramp`, `exam-readiness`), so the table below and the lesson YAML agree.

**Official domains & weights:** `[1]` Networking Concepts **23%** · `[2]` Network Implementation **20%** · `[3]` Network Operations **19%** · `[4]` Network Security **14%** · `[5]` Network Troubleshooting **24%**.

**Status:** all 16 modules (00–15) Published · 96 lessons · 2 full practice exams · per-domain flashcard decks · 482-term glossary. **22 of 25** official objectives have direct teaching coverage. Three had only incidental mentions — **1.3** (cloud), **1.8** (modern environments), and **2.4** (physical installations) — and are being filled with exam-depth supplements (see the "Supplements in progress" note under each). Four more (**1.2, 2.1, 3.4, 3.5**) are covered but at a beginner "summarize" level and are getting depth add-ons.

---

## Domain 1 — Networking Concepts (23%)

| Obj | Official title | Covered by |
|-----|----------------|------------|
| 1.1 | Explain concepts related to the OSI reference model | **M05** (05-01 → 05-05) · applied in M15-L01 |
| 1.2 | Compare and contrast networking appliances, applications, and functions | **M07** (devices: router, switch, firewall, IDS/IPS, load balancer, proxy, NAS/SAN, AP, controller) · VPN/QoS/TTL in M13-L06, M10 · **depth check** below |
| 1.3 | Summarize cloud concepts and connectivity options | ⚠️ **Gap** — only incidental mentions across M04/M07. **Supplement in progress** (cloud models, NFV/VPC, connectivity). |
| 1.4 | Explain common networking ports, protocols, services, and traffic types | **M10** (10-01 → 10-05) · services in **M09** (09-01 → 09-05) |
| 1.5 | Compare and contrast transmission media and transceivers | **M06** (06-01 → 06-06) |
| 1.6 | Compare and contrast network topologies, architectures, and types | **M04** (04-03 → 04-05) |
| 1.7 | Given a scenario, use appropriate IPv4 network addressing | **M08** (08-01 → 08-08) · applied in M15-L01 |
| 1.8 | Summarize evolving use cases for modern network environments | ⚠️ **Gap** — not taught. **Supplement in progress** (SDN/SD-WAN, SASE/SSE, IaC, zero trust, IPv6 adoption). |

> **Depth checks (Domain 1):** confirm the course covers, at exam depth — **1.2:** IDS/IPS, load balancer, proxy, NAS vs SAN, CDN, QoS, TTL; **1.3:** NFV, VPC, security groups/lists, cloud gateways, connectivity (VPN/direct connect); **1.8:** SDN/SD-WAN, SASE/SSE, infrastructure as code, IPv6 adoption, zero-trust — these are summarize-level "modern environments" topics that a beginner course may treat lightly.

## Domain 2 — Network Implementation (20%)

| Obj | Official title | Covered by |
|-----|----------------|------------|
| 2.1 | Explain characteristics of routing technologies | **M11-L05** (routing) · M07 · **depth check:** dynamic routing protocols (OSPF/BGP/EIGRP), route selection |
| 2.2 | Given a scenario, configure switching technologies and features | **M07** · **M11** (11-01 → 11-04: VLANs, trunking, STP) |
| 2.3 | Given a scenario, select and configure wireless devices and technologies | **M11-L06/L07** · M07-L04 (AP) |
| 2.4 | Explain important factors of physical installations | ⚠️ **Gap** — M06/M07-L05/M11-L08 teach cabling (1.5), the device (1.2), and design (1.6), not install *factors*. **Supplement in progress** (power/UPS/PDU, environment/HVAC, racks, cable management, grounding, fire suppression). |

## Domain 3 — Network Operations (19%)

| Obj | Official title | Covered by |
|-----|----------------|------------|
| 3.1 | Explain the purpose of organizational processes and procedures | **M12-L01** (documentation/diagrams) · **M12-L05** (policies, onboarding/offboarding, change mgmt) |
| 3.2 | Given a scenario, use network monitoring technologies | **M12-L02** (SNMP, Syslog, baselines) |
| 3.3 | Explain disaster recovery (DR) concepts | **M12-L03**, **M12-L04** (backups, 3-2-1, RAID, HA/nines) |
| 3.4 | Given a scenario, implement IPv4 and IPv6 network services | **M09** (DHCP, DNS, NAT) · **depth check:** IPv6 service specifics (SLAAC, etc.) |
| 3.5 | Compare and contrast network access and management methods | VPN in **M13-L06** · console/SSH/out-of-band in **M07-L05** · **depth check:** jump box, in-band vs out-of-band, API access |

## Domain 4 — Network Security (14%)

| Obj | Official title | Covered by |
|-----|----------------|------------|
| 4.1 | Explain the importance of basic network security concepts | **M13-L01** (CIA), **M13-L03** (AAA), **M13-L06** (VPN/encryption) |
| 4.2 | Summarize various types of attacks and their impact to the network | **M13-L02** (phishing, on-path, DDoS, etc.) |
| 4.3 | Given a scenario, apply network security features, defense techniques, and solutions | **M13-L04**, **M13-L05**, **M13-L07** (firewalls, screened subnet, hardening) |

Domain 4 has exactly three official objectives (4.1–4.3); all are covered by Module 13.

## Domain 5 — Network Troubleshooting (24%)

| Obj | Official title | Covered by |
|-----|----------------|------------|
| 5.1 | Explain the troubleshooting methodology | **M14-L01** · applied in **M14-L07** |
| 5.2 | Given a scenario, troubleshoot common cabling and physical interface issues | **M06-L06** · **M14-L04** (hardware tools), **M14-L05** (L1–L3) |
| 5.3 | Given a scenario, troubleshoot common issues with network services | **M14-L05**, **M14-L06**, **M14-L07** (DHCP/DNS/APIPA) |
| 5.4 | Given a scenario, troubleshoot common performance issues | **M14-L06** (speed, duplex, saturation, wireless) |
| 5.5 | Given a scenario, use the appropriate tool or protocol to solve networking issues | **M14-L02**, **M14-L03**, **M14-L04** (ping, tracert, ipconfig, nslookup, arp, netstat, pathping; hardware tools) |

---

## Foundation & meta lessons (not a directly tested objective)

- **`orientation` (Module 00, 5 lessons):** how the course & home lab work; study habits; workspace + lab notebook.
- **`on-ramp` (Modules 01–03, 16 lessons):** computer foundations, Windows & command line, numbers & binary — beginner readiness before the tested domains.
- **`exam-readiness` (Module 15, lessons 02–07):** exam-day logistics, PBQ practice, two full practice exams + review, weak-spot/flashcard sprint, the 7-day plan.

## Assessment & reference coverage

- **Practice exams:** two full 90-question exams (`practice-exam-01`, `practice-exam-02`) spanning all five domains; every item tagged with a domain + source module.
- **Flashcards:** per-domain master decks in `assessments/flashcards/` (`flashcards-domain-1-concepts` … `-5-troubleshooting`) + combined `flashcards-core`.
- **Glossary:** `resources/glossary/glossary-all.md` — 482 headwords; audit found no missing key term.

---

## Sign-off checklist (Curriculum Director, pre-v1.0)

- [x] All 16 modules (00–15) Published.
- [ ] Every one of the 25 official N10-009 objectives has teaching coverage — **22/25 direct today**; 1.3, 1.8, 2.4 supplements in progress (table above).
- [x] Two full-length practice exams complete.
- [x] Flashcard decks complete (core + per-domain).
- [x] Glossary covers every key term.
- [ ] **Fill the three gaps:** exam-depth supplements for **1.3** (cloud), **1.8** (modern environments), **2.4** (physical installations) — in progress.
- [ ] **Depth add-ons:** lift **1.2** (full appliance list), **2.1** (dynamic routing), **3.4** (IPv6 services), **3.5** (management methods) from summarize-level to exam depth — in progress.
- [x] **Front-matter re-tag:** every lesson's `objective_ids` now uses the official numbers in this table (or a non-tested label).

## Front-matter note (numbering)

The `objective_ids` in lesson YAML front-matter now use the **official N10-009 numbers** shown in this map (IPv4 addressing **1.7**, topologies/types **1.6**, services **3.4**, ports/protocols **1.4**, and so on). Lessons that map to no tested objective carry a plain-language label instead: `orientation` (Module 00), `on-ramp` (Modules 01–03), or `exam-readiness` (Module 15 lessons 02–07). This map remains the authoritative content crosswalk; the front-matter and this table now agree.

---
_NetworkAcademy+ · Objective Coverage Map · CompTIA Network+ N10-009 · objectives quoted from CompTIA's official N10-009 exam objectives (V4.0)_
