---
id: NA-M07-L02
module: 07
lesson: 02
title: "MAC Addresses and How a Switch Learns Them"
unit: 4
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M07-L01", "NA-M03-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 07 · Lesson 02] MAC Addresses and How a Switch Learns Them

> **Unit:** Unit 4 — Devices & Switching · **Time:** ~28 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 07-01 (hubs, switches, routers) and Lesson 03-04 (MAC addresses).

Last lesson you learned a switch sends a frame to just the **right port** using the **MAC address**. But how does the switch *know* which device is on which port? It isn't magic — the switch **learns** by watching traffic. This lesson shows you exactly how, step by step.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Recall what a **MAC address** is (a device's hardware ID).
- [ ] Explain the switch's **MAC address table** (MAC → port).
- [ ] Describe how a switch **learns** from the **source** MAC.
- [ ] Explain **forward** vs. **flood** using the **destination** MAC.

---

## 2. Introduction — why this matters

Picture a new **receptionist** at a big office. On day one, they don't know where anyone sits. But every time someone hands them a memo, they glance at the **sender's name and desk** and jot it down: "Ana — desk 3." Soon they have a list of who sits where, just by paying attention.

A switch does the same. When a frame arrives, the switch looks at the **sender's MAC address** and writes down "this device is on this port." It builds a list called the **MAC address table**. Then, to deliver a frame, it checks that list: if it knows the port, it sends the frame **only there**; if not, it sends it **everywhere** until it learns.

Why learn this? Because it explains the switch's whole job — and it's a favorite exam topic. Understanding learning and forwarding also helps you troubleshoot: a full or wrong table is a real cause of odd network behavior.

🎯 **Exam tip:** Know the switch's two moves: **learn** from the **source** MAC (build the table) and **forward/flood** based on the **destination** MAC.

🔧 **Lab link:** On the Dell PowerConnect 3424, you'll later view the real MAC address table and watch it fill in as devices talk.

---

## 3. Simple explanation

Let's review the MAC address, meet the table, then walk the learning and forwarding steps.

### Quick review — the MAC address
A **MAC address** is a device's **hardware ID** — a 48-bit number written as **6 hex bytes** (like `A4:83:E7:1B:9C:22`), burned into its network card (Module 03-04). Every network card has a unique one. Switches use it to tell devices apart.

### The MAC address table
The **MAC address table** is the switch's memory: a simple list matching each **MAC address** to the **port** it's on. (Some books call it the CAM table.) The switch fills this in by itself.

| MAC address | Port |
|-------------|------|
| A4:83:E7:1B:9C:22 | 1 |
| 00:1A:2B:3C:4D:5E | 3 |

