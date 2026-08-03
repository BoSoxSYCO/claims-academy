# Curriculum Roadmap — NetworkAcademy+

**Exam target:** CompTIA Network+ **N10-009**
**Structure:** 16 modules · ~95 lessons · 16 lab exercises · integrated home-lab build
**Reading level:** ~7th grade · **Approach:** WHY before HOW · zero assumed knowledge

This roadmap is the single source of truth for *what* gets taught and *in what order*. Lesson counts are planned targets; every lesson carries a unique ID (see [Naming Conventions](NAMING-CONVENTIONS.md)).

---

## The learning journey at a glance

```
   ZERO-KNOWLEDGE ON-RAMP            CORE NETWORKING              EXAM DOMAINS DEEP-DIVE         READINESS
 ┌───────────────────────┐   ┌──────────────────────────┐   ┌────────────────────────────┐   ┌──────────┐
 │ 00 Orientation        │   │ 04 Networking Basics     │   │ 11 Implementation          │   │ 15       │
 │ 01 Computer Basics    │──▶│ 05 OSI & TCP/IP Models   │──▶│ 12 Operations              │──▶│ Capstone │
 │ 02 Windows & CLI      │   │ 06 Cabling & Media       │   │ 13 Security                │   │ + Exam   │
 │ 03 Numbers & Binary   │   │ 07 Devices & Switching   │   │ 14 Troubleshooting         │   │ Readiness│
 │                       │   │ 08 IP Addressing         │   │                            │   │          │
 │                       │   │ 09 Core Services         │   │                            │   │          │
 │                       │   │ 10 Ports & Protocols     │   │                            │   │          │
 └───────────────────────┘   └──────────────────────────┘   └────────────────────────────┘   └──────────┘
        Modules 00–03               Modules 04–10                    Modules 11–14              Module 15
```

**Legend for objective mapping:** `[1]` Networking Concepts · `[2]` Network Implementation · `[3]` Network Operations · `[4]` Network Security · `[5]` Network Troubleshooting · `[on-ramp]` beginner foundation, not directly tested.

---

## Phase 1 — The Zero-Knowledge On-Ramp (Modules 00–03)

*Goal: a true beginner becomes comfortable with a computer before we say the word "network."*

### Module 00 — Orientation: How to Use This Academy
> **You will be able to:** navigate the course, set up a study routine, and know how you'll be tested.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 00-01 | Welcome — what Network+ is and why it's worth it | on-ramp |
| 00-02 | How this academy works (modules, labs, quizzes) | on-ramp |
| 00-03 | How to study so it sticks (spaced practice, notes) | on-ramp |
| 00-04 | Meet your home lab — a tour of your equipment | on-ramp |
| 00-05 | Setting up your workspace and a lab notebook | on-ramp |

### Module 01 — Computer Foundations
> **You will be able to:** name the parts of a computer and explain what each one does.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 01-01 | What *is* a computer, really? | on-ramp |
| 01-02 | The parts inside: CPU, memory, storage | on-ramp |
| 01-03 | Inputs, outputs, and ports on your laptop | on-ramp |
| 01-04 | What an operating system does | on-ramp |
| 01-05 | Hardware vs. software (and why it matters) | on-ramp |
| 01-06 | What a "server" and a "client" are | on-ramp / [1] |

### Module 02 — Windows & the Command Line
> **You will be able to:** confidently move around Windows and run your first commands.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 02-01 | Files, folders, and how Windows organizes them | on-ramp |
| 02-02 | Finding and opening the tools you'll use | on-ramp |
| 02-03 | Meet the Command Prompt and PowerShell | on-ramp / [5] |
| 02-04 | Your first commands: `ipconfig`, `ping`, `cd`, `dir` | on-ramp / [5] |
| 02-05 | Reading command output without fear | on-ramp / [5] |

### Module 03 — How Numbers Work in Computers
> **You will be able to:** read binary and hexadecimal — the secret language behind IP addresses.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 03-01 | Why computers only understand 1s and 0s | on-ramp |
| 03-02 | Bits, bytes, and counting in binary | on-ramp / [1] |
| 03-03 | Converting binary ↔ decimal the easy way | on-ramp / [1] |
| 03-04 | Hexadecimal — shorthand for computers | on-ramp / [1] |
| 03-05 | Why this matters for IP and MAC addresses | on-ramp / [1] |

