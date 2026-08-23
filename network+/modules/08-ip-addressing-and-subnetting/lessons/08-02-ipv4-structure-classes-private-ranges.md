---
id: NA-M08-L02
module: 08
lesson: 02
title: "IPv4 Structure, Classes, and Private Ranges"
unit: 5
objective_ids: ["1.7"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 02] IPv4 Structure, Classes, and Private Ranges

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-01 (what an IP address is).

You can read an IPv4 address now. This lesson opens it up: it's made of **32 bits**, it splits into a **network** part and a **host** part, and it falls into **classes** and **private ranges**. Knowing these lets you recognize any address at a glance — a real exam skill.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain that an IPv4 address is **32 bits** = **four octets**.
- [ ] Describe the **network portion** and **host portion** of an address.
- [ ] Name the **classes** (A, B, C) by their first octet, plus D and E.
- [ ] List the three **private** ranges and spot **loopback** and **APIPA**.

---

## 2. Introduction — why this matters

Think about phone numbers. A number like (**617**) 555-0142 has structure: the **area code** says the region, the rest says the exact line. Once you know the pattern, you can glance at a number and know roughly where it belongs.

IPv4 addresses work the same way. An address has a **network** part (like the area code — which network) and a **host** part (like the line number — which device). And addresses are grouped into **classes** and **ranges** with clear patterns. Learn the patterns, and you can look at `10.0.0.5` or `192.168.1.20` and instantly know what kind of address it is.

Why now? Because everything ahead — subnet masks, CIDR, subnetting — builds on this structure. And the exam constantly shows you an address and asks, "what is this?"

🎯 **Exam tip:** Network+ expects you to recognize the **private ranges**, **loopback** (127.0.0.1), and **APIPA** (169.254.x.x) on sight. Memorize these three patterns.

🔧 **Lab link:** This feeds **Lab C** — your home IP scheme almost certainly uses a **private** range.

---

## 3. Simple explanation

### An IPv4 address is 32 bits
Each of the four octets is **8 bits** (Lesson 03-02), so an IPv4 address is **4 × 8 = 32 bits** total. Written for people, it's four numbers 0–255 with dots. The computer sees 32 ones and zeros.

```
   192  .  168  .   1  .  10
 11000000 10101000 00000001 00001010   (32 bits)
```

### Two parts: network and host
Every IPv4 address splits into two parts:

- The **network portion** — which network the address belongs to (like a phone area code).
- The **host portion** — which device (host) it is on that network (like the line number).

Devices on the **same network** share the same network portion. *How much* of the address is network vs. host is set by the **subnet mask** — the whole next lesson. For now, just hold the split in mind.

### Classes (the classic grouping)
Historically, IPv4 was split into **classes** by the value of the **first octet**:

| Class | First octet | Typical use | Default network part |
|:-----:|:-----------:|-------------|:--------------------:|
| **A** | 1–126 | Very large networks | first **8** bits |
| **B** | 128–191 | Medium networks | first **16** bits |
| **C** | 192–223 | Small networks | first **24** bits |
| **D** | 224–239 | **Multicast** (one-to-many) | — |
| **E** | 240–255 | **Experimental** (reserved) | — |

Notice **127** is skipped — it's reserved for **loopback** (below). Modern networks use masks more flexibly (Lessons 08-03/08-04), but the exam still tests these class ranges.

### Private ranges (used inside your home/office)
Some address ranges are set aside as **private** — used **inside** a network and never routed on the public internet. There are three (one per class A/B/C):

| Range | From – To | Class |
|-------|-----------|:-----:|
| **10.0.0.0/8** | 10.0.0.0 – 10.255.255.255 | A |
| **172.16.0.0/12** | 172.16.0.0 – 172.31.255.255 | B |
| **192.168.0.0/16** | 192.168.0.0 – 192.168.255.255 | C |

Your home router almost certainly hands out **192.168.x.x** or **10.x.x.x**. A **private IP address** is reused in millions of homes because it stays inside; a **public IP address** is unique on the internet (more in Lesson 08-08 on NAT).

