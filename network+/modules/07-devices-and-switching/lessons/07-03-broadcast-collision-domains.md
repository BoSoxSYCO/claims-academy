---
id: NA-M07-L03
module: 07
lesson: 03
title: "Broadcast vs. Collision Domains"
unit: 4
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 27
equipment_tier: E1
prerequisites: ["NA-M07-L01", "NA-M07-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 07 · Lesson 03] Broadcast vs. Collision Domains

> **Unit:** Unit 4 — Devices & Switching · **Time:** ~27 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 07-01 (hub/switch/router) and Lesson 07-02 (how a switch learns).

You know a hub shouts to everyone and a switch delivers to just one port. Now we name two invisible "zones" that decide **how far noise spreads**: the **collision domain** and the **broadcast domain**. This lesson explains both — and the one-line rule that ties them to switches and routers.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain a **collision** and a **collision domain**.
- [ ] Explain a **broadcast domain**.
- [ ] State the rule: **switches** break up collision domains; **routers** break up broadcast domains.
- [ ] Count domains in a simple diagram.

---

## 2. Introduction — why this matters

Imagine people talking in a **room**. If two people speak at the exact same moment, their words **collide** — you hear garble and they have to repeat. The room is the zone where a collision can happen.

Now imagine an **all-building announcement** over a speaker. Everyone in the building hears it. But it stops at the building's walls — the building next door hears nothing.

Networks have both ideas. A **collision domain** is the zone where two devices' signals can clash. A **broadcast domain** is the group of devices that all hear each other's "announcements" (broadcasts). Different devices control these zones in different ways — and knowing which is a favorite exam question.

Why learn this? Because it explains *why* we use switches instead of hubs, and *why* we use routers to split big networks. It also helps you design a network that stays fast and quiet.

🎯 **Exam tip:** Memorize the mantra: **switches break up collision domains; routers break up broadcast domains.** Expect to count domains in a diagram.

---

## 3. Simple explanation

Let's define collisions, then the two domains, then the rule.

### Collisions
A **collision** happens when two devices send at the **same time** on a **shared** wire, and their signals clash and are ruined. Both must wait and resend. Collisions slow a network down.

This was common with **hubs** and old shared cabling (half-duplex, one-at-a-time). Modern **switched, full-duplex** links have basically **no collisions**, because each device gets its own dedicated path.

*(The old rulebook for handling collisions was called **CSMA/CD** — listen first, send, and if a collision happens, wait a random moment and resend. It's mostly history now, but the exam still names it.)*

### Collision domain
A **collision domain** is a part of the network where a collision **can** happen — where devices share the same signal space.

- A **hub** puts **all** its ports in **one** collision domain (everyone can collide). That's why hubs are slow.
- A **switch** gives **each port its own** collision domain. Two devices on different switch ports **cannot** collide. So a switch **breaks up** collision domains — one per port.

### Broadcast domain
A **broadcast domain** is the group of devices that all receive each other's **broadcasts** (the "all devices" frames from Lesson 07-02).

- A **hub** and a **switch** both **pass broadcasts to every port**, so all their ports are in **one** broadcast domain.
- A **router** does **not** forward broadcasts. So a router **breaks up** broadcast domains — each side of the router is its own broadcast domain (its own network).

### The one-line rule
> **Switches break up collision domains. Routers break up broadcast domains.**

A switch stops **collisions** (one domain per port) but still passes **broadcasts** everywhere. A router stops **broadcasts** (separating networks) — and each router interface is also its own collision domain.

### Counting quick reference
| Device | Collision domains | Broadcast domains |
|--------|-------------------|-------------------|
| **Hub** (N ports) | **1** (all ports share) | 1 |
| **Switch** (N ports) | **N** (one per port) | **1** (broadcasts flood all) |
| **Router** (N ports) | one per interface | **one per interface** |

> **The big idea:** A **collision domain** is where signals can clash; a **broadcast domain** is who hears broadcasts. A **switch** gives each port its **own collision domain** but keeps one broadcast domain. A **router** gives each side its **own broadcast domain**. Mantra: **switch → collisions, router → broadcasts.**

💡 **Tip:** To count on a diagram: every **switch port** = a new collision domain; every **router interface** = a new broadcast domain.

⚠️ **Watch out:** A switch does **not** stop broadcasts — only a router does. Too many broadcasts in one big domain (a "broadcast storm") can flood a network.

---

## 4. Real-world analogy

> **"A collision domain is a room where two voices can clash; a broadcast domain is who hears the building-wide announcement."**

| Talking in a building | Networking |
|-----------------------|------------|
| Two people speaking at once, garbling | A **collision** |
| The room where that can happen | A **collision domain** |
| Giving each person a private booth | A **switch** (one collision domain per port) |
| An all-building PA announcement | A **broadcast** |
| Everyone who can hear the PA | A **broadcast domain** |
| A soundproof wall between buildings | A **router** (splits broadcast domains) |

Private booths stop voices from clashing (switch). Walls stop announcements from spreading (router).

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Collision** | kuh-LIH-zhun | Two devices sending at once on a shared wire, clashing their signals. |
| **Collision domain** | | A zone of the network where a collision can happen. |
| **Broadcast domain** | | The group of devices that all receive each other's broadcasts. |
| **CSMA/CD** | C-S-M-A-C-D | The old method for handling collisions (listen, send, back off, resend). |

---

## 6. ASCII diagram

```
   COLLISION DOMAINS (where signals can clash)
     HUB:   [PC]─┐
            [PC]─┼─HUB─   ALL ports = 1 collision domain  (can collide)
            [PC]─┘

     SWITCH: [PC]─port1 ┐
             [PC]─port2 ┼─SWITCH   EACH port = its own collision domain
             [PC]─port3 ┘          (3 ports = 3 collision domains, no clashes)

   BROADCAST DOMAINS (who hears broadcasts)
     [ Switch + all its PCs ] = ONE broadcast domain
     ─────────── ROUTER ───────────   (router blocks broadcasts)
     [ other network ]        = a SEPARATE broadcast domain

   RULE: switches break up COLLISION domains · routers break up BROADCAST domains
```

_Each switch port = a collision domain. Each router side = a broadcast domain._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-07-03-domains-01.svg` (created and stored in this module's `assets/`)
> **Shows:** left — a hub with all ports circled as one collision domain; middle — a switch with each port circled as its own collision domain, all inside one broadcast-domain outline; right — a router separating two broadcast-domain outlines.
> **Key elements & labels:** collision domains as small dashed circles per port; broadcast domains as large outlines; the mantra printed below.
> **Color meaning:** collision vs. broadcast domains differ by **outline style and label** (small dashed vs. large solid), not color alone.
> **Flow direction:** hub → switch → router, showing more domains as devices get smarter.
> **Alt text (required):** "Three device examples. A hub with all ports inside one collision domain. A switch where each port is its own collision domain, but all ports share one broadcast domain. A router separating two broadcast domains. A caption reads: switches break up collision domains; routers break up broadcast domains."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-07-03-switch-ports-domains-01.jpg`
> A switch's ports, each labeled its own collision domain. Alt text: "A switch with each port marked as its own collision domain."
>
> **Photo 2** — `img-07-03-router-two-nets-01.jpg`
> A router with two networks on each side. Alt text: "A router with a different network on each side, marking two broadcast domains."
>
> **Photo 3** — `img-07-03-old-hub-01.jpg`
> An old Ethernet hub. Alt text: "An old Ethernet hub, whose ports all shared one collision domain."

---

## 9. Hands-on lab

**Goal:** count collision and broadcast domains in a small drawn network.
**Why:** counting domains is exactly what the exam asks, and it cements the rule.

**You will need**
- Pen and paper (Equipment tier **E1**).
- Estimated time: 12 min.

⚠️ **Before you start (safety):** This is a drawing-and-counting task. Nothing on your computer changes.

### 9a. Step-by-step instructions

1. Draw a **switch** with **4 PCs** on 4 ports. Circle each port lightly — each is one **collision domain**. Count them: how many? (4)
2. Draw one big outline around the whole switch-and-PCs. That's **1 broadcast domain**. Write "1."
3. Now add a **router** to the right of the switch, connecting to a **second** switch with 2 PCs.
4. Count **collision domains**: 4 (first switch ports) + 2 (second switch ports) + the router links. Write your total.
5. Count **broadcast domains**: the router splits them, so the left side is one and the right side is another. Write "2."
6. Under your drawing, write the rule in your own words.

### 9b. Expected results

- First switch: 4 collision domains, 1 broadcast domain.
- After adding the router + second switch: 2 broadcast domains total.
- ✅ **You did it if:** you can say "each switch port is a collision domain; the router split the broadcast domains into two."

### 9c. Verify it worked

1. Point to a switch port and say "collision domain." Point across the router and say "new broadcast domain."
2. Recite the mantra: switches break up collision domains; routers break up broadcast domains.

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the drawing for review.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking a switch stops broadcasts | You miscount broadcast domains | Only a **router** stops broadcasts |
| Thinking a hub gives each port a domain | You miscount collisions | A hub is **one** collision domain for all ports |
| Forgetting each switch port is its own collision domain | You undercount | Each switch port = one collision domain |
| Mixing up the two rules | You answer backwards | **Switch → collisions; router → broadcasts** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Network slow with lots of collisions | A hub or half-duplex link | Replace hubs with switches (full-duplex) |
| Broadcasts flooding everywhere | One huge broadcast domain | Split it with a router (or VLANs, later) |
| Can't count domains | Rule unclear | Switch port = collision domain; router side = broadcast domain |

---

## 12. Lesson summary

- A **collision** is two devices sending at once on a shared wire; a **collision domain** is where that can happen.
- A **broadcast domain** is the group that hears each other's broadcasts.
- A **switch** gives each port its **own collision domain**, but keeps **one broadcast domain**.
- A **router** gives each side its **own broadcast domain**. **Mantra: switches break up collision domains; routers break up broadcast domains.**

**One-sentence recap:** A collision domain is where signals can clash and a broadcast domain is who hears broadcasts — switches split collision domains (one per port) while routers split broadcast domains (one per network).

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-07-03-fill-in-the-blank.md`
2. **Matching** — `wb-07-03-matching.md`
3. **Label the diagram** — `wb-07-03-label-the-diagram.md` (count the domains)
4. **Short answer** — `wb-07-03-short-answer.md`
5. **Hands-on observation** — `wb-07-03-hands-on-observation.md` (draw & count)
6. **Vocabulary review** — `wb-07-03-vocabulary-review.md`
7. **Reflection** — `wb-07-03-reflection.md`

**Quick written warm-up (do this now):** Which device breaks up collision domains? Which breaks up broadcast domains?

Collision: ____________  Broadcast: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-07-03-knowledge-check.md`.)

1. What is a **collision**? *(Objective: collision)*
   - A) Two devices sending at the same time on a shared wire, clashing
   - B) A broken cable
   - C) A router failing
   - D) A slow website