---

## Phase 2 — Core Networking (Modules 04–10)

*Goal: build the mental model of how networks actually move information.*

### Module 04 — Networking Fundamentals
> **You will be able to:** explain what a network is, why it exists, and the main types.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 04-01 | Why networks exist (the problem they solve) | [1] |
| 04-02 | Nodes, links, and the idea of a "connection" | [1] |
| 04-03 | LAN, WAN, MAN, PAN, and WLAN explained | [1] |
| 04-04 | Network topologies (star, bus, ring, mesh) | [1] |
| 04-05 | Client-server vs. peer-to-peer | [1] |
| 04-06 | Bandwidth, throughput, and latency in plain words | [1] / [3] |

### Module 05 — Network Models: OSI & TCP/IP
> **You will be able to:** use the OSI and TCP/IP models to reason about any network problem.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 05-01 | Why we need a "model" of a network | [1] |
| 05-02 | The OSI 7 layers — a floor-by-floor tour | [1] |
| 05-03 | The TCP/IP model and how it maps to OSI | [1] |
| 05-04 | Encapsulation: how data gets wrapped and unwrapped | [1] |
| 05-05 | Following one packet through all the layers | [1] / [5] |

### Module 06 — Cabling, Connectors & Physical Media
> **You will be able to:** identify, choose, build, and test the physical cables of a network.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 06-01 | Copper cables: twisted pair (Cat5e–Cat8) | [2] |
| 06-02 | Connectors and jacks (RJ45, keystones) | [2] |
| 06-03 | Fiber optic basics (single vs. multimode) | [2] |
| 06-04 | Straight-through vs. crossover, T568A/B | [2] |
| 06-05 | Ethernet standards and speeds | [2] |
| 06-06 | Cable testing and common physical problems | [2] / [5] |

### Module 07 — Network Devices & Ethernet Switching
> **You will be able to:** explain what each network device does and log into your managed switch.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 07-01 | Hubs, switches, routers — what's the difference? | [1] / [2] |
| 07-02 | MAC addresses and how a switch learns them | [1] |
| 07-03 | Broadcast vs. collision domains | [1] |
| 07-04 | Access points, firewalls, and other gear | [1] / [2] |
| 07-05 | Meet the Dell PowerConnect 3424 (managed switch) | [2] |
| 07-06 | First login: console vs. web management | [2] / [3] |

### Module 08 — IP Addressing & Subnetting
> **You will be able to:** read, plan, and subnet IPv4 and IPv6 addresses with confidence.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 08-01 | What an IP address is and why we need it | [1] |
| 08-02 | IPv4 structure, classes, and private ranges | [1] |
| 08-03 | Subnet masks explained without fear | [1] |
| 08-04 | CIDR notation and slash values | [1] |
| 08-05 | Subnetting step by step (the beginner method) | [1] |
| 08-06 | Subnetting practice and shortcuts | [1] |
| 08-07 | IPv6: why it exists and how to read it | [1] |
| 08-08 | Public vs. private, and the role of NAT (preview) | [1] |

### Module 09 — Core Network Services
> **You will be able to:** explain and configure DHCP, DNS, and NAT — the services that make networks usable.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 09-01 | DHCP: how devices get an address automatically | [1] / [2] |
| 09-02 | DNS: turning names into numbers | [1] |
| 09-03 | NAT and PAT: sharing one public address | [1] |
| 09-04 | Gateways and how traffic leaves your network | [1] |
| 09-05 | Time (NTP) and other supporting services | [1] / [3] |

### Module 10 — Ports, Protocols & Applications
> **You will be able to:** name the key ports and protocols the exam expects you to know cold.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 10-01 | What ports and protocols are (the mailbox idea) | [1] |
| 10-02 | TCP vs. UDP — reliable vs. fast | [1] |
| 10-03 | The must-know ports (web, mail, remote, files) | [1] |
| 10-04 | Secure vs. insecure protocol pairs | [1] / [4] |
| 10-05 | A memory system for the port table | [1] |

---

## Phase 3 — Exam Domains Deep-Dive (Modules 11–14)

*Goal: master the four heaviest, most hands-on exam domains.*

