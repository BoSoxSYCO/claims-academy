---
id: NA-M08-L01
module: 08
lesson: 01
title: "What an IP Address Is and Why We Need It"
unit: 5
objective_ids: ["1.7"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M03-L05", "NA-M07-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 01] What an IP Address Is and Why We Need It

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~25 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 03-05 (IPv4 address basics) and Lesson 07-02 (MAC addresses).

You've met the **MAC address** — a device's hardware name. So why does every device *also* have an **IP address**? This lesson answers that. It's the start of Module 08, where you learn to read, plan, and split up addresses. We begin with the big **why**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what an **IP address** is in plain words.
- [ ] Say **why** we need IP addresses when devices already have MAC addresses.
- [ ] Tell a **logical** address (IP) from a **physical** address (MAC).
- [ ] Read an IPv4 address in **dotted-decimal notation** and find your own.

---

## 2. Introduction — why this matters

Think about mailing a letter. Your **name** never changes — but your name alone won't get a letter to you. The postal service needs your **mailing address**: country, city, street, house number. The address has **structure**, and that structure is what lets mail travel across the world and still find your door.

A **MAC address** is like your name: it's burned into the device and it doesn't change. It works great on **one** local network, where a switch can shout and listen. But a MAC address has no structure that says *where* a device is. There are billions of devices — you can't find one by name across the whole internet.

An **IP address** is like your mailing address. It's a **logical** address given to a device so data can be **routed** from network to network until it reaches the right place. That's why every device that talks on a network needs one.

🎯 **Exam tip:** Network+ expects you to know that MAC works at Layer 2 (local delivery) and IP works at Layer 3 (routing between networks). Both are needed — they do different jobs.

🔧 **Lab link:** This module builds toward **Lab C** — planning the IP addresses for your own home network.

---

## 3. Simple explanation

Let's define an IP address, then see why MAC alone isn't enough.

### What an IP address is
An **IP address** is a number given to each device — called a **host** — on a network, so data can be sent to it. On most networks today it looks like this:

```
192.168.1.10
```

That's an **IPv4 address**: four numbers, each from **0 to 255**, separated by dots. Writing it this way is called **dotted-decimal notation**. Each of the four numbers is an **octet** (a byte — 8 bits), a term you met in Lesson 03-05.

