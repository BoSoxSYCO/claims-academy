---
id: NA-M08-L05
module: 08
lesson: 05
title: "Subnetting Step by Step (the Beginner Method)"
unit: 5
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 32
equipment_tier: E1
prerequisites: ["NA-M08-L03", "NA-M08-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 05] Subnetting Step by Step (the Beginner Method)

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~32 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-03 (subnet masks) and Lesson 08-04 (CIDR).

Now we split one network into several. This is **subnetting** — the skill people fear most on the exam. We'll use one simple, repeatable method and a single worked example. Go slowly; do it once by hand and it clicks.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **subnetting** is and why we borrow **host** bits.
- [ ] Find the **block size** and list every subnet.
- [ ] Find each subnet's **network address**, **broadcast address**, and **usable host** range.
- [ ] Count **usable hosts** per subnet with 2^host − 2.

---

## 2. Introduction — why this matters

Picture a big open office with 200 desks and no walls. Everyone hears everyone — noisy and hard to manage. So you add **walls** to make smaller rooms: one for sales, one for support, one for guests. Each room is quieter and easier to control.

**Subnetting** builds those walls in a network. You take one network — say `192.168.1.0/24` — and split it into several smaller **subnets**. Each subnet is its own little network: fewer devices, its own range, easier to secure and manage.

How do you build a wall? You **borrow bits** from the **host** part and give them to the **network** part. Every bit you borrow **doubles** the number of subnets. That's the whole trick — the rest is careful counting.

🎯 **Exam tip:** Network+ gives you an address and a mask and asks for the subnet, the broadcast, the host range, or the host count. One method answers all four.

🔧 **Lab link:** This is the heart of **Lab C** — you'll carve your home network into planned subnets.

---

## 3. Simple explanation

### The idea: borrow host bits to make subnets
A mask splits an address into network and host (Lesson 08-03). To make **more** networks, move the line right — **borrow** host bits into the network part. Each borrowed bit doubles the count:

- Borrow **1** bit → **2** subnets. Borrow **2** → **4**. Borrow **3** → **8**. (Number of subnets = **2^borrowed**.)

Going from `/24` to `/26` borrows **2** bits → **4** subnets.

### The beginner method (5 steps)
Use these five steps every time. Our example: **split `192.168.1.0/24` into `/26` subnets.**

**Step 1 — Find the new mask and the "interesting" octet.**
`/26` = `255.255.255.192` (Lesson 08-04). The octet that changed from 255 or 0 is the **interesting octet** — here the **4th** (192).

**Step 2 — Find the block size.**
**Block size = 256 − the interesting octet's mask value.**
256 − 192 = **64**. Subnets start every **64** in that octet.

**Step 3 — List the subnets (count by the block size).**
Start at 0 and add the block size:
`192.168.1.0`, `192.168.1.64`, `192.168.1.128`, `192.168.1.192`. That's **4** subnets — matching 2^2. ✅

**Step 4 — Find each subnet's network, broadcast, and host range.**
- The **network address** is the **first** address (host bits all 0) — it names the subnet.
- The **broadcast address** is the **last** address (host bits all 1) — one below the next subnet's start.
- The **usable hosts** are everything **in between**.

**Step 5 — Count usable hosts.**
**Usable hosts = 2^(host bits) − 2.** For `/26`, host bits = 32 − 26 = 6, so 2^6 − 2 = **62**. (We subtract 2: the network address and the broadcast address can't be given to a device.)

### The finished table for `192.168.1.0/26`

| Subnet | Network address | Usable hosts | Broadcast address |
|:------:|:---------------:|:------------:|:-----------------:|
| 1 | 192.168.1.0 | .1 – .62 | 192.168.1.63 |
| 2 | 192.168.1.64 | .65 – .126 | 192.168.1.127 |
| 3 | 192.168.1.128 | .129 – .190 | 192.168.1.191 |
| 4 | 192.168.1.192 | .193 – .254 | 192.168.1.255 |

Each subnet holds **62** usable devices. Four walls, four quiet rooms.

> **The big idea:** **Subnetting** borrows **host** bits to make more networks. Find the **block size** (256 − mask octet), count subnets by it, then for each: **network** = first (host bits 0), **broadcast** = last (host bits 1), **usable hosts** = the middle = **2^host − 2**.

💡 **Tip:** The block size is your friend. Once you have it (here, 64), the subnets, networks, and broadcasts all fall out by counting.

⚠️ **Watch out:** Always subtract **2** for usable hosts. The **network** and **broadcast** addresses are real addresses, but no device may use them.

---

## 4. Real-world analogy

> **"Subnetting adds interior walls: one big room becomes several smaller, quieter rooms."**

| Building | Network |
|----------|---------|
| One big open room | One network (`/24`) |
| Add interior walls | **Borrow bits** to subnet |
| Each smaller room | A **subnet** |
| The room's door sign | The **network address** |
| The room's all-call speaker | The **broadcast address** |
| The desks people sit at | The **usable hosts** |

More walls = more rooms, but each room holds fewer desks. Borrow more bits = more subnets, but fewer hosts each. It's always a trade.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Subnetting** | | Splitting one network into several smaller subnets. |
| **Borrowing bits** | | Taking bits from the host part to make more subnets. |
| **Block size** | | How far apart subnets start: 256 − the mask's interesting octet. |
| **Network address** | | The first address of a subnet (host bits all 0); it names the subnet. |
| **Broadcast address** | | The last address of a subnet (host bits all 1); reaches every host in it. |
| **Usable host** | | An address a device can use — not the network or broadcast address. |

---

## 6. ASCII diagram

```
   SPLIT 192.168.1.0/24  INTO  /26  SUBNETS

   /26 = 255.255.255.192   interesting octet = 4th (192)
   BLOCK SIZE = 256 - 192 = 64      subnets = 2^2 = 4

   ┌─────────────┬───────────────┬────────────┬────────────────┐
   │ Subnet      │ Network (1st) │ Hosts      │ Broadcast (last)│
   ├─────────────┼───────────────┼────────────┼────────────────┤
   │ .0   block  │ 192.168.1.0   │ .1  – .62  │ 192.168.1.63   │
   │ .64  block  │ 192.168.1.64  │ .65 – .126 │ 192.168.1.127  │
   │ .128 block  │ 192.168.1.128 │ .129– .190 │ 192.168.1.191  │
   │ .192 block  │ 192.168.1.192 │ .193– .254 │ 192.168.1.255  │
   └─────────────┴───────────────┴────────────┴────────────────┘

   Usable hosts each = 2^(32-26) - 2 = 2^6 - 2 = 62
```

_Block size 64 → count the subnets → network first, broadcast last, hosts in between._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-05-subnetting-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the 5-step method turning 192.168.1.0/24 into four /26 subnets, with a number line marked at 0, 64, 128, 192 and each subnet's network/host-range/broadcast labeled.
> **Key elements & labels:** /26 = 255.255.255.192; block size 256−192=64; four subnets; network (first)/broadcast (last)/usable hosts; 2^6−2 = 62.
> **Color meaning:** network and broadcast addresses are labeled with text (not color alone); the host range is labeled "usable."
> **Flow direction:** left-to-right number line 0 → 255, split into four blocks of 64.
> **Alt text (required):** "A number line from 0 to 255 split into four blocks of 64, showing the subnets of 192.168.1.0 slashed to /26. Block one starts at network address 192.168.1.0 with usable hosts .1 to .62 and broadcast 192.168.1.63. Block two starts at 192.168.1.64 with hosts .65 to .126 and broadcast .127. Block three starts at 192.168.1.128 with hosts .129 to .190 and broadcast .191. Block four starts at 192.168.1.192 with hosts .193 to .254 and broadcast .255. The block size is 256 minus 192 equals 64, and each subnet has 2 to the 6th minus 2 equals 62 usable hosts."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-05-subnet-worksheet-01.jpg`
> A hand-worked subnet table on paper. Alt text: "A handwritten subnet table showing network, host range, and broadcast for each /26 subnet."
>
> **Photo 2** — `img-08-05-router-subnets-01.jpg`
> A router page listing more than one LAN subnet. Alt text: "A router page showing two configured subnets, each with its own network address and mask."

---

## 9. Hands-on lab

**Goal:** subnet a network by hand with the 5-step method, then confirm your own IP lands in the right subnet.
**Why:** doing the steps once, with pencil, is what makes subnetting stick.

**You will need**
- Pencil and paper. Your Windows laptop (Equipment tier **E1**). Estimated time: 15 min.

⚠️ **Before you start (safety):** This is a paper exercise plus a read-only `ipconfig`. Nothing on any device changes.

### 9a. Step-by-step instructions

1. On paper, write the task: **split `192.168.1.0/24` into `/26` subnets.**
2. **Step 1:** write the `/26` mask (`255.255.255.192`) and circle the interesting octet.
3. **Step 2:** block size = 256 − 192 = ____.
4. **Step 3:** list the four subnets by counting the block size from 0.
5. **Step 4–5:** for **each** subnet, write network, host range, broadcast, and usable-host count (2^6 − 2).
6. Now run `ipconfig`. If your laptop is on a `192.168.1.x` network, find **which /26 subnet** your IP would fall in.

### 9b. Expected results

- Your paper table matches the finished table in Section 3 (block size **64**, **62** hosts each).
- If your IP is, say, `192.168.1.24`, it falls in **subnet 1** (`.0`–`.63`), because 24 is between 1 and 62.
- ✅ **You did it if:** you produced all four subnets and placed your own address in the right one.

### 9c. Verify it worked

1. Check: each broadcast is **one below** the next subnet's network (63 → 64, 127 → 128, …).
2. Add it up: 4 subnets × 64 addresses = 256 — the whole `/24`. Nothing missing, nothing overlapping.

### 9d. Reset / roll back

Nothing changed on any device — paper and a read-only command only.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Forgetting the **−2** | Host count too high by 2 | Subtract the network and broadcast addresses |
| Using the wrong **block size** | Subnets misaligned | Block size = 256 − the interesting octet's mask value |
| Giving a device the **network** or **broadcast** address | It won't work | Only the **in-between** addresses are usable |
| Counting subnets wrong | Too many/few | Subnets = 2^(bits borrowed) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Subnets overlap | Wrong block size | Recompute 256 − mask octet; recount from 0 |
| Host range seems off by one | Included network/broadcast | Network = first, broadcast = last; hosts are between |
| Totals don't reach 256 | Missed a subnet | Keep adding the block size until you pass 255 |
| A device can't communicate | It got the .0 or broadcast address | Assign a **usable** host address instead |

---

## 12. Lesson summary

- **Subnetting** borrows **host** bits to make more networks; subnets = **2^borrowed**.
- **Block size = 256 − the interesting octet's mask value**; subnets start every block.
- Each subnet: **network** = first (host bits 0), **broadcast** = last (host bits 1), **usable hosts** = between.
- **Usable hosts = 2^(host bits) − 2** (drop network + broadcast).

**One-sentence recap:** To subnet, borrow host bits, find the block size (256 − mask octet), list the subnets, and for each mark the network (first) and broadcast (last) with 2^host − 2 usable hosts between them.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-05-fill-in-the-blank.md`
2. **Matching** — `wb-08-05-matching.md`
3. **Label the diagram** — `wb-08-05-label-the-diagram.md` (the subnet blocks)
4. **Short answer** — `wb-08-05-short-answer.md`
5. **Hands-on observation** — `wb-08-05-hands-on-observation.md` (subnet by hand)
6. **Vocabulary review** — `wb-08-05-vocabulary-review.md`
7. **Reflection** — `wb-08-05-reflection.md`

**Quick written warm-up (do this now):** For a /26 mask, what is the block size, and how many usable hosts per subnet?

Block size: ____________  Usable hosts: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-05-knowledge-check.md`.)

1. What is **subnetting**? *(Objective: definition)*
   - A) Speeding up a network
   - B) Splitting one network into several smaller subnets
   - C) Hiding a MAC address
   - D) Assigning Wi-Fi names

2. To make more subnets, you borrow bits from the… *(Objective: borrow)*
   - A) network part
   - B) host part
   - C) broadcast
   - D) gateway

3. For mask **255.255.255.192**, the block size is… *(Objective: block size)*
   - A) 32
   - B) 64
   - C) 128
   - D) 192

4. In the subnet `192.168.1.64/26`, the **broadcast** address is… *(Objective: broadcast)*
   - A) 192.168.1.64
   - B) 192.168.1.96
   - C) 192.168.1.127
   - D) 192.168.1.128

5. How many **usable hosts** does a `/26` subnet have? *(Objective: host count)*
   - A) 64
   - B) 62
   - C) 30
   - D) 254

6. **True or false —** A device may be given the network address of its subnet. Explain in one sentence. *(Objective: usable)*

7. Borrowing **3** bits creates how many subnets? *(Objective: count)*
   - A) 3
   - B) 6
   - C) 8
   - D) 16

8. **Matching —** for `192.168.1.0/26`, write the letter. *(Objective: parts)*
   - ___ 192.168.1.0 &nbsp;&nbsp; ___ 192.168.1.63 &nbsp;&nbsp; ___ 192.168.1.1–.62
   - A) broadcast address &nbsp; B) network address &nbsp; C) usable host range

9. Fill in the blank: Usable hosts per subnet = 2^(host bits) − ____________. *(Objective: formula)*

10. **Scenario —** You split `10.0.0.0/24` into `/26` subnets. List the four network addresses. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-05-subnetting.md`. In brief:

- **Objective in one line:** learners subnet a network with a repeatable 5-step method (block size → subnets → network/broadcast/host range → host count).
- **Common misconceptions:** forgetting −2; wrong block size; assigning the network/broadcast address. Correct all three.
- **Pacing:** ~32 min — the longest lesson so far. Do the one /26 example slowly and completely; resist adding more until it lands.
- **How CompTIA tests it:** given address + mask, find the subnet/broadcast/host range/host count; PBQ-style.
- **Accuracy note:** all example math is verified (block 64, 4 subnets, 62 hosts, broadcasts .63/.127/.191/.255). No fabricated device output.
- **Extension idea:** /27 (block 32, 8 subnets, 30 hosts) and variable-length subnets (VLSM) preview for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Subnetting (beginner method)**
>
> 1. **New mask** → find the **interesting octet**.
> 2. **Block size = 256 − mask octet.** Subnets start every block (from 0).
> 3. **Network** = first address (host bits 0). **Broadcast** = last (host bits 1) = one below the next subnet.
> 4. **Usable hosts** = the range between = **2^(host bits) − 2**.
> 5. **Subnets = 2^(bits borrowed).**
> - `/26` → block **64**, 4 subnets, **62** hosts each.
> - `/27` → block **32**, 8 subnets, **30** hosts each.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Subnetting** — Splitting one network into several smaller subnets.
- **Borrowing bits** — Taking bits from the host part to make more subnets.
- **Block size** — How far apart subnets start: 256 − the mask's interesting octet.
- **Network address** — The first address of a subnet (host bits all 0); it names the subnet.
- **Broadcast address** — The last address of a subnet (host bits all 1); reaches every host in it.
- **Usable host** — An address a device can use — not the network or broadcast address.

---

## 19. Homework

- **Practice:** Subnet `172.16.0.0/24` into `/27` subnets. List all 8 networks, host ranges, and broadcasts.
- **Spaced review:** Redo the Lesson 08-04 flashcards on mask ⇄ slash.
- **Preview:** Next lesson we speed this up with **shortcuts** and lots of practice.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I find a block size and list subnets now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what subnetting is and why we borrow host bits.
- [ ] I can find the block size and list every subnet.
- [ ] I can find a subnet's network, broadcast, and host range.
- [ ] I can count usable hosts with 2^host − 2.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: subnetting practice and shortcuts.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L05** — "Subnetting Step by Step (the Beginner Method)" · Module 08 · Unit 5_