### How the switch learns (from the SOURCE MAC)
Every frame carries a **source** MAC (who sent it) and a **destination** MAC (who it's for). When a frame arrives on a port:

1. The switch reads the **source MAC** and records **"this MAC is on this port"** in the table.
2. That's it — the switch just learned where the sender lives. It does this on **every** frame, so the table stays current.

### How the switch forwards (from the DESTINATION MAC)
To deliver the frame, the switch looks up the **destination MAC** in its table:

- **Known** (in the table): the switch **forwards** the frame out **only that one port**. Quiet and efficient.
- **Unknown** (not in the table yet): the switch **floods** the frame out **all ports except** the one it came in on. Whoever it's for will reply — and that reply teaches the switch the missing port.
- **Broadcast** (destination `FF:FF:FF:FF:FF:FF`): a message meant for everyone. The switch **floods** it to all ports on purpose.

So the very first frame to a new device may be flooded, but after one reply the switch knows the port and forwards directly from then on.

### Aging — keeping the table fresh
Entries don't last forever. If a switch hasn't heard from a MAC for a while (the **aging time**, often ~5 minutes), it **removes** that entry. This handles devices that move or unplug, so the table doesn't fill with stale data.

> **The big idea:** A switch **learns** by reading the **source MAC** of each frame and saving **MAC → port** in its **MAC address table**. To deliver, it reads the **destination MAC**: **known → forward** to one port; **unknown or broadcast → flood** to all others. Old entries **age out**.

💡 **Tip:** Two words hold the whole lesson: **source** to **learn**, **destination** to **forward**.

⚠️ **Watch out:** A switch floods *unknown* and *broadcast* frames — that's normal, not a fault. It is **not** a hub, though: it still forwards **known** traffic to just one port.

---

## 4. Real-world analogy

> **"A switch is a receptionist who learns desks from senders and delivers by looking up the recipient."**

| Office reception | Switch |
|------------------|--------|
| The list of who sits where | The **MAC address table** |
| Noting the **sender's** desk on each memo | **Learning** from the **source** MAC |
| Delivering to a known desk | **Forwarding** to one port |
| Walking a memo to every desk (unknown person) | **Flooding** to all ports |
| An "all staff" memo | A **broadcast** (flood on purpose) |
| Erasing someone who left long ago | **Aging** out old entries |

The receptionist starts clueless and gets smarter with every memo. So does a switch.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **MAC address table** | | The switch's list matching each MAC address to a port. |
| **Forward** | FOR-word | To send a frame out the one port where the destination lives. |
| **Flood** | flud | To send a frame out all ports except the one it came in on. |
| **Broadcast** | BROD-kast | A frame addressed to every device (`FF:FF:FF:FF:FF:FF`). |
| **Aging time** | | How long a switch keeps a MAC entry before removing it. |
| **Source / destination** | | Who a frame is *from* (source) and *for* (destination). |

---

## 6. ASCII diagram

```
   HOW A SWITCH LEARNS AND FORWARDS

   1) LEARN (read SOURCE MAC):
      Frame from AA on port 1  →  table: [ AA → port 1 ]

   2) FORWARD or FLOOD (read DESTINATION MAC):
      dest = BB, and BB is in table (port 3)  →  FORWARD out port 3 only
      dest = CC, NOT in table                 →  FLOOD out all ports but the source
      dest = FF:FF:FF:FF:FF:FF (broadcast)     →  FLOOD to everyone

   MAC ADDRESS TABLE          (entries AGE OUT after ~5 min of silence)
     MAC     Port
     AA       1
     BB       3
```

_Source MAC → learn (fill the table). Destination MAC → forward (known) or flood (unknown/broadcast)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-07-02-switch-learning-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a switch with 4 ports and PCs (AA, BB, CC); step 1 — a frame from AA arriving on port 1 adds "AA → 1" to a table; step 2 — a frame to BB (known) forwarded out one port, and a frame to CC (unknown) flooded out all other ports.
> **Key elements & labels:** the MAC address table filling in; forward = single arrow; flood = arrows to all other ports; a note on aging.
> **Color meaning:** forward vs. flood shown by **one arrow vs. many** and text labels, not color alone; the table is text.
> **Flow direction:** learn step then forward/flood step.
> **Alt text (required):** "A switch with four ports learning MAC addresses: a frame from device AA on port 1 adds the entry AA to port 1 in the MAC address table; then a frame addressed to a known device BB is forwarded out only its port, while a frame to an unknown device CC is flooded out all other ports; a note says entries age out after inactivity."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-07-02-switch-leds-01.jpg`
> A switch with port activity LEDs blinking. Alt text: "A switch with per-port activity lights blinking as frames arrive."
>
> **Photo 2** — `img-07-02-mac-table-cli-01.jpg`
> A switch CLI showing a MAC address table. Alt text: "A switch command-line screen listing MAC addresses and their ports."
>
> **Photo 3** — `img-07-02-getmac-01.jpg`
> A Windows `getmac` result. Alt text: "A Windows command output showing the computer's own MAC address."

---

## 9. Hands-on lab

**Goal:** find your own MAC address and reason through how a switch would learn it.
**Why:** seeing your real MAC makes the learning process concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**). Pen and paper.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** `getmac` and `ipconfig` only read information. Nothing changes.

### 9a. Step-by-step instructions

1. Open **Command Prompt** (search "cmd," press Enter).
2. Type this exact command and press Enter:
   ```
   getmac
   ```
3. Read the **Physical Address** — that's your network card's **MAC address** (6 hex bytes). Write it down.
4. Imagine you plug into **port 5** of a switch and send a frame. Write the table entry the switch would create: `your MAC → port 5`.
5. A frame now arrives for a device the switch has **never seen**. Write what the switch does (flood to all other ports).
6. That device replies. Write what the switch learns from the reply (the device's MAC → its port).

### 9b. Expected results

- You found your real MAC address.
- You wrote the correct table entry and the flood/learn behavior.
- ✅ **You did it if:** you can say "the switch learns my MAC from my source address and forwards to me once it knows my port."

### 9c. Verify it worked

1. Point to your MAC and say which field the switch reads to **learn** (source).
2. Say what the switch does with a frame for an **unknown** destination (flood).

### 9d. Reset / roll back

Nothing to undo — `getmac` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking the switch learns from the destination | You reverse the process | It **learns** from the **source** MAC |
| Thinking flooding means the switch is broken | You misread normal behavior | Unknown/broadcast frames are flooded on purpose |
| Believing entries last forever | You forget aging | Idle entries age out (often ~5 min) |
| Confusing a switch with a hub | You expect flooding always | A switch forwards **known** traffic to one port |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| A device isn't reachable at first | Switch hasn't learned it yet | The first frame floods; after a reply it forwards normally |
| Lots of flooding on the network | Many unknown/broadcast frames | Check for a device flooding broadcasts; review the MAC table |
| Old device still in the table | Aging not yet triggered | Wait for the aging time or clear the table (on a managed switch) |

---

## 12. Lesson summary

- A **MAC address** is a device's hardware ID (6 hex bytes); the switch uses it to tell devices apart.
- The **MAC address table** maps each **MAC → port**.
- The switch **learns** from each frame's **source** MAC.
- It **forwards** to one port when the **destination** is known, and **floods** all other ports when it's **unknown** or a **broadcast**. Idle entries **age out**.

**One-sentence recap:** A switch learns where devices are by reading the source MAC of every frame into its MAC address table, then forwards a frame to the one right port if the destination is known or floods all other ports if it isn't.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-07-02-fill-in-the-blank.md`
2. **Matching** — `wb-07-02-matching.md`
3. **Label the diagram** — `wb-07-02-label-the-diagram.md` (learn & forward)
4. **Short answer** — `wb-07-02-short-answer.md`
5. **Hands-on observation** — `wb-07-02-hands-on-observation.md` (find your MAC)
6. **Vocabulary review** — `wb-07-02-vocabulary-review.md`
7. **Reflection** — `wb-07-02-reflection.md`

**Quick written warm-up (do this now):** Which MAC does a switch read to *learn*? What does it do with a frame for an *unknown* device?

Learns from: ____________  Unknown → ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-07-02-knowledge-check.md`.)

1. What is the **MAC address table**? *(Objective: table)*
   - A) A list of IP addresses
   - B) The switch's list matching each MAC to a port
   - C) A speed chart
   - D) A cable map

2. Which MAC does a switch read to **learn** where a device is? *(Objective: learn)*
   - A) The destination MAC
   - B) The source MAC
   - C) The router's MAC
   - D) No MAC

3. When the destination MAC is **known**, the switch… *(Objective: forward)*
   - A) floods all ports
   - B) forwards out only that one port
   - C) drops the frame
   - D) turns off

4. When the destination MAC is **unknown**, the switch… *(Objective: flood)*
   - A) forwards to one port
   - B) floods out all ports except the source
   - C) deletes its table
   - D) becomes a router

5. A **broadcast** frame is addressed to… *(Objective: broadcast)*
   - A) one device
   - B) every device (FF:FF:FF:FF:FF:FF)
   - C) the internet only
   - D) the switch itself

6. **True or false —** A switch learns device locations from the destination MAC. Explain in one sentence. *(Objective: learn)*

7. What happens to a MAC entry the switch hasn't heard from in a while? *(Objective: aging)*
   - A) It is forwarded
   - B) It ages out (is removed)
   - C) It becomes an IP
   - D) It floods

8. **Matching —** write the letter next to each action. *(Objective: vocabulary)*
   - ___ Forward &nbsp;&nbsp; ___ Flood &nbsp;&nbsp; ___ Learn
   - A) send out all ports but the source &nbsp; B) record source MAC → port &nbsp; C) send out the one right port

9. Fill in the blank: A switch reads the ____________ MAC to learn, and the ____________ MAC to forward. *(Objective: source/dest)*

10. **Scenario —** A switch gets a frame for a device it has never seen. What does it do, and how does it learn that device's port afterward? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-07-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-07-02-learning.md`. In brief:

- **Objective in one line:** learners explain switch learning (source MAC → table) and forwarding (destination MAC → forward/flood).
- **Common misconceptions:** learns from destination; flooding = broken; entries never expire. Correct all three.
- **Pacing:** ~28 min. The find-your-MAC + reason-it-out lab is the payoff.
- **How CompTIA tests it:** source vs. destination roles; forward vs. flood; broadcast; aging.
- **Support idea:** the receptionist analogy; note the sender's desk on every memo.
- **Extension idea:** MAC flooding attacks and port security for fast learners (preview of security).

---

## 17. Cheat sheet

> **Quick reference — How a switch learns**
>
> - **MAC address table** = MAC → port list the switch builds itself.
> - **Learn:** read the **source** MAC of each frame → record MAC → port.
> - **Forward:** destination **known** → send out that **one** port.
> - **Flood:** destination **unknown** or **broadcast** (FF:FF:FF:FF:FF:FF) → send out **all** ports except the source.
> - **Aging:** idle entries are removed (often ~5 min).
> - Memory hook: **source to learn, destination to forward.**
>
> _(Full version: `resources/cheat-sheets/devices-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **MAC address table** — The switch's list matching each MAC address to a port.
- **Forward** — To send a frame out the one port where the destination lives.
- **Flood** — To send a frame out all ports except the one it came in on.
- **Broadcast** — A frame addressed to every device (`FF:FF:FF:FF:FF:FF`).
- **Aging time** — How long a switch keeps a MAC entry before removing it.

---

## 19. Homework

- **Practice:** Write the 3-row table a switch would build if PCs with MACs AA (port 1), BB (port 2), and CC (port 3) each send one frame.
- **Spaced review:** Redo the Lesson 07-01 flashcards for hub/switch/router.
- **Preview:** Broadcasts flood everywhere — but how far? The next lesson explains **broadcast vs. collision domains**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain source-to-learn, destination-to-forward now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can describe the MAC address table (MAC → port).
- [ ] I know a switch learns from the source MAC.
- [ ] I can explain forward (known) vs. flood (unknown/broadcast).
- [ ] I know idle entries age out.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: broadcast vs. collision domains.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M07-L02** — "MAC Addresses and How a Switch Learns Them" · Module 07 · Unit 4_
