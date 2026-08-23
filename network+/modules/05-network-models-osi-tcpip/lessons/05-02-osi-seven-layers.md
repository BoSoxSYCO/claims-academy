---
id: NA-M05-L02
module: 05
lesson: 02
title: "The OSI 7 Layers — A Floor-by-Floor Tour"
unit: 2
objective_ids: ["1.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M05-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 05 · Lesson 02] The OSI 7 Layers — A Floor-by-Floor Tour

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~30 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 05-01 (why we need a model).

Last lesson you learned *why* networks use a layered model. Now we tour the most famous one: the **OSI model** and its **7 layers**. Picture a 7-floor building where each floor does one job. We'll ride from the top floor (your app) down to the ground floor (the wire), then back up.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the **7 OSI layers** in order.
- [ ] Say the **one job** of each layer in plain words.
- [ ] Use a **mnemonic** to remember the order.
- [ ] Point to the layer where a common thing (a cable, an IP address, a browser) lives.

---

## 2. Introduction — why this matters

Think of a tall **office building with 7 floors**. Mail arrives at the **ground floor**, then rides the elevator **up** to the right office. To send mail out, an office sends it **down** to the ground floor, where it leaves the building. Each floor has one job, and the elevator passes the package between them.

The **OSI model** is that building for a network. Data from your app starts at the **top floor** and rides **down** to the ground floor to leave your computer as signals on a wire or radio wave. On the other computer, the signals arrive at the **ground floor** and ride **up** to its app. Seven floors, seven jobs.

Why memorize the floors? Because the whole networking world — and the whole exam — is organized by these layers. When a tech says "that's a Layer 3 problem," they mean the floor that handles addresses. Knowing the floors lets you place any device, address, or fault exactly where it belongs.

🎯 **Exam tip:** You must know all 7 layers **in order**, their numbers, and one job each. Expect questions like "which layer does a router work at?" A mnemonic makes this easy.

---

## 3. Simple explanation

The OSI model has **7 layers**, numbered from the bottom up. **Layer 1 is the bottom** (the wire); **Layer 7 is the top** (your app). Data rides **down** to be sent and **up** to be received. Here is each floor, from the ground up.

### Layer 1 — Physical (the ground floor)
The **Physical layer** is the actual wire, fiber, or radio wave, and the raw 1s and 0s (bits) traveling on it. Cables, connectors, and signals live here. *Job: move raw bits across the physical link.*

### Layer 2 — Data Link
The **Data Link layer** moves data between two devices on the **same local network**. It uses **MAC addresses** (the hardware IDs from Module 03) and is where **switches** work. *Job: local delivery on one network.*

### Layer 3 — Network
The **Network layer** moves data **between different networks**. It uses **IP addresses** and is where **routers** work. This layer picks the path from your network to a faraway one. *Job: addressing and routing between networks.*

### Layer 4 — Transport
The **Transport layer** breaks big data into pieces, makes sure they arrive, and puts them back in order. It uses **ports** to send each piece to the right app. *Job: reliable, ordered delivery to the right program.*

### Layer 5 — Session
The **Session layer** starts, keeps, and ends the **conversation** between two apps. *Job: open, manage, and close a connection.*

### Layer 6 — Presentation
The **Presentation layer** translates data into a form the app can use — including **encryption** (scrambling for safety) and compression. *Job: format, encrypt, and translate the data.*

### Layer 7 — Application (the top floor)
The **Application layer** is the part you actually touch: your **browser**, email, or other apps, and the network rules they use (like the web's rules). *Job: give the user and their apps access to the network.*

### Remember the order with a mnemonic
From **bottom to top** (Layer 1 → 7):

> **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way
> Physical · Data Link · Network · Transport · Session · Presentation · Application

> **The big idea:** OSI has 7 stacked layers. **Bottom (1) = Physical wire**, **top (7) = your app**. Data goes **down** to send and **up** to receive, and each layer has one job.

💡 **Tip:** The bottom three layers (1–3) move data *around*; the top four (4–7) prepare and use the data. Layer 1 = wire, Layer 2 = switch/MAC, Layer 3 = router/IP.

---

## 4. Real-world analogy

> **"OSI is a 7-floor building: mail rides down to leave and up to be delivered, one job per floor."**

| Floor | Layer | One-job in plain words |
|-------|-------|------------------------|
| 7 (top) | **Application** | The office worker who reads/writes the message (your app) |
| 6 | **Presentation** | Translates and seals the message (format, encrypt) |
| 5 | **Session** | Starts and ends the phone call between offices |
| 4 | **Transport** | Splits a big parcel into boxes, numbers them, checks all arrive |
| 3 | **Network** | Writes the **city address** and picks the route (IP, router) |
| 2 | **Data Link** | Hands it to the right **door on this street** (MAC, switch) |
| 1 (ground) | **Physical** | The road and truck that actually carry it (wire, signal) |

To **send**, the message rides **down** from floor 7 to the ground and out. To **receive**, it comes in the ground floor and rides **up** to floor 7.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Physical layer** | | Layer 1 — the wire, fiber, or radio and the raw bits on it. |
| **Data Link layer** | | Layer 2 — local delivery on one network, using MAC addresses (switches). |
| **Network layer** | | Layer 3 — addressing and routing between networks, using IP (routers). |
| **Transport layer** | | Layer 4 — splits data, checks it arrives, uses ports. |
| **Session layer** | | Layer 5 — starts, keeps, and ends a connection between apps. |
| **Presentation layer** | | Layer 6 — formats, encrypts, and translates the data. |
| **Application layer** | | Layer 7 — the apps you use and their network rules. |

---

## 6. ASCII diagram

```
   THE OSI MODEL — 7 FLOORS (ride DOWN to send, UP to receive)

   L7  Application   |  your browser, email        ┐
   L6  Presentation  |  format, encrypt            │  top 4:
   L5  Session       |  start/keep/end the talk    │  prepare & use
   L4  Transport     |  split, check, ports        ┘  the data
   -------------------------------------------------
   L3  Network       |  IP address, routers        ┐
   L2  Data Link     |  MAC address, switches      │  bottom 3:
   L1  Physical      |  cable / Wi-Fi, raw bits     ┘  move the data
                       ↓ send        ↑ receive

   Mnemonic (1→7): Please Do Not Throw Sausage Pizza Away
```

_Layer 1 is the wire at the bottom; Layer 7 is your app at the top._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-05-02-osi-stack-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a vertical stack of 7 labeled floors, Layer 7 (Application) at the top down to Layer 1 (Physical) at the bottom, each with its number, name, one-job phrase, and a tiny example (browser, encrypt, IP/router, MAC/switch, cable).
> **Key elements & labels:** each floor numbered and named; a down arrow "to send" and an up arrow "to receive"; the mnemonic printed beside the stack.
> **Color meaning:** each floor a different shade **and** clearly numbered and named in text, so the order reads in black and white.
> **Flow direction:** top-to-bottom stack; send goes down, receive goes up.
> **Alt text (required):** "A vertical stack of the seven OSI layers, numbered from Layer 7 Application at the top down to Layer 1 Physical at the bottom, each labeled with its one job; a down arrow marks 'to send' and an up arrow marks 'to receive,' with the mnemonic Please Do Not Throw Sausage Pizza Away."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-05-02-cable-physical-01.jpg`
> An Ethernet cable plugged into a port. Alt text: "An Ethernet cable in a port — the Physical layer, Layer 1."
>
> **Photo 2** — `img-05-02-switch-l2-01.jpg`
> A network switch. Alt text: "A network switch — a Data Link layer (Layer 2) device."
>
> **Photo 3** — `img-05-02-browser-l7-01.jpg`
> A web browser open on a laptop. Alt text: "A web browser — the Application layer, Layer 7, the part you use."

---

## 9. Hands-on lab

**Goal:** build and memorize your own OSI ladder, and place real things on the right layer.
**Why:** writing the ladder yourself, with examples, locks the order into memory.

**You will need**
- Pen and paper (Equipment tier **E1**).
- Estimated time: 12 min.

⚠️ **Before you start (safety):** This is a writing-and-memory task. Nothing on your computer changes.

### 9a. Step-by-step instructions

1. On paper, draw **7 stacked boxes**. Number them **1 at the bottom** to **7 at the top**.
2. Write the layer name in each box, using the mnemonic: **P**lease (1 Physical), **D**o (2 Data Link), **N**ot (3 Network), **T**hrow (4 Transport), **S**ausage (5 Session), **P**izza (6 Presentation), **A**way (7 Application).
3. Beside each box, write its **one job** in your own words.
4. Now place these five real things on the correct layer: an **Ethernet cable**, a **switch**, an **IP address**, a **web browser**, **encryption**.
5. Draw a **down arrow** on one side labeled "send" and an **up arrow** on the other labeled "receive."

### 9b. Expected results

- A 7-box ladder, numbered 1 (bottom) to 7 (top), with names and jobs.
- Cable on Layer 1, switch on Layer 2, IP on Layer 3, encryption on Layer 6, browser on Layer 7.
- ✅ **You did it if:** you can recite the 7 layers in order using the mnemonic, without looking.

### 9c. Verify it worked

1. Cover your ladder and say all 7 layers, bottom to top, then top to bottom.
2. Ask: "Which layer does a **router** work at?" (Layer 3.) "A **switch**?" (Layer 2.)

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the ladder; you'll reuse it for TCP/IP and encapsulation.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Flipping the order (7 at bottom) | You misnumber layers | Layer 1 = Physical (bottom); Layer 7 = Application (top) |
| Mixing Layer 2 and Layer 3 | You confuse switch/router | Layer 2 = MAC/switch (local); Layer 3 = IP/router (between networks) |
| Thinking Layer 7 is the whole app | You over-claim | Layer 7 is the network access for apps, not the app's every feature |
| Forgetting the mnemonic | The order slips | "Please Do Not Throw Sausage Pizza Away" (1→7) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't recall the order | Not enough practice | Say the mnemonic; write the ladder from memory daily |
| Unsure where a device fits | Layer roles unclear | Cable = L1, switch = L2, router = L3, browser = L7 |
| Layers 5–6 feel fuzzy | They're less visible | Session = start/stop the talk; Presentation = format/encrypt |

---

## 12. Lesson summary

- OSI has **7 layers**: **1 Physical, 2 Data Link, 3 Network, 4 Transport, 5 Session, 6 Presentation, 7 Application**.
- **Layer 1 is the wire; Layer 7 is your app.** Data rides **down** to send, **up** to receive.
- Key homes: **cable = L1**, **switch/MAC = L2**, **router/IP = L3**, **ports = L4**, **encryption = L6**, **browser = L7**.
- Remember with **"Please Do Not Throw Sausage Pizza Away."**

**One-sentence recap:** The OSI model stacks seven layers from the physical wire (Layer 1) up to your app (Layer 7), each doing one job, with data riding down to send and up to receive.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-05-02-fill-in-the-blank.md`
2. **Matching** — `wb-05-02-matching.md`
3. **Label the diagram** — `wb-05-02-label-the-diagram.md` (the 7-floor stack)
4. **Short answer** — `wb-05-02-short-answer.md`
5. **Hands-on observation** — `wb-05-02-hands-on-observation.md` (build your OSI ladder)
6. **Vocabulary review** — `wb-05-02-vocabulary-review.md`
7. **Reflection** — `wb-05-02-reflection.md`

**Quick written warm-up (do this now):** What is Layer 1? What layer does a router work at?

Layer 1: ____________  Router layer: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-05-02-knowledge-check.md`.)

1. Which layer is **Layer 1**? *(Objective: order)*
   - A) Application
   - B) Network
   - C) Physical
   - D) Transport

2. Which layer is **Layer 7**? *(Objective: order)*
   - A) Physical
   - B) Application
   - C) Data Link
   - D) Session

3. A **router** works mainly at which layer? *(Objective: devices)*
   - A) Layer 1 (Physical)
   - B) Layer 2 (Data Link)
   - C) Layer 3 (Network)
   - D) Layer 7 (Application)

4. A **switch** and **MAC addresses** live at which layer? *(Objective: devices)*
   - A) Layer 2 (Data Link)
   - B) Layer 3 (Network)
   - C) Layer 4 (Transport)
   - D) Layer 6 (Presentation)

5. Which layer handles **encryption and formatting**? *(Objective: layer jobs)*
   - A) Session
   - B) Presentation
   - C) Physical
   - D) Network

6. **True or false —** Data rides *down* the stack to be sent. Explain in one sentence. *(Objective: direction)*

7. The mnemonic "Please Do Not Throw Sausage Pizza Away" gives the layers in which order? *(Objective: mnemonic)*
   - A) Top to bottom (7 to 1)
   - B) Bottom to top (1 to 7)
   - C) In a random order
   - D) Only the top four

8. **Matching —** write the letter next to each layer. *(Objective: layer jobs)*
   - ___ Physical &nbsp;&nbsp; ___ Network &nbsp;&nbsp; ___ Transport
   - A) splits data and checks it arrives (ports) &nbsp; B) the wire and raw bits &nbsp; C) IP addresses and routing

9. Fill in the blank: The Transport layer is Layer ____________. *(Objective: numbers)*

10. **Scenario —** A tech says "the cable is unplugged, so nothing works." Which OSI layer is the problem, and why does a problem there stop everything above it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-05-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-05-02-osi-layers.md`. In brief:

- **Objective in one line:** learners name the 7 OSI layers in order and give one job each.
- **Common misconceptions:** order flipped; L2 vs. L3 (switch vs. router). Correct both directly.
- **Pacing:** ~30 min — the biggest lesson so far; the build-the-ladder lab is essential.
- **How CompTIA tests it:** layer order/number and "which layer does X work at."
- **Support idea:** drill the mnemonic; write the ladder from memory every day.
- **Extension idea:** add the data name per layer (bits, frames, packets, segments) as a bridge to 05-04.

---

## 17. Cheat sheet

> **Quick reference — OSI 7 layers (bottom → top)**
>
> - **L1 Physical** — cable / Wi-Fi, raw bits.
> - **L2 Data Link** — MAC, switches (local delivery).
> - **L3 Network** — IP, routers (between networks).
> - **L4 Transport** — split, check, ports.
> - **L5 Session** — start/keep/end the talk.
> - **L6 Presentation** — format, encrypt.
> - **L7 Application** — your apps.
> - **Mnemonic (1→7):** Please Do Not Throw Sausage Pizza Away. Down = send, up = receive.
>
> _(Full version: `resources/cheat-sheets/network-models-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Physical layer** — Layer 1 — the wire, fiber, or radio and the raw bits on it.
- **Data Link layer** — Layer 2 — local delivery on one network, using MAC addresses (switches).
- **Network layer** — Layer 3 — addressing and routing between networks, using IP (routers).
- **Transport layer** — Layer 4 — splits data, checks it arrives, uses ports.
- **Session layer** — Layer 5 — starts, keeps, and ends a connection between apps.
- **Presentation layer** — Layer 6 — formats, encrypts, and translates the data.
- **Application layer** — Layer 7 — the apps you use and their network rules.

---

## 19. Homework

- **Practice:** Write the 7 layers from memory, top to bottom and bottom to top, three times.
- **Spaced review:** Redo the Lesson 05-01 flashcards for why a model exists.
- **Preview:** The real internet uses a shorter model. Next, we meet the **TCP/IP model** (4 layers) and map it onto these 7.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I recite the 7 layers in order now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name all 7 OSI layers in order.
- [ ] I can give one job for each layer.
- [ ] I can use the mnemonic without looking.
- [ ] I know cable = L1, switch = L2, router = L3, browser = L7.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: the TCP/IP model.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M05-L02** — "The OSI 7 Layers — A Floor-by-Floor Tour" · Module 05 · Unit 2_
