---
id: NA-M05-L03
module: 05
lesson: 03
title: "The TCP/IP Model and How It Maps to OSI"
unit: 2
objective_ids: ["1.1"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M05-L01", "NA-M05-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 05 · Lesson 03] The TCP/IP Model and How It Maps to OSI

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 05-01 (why a model) and Lesson 05-02 (the OSI 7 layers).

You now know the OSI model's 7 layers. But the real internet runs on a **shorter** model with just **4 layers**: the **TCP/IP model**. This lesson shows you its four layers and — the key skill — how they line up with the seven you already learned.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the **4 TCP/IP layers** in order.
- [ ] Say the **one job** of each TCP/IP layer.
- [ ] **Map** each TCP/IP layer to the OSI layers it covers.
- [ ] Explain why the real internet uses TCP/IP.

---

## 2. Introduction — why this matters

Imagine you learned a building with **7 floors** (OSI). Now the people who actually run the building use a simpler map that groups those floors into **4 sections**. The building didn't change — the map just merges some floors to keep things quick.

That's the **TCP/IP model**. It describes the *same* networking as OSI, but with fewer, bigger layers — **4 instead of 7**. It is named after its two most important rule-sets: **TCP** and **IP**. And it is the model the real internet is built on.

Why learn both? Because the exam and the working world use **both**. OSI is the detailed teaching map (great for pinpointing a problem). TCP/IP is the practical map the internet actually follows. Being able to slide between them — "OSI Layer 3 is the TCP/IP Internet layer" — is a core skill.

🎯 **Exam tip:** Network+ expects you to know the 4 TCP/IP layers **and** map them onto OSI's 7. The mapping is the most-tested part of this topic.

---

## 3. Simple explanation

The **TCP/IP model** has **4 layers**. Like OSI, the bottom touches the wire and the top touches your app. Here they are, bottom to top.

### Layer 1 (bottom) — Network Access
The **Network Access layer** handles the physical link **and** local delivery on one network — the cable or Wi-Fi and the MAC addresses. It does the job of **OSI Layers 1 and 2 combined**. *(Some books call this the "Link" or "Network Interface" layer.)*

### Layer 2 — Internet
The **Internet layer** moves data **between** networks using **IP addresses**. It is where routers work. It matches **OSI Layer 3 (Network)** exactly. This is the "IP" in TCP/IP.

