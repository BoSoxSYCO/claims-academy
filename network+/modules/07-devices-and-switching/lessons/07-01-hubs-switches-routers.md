---
id: NA-M07-L01
module: 07
lesson: 01
title: "Hubs, Switches, Routers — What's the Difference?"
unit: 4
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 27
equipment_tier: E1
prerequisites: ["NA-M05-L02", "NA-M05-L05"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 07 · Lesson 01] Hubs, Switches, Routers — What's the Difference?

> **Unit:** Unit 4 — Devices & Switching · **Time:** ~27 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 05-02 (OSI layers) and Lesson 05-05 (following one packet).

You've met the cables. Now meet the **boxes** they plug into. Three devices get mixed up all the time: the **hub**, the **switch**, and the **router**. They look similar but behave very differently. This lesson makes the difference crystal clear — and it maps straight onto the OSI layers you already know.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **hub** does (repeats everything to everyone).
- [ ] Explain what a **switch** does (sends to just the right port, using MAC).
- [ ] Explain what a **router** does (connects different networks, using IP).
- [ ] Map each device to its **OSI layer** (hub L1, switch L2, router L3).

---

## 2. Introduction — why this matters

Imagine a busy office with a message to deliver. Three ways to do it:

1. A person **shouts the message to the whole room** — everyone hears it, even people it wasn't for. Loud and wasteful.
2. A **smart mail clerk** knows exactly which desk each person sits at and walks the message straight to the right desk. Quiet and efficient.
3. The **post office** sends mail between **different buildings** across town.

Those three are a **hub**, a **switch**, and a **router**. The hub shouts to everyone. The switch delivers to the one right port. The router connects separate networks. Knowing which is which tells you how data moves — and why modern networks use switches, not hubs.

Why learn this? Because these are the core devices of every network, and the exam tests them constantly. Better still, each maps to an OSI layer you already learned: hub = Layer 1, switch = Layer 2, router = Layer 3.

🎯 **Exam tip:** Network+ loves "which device works at Layer 2?" (switch) and "which connects two networks?" (router). Lock in the device-to-layer map.

🔧 **Lab link:** The Dell PowerConnect 3424 you'll configure later is a **switch** — a Layer 2 device that learns MAC addresses.

---

## 3. Simple explanation

Let's take the three devices in order of "how smart" they are.

### Hub — repeats everything to everyone (Layer 1)
A **hub** is the simplest and oldest device. When a signal comes in one port, the hub just **copies it out every other port**. It has no brains and reads no addresses — it works at **Layer 1 (Physical)**, dealing only with raw signals.

The problem: every device hears every message, even ones meant for someone else. That wastes bandwidth and causes **collisions** (two signals clashing). Hubs are basically obsolete — you'll rarely see one — but the exam still asks about them.

### Switch — sends to just the right port (Layer 2)
A **switch** is the smart version. It **learns which device (MAC address) is on each port**, then sends a frame **only out the port where the destination is**. It works at **Layer 2 (Data Link)**, using the MAC addresses you met in Module 03 and 05.

Because it delivers to just the right port, a switch is quiet, fast, and avoids most collisions. It is the main device inside a modern LAN — your home router even has a small switch built in.

### Router — connects different networks (Layer 3)
A **router** connects **separate networks** together, like your home network to the internet. It reads **IP addresses** to decide where to send data next, working at **Layer 3 (Network)**. This is the "post office between buildings" from the intro.

Your home router is really several devices in one box: a router (to reach the internet), a switch (for your wired devices), and usually a wireless access point (for Wi-Fi).

### The device-to-layer map
| Device | OSI layer | Reads | What it does |
|--------|-----------|-------|--------------|
| **Hub** | 1 (Physical) | nothing (just signals) | Repeats every input to all ports |
| **Switch** | 2 (Data Link) | **MAC** address | Sends a frame to the one right port |
| **Router** | 3 (Network) | **IP** address | Connects and routes between networks |

> **The big idea:** A **hub** (Layer 1) blindly repeats to **all** ports. A **switch** (Layer 2) learns **MAC** addresses and sends to the **one right** port. A **router** (Layer 3) uses **IP** to connect **different networks**. Smarter device = higher layer.

💡 **Tip:** Match the address to the device: no address → hub; **MAC** → switch; **IP** → router. That's the whole lesson in one line.

⚠️ **Watch out:** People call the box at home "the router," but it's really a router **plus** a switch **plus** a Wi-Fi access point in one case.

---

## 4. Real-world analogy

> **"Hub shouts to the whole room; switch walks the note to the right desk; router mails between buildings."**

| Office delivery | Device | Layer |
|-----------------|--------|-------|
| Shouting to everyone in the room | **Hub** | 1 |
| A clerk delivering to the exact desk | **Switch** | 2 |
| The post office sending between buildings | **Router** | 3 |
| Knowing each person's desk | The switch learning **MAC** addresses |
| A building's street address | An **IP** address (router's job) |