2. A **collision domain** is… *(Objective: collision domain)*
   - A) the whole internet
   - B) a zone where a collision can happen
   - C) a type of cable
   - D) a MAC address

3. On a **hub**, how many collision domains are there? *(Objective: hub)*
   - A) One for all ports
   - B) One per port
   - C) Zero
   - D) One per PC plus one

4. On a **switch**, each port is… *(Objective: switch)*
   - A) part of one big collision domain
   - B) its own collision domain
   - C) a broadcast domain by itself
   - D) a router

5. Which device breaks up **broadcast** domains? *(Objective: router)*
   - A) Hub
   - B) Switch
   - C) Router
   - D) Repeater

6. **True or false —** A switch stops broadcasts from spreading. Explain in one sentence. *(Objective: switch)*

7. Complete the mantra: "Switches break up ____________ domains; routers break up ____________ domains." *(Objective: rule)*
   - A) broadcast / collision
   - B) collision / broadcast
   - C) both / neither
   - D) MAC / IP

8. **Matching —** write the letter next to each device. *(Objective: counting)*
   - ___ Hub &nbsp;&nbsp; ___ Switch &nbsp;&nbsp; ___ Router
   - A) each port is its own collision domain &nbsp; B) all ports share one collision domain &nbsp; C) each side is its own broadcast domain

