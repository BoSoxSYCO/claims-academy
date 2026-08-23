---
id: NA-M11-L08
module: 11
lesson: 08
title: "Designing a Small Network End to End"
unit: 8
objective_ids: ["1.6"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M11-L01", "NA-M11-L03", "NA-M11-L04", "NA-M11-L05", "NA-M11-L06", "NA-M11-L07"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 08] Designing a Small Network End to End

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E1 (paper and pen; this is a design lesson)
> **You'll need first:** everything in Module 11 — VLANs, trunks, STP, routing, inter-VLAN routing, and wireless.

You've learned the pieces: VLANs, trunks, loop prevention, routing, and Wi-Fi. Now you put them **together**. This lesson walks you through designing a whole small network on paper, from the internet down to each device. It's the Module 11 capstone — the plan you'd build before touching any gear.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] List the **layers** of a small network from the internet to a device.
- [ ] Plan **VLANs**, **subnets**, and **gateways** for each group.
- [ ] Decide where **trunks**, **STP**, and **wireless** fit.
- [ ] Draw a clear **network diagram** with addresses and labels.

---

## 2. Introduction — why this matters

A network isn't built by guessing. Pros **design first**, on paper, then build. A good plan prevents costly mistakes — a missing gateway, a subnet clash, or a loop that storms the network.

You already know each part. VLANs keep groups apart. Trunks carry many VLANs on one link. STP stops loops. A router (or Layer 3 switch) lets VLANs talk when you choose. Wi-Fi connects devices with no cable. Design is just fitting these together in the right order.

This lesson gives you a simple, repeatable method. Follow it for any small office or home lab. By the end, you'll have a diagram you could hand to someone to build.

🎯 **Exam tip:** The exam gives design scenarios. Practice choosing VLANs, subnets, and where routing and STP belong.

🔧 **Lab link:** This plan is your home-lab blueprint — the map for everything you built in Module 11.

---

## 3. Simple explanation

Design a small network in six steps. Do them in order.

### Step 1 — Know the internet edge

Everything starts at the **internet edge**. Your **ISP** brings the internet to a **modem**. The modem connects to your **router**, which is the door to the outside (the default gateway path from Lesson 09-04).

### Step 2 — Plan your groups (VLANs)

List the groups that should stay apart. A small office might have:

- **VLAN 10 — Staff**
- **VLAN 20 — Guests**
- **VLAN 30 — Voice/printers**

Each VLAN is its own broadcast domain (Lesson 11-01). Guests stay away from staff data.

### Step 3 — Give each VLAN a subnet and gateway

Each VLAN needs its **own subnet** and a **gateway** (Lesson 11-06):

| VLAN | Name | Subnet | Gateway |
|:----:|------|--------|---------|
| 10 | Staff | 192.168.10.0/24 | 192.168.10.1 |
| 20 | Guests | 192.168.20.0/24 | 192.168.20.1 |
| 30 | Voice | 192.168.30.0/24 | 192.168.30.1 |

**DHCP** hands out addresses inside each subnet (Lesson 09-01).

### Step 4 — Connect the switches (trunks + STP)

Ports to PCs are **access** ports (one VLAN). Links between switches, or to the router, are **trunks** carrying all VLANs with **802.1Q** tags (Lesson 11-03). If you add a second link for backup, **STP** (Lesson 11-04) blocks the loop and keeps a standby path.

### Step 5 — Let the right VLANs talk (routing)

A **router or Layer 3 switch** does **inter-VLAN routing** (Lesson 11-06). It holds each VLAN's gateway and routes chosen traffic between them. It also sends everything else out to the internet.

### Step 6 — Add wireless

Connect an **access point** to a switch port. Set the **SSID**, pick **WPA3** (or WPA2), and use non-overlapping 2.4 GHz channels **1, 6, or 11** (Lesson 11-07). You can map an SSID to a VLAN — for example, a "Guest" SSID onto VLAN 20.

```
   SMALL NETWORK — TOP TO BOTTOM

   Internet → Modem → Router/L3 switch (routes + gateways)
                         │ trunk (802.1Q: VLAN 10/20/30)
                      [Switch]  ── STP guards any backup link
                       ├ access: VLAN 10 Staff PCs
                       ├ access: VLAN 20 Guest devices
                       ├ access: VLAN 30 Voice/printers
                       └ AP → SSIDs mapped to VLANs (WPA3)
```

> **The big idea:** Design a small network in order: **edge** (modem → router), **VLANs** for each group, a **subnet + gateway** per VLAN, **access ports** to devices and **trunks** between switches (with **STP** guarding any loop), a **router or Layer 3 switch** for **inter-VLAN routing** and internet access, and **wireless** (an AP with WPA3 and channels 1/6/11) mapped to the right VLANs. Plan it on paper first, with every address labeled.

💡 **Tip:** Write every subnet and gateway on the diagram. Future-you will thank present-you.

⚠️ **Watch out:** Two common design errors: two VLANs sharing one subnet, and forgetting a VLAN's gateway. Check both before you build.

---

## 4. Real-world analogy

> **"Designing a network is like drawing house blueprints — you plan the rooms, doors, wiring, and locks on paper before anyone builds a wall."**

| House blueprint | Network design |
|-----------------|----------------|
| Rooms | VLANs |
| Doorways between rooms | Inter-VLAN routing |
| Front door to the street | Router to the internet |
| Room numbers/addresses | Subnets and gateways |
| Locks | WPA3 and segmentation |

You wouldn't build a house without a blueprint. Don't build a network without a design.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Network design** | | Planning a network's parts and addresses before building it. |
| **Internet edge** | | Where your network meets the ISP (modem and router). |
| **Network diagram** | | A labeled drawing of devices, links, VLANs, and addresses. |
| **ISP** | I-S-P | Internet Service Provider — the company that brings you internet. |
| **Topology** | | The shape/layout of how devices and links connect. |

---

## 6. ASCII diagram

```
   SIX-STEP DESIGN

   1) EDGE       Internet → Modem → Router
   2) VLANs      Staff(10) · Guests(20) · Voice(30)
   3) ADDRESSES  each VLAN: own subnet + gateway (DHCP inside)
   4) SWITCHES   access ports to PCs · trunks between switches · STP guards loops
   5) ROUTING    router / L3 switch = inter-VLAN + internet
   6) WIRELESS   AP · WPA3 · channels 1/6/11 · SSID → VLAN

   Plan on paper, label every address, then build.
```

_Design top-to-bottom in six steps; each step reuses one Module 11 skill._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-08-small-network-design-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a full small-network topology — internet cloud → modem → router/L3 switch → switch → access ports for three VLANs → an access point with SSIDs, every element labeled with VLAN, subnet, and gateway.
> **Key elements & labels:** internet, modem, router (with each VLAN gateway), trunk labeled "802.1Q VLAN 10/20/30", switch with access ports (Staff 10, Guests 20, Voice 30), AP with "WPA3, ch 1/6/11", subnets 192.168.10/20/30.0/24.
> **Color meaning:** each VLAN keeps its color **and** its number/subnet label; device types use the shared icon set; color never stands alone.
> **Flow direction:** top (internet) to bottom (devices).
> **Alt text (required):** "A full small-network design from top to bottom. At the top, the internet connects to a modem, which connects to a router or Layer 3 switch that holds a gateway for each VLAN and provides internet access. A trunk link labeled 802.1Q carries VLAN 10, 20, and 30 down to a switch. The switch has access ports grouped into three VLANs: VLAN 10 Staff on subnet 192.168.10.0/24, VLAN 20 Guests on 192.168.20.0/24, and VLAN 30 Voice and printers on 192.168.30.0/24, each with its own gateway ending in .1. A note shows Spanning Tree guards any backup link between switches. An access point connects to a switch port and broadcasts SSIDs mapped to the VLANs, secured with WPA3 on non-overlapping channels 1, 6, or 11. Each VLAN is labeled by color and by its number and subnet."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-08-whiteboard-design-01.jpg`
> A hand-drawn network design on a whiteboard. Alt text: "A hand-drawn network design on a whiteboard showing VLANs, subnets, gateways, and links before building."
>
> **Photo 2** — `img-11-08-rack-built-01.jpg`
> The built network — router, switch, and AP wired together. Alt text: "A small built network with a router, switch, and access point cabled together, matching the paper design."

---

## 9. Hands-on lab

**Goal:** design a complete small network on paper — VLANs, subnets, gateways, trunks, routing, and wireless.
**Why:** this is the blueprint you (or anyone) could build from.

**You will need**
- Paper and pen (no gear needed). Estimated time: 20 min.

⚠️ **Before you start (safety):** this is paper only. You change no gear.

### 9a. Step-by-step instructions

1. Draw the **edge**: internet → modem → router at the top.
2. List **three VLANs** with names (e.g., 10 Staff, 20 Guests, 30 Voice).
3. For each VLAN, write a **subnet** and a **gateway** (`.1` of the subnet).
4. Draw a **switch**. Mark which ports are **access** (to PCs) and which is a **trunk** (to the router).
5. Note where **STP** applies if you add a backup link.
6. Draw an **access point** on a switch port. Add an **SSID**, **WPA3**, and a **channel** (1, 6, or 11).
7. Map at least one **SSID to a VLAN** (e.g., Guest SSID → VLAN 20).

### 9b. Expected results

- A one-page diagram showing the edge, three labeled VLANs with subnets and gateways, access vs. trunk ports, and an AP with security.

- ✅ **You did it if:** every VLAN has its own subnet and gateway, and the trunk, router, and AP are all shown and labeled.

### 9c. Verify it worked

1. Check that **no two VLANs share a subnet**.
2. Check that **every VLAN has a gateway** and the router provides internet.

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the design as your home-lab blueprint.

> 🔧 **Home-lab continuity:** this diagram maps everything you built across Module 11. Save it; Module 12 builds on running networks like this.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Two VLANs share one subnet | Routing breaks | Give each VLAN its own subnet |
| A VLAN has no gateway | It can't leave itself | Add a gateway (`.1`) per VLAN |
| PC port set as a trunk | The PC can't use it | PCs use access ports |
| No STP on a backup link | A loop can storm | Keep STP enabled |
| Guests share the staff VLAN | Security risk | Put guests in their own VLAN |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| A VLAN can't reach the internet | Missing gateway or route | Add the VLAN's gateway; check the router |
| Two VLANs can't talk (and should) | Inter-VLAN routing off | Enable routing on the L3 device |
| Guests can see staff files | Guests on the wrong VLAN | Move guests to their own VLAN |
| New backup link crashed the LAN | Loop with STP off | Enable STP |

---

## 12. Lesson summary

- Design **before** you build — on paper, with every address labeled.
- Plan the **edge**, then **VLANs**, then a **subnet + gateway** per VLAN.
- Use **access ports** to devices, **trunks** between switches, and **STP** to guard loops.
- A **router/L3 switch** does inter-VLAN routing and internet; add **wireless** (WPA3, channels 1/6/11) mapped to VLANs.

**One-sentence recap:** Designing a small network means planning the edge, VLANs, subnets and gateways, access/trunk ports with STP, inter-VLAN routing, and secure wireless — all on paper first, with every address labeled.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-08-fill-in-the-blank.md`
2. **Matching** — `wb-11-08-matching.md`
3. **Label the diagram** — `wb-11-08-label-the-diagram.md` (the full topology)
4. **Short answer** — `wb-11-08-short-answer.md`
5. **Hands-on observation** — `wb-11-08-hands-on-observation.md` (design your own)
6. **Vocabulary review** — `wb-11-08-vocabulary-review.md`
7. **Reflection** — `wb-11-08-reflection.md`

**Quick written warm-up (do this now):** What does each VLAN need? What guards a backup link?

Each VLAN needs: ____________  Guards a backup link: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-08-knowledge-check.md`.)

1. Good network design starts… *(Objective: process)*
   - A) by buying gear first
   - B) on paper, before building
   - C) by guessing
   - D) after it breaks

2. Where does a small network meet the ISP? *(Objective: edge)*
   - A) at each PC
   - B) at the internet edge (modem/router)
   - C) at the printer
   - D) at the AP only

3. Each VLAN needs its own… *(Objective: addressing)*
   - A) subnet and gateway
   - B) password only
   - C) switch
   - D) cable color

4. Links between switches (or to the router) should be… *(Objective: trunks)*
   - A) access ports
   - B) trunks
   - C) turned off
   - D) console ports

5. What guards a backup link from causing a loop? *(Objective: STP)*
   - A) DHCP
   - B) STP
   - C) NAT
   - D) DNS

6. **True or false —** Two VLANs can safely share one subnet in a design. Explain in one sentence. *(Objective: addressing)*

7. What lets the right VLANs talk to each other? *(Objective: routing)*
   - A) a hub
   - B) inter-VLAN routing (router or L3 switch)
   - C) a longer cable
   - D) turning off STP

8. **Matching —** match each design piece to its job. *(Objective: synthesis)*
   - ___ VLAN &nbsp;&nbsp; ___ Trunk &nbsp;&nbsp; ___ Access point
   - A) Carries many VLANs between switches
   - B) Keeps a group separate
   - C) Connects wireless devices

9. Fill in the blank: For a guest wireless network, map the Guest SSID to VLAN ____________. *(Objective: wireless)*

10. **Scenario —** A small office needs staff, guests, and printers kept apart, wired and wireless, with internet for all. Outline your design in five short steps. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-08-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-08-network-design.md`. In brief:

- **Objective in one line:** learners design a complete small network on paper, synthesizing every Module 11 skill.
- **Common misconceptions:** "design is optional"; "one subnet fits all VLANs." Correct both.
- **Pacing:** ~30 min. Most time is the paper-design lab. Circulate and check subnets/gateways.
- **How CompTIA tests it:** design/scenario items — pick VLANs, subnets, where routing/STP/wireless belong.
- **Accuracy note (Prime Directive #7):** this is a paper-design lesson; no live commands are run, so no output is claimed. Any build steps reference verified methods from earlier lessons.
- **Extension idea:** add redundancy (a second switch link + STP), a DMZ, and basic ACLs (bridges to Module 13 security).

---

## 17. Cheat sheet

> **Quick reference — Small-network design (6 steps)**
>
> 1. **Edge:** internet → modem → router.
> 2. **VLANs:** one per group (Staff/Guests/Voice…).
> 3. **Addresses:** each VLAN = own **subnet + gateway** (DHCP inside).
> 4. **Switches:** access ports to PCs · trunks between switches · **STP** guards loops.
> 5. **Routing:** router / L3 switch = inter-VLAN + internet.
> 6. **Wireless:** AP · **WPA3** · channels **1/6/11** · SSID → VLAN.
>
> - ⚠️ Never share one subnet across two VLANs; never skip a gateway.
> - Plan on paper, label every address, then build.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Network design** — Planning a network's parts and addresses before building it.
- **Internet edge** — Where your network meets the ISP (the modem and router).
- **Network diagram** — A labeled drawing of devices, links, VLANs, and addresses.
- **ISP (Internet Service Provider)** — The company that brings internet to your home or office.

(VLAN, subnet, gateway, trunk, STP, access point, and topology were defined earlier and are reused here.)

---

## 19. Homework

- **Practice:** Redraw your design from memory, then check every subnet and gateway.
- **Spaced review:** Explain your design to someone, top to bottom, in six steps.
- **Preview:** Module 11 is complete! Next, **Module 12 — Network Operations** (keeping a network running).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which Module 11 skill felt strongest in the design? _______________________
3. Which part of designing was hardest? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can list the six design steps in order.
- [ ] I can plan VLANs, subnets, and gateways.
- [ ] I know where trunks, STP, routing, and wireless fit.
- [ ] I drew a labeled network diagram.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I finished Module 11 and I'm ready for Module 12.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L08** — "Designing a Small Network End to End" · Module 11 · Unit 8_
