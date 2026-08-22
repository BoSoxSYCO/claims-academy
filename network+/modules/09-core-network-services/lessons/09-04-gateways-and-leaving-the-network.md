---
id: NA-M09-L04
module: 09
lesson: 04
title: "Gateways and How Traffic Leaves Your Network"
unit: 6
objective_ids: ["3.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L01", "NA-M08-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 09 · Lesson 04] Gateways and How Traffic Leaves Your Network

> **Unit:** Unit 6 — Core Network Services · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-01 (IP addresses) and Lesson 08-03 (the same-network test).

Your laptop talks to a device on your own network directly. But how does traffic reach a site on the **other side of the world**? It goes out through the **default gateway** — your router — and then hops from router to router. This lesson follows a packet as it **leaves** your network.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what the **default gateway** does.
- [ ] Explain how a device decides to send to the gateway (same vs. different network).
- [ ] Explain **ARP** — how a device finds a MAC for an IP on the local network.
- [ ] Follow a packet's path with **`tracert`**.

---

## 2. Introduction — why this matters

Think about a gated neighborhood. To visit a neighbor, you just walk over. But to send mail to another **city**, you drop it at the **front gate**. From there, the postal system carries it — truck to truck, city to city — until it arrives.

Your network works the same way. A device on your own network? Your laptop reaches it **directly** (Lesson 08-03). A server across the internet? Your laptop can't reach it directly. So it hands the packet to the **default gateway** — your router — the one "road out." The router then passes it along toward its goal.

Why does this matter? Because every time you leave your network, this happens. And when the internet "doesn't work," the gateway is one of the first things you check.

🎯 **Exam tip:** Network+ tests the **default gateway** (the router you send off-network traffic to), **ARP** (IP → MAC on the local link), and reading a **`tracert`**.

🔧 **Lab link:** You'll trace a packet's path out of your network with `tracert`, and see the gateway's MAC with `arp -a`.

---

## 3. Simple explanation

### The default gateway
The **default gateway** is your router's address on your network (Lesson 02-04). It's the **door out**. When a device needs to reach **another** network, it sends the packet here first.

You already have one. In `ipconfig`, the "Default Gateway" line (often `192.168.1.1`) is it.

### Same network or not? The device decides first
Before sending, a device asks one question (from Lesson 08-03): **is the destination on my network?**

- **Same network** → send it **directly** to that device.
- **Different network** → send it to the **default gateway**, and let the router handle the rest.

The subnet mask makes that call. That's why every device needs a gateway set — it's where "everything not local" goes.

### ARP: finding the MAC for an IP
Here's a catch. To hand the packet to the gateway, the device needs the gateway's **MAC address** (Lesson 07-02), not just its IP. Local delivery uses MAC.

So the device uses **ARP (Address Resolution Protocol)**. It shouts to the network: "Who has `192.168.1.1`? Tell me your MAC." The gateway answers with its MAC. The device saves that in its **ARP cache** and sends the frame. (On Windows, `arp -a` shows the cache.)

ARP is how **IP (Layer 3)** and **MAC (Layer 2)** connect on the local link.

### Leaving the network: hop by hop
Once the router has the packet, it decides where to send it **next**. A router keeps a **routing table** — a list of networks and where to forward each. It picks the best **next hop** (the next router). If it doesn't have a specific route, it uses its **default route** — "send everything else this way."

The packet then moves **hop by hop** (Lesson 05-05): router to router, each one forwarding it closer, until it reaches the destination network. The `tracert` command shows those hops.

> **The big idea:** A device sends **local** traffic **directly**, and **off-network** traffic to the **default gateway** (the router). To reach the gateway locally, it uses **ARP** to get the gateway's **MAC**. The router then forwards the packet **hop by hop** toward its destination, using its **routing table**.

💡 **Tip:** The **first hop** in a `tracert` is almost always your **default gateway** — the door out.

⚠️ **Watch out:** No gateway, or a wrong one, means you can reach **local** devices but **not** the internet. If local works and the internet doesn't, check the gateway.

---

## 4. Real-world analogy

> **"The default gateway is the front gate: local visits are on foot; anything farther goes out the gate."**

| Neighborhood | Network |
|--------------|---------|
| Walk to a neighbor | Reach a **same-network** device directly |
| Drop mail at the front gate | Send off-network traffic to the **default gateway** |
| The gate guard's face | The gateway's **MAC** (found by **ARP**) |
| The postal system's route | **Routing** (hop by hop) |
| "Everything out of town → the gate" | The **default route** |

You walk to a neighbor, but you don't drive the mail to another city yourself — you hand it to the gate, and the system carries it.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **ARP** | arp | How a device finds the MAC address that goes with an IP on the local network. |
| **Routing** | | How a router decides where to send a packet next, toward its destination. |
| **Routing table** | | A router's list of networks and where to forward traffic for each. |
| **Next hop** | | The next router a packet is handed to on its way. |
| **Default route** | | The "everything else" route: send unknown destinations to the gateway. |
| **traceroute (tracert)** | TRACE-route | A command that shows the routers (hops) along a packet's path. |

---

## 6. ASCII diagram

```
   LOCAL vs. LEAVING THE NETWORK

   Same network?  ── YES ──▶  send DIRECTLY to that device (MAC)
                  └─ NO  ──▶  send to the DEFAULT GATEWAY (the router)

   To reach the gateway locally:
     ARP:  "Who has 192.168.1.1?"  →  gateway replies with its MAC

   Then the packet leaves, hop by hop:
     you ─▶ [gateway/router] ─▶ [ISP router] ─▶ [more routers] ─▶ destination
             (first tracert hop)      (routing table picks each next hop)
```

_Local → direct. Off-network → the gateway → hop by hop to the destination._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-09-04-gateway-path-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a laptop deciding local vs. off-network, an ARP request to the gateway, and the packet leaving hop by hop through several routers to a destination.
> **Key elements & labels:** same-network → direct; different → default gateway; ARP "who has 192.168.1.1?"; first hop = gateway; routing table picks next hop; hop-by-hop path.
> **Color meaning:** the two decisions (local vs. off-network) are labeled in text, not color alone.
> **Flow direction:** left (laptop) → gateway → ISP routers → destination.
> **Alt text (required):** "A laptop leaving its network. First it decides: if the destination is on the same network, it sends directly using the device's MAC; if not, it sends to the default gateway, the router at 192.168.1.1. To reach the gateway on the local link, the laptop uses ARP, asking who has 192.168.1.1, and the gateway replies with its MAC. The packet then leaves hop by hop: the laptop to the gateway, which is the first traceroute hop, then to the ISP router, then through more routers, each chosen by a routing table, until it reaches the destination network."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-09-04-tracert-01.jpg`
> A `tracert google.com` result with the first hop (gateway) highlighted. Alt text: "The tracert command output showing numbered hops, with the first hop the local default gateway."
>
> **Photo 2** — `img-09-04-arp-a-01.jpg`
> An `arp -a` result showing the gateway's IP and MAC. Alt text: "The arp -a output listing local IP addresses and their MAC addresses, including the default gateway."

---

## 9. Hands-on lab

**Goal:** trace a packet leaving your network with `tracert`, and see the gateway's MAC with `arp -a`.
**Why:** watching the real hops makes "leaving the network" concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on the internet. Estimated time: 12 min.

⚠️ **Before you start (safety):** These commands only **read** and **trace**. Nothing on your device changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** and run `ipconfig`. Write your **Default Gateway** (e.g., `192.168.1.1`).
2. Run this exact command and press **Enter**:

   ```
   tracert google.com
   ```

3. Read the numbered **hops**. The **first hop** should be your **default gateway**.
4. Let it run a few hops (press **Ctrl+C** to stop early if it's slow).
5. Now run:

   ```
   arp -a
   ```

6. Find your gateway's IP in the list and read its **Physical Address** (MAC).

### 9b. Expected results

`tracert` shows something like this (your hops differ):

```
   1     1 ms     1 ms     1 ms   192.168.1.1        ← your default gateway
   2    12 ms    11 ms    12 ms   10.x.x.x           ← your ISP
   3    ...                        (more routers)
```

- The **first hop** matches your Default Gateway from `ipconfig`.
- `arp -a` lists the gateway's IP next to its MAC.
- ✅ **You did it if:** hop 1 is your gateway, and you found the gateway's MAC in `arp -a`.

### 9c. Verify it worked

1. Confirm hop 1 equals your Default Gateway.
2. Explain: why does your laptop need the gateway's **MAC**, not just its IP? (Local delivery uses MAC; ARP finds it.)

### 9d. Reset / roll back

Nothing changed — `tracert` and `arp -a` only read/trace. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| No default gateway set | Local works, internet doesn't | Set/confirm the gateway (usually via DHCP) |
| Thinking the gateway sends by IP only | Missing how local delivery works | The device needs the gateway's **MAC** (ARP) |
| Confusing "same network" with "close by" | Wrong send decision | The **subnet mask** decides, not distance |
| Reading tracert hop 1 as the ISP | Wrong first hop | Hop 1 is your own **gateway** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Local devices work, internet doesn't | Missing/wrong gateway | Check the Default Gateway in `ipconfig` |
| `tracert` stops at hop 1 | Gateway or link problem | Confirm the gateway is reachable (`ping` it) |
| `tracert` shows `* * *` | A router hides itself | Normal for some hops; the trace continues |
| Wrong MAC for the gateway | Stale ARP entry | Entries age out; it refreshes on the next ARP |

---

## 12. Lesson summary

- The **default gateway** is your router — the **door out** for off-network traffic.
- A device sends **local** traffic **directly**; **off-network** traffic goes to the **gateway**.
- **ARP** finds the gateway's **MAC** from its IP so the frame can be delivered locally.
- The router forwards the packet **hop by hop**, using its **routing table** and a **default route**.

**One-sentence recap:** Local traffic goes straight to the device, but anything off your network goes to the default gateway — reached by ARP for its MAC — and the router then routes it hop by hop to its destination.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-09-04-fill-in-the-blank.md`
2. **Matching** — `wb-09-04-matching.md`
3. **Label the diagram** — `wb-09-04-label-the-diagram.md` (the path out)
4. **Short answer** — `wb-09-04-short-answer.md`
5. **Hands-on observation** — `wb-09-04-hands-on-observation.md` (tracert)
6. **Vocabulary review** — `wb-09-04-vocabulary-review.md`
7. **Reflection** — `wb-09-04-reflection.md`

**Quick written warm-up (do this now):** Where does a device send traffic bound for another network? What protocol finds the gateway's MAC?

Sends to: ____________  Finds MAC: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-09-04-knowledge-check.md`.)

1. What is the **default gateway**? *(Objective: gateway)*
   - A) a DNS server
   - B) your router — the door out for off-network traffic
   - C) a switch port
   - D) a MAC address

2. A device sends traffic to the gateway when the destination is… *(Objective: decision)*
   - A) on the same network
   - B) on a different network
   - C) a broadcast
   - D) itself

3. What does **ARP** do? *(Objective: ARP)*
   - A) turns a name into an IP
   - B) finds the MAC that goes with an IP on the local network
   - C) assigns IP addresses
   - D) blocks traffic

4. In a `tracert`, the **first hop** is usually… *(Objective: tracert)*
   - A) the destination
   - B) your default gateway
   - C) a DNS server
   - D) the ISP's core

5. A router chooses where to send a packet next using its… *(Objective: routing)*
   - A) ARP cache
   - B) routing table
   - C) DHCP scope
   - D) MAC table

6. **True or false —** If local devices work but the internet doesn't, a gateway problem is a likely cause. Explain in one sentence. *(Objective: troubleshoot)*

7. The "everything not local goes here" route is the… *(Objective: default route)*
   - A) default route
   - B) A record
   - C) subnet mask
   - D) broadcast

8. **Matching —** write the letter next to each term. *(Objective: terms)*
   - ___ Default gateway &nbsp;&nbsp; ___ ARP &nbsp;&nbsp; ___ Next hop
   - A) IP → MAC on the local link &nbsp; B) the next router on the path &nbsp; C) the router you send off-network traffic to

9. Fill in the blank: A device decides local vs. off-network using the subnet ____________. *(Objective: decision)*

10. **Scenario —** Your laptop can reach the printer down the hall but not any website. What is the most likely problem, and what would you check first? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-09-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-09-04-gateways.md`. In brief:

- **Objective in one line:** learners explain the default gateway, the local-vs-off-network decision, ARP, and reading a `tracert`.
- **Common misconceptions:** gateway sends by IP only; "same network" = "nearby"; hop 1 is the ISP. Correct all three.
- **Pacing:** ~28 min. The neighborhood-gate analogy carries it; `tracert` makes the hops real.
- **How CompTIA tests it:** default gateway; ARP (IP→MAC); reading a traceroute; local vs. off-network delivery.
- **Accuracy note:** `tracert`/`arp -a`/`ipconfig` are real; sample output is representative (hops/MACs vary). No fabricated device data.
- **Extension idea:** static vs. dynamic routes, routing protocols, and TTL's role in traceroute, for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Gateways & leaving the network**
>
> - **Default gateway** = your router — the **door out** for off-network traffic (`ipconfig`).
> - **Decision:** same network → **direct**; different → **gateway** (the subnet mask decides).
> - **ARP** = find the **MAC** for an IP on the local link ("who has 192.168.1.1?").
> - **Routing table** picks the **next hop**; **default route** = "everything else → the gateway."
> - **Hop 1** in `tracert` = your gateway. See MACs with `arp -a`.
> - Local works but internet doesn't → suspect the **gateway**.
>
> _(Full version: `resources/cheat-sheets/network-services-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **ARP** — How a device finds the MAC address that goes with an IP on the local network.
- **Routing** — How a router decides where to send a packet next, toward its destination.
- **Routing table** — A router's list of networks and where to forward traffic for each.
- **Next hop** — The next router a packet is handed to on its way.
- **Default route** — The "everything else" route: send unknown destinations to the gateway.
- **traceroute (tracert)** — A command that shows the routers (hops) along a packet's path.

(**Default gateway** was defined in Lesson 02-04 and reused here.)

---

## 19. Homework

- **Practice:** Run `tracert` to two sites; compare the first hop (should be your gateway).
- **Spaced review:** Redo the Lesson 08-03 flashcards on the same-network test.
- **Preview:** Next lesson closes the module — **time (NTP)** and other supporting services.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain why off-network traffic goes to the gateway? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what the default gateway does.
- [ ] I can explain the local vs. off-network decision.
- [ ] I can explain ARP (IP → MAC).
- [ ] I traced a packet's path with `tracert`.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: NTP and supporting services.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M09-L04** — "Gateways and How Traffic Leaves Your Network" · Module 09 · Unit 6_
