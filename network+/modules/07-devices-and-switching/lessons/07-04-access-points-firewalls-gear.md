---
id: NA-M07-L04
module: 07
lesson: 04
title: "Access Points, Firewalls, and Other Gear"
unit: 4
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M07-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 07 · Lesson 04] Access Points, Firewalls, and Other Gear

> **Unit:** Unit 4 — Devices & Switching · **Time:** ~28 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 07-01 (hubs, switches, routers).

Hubs, switches, and routers are the big three, but a real network has more gear. This lesson is a guided tour of the other devices you'll meet: the **access point**, the **firewall**, the **modem**, and a few helpers. For each, you'll learn the one problem it solves.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what an **access point** and a **modem** do.
- [ ] Explain what a **firewall** does and why it matters.
- [ ] Describe helper devices: **load balancer**, **proxy server**, and **IDS/IPS**.
- [ ] Explain **Power over Ethernet (PoE)** in plain words.

---

## 2. Introduction — why this matters

Think about a **building** with more than just hallways and doors. It has a **front gate with a guard** (checks who comes in), a **reception desk** (directs visitors), a **loading dock**, and **power outlets** in the walls. Each part solves one job, and together they make the building work and stay safe.

A network is the same. Beyond the switch and router, it has a **firewall** (the guard at the gate), an **access point** (so wireless guests can join), a **modem** (the doorway to your internet provider), and helpers that share the load or speed things up. Knowing each device by name and job lets you read any network diagram — and answer the exam's "which device does X?" questions.

Why learn this? Because these devices show up in every real network and all over the exam. And several are hiding inside your home "router" box already.

🎯 **Exam tip:** Network+ tests device identification: match a device to its job. Watch for **firewall** (filters traffic), **access point** (adds Wi-Fi), **load balancer** (spreads traffic), and **proxy** (middleman).

🔧 **Lab link:** Your home box already includes an **access point** (Wi-Fi) and a basic **firewall**. Later you may add a PoE device like a camera or a separate AP.

---

## 3. Simple explanation

Let's tour the devices by the job each one does.

### Access point (AP) — adds Wi-Fi to a wired network
An **access point** lets **wireless devices** (phones, laptops) join a **wired** network. It's the bridge between Wi-Fi and Ethernet: radio on one side, cable on the other. Your home router has one built in; big buildings use many separate APs for full coverage.

### Modem — the doorway to your internet provider
A **modem** (short for *modulator-demodulator*) connects your home to your **internet provider (ISP)**. It converts the provider's signal (over cable, phone line, or fiber) into Ethernet your network understands, and back again. It's the box where the internet enters your home.

### Firewall — the guard that filters traffic
A **firewall** is a security device (or software) that **allows or blocks** traffic based on **rules**. It stands at the border between your network and the internet, letting safe traffic through and stopping unwanted traffic. Think of it as the guard at the front gate checking a list.

### Helper devices
- A **load balancer** spreads incoming traffic across **several servers**, so no single server gets overwhelmed. Like extra checkout lanes opening when a store gets busy.
- A **proxy server** sits **between** users and the internet, forwarding their requests. It can filter sites, cache pages to speed things up, and hide the users' identity. Like a mail-forwarding office.
- An **IDS/IPS** watches for attacks. An **IDS** (Intrusion Detection System) **alerts** you to a threat; an **IPS** (Intrusion Prevention System) also **blocks** it. Detect vs. prevent.

### Power over Ethernet (PoE)
**Power over Ethernet (PoE)** sends **electric power** over the same Ethernet cable that carries data. That means a device like a **wireless access point** or a **security camera** needs only **one cable** — no separate power plug. Handy for gear on a ceiling or wall.

> **The big idea:** Beyond switch and router, a network uses an **access point** (adds Wi-Fi), a **modem** (doorway to the ISP), a **firewall** (filters traffic by rules), plus helpers — **load balancer** (spreads traffic), **proxy** (middleman), and **IDS/IPS** (detect/prevent attacks). **PoE** powers devices over the network cable.

