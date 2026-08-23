---
id: NA-M11-L01
module: 11
lesson: 01
title: "VLANs: Why We Split One Switch Into Many"
unit: 8
objective_ids: ["2.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M07-L02", "NA-M07-L03", "NA-M08-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 01] VLANs: Why We Split One Switch Into Many

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E1 (concept lesson; the Dell 3424 build comes in 11-02)
> **You'll need first:** switches and broadcasts (07-02), collision/broadcast domains (07-03), subnets (08-03).

You know a switch connects many devices. But by default, **every** device on that switch is in one big group — they all hear each other's broadcasts. As a network grows, that becomes a problem. A **VLAN** lets you split one switch into several separate networks, without buying more switches. This lesson is the **why**; the next one (11-02) is the hands-on build.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** one big switch becomes a problem as it grows.
- [ ] Define a **VLAN** and what it separates.
- [ ] List the main **benefits** (security, performance, flexibility).
- [ ] Explain why two VLANs need a **router** to talk.

---

## 2. Introduction — why this matters

Picture an office in one huge open room. Every desk, every team, all in one space. When one person shouts an announcement, **everyone** hears it — even people it doesn't concern. Sales hears Engineering. Guests hear Accounting. It's noisy, and there's no privacy.

A plain switch is that open room. Remember from Lesson 07-03: a switch is **one broadcast domain**. A **broadcast** (a frame sent to everyone) reaches every port. With 10 devices that's fine. With 200 devices, the broadcasts pile up and every device wastes time reading messages meant for others. There's also no separation — Guest Wi-Fi sits in the same space as the payroll computer.

You could fix this by buying a separate switch for each team. That's expensive and rigid. A **VLAN (Virtual LAN)** does it in software instead: it splits one physical switch into several separate networks — like adding interior walls to make private rooms. Same building, many rooms.

🎯 **Exam tip:** Network+ loves the phrase "a VLAN is a separate **broadcast domain**." Memorize that link.

🔧 **Lab link:** Your Dell PowerConnect 3424 supports VLANs. You'll create them for real in Lesson 11-02.

---

## 3. Simple explanation

A **VLAN (Virtual Local Area Network)** is a group of switch ports that act as their own separate network — its own **broadcast domain** — even though they share one physical switch.

### What a VLAN separates

Each VLAN is walled off from the others. A broadcast in one VLAN stays **inside** that VLAN. Devices in VLAN 10 do not hear broadcasts from VLAN 20, and vice versa. It's as if each VLAN were on its own switch.

```
   ONE PHYSICAL SWITCH, TWO VLANs

   VLAN 10 (Sales)        VLAN 20 (Engineering)
   ports 1–4              ports 5–8
   [PC][PC][PC][PC]       [PC][PC][PC][PC]
        │                        │
        └── broadcasts stay here └── broadcasts stay here
   The two groups cannot hear each other.
```

### Why split at all? Three big wins

- **Security (segmentation).** Keep groups apart. Guests can't reach the payroll VLAN. **Segmentation** means dividing a network into separate, protected zones.
- **Performance.** Smaller broadcast domains mean fewer broadcasts hitting each device. Less noise, more speed.
- **Flexibility.** Group people by **job**, not by where they sit. Someone in Sales can plug in anywhere and still land in the Sales VLAN.

### Two rules to remember

1. **Each VLAN is usually its own subnet.** VLAN 10 might be `192.168.10.0/24`; VLAN 20 might be `192.168.20.0/24`.
2. **Different VLANs need a router to talk.** A VLAN is a separate network, and moving between networks is a **router's** job (Layer 3). We wire that up in Lesson 11-06 (inter-VLAN routing).

### VLAN numbers

Every VLAN has a **VLAN ID**, a number from **1 to 4094**. **VLAN 1** is the **default VLAN** — every port starts there until you change it. Common practice is to leave VLAN 1 unused for real traffic and make named VLANs like 10, 20, 30.

> **The big idea:** A **VLAN** splits one physical switch into several separate networks in software. Each VLAN is its own **broadcast domain** (and usually its own subnet). This gives you **security** (keep groups apart), **performance** (smaller broadcast domains), and **flexibility** (group by job, not location). Devices in different VLANs need a **router** to talk.

💡 **Tip:** Think "VLAN = a switch inside your switch." One box, many separate networks.

⚠️ **Watch out:** Two PCs on the same switch but in **different VLANs** cannot ping each other directly — even though the cable goes to the same box. That's by design, not a fault.

---

## 4. Real-world analogy

> **"A VLAN is an interior wall — it turns one open room into several private rooms, without a new building."**

| Open office (plain switch) | Walled rooms (VLANs) |
|----------------------------|----------------------|
| Everyone hears every announcement | Each room hears only its own |
| No privacy between teams | Teams are separated |
| One big noisy space | Several calm, smaller spaces |
| Need a new building to separate | Just add a wall (software) |

The building (switch) is the same. The walls (VLANs) give you separate rooms without new hardware.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **VLAN** | VEE-lan | A group of switch ports that act as their own separate network. |
| **Broadcast domain** | | The set of devices that all receive each other's broadcasts. |
| **Segmentation** | seg-men-TAY-shun | Dividing a network into separate, protected zones. |
| **VLAN ID** | | The number (1–4094) that names a VLAN. |
| **Default VLAN** | | VLAN 1 — where every switch port starts. |

---

## 6. ASCII diagram

```
   WHY VLANs — ONE SWITCH, MANY NETWORKS

   BEFORE (no VLAN):  one broadcast domain
     [PC][PC][PC][PC][PC][PC]   ← every device hears every broadcast

   AFTER (two VLANs):
     VLAN 10 ─ ports 1-3 ─ [PC][PC][PC]   broadcasts stay in VLAN 10
     VLAN 20 ─ ports 4-6 ─ [PC][PC][PC]   broadcasts stay in VLAN 20

   To send between VLAN 10 and VLAN 20 → must go through a ROUTER.
```

_A VLAN turns one broadcast domain into several — separate, quieter, and safer._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-01-vlan-split-01.svg` (created and stored in this module's `assets/`)
> **Shows:** one switch on top with 6 ports; ports 1–3 grouped as VLAN 10, ports 4–6 as VLAN 20; a router off to the side showing the only path between the two VLANs.
> **Key elements & labels:** switch, port numbers, "VLAN 10 (Sales)" and "VLAN 20 (Engineering)" labels, subnets 192.168.10.0/24 and 192.168.20.0/24, a router with a line to each VLAN.
> **Color meaning:** each VLAN has a color **and** a text label and a distinct port range; color never stands alone.
> **Flow direction:** switch at top, VLAN groups below, router to the right bridging them.
> **Alt text (required):** "One physical switch split into two VLANs. Ports 1 to 3 form VLAN 10, labeled Sales, on subnet 192.168.10.0/24. Ports 4 to 6 form VLAN 20, labeled Engineering, on subnet 192.168.20.0/24. Broadcasts stay inside each VLAN, so the two groups cannot hear each other. A router on the right connects to both VLANs, showing that traffic moving between VLAN 10 and VLAN 20 must pass through the router."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-01-dell3424-ports-01.jpg`
> The Dell PowerConnect 3424 front panel with two groups of ports circled in different labels. Alt text: "The Dell PowerConnect 3424 front panel with two port groups marked, showing how ports will be split into two VLANs."
>
> **Photo 2** — `img-11-01-office-rooms-01.jpg`
> An open office next to a walled-office photo. Alt text: "An open office beside a walled office, illustrating how VLANs add interior walls to separate one space into rooms."

---

## 9. Hands-on lab

**Goal:** plan (on paper) how you'll split your Dell 3424 into two VLANs — the design you'll build in 11-02.
**Why:** a clear plan prevents mistakes on the live switch.

**You will need**
- Paper and pen (no switch changes yet). Estimated time: 12 min.

⚠️ **Before you start (safety):** this is planning only. You will **not** touch the switch — that's Lesson 11-02, where a wrong VLAN move can lock you out.

### 9a. Step-by-step instructions

1. Draw your Dell 3424 as a long box with 24 port squares.
2. Pick two VLANs: write **VLAN 10 = "Home"** and **VLAN 20 = "Lab"**.
3. Assign ports: circle ports **1–4** for VLAN 10 and ports **5–8** for VLAN 20.
4. Give each a subnet: VLAN 10 = `192.168.10.0/24`; VLAN 20 = `192.168.20.0/24`.
5. Note which port your laptop uses now, and which VLAN it will be in.

### 9b. Expected results

- A labeled drawing: two VLANs, their ports, and their subnets.

- ✅ **You did it if:** your paper shows two VLANs, each with ports and a subnet, on one switch.

### 9c. Verify it worked

1. Point to VLAN 10 and say its subnet out loud.
2. Explain in one sentence why a device in VLAN 10 can't reach VLAN 20 without a router.

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the drawing for Lesson 11-02.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking VLANs can talk by default | Confusion when ping fails | Different VLANs need a **router** (11-06) |
| One subnet for all VLANs | Addressing breaks | Give **each VLAN its own subnet** |
| Using VLAN 1 for everything | Weak separation | Make named VLANs (10, 20, …); leave VLAN 1 unused |
| "A VLAN needs a new switch" | Wasted money | A VLAN is **software** on one switch |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Two PCs on one switch can't ping | They're in different VLANs | Expected — add a router (11-06) or put them in the same VLAN |
| Broadcasts still flood everything | Ports all in VLAN 1 | Move ports into separate VLANs |
| A device lands in the wrong network | Port in the wrong VLAN | Reassign that port to the right VLAN |
| Guest can reach internal server | No segmentation | Put guests in their own VLAN |

---

## 12. Lesson summary

- A plain switch is **one broadcast domain** — everyone hears everyone.
- A **VLAN** splits one switch into several separate networks in software.
- Each VLAN is its own **broadcast domain** and usually its own **subnet**.
- Wins: **security**, **performance**, **flexibility**. Different VLANs need a **router** to talk.

**One-sentence recap:** A VLAN turns one physical switch into several separate networks, each its own broadcast domain and subnet, for better security, speed, and flexibility.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-01-fill-in-the-blank.md`
2. **Matching** — `wb-11-01-matching.md`
3. **Label the diagram** — `wb-11-01-label-the-diagram.md` (the VLAN split)
4. **Short answer** — `wb-11-01-short-answer.md`
5. **Hands-on observation** — `wb-11-01-hands-on-observation.md` (plan your VLANs)
6. **Vocabulary review** — `wb-11-01-vocabulary-review.md`
7. **Reflection** — `wb-11-01-reflection.md`

**Quick written warm-up (do this now):** What does a VLAN separate? What device lets two VLANs talk?

Separates: ____________  Lets them talk: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-01-knowledge-check.md`.)