An IP address does two jobs at once: it says **which network** a device is on and **which host** it is on that network. (You'll learn exactly how in the next lessons — for now, just hold the idea that the address has *structure*.)

### Why a MAC address isn't enough
A **MAC address** is a **physical address** — the hardware ID burned into a device (Lesson 07-02). It's perfect for **local** delivery: on one LAN, a switch learns MACs and forwards frames to the right port.

But the internet is millions of networks joined together. MAC addresses are **flat** — there's no "which network" part, so there's no way to steer traffic across all those networks by MAC. It would be like mailing a letter with only a first name on it.

**IP addresses are logical and structured.** Because the address says which network a host is on, **routers** (Lesson 07-01) can pass data network to network until it arrives. That structure is the whole point.

### Physical vs. logical — the key contrast

| | **MAC address** | **IP address** |
|---|-----------------|----------------|
| Kind | **Physical** (hardware) | **Logical** (software) |
| Set by | Burned in at the factory | Assigned (by hand or automatically) |
| Changes? | No — stays with the device | Yes — changes when a device moves networks |
| Job | **Local** delivery on one LAN | **Routing** between networks |
| Layer | 2 (Data Link) | 3 (Network) |

Both are needed. On your own network, data reaches your laptop by **IP** across networks, then by **MAC** for the final local hop.

> **The big idea:** A **MAC address** is a device's permanent *name* (great locally). An **IP address** is its *mailing address* — a **logical**, structured number that lets routers deliver data **between** networks. Every host needs one.

💡 **Tip:** You already have an IP address right now. In Lesson 02-04 you ran `ipconfig` — the "IPv4 Address" line it showed **is** your laptop's IP.

⚠️ **Watch out:** An IP address can **change** (when you join a new network); a MAC address does not. Don't treat an IP like a permanent name for a device.

---

## 4. Real-world analogy

> **"A MAC address is your name; an IP address is your mailing address."**

| Mail | Network |
|------|---------|
| Your name (never changes) | **MAC** address (burned in) |
| Your mailing address (structured) | **IP** address (logical) |
| Country / city / street | Which **network** / which **host** |
| The name alone can't route mail | A MAC alone can't route across the internet |
| You get a new address when you move | You get a new IP on a new network |

Your name gets a letter to you *once it's in your house*. The mailing address is what gets it across the world to your house in the first place.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **IP address** | | A logical address given to a device so data can be routed to it. |
| **Host** | | Any device that has an IP address and communicates on a network. |
| **Logical address** | | An address set by software (like an IP); it can change when a device moves networks. |
| **Physical address** | | The hardware address (MAC) burned into a device; it does not change. |
| **Dotted-decimal notation** | | Writing an IPv4 address as four numbers (0–255) separated by dots. |

---

## 6. ASCII diagram

```
   TWO ADDRESSES, TWO JOBS

   NAME (never changes)           MAILING ADDRESS (structured)
   = MAC address                  = IP address
   AA:BB:CC:11:22:33              192.168.1.10
   burned in · Layer 2            assigned · Layer 3
   LOCAL delivery on one LAN      ROUTES between networks

   Sending data to your laptop:
   internet ──▶ router ──▶ router ──▶ your LAN ──▶ your laptop
            (uses IP to cross networks)      (uses MAC for the last local hop)

   IP gets it to the right NETWORK.  MAC gets it to the right DEVICE.
```

_MAC = the name (local). IP = the mailing address (routes between networks). You need both._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-01-mac-vs-ip-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a device with two labels — a MAC address tagged "physical / name / local (Layer 2)" and an IP address tagged "logical / mailing address / routes between networks (Layer 3)" — beside a small path showing data crossing routers by IP, then the last hop by MAC.
> **Key elements & labels:** MAC address (burned-in, Layer 2, local); IP address (assigned, Layer 3, between networks); "which network / which host"; the internet → router → router → LAN → laptop path.
> **Color meaning:** each address type is labeled in text (physical vs. logical); do not rely on color alone to tell them apart.
> **Flow direction:** left-to-right for the delivery path.
> **Alt text (required):** "A laptop shown with two addresses. Its MAC address is labeled physical, burned in, Layer 2, used for local delivery on one network — like a person's name. Its IP address is labeled logical, assigned, Layer 3, used to route data between networks — like a mailing address. Below, a path shows data crossing two routers using the IP address, then reaching the laptop on the last local hop using the MAC address."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-01-ipconfig-01.jpg`
> A Windows Command Prompt showing `ipconfig` output with the IPv4 Address line highlighted. Alt text: "The ipconfig command showing the laptop's IPv4 Address line, its IP address on the network."
>
> **Photo 2** — `img-08-01-router-label-01.jpg`
> The label on a home router showing a default IP like 192.168.1.1. Alt text: "A home router's label showing its IP address, the gateway for the home network."

---

## 9. Hands-on lab

**Goal:** find your laptop's own IP address and see it written in dotted-decimal notation.
**Why:** the number is abstract until you see your **own** — then it's real.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 8 min.

⚠️ **Before you start (safety):** You are only **reading** settings — you will not change anything.

### 9a. Step-by-step instructions

1. Click the **Start** menu. Type `cmd` and press **Enter** to open the **Command Prompt** (Lesson 02-03).
2. Type this exact command and press **Enter**:

   ```
   ipconfig
   ```

3. Find the line labeled **IPv4 Address**. Read the four numbers after the colon.
4. Write your IPv4 address here: `______.______.______.______`
5. Count the dots (there should be **3**) and note each number is between **0 and 255**.

### 9b. Expected results

You'll see output like this (your numbers will differ):

```
   IPv4 Address. . . . . . . . . . . : 192.168.1.24
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
```

- The **IPv4 Address** line is **your host's IP**.
- ✅ **You did it if:** you found four numbers separated by three dots, each 0–255.

### 9c. Verify it worked

1. Say your IP address out loud, one octet at a time.
2. Point to the **Default Gateway** line — that's your **router's** IP (you met "default gateway" in Lesson 02-04). Notice it's on the same network as your laptop.

### 9d. Reset / roll back

Nothing changed — you only read settings. Close the Command Prompt window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking IP and MAC are the same | You confuse two different jobs | MAC = local name; IP = mailing address that routes |
| Treating an IP as permanent | You expect it to never change | An IP changes when a device joins a new network |
| Writing an octet above 255 | The address is invalid | Each of the four numbers must be **0–255** |
| Forgetting a device needs both | You can't explain delivery | IP gets to the network; MAC gets to the device |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No IPv4 Address shown | Not connected to a network | Join Wi-Fi or plug in Ethernet, then re-run `ipconfig` |
| IP starts with `169.254` | No address was assigned | The device couldn't reach DHCP (you'll learn DHCP in Module 09) |
| Two devices, "same" IP | They may be on different networks | An IP is only unique **within** one network |

---

## 12. Lesson summary

- An **IP address** is a **logical**, structured number given to each **host** so data can be **routed** to it.
- A **MAC address** is a **physical** name — great for **local** delivery, but it can't route across networks.
- IP works at **Layer 3** (between networks); MAC works at **Layer 2** (one LAN). Both are needed.
- IPv4 is written in **dotted-decimal notation**: four octets, each **0–255**.

**One-sentence recap:** A MAC address is a device's permanent name for local delivery, while an IP address is its logical, structured mailing address that lets routers deliver data between networks.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-01-fill-in-the-blank.md`
2. **Matching** — `wb-08-01-matching.md`
3. **Label the diagram** — `wb-08-01-label-the-diagram.md` (name vs. address)
4. **Short answer** — `wb-08-01-short-answer.md`
5. **Hands-on observation** — `wb-08-01-hands-on-observation.md` (find your IP)
6. **Vocabulary review** — `wb-08-01-vocabulary-review.md`
7. **Reflection** — `wb-08-01-reflection.md`

**Quick written warm-up (do this now):** Which address routes between networks? Which one is burned in?

Routes between networks: ____________  Burned in: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-01-knowledge-check.md`.)

1. What is an **IP address**? *(Objective: definition)*
   - A) A hardware name burned into a device
   - B) A logical address so data can be routed to a device
   - C) The speed of a cable
   - D) A type of switch

2. Why isn't a **MAC address** enough to reach a device across the internet? *(Objective: why IP)*
   - A) It's too short
   - B) It has no structure to say which network the device is on
   - C) It changes too often
   - D) It only works on Wi-Fi

3. A device with an IP address on a network is called a… *(Objective: terms)*
   - A) host
   - B) cable
   - C) port
   - D) frame

4. Which address is **logical** (set by software and can change)? *(Objective: logical vs physical)*
   - A) MAC address
   - B) IP address
   - C) Both
   - D) Neither

5. How is an IPv4 address written? *(Objective: format)*
   - A) Six pairs of hex, like AA:BB:CC:11:22:33
   - B) Four numbers 0–255 separated by dots
   - C) One long word
   - D) A single number 0–255

6. **True or false —** An IP address never changes for the life of a device. Explain in one sentence. *(Objective: logical vs physical)*

7. IP works at which OSI layer? *(Objective: layers)*
   - A) Layer 1
   - B) Layer 2
   - C) Layer 3
   - D) Layer 7

8. **Matching —** write the letter next to each item. *(Objective: terms)*
   - ___ MAC address &nbsp;&nbsp; ___ IP address &nbsp;&nbsp; ___ Dotted-decimal
   - A) logical mailing address that routes between networks &nbsp; B) the way an IPv4 address is written &nbsp; C) physical name for local delivery

9. Fill in the blank: An IPv4 address has four ____________, each a number from 0 to 255. *(Objective: format)*

10. **Scenario —** You send a photo from your phone to a website across the world. Which address gets it to the right **network**, and which gets it to the final **device** on your LAN? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-01-what-an-ip-address-is.md`. In brief:

- **Objective in one line:** learners explain what an IP address is and why it's needed alongside the MAC address.
- **Common misconceptions:** IP and MAC are the same; an IP is permanent; a MAC can route the internet. Correct all three.
- **Pacing:** ~25 min. The `ipconfig` lab makes it concrete — most learners light up seeing their own IP.
- **How CompTIA tests it:** MAC (Layer 2, local) vs. IP (Layer 3, routing); IPv4 format; logical vs. physical addressing.
- **Accuracy note:** `ipconfig` is real and was taught in M02; the shown output is a representative example — remind learners their own numbers differ. No fabricated device-specific values.
- **Extension idea:** preview that the IP splits into a network part and a host part (Lessons 08-02/08-03).

---

## 17. Cheat sheet

> **Quick reference — IP address vs. MAC address**
>
> - **IP address** = **logical** mailing address; routes data **between networks** (Layer 3).
> - **MAC address** = **physical** name; **local** delivery on one LAN (Layer 2).
> - **IPv4** = four **octets** (0–255) in **dotted-decimal**: `192.168.1.10`.
> - **Host** = any device with an IP on a network.
> - IP **can change** (new network); MAC does **not**.
> - Delivery: **IP** to the right **network** → **MAC** to the right **device**.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Host** — Any device that has an IP address and communicates on a network.
- **Logical address** — An address set by software (like an IP); it can change when a device moves networks.
- **Physical address** — The hardware address (MAC) burned into a device; it does not change.
- **Dotted-decimal notation** — Writing an IPv4 address as four numbers (0–255) separated by dots.

(**IP address**, **IPv4 address**, and **octet** were defined in earlier modules and are reused here.)

---

## 19. Homework

- **Practice:** Run `ipconfig` on two different networks (home Wi-Fi and a phone hotspot). Notice the IP **changes**; the MAC does not.
- **Spaced review:** Redo the Lesson 07-02 flashcards on MAC addresses.
- **Preview:** Next lesson we open up the IPv4 address — its **classes** and the **private** ranges used at home.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain why we need IP *and* MAC now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what an IP address is in plain words.
- [ ] I can say why a MAC address alone can't route across the internet.
- [ ] I can tell a logical (IP) from a physical (MAC) address.
- [ ] I found my own IPv4 address with `ipconfig`.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: IPv4 classes and private ranges.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L01** — "What an IP Address Is and Why We Need It" · Module 08 · Unit 5_
