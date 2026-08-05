---
id: NA-M08-L03
module: 08
lesson: 03
title: "Subnet Masks Explained Without Fear"
unit: 5
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 03] Subnet Masks Explained Without Fear

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-02 (network vs. host portion).

The word "subnet mask" scares a lot of people. It shouldn't. A **subnet mask** is just a simple ruler that shows where an address splits into **network** and **host**. This trips up almost everyone at first — so let's slow right down and make it easy.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **subnet mask** does in plain words.
- [ ] Read a mask like **255.255.255.0** and say which octets are **network** vs. **host**.
- [ ] Use a mask to decide if two addresses are on the **same network**.
- [ ] Name the three **default** masks for Class A, B, and C.

---

## 2. Introduction — why this matters

You already know an IP address has a **network** part and a **host** part (Lesson 08-02). But here's the puzzle: **where does the split fall?** Is `192.168.1.10` three octets of network and one of host — or something else? The address alone doesn't say.

Your device needs to know, because it makes a decision every time it sends data: *is this destination on my own network, or far away?* If it's local, the device delivers directly. If it's remote, the device hands the data to the **router** (the default gateway). Getting that wrong means nothing reaches its destination.

The **subnet mask** is the answer. It's a simple marker that says, "this much is network, the rest is host." That's really all it is.

🎯 **Exam tip:** Network+ expects you to read a mask, split an address into network and host, and decide if two hosts share a network. Practice that one skill and you'll answer most mask questions.

🔧 **Lab link:** This is core to **Lab C** — you'll use a mask to plan which addresses belong to your home network.

---

## 3. Simple explanation

### A mask is a highlighter over the address
Picture your IP address written on paper. Now lay a **highlighter** over the front part — the part that names the **network**. Whatever is highlighted is network; whatever is left is the **host**. A **subnet mask** is that highlighter, written as numbers.

A mask looks just like an IP address — four octets — but it's made of **255s** followed by **0s**:

```
   255.255.255.0
```

- Where the mask is **255**, that octet is **network** (highlighted).
- Where the mask is **0**, that octet is **host** (not highlighted).

So with mask `255.255.255.0`, in the address `192.168.1.10`:

```
   IP:    192 . 168 .  1  . 10
   Mask:  255 . 255 . 255 .  0
          └──── network ────┘  └host┘
   Network = 192.168.1        Host = 10
```

### Why 255? (a peek at the bits)
Remember 8 bits per octet (Lesson 03-02). **255** in binary is `11111111` — **all 8 bits on**. **0** is `00000000` — all off. So a mask is just a run of **1s** (network) then **0s** (host). You don't need the binary today; just know 255 = "fully network," 0 = "fully host."

### The three default masks
Each class has a **default subnet mask** that matches its default split (Lesson 08-02):

| Class | Default mask | Network octets |
|:-----:|:------------:|:--------------:|
| **A** | 255.0.0.0 | first **1** |
| **B** | 255.255.0.0 | first **2** |
| **C** | 255.255.255.0 | first **3** |

Your home network almost always uses **255.255.255.0** (Class C style) — three octets of network, one of host.

### The big use: "same network?"
Two addresses are on the **same network** if their **network portions match** (the part the mask covers). Compare, using mask `255.255.255.0`:

| Address A | Address B | Network A | Network B | Same? |
|-----------|-----------|-----------|-----------|:-----:|
| 192.168.1.10 | 192.168.1.20 | 192.168.1 | 192.168.1 | ✅ Yes |
| 192.168.1.10 | 192.168.2.20 | 192.168.1 | 192.168.2 | ❌ No |

- **Same network** → the device delivers **directly** (final hop by MAC).
- **Different network** → the device sends it to the **default gateway** (the router).

This decision is the whole reason the mask exists.

> **The big idea:** A **subnet mask** marks how much of an IP address is **network** (255s) and how much is **host** (0s). A device uses it to answer one question — "is the destination on my network?" Same network → deliver directly; different network → send to the router.

💡 **Tip:** A quick shortcut with `255.255.255.0`: two addresses are on the same network if their **first three octets** are identical. `192.168.1.x` all belong together; `192.168.2.x` do not.