### Layer 3 — Transport
The **Transport layer** splits data into pieces, checks they arrive, and uses ports — the same job as **OSI Layer 4 (Transport)**. This is the "TCP" in TCP/IP. *(TCP is one common set of rules here; you'll meet it in detail later.)*

### Layer 4 (top) — Application
The **Application layer** is everything your apps need to use the network. It does the job of **OSI Layers 5, 6, and 7 combined** — session, formatting/encryption, and the app itself.

### The mapping (the key skill)
Line the two models up side by side:

| TCP/IP (4 layers) | Covers OSI layers |
|-------------------|-------------------|
| **Application** | 7 Application + 6 Presentation + 5 Session |
| **Transport** | 4 Transport |
| **Internet** | 3 Network |
| **Network Access** | 2 Data Link + 1 Physical |

Notice the **middle two line up one-to-one** (Transport = 4, Internet = 3). The **top and bottom each merge** several OSI layers into one.

### What TCP and IP mean
- **IP** (Internet Protocol) is the rule-set for **addressing and routing** — it lives in the Internet layer.
- **TCP** (Transmission Control Protocol) is a rule-set for **reliable delivery** — it lives in the Transport layer.

The model is named after these two because they carry most of the internet's traffic.

> **The big idea:** The **TCP/IP model** has **4 layers** — Network Access, Internet, Transport, Application — and describes the same networking as OSI. **Transport = OSI 4** and **Internet = OSI 3** line up exactly; the top and bottom TCP/IP layers each **merge** several OSI layers.

💡 **Tip:** Learn the mapping by the middle: **Internet = Layer 3, Transport = Layer 4.** Then remember the top merges OSI 5–7 and the bottom merges OSI 1–2.

---

## 4. Real-world analogy

> **"OSI is a detailed 7-floor map; TCP/IP is the same building drawn as 4 sections."**

| The building | OSI (7 floors) | TCP/IP (4 sections) |
|--------------|----------------|---------------------|
| Top offices (people + paperwork) | Floors 7, 6, 5 | **Application** (one section) |
| Parcel service | Floor 4 | **Transport** |
| City routing desk | Floor 3 | **Internet** |
| Loading dock + local street | Floors 2, 1 | **Network Access** (one section) |

Same building, same jobs — TCP/IP just draws fewer boxes by grouping floors that work closely together.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Network Access layer** | | The bottom TCP/IP layer — the physical link plus local delivery (OSI 1+2). |
| **Internet layer** | | The TCP/IP layer that routes between networks with IP (OSI 3). |
| **IP (Internet Protocol)** | I-P | The rule-set for addressing and routing data between networks. |
| **TCP (Transmission Control Protocol)** | T-C-P | A rule-set for splitting data and making sure it arrives in order. |
| **Map (verb)** | map | To line up one model's layers against another's. |

---

## 6. ASCII diagram

```
   TCP/IP (4)            maps to            OSI (7)

   ┌───────────────┐                    ┌── 7 Application ──┐
   │  Application  │  ================  │   6 Presentation  │
   │               │                    └── 5 Session ──────┘
   ├───────────────┤                    ┌───────────────────┐
   │  Transport    │  ================  │   4 Transport     │  (1-to-1)
   ├───────────────┤                    ├───────────────────┤
   │  Internet     │  ================  │   3 Network       │  (1-to-1)
   ├───────────────┤                    ┌── 2 Data Link ────┐
   │ Network Access│  ================  │   1 Physical      │
   └───────────────┘                    └───────────────────┘

   Middle lines up 1-to-1.  Top & bottom TCP/IP layers each merge OSI layers.
```

_Four TCP/IP layers on the left; the seven OSI layers they cover on the right._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-05-03-tcpip-map-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two stacks side by side — TCP/IP (4 boxes) on the left, OSI (7 boxes) on the right — with bracket lines connecting each TCP/IP box to the OSI layer(s) it covers.
> **Key elements & labels:** each box named and numbered; brackets show Application→(7,6,5), Transport→4, Internet→3, Network Access→(2,1).
> **Color meaning:** matching TCP/IP and OSI regions share a shade **and** are joined by labeled bracket lines, so the mapping reads in black and white.
> **Flow direction:** both stacks top-to-bottom; brackets link across.
> **Alt text (required):** "Two layer stacks side by side. On the left the four TCP/IP layers; on the right the seven OSI layers. Brackets connect TCP/IP Application to OSI layers 7, 6, and 5; Transport to OSI layer 4; Internet to OSI layer 3; and Network Access to OSI layers 2 and 1."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-05-03-router-internet-01.jpg`
> A home router. Alt text: "A home router — it works at the Internet layer (OSI Layer 3), routing between networks."
>
> **Photo 2** — `img-05-03-two-models-poster-01.jpg`
> A side-by-side OSI/TCP-IP poster. Alt text: "A poster showing the four TCP/IP layers mapped to the seven OSI layers."
>
> **Photo 3** — `img-05-03-cable-and-wifi-01.jpg`
> A cable and a Wi-Fi symbol together. Alt text: "A cable and a Wi-Fi symbol — both part of the TCP/IP Network Access layer."

---

## 9. Hands-on lab

**Goal:** build the two stacks side by side and draw the mapping yourself.
**Why:** drawing the links between models is exactly what the exam asks — doing it once makes it stick.

**You will need**
- Pen and paper (Equipment tier **E1**). Your OSI ladder from Lesson 05-02 helps.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** This is a drawing-and-matching task. Nothing on your computer changes.

### 9a. Step-by-step instructions

1. On the **right** side of your paper, write the **7 OSI layers** (use the mnemonic), Layer 7 at the top down to Layer 1.
2. On the **left** side, write the **4 TCP/IP layers**, top to bottom: Application, Transport, Internet, Network Access.
3. Draw a **line** from **Internet** to OSI **Layer 3**, and from **Transport** to OSI **Layer 4**. (These match one-to-one.)
4. Draw a **bracket** from **Application** to OSI Layers **7, 6, and 5**.
5. Draw a **bracket** from **Network Access** to OSI Layers **2 and 1**.
6. Write "IP" next to the Internet layer and "TCP" next to the Transport layer.

### 9b. Expected results

- Two stacks with lines/brackets showing the mapping.
- Internet↔3 and Transport↔4 are single lines; Application and Network Access are brackets covering several OSI layers.
- ✅ **You did it if:** you can say "TCP/IP Internet is OSI Layer 3" and "Network Access is OSI Layers 1 and 2."

### 9c. Verify it worked

1. Cover the OSI side. From TCP/IP alone, say which OSI layers each TCP/IP layer covers.
2. Ask: "Which TCP/IP layer holds IP? Which holds TCP?" (Internet; Transport.)

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the mapping; you'll use it in the encapsulation lesson.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking TCP/IP replaces OSI | You treat them as rivals | They describe the same networking; TCP/IP just has fewer layers |
| Mismatching the middle | You misplace IP or TCP | Internet = OSI 3 (IP); Transport = OSI 4 (TCP) |
| Forgetting the merges | You expect 7 TCP/IP layers | Application merges OSI 5–7; Network Access merges OSI 1–2 |
| Mixing up TCP and IP | You swap their jobs | IP = addressing/routing (Internet); TCP = reliable delivery (Transport) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't recall the 4 layers | New model | Top-down: Application, Transport, Internet, Network Access |
| Mapping feels random | Missed the anchor | Anchor on the middle: Internet = 3, Transport = 4 |
| Unsure where the cable fits | Bottom merge unclear | Cable/Wi-Fi + MAC = Network Access (OSI 1+2) |

---

## 12. Lesson summary

- The **TCP/IP model** has **4 layers**: **Network Access, Internet, Transport, Application** (bottom to top).
- **Mapping:** Application = OSI 7+6+5 · Transport = OSI 4 · Internet = OSI 3 · Network Access = OSI 2+1.
- The **middle two match one-to-one**; the **top and bottom each merge** OSI layers.
- **IP** lives in the Internet layer; **TCP** lives in the Transport layer. The real internet runs on TCP/IP.

**One-sentence recap:** The TCP/IP model describes the same networking as OSI using four layers — Network Access, Internet, Transport, and Application — where Internet maps to OSI 3 and Transport to OSI 4, while the top and bottom layers each combine several OSI layers.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-05-03-fill-in-the-blank.md`
2. **Matching** — `wb-05-03-matching.md`
3. **Label the diagram** — `wb-05-03-label-the-diagram.md` (the two-model map)
4. **Short answer** — `wb-05-03-short-answer.md`
5. **Hands-on observation** — `wb-05-03-hands-on-observation.md` (draw the mapping)
6. **Vocabulary review** — `wb-05-03-vocabulary-review.md`
7. **Reflection** — `wb-05-03-reflection.md`

**Quick written warm-up (do this now):** How many layers does TCP/IP have? Which OSI layer does the TCP/IP Internet layer match?

TCP/IP layers: ____________  Internet = OSI Layer ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-05-03-knowledge-check.md`.)

1. How many layers does the **TCP/IP** model have? *(Objective: model)*
   - A) 3
   - B) 4
   - C) 5
   - D) 7

2. Which is the **bottom** TCP/IP layer? *(Objective: order)*
   - A) Application
   - B) Transport
   - C) Internet
   - D) Network Access

3. The TCP/IP **Internet** layer maps to which OSI layer? *(Objective: mapping)*
   - A) OSI Layer 1
   - B) OSI Layer 3
   - C) OSI Layer 4
   - D) OSI Layer 7

4. The TCP/IP **Transport** layer maps to which OSI layer? *(Objective: mapping)*
   - A) OSI Layer 2
   - B) OSI Layer 3
   - C) OSI Layer 4
   - D) OSI Layer 6

5. The TCP/IP **Application** layer covers which OSI layers? *(Objective: mapping)*
   - A) 1 and 2
   - B) 3 only
   - C) 4 and 5
   - D) 5, 6, and 7

6. **True or false —** TCP/IP replaced OSI, so OSI is no longer used. Explain in one sentence. *(Objective: purpose)*

7. Which TCP/IP layer holds **IP** (addressing and routing)? *(Objective: TCP vs IP)*
   - A) Network Access
   - B) Internet
   - C) Transport
   - D) Application

8. **Matching —** write the letter next to each TCP/IP layer. *(Objective: mapping)*
   - ___ Network Access &nbsp;&nbsp; ___ Internet &nbsp;&nbsp; ___ Application
   - A) OSI Layer 3 &nbsp; B) OSI Layers 1 and 2 &nbsp; C) OSI Layers 5, 6, and 7

9. Fill in the blank: The cable, Wi-Fi, and MAC addresses all belong to the TCP/IP ____________ layer. *(Objective: bottom layer)*

10. **Scenario —** A tech says "that's a Layer 3 issue." Using the mapping, which TCP/IP layer are they talking about, and what kind of problem is it likely to be? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-05-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-05-03-tcp-ip.md`. In brief:

- **Objective in one line:** learners name the 4 TCP/IP layers and map them to OSI's 7.
- **Common misconceptions:** TCP/IP "replaced" OSI; swapping TCP and IP; forgetting the merges. Correct all three.
- **Pacing:** ~25 min. The draw-the-mapping lab is the payoff.
- **How CompTIA tests it:** the mapping (Internet=3, Transport=4) and "which layer holds IP/TCP."
- **Support idea:** anchor on the middle two (3 and 4) first, then the merges.
- **Extension idea:** mention the 5-layer hybrid model some texts use, for fast learners.

---

## 17. Cheat sheet

> **Quick reference — TCP/IP ↔ OSI**
>
> - **TCP/IP (4):** Network Access · Internet · Transport · Application (bottom → top).
> - **Map:** Application = OSI 7+6+5 · Transport = OSI 4 · Internet = OSI 3 · Network Access = OSI 2+1.
> - **Anchor:** Internet = Layer 3 (IP) · Transport = Layer 4 (TCP).
> - Same networking as OSI, fewer layers — the model the internet runs on.
>
> _(Full version: `resources/cheat-sheets/network-models-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Network Access layer** — The bottom TCP/IP layer — the physical link plus local delivery (OSI 1+2).
- **Internet layer** — The TCP/IP layer that routes between networks with IP (OSI 3).
- **IP (Internet Protocol)** — The rule-set for addressing and routing data between networks.
- **TCP (Transmission Control Protocol)** — A rule-set for splitting data and making sure it arrives in order.
- **Map (verb)** — To line up one model's layers against another's.

---

## 19. Homework

- **Practice:** Redraw the TCP/IP ↔ OSI mapping from memory, then check it against this lesson.
- **Spaced review:** Redo the Lesson 05-02 flashcards for the 7 OSI layers.
- **Preview:** Now that you know the layers, we'll watch data get **wrapped** at each layer on the way down and **unwrapped** on the way up — that's encapsulation.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I map TCP/IP layers to OSI layers now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the 4 TCP/IP layers in order.
- [ ] I can map each one to the OSI layer(s) it covers.
- [ ] I know Internet = OSI 3 and Transport = OSI 4.
- [ ] I know IP is in the Internet layer and TCP is in the Transport layer.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: encapsulation.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M05-L03** — "The TCP/IP Model and How It Maps to OSI" · Module 05 · Unit 2_