### Two special patterns to know
- **Loopback: 127.0.0.1** — a device's address for **itself**. Pinging it tests your own network software. The whole `127.0.0.0/8` block is loopback.
- **APIPA: 169.254.x.x** — **Automatic Private IP Addressing**. If a Windows device asks for an address and **no DHCP** answers, it gives *itself* one from `169.254.0.0/16`. Seeing a `169.254` address is a clue that DHCP failed (you'll learn DHCP in Module 09).

> **The big idea:** An IPv4 address is **32 bits** in a **network** part + a **host** part. The first octet sets its **class** (A: 1–126, B: 128–191, C: 192–223). Three **private** ranges stay inside a network (**10**, **172.16–31**, **192.168**). **127.0.0.1** is loopback; **169.254.x.x** is APIPA (DHCP failed).

💡 **Tip:** Memory hook for private ranges: "**10**, **172 dot 16**, **192 dot 168**." Say it until it's automatic — it's on the exam.

⚠️ **Watch out:** `172.16–172.31` are private, but `172.32` and `172.15` are **not**. The private Class B block is only `172.16.0.0/12`.

---

## 4. Real-world analogy

> **"An IP address is a phone number: an area code (network) plus a line number (host)."**

| Phone | IP address |
|-------|------------|
| Area code (617) | **Network** portion |
| Line number (555-0142) | **Host** portion |
| Internal office extensions | **Private** ranges (stay inside) |
| A public listed number | **Public** IP (unique on the internet) |
| Calling your own desk phone | **Loopback** (127.0.0.1) |
| A "no line assigned" placeholder | **APIPA** (169.254.x.x) |

Extensions repeat in every office building (like private IPs repeat in every home). A public number is unique — that's what the outside world dials.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Network portion** | | The part of an IP address that says which network. |
| **Host portion** | | The part of an IP address that says which device on that network. |
| **Address class** | | The A–E grouping of IPv4 addresses, decided by the first octet. |
| **Private IP address** | | An address from a reserved private range; used inside a network, not on the internet. |
| **Public IP address** | | An address that is unique on the internet and routable there. |
| **Loopback address** | loop-back | 127.0.0.1 — the address a device uses to reach itself. |
| **APIPA** | uh-PIP-uh | Automatic Private IP Addressing: a 169.254.x.x address a device gives itself when no DHCP answers. |

---

## 6. ASCII diagram

```
   ONE IPv4 ADDRESS = 32 BITS = 4 OCTETS

        NETWORK part            HOST part
      ┌───────────────┐      ┌───────────┐
        192 . 168 . 1    .        10
     (which network)          (which device)

   CLASS by first octet:
     A: 1–126     B: 128–191     C: 192–223     D: 224–239 (multicast)   E: 240–255
     (127 = loopback, skipped)

   PRIVATE ranges (stay inside a network):
     10.0.0.0    – 10.255.255.255      (10.0.0.0/8)     Class A
     172.16.0.0  – 172.31.255.255      (172.16.0.0/12)  Class B
     192.168.0.0 – 192.168.255.255     (192.168.0.0/16) Class C

   SPECIAL:  127.0.0.1 = loopback (myself)    169.254.x.x = APIPA (no DHCP)
```

_First octet → class. Three private blocks stay inside. 127 = self; 169.254 = DHCP failed._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-02-classes-and-private-01.svg` (created and stored in this module's `assets/`)
> **Shows:** an IPv4 address split into network vs. host, a class table (A/B/C/D/E by first octet), and the three private ranges plus loopback and APIPA callouts.
> **Key elements & labels:** 32 bits = 4 octets; network portion / host portion; class ranges 1–126 / 128–191 / 192–223 / 224–239 / 240–255; private blocks 10, 172.16–31, 192.168; 127.0.0.1 loopback; 169.254 APIPA.
> **Color meaning:** each class/range is labeled in text; do not rely on color alone to tell them apart.
> **Flow direction:** top address split; class table left; private/special ranges right.
> **Alt text (required):** "An IPv4 address of 32 bits shown split into a network portion and a host portion, like a phone area code and line number. A table lists classes by first octet: Class A 1 to 126, Class B 128 to 191, Class C 192 to 223, Class D 224 to 239 for multicast, Class E 240 to 255 reserved, with 127 noted as loopback. A panel lists the three private ranges — 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 — and two special patterns: 127.0.0.1 as loopback and 169.254.x.x as APIPA when no DHCP answers."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-02-router-dhcp-range-01.jpg`
> A home router admin page showing its DHCP range (e.g., 192.168.1.x). Alt text: "A home router page showing it hands out addresses in the private 192.168.1.x range."
>
> **Photo 2** — `img-08-02-ipconfig-apipa-01.jpg`
> An `ipconfig` showing a 169.254 address when DHCP is unavailable. Alt text: "An ipconfig result showing a 169.254 APIPA address, a sign that DHCP did not answer."

---

## 9. Hands-on lab

**Goal:** identify your own IP's **class** and confirm it's in a **private** range; then test **loopback**.
**Why:** recognizing address types on your own machine makes the patterns stick.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** You only **read** settings and run a harmless `ping` to yourself. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** (Start → type `cmd` → Enter).
2. Type `ipconfig` and press **Enter**. Read your **IPv4 Address**.
3. Look at the **first octet** and use the class table to name the class (A/B/C).
4. Check it against the private ranges (is it `10.x`, `172.16–31.x`, or `192.168.x`?).
5. Now test **loopback** — type this exact command and press **Enter**:

   ```
   ping 127.0.0.1
   ```

### 9b. Expected results

- Your IPv4 address will almost certainly be **private** (most homes use `192.168.x.x` or `10.x.x.x`).
- The loopback ping should get **replies** from `127.0.0.1` (your own machine answering itself).

You'll see loopback output like this (yours will look similar):

```
   Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
   Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
```

- ✅ **You did it if:** you named your address's class and range, and loopback replied.

### 9c. Verify it worked

1. Say: "My IP is Class ___, and it's private because it starts with ___."
2. Explain why `ping 127.0.0.1` working proves your own network software is fine.

### 9d. Reset / roll back

Nothing changed — you read settings and pinged yourself. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking `172.x` is all private | You misclassify addresses | Only `172.16`–`172.31` is private |
| Forgetting 127 is loopback | You count it as Class A | 127.0.0.0/8 is reserved for loopback |
| Reading a `169.254` as normal | You miss a DHCP failure | 169.254.x.x = APIPA; DHCP didn't answer |
| Mixing up class ranges | Wrong class on the exam | A: 1–126 · B: 128–191 · C: 192–223 |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Your IP is `169.254.x.x` | No DHCP answer (APIPA) | Check the cable/Wi-Fi; renew the address (Module 09 covers DHCP) |
| `ping 127.0.0.1` fails | Network software problem | Restart the network adapter; this rarely fails |
| IP starts with `172` but seems public | It may be outside 16–31 | Re-check: only `172.16`–`172.31` is private |

---

## 12. Lesson summary

- An IPv4 address is **32 bits** = **four octets**, split into a **network** part and a **host** part.
- **Class** comes from the first octet: **A** 1–126, **B** 128–191, **C** 192–223 (D = multicast, E = reserved).
- Three **private** ranges stay inside a network: **10.0.0.0/8**, **172.16.0.0/12**, **192.168.0.0/16**.
- **127.0.0.1** is **loopback** (yourself); **169.254.x.x** is **APIPA** (DHCP failed).

**One-sentence recap:** An IPv4 address is 32 bits of network-plus-host, grouped by first-octet class, with three private ranges (10, 172.16–31, 192.168) plus loopback (127.0.0.1) and APIPA (169.254.x.x) to recognize on sight.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-02-fill-in-the-blank.md`
2. **Matching** — `wb-08-02-matching.md`
3. **Label the diagram** — `wb-08-02-label-the-diagram.md` (structure + classes)
4. **Short answer** — `wb-08-02-short-answer.md`
5. **Hands-on observation** — `wb-08-02-hands-on-observation.md` (classify your IP)
6. **Vocabulary review** — `wb-08-02-vocabulary-review.md`
7. **Reflection** — `wb-08-02-reflection.md`

**Quick written warm-up (do this now):** Name the three private ranges from memory.

____________ · ____________ · ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-02-knowledge-check.md`.)

