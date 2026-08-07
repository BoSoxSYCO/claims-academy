---
id: NA-M12-L01
module: 12
lesson: 01
title: "Documentation: Diagrams, Labels, and IPAM"
unit: 9
objective_ids: ["3.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M11-L08", "NA-M08-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 12 · Lesson 01] Documentation: Diagrams, Labels, and IPAM

> **Unit:** Unit 9 — Network Operations · **Time:** ~30 min · **Equipment:** E1 (paper, and your own network to document)
> **You'll need first:** designing a network (11-08) and subnets (08-03).

You designed a network in Module 11. But a design on a napkin helps no one later. Good networks are **documented** — drawn, labeled, and tracked. When something breaks at 2 a.m., documentation is what saves you. This lesson covers the main kinds: **diagrams**, **labels**, and **IPAM** (tracking IP addresses).

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** documentation matters for operations.
- [ ] Tell a **physical diagram** from a **logical diagram**.
- [ ] Describe **labeling** and a **rack diagram**.
- [ ] Explain **IPAM**, an **asset inventory**, and a **baseline**.

---

## 2. Introduction — why this matters

Imagine a coworker quits. They kept the whole network "in their head." Now a cable fails. No one knows what plugs in where. Hours are lost just finding the layout. Documentation prevents that pain.

Documentation is the network's **written memory**. It shows what exists. It shows how things connect. It shows which addresses are used. So it helps you fix problems fast. It helps new people learn the network. And it proves what "normal" looks like, so you can spot changes.

The exam expects you to know the main documents. It asks what each one is for. This lesson names them and shows when to use each. None of this is hard — it is about being organized.

🎯 **Exam tip:** Know the difference between a **physical** diagram (cables/ports) and a **logical** diagram (IPs/VLANs). CompTIA tests this pair.

🔧 **Lab link:** You'll start documenting your own home lab — the network you built in Module 11.

---

## 3. Simple explanation

Good documentation has a few standard pieces. Each answers a different question.

### Diagrams — "how it connects"

- A **physical diagram** shows the real layout. It shows which device plugs into which port, and the cables between them. It answers "what is wired where?"
- A **logical diagram** shows the address layout: IP addresses, subnets, and VLANs. It answers "how does traffic flow?"

You need both. Physical helps you trace a cable. Logical helps you trace a packet.

A **rack diagram** is a special physical diagram. It shows where each device sits in an equipment rack, top to bottom.

### Labels — "what is this?"

**Labeling** means putting clear names on cables, ports, and devices. A labeled cable tells you both ends without tracing it. Good labels save huge time during a fix. Label both ends of every cable.

### IPAM — "which addresses are used"

**IPAM (IP Address Management)** means tracking every IP address. It shows which are used, which are free, and what each one belongs to. Without it, two devices can get the same address — a conflict. IPAM can be a simple spreadsheet or a dedicated tool.

| IP address | Device | VLAN | Notes |
|------------|--------|------|-------|
| 192.168.10.1 | Router (gateway) | 10 | Staff gateway |
| 192.168.10.20 | Printer | 10 | Front desk |
| 192.168.10.50 | Server | 10 | File server |

### Inventory and baseline — "what we have, and what's normal"

- An **asset inventory** is a list of all devices you own. It notes each one's model, serial number, location, and owner. It answers "what do we have?"
- A **baseline** is a record of **normal** behavior — typical traffic, speeds, and settings. Later, you compare against it to spot changes. It answers "is this normal?"

> **The big idea:** Documentation is the network's written memory. Keep a **physical diagram** (cables/ports) and a **logical diagram** (IPs/VLANs); a **rack diagram** for equipment racks; clear **labels** on cables and ports; **IPAM** to track every IP address; an **asset inventory** of your devices; and a **baseline** of normal behavior. Together they let anyone fix, learn, and check the network fast.

💡 **Tip:** Update documentation **when you make a change**, not "later." Later never comes.

⚠️ **Watch out:** Out-of-date documentation is worse than none — it sends you the wrong way. Keep it current.

---

## 4. Real-world analogy

> **"Network documentation is like a building's blueprints, room signs, and a directory — you can find any room, know what's inside, and see what changed."**

| Building | Network |
|----------|---------|
| Blueprints (walls, wiring) | Physical diagram |
| Floor plan of routes | Logical diagram |
| Room number signs | Labels |
| Directory of tenants | IPAM / asset inventory |
| "Normal" utility bills | Baseline |

A stranger can navigate a well-signed building. A stranger can navigate a well-documented network.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Physical diagram** | | A drawing of the real devices, ports, and cables. |
| **Logical diagram** | | A drawing of IP addresses, subnets, and VLANs. |
| **IPAM** | EYE-pam | IP Address Management — tracking every IP address in use. |
| **Asset inventory** | | A list of all devices you own and their details. |
| **Baseline** | | A record of normal behavior, to compare against later. |

---

## 6. ASCII diagram

```
   FOUR QUESTIONS, FOUR DOCS

   "How is it wired?"     → PHYSICAL diagram (ports, cables, rack)
   "How does traffic flow?" → LOGICAL diagram (IPs, subnets, VLANs)
   "Which addresses are used?" → IPAM (IP tracking)
   "What do we have / is it normal?" → INVENTORY + BASELINE

   Label every cable and port at BOTH ends. Update on every change.
```

_Each document answers one question; together they are the network's memory._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-12-01-documentation-types-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four labeled cards — Physical diagram, Logical diagram, IPAM, and Inventory/Baseline — each with the question it answers and an example.
> **Key elements & labels:** Physical (ports/cables/rack), Logical (IP/subnet/VLAN), IPAM (address table), Inventory + Baseline (device list + "normal" record); a footer "label both ends; update on every change."
> **Color meaning:** each card is titled in words with its question; the labels carry meaning, not color.
> **Flow direction:** four cards in a 2×2 grid, footer beneath.
> **Alt text (required):** "Four documentation cards. Card one, Physical diagram, answers how it is wired and shows ports, cables, and a rack layout. Card two, Logical diagram, answers how traffic flows and shows IP addresses, subnets, and VLANs. Card three, IPAM, answers which addresses are used and shows a table mapping IP addresses to devices. Card four, Inventory and Baseline, answers what we have and whether behavior is normal, showing a device list and a record of normal traffic. A footer reads: label both ends of every cable and port, and update the documents on every change."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-12-01-labeled-cables-01.jpg`
> Neatly labeled cables in a rack. Alt text: "Network cables with clear labels at both ends in an equipment rack, showing good labeling practice."
>
> **Photo 2** — `img-12-01-ipam-sheet-01.jpg`
> An IPAM spreadsheet on screen. Alt text: "An IP address management spreadsheet listing each IP address, the device using it, its VLAN, and notes."

---

## 9. Hands-on lab

**Goal:** start documenting your own network — one physical sketch, one logical sketch, and a small IPAM table.
**Why:** real documentation of your own gear makes the types stick.

**You will need**
- Paper and pen; your home network or lab. Estimated time: 18 min.

⚠️ **Before you start (safety):** you only observe and write. You change no settings.

### 9a. Step-by-step instructions

1. Draw a **physical** sketch: your router, switch, and devices, with the cables between them.
2. Label each cable's two ends (for example, "Router P1 ↔ Switch P24").
3. Draw a **logical** sketch: write each device's IP address and subnet/VLAN.
4. Make a small **IPAM** table with three rows: IP, device, and notes. Use your real addresses (find them with `ipconfig`).
5. List two **assets**: device name, model, and where it sits.

### 9b. Expected results

- Two sketches (physical + logical) and a three-row IPAM table, using your real addresses.

- ✅ **You did it if:** your physical sketch shows cables/ports and your logical sketch shows IPs/VLANs, with no two devices sharing an address.

### 9c. Verify it worked

1. Point to the physical sketch and trace one cable end to end.
2. Point to the logical sketch and name one device's IP and subnet.

### 9d. Reset / roll back

Nothing changed — you only documented. Keep the pages; add to them as your lab grows.

> 🔧 **Home-lab continuity:** this is the start of your lab's living documentation. Update it every time you change the lab.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Only a physical diagram | Can't trace traffic/IPs | Keep a logical diagram too |
| Labeling one end of a cable | Still have to trace it | Label **both** ends |
| No IPAM | IP conflicts and confusion | Track every address in a table/tool |
| Stale documentation | Sends you the wrong way | Update on every change, not "later" |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't find where a cable goes | Missing labels | Add labels at both ends now |
| Two devices have the same IP | No IPAM tracking | Check IPAM; assign a free address |
| New tech can't learn the network | No diagrams | Create physical + logical diagrams |
| "Is this traffic normal?" unclear | No baseline | Record a baseline of normal behavior |

---

## 12. Lesson summary

- Documentation is the network's **written memory** — for fixing, learning, and checking.
- Keep a **physical diagram** (cables/ports) **and** a **logical diagram** (IPs/VLANs).
- Use **labels** (both ends), **IPAM** (track every IP), an **asset inventory**, and a **baseline**.
- Update documentation **on every change**, or it becomes misleading.

**One-sentence recap:** Good network operations rest on documentation — physical and logical diagrams, clear labels, IPAM for addresses, an asset inventory, and a baseline — all kept current.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-12-01-fill-in-the-blank.md`
2. **Matching** — `wb-12-01-matching.md`
3. **Label the diagram** — `wb-12-01-label-the-diagram.md` (the four doc types)
4. **Short answer** — `wb-12-01-short-answer.md`
5. **Hands-on observation** — `wb-12-01-hands-on-observation.md` (document your net)
6. **Vocabulary review** — `wb-12-01-vocabulary-review.md`
7. **Reflection** — `wb-12-01-reflection.md`

**Quick written warm-up (do this now):** Which diagram shows cables? Which shows IP addresses?

Cables: ____________  IP addresses: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-12-01-knowledge-check.md`.)

1. A **physical diagram** shows… *(Objective: diagrams)*
   - A) IP addresses and VLANs
   - B) devices, ports, and cables
   - C) the internet's routes
   - D) the exam schedule

2. A **logical diagram** shows… *(Objective: diagrams)*
   - A) cable colors
   - B) IP addresses, subnets, and VLANs
   - C) rack screws
   - D) serial numbers

3. **IPAM** is used to… *(Objective: IPAM)*
   - A) manage cables
   - B) track which IP addresses are used and free
   - C) cool the router
   - D) label racks

4. You should label a cable… *(Objective: labeling)*
   - A) at one end
   - B) at both ends
   - C) never
   - D) only if it's red

5. An **asset inventory** lists… *(Objective: inventory)*
   - A) normal traffic levels
   - B) all devices you own and their details
   - C) only cables
   - D) passwords

6. **True or false —** Out-of-date documentation is just as good as current documentation. Explain in one sentence. *(Objective: upkeep)*

7. A **baseline** helps you… *(Objective: baseline)*
   - A) speed up Wi-Fi
   - B) know what "normal" looks like to spot changes
   - C) crimp cables
   - D) hide the SSID

8. **Matching —** match each document to what it answers. *(Objective: synthesis)*
   - ___ Physical diagram &nbsp;&nbsp; ___ Logical diagram &nbsp;&nbsp; ___ IPAM
   - A) Which IP addresses are used?
   - B) How is it wired?
   - C) How does traffic flow?

9. Fill in the blank: A ____________ diagram is a physical diagram showing where devices sit in an equipment rack. *(Objective: diagrams)*

10. **Scenario —** A new technician joins and can't tell how the network is wired or which IPs are used. Which three documents would help most, and what does each show? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-12-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-12-01-documentation.md`. In brief:

- **Objective in one line:** learners name the main documentation types (physical/logical diagrams, rack diagram, labels, IPAM, inventory, baseline) and what each is for.
- **Common misconceptions:** "one diagram is enough"; "documentation can wait." Correct both.
- **Pacing:** ~30 min. The building-blueprint analogy carries the types; the lab makes it real.
- **How CompTIA tests it:** physical vs. logical diagrams; IPAM; baseline; SLA/inventory terms in scenarios.
- **Accuracy note (Prime Directive #7):** `ipconfig` is a genuine Windows command used to find real addresses for the learner's own IPAM table; no output is fabricated.
- **Extension idea:** SLAs, wiring/site-survey diagrams, and configuration management databases (CMDB).

---

## 17. Cheat sheet

> **Quick reference — Network documentation**
>
> | Document | Answers | Shows |
> |----------|---------|-------|
> | **Physical diagram** | How is it wired? | devices, ports, cables |
> | **Logical diagram** | How does traffic flow? | IPs, subnets, VLANs |
> | **Rack diagram** | Where does gear sit? | rack layout, top to bottom |
> | **IPAM** | Which IPs are used? | IP → device table |
> | **Asset inventory** | What do we have? | device list + details |
> | **Baseline** | Is this normal? | record of normal behavior |
>
> - **Label both ends** of every cable and port.
> - **Update on every change** — stale docs mislead.
>
> _(Full version: `resources/cheat-sheets/network-operations-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Physical diagram** — A drawing of the real devices, ports, and cables in a network.
- **Logical diagram** — A drawing of a network's IP addresses, subnets, and VLANs.
- **Rack diagram** — A physical diagram showing where each device sits in an equipment rack.
- **Labeling** — Putting clear names on cables, ports, and devices (both ends of a cable).
- **IPAM (IP Address Management)** — Tracking every IP address in use, free, and assigned.
- **Asset inventory** — A list of all devices you own, with model, serial, location, and owner.
- **Baseline** — A record of a network's normal behavior, used to spot changes later.

(Network diagram was defined in Module 11 and is reused here.)

---

## 19. Homework

- **Practice:** Add three more rows to your IPAM table from real addresses.
- **Spaced review:** Explain physical vs. logical diagrams to someone.
- **Preview:** Next lesson, **monitoring, logs, SNMP, and alerts** — watching a network's health.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which document would help my own lab most right now? _______________________
3. What felt hardest — the diagram types or IPAM? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can tell a physical from a logical diagram.
- [ ] I can explain labeling and a rack diagram.
- [ ] I can explain IPAM, an asset inventory, and a baseline.
- [ ] I started documenting my own network.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers monitoring and logs.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M12-L01** — "Documentation: Diagrams, Labels, and IPAM" · Module 12 · Unit 9_