⚠️ **Watch out:** The mask, not the class, decides the real split. Classes give **defaults**, but a mask can move the line (you'll see this with CIDR next lesson). Always read the mask.

---

## 4. Real-world analogy

> **"A subnet mask is a highlighter that marks the 'town' part of an address, leaving the 'house number' plain."**

| Mailing | IP address |
|---------|------------|
| Highlight the town/ZIP | The **255** octets (network) |
| Leave the house number plain | The **0** octet (host) |
| Same town → walk it over | **Same network** → deliver directly |
| Different town → use the post office | **Different network** → send to the router |

If two letters share the same highlighted town, a neighbor can carry one over. If not, it goes through the post office (the router) to reach the other town.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Subnet mask** | sub-net | Four octets (255s then 0s) that mark which part of an IP is network vs. host. |
| **Subnet** | | A smaller network made by dividing a bigger one. |
| **Default subnet mask** | | The standard mask for a class: 255.0.0.0, 255.255.0.0, or 255.255.255.0. |

---

## 6. ASCII diagram

```
   THE MASK IS A HIGHLIGHTER OVER THE ADDRESS

   IP:    192 . 168 .  1  . 10
   Mask:  255 . 255 . 255 .  0     (255 = network, 0 = host)
          ███   ███   ███         ← highlighted = NETWORK (192.168.1)
                            10     ← plain = HOST

   DEFAULT MASKS:
     Class A → 255.0.0.0        (1 octet network)
     Class B → 255.255.0.0      (2 octets network)
     Class C → 255.255.255.0    (3 octets network)

   SAME NETWORK?  (mask 255.255.255.0)
     192.168.1.10  &  192.168.1.20  → 192.168.1 = 192.168.1  ✅ deliver directly
     192.168.1.10  &  192.168.2.20  → 192.168.1 ≠ 192.168.2  ❌ send to router
```

_255 = network, 0 = host. Same network → direct; different network → gateway._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-03-subnet-mask-01.svg` (created and stored in this module's `assets/`)
> **Shows:** an IP address with a mask "highlighter" over the network octets, the three default masks, and a same-network comparison of two address pairs.
> **Key elements & labels:** IP 192.168.1.10 over mask 255.255.255.0; network vs. host brace; default masks for A/B/C; two comparisons (same network → direct, different → router).
> **Color meaning:** the network part is both shaded **and** labeled "NETWORK (255)"; host is labeled "HOST (0)" — never color alone.
> **Flow direction:** address at top; defaults left; same-network test right.
> **Alt text (required):** "An IP address 192.168.1.10 shown above a subnet mask 255.255.255.0. The first three octets, where the mask is 255, are marked as the network portion (192.168.1); the last octet, where the mask is 0, is marked as the host portion (10). A table shows default masks: Class A 255.0.0.0, Class B 255.255.0.0, Class C 255.255.255.0. A comparison shows 192.168.1.10 and 192.168.1.20 are on the same network so a device delivers directly, while 192.168.1.10 and 192.168.2.20 are on different networks so the device sends to the router."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-03-ipconfig-mask-01.jpg`
> An `ipconfig` result with the **Subnet Mask** line highlighted next to the IPv4 Address. Alt text: "The ipconfig output with the Subnet Mask line highlighted, showing 255.255.255.0."
>
> **Photo 2** — `img-08-03-router-lan-settings-01.jpg`
> A home router LAN page showing its IP and subnet mask. Alt text: "A router's LAN settings page listing its IP address and subnet mask for the home network."

---

## 9. Hands-on lab

**Goal:** read your own subnet mask, split your IP into network and host, and test the "same network" rule.
**Why:** doing the split on your **own** address turns the idea into a skill.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** You only **read** settings. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** and run `ipconfig` (Lesson 08-01).
2. Read two lines: **IPv4 Address** and **Subnet Mask**. Write both down.
3. For each octet where the mask is **255**, circle that octet of your IP — that's the **network**. The octet(s) where the mask is **0** are the **host**.
4. Write your **network** (the circled part) and your **host** (the rest).
5. Read the **Default Gateway** line. Confirm its network portion **matches** your laptop's (it must, so you can reach it directly).

### 9b. Expected results

Most home laptops show a mask of `255.255.255.0`, so the split looks like this (your numbers differ):

```
   IPv4 Address. . . . . . . . . . . : 192.168.1.24
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
```

- Network = **192.168.1**, host = **24**; the gateway **192.168.1**.1 shares that network. ✅
- ✅ **You did it if:** you split your own address into network and host and saw the gateway on the same network.

### 9c. Verify it worked

1. Say: "My mask is ___, so my network is ___ and my host is ___."
2. Explain why your laptop can reach the gateway **directly** (same network).

### 9d. Reset / roll back

Nothing changed — you only read settings. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Reading the class, not the mask | Wrong split | The **mask** decides network vs. host — always read it |
| Thinking 0 in the mask = network | Backwards split | 255 = network, 0 = host |
| Comparing only the first octet | Wrong "same network" answer | With 255.255.255.0, compare **all three** network octets |
| Forgetting the gateway must be local | You can't explain routing | The gateway shares your network so you can reach it directly |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't reach the gateway | Mask/IP mismatch | Confirm the gateway's network matches yours under the mask |
| Two local PCs can't talk | Different network portions | Check both have the same network under the same mask |
| Mask looks odd (e.g., 255.255.255.128) | A non-default (CIDR) mask | That's valid — the split just isn't on an octet line (Lesson 08-04) |

---

## 12. Lesson summary

- A **subnet mask** marks which part of an IP is **network** (255s) and which is **host** (0s).
- A device uses the mask to decide: destination on the **same network** → deliver **directly**; **different** → send to the **router** (gateway).
- Default masks: **A** 255.0.0.0, **B** 255.255.0.0, **C** 255.255.255.0.
- The **mask**, not the class, sets the real split — always read it.

**One-sentence recap:** A subnet mask (255s then 0s) shows how much of an address is network vs. host, so a device can decide whether to deliver directly or hand data to the router.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-03-fill-in-the-blank.md`
2. **Matching** — `wb-08-03-matching.md`
3. **Label the diagram** — `wb-08-03-label-the-diagram.md` (mask over an address)
4. **Short answer** — `wb-08-03-short-answer.md`
5. **Hands-on observation** — `wb-08-03-hands-on-observation.md` (split your own address)
6. **Vocabulary review** — `wb-08-03-vocabulary-review.md`
7. **Reflection** — `wb-08-03-reflection.md`

**Quick written warm-up (do this now):** With mask 255.255.255.0, what is the network of 192.168.5.42?

Network: ____________  Host: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-03-knowledge-check.md`.)