1. How many bits are in an IPv4 address? *(Objective: structure)*
   - A) 8
   - B) 16
   - C) 32
   - D) 64

2. An IP address splits into which two parts? *(Objective: structure)*
   - A) header and trailer
   - B) network portion and host portion
   - C) source and speed
   - D) class and cable

3. A first octet of **10** is which class? *(Objective: classes)*
   - A) Class A
   - B) Class B
   - C) Class C
   - D) Class D

4. Which range is a **private** range? *(Objective: private)*
   - A) 11.0.0.0/8
   - B) 172.16.0.0/12
   - C) 200.1.1.0/24
   - D) 8.8.8.0/24

5. What is **127.0.0.1**? *(Objective: special)*
   - A) a public address
   - B) the loopback address (yourself)
   - C) an APIPA address
   - D) a Class C network

6. **True or false —** All 172.x.x.x addresses are private. Explain in one sentence. *(Objective: private)*

7. Seeing a **169.254.x.x** address usually means… *(Objective: APIPA)*
   - A) the fastest possible network
   - B) DHCP did not answer (APIPA)
   - C) a loopback test
   - D) a public web server

8. **Matching —** write the letter next to each first octet. *(Objective: classes)*
   - ___ 45 &nbsp;&nbsp; ___ 150 &nbsp;&nbsp; ___ 200
   - A) Class C &nbsp; B) Class A &nbsp; C) Class B

