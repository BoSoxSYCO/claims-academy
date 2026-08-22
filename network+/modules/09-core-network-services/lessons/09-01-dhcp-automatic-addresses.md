---
id: NA-M09-L01
module: 09
lesson: 01
title: "DHCP: How Devices Get an Address Automatically"
unit: 6
objective_ids: ["3.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L01", "NA-M08-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 09 · Lesson 01] DHCP: How Devices Get an Address Automatically

> **Unit:** Unit 6 — Core Network Services · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-01 (what an IP address is) and Lesson 08-02 (APIPA).

You know every device needs an IP address, a mask, and a gateway. But who hands those out? Setting each device by hand would be slow and error-prone. **DHCP** does it automatically — join a network and you get everything in seconds. This lesson opens Module 09 with the service that makes networks *just work*.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **DHCP** does and **why** it matters.
- [ ] List what DHCP gives a device (IP, mask, gateway, DNS).
- [ ] Describe the four **DORA** steps (Discover, Offer, Request, Acknowledge).
- [ ] Tell **static** from **dynamic** addresses, and find your DHCP info.

---

## 2. Introduction — why this matters

Imagine checking into a hotel. You don't build your own room or pick a random number and hope it's free. You go to the front desk, they **assign** you a room, hand you a **key card**, and it's yours for your stay. When you leave, the room goes back for the next guest.

A network works the same way. When your laptop joins, it needs an IP address, a subnet mask, a default gateway, and a DNS server (Module 08). Typing all that by hand on every device — phones, laptops, TVs, printers — would be a nightmare, and two devices might grab the **same** address by mistake.

**DHCP (Dynamic Host Configuration Protocol)** is the front desk. It **automatically** hands each device a complete, correct set of network settings, and makes sure no two get the same address. It's why you can join Wi-Fi and just... work.

🎯 **Exam tip:** Network+ expects the **DORA** steps and what DHCP provides (IP, mask, gateway, DNS). It also tests **scope**, **lease**, and **reservation**.

🔧 **Lab link:** This is the start of **Lab D** — watching DHCP work on your own network.

---

## 3. Simple explanation

### What DHCP gives you
A DHCP server (often your home **router**) hands each device a full "starter kit":

- an **IP address** (unique on your network),
- a **subnet mask** (the network/host split),
- a **default gateway** (your router's address),
- one or more **DNS servers** (name lookup — Lesson 09-02).

All four, automatically, in one exchange.

### The four steps: DORA
DHCP works in four steps. Remember the name **DORA**:

1. **D — Discover:** the new device shouts to the network, "Any DHCP servers out there?" (a broadcast — Lesson 07-02).
2. **O — Offer:** a DHCP server replies, "I can give you `192.168.1.24`."
3. **R — Request:** the device says, "Yes please, I'll take it."
4. **A — Acknowledge (Ack):** the server confirms, "It's yours," and records the **lease**.

Four quick messages and the device is fully configured.

### Lease, scope, and reservation
- A **lease** is how long the device may keep the address (say, 24 hours). Before it ends, the device **renews** so it can keep the address.
- A **DHCP scope** is the **pool** (range) of addresses the server is allowed to hand out — for example, `192.168.1.100` through `192.168.1.200`.
- A **DHCP reservation** ties a **fixed** address to one device's **MAC address** (Lesson 07-02), so that device always gets the **same** IP — handy for a printer or server.

### Static vs. dynamic
- A **dynamic IP address** is one DHCP gives out; it can change over time.
- A **static IP address** is set **by hand** and doesn't change. Servers and printers often use static (or a reservation) so they're always findable.

### The APIPA connection
Remember **APIPA** (Lesson 08-02)? If a device sends **Discover** but **no DHCP server answers**, it gives itself a `169.254.x.x` address. So a `169.254` address is a red flag: **DHCP failed**.

> **The big idea:** **DHCP** automatically hands each device its IP, mask, gateway, and DNS using four steps — **D**iscover, **O**ffer, **R**equest, **A**cknowledge. The address is a **lease** from a **scope** (pool); a **reservation** pins a fixed one. No DHCP answer → **APIPA** (169.254).

💡 **Tip:** On Windows, `ipconfig /all` shows "DHCP Enabled," the "DHCP Server," and your "Lease Obtained/Expires" times.

⚠️ **Watch out:** If you see a **169.254** address, don't hunt for a config error on the device — the **DHCP server** didn't answer. Check the link, the router, and the DHCP service.

---

## 4. Real-world analogy

> **"DHCP is a hotel front desk: it assigns you a room, gives a key for your stay, and takes it back when you leave."**

| Hotel | DHCP |
|-------|------|
| Ask at the front desk | **Discover** |
| Desk offers a room | **Offer** |
| You accept the room | **Request** |
| They give you a key card | **Acknowledge** (lease) |
| Key works for your stay | The **lease** time |
| Block of guest rooms | The **scope** (pool) |
| "Always give me room 101" | A **reservation** |

You never pick a random room and hope — the desk manages it, so no two guests clash. DHCP manages addresses the same way.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **DHCP** | D-H-C-P | A service that automatically gives devices their IP settings. |
| **DORA** | DOOR-uh | The four DHCP steps: Discover, Offer, Request, Acknowledge. |
| **Lease** | | How long a device may keep a DHCP-assigned address. |
| **DHCP scope** | | The range (pool) of addresses a DHCP server can hand out. |
| **DHCP reservation** | | A fixed address always given to one device (by its MAC). |
| **Dynamic IP address** | | An address given automatically by DHCP; it can change. |
| **Static IP address** | | An address set by hand that does not change. |

---

## 6. ASCII diagram

```
   DHCP — THE FOUR STEPS (DORA)

   DEVICE (new)                         DHCP SERVER (router)
      │  ── D: Discover ("any servers?") ──▶  │   (broadcast)
      │  ◀─ O: Offer ("try 192.168.1.24") ──  │
      │  ── R: Request ("yes, that one") ──▶  │
      │  ◀─ A: Acknowledge ("it's yours") ──  │   (lease starts)
      ▼
   Device now has: IP · subnet mask · default gateway · DNS server

   LEASE = how long you keep it   SCOPE = the pool it comes from
   RESERVATION = a fixed IP for one device      No answer → APIPA (169.254)
```

_Discover → Offer → Request → Acknowledge. Then IP + mask + gateway + DNS, on a lease._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-09-01-dhcp-dora-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the four DORA messages between a new device and a DHCP server, then the "starter kit" the device ends up with, plus small callouts for lease, scope, and reservation.
> **Key elements & labels:** Discover/Offer/Request/Acknowledge arrows; the four settings (IP, mask, gateway, DNS); lease, scope, reservation; "no answer → APIPA."
> **Color meaning:** each of the four steps is labeled with its letter and word (not color alone).
> **Flow direction:** top-to-bottom, device on the left, server on the right, alternating arrows.
> **Alt text (required):** "The DHCP DORA exchange between a new device and a DHCP server. Step one, Discover: the device broadcasts asking for any DHCP servers. Step two, Offer: the server offers an address such as 192.168.1.24. Step three, Request: the device requests that address. Step four, Acknowledge: the server confirms and starts a lease. The device then has four settings: an IP address, a subnet mask, a default gateway, and a DNS server. Callouts explain that a lease is how long the address is kept, a scope is the pool it comes from, a reservation is a fixed address for one device, and no answer means the device falls back to an APIPA 169.254 address."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-09-01-ipconfig-all-01.jpg`
> An `ipconfig /all` result with "DHCP Enabled," "DHCP Server," and lease lines highlighted. Alt text: "The ipconfig /all output showing DHCP Enabled Yes, the DHCP Server address, and lease obtained and expires times."
>
> **Photo 2** — `img-09-01-router-dhcp-page-01.jpg`
> A router's DHCP settings page showing the scope (start/end) and lease time. Alt text: "A router DHCP page showing the address pool start and end and the lease time."

---

## 9. Hands-on lab

**Goal:** see DHCP at work on your laptop — the DHCP server, your lease, and that DHCP is enabled.
**Why:** the DORA idea gets real when you see your **own** lease and DHCP server.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** You only **read** settings with `ipconfig /all`. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** (Start → type `cmd` → Enter).
2. Type this exact command and press **Enter**:

   ```
   ipconfig /all
   ```

3. Find **DHCP Enabled** — it should say **Yes**.
4. Find **DHCP Server** — write down its address (often your router, like `192.168.1.1`).
5. Find **Lease Obtained** and **Lease Expires** — note the two times. That's your lease.

### 9b. Expected results

You'll see lines like these (your values differ):

```
   DHCP Enabled. . . . . . . . . . . : Yes
   DHCP Server . . . . . . . . . . . : 192.168.1.1
   Lease Obtained. . . . . . . . . . : Monday, 10:14:02 AM
   Lease Expires . . . . . . . . . . : Tuesday, 10:14:02 AM
```

- ✅ **You did it if:** DHCP Enabled says **Yes**, and you found your DHCP Server and lease times.

### 9c. Verify it worked

1. Say which device is your **DHCP server** (usually the router/gateway).
2. Explain in one sentence what would happen if that server didn't answer (hint: APIPA).

### 9d. Reset / roll back

Nothing changed — `ipconfig /all` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Getting the DORA order wrong | Exam miss | Discover → Offer → Request → Acknowledge |
| Blaming the device for a 169.254 | Wasted time | 169.254 = APIPA = the **DHCP server** didn't answer |
| Two static IPs the same | Address conflict | Use DHCP, or reservations, to avoid clashes |
| Thinking the lease is forever | Surprise renewals | The lease expires; the device renews before then |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Address is 169.254.x.x | No DHCP reply (APIPA) | Check the cable/Wi-Fi and that the router's DHCP is on |
| "DHCP Enabled: No" | A static address is set | That's fine if intended; otherwise turn DHCP back on |
| Address keeps changing | Normal for dynamic | Use a **reservation** if a device needs a stable IP |
| Two devices, same IP | A static clashed with DHCP | Move the static outside the scope, or reserve it |

---

## 12. Lesson summary

- **DHCP** automatically gives each device its **IP, mask, gateway, and DNS**.
- It works in four steps — **D**iscover, **O**ffer, **R**equest, **A**cknowledge (**DORA**).
- The address is a **lease** from a **scope**; a **reservation** pins a fixed IP to one device.
- **Dynamic** = DHCP-assigned; **static** = set by hand. No DHCP reply → **APIPA (169.254)**.

**One-sentence recap:** DHCP is the network's front desk — it hands each device a full set of settings through the DORA exchange, as a lease from a pool, so everything just works.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-09-01-fill-in-the-blank.md`
2. **Matching** — `wb-09-01-matching.md`
3. **Label the diagram** — `wb-09-01-label-the-diagram.md` (the DORA steps)
4. **Short answer** — `wb-09-01-short-answer.md`
5. **Hands-on observation** — `wb-09-01-hands-on-observation.md` (find your DHCP info)
6. **Vocabulary review** — `wb-09-01-vocabulary-review.md`
7. **Reflection** — `wb-09-01-reflection.md`

**Quick written warm-up (do this now):** Write the four DORA words in order.

D________ · O________ · R________ · A________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-09-01-knowledge-check.md`.)

1. What does **DHCP** do? *(Objective: definition)*
   - A) Speeds up the internet
   - B) Automatically gives devices their IP settings
   - C) Blocks attacks
   - D) Stores web pages

2. Which is **not** something DHCP typically provides? *(Objective: what it gives)*
   - A) IP address
   - B) subnet mask
   - C) default gateway
   - D) the device's MAC address

3. What is the correct order of the DHCP steps? *(Objective: DORA)*
   - A) Offer, Discover, Request, Acknowledge
   - B) Discover, Offer, Request, Acknowledge
   - C) Request, Offer, Discover, Acknowledge
   - D) Discover, Request, Offer, Acknowledge

4. A **lease** is… *(Objective: lease)*
   - A) the router's brand
   - B) how long a device may keep its DHCP address
   - C) a type of cable
   - D) a MAC address

5. A device shows **169.254.10.5**. What most likely happened? *(Objective: APIPA link)*
   - A) It got a static address
   - B) The DHCP server didn't answer
   - C) It has two IPs
   - D) DNS failed

6. **True or false —** A DHCP reservation gives a device a fixed address every time. Explain in one sentence. *(Objective: reservation)*

7. The pool of addresses a DHCP server can hand out is called the… *(Objective: scope)*
   - A) lease
   - B) scope
   - C) gateway
   - D) subnet

8. **Matching —** write the letter next to each DORA step. *(Objective: DORA)*
   - ___ Discover &nbsp;&nbsp; ___ Offer &nbsp;&nbsp; ___ Acknowledge
   - A) server confirms, lease starts &nbsp; B) device asks if any servers exist &nbsp; C) server proposes an address

9. Fill in the blank: An address set by hand that doesn't change is a ____________ IP address. *(Objective: static)*

10. **Scenario —** A new printer keeps getting a different IP, so people can't find it. What DHCP feature fixes this, and how? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-09-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-09-01-dhcp.md`. In brief:

- **Objective in one line:** learners explain what DHCP provides and walk the DORA exchange, plus lease/scope/reservation and static vs. dynamic.
- **Common misconceptions:** DORA out of order; blaming the device for 169.254; leases last forever. Correct all three.
- **Pacing:** ~28 min. The hotel analogy carries DORA; the `ipconfig /all` lab makes the lease real.
- **How CompTIA tests it:** DORA order; what DHCP provides; scope/lease/reservation; APIPA as the DHCP-failure signal.
- **Accuracy note:** `ipconfig /all` fields are real Windows output; the shown values are a representative example (learner's differ). No fabricated device-specific data.
- **Extension idea:** DHCP relay/helper address across subnets, and DHCP options, for fast learners.

---

## 17. Cheat sheet

> **Quick reference — DHCP**
>
> - **DHCP** = automatic **IP + mask + gateway + DNS** for every device.
> - **DORA:** **D**iscover → **O**ffer → **R**equest → **A**cknowledge.
> - **Lease** = how long you keep the address (renewed before it expires).
> - **Scope** = the pool of addresses; **reservation** = a fixed IP by MAC.
> - **Dynamic** = DHCP-assigned; **static** = set by hand.
> - **169.254.x.x (APIPA)** = the DHCP server didn't answer.
> - See it: `ipconfig /all` → DHCP Enabled, DHCP Server, Lease times.
>
> _(Full version: `resources/cheat-sheets/network-services-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **DHCP** — A service that automatically gives devices their IP settings.
- **DORA** — The four DHCP steps: Discover, Offer, Request, Acknowledge.
- **Lease** — How long a device may keep a DHCP-assigned address.
- **DHCP scope** — The range (pool) of addresses a DHCP server can hand out.
- **DHCP reservation** — A fixed address always given to one device (by its MAC).
- **Dynamic IP address** — An address given automatically by DHCP; it can change.
- **Static IP address** — An address set by hand that does not change.

---

## 19. Homework

- **Practice:** Run `ipconfig /all` on two networks; compare the DHCP Server and lease times.
- **Spaced review:** Redo the Lesson 08-02 flashcards on APIPA and private ranges.
- **Preview:** Next lesson, **DNS** — how names like `google.com` become IP addresses.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I recite DORA in order now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what DHCP does and why.
- [ ] I can list what DHCP provides (IP, mask, gateway, DNS).
- [ ] I can put the DORA steps in order.
- [ ] I can tell static from dynamic, and know 169.254 = DHCP failed.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: DNS.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M09-L01** — "DHCP: How Devices Get an Address Automatically" · Module 09 · Unit 6_