9. Fill in the blank: A switch with 5 ports has ____________ collision domains and ____________ broadcast domain(s). *(Objective: counting)*

10. **Scenario —** A network has one switch with 6 PCs and it feels fine, but you worry broadcasts flood everyone. What device would you add to split the broadcast domain, and why? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-07-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-07-03-domains.md`. In brief:

- **Objective in one line:** learners define collision/broadcast domains and apply the switch/router rule to count them.
- **Common misconceptions:** switch stops broadcasts; hub gives per-port domains; rules reversed. Correct all three.
- **Pacing:** ~27 min. The draw-and-count lab is the payoff.
- **How CompTIA tests it:** counting domains in a diagram; the switch/router mantra; CSMA/CD name.
- **Support idea:** the room / PA-announcement analogy; booths (switch) vs. walls (router).
- **Extension idea:** VLANs as a way to split broadcast domains without a physical router (preview).

---

## 17. Cheat sheet

> **Quick reference — Collision & broadcast domains**
>
> - **Collision** = two devices send at once on a shared wire → signals clash.
> - **Collision domain** = where a collision can happen. **Broadcast domain** = who hears broadcasts.
> - **Hub:** 1 collision domain (all ports) · 1 broadcast domain.
> - **Switch:** **each port** = its own collision domain · **1** broadcast domain (floods broadcasts).
> - **Router:** **each interface** = its own broadcast domain (blocks broadcasts).
> - **Mantra:** switches break up **collision** domains; routers break up **broadcast** domains.
>
> _(Full version: `resources/cheat-sheets/devices-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Collision** — Two devices sending at once on a shared wire, clashing their signals.
- **Collision domain** — A zone of the network where a collision can happen.
- **Broadcast domain** — The group of devices that all receive each other's broadcasts.
- **CSMA/CD** — The old method for handling collisions (listen, send, back off, resend).

---

## 19. Homework

- **Practice:** Draw a network with two switches joined to one router. Count the collision domains and the broadcast domains.
- **Spaced review:** Redo the Lesson 07-02 flashcards for how a switch learns (forward vs. flood).
- **Preview:** Beyond hubs, switches, and routers, networks use more gear. Next: **access points, firewalls, and other devices**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I recite the switch/router mantra now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain a collision and a collision domain.
- [ ] I can explain a broadcast domain.
- [ ] I know switches break up collision domains and routers break up broadcast domains.
- [ ] I can count domains in a simple diagram.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: access points, firewalls, and other gear.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M07-L03** — "Broadcast vs. Collision Domains" · Module 07 · Unit 4_