9. Fill in the blank: An IPv4 address is made of four ____________, each 8 bits. *(Objective: structure)*

10. **Scenario —** A laptop shows `169.254.10.5` and can't reach the internet. What does that address tell you, and what likely went wrong? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-02-ipv4-structure-classes.md`. In brief:

- **Objective in one line:** learners describe IPv4 structure (32 bits, network/host) and recognize classes, private ranges, loopback, and APIPA.
- **Common misconceptions:** all 172 is private; 127 is Class A; 169.254 is normal. Correct all three.
- **Pacing:** ~28 min. Drill the three private ranges as a chant; the classify-your-IP lab cements it.
- **How CompTIA tests it:** "what kind of address is this?" — class by first octet, private-range recognition, loopback, APIPA.
- **Accuracy note:** ranges stated are exact (RFC 1918: 10/8, 172.16/12, 192.168/16; loopback 127/8; APIPA 169.254/16). `ipconfig`/`ping 127.0.0.1` are real; shown output is representative.
- **Extension idea:** classless addressing preview (why classes gave way to CIDR) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — IPv4 structure, classes, private ranges**
>
> - **32 bits** = **4 octets**; splits into **network** + **host**.
> - **Class by first octet:** A **1–126** · B **128–191** · C **192–223** · D **224–239** (multicast) · E **240–255**.
> - **Private ranges:** **10.0.0.0/8** · **172.16.0.0/12** (only 16–31) · **192.168.0.0/16**.
> - **127.0.0.1** = loopback (yourself). **169.254.x.x** = APIPA (no DHCP).
> - Memory hook: "**10, 172-dot-16, 192-dot-168.**"
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Network portion** — The part of an IP address that says which network.
- **Host portion** — The part of an IP address that says which device on that network.
- **Address class** — The A–E grouping of IPv4 addresses, decided by the first octet.
- **Private IP address** — An address from a reserved private range; used inside a network, not on the internet.
- **Public IP address** — An address that is unique on the internet and routable there.
- **Loopback address** — 127.0.0.1 — the address a device uses to reach itself.
- **APIPA** — Automatic Private IP Addressing: a 169.254.x.x address a device gives itself when no DHCP answers.

---

## 19. Homework

- **Practice:** Write 10 random IP addresses and label each: class, and private or public.
- **Spaced review:** Redo the Lesson 08-01 flashcards on logical vs. physical addresses.
- **Preview:** Next lesson we make the network/host split exact — meet the **subnet mask**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I recite the three private ranges? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I know an IPv4 address is 32 bits = four octets.
- [ ] I can explain the network portion vs. the host portion.
- [ ] I can name the class from the first octet (A/B/C).
- [ ] I can list the three private ranges and spot loopback and APIPA.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: subnet masks.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L02** — "IPv4 Structure, Classes, and Private Ranges" · Module 08 · Unit 5_