💡 **Tip:** Match each device to a one-word job: AP = Wi-Fi, modem = ISP door, firewall = filter, load balancer = spread, proxy = middleman, IDS/IPS = watch.

⚠️ **Watch out:** A **modem** and a **router** are different jobs. Your home box often combines both (a "gateway"), but the modem talks to the ISP while the router connects networks.

---

## 4. Real-world analogy

> **"A network is a building: a guard at the gate, a doorway to the street, a reception desk, and power in the walls."**

| Building part | Device | Job |
|---------------|--------|-----|
| The guard checking a list at the gate | **Firewall** | Allow or block traffic by rules |
| The door to the public street | **Modem** | Connect to the internet provider |
| A wireless "guest Wi-Fi" desk | **Access point** | Let Wi-Fi devices join |
| Extra checkout lanes at rush hour | **Load balancer** | Spread traffic across servers |
| A mail-forwarding office | **Proxy server** | Forward/filter requests as a middleman |
| A security camera + alarm | **IDS / IPS** | Detect (and prevent) attacks |
| Power outlets in the wall | **PoE** | Power devices over the network cable |

Each part has one job. Put them together and the building — or network — runs smoothly and safely.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Access point (AP)** | | A device that lets wireless devices join a wired network. |
| **Modem** | MOH-dem | A device that connects your home to your internet provider. |
| **Firewall** | FIRE-wall | A device or software that allows or blocks traffic by rules. |
| **Load balancer** | | A device that spreads traffic across several servers. |
| **Proxy server** | PROK-see | A middleman that forwards and can filter users' requests. |
| **IDS / IPS** | I-D-S / I-P-S | Systems that detect (IDS) or block (IPS) attacks. |
| **Power over Ethernet (PoE)** | P-O-E | Sending power over the Ethernet cable that carries data. |

---

## 6. ASCII diagram

```
   OTHER GEAR IN A NETWORK (each has one job)

   ( internet ) ── [MODEM] ── [FIREWALL] ── [ROUTER/SWITCH] ─┬─ [PC]
     ISP door     filter (rules)                             ├─ [AP] ))) Wi-Fi devices
                                                             └─ [PoE camera] (power + data on one cable)

   HELPERS:
     [LOAD BALANCER] → spreads requests across many servers
     [PROXY]         → middleman between users and the internet
     [IDS/IPS]       → watches traffic: IDS alerts, IPS blocks
```