The smarter the delivery, the less noise and the farther it reaches. Same with network devices.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Hub** | hub | A Layer 1 device that repeats every incoming signal out all ports. |
| **Switch** | swich | A Layer 2 device that learns MAC addresses and forwards to the right port. |
| **Router** | ROW-ter | A Layer 3 device that connects different networks using IP addresses. |
| **Repeater** | ree-PEET-er | A Layer 1 device that boosts a weak signal so it travels farther. |

---

## 6. ASCII diagram

```
   HUB (L1) — repeats to ALL ports        SWITCH (L2) — to the ONE right port
        [PC-A]                                  [PC-A]
          |                                       |
   [PC]--HUB--[PC]  message to A also            [PC]--SWITCH--[PC]  message to A
          |         goes to everyone (noisy)       |            goes ONLY to A (quiet)
        [PC]                                      [PC]
   reads: nothing (signals)                  reads: MAC address

   ROUTER (L3) — connects DIFFERENT networks
     [ Your home network ] ── ROUTER ── ( the internet )
                              reads: IP address
```

_No address = hub (L1) · MAC = switch (L2) · IP = router (L3). Smarter = higher layer._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-07-01-hub-switch-router-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three panels — a hub sending one message to all connected PCs (arrows to every port), a switch sending to just one PC (single arrow), and a router linking a home network to an internet cloud — each labeled with its OSI layer and the address it reads.
> **Key elements & labels:** hub = L1 "repeats to all"; switch = L2 "MAC, one port"; router = L3 "IP, between networks."
> **Color meaning:** each device panel is labeled with its layer and behavior in text, so it reads in black and white.
> **Flow direction:** message arrows show all-ports (hub) vs. one-port (switch); router bridges two clouds.
> **Alt text (required):** "Three panels: a hub at Layer 1 copying one message out to every connected computer; a switch at Layer 2 sending a message to only the one correct computer using its MAC address; and a router at Layer 3 connecting a home network to the internet using IP addresses."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-07-01-switch-ports-01.jpg`
> The port bank of a network switch. Alt text: "The front of a network switch showing a row of Ethernet ports."
>
> **Photo 2** — `img-07-01-home-router-01.jpg`
> A home router/gateway with LAN ports and antennas. Alt text: "A home router with several LAN ports and Wi-Fi antennas — router, switch, and access point in one."
>
> **Photo 3** — `img-07-01-dell-3424-01.jpg`
> The Dell PowerConnect 3424. Alt text: "A Dell PowerConnect 3424 managed switch, the device used in this course's home lab."

---

## 9. Hands-on lab

**Goal:** find the network devices in your own home and name each one's job and layer.
**Why:** spotting real hubs, switches, and routers makes the differences concrete.

**You will need**
- Your home network gear in view (router/gateway, any switch) and pen and paper (Equipment tier **E1**).
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Just look at the devices. Don't unplug anything that's in use.

### 9a. Step-by-step instructions

1. Find your home **router/gateway** (the box from your internet provider, often with antennas). Write it down as a **router** (Layer 3).
2. Count its **LAN ports** (the row of Ethernet jacks). Those are its built-in **switch** (Layer 2).
3. If it has Wi-Fi, note that it's also a wireless **access point** (you'll cover APs in Lesson 07-04).
4. Look for any **separate switch** (a box that's just a row of Ethernet ports, no antennas). If you have one, write it down as a **switch** (Layer 2).
5. For each device, write: its name, its **job** (repeat / forward to right port / connect networks), and its **OSI layer**.
6. Note: do you have any **hub**? (Almost certainly not — they're obsolete. That's the point.)

### 9b. Expected results

- You identified at least a router (Layer 3) and its built-in switch (Layer 2).
- You matched each device to its job and layer.
- ✅ **You did it if:** you can point at your home box and say "router at Layer 3, with a switch at Layer 2 inside."

### 9c. Verify it worked

1. Say which device reads **MAC** addresses (switch) and which reads **IP** (router).
2. Explain why you almost never see a hub anymore (noisy, collisions, obsolete).

### 9d. Reset / roll back

Nothing to undo — you only looked. Keep your notes for the rest of Module 07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Calling a switch a hub | You misjudge how data flows | A hub repeats to all; a switch sends to one (by MAC) |
| Thinking a switch connects to the internet | You confuse L2 and L3 | A router (L3) connects networks; a switch (L2) is within one |
| Forgetting the home box is 3-in-1 | You expect separate devices | Home "routers" include a router, switch, and Wi-Fi AP |
| Mixing up MAC and IP roles | You place devices wrong | MAC → switch (L2); IP → router (L3) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Not sure if a box is a switch or router | Roles unclear | Does it reach the internet (router) or just link local devices (switch)? |
| Slow, noisy old network | A hub in the path | Replace any hub with a switch |
| Can't tell the layer | New mapping | No address = L1 hub; MAC = L2 switch; IP = L3 router |

---

## 12. Lesson summary

- A **hub** (Layer 1) repeats every signal to **all** ports — noisy and obsolete.
- A **switch** (Layer 2) learns **MAC** addresses and forwards to the **one right** port — the main LAN device.
- A **router** (Layer 3) uses **IP** addresses to connect **different networks** — your door to the internet.
- **Address → device:** none = hub; MAC = switch; IP = router. Your home box is all three in one.

**One-sentence recap:** A hub blindly repeats to every port (Layer 1), a switch learns MAC addresses and sends to just the right port (Layer 2), and a router uses IP addresses to connect different networks (Layer 3).

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-07-01-fill-in-the-blank.md`
2. **Matching** — `wb-07-01-matching.md`
3. **Label the diagram** — `wb-07-01-label-the-diagram.md` (three devices)
4. **Short answer** — `wb-07-01-short-answer.md`
5. **Hands-on observation** — `wb-07-01-hands-on-observation.md` (find your devices)
6. **Vocabulary review** — `wb-07-01-vocabulary-review.md`
7. **Reflection** — `wb-07-01-reflection.md`

