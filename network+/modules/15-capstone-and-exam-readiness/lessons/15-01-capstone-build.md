---
id: NA-M15-L01
module: 15
lesson: 01
title: "Capstone Project: Build the Whole Home Lab"
unit: 12
objective_ids: ["1.1", "2.1", "2.3", "5.3"]
reading_level_target: 7
status: Published
est_minutes: 45
equipment_tier: E3
prerequisites: ["NA-M14-L07", "NA-M11-L01", "NA-M08-L02", "NA-M04-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 15 · Lesson 01] Capstone Project: Build the Whole Home Lab

> **Unit:** Unit 12 — Capstone & Exam Readiness · **Time:** ~45 min · **Equipment:** E3 (full lab)
> **You'll need first:** everything so far — cabling, switching, IP addressing, and the troubleshooting method.

Welcome to the capstone. This is where it all comes together. You will build the whole home lab from scratch, one stage at a time. Then you will prove it works, layer by layer. If a step breaks, you will fix it with the method you already know. By the end, you will have a working network you built with your own hands.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Wire a home lab: **router**, **switch**, laptop, and **Ethernet** cables.
- [ ] Confirm each layer works, from the **link light** up to a website.
- [ ] Read your laptop's settings with **ipconfig** and confirm **DHCP** gave it an address.
- [ ] Fix any stage that fails using the seven-step method.
- [ ] Write a short build record so you can rebuild it again.

---

## 2. Introduction — why this matters

You have learned a lot of pieces. Cables. Switches. IP addresses. DHCP. DNS. The OSI layers. The troubleshooting method. A real network is all of those pieces working together at once.

This capstone joins them. You build the network, then test it from the bottom up. Each test proves one more layer is healthy. This is exactly how a real technician brings a new network to life.

It is also the best exam practice there is. The exam asks you to reason across all five domains. Building the whole thing makes those connections stick.

🎯 **Exam tip:** The exam loves "bottom-up" thinking — check the cable before the settings. This build trains that habit.

🔧 **Lab link:** This *is* the lab. You will build and verify the full home network.

---

## 3. Simple explanation

You will build in nine stages. Each stage is small. Test after each one before you move on.

### The nine stages

1. **Gather** your gear and name each part.
2. **Plan** the layout — draw a simple map.
3. **Wire** the router to the switch, and the laptop to the switch.
4. **Power up** and check the **link lights** (Layer 1 — the physical link).
5. **Get an address** — confirm **DHCP** gave your laptop an IP with **ipconfig** (Layer 3).
6. **Test by layer** — **ping** the **default gateway**, then the internet, then a name.
7. **Check the switch** — confirm it is alive and passing traffic.
8. **Troubleshoot** anything that failed, using the seven-step method.
9. **Document** the final build so you can do it again.

> **The big idea:** Build a little, test a little. Prove each layer works before you trust the next one. If a test fails, you know the problem is at that layer or below — not above it.

💡 **Tip:** Do not rush to the internet test. If the link light is off, no setting will help yet.

⚠️ **Watch out:** Only change switch settings you understand. On a shared switch, a wrong change can lock others out.

---

## 4. Real-world analogy

> **"Building the lab is like plumbing a house before you turn on the taps."**

| Plumbing step | Network stage |
|---------------|---------------|
| Lay the pipes | Run the cables |
| Open the main valve | Power on the gear |
| Check each faucet | Ping each layer |
| Find the leak | Troubleshoot the failed stage |
| Mark the shutoffs on a map | Document the build |

A plumber tests one faucet at a time. You test one layer at a time. Both find leaks fast because they check in order.

---

## 5. Vocabulary

> This is a capstone — it reuses terms from across the course. A quick refresher:

| Term | Plain-language meaning |
|------|------------------------|
| **Switch** | A box that connects wired devices on the same local network. |
| **Router** | The device that connects your local network to the internet. |
| **DHCP** | The service that hands your laptop its IP settings automatically. |
| **Default gateway** | The router address your laptop sends internet traffic to. |
| **Link light** | The small LED that glows when a cable has a live connection. |

---

## 6. ASCII diagram

```
   YOUR HOME LAB (build order, bottom to top)

        INTERNET
           |
        [ ROUTER ]  <- gives out addresses (DHCP), way to the internet
           |  (uplink cable)
        [ SWITCH ]  <- connects your wired devices
           |  (patch cable)
        [ LAPTOP ]  <- where you run ipconfig, ping, nslookup

   TEST ORDER:
   link light (L1) -> IP from DHCP (L3) -> ping gateway -> ping 8.8.8.8 -> load a name (DNS)
```

_Build from the bottom. Test from the bottom. The lowest healthy layer holds up the ones above it._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-15-01-capstone-build-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the home-lab stack (internet → router → switch → laptop) beside a numbered nine-stage build-and-test ladder.
> **Key elements & labels:** left side, the wired stack with labeled devices and cables (uplink router→switch, patch switch→laptop); right side, a ladder of nine stages (gather, plan, wire, power/link light, get address/DHCP, test by layer, check switch, troubleshoot, document); a "test order" arrow: link light → DHCP address → ping gateway → ping internet → resolve a name.
> **Color meaning:** every device and stage is labeled in words; nothing depends on color alone.
> **Flow direction:** stack bottom-to-top on the left; stages top-to-bottom on the right.
> **Alt text (required):** "On the left, a home-lab stack: the internet connects down to a router, the router connects by an uplink cable to a switch, and the switch connects by a patch cable to a laptop. Each device and cable is labeled. On the right, a numbered nine-stage build ladder: gather the gear, plan the layout, wire the devices, power up and check the link lights at Layer 1, confirm DHCP gave the laptop an IP with ipconfig at Layer 3, test by layer by pinging the default gateway then the internet then a name, check the switch is alive, troubleshoot any failed stage with the seven-step method, and document the build. A test-order arrow reads: link light, then DHCP address, then ping gateway, then ping 8.8.8.8, then resolve a name with DNS."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-15-01-lab-wired-01.jpg`
> The finished lab on a desk. Alt text: "A home lab on a desk: a home router, a Dell PowerConnect switch, and a laptop, joined by Ethernet cables with green link lights showing on the switch ports."
>
> **Photo 2** — `img-15-01-link-lights-01.jpg`
> A close-up of switch port lights. Alt text: "A close-up of a switch's front panel showing lit link lights on the ports in use, the first sign that the physical layer is healthy."

---

## 9. Hands-on lab

**Goal:** build the full home lab and verify it works, one layer at a time.
**Why:** a working, self-built network is proof you have the skills — and it cements every domain.

**You will need**
- A home router with internet, a switch (the Dell PowerConnect 3424), a Windows laptop, and two known-good **Ethernet** cables. Estimated time: 30–40 min.

⚠️ **Before you start (safety):** the switch may be shared. Do not erase its settings or change ports you were not told to use. When in doubt, only add your one cable and test.

### 9a. Step-by-step instructions

**Stage 1 — Gather and name your gear.**
1. Set the router, switch, and laptop on the desk.
2. Say out loud what each one does. Router = door to the internet. Switch = connects wired devices. Laptop = your test tool.

**Stage 2 — Plan the layout.**
3. On paper, draw: internet → router → switch → laptop.
4. Mark which switch port you will use for the router uplink, and which for the laptop.

**Stage 3 — Wire it.**
5. Plug one cable from a router LAN port to a switch port. This is the uplink.
6. Plug the second cable from another switch port to the laptop.

**Stage 4 — Power up and check link lights (Layer 1).**
7. Power on the router, then the switch, then the laptop.
8. Look at the two switch ports you used. You should see a **link light** on each.

> ✅ Expected: a link light on the uplink port and the laptop port. No light means a Layer 1 problem — check the cable and the port.

**Stage 5 — Get an address from DHCP (Layer 3).**
9. On the laptop, open Command Prompt.
10. Type this exact command and press Enter:

```
ipconfig
```

11. Read the **IPv4 Address** and **Default Gateway** lines.

> ✅ Expected: a real private address (like `192.168.x.x`) and a gateway. A `169.254.x.x` address means **APIPA** — DHCP did not answer. **[TO VERIFY ON HARDWARE]**

**Stage 6 — Test by layer.**
12. Ping your **default gateway** (use the address from step 11):

```
ping 192.168.1.1
```

13. Ping the internet by IP:

```
ping 8.8.8.8
```

14. Test a name (DNS):

```
nslookup example.com
```

> ✅ Expected: replies from the gateway, replies from 8.8.8.8, and a resolved address for the name. Each success proves one more layer. Every shown value is an example. **[TO VERIFY ON HARDWARE]**

**Stage 7 — Check the switch is alive.**
15. Confirm both link lights are still on and steady.
16. If your switch shows port activity lights, watch them blink as traffic flows.

**Stage 8 — Troubleshoot any failed stage.**
17. If a stage failed, stop there. Use the seven-step method from Lesson 14-01.
18. Fix the lowest broken layer first, then re-test upward.

**Stage 9 — Document the build.**
19. Write down: what you plugged where, the laptop's IP and gateway, and that all tests passed.

### 9b. Expected results

- Two link lights on. A real IP from DHCP. Successful pings to the gateway and the internet. A name that resolves.

- ✅ **You did it if:** every test from link light to name passed, and you wrote a short build record.

> ⚠️ Every address and reply shown here is a varying example. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Open a browser and load a website by name. If it loads, all layers are healthy.
2. Read your build record. Could someone else rebuild it from your notes?

### 9d. Reset / roll back

1. To undo: unplug your one laptop cable and your uplink cable.
2. Leave any shared switch settings exactly as you found them.

> 🔧 **Home-lab continuity:** keep this build wired. Later capstone lessons and practice exams assume a working lab.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Testing the internet before the link light | You chase settings while the cable is dead | Check Layer 1 first — the link light |
| Ignoring a 169.254 address | Nothing reaches the internet | That's APIPA — fix DHCP or reseat the cable |
| Changing shared switch settings | You may lock others out | Only add your cable; leave settings alone |
| No build record | You can't rebuild it later | Write down ports, IP, and results |

---

## 11. Troubleshooting

| The symptom | First theory | First check |
|-------------|--------------|-------------|
| No link light | Bad cable or port (Layer 1) | Swap the cable; try another port |
| `169.254.x.x` address | No DHCP (Layer 3) | Reseat cable; check router; renew |
| Gateway won't ping | Local path problem | Confirm IP, gateway, and cabling |
| `8.8.8.8` pings but names fail | DNS | `nslookup`, then `ipconfig /flushdns` |

---

## 12. Lesson summary

- Build in stages: gather, plan, wire, power, address, test, check, fix, document.
- Test from the bottom up: **link light** → IP from **DHCP** → **ping** gateway → ping internet → resolve a name.
- A `169.254` address means **APIPA** — no DHCP answered.
- Fix the lowest broken layer first, then re-test upward.
- Always finish by documenting the build.

**One-sentence recap:** Build the home lab one stage at a time, prove each layer works before trusting the next, and write down what you built.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-15-01-fill-in-the-blank.md`
2. **Matching** — `wb-15-01-matching.md`
3. **Label the diagram** — `wb-15-01-label-the-diagram.md` (the build stack)
4. **Short answer** — `wb-15-01-short-answer.md`
5. **Hands-on observation** — `wb-15-01-hands-on-observation.md` (record your real build)
6. **Vocabulary review** — `wb-15-01-vocabulary-review.md`
7. **Reflection** — `wb-15-01-reflection.md`

**Quick written warm-up (do this now):** What is the very first thing you check after you power on — a setting, or the link light?

Answer: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-15-01-knowledge-check.md`.)

1. In what order do you test a new build? *(Objective: apply)*
   - A) Website first, then the cable
   - B) Link light, then IP, then ping, then a name
   - C) DNS first, then power
   - D) Any order works

2. After powering on, your first check is… *(Objective: apply)*
   - A) the link light
   - B) a website
   - C) the switch's serial number
   - D) the DNS server

3. `ipconfig` shows **169.254.10.9**. This means… *(Objective: apply)*
   - A) a perfect address
   - B) APIPA — DHCP did not answer
   - C) a DNS problem
   - D) the internet is fine

4. Which cable is the **uplink** in this lab? *(Objective: apply)*
   - A) laptop to switch
   - B) router to switch
   - C) laptop to router
   - D) switch to switch

5. `ping 8.8.8.8` works but names won't load. The likely cause is… *(Objective: apply)*
   - A) no power
   - B) DNS
   - C) no link light
   - D) a bad uplink

6. **True or false —** If a stage fails, you should keep going and fix it at the end. Explain in one sentence. *(Objective: method)*

7. On a shared switch, what is the safe rule? *(Objective: method)*
   - A) Erase its settings first
   - B) Only add your cable; leave settings alone
   - C) Change every port
   - D) Unplug everyone else

8. **Matching —** match each symptom to its first check. *(Objective: apply)*
   - ___ No link light &nbsp;&nbsp; ___ 169.254 address &nbsp;&nbsp; ___ Names won't load
   - A) check DHCP / reseat cable
   - B) swap the cable / try another port
   - C) nslookup, then flushdns

9. Fill in the blank: When a test fails, fix the lowest broken ____________ first, then re-test upward. *(Objective: method)*

10. **Scenario —** You wired the lab and powered it on. The laptop's link light is on, but `ipconfig` shows `169.254.4.12`. What is the problem, and what do you check next? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-15-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-15-01-capstone-build.md`. In brief:

- **Objective in one line:** learners build the full home lab and verify it layer by layer, fixing any failed stage.
- **Common misconceptions:** "test the internet first"; "a 169.254 address is fine"; "change switch settings freely." Correct each.
- **Pacing:** ~45 min. Build a little, test a little. Pause after each stage to confirm before moving on.
- **How CompTIA tests it:** bottom-up reasoning, APIPA→DHCP, DNS name failures, and safe change practice.
- **Accuracy note (Prime Directive #7):** all commands are real; every address and reply is a varying example marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** add a VLAN on the switch (Module 11) and re-verify; or add a second device and confirm both get addresses.

---

## 17. Cheat sheet

> **Quick reference — Capstone build order**
>
> | Stage | Do this | Prove it |
> |-------|---------|----------|
> | Wire | router→switch (uplink), switch→laptop | cables seated |
> | Power | router, switch, laptop | link lights on |
> | Address | `ipconfig` | real IP, not 169.254 |
> | Test | `ping` gateway → `ping 8.8.8.8` → `nslookup` | replies + a name resolves |
> | Fix | seven-step method | lowest broken layer first |
> | Document | write ports, IP, results | someone else could rebuild it |
>
> - Build from the bottom, test from the bottom.
> - `169.254` = APIPA = no DHCP.
>
> _(Full version: `resources/cheat-sheets/exam-readiness-quick-reference.md`.)_

---

## 18. Glossary updates

**No new terms.** This capstone reuses terms taught across the course: **switch**, **router**, **Ethernet**, **DHCP**, **default gateway**, **link light**, **APIPA**, **ipconfig**, **ping**, **nslookup**, **DNS**, and the seven-step method. The glossary is unchanged.

---

## 19. Homework

- **Practice:** Rebuild the lab from your notes only, without this lesson open.
- **Spaced review:** Say the test order from memory — link light, address, ping, name.
- **Preview:** Next, **Lesson 15-02 — Exam-Day Logistics and What to Expect**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which stage felt hardest to get right? _______________________
3. Did any layer fail? What fixed it? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box honestly:

- [ ] I wired the router, switch, and laptop correctly.
- [ ] I confirmed link lights before testing settings.
- [ ] I read my IP and gateway with `ipconfig`.
- [ ] I pinged the gateway and the internet, and resolved a name.
- [ ] I fixed any failed stage from the lowest layer up.
- [ ] I wrote a build record.
- [ ] I scored 80%+ on the quiz.

**Not all checked?** That's fine — go back to the stage you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M15-L01** — "Capstone Project: Build the Whole Home Lab" · Module 15 · Unit 12_