_Modem = ISP door · Firewall = filter · AP = Wi-Fi · PoE = power over the cable._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-07-04-other-gear-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a left-to-right path — internet → modem → firewall → router/switch → PCs and an access point (with Wi-Fi waves) and a PoE camera; a side box lists helpers (load balancer, proxy, IDS/IPS) with a one-line job each.
> **Key elements & labels:** each device named with its one-word job; PoE shown as one cable carrying power + data; Wi-Fi waves on the AP.
> **Color meaning:** each device is labeled with its job in text, so it reads in black and white.
> **Flow direction:** internet on the left to devices on the right.
> **Alt text (required):** "A network path from the internet through a modem, a firewall, and a router-switch to computers, a wireless access point sending Wi-Fi, and a camera powered over its Ethernet cable. A side panel lists a load balancer that spreads traffic across servers, a proxy that acts as a middleman, and an IDS/IPS that detects or blocks attacks."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-07-04-access-point-01.jpg`
> A ceiling-mounted access point. Alt text: "A ceiling-mounted wireless access point providing Wi-Fi."
>
> **Photo 2** — `img-07-04-firewall-appliance-01.jpg`
> A firewall appliance. Alt text: "A firewall appliance that filters traffic between networks."
>
> **Photo 3** — `img-07-04-poe-injector-01.jpg`
> A PoE injector/switch powering a device. Alt text: "A Power over Ethernet device sending power and data over one cable."

---

## 9. Hands-on lab

**Goal:** find which of these devices are in your home and name each one's job.
**Why:** several of these hide inside your home box — spotting them makes the tour real.

**You will need**
- Your home network gear in view and pen and paper (Equipment tier **E1**).
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Just look at the devices and settings. Don't change firewall rules or unplug anything in use.

### 9a. Step-by-step instructions

1. Find your home box (router/gateway). It almost certainly has a built-in **access point** — is Wi-Fi on? Write "AP: yes/no."
2. Find where the internet cable enters your home. That box (or that part of the gateway) is your **modem**. Write it down.
3. Your home box also has a basic **firewall**. On your Windows laptop, search "Windows Defender Firewall" to see a firewall you can view. Note that it filters traffic.
4. Do you have any **PoE** device (a camera or AP powered by its network cable only)? Write "yes/no."
5. On paper, list each device you found and write its **one-word job** (Wi-Fi, ISP door, filter, power).
6. For the helpers you don't have at home (load balancer, proxy, IDS/IPS), write one sentence on where a big company would use each.

### 9b. Expected results

- You identified your access point, modem, and firewall (all likely in one box).
- You matched each to its one-word job.
- ✅ **You did it if:** you can point at your home box and name three devices inside it.

### 9c. Verify it worked

1. Say the job of a firewall (filter/allow-block) and an access point (adds Wi-Fi).
2. Explain how a modem differs from a router (ISP door vs. connects networks).

### 9d. Reset / roll back

Nothing to undo — you only looked. Close any settings windows you opened.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Confusing a modem and a router | You misplace devices | Modem = ISP door; router = connects networks |
| Thinking an AP is a router | You mislabel Wi-Fi | An AP only bridges Wi-Fi to the wired network |
| Mixing up IDS and IPS | You misjudge the action | IDS **alerts**; IPS **blocks** |
| Thinking a firewall speeds up traffic | You expect the wrong benefit | A firewall filters for **safety**, not speed |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No internet at all | Modem or ISP issue | Check the modem lights; restart it; call the ISP |
| Wi-Fi weak in far rooms | One AP can't cover it | Add another access point (or a mesh unit) |
| A safe site is blocked | Firewall/proxy rule | Review the firewall or proxy rules |
| PoE device won't power on | No PoE on that port | Use a PoE switch/injector or a power adapter |

---

## 12. Lesson summary

- An **access point** adds **Wi-Fi**; a **modem** is the **doorway to your ISP**.
- A **firewall** **allows or blocks** traffic by rules (security at the border).
- Helpers: **load balancer** (spreads traffic), **proxy** (middleman), **IDS/IPS** (detect/prevent attacks).
- **PoE** sends **power over the Ethernet cable**, so a device needs only one cable.

**One-sentence recap:** Beyond switches and routers, networks use access points for Wi-Fi, modems to reach the ISP, firewalls to filter traffic, and helpers like load balancers, proxies, and IDS/IPS — with PoE delivering power over the network cable.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-07-04-fill-in-the-blank.md`
2. **Matching** — `wb-07-04-matching.md`
3. **Label the diagram** — `wb-07-04-label-the-diagram.md` (the device path)
4. **Short answer** — `wb-07-04-short-answer.md`
5. **Hands-on observation** — `wb-07-04-hands-on-observation.md` (find your gear)
6. **Vocabulary review** — `wb-07-04-vocabulary-review.md`
7. **Reflection** — `wb-07-04-reflection.md`

**Quick written warm-up (do this now):** Which device adds Wi-Fi? Which device is the doorway to your internet provider?