### Module 11 — Network Implementation
> **You will be able to:** build VLANs, understand routing, and set up wireless — on real gear.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 11-01 | VLANs: why we split one switch into many | [2] |
| 11-02 | Configuring VLANs on the Dell 3424 | [2] |
| 11-03 | Trunks, tagging (802.1Q), and access ports | [2] |
| 11-04 | Spanning Tree Protocol (loop prevention) | [2] |
| 11-05 | Routing basics: static vs. dynamic | [2] |
| 11-06 | Inter-VLAN routing (getting VLANs to talk) | [2] |
| 11-07 | Wireless standards, channels, and security | [2] |
| 11-08 | Designing a small network end to end | [2] |

### Module 12 — Network Operations
> **You will be able to:** document, monitor, and keep a network healthy and available.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 12-01 | Documentation: diagrams, labels, and IPAM | [3] |
| 12-02 | Monitoring, logs, SNMP, and alerts | [3] |
| 12-03 | Availability: redundancy, uptime, and SLAs | [3] |
| 12-04 | Backups, disaster recovery, and change control | [3] |
| 12-05 | Common network policies and best practices | [3] / [4] |

### Module 13 — Network Security
> **You will be able to:** explain core threats and harden a network against them.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 13-01 | Security goals: confidentiality, integrity, availability | [4] |
| 13-02 | Common attacks (spoofing, MITM, DoS, social) | [4] |
| 13-03 | Authentication, authorization, and accounting | [4] |
| 13-04 | Firewalls, ACLs, and network segmentation | [4] |
| 13-05 | Securing switch ports and wireless | [4] |
| 13-06 | VPNs and encryption in plain language | [4] |
| 13-07 | Hardening checklist for your home lab | [4] |

### Module 14 — Network Troubleshooting
> **You will be able to:** diagnose and fix network problems using a repeatable method and the right tools.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 14-01 | The CompTIA troubleshooting methodology | [5] |
| 14-02 | Command-line tools: ping, tracert, ipconfig, nslookup | [5] |
| 14-03 | More tools: arp, netstat, pathping | [5] |
| 14-04 | Hardware tools: cable testers, loopbacks | [5] |
| 14-05 | Troubleshooting connectivity (Layers 1–3) | [5] |
| 14-06 | Troubleshooting names, speed, and wireless | [5] |
| 14-07 | Worked scenarios: "the internet is down" | [5] |

---

## Phase 4 — Readiness (Module 15)

### Module 15 — Capstone & Exam Readiness
> **You will be able to:** prove your skills in a full build and walk into the exam prepared.

| Lesson | Title | Maps to |
|--------|-------|---------|
| 15-01 | Capstone project: build the whole home lab | [1][2][3][4][5] |
| 15-02 | Exam-day logistics and what to expect | exam prep |
| 15-03 | Performance-based question (PBQ) practice | exam prep |
| 15-04 | Full-length practice exam #1 + review | exam prep |
| 15-05 | Full-length practice exam #2 + review | exam prep |
| 15-06 | Weak-spot review and final flashcard sprint | exam prep |
| 15-07 | Your 7-day pre-exam plan | exam prep |

---

## Integrated Home-Lab Track

The home lab is not a separate course — it is woven through the modules. Each build stage lives in `labs/home-lab-guide/` and is unlocked by the module noted below.

| Lab stage | What you build | Unlocked after |
|-----------|----------------|----------------|
| LAB-A | Wire and test your first Ethernet link | Module 06 |
| LAB-B | Log into the Dell 3424 and tour it | Module 07 |
| LAB-C | Plan your home IP scheme and subnets | Module 08 |
| LAB-D | Watch DHCP/DNS work on your router | Module 09 |
| LAB-E | Create and test VLANs on the switch | Module 11 |
| LAB-F | Add inter-VLAN routing and wireless | Module 11 |
| LAB-G | Document and secure the network | Modules 12–13 |
| LAB-H | Break it and fix it (troubleshooting drills) | Module 14 |
| LAB-CAP | Full capstone build from scratch | Module 15 |

---

## Coverage guarantee

Before v1.0 ships, the Curriculum Director signs a checklist confirming **every published N10-009 objective ID maps to at least one Published lesson above.** The detailed objective-ID-to-lesson table is maintained in `docs/reference/objective-map.md` (created during production).

---
*Next document: [MILESTONE-SCHEDULE.md](MILESTONE-SCHEDULE.md)*