**Quick written warm-up (do this now):** Which device reads MAC addresses? Which reads IP addresses?

MAC: ____________  IP: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-07-01-knowledge-check.md`.)

1. What does a **hub** do? *(Objective: hub)*
   - A) Sends to just the right port
   - B) Repeats every signal out all ports
   - C) Connects different networks
   - D) Encrypts data

2. What does a **switch** use to send a frame to the right port? *(Objective: switch)*
   - A) IP address
   - B) MAC address
   - C) Cable color
   - D) Port number only

3. What does a **router** connect? *(Objective: router)*
   - A) Two ports on one PC
   - B) Different networks (like your home to the internet)
   - C) Two wires in a cable
   - D) A monitor to a PC

4. At which OSI layer does a **switch** work? *(Objective: layer map)*
   - A) Layer 1
   - B) Layer 2
   - C) Layer 3
   - D) Layer 7

5. At which OSI layer does a **router** work? *(Objective: layer map)*
   - A) Layer 1
   - B) Layer 2
   - C) Layer 3
   - D) Layer 4

6. **True or false —** A switch sends every frame to every device. Explain in one sentence. *(Objective: switch)*

7. Why are **hubs** rarely used today? *(Objective: hub)*
   - A) They are too fast
   - B) They repeat to everyone, causing noise and collisions
   - C) They use fiber only
   - D) They cost too much

8. **Matching —** write the letter next to each device. *(Objective: layer map)*
   - ___ Hub &nbsp;&nbsp; ___ Switch &nbsp;&nbsp; ___ Router
   - A) Layer 2, uses MAC &nbsp; B) Layer 1, repeats to all &nbsp; C) Layer 3, uses IP

9. Fill in the blank: Your home "router" box is really a router, a ____________, and a Wi-Fi access point in one. *(Objective: home box)*

10. **Scenario —** You want to add five wired computers to one room and have them talk to each other quickly. Which device should you use, and why not a hub? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-07-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-07-01-devices.md`. In brief:

- **Objective in one line:** learners tell hub/switch/router apart and map each to its OSI layer and address.
- **Common misconceptions:** switch = hub; switch reaches the internet; home box is one device. Correct all three.
- **Pacing:** ~27 min. The find-your-devices lab is the payoff and previews the Dell switch.
- **How CompTIA tests it:** device-to-layer ("which works at L2?") and address-to-device (MAC/IP).
- **Support idea:** the shout / clerk / post-office analogy for each device.
- **Extension idea:** managed vs. unmanaged switches, and Layer 3 switches, for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Hub vs. switch vs. router**
>
> - **Hub** — Layer 1. Repeats every signal to **all** ports. No address. Noisy, obsolete.
> - **Switch** — Layer 2. Learns **MAC** addresses; sends a frame to the **one right** port. Main LAN device.
> - **Router** — Layer 3. Uses **IP** to connect **different networks** (home ↔ internet).
> - **Address → device:** none = hub · MAC = switch · IP = router.
> - Your home box = router + switch + Wi-Fi access point in one.
>
> _(Full version: `resources/cheat-sheets/devices-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Hub** — A Layer 1 device that repeats every incoming signal out all ports.
- **Switch** — A Layer 2 device that learns MAC addresses and forwards to the right port.
- **Router** — A Layer 3 device that connects different networks using IP addresses.
- **Repeater** — A Layer 1 device that boosts a weak signal so it travels farther.

---

## 19. Homework

- **Practice:** Draw your home network and label every device with its type and OSI layer.
- **Spaced review:** Redo the Lesson 05-05 flashcards for following one packet (MAC hop-to-hop, IP end-to-end).
- **Preview:** How does a switch *know* which port a device is on? The next lesson shows exactly how a switch **learns MAC addresses**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell a hub, switch, and router apart now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what a hub, switch, and router each do.
- [ ] I can map each device to its OSI layer.
- [ ] I know switch = MAC (L2) and router = IP (L3).
- [ ] I know my home box is a router, switch, and AP in one.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: how a switch learns MAC addresses.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M07-L01** — "Hubs, Switches, Routers — What's the Difference?" · Module 07 · Unit 4_