Wi-Fi: ____________  ISP door: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-07-04-knowledge-check.md`.)

1. What does an **access point** do? *(Objective: AP)*
   - A) Connects to the ISP
   - B) Lets wireless devices join a wired network
   - C) Filters traffic
   - D) Spreads traffic across servers

2. What does a **modem** do? *(Objective: modem)*
   - A) Adds Wi-Fi
   - B) Connects your home to your internet provider
   - C) Blocks attacks
   - D) Powers cameras

3. What does a **firewall** do? *(Objective: firewall)*
   - A) Speeds up the internet
   - B) Allows or blocks traffic by rules
   - C) Adds more ports
   - D) Stores files

4. What does a **load balancer** do? *(Objective: load balancer)*
   - A) Blocks Wi-Fi
   - B) Spreads traffic across several servers
   - C) Powers devices
   - D) Hides your MAC

5. What is the difference between **IDS** and **IPS**? *(Objective: IDS/IPS)*
   - A) IDS blocks, IPS alerts
   - B) IDS alerts, IPS blocks
   - C) They are the same
   - D) Both only add Wi-Fi

6. **True or false —** A modem and a router do the same job. Explain in one sentence. *(Objective: modem vs router)*

7. What does **Power over Ethernet (PoE)** provide? *(Objective: PoE)*
   - A) Faster Wi-Fi
   - B) Power and data over one Ethernet cable
   - C) A new IP address
   - D) A firewall rule

8. **Matching —** write the letter next to each device. *(Objective: devices)*
   - ___ Firewall &nbsp;&nbsp; ___ Access point &nbsp;&nbsp; ___ Proxy server
   - A) lets Wi-Fi devices join &nbsp; B) a middleman that forwards requests &nbsp; C) allows or blocks traffic by rules

9. Fill in the blank: A ____________ sits between users and the internet, forwarding and filtering their requests. *(Objective: proxy)*

10. **Scenario —** A busy website keeps crashing because one server can't handle all the visitors. Which device would help, and what does it do? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-07-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-07-04-other-gear.md`. In brief:

- **Objective in one line:** learners identify common network devices (AP, modem, firewall, load balancer, proxy, IDS/IPS, PoE) and match each to its job.
- **Common misconceptions:** modem = router; AP = router; IDS vs. IPS; firewall speeds things up. Correct all four.
- **Pacing:** ~28 min. The find-your-gear lab is the payoff — many devices hide in the home box.
- **How CompTIA tests it:** device-to-job identification; IDS vs. IPS; modem vs. router.
- **Support idea:** the building analogy (guard, door, reception, outlets).
- **Extension idea:** NAS, wireless LAN controllers, and next-gen firewalls for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Other network gear**
>
> - **Access point (AP)** — lets **Wi-Fi** devices join a wired network.
> - **Modem** — the **doorway to your ISP** (signal ↔ Ethernet).
> - **Firewall** — **allows or blocks** traffic by rules (security border).
> - **Load balancer** — **spreads** traffic across several servers.
> - **Proxy server** — a **middleman** that forwards/filters requests.
> - **IDS / IPS** — **detect** (alert) / **prevent** (block) attacks.
> - **PoE** — **power + data** over one Ethernet cable.
>
> _(Full version: `resources/cheat-sheets/devices-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Access point (AP)** — A device that lets wireless devices join a wired network.
- **Modem** — A device that connects your home to your internet provider.
- **Firewall** — A device or software that allows or blocks traffic by rules.
- **Load balancer** — A device that spreads traffic across several servers.
- **Proxy server** — A middleman that forwards and can filter users' requests.
- **IDS/IPS** — Systems that detect (IDS) or block (IPS) attacks.
- **Power over Ethernet (PoE)** — Sending power over the Ethernet cable that carries data.

---

## 19. Homework

- **Practice:** List every network device in your home and write each one's one-word job.
- **Spaced review:** Redo the Lesson 07-03 flashcards for collision vs. broadcast domains.
- **Preview:** Now we get hands-on with a real device — your **Dell PowerConnect 3424 managed switch**. The next lesson introduces it.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I match each device to its one-word job now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what an access point and a modem do.
- [ ] I can explain what a firewall does.
- [ ] I can describe a load balancer, a proxy, and IDS/IPS.
- [ ] I can explain PoE.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: meeting the Dell PowerConnect 3424 switch.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M07-L04** — "Access Points, Firewalls, and Other Gear" · Module 07 · Unit 4_