1. What is a **VLAN**? *(Objective: concept)*
   - A) A new physical switch
   - B) A group of switch ports acting as their own separate network
   - C) A type of cable
   - D) A router setting only

2. A VLAN is its own… *(Objective: broadcast domain)*
   - A) collision only
   - B) broadcast domain
   - C) power supply
   - D) cable type

3. Two PCs on the same switch, in **different VLANs**, want to talk. They need a… *(Objective: routing)*
   - A) longer cable
   - B) router (Layer 3)
   - C) second power cord
   - D) faster switch

4. Which is a benefit of VLANs? *(Objective: benefits)*
   - A) More broadcasts everywhere
   - B) Security through segmentation
   - C) One giant subnet
   - D) Slower performance

5. The **default VLAN** on a switch is… *(Objective: VLAN ID)*
   - A) VLAN 0
   - B) VLAN 1
   - C) VLAN 100
   - D) VLAN 4094

6. **True or false —** You must buy a separate switch for each VLAN. Explain in one sentence. *(Objective: concept)*

7. Each VLAN is usually also its own… *(Objective: subnet)*
   - A) subnet
   - B) password
   - C) cable color
   - D) operating system

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ VLAN &nbsp;&nbsp; ___ Segmentation &nbsp;&nbsp; ___ VLAN ID
   - A) The number (1–4094) that names a VLAN
   - B) Dividing a network into separate protected zones
   - C) A group of ports acting as a separate network