1. What does a **subnet mask** do? *(Objective: definition)*
   - A) Speeds up the network
   - B) Marks which part of an IP is network vs. host
   - C) Hides your MAC address
   - D) Assigns Wi-Fi passwords

2. In a mask, an octet of **255** means that octet is… *(Objective: read mask)*
   - A) host
   - B) network
   - C) unused
   - D) broadcast

3. With mask **255.255.255.0**, the network of **192.168.1.10** is… *(Objective: split)*
   - A) 192.168.1
   - B) 10
   - C) 192.168
   - D) 1.10

4. Which is the **default** mask for a **Class C** address? *(Objective: defaults)*
   - A) 255.0.0.0
   - B) 255.255.0.0
   - C) 255.255.255.0
   - D) 0.0.0.0

5. With mask 255.255.255.0, are **192.168.1.10** and **192.168.2.10** on the same network? *(Objective: same network)*
   - A) Yes
   - B) No
   - C) Only on Wi-Fi
   - D) Can't tell

6. **True or false —** The address class, not the mask, decides the real network/host split. Explain in one sentence. *(Objective: mask vs class)*

7. When a destination is on a **different** network, the device sends the data to… *(Objective: routing)*
   - A) the loopback address
   - B) the default gateway (router)
   - C) every host
   - D) the DNS server

8. **Matching —** write the letter next to each mask. *(Objective: defaults)*
   - ___ 255.0.0.0 &nbsp;&nbsp; ___ 255.255.0.0 &nbsp;&nbsp; ___ 255.255.255.0
   - A) Class C default &nbsp; B) Class A default &nbsp; C) Class B default

9. Fill in the blank: In a subnet mask, ____________ means network and 0 means host. *(Objective: read mask)*

10. **Scenario —** Two office PCs are `10.0.5.7` and `10.0.9.7`, both with mask `255.255.255.0`. Can they talk directly, or must they go through the router? Explain. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-03-subnet-masks.md`. In brief:

- **Objective in one line:** learners read a subnet mask, split an address into network/host, and decide if two hosts share a network.
- **Common misconceptions:** the class (not the mask) sets the split; 0 means network; compare only the first octet. Correct all three.
- **Pacing:** ~28 min. Keep it fear-free — lots of worked examples with 255.255.255.0 before anything else.
- **How CompTIA tests it:** read a mask; find the network; same-network decision; default masks per class.
- **Accuracy note:** examples are arithmetic on standard masks; `ipconfig` is real. No fabricated device-specific output — the sample is representative and labeled so.
- **Extension idea:** preview non-octet masks (255.255.255.128) as the bridge to CIDR (08-04).

---

## 17. Cheat sheet

> **Quick reference — Subnet masks**
>
> - A **subnet mask** = four octets, **255** = network, **0** = host.
> - **Default masks:** A `255.0.0.0` · B `255.255.0.0` · C `255.255.255.0`.
> - **Split:** cover the 255 octets → that's the network; the rest is the host.
> - **Same network?** network portions match → **deliver directly**; differ → **send to the router**.
> - Shortcut with `255.255.255.0`: same **first three octets** = same network.
> - The **mask** (not the class) decides the real split — always read it.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Subnet mask** — Four octets (255s then 0s) that mark which part of an IP is network vs. host.
- **Subnet** — A smaller network made by dividing a bigger one.
- **Default subnet mask** — The standard mask for a class: 255.0.0.0, 255.255.0.0, or 255.255.255.0.

---

## 19. Homework

- **Practice:** For five addresses with mask 255.255.255.0, write the network and host of each.
- **Spaced review:** Redo the Lesson 08-02 flashcards on classes and private ranges.
- **Preview:** Next lesson we write masks the short way — **CIDR** slash notation (like `/24`).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I split an address into network and host now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a subnet mask does.
- [ ] I can read a mask and split an address into network and host.
- [ ] I can decide if two addresses are on the same network.
- [ ] I know the default masks for Class A, B, and C.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: CIDR slash notation.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L03** — "Subnet Masks Explained Without Fear" · Module 08 · Unit 5_
