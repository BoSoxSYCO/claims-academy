---
id: NA-M14-L05
module: 14
lesson: 05
title: "Troubleshooting Connectivity (Layers 1–3)"
unit: 11
objective_ids: ["5.2", "5.3"]
reading_level_target: 7
status: Published
est_minutes: 35
equipment_tier: E2
prerequisites: ["NA-M14-L01", "NA-M14-L02", "NA-M14-L04", "NA-M05-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 05] Troubleshooting Connectivity (Layers 1–3)

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~35 min · **Equipment:** E2 (your laptop, cables, switch)
> **You'll need first:** the OSI model (05-01), the method (14-01), and the tools (14-02, 14-04).

You have the method (14-01) and the tools (14-02 to 14-04). Now we put them together to fix the most common problem: "no connection." The trick is to work in order — from the bottom of the OSI model up. Most faults hide in the bottom three layers. This lesson gives you a ladder to climb.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **bottom-up** and **top-down** troubleshooting.
- [ ] Check **Layer 1** (physical) faults first, using a **link light** and a cable tester.
- [ ] Check **Layer 2** (data link) faults, like a **duplex mismatch** or VLAN.
- [ ] Check **Layer 3** (network) faults, like a bad IP or an **APIPA** address.

---

## 2. Introduction — why this matters

"The internet is down." Where do you even start? Random clicking wastes time. A layer ladder gives you a clear path.

The **OSI model** (from Module 05) has seven layers. Connectivity problems almost always sit in the bottom three: **Layer 1 (Physical)**, **Layer 2 (Data Link)**, and **Layer 3 (Network)**. So we check those, in order, from the bottom up.

Why bottom-up? Because most faults are physical — a loose cable, a dead port, no link light. Checking those first is fast and cheap. Only when Layer 1 is fine do we climb to Layer 2, then Layer 3.

This is how you form and test theories (steps 2–3 of the method). The exam expects you to know which layer a symptom belongs to.

🎯 **Exam tip:** For a "no connection" problem, start at Layer 1. Is it plugged in? Is the link light on?

🔧 **Lab link:** You'll walk your own laptop up the ladder, from cable to IP address.

---

## 3. Simple explanation

There are two directions to troubleshoot the OSI layers:

- **Bottom-up troubleshooting** starts at Layer 1 (physical) and climbs up. Best for "no connection" — most faults are physical.
- **Top-down troubleshooting** starts at Layer 7 (the app) and works down. Best when the app is the suspect.

For connectivity, go **bottom-up**. Here is the ladder.

### Layer 1 — Physical (check this first)

Is it physically connected?

- Is the cable plugged in at both ends? Reseat it.
- Is the **link light** on? A **link light** is the small LED on a port that glows when a live link is present. No light usually means a Layer 1 problem.
- Is the cable good? Test it with a **cable tester** (from 14-04). A break is an open or short.
- Is it the right cable, and is the port enabled?

Most problems stop here. Fix Layer 1 before you touch anything else.

### Layer 2 — Data Link (the local link)

If Layer 1 is fine, check the local link.

- Is the device on the right **VLAN** and switch port?
- Is there a **duplex mismatch**? A **duplex mismatch** is when one side is set to full duplex and the other to half. It causes errors and slow speeds, not a full outage.
- Are there lots of errors on the port? That hints at a Layer 1/2 issue.

### Layer 3 — Network (addresses and routing)

If Layers 1 and 2 are fine, check addressing.

- Run **ipconfig** (from 14-02). Do you have a real IP address?
- An address like 169.254.x.x means **APIPA** — the device gave itself an address because no DHCP answered. That's a Layer 3 clue.
- Is the subnet mask right? Is there a **default gateway**?
- **ping** your gateway. If that works, your local Layer 3 is fine; the problem is farther out.

> **The big idea:** Troubleshoot connectivity **bottom-up** through the OSI layers. **Layer 1 (physical)** first: cable plugged in, **link light** on, cable good (cable tester). **Layer 2 (data link)**: right VLAN/port, no **duplex mismatch**. **Layer 3 (network)**: a real IP (not **APIPA** 169.254), right subnet, and a reachable **default gateway** (ping it). Fix the lowest broken layer first.

💡 **Tip:** A 169.254 address is a giant clue — the device isn't getting an IP from DHCP.

⚠️ **Watch out:** Don't start at Layer 3 (IP settings) when the cable is unplugged. You'll waste time. Check Layer 1 first.

---

## 4. Real-world analogy

> **"Fixing connectivity is like finding why a lamp won't light — check the plug first."**

| Lamp problem | Network layer |
|--------------|---------------|
| Is it plugged in? Bulb seated? | Layer 1 — physical (cable, link light) |
| Is the wall switch/wiring okay? | Layer 2 — the local link (VLAN, duplex) |
| Is the fuse/breaker (the supply) okay? | Layer 3 — addressing (IP, gateway) |

You don't check the fuse box before you check the plug. Same with networks — bottom-up.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Bottom-up troubleshooting** | | Starting at Layer 1 and climbing up the OSI layers. |
| **Top-down troubleshooting** | | Starting at Layer 7 (the app) and working down. |
| **Link light** | | The LED on a port that glows when a live link is present. |
| **Duplex mismatch** | DOO-plex | One side set to full duplex, the other to half — causes errors. |
| **APIPA** | a-PIP-a | A 169.254.x.x address a device self-assigns when no DHCP answers. |

---

## 6. ASCII diagram

```
   CLIMB THE LADDER (bottom-up)

   L3  NETWORK    real IP? (not 169.254/APIPA) · subnet · ping the gateway
        ^
   L2  DATA LINK  right VLAN/port · no duplex mismatch · few errors
        ^
   L1  PHYSICAL   plugged in? · LINK LIGHT on? · cable good (tester)?   <- START HERE
```

_Fix the lowest broken layer first. Most faults are Layer 1._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-05-layers-1-3-ladder-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a three-rung ladder, Layer 1 at the bottom (start) up to Layer 3 at the top, each rung listing its checks and tools, with an arrow showing the bottom-up climb.
> **Key elements & labels:** L1 Physical (plugged in, link light, cable tester) marked "start here"; L2 Data Link (VLAN/port, duplex mismatch, errors); L3 Network (ipconfig, real IP vs 169.254 APIPA, subnet, ping gateway).
> **Color meaning:** each rung is titled with its layer number and name in words; "start here" is text, not color-coded.
> **Flow direction:** bottom to top, with an upward arrow.
> **Alt text (required):** "A three-rung troubleshooting ladder climbed from the bottom up. The bottom rung, Layer 1 Physical, marked start here: check the cable is plugged in at both ends, check the link light is on, and test the cable with a cable tester. The middle rung, Layer 2 Data Link: check the device is on the right VLAN and switch port, check for a duplex mismatch where one side is full and the other half, and check for errors on the port. The top rung, Layer 3 Network: run ipconfig to confirm a real IP address rather than a 169.254 APIPA address that means no DHCP answered, check the subnet mask, and ping the default gateway. A note says fix the lowest broken layer first, because most faults are physical."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-05-link-lights-01.jpg`
> Switch port LEDs. Alt text: "A switch's port LEDs (link lights); a lit LED shows a live Layer 1 link, and a dark one often means a physical problem."
>
> **Photo 2** — `img-14-05-ipconfig-apipa-01.jpg`
> ipconfig showing a 169.254 address. Alt text: "An ipconfig result showing a 169.254 APIPA address, a Layer 3 clue that no DHCP server answered (actual value varies)."

---

## 9. Hands-on lab

**Goal:** walk your own laptop up the ladder, Layer 1 → Layer 3.
**Why:** practicing the order builds the habit that solves real outages fast.

**You will need**
- Your Windows laptop (wired if possible), online. Estimated time: 20 min.

⚠️ **Before you start (safety):** you only look and run read-only commands. Reseat a cable gently; change no switch settings.

### 9a. Step-by-step instructions

1. **Layer 1:** Look at your cable and port. Is it seated? Is the **link light** on? (On Wi-Fi, is the Wi-Fi icon connected?)
2. **Layer 1:** If you have a spare cable and a cable tester, test the cable (from 14-04). Otherwise, note that you would.
3. **Layer 2:** If wired, note which switch port and VLAN you're on (if known). Skip if not applicable.
4. **Layer 3:** Open **cmd** and run `ipconfig`. Read your **IPv4 Address**.
5. **Layer 3:** Is it a real address, or a 169.254.x.x (APIPA)? A 169.254 means no DHCP answered.
6. **Layer 3:** Run `ping` on your **default gateway** (the router's IP from ipconfig). Did it reply?

### 9b. Expected results

- Layer 1: link light on (or Wi-Fi connected).
- Layer 3: a real IPv4 address (not 169.254), and a reply from your gateway.

- ✅ **You did it if:** you climbed all three layers and know which layer each check belongs to.

> ⚠️ Exact IPs and replies vary by network. A 169.254 address is a real "no DHCP" symptom, but your normal address will differ. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Say which layer a "no link light" problem belongs to (Layer 1).
2. Say what a 169.254 address tells you (no DHCP — a Layer 3 clue).

### 9d. Reset / roll back

Nothing changed — you looked and ran read-only commands. Reseat any cable you moved.

> 🔧 **Home-lab continuity:** keep your layer-ladder notes. You'll use them in the worked scenarios of Lesson 14-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Starting at Layer 3 first | You miss an unplugged cable | Check Layer 1 first — bottom-up |
| Ignoring the link light | You chase the wrong layer | No light = Layer 1 problem |
| Missing a 169.254 address | You blame the wrong thing | 169.254 = APIPA = no DHCP (Layer 3) |
| Ignoring a duplex mismatch | Slow, error-filled link | Match speed/duplex on both sides |

---

## 11. Troubleshooting

| Symptom | Likely layer | Try this |
|---------|--------------|----------|
| No link light at all | Layer 1 | Reseat/replace the cable; check the port |
| Link is up but very slow, many errors | Layer 2 | Check for a duplex mismatch; check the port |
| IP is 169.254.x.x | Layer 3 | No DHCP — check the DHCP server/connection |
| Have an IP but can't reach the gateway | Layer 3 | Check subnet mask and gateway address |

---

## 12. Lesson summary

- Troubleshoot connectivity **bottom-up** through the OSI layers.
- **Layer 1 (physical):** plugged in, **link light** on, cable good — check first.
- **Layer 2 (data link):** right VLAN/port, no **duplex mismatch**.
- **Layer 3 (network):** real IP (not **APIPA** 169.254), right subnet, reachable **default gateway**.

**One-sentence recap:** For "no connection," climb the OSI ladder from Layer 1 up — check the cable and link light first, then the local link, then the IP and gateway.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-05-fill-in-the-blank.md`
2. **Matching** — `wb-14-05-matching.md`
3. **Label the diagram** — `wb-14-05-label-the-diagram.md` (the layer ladder)
4. **Short answer** — `wb-14-05-short-answer.md`
5. **Hands-on observation** — `wb-14-05-hands-on-observation.md` (climb the ladder)
6. **Vocabulary review** — `wb-14-05-vocabulary-review.md`
7. **Reflection** — `wb-14-05-reflection.md`

**Quick written warm-up (do this now):** Which layer do you check first? What does a 169.254 address mean?

Check first: ____________  169.254 means: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-05-knowledge-check.md`.)

1. For a "no connection" problem, which layer do you check first? *(Objective: approach)*
   - A) Layer 7 (application)
   - B) Layer 1 (physical)
   - C) Layer 3 (network)
   - D) Layer 4 (transport)

2. **Bottom-up** troubleshooting starts at… *(Objective: approach)*
   - A) the app and works down
   - B) Layer 1 and climbs up
   - C) the middle
   - D) a random layer

3. A **link light** that is off usually means a problem at… *(Objective: L1)*
   - A) Layer 1 (physical)
   - B) Layer 3 (network)
   - C) Layer 7 (application)
   - D) the DNS server

4. An IP address of 169.254.x.x means… *(Objective: L3)*
   - A) a normal address
   - B) APIPA — no DHCP answered
   - C) the gateway is fine
   - D) a duplex mismatch

5. A **duplex mismatch** causes… *(Objective: L2)*
   - A) a total outage
   - B) errors and slow speed
   - C) a new IP address
   - D) a link light

6. **True or false —** You should check IP settings (Layer 3) before checking whether the cable is plugged in. Explain in one sentence. *(Objective: approach)*

7. Which tool confirms your IP address and default gateway? *(Objective: L3)*
   - A) cable tester
   - B) ipconfig
   - C) toner probe
   - D) Wi-Fi analyzer

8. **Matching —** match each check to its OSI layer. *(Objective: layers)*
   - ___ Link light / cable &nbsp;&nbsp; ___ VLAN / duplex &nbsp;&nbsp; ___ IP / gateway
   - A) Layer 2 (data link)
   - B) Layer 3 (network)
   - C) Layer 1 (physical)

9. Fill in the blank: After confirming Layers 1 and 2, you ____________ the default gateway to test Layer 3. *(Objective: L3)*

10. **Scenario —** A PC has a link light and is on the right VLAN, but `ipconfig` shows 169.254.10.5. Which layer is the problem, and what is the likely cause? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-05-connectivity.md`. In brief:

- **Objective in one line:** learners troubleshoot connectivity bottom-up through OSI Layers 1–3, matching each symptom and tool to a layer.
- **Common misconceptions:** "start at the IP settings"; "a link light is Layer 3"; "169.254 is a normal address." Correct each.
- **Pacing:** ~35 min. The lamp/plug analogy carries it; the climb-the-ladder lab makes the order a habit.
- **How CompTIA tests it:** which layer a symptom belongs to; bottom-up vs. top-down; 169.254 = APIPA = no DHCP; duplex mismatch = slow/errors.
- **Accuracy note (Prime Directive #7):** ipconfig and ping are real; the 169.254 APIPA symptom is real and teachable; exact addresses/replies are examples that vary, marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** top-down and divide-and-conquer approaches; interface counters/error stats; when to escalate a Layer 3 routing issue.

---

## 17. Cheat sheet

> **Quick reference — Connectivity by layer (bottom-up)**
>
> | Layer | Check | Tools |
> |-------|-------|-------|
> | **L1 Physical** (start) | plugged in? link light? cable good? | eyes, cable tester |
> | **L2 Data Link** | right VLAN/port? duplex mismatch? errors? | switch, port stats |
> | **L3 Network** | real IP (not 169.254)? subnet? gateway? | `ipconfig`, `ping` |
>
> - Go **bottom-up** for "no connection" — most faults are physical.
> - **169.254.x.x = APIPA = no DHCP** (a Layer 3 clue).
> - **Duplex mismatch** = slow + errors, not a full outage.
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Bottom-up troubleshooting** — Starting at OSI Layer 1 (physical) and climbing up the layers.
- **Top-down troubleshooting** — Starting at OSI Layer 7 (the application) and working down.
- **Link light** — The LED on a port that glows when a live link is present.
- **Duplex mismatch** — When one side of a link is set to full duplex and the other to half, causing errors and slow speed.

(The OSI model was defined in 05-01, Duplex in 06-05, APIPA in 08-02, default gateway/VLAN earlier, and the CLI/hardware tools in 14-02 and 14-04 — all reused here.)

---

## 19. Homework

- **Practice:** Run `ipconfig` on your devices. Confirm none show a 169.254 address (if one does, its DHCP failed).
- **Spaced review:** Say which OSI layer each common symptom belongs to, from memory.
- **Preview:** Next, **Lesson 14-06 — Troubleshooting names, speed, and wireless**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Have you ever "fixed" a network by reseating a cable? Which layer was that? _______________________
3. What was hardest — the layer order, or spotting a 169.254 address?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain bottom-up and top-down troubleshooting.
- [ ] I check Layer 1 (physical) faults first.
- [ ] I can spot Layer 2 faults like a duplex mismatch.
- [ ] I can read Layer 3 clues like a 169.254 APIPA address.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 14-06 (names, speed, and wireless).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L05** — "Troubleshooting Connectivity (Layers 1–3)" · Module 14 · Unit 11_