9. Fill in the blank: A broadcast sent inside VLAN 10 stays ____________ VLAN 10. *(Objective: broadcast domain)*

10. **Scenario —** Your office has Sales, Engineering, and Guests on one switch, and guests keep reaching internal servers. How would VLANs fix this, and what would you need to let Sales and Engineering share a printer across VLANs? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-01-vlans-intro.md`. In brief:

- **Objective in one line:** learners explain what a VLAN is, what it separates, its benefits, and why VLANs need a router to talk.
- **Common misconceptions:** "VLANs can talk by default"; "a VLAN needs new hardware." Correct both.
- **Pacing:** ~30 min. This is a concept lesson; the Dell 3424 build is 11-02. Keep hands off the switch here.
- **How CompTIA tests it:** VLAN = separate broadcast domain; each VLAN = its own subnet; inter-VLAN needs Layer 3.
- **Accuracy note:** no switch commands are run in this lesson (planning only), so no output is shown. The Dell 3424 VLAN configuration is taught and verified in 11-02. VLAN ID range 1–4094 and VLAN 1 default are standards-based (IEEE 802.1Q).
- **Extension idea:** preview the native VLAN and 802.1Q tagging (Lesson 11-03).

---

## 17. Cheat sheet

> **Quick reference — VLAN basics**
>
> - **VLAN** = a group of switch ports acting as a **separate network** (own broadcast domain).
> - Splits **one switch** into many networks — in **software**, no new hardware.
> - Each VLAN is usually its **own subnet** (e.g., VLAN 10 → 192.168.10.0/24).
> - **VLAN ID:** 1–4094. **VLAN 1** = default (leave unused for real traffic).
> - **Benefits:** security (segmentation) · performance (smaller broadcast domains) · flexibility (group by job).
> - **Different VLANs need a router** (Layer 3) to talk — see 11-06.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **VLAN (Virtual Local Area Network)** — A group of switch ports that act as their own separate network and broadcast domain.
- **VLAN ID** — The number (1–4094) that names a VLAN; VLAN 1 is the default.
- **Default VLAN** — VLAN 1, where every switch port starts until it is changed.
- **Segmentation** — Dividing a network into separate, protected zones (VLANs do this).

(Broadcast domain was defined in Module 07 and is reused here.)

---

## 19. Homework

- **Practice:** Redraw your two-VLAN plan from memory, including subnets.
- **Spaced review:** Explain to someone why guests should be on their own VLAN.
- **Preview:** Next lesson, **configuring VLANs on the Dell 3424** — the real build.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Where in a real network would I use a VLAN? _______________________
3. What still feels fuzzy about VLANs? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can define a VLAN in my own words.
- [ ] I can name what a VLAN separates (a broadcast domain).
- [ ] I can list the three benefits (security, performance, flexibility).
- [ ] I know different VLANs need a router to talk.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson builds VLANs on the Dell 3424.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L01** — "VLANs: Why We Split One Switch Into Many" · Module 11 · Unit 8_
