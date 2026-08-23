# Master Curriculum — NetworkAcademy+

**The complete learning path from _"I don't know what RAM is"_ to _"I can confidently pass the CompTIA Network+ (N10-009) exam."_**

This is the detailed build of the [Curriculum Roadmap](CURRICULUM-ROADMAP.md). The roadmap is the quick map; **this document is the full itinerary** — every Unit, Module, Lesson, Lab, Project, Review Day, and Practice Exam, with estimated times, prerequisites, required equipment, and learning objectives.

Every item builds on the ones before it. Nothing assumes knowledge that wasn't taught earlier.

---

## How to read this curriculum

**Item types**

| Icon | Type | What it is |
|------|------|-----------|
| 📖 | **Lesson** | Core teaching content (read + diagram + photo) |
| 🔧 | **Lab** | Hands-on practice on real equipment |
| 🏗️ | **Project** | A bigger, graded, real-world deliverable that combines several lessons |
| 🔁 | **Review Day** | Consolidation: re-quiz, flashcards, fix weak spots (no new material) |
| 📝 | **Practice Exam / Quiz** | A timed check of what you've learned |
| 🎓 | **Capstone** | The final full-build project |

**Equipment tiers** (so we don't repeat the list every time)

| Tier | You need… |
|------|-----------|
| **E0** | Nothing but this course (reading only) |
| **E1** | Windows laptop |
| **E2** | Windows laptop + one Ethernet cable |
| **E3** | Windows laptop + Dell PowerConnect 3424 switch + cable |
| **E4** | Full lab: laptop + Dell 3424 switch + home router + cables |

**Time estimates** are for an average beginner, including re-reading and note-taking. Faster/slower is normal.

---

## The whole program at a glance

| Unit | Name | Modules | Lessons | Labs | Project | Est. time |
|------|------|---------|---------|------|---------|-----------|
| **1** | Computer & Digital Foundations | 00–03 | 21 | 2 | 🏗️ P1 | ~10 hrs |
| **2** | Networking Foundations | 04–05 | 11 | 1 | 🏗️ P2 | ~7 hrs |
| **3** | Physical Networks & Devices | 06–07 | 12 | 3 | 🏗️ P3 | ~10 hrs |
| **4** | Addressing & Core Services | 08–10 | 18 | 3 | 🏗️ P4 | ~15 hrs |
| **5** | Building Networks (Implementation) | 11 | 8 | 2 | 🏗️ P5 | ~11 hrs |
| **6** | Running & Securing Networks | 12–13 | 12 | 2 | 🏗️ P6 | ~11 hrs |
| **7** | Troubleshooting | 14 | 7 | 1 | 🏗️ P7 | ~8 hrs |
| **8** | Certification Readiness | 15 | 7 | 1 | 🎓 Capstone | ~15 hrs |
| | **Totals** | **16** | **~96** | **15** | **7 + capstone** | **~87 hrs core + review/exams ≈ 120–140 hrs** |

> A **diagnostic quiz** sits at the very start (before Unit 1) so you get a baseline. A **Review Day** closes every Unit. **Two full practice exams + a final readiness exam** live in Unit 8.

---

## Milestone map (how Units connect to the milestones)

```
Unit 1 ─▶ M1 Computer-Ready
Unit 2 ─▶ M2 Networking Literate
Unit 3 ─┐
Unit 4 ─┴▶ M3 Addressing Master
Unit 5 ─▶ M4 Lab Builder
Unit 6 ─▶ M5 Operator & Defender
Unit 7 ─┐
Unit 8 ─┴▶ M6 Exam-Ready ─▶ 🎓 Sit the exam
```

---

# 📝 Pre-Course Diagnostic (Day 0)

| Field | Detail |
|-------|--------|
| **Type** | 📝 Practice Exam (baseline, ungraded) |
| **Time** | 30 min |
| **Equipment** | E0 |
| **Prerequisites** | None |
| **Objective** | Get an honest starting score so you can watch yourself grow. It's normal to score low — that's the point. |
| **Note** | You are **not** expected to pass this. Answer what you can, guess the rest, then begin Unit 1. |

---

# UNIT 1 — Computer & Digital Foundations

> **The on-ramp.** Before we say the word "network," you'll understand the machine in front of you.

| Field | Detail |
|-------|--------|
| **Modules** | 00 Orientation · 01 Computer Foundations · 02 Windows & CLI · 03 Numbers & Binary |
| **Equipment** | E1 (Windows laptop) |
| **Prerequisites** | None — this is the true starting line |
| **Estimated time** | ~10 hours |
| **Unit objectives** | Navigate the course and your laptop · name every major computer part and its job · move confidently around Windows and run your first commands · read binary and hexadecimal |
| **Milestone reached** | ⭐ **M1 — Computer-Ready** |

### Module 00 — Orientation (📖 90 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M00-L01 | Welcome — what Network+ is and why it's worth it | 15m | — | Explain what the certification is and what jobs it opens |
| NA-M00-L02 | How this academy works | 15m | L01 | Navigate modules, labs, quizzes, and status boards |
| NA-M00-L03 | How to study so it sticks | 20m | L02 | Set up spaced practice and a note habit |
| NA-M00-L04 | Meet your home lab (equipment tour) | 20m | L03 | Identify each piece of your gear and its role |
| NA-M00-L05 | Setting up your workspace and lab notebook | 20m | L04 | Prepare a safe, organized study and lab space |

### Module 01 — Computer Foundations (📖 120 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M01-L01 | What *is* a computer, really? | 20m | M00 | Describe input→process→output in plain terms |
| NA-M01-L02 | The parts inside: CPU, memory (RAM), storage | 25m | L01 | Explain what the CPU, **RAM**, and storage each do |
| NA-M01-L03 | Inputs, outputs, and ports on your laptop | 20m | L02 | Identify the physical ports on your own laptop |
| NA-M01-L04 | What an operating system does | 20m | L03 | Explain the job of Windows as the "traffic cop" |
| NA-M01-L05 | Hardware vs. software | 15m | L04 | Sort real examples into hardware or software |
| NA-M01-L06 | What a "server" and a "client" are | 20m | L05 | Explain the client–server idea with an everyday example |

### Module 02 — Windows & the Command Line (📖 120 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M02-L01 | Files, folders, and how Windows organizes them | 25m | M01 | Create, find, and move files and folders |
| NA-M02-L02 | Finding and opening the tools you'll use | 20m | L01 | Locate Settings, Control Panel, and the terminal |
| NA-M02-L03 | Meet Command Prompt and PowerShell | 20m | L02 | Open a terminal and understand what it is |
| NA-M02-L04 | Your first commands: `ipconfig`, `ping`, `cd`, `dir` | 30m | L03 | Run four core commands and read their results |
| NA-M02-L05 | Reading command output without fear | 25m | L04 | Interpret common output lines calmly |

### Module 03 — How Numbers Work in Computers (📖 120 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M03-L01 | Why computers only understand 1s and 0s | 20m | M01 | Explain why digital = on/off |
| NA-M03-L02 | Bits, bytes, and counting in binary | 25m | L01 | Count in binary up to 255 |
| NA-M03-L03 | Converting binary ↔ decimal the easy way | 30m | L02 | Convert an 8-bit number both directions |
| NA-M03-L04 | Hexadecimal — shorthand for computers | 25m | L03 | Read a hex value and know where it's used |
| NA-M03-L05 | Why this matters for IP and MAC addresses | 20m | L04 | Connect binary/hex to addresses you'll meet later |

### Hands-on in Unit 1

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 lab-02-01 First commands drill | 30m | E1 | NA-M02-L04 | Run `ipconfig`, `ping`, `cd`, `dir` and record results in your lab notebook |
| 🔧 lab-03-01 Binary number gym | 30m | E1 | NA-M03-L03 | Convert 10 numbers by hand; check with the Windows calculator |

### 🏗️ Project 1 — "Know Your Machine"

| Field | Detail |
|-------|--------|
| **Time** | 60 min · **Equipment** E1 · **Prereq** all of Unit 1 |
| **Deliverable** | A one-page profile of your own laptop: CPU, RAM amount, storage type/size, OS version, and a labeled photo of its ports — plus the output of `ipconfig` pasted in and explained in your own words. |
| **Objectives assessed** | Computer parts, OS role, basic commands, reading output |
| **Why it matters** | Proves you can describe and inspect a real computer — the foundation everything else stands on. |

### 🔁 Review Day 1 + 📝 Unit 1 Quiz

| Field | Detail |
|-------|--------|
| **Time** | 60 min · **Equipment** E1 |
| **Activities** | Flashcards (Unit 1 terms) · re-do any weak lab · **📝 Unit 1 Quiz (~15 Q)** |
| **Pass bar** | 80% before moving on. Below that? Re-read the weak module, then retry. |
| **Milestone check** | ✅ **M1 — Computer-Ready** |

---

# UNIT 2 — Networking Foundations

> Now the real subject begins. What a network *is*, why it exists, and the mental models pros use.

| Field | Detail |
|-------|--------|
| **Modules** | 04 Networking Fundamentals · 05 OSI & TCP/IP Models |
| **Equipment** | E1 (a cable helps for the project but isn't required) |
| **Prerequisites** | Unit 1 complete (esp. client/server, binary) |
| **Estimated time** | ~7 hours |
| **Unit objectives** | Explain why networks exist and their types · describe topologies · use the OSI and TCP/IP models to reason about any network problem · trace a packet through the layers |
| **Milestone reached** | ⭐ **M2 — Networking Literate** |

### Module 04 — Networking Fundamentals (📖 120 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M04-L01 | Why networks exist (the problem they solve) | 20m | Unit 1 | State the real problems networking solves |
| NA-M04-L02 | Nodes, links, and "connections" | 15m | L01 | Define node, link, and endpoint |
| NA-M04-L03 | LAN, WAN, MAN, PAN, WLAN | 25m | L02 | Match each network type to a real example |
| NA-M04-L04 | Topologies (star, bus, ring, mesh) | 20m | L03 | Draw and compare the four topologies |
| NA-M04-L05 | Client–server vs. peer-to-peer | 20m | L04 | Explain the trade-offs of each model |
| NA-M04-L06 | Bandwidth, throughput, latency | 20m | L05 | Use each term correctly in a sentence |

### Module 05 — Network Models: OSI & TCP/IP (📖 140 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M05-L01 | Why we need a "model" of a network | 20m | M04 | Explain why layered models help |
| NA-M05-L02 | The OSI 7 layers — a floor-by-floor tour | 35m | L01 | Name all 7 layers in order and their jobs |
| NA-M05-L03 | The TCP/IP model and how it maps to OSI | 25m | L02 | Map TCP/IP's 4 layers onto OSI's 7 |
| NA-M05-L04 | Encapsulation: wrapping and unwrapping data | 30m | L03 | Describe headers being added/removed per layer |
| NA-M05-L05 | Follow one packet through all the layers | 30m | L04 | Trace data end-to-end across the stack |

### Hands-on in Unit 2

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 lab-05-01 Layer detective | 45m | E1 | NA-M05-L05 | Match real activities (loading a web page, plugging in a cable) to OSI layers using `ping`/`tracert` clues |

### 🏗️ Project 2 — "Map Your World"

| Field | Detail |
|-------|--------|
| **Time** | 75 min · **Equipment** E1 · **Prereq** all of Unit 2 |
| **Deliverable** | A hand-drawn (or digital) diagram of your home network as you understand it today — every device, how it connects, and a short note labeling which OSI layer each connection uses. |
| **Objectives assessed** | Network types, topology, OSI/TCP-IP thinking |
| **Why it matters** | You'll redraw this same map several times as you learn — it's your progress made visible. |

### 🔁 Review Day 2 + 📝 Unit 2 Quiz

| Field | Detail |
|-------|--------|
| **Time** | 60 min · **Equipment** E1 |
| **Activities** | OSI-layer flashcards · re-run lab-05-01 · **📝 Unit 2 Quiz (~15 Q)** |
| **Pass bar** | 80% · **Milestone check** ✅ **M2 — Networking Literate** |

---

# UNIT 3 — Physical Networks & Devices

> The tangible layer: cables you can hold, and the boxes that move data — including your Dell switch.

| Field | Detail |
|-------|--------|
| **Modules** | 06 Cabling & Media · 07 Devices & Switching |
| **Equipment** | E3 for labs (laptop + Dell 3424 + cables); E1 for reading |
| **Prerequisites** | Unit 2 (esp. OSI layers 1–2) |
| **Estimated time** | ~10 hours |
| **Unit objectives** | Identify, choose, build, and test network cables · explain what each device does · log into your managed switch for the first time |
| **Milestone contribution** | Feeds ⭐ **M3** (with Unit 4) |

### Module 06 — Cabling, Connectors & Physical Media (📖 150 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M06-L01 | Copper cables: twisted pair (Cat5e–Cat8) | 25m | Unit 2 | Compare copper categories and their speeds |
| NA-M06-L02 | Connectors and jacks (RJ45, keystones) | 20m | L01 | Identify RJ45 and where it's used |
| NA-M06-L03 | Fiber optic basics (single vs. multimode) | 25m | L02 | Explain when fiber beats copper |
| NA-M06-L04 | Straight-through vs. crossover, T568A/B | 30m | L02 | Explain wiring standards and when each is used |
| NA-M06-L05 | Ethernet standards and speeds | 25m | L01 | Match a standard (e.g., 1000BASE-T) to speed/distance |
| NA-M06-L06 | Cable testing and common physical problems | 25m | L04 | Spot and describe common cable faults |

### Module 07 — Network Devices & Ethernet Switching (📖 150 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M07-L01 | Hubs, switches, routers — what's the difference? | 25m | M06 | Explain each device's job and layer |
| NA-M07-L02 | MAC addresses and how a switch learns them | 30m | L01, M03 | Read a MAC address; explain the switch MAC table |
| NA-M07-L03 | Broadcast vs. collision domains | 25m | L02 | Explain how switches shrink collision domains |
| NA-M07-L04 | Access points, firewalls, and other gear | 20m | L01 | Identify common network devices by role |
| NA-M07-L05 | Meet the Dell PowerConnect 3424 | 25m | L01 | Identify ports, console, and status lights on your switch |
| NA-M07-L06 | First login: console vs. web management | 25m | L05 | Understand both ways to manage the switch (theory) |

### Hands-on in Unit 3

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 LAB-A Wire and test your first link | 45m | E2 | NA-M06-L06 | Connect laptop→switch, confirm a link light, `ping` across it |
| 🔧 LAB-B Log into the Dell 3424 | 60m | E3 | NA-M07-L06 | Reach the switch's management (console/web) and view its status |
| 🔧 lab-07-01 Read the MAC address table | 30m | E3 | NA-M07-L02 | Find your laptop's MAC in the switch's table |

### 🏗️ Project 3 — "Build & Certify a Link"

| Field | Detail |
|-------|--------|
| **Time** | 90 min · **Equipment** E3 · **Prereq** all of Unit 3 |
| **Deliverable** | A documented, working laptop-to-switch connection: a labeled photo of the physical setup, the cable type/standard used, a screenshot of the link status, and a successful `ping` — plus a note explaining which OSI layers you just exercised. |
| **Objectives assessed** | Cabling, devices, switch access, layer thinking |
| **Why it matters** | Your first real, working piece of network — built and verified by you. |

### 🔁 Review Day 3 + 📝 Unit 3 Quiz

| Field | Detail |
|-------|--------|
| **Time** | 60 min · **Equipment** E3 |
| **Activities** | Cable/standards flashcards · repeat LAB-B login · **📝 Unit 3 Quiz (~15 Q)** |
| **Pass bar** | 80% |

---

# UNIT 4 — Addressing & Core Services

> The heart of Domain 1. IP addressing, subnetting, and the services (DHCP, DNS, NAT) that make it all usable.

| Field | Detail |
|-------|--------|
| **Modules** | 08 IP Addressing & Subnetting · 09 Core Services · 10 Ports & Protocols |
| **Equipment** | E4 for the DHCP/DNS lab; E1 for the rest |
| **Prerequisites** | Unit 3, and **binary from Module 03** (essential) |
| **Estimated time** | ~15 hours (subnetting takes real practice — that's normal) |
| **Unit objectives** | Read and plan IPv4/IPv6 · subnet by hand · explain and observe DHCP, DNS, NAT · recall the key ports and protocols |
| **Milestone reached** | ⭐ **M3 — Addressing Master** |

### Module 08 — IP Addressing & Subnetting (📖 220 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M08-L01 | What an IP address is and why we need it | 20m | Unit 3 | Explain the job of an IP address |
| NA-M08-L02 | IPv4 structure, classes, private ranges | 30m | L01, M03 | Read an IPv4 address and spot private ranges |
| NA-M08-L03 | Subnet masks explained without fear | 30m | L02 | Explain what a mask does, bit by bit |
| NA-M08-L04 | CIDR notation and slash values | 25m | L03 | Convert between masks and /notation |
| NA-M08-L05 | Subnetting step by step (beginner method) | 35m | L04 | Subnet a network into equal parts |
| NA-M08-L06 | Subnetting practice and shortcuts | 30m | L05 | Subnet faster using the "magic number" |
| NA-M08-L07 | IPv6: why it exists and how to read it | 30m | L02 | Read and shorten an IPv6 address |
| NA-M08-L08 | Public vs. private, and NAT (preview) | 20m | L02 | Explain why private addresses need NAT |

### Module 09 — Core Network Services (📖 125 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M09-L01 | DHCP: automatic addressing | 30m | M08 | Explain the DHCP "DORA" process |
| NA-M09-L02 | DNS: turning names into numbers | 30m | M08 | Trace a name lookup step by step |
| NA-M09-L03 | NAT and PAT: sharing one public address | 25m | M08-L08 | Explain how many devices share one public IP |
| NA-M09-L04 | Gateways: how traffic leaves your network | 20m | M08 | Explain the default gateway's job |
| NA-M09-L05 | Time (NTP) and other supporting services | 20m | L01 | List common support services and their roles |

### Module 10 — Ports, Protocols & Applications (📖 110 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M10-L01 | What ports and protocols are (mailbox idea) | 20m | M09 | Explain ports with an everyday analogy |
| NA-M10-L02 | TCP vs. UDP — reliable vs. fast | 25m | L01 | Choose TCP or UDP for a given need |
| NA-M10-L03 | The must-know ports | 30m | L02 | Recall the exam's key port numbers |
| NA-M10-L04 | Secure vs. insecure protocol pairs | 20m | L03 | Match each insecure protocol to its secure twin |
| NA-M10-L05 | A memory system for the port table | 15m | L03 | Use a repeatable trick to recall ports |

### Hands-on in Unit 4

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 lab-08-01 Subnetting by hand | 60m | E1 | NA-M08-L06 | Solve 15 subnetting problems; self-check with a table |
| 🔧 LAB-C Plan your home IP scheme | 45m | E1 | NA-M08-L06 | Design address ranges for your future home lab |
| 🔧 LAB-D Watch DHCP and DNS work | 60m | E4 | M09 | Use `ipconfig /all`, `/release`, `/renew`, `nslookup` to see services live |

### 🏗️ Project 4 — "Design Your Home IP Plan"

| Field | Detail |
|-------|--------|
| **Time** | 90 min · **Equipment** E1 (E4 to verify) · **Prereq** all of Unit 4 |
| **Deliverable** | A written IP plan for your home lab: chosen private range, subnet mask, at least two subnets (e.g., "trusted" and "lab"), gateway, DHCP range, and reserved addresses — with a short paragraph explaining every choice. |
| **Objectives assessed** | IPv4, subnetting, DHCP/DNS/NAT, gateways |
| **Why it matters** | This plan becomes the blueprint you actually build in Unit 5. |

### 🔁 Review Day 4 + 📝 Unit 4 Quiz + 📝 Domain-1 Checkpoint

| Field | Detail |
|-------|--------|
| **Time** | 90 min · **Equipment** E1 |
| **Activities** | Subnetting speed drill · port flashcards · **📝 Unit 4 Quiz (~20 Q)** · **📝 Domain 1 Checkpoint (~25 Q)** covering Modules 04–10 |
| **Pass bar** | 80% on both · **Milestone check** ✅ **M3 — Addressing Master** |

---

# UNIT 5 — Building Networks (Implementation)

> Domain 2, hands-on. You now build a segmented, routed, wireless-capable network on your real gear.

| Field | Detail |
|-------|--------|
| **Modules** | 11 Network Implementation |
| **Equipment** | E4 (full lab) |
| **Prerequisites** | Units 3 & 4 (switch access + IP plan) |
| **Estimated time** | ~11 hours |
| **Unit objectives** | Create and test VLANs · configure trunks/tagging · explain STP · set up routing and inter-VLAN routing · configure secure wireless · design a small network end-to-end |
| **Milestone reached** | ⭐ **M4 — Lab Builder** |

### Module 11 — Network Implementation (📖 230 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M11-L01 | VLANs: why we split one switch into many | 25m | Unit 4 | Explain the problem VLANs solve |
| NA-M11-L02 | Configuring VLANs on the Dell 3424 | 35m | L01, LAB-B | Create VLANs and assign ports on your switch |
| NA-M11-L03 | Trunks, tagging (802.1Q), access ports | 30m | L02 | Explain and configure a tagged trunk |
| NA-M11-L04 | Spanning Tree Protocol (loop prevention) | 30m | L03 | Explain why loops are dangerous and how STP helps |
| NA-M11-L05 | Routing basics: static vs. dynamic | 30m | Unit 4 | Explain how routers choose paths |
| NA-M11-L06 | Inter-VLAN routing (getting VLANs to talk) | 30m | L02, L05 | Explain/enable routing between VLANs |
| NA-M11-L07 | Wireless standards, channels, security | 30m | L01 | Compare Wi-Fi standards and secure a WLAN |
| NA-M11-L08 | Designing a small network end to end | 20m | L01–L07 | Combine the pieces into one design |

### Hands-on in Unit 5

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 LAB-E Create and test VLANs | 75m | E4 | NA-M11-L03 | Build two VLANs, prove devices in different VLANs are separated |
| 🔧 LAB-F Inter-VLAN routing + wireless | 75m | E4 | NA-M11-L06/L07 | Let the two VLANs talk through a router; bring up secure Wi-Fi |

### 🏗️ Project 5 — "Segment Your Network"

| Field | Detail |
|-------|--------|
| **Time** | 2 hours · **Equipment** E4 · **Prereq** all of Unit 5 |
| **Deliverable** | Your Project-4 IP plan, now **built**: at least two working VLANs on the Dell 3424, a trunk, routing between them, and a secured wireless network — documented with a diagram, switch config screenshots, and successful cross-VLAN `ping` tests. |
| **Objectives assessed** | VLANs, trunking, STP awareness, routing, wireless |
| **Why it matters** | This is a genuine small-business-grade network — built by a former beginner. |

### 🔁 Review Day 5 + 📝 Unit 5 Quiz

| Field | Detail |
|-------|--------|
| **Time** | 60 min · **Equipment** E4 |
| **Activities** | VLAN/trunk flashcards · re-run LAB-E from memory · **📝 Unit 5 Quiz (~15 Q)** |
| **Pass bar** | 80% · **Milestone check** ✅ **M4 — Lab Builder** |

---

# UNIT 6 — Running & Securing Networks

> Domains 3 and 4. Keep the network documented, healthy, and defended.

| Field | Detail |
|-------|--------|
| **Modules** | 12 Network Operations · 13 Network Security |
| **Equipment** | E4 for hardening lab; E1 for reading |
| **Prerequisites** | Unit 5 (a built network to operate and secure) |
| **Estimated time** | ~11 hours |
| **Unit objectives** | Document and monitor a network · plan for availability and recovery · explain core threats · apply authentication, firewalls, segmentation, and hardening |
| **Milestone reached** | ⭐ **M5 — Operator & Defender** |

### Module 12 — Network Operations (📖 125 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M12-L01 | Documentation: diagrams, labels, IPAM | 25m | Unit 5 | Produce clear network documentation |
| NA-M12-L02 | Monitoring, logs, SNMP, alerts | 30m | L01 | Explain how networks are watched |
| NA-M12-L03 | Availability: redundancy, uptime, SLAs | 25m | L01 | Explain "how many nines" and redundancy |
| NA-M12-L04 | Backups, disaster recovery, change control | 25m | L01 | Describe safe change and recovery practices |
| NA-M12-L05 | Common policies and best practices | 20m | L01 | Recognize standard network policies |

### Module 13 — Network Security (📖 170 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M13-L01 | Security goals: CIA triad | 20m | Unit 5 | Explain confidentiality, integrity, availability |
| NA-M13-L02 | Common attacks (spoofing, MITM, DoS, social) | 30m | L01 | Recognize common attacks and their signs |
| NA-M13-L03 | Authentication, authorization, accounting | 25m | L01 | Explain AAA with an everyday example |
| NA-M13-L04 | Firewalls, ACLs, segmentation | 30m | L01, M11 | Explain how firewalls and segments limit harm |
| NA-M13-L05 | Securing switch ports and wireless | 25m | M11 | Apply port security and strong Wi-Fi settings |
| NA-M13-L06 | VPNs and encryption in plain language | 20m | L01 | Explain what a VPN protects and how |
| NA-M13-L07 | Hardening checklist for your home lab | 20m | L01–L06 | Produce a concrete hardening checklist |

### Hands-on in Unit 6

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 LAB-G Document and secure the network | 90m | E4 | M12–M13 | Create full documentation, then apply port security, admin passwords, and Wi-Fi hardening |
| 🔧 lab-13-01 Change the default admin password | 20m | E3 | NA-M13-L05 | Replace default credentials on the Dell 3424 safely |

### 🏗️ Project 6 — "Operations Runbook & Hardening Report"

| Field | Detail |
|-------|--------|
| **Time** | 2 hours · **Equipment** E4 · **Prereq** all of Unit 6 |
| **Deliverable** | A professional runbook for your home network: an up-to-date diagram, an IP/label inventory, a monitoring plan, a backup/recovery note, and a completed hardening checklist showing before/after settings. |
| **Objectives assessed** | Documentation, monitoring, availability, security controls |
| **Why it matters** | This is exactly what employers expect a junior network tech to produce. |

### 🔁 Review Day 6 + 📝 Unit 6 Quiz + 📝 Domains 3–4 Checkpoint

| Field | Detail |
|-------|--------|
| **Time** | 90 min · **Equipment** E1 |
| **Activities** | Security-term flashcards · **📝 Unit 6 Quiz (~15 Q)** · **📝 Domains 3–4 Checkpoint (~25 Q)** |
| **Pass bar** | 80% · **Milestone check** ✅ **M5 — Operator & Defender** |

---

# UNIT 7 — Troubleshooting

> Domain 5 — the largest slice of the exam (24%). A repeatable method plus the right tools.

| Field | Detail |
|-------|--------|
| **Modules** | 14 Network Troubleshooting |
| **Equipment** | E4 (you'll intentionally break and fix your lab) |
| **Prerequisites** | Units 3–6 (you must have a network to troubleshoot) |
| **Estimated time** | ~8 hours |
| **Unit objectives** | Apply the CompTIA troubleshooting method · use command-line and hardware tools · diagnose issues across Layers 1–7 · work realistic scenarios |
| **Milestone contribution** | Feeds ⭐ **M6** (with Unit 8) |

### Module 14 — Network Troubleshooting (📖 200 min)

| ID | 📖 Lesson | Time | Prereq | Learning objective |
|----|-----------|------|--------|--------------------|
| NA-M14-L01 | The CompTIA troubleshooting methodology | 30m | Units 3–6 | Recall and apply the 7-step method in order |
| NA-M14-L02 | ping, tracert, ipconfig, nslookup | 30m | M02, M09 | Choose the right basic tool for a symptom |
| NA-M14-L03 | arp, netstat, pathping | 30m | L02 | Read output from deeper tools |
| NA-M14-L04 | Hardware tools: cable testers, loopbacks | 25m | M06 | Match a hardware tool to a physical fault |
| NA-M14-L05 | Troubleshooting connectivity (Layers 1–3) | 30m | L01–L03 | Diagnose "can't connect" step by step |
| NA-M14-L06 | Troubleshooting names, speed, wireless | 30m | L05 | Diagnose DNS, slowness, and Wi-Fi issues |
| NA-M14-L07 | Worked scenario: "the internet is down" | 25m | L01–L06 | Walk a full case start to finish |

### Hands-on in Unit 7

| 🔧 Lab | Time | Equip | Prereq | Objective |
|--------|------|-------|--------|-----------|
| 🔧 LAB-H Break it and fix it | 90m | E4 | M14 | Work through planted faults (bad cable, wrong VLAN, wrong IP, wrong gateway) using the method |

### 🏗️ Project 7 — "Troubleshooting Gauntlet"

| Field | Detail |
|-------|--------|
| **Time** | 2 hours · **Equipment** E4 · **Prereq** all of Unit 7 |
| **Deliverable** | A logbook of at least 5 faults you diagnose and fix in your own lab, each documented with: the symptom, your hypothesis, the tool you used, the root cause, and the fix — following the 7-step method every time. |
| **Objectives assessed** | Methodology, tool selection, layered diagnosis |
| **Why it matters** | Troubleshooting is the biggest exam domain *and* the #1 real job skill. |

### 🔁 Review Day 7 + 📝 Unit 7 Quiz + 📝 Domain-5 Checkpoint

| Field | Detail |
|-------|--------|
| **Time** | 90 min · **Equipment** E1 |
| **Activities** | Tool/flag flashcards · **📝 Unit 7 Quiz (~15 Q)** · **📝 Domain 5 Checkpoint (~25 Q)** |
| **Pass bar** | 80% |

---

# UNIT 8 — Certification Readiness

> Everything comes together. A full build, exam skills, and timed practice until you're confidently ready.

| Field | Detail |
|-------|--------|
| **Modules** | 15 Capstone & Exam Readiness |
| **Equipment** | E4 for the capstone; E1 for exams |
| **Prerequisites** | **All prior units** |
| **Estimated time** | ~15 hours |
| **Unit objectives** | Build the full lab from scratch · master exam logistics and PBQs · pass two full practice exams · close every remaining gap |
| **Milestone reached** | ⭐ **M6 — Exam-Ready** → 🎓 sit the exam |

### Module 15 — Capstone & Exam Readiness (📖/🎓)

| ID | Item | Time | Prereq | Learning objective |
|----|------|------|--------|--------------------|
| NA-M15-L01 | 🎓 **Capstone build (see below)** | 3–4h | All units | Build the entire home lab from an empty rack |
| NA-M15-L02 | 📖 Exam-day logistics & what to expect | 20m | — | Know the format, timing, and rules |
| NA-M15-L03 | 📖 Performance-Based Question (PBQ) practice | 45m | L02 | Practice the interactive exam question style |
| NA-M15-L04 | 📝 **Full Practice Exam #1** + review | 2.5h | L01–L03 | Sit a timed 90-question exam; review every miss |
| NA-M15-L05 | 📝 **Full Practice Exam #2** + review | 2.5h | L04 | Confirm improvement; target remaining gaps |
| NA-M15-L06 | 🔁 Weak-spot review & final flashcard sprint | 2h | L05 | Close specific weak areas by objective |
| NA-M15-L07 | 📖 Your 7-day pre-exam plan | 20m | L06 | Follow a calm, proven final-week routine |

### 🎓 Capstone Project — "Build the Whole Thing"

| Field | Detail |
|-------|--------|
| **Time** | 3–4 hours · **Equipment** E4 · **Prereq** all units |
| **Deliverable** | Starting from disconnected gear, rebuild your entire home lab **from your own documentation**: cabling, switch VLANs + trunk, IP scheme, routing, secured wireless, and full docs — then run a troubleshooting self-test. Submit final diagram, configs, and a short reflection. |
| **Objectives assessed** | Every domain (1–5) at once |
| **Why it matters** | If you can build and defend this from scratch, you can pass the exam and do the job. |

### 📝 Final Readiness Exam + 🎓 Exam Booking

| Field | Detail |
|-------|--------|
| **Time** | 90 min exam + review · **Equipment** E1 |
| **Gate to book the real exam** | Score **≥ 85%** on both full practice exams **and** complete the capstone. |
| **Milestone reached** | ✅ **M6 — Exam-Ready.** Book CompTIA Network+ N10-009. |

---

## Prerequisite chain (the spine — nothing is out of order)

```
Unit 1 (computer, Windows, binary)
   └─▶ Unit 2 (network concepts, OSI/TCP-IP)
          └─▶ Unit 3 (cables, devices, switch login)
                 └─▶ Unit 4 (IP, subnetting, services, ports)   ← needs binary from Unit 1
                        └─▶ Unit 5 (VLANs, routing, wireless)    ← needs switch + IP plan
                               └─▶ Unit 6 (operations, security) ← needs a built network
                                      └─▶ Unit 7 (troubleshooting)← needs something to break
                                             └─▶ Unit 8 (capstone + exams)
```

## Exam-domain coverage check

| N10-009 Domain | Weight | Delivered in |
|----------------|--------|--------------|
| 1 · Networking Concepts | 23% | Units 2 & 4 |
| 2 · Network Implementation | 20% | Units 3 & 5 |
| 3 · Network Operations | 19% | Unit 6 (Mod 12) |
| 4 · Network Security | 14% | Unit 6 (Mod 13) |
| 5 · Network Troubleshooting | 24% | Unit 7 |

Units 1 is the zero-knowledge on-ramp (enables all domains); Unit 8 proves readiness across all five.

## Assessment summary

| Assessment | When | Length | Pass bar |
|------------|------|--------|----------|
| Pre-course diagnostic | Day 0 | 30 min | none (baseline) |
| Module knowledge-checks | end of each module | ~10 Q | 80% |
| Unit quizzes | end of each Unit | 15–20 Q | 80% |
| Domain checkpoints | Units 4, 6, 7 | ~25 Q | 80% |
| Full practice exams ×2 | Unit 8 | 90 Q / 90 min | 85% |
| Final readiness exam | Unit 8 | 90 Q / 90 min | 85% → book exam |

---

*This curriculum is locked pending your approval. On approval, production begins with Module 00 per the [release plan](MILESTONE-SCHEDULE.md), and each item above is built to the standards in [CLAUDE.md](../CLAUDE.md).*
