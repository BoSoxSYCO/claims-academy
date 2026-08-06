---
id: NA-M11-L05
module: 11
lesson: 05
title: "Routing Basics: Static vs. Dynamic"
unit: 8
objective_ids: ["2.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M09-L04", "NA-M11-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 05] Routing Basics: Static vs. Dynamic

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E1 (concept lesson; the home router shows a real routing table)
> **You'll need first:** how traffic leaves your network (09-04) and VLANs as separate networks (11-01).

A router's whole job is to move data between networks. But how does it **know** where to send each packet? It uses a **routing table** — a list of "to reach this network, go this way." This lesson shows the two ways that table gets filled in: **static** (you type each route by hand) and **dynamic** (routers learn routes from each other). Knowing both is core exam material.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **routing table** is and why a router needs one.
- [ ] Describe a **static route** and when to use it.
- [ ] Describe **dynamic routing** and when to use it.
- [ ] Name the trade-offs between static and dynamic.

---

## 2. Introduction — why this matters

Think about giving someone directions. If you know one exact route to your house, you can write it down once: "turn left, then right, third house." That's simple and never changes — but if a road closes, your written note is now wrong, and you have to rewrite it.

Now imagine a car with a live GPS. It **learns** the roads on its own. It watches for closures. It picks a new route when one is needed. That takes more setup, but it adapts.

Routers face the same choice. A **static route** is the written note. You type it by hand. It stays exactly as written. **Dynamic routing** is the GPS. Routers talk to each other. They learn the networks. They update on their own when something changes.

Small networks often use static routes. They have few networks that rarely change. Big networks use dynamic routing. They have too many networks to type, and paths change often. The exam expects you to know both, and when each one fits.

🎯 **Exam tip:** Static = manual, no auto-update. Dynamic = learned, auto-updates. Know the trade-offs.

🔧 **Lab link:** Your home router already has a routing table you can view — real routes, on your own gear.

---

## 3. Simple explanation

### The routing table

Every router keeps a **routing table**. This is a list of networks. For each one, it says which way to send the packet — the **next hop**. When a packet arrives, the router looks up its destination network. Then it forwards the packet that way. Is there no matching entry? Then it uses the **default route** (from Lesson 09-04): "send everything unknown to the gateway."

### Static routing (you type it)

A **static route** is a route you enter **by hand**. You tell the router one rule: "to reach network `192.168.20.0/24`, send it to `10.0.0.2`." It stays that way until you change it.

- **Good:** simple, predictable, no extra traffic, full control.
- **Bad:** you must update every router by hand; if a link fails, static routes don't reroute on their own.
- **Best for:** small networks, or one fixed path that rarely changes.

### Dynamic routing (routers learn it)

**Dynamic routing** uses a **routing protocol** so routers **share** what they know. Each router tells its neighbors which networks it can reach. Together they build their tables. When a link changes, they update on their own.

Common routing protocols (names to recognize):

- **OSPF (Open Shortest Path First)** — a popular protocol inside one organization.
- **EIGRP** — a Cisco protocol, also inside an organization.
- **BGP (Border Gateway Protocol)** — the protocol that routes the whole internet between providers.

- **Good:** scales to many networks; reroutes automatically when a path fails.
- **Bad:** more setup, uses some bandwidth and router effort, more to understand.
- **Best for:** large or changing networks.

### Side by side

| | **Static** | **Dynamic** |
|---|-----------|-------------|
| Who fills the table | you, by hand | routers, automatically |
| Reacts to a failed link | no | yes |
| Extra network traffic | none | some (routers chatter) |
| Effort to set up | low (few routes) | higher |
| Best for | small, fixed networks | large, changing networks |

> **The big idea:** A router forwards packets using its **routing table**. You can fill that table two ways. A **static route** is typed by hand. It is simple and predictable, but it won't reroute on its own. **Dynamic routing** uses a routing protocol, like OSPF, EIGRP, or BGP. Routers learn routes from each other and update on their own. That takes more setup, but it scales and self-heals. Static suits small, fixed networks. Dynamic suits large, changing ones.

💡 **Tip:** Many real networks use **both** — static for a few fixed paths, dynamic for the rest.

⚠️ **Watch out:** A static route does **not** know when a link goes down. If the path breaks, traffic using that static route just fails until someone fixes it.

---

## 4. Real-world analogy

> **"A static route is written directions; dynamic routing is a live GPS that reroutes itself."**

| Written directions (static) | Live GPS (dynamic) |
|-----------------------------|--------------------|
| You write each turn by hand | It learns the roads for you |
| Never changes on its own | Updates when a road closes |
| Fine for one familiar trip | Better across a whole city |
| Wrong if a road closes | Reroutes automatically |

For one short familiar trip, a note is enough. Across a big, changing city, you want the GPS.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Routing table** | | A router's list of networks and which way to send traffic for each. |
| **Static route** | | A route typed in by hand that stays until you change it. |
| **Dynamic routing** | | Routers learning routes from each other and updating automatically. |
| **Routing protocol** | | The language routers use to share route info (OSPF, EIGRP, BGP). |
| **Next hop** | | The next router a packet is handed to on its way. |

---

## 6. ASCII diagram

```
   TWO WAYS TO FILL A ROUTING TABLE

   STATIC (by hand)                 DYNAMIC (learned)
   ┌───────────────┐                ┌───────────────┐
   │ you type:     │                │ routers share │
   │ 192.168.20.0  │                │ what they know│
   │  → 10.0.0.2   │                │ (OSPF/EIGRP/  │
   │ (stays fixed) │                │  BGP)         │
   └───────────────┘                └───────────────┘
   no auto-reroute                  auto-updates on change

   Small, fixed network → static.  Large, changing → dynamic.
```

_Both fill the same routing table — one by hand, one automatically._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-05-static-vs-dynamic-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two side-by-side panels — "Static (by hand)" with a typed route entry, and "Dynamic (learned)" with routers exchanging route info — each with its trade-offs.
> **Key elements & labels:** static panel (a hand typing `192.168.20.0/24 → 10.0.0.2`, "no auto-reroute"), dynamic panel (routers with arrows sharing routes, "OSPF / EIGRP / BGP", "auto-updates"), a bottom rule "small/fixed → static; large/changing → dynamic."
> **Color meaning:** each panel titled in words (Static / Dynamic); the labels carry the meaning, not color.
> **Flow direction:** two panels left and right, a summary bar beneath.
> **Alt text (required):** "Two side-by-side panels showing the two ways to fill a routing table. The left panel, Static by hand, shows a person typing a route that says to reach network 192.168.20.0/24 send traffic to 10.0.0.2, with a note that it does not reroute on its own. The right panel, Dynamic learned, shows several routers exchanging route information using protocols named OSPF, EIGRP, and BGP, with a note that the table updates automatically when a path changes. A summary bar reads: small or fixed networks use static, large or changing networks use dynamic."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-05-router-routetable-01.jpg`
> A home router's status page showing its routing table. Alt text: "A home router admin page showing the routing table, with destination networks and their next hops."
>
> **Photo 2** — `img-11-05-route-print-01.jpg`
> A Windows `route print` result. Alt text: "The Windows route print command output, showing the computer's own routing table with the default route."

---

## 9. Hands-on lab

**Goal:** view a real routing table on your Windows laptop and find the default route.
**Why:** seeing an actual table makes "static vs. dynamic" concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on your network. Estimated time: 12 min.

⚠️ **Before you start (safety):** `route print` only **reads**. It changes nothing.

### 9a. Step-by-step instructions

1. Open **Command Prompt**.
2. Run this exact command:

   ```
   route print
   ```

3. Find the **IPv4 Route Table** section.
4. Look for the line whose destination is `0.0.0.0` with mask `0.0.0.0` — that's your **default route**.
5. Note the **Gateway** column on that line — it's your router's address.

### 9b. Expected results

You'll see a table like this (yours will differ), using documentation values:

```
   Network Destination    Netmask          Gateway        Interface
   0.0.0.0                0.0.0.0          192.168.1.1     192.168.1.24
   192.168.1.0            255.255.255.0    On-link         192.168.1.24
```

- The `0.0.0.0` line is the **default route** — "everything else goes to the gateway."
- The `192.168.1.0` line is your **local network** (directly connected).

- ✅ **You did it if:** you found the `0.0.0.0` default route and named its gateway.

### 9c. Verify it worked

1. Point to the `0.0.0.0` line and say "this is my default route to the gateway."
2. Say whether your laptop's routes are static or learned (a laptop's are mostly automatic/local, set by DHCP).

### 9d. Reset / roll back

Nothing changed — `route print` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking static routes self-heal | Traffic fails on a broken link | Static is manual; use dynamic to auto-reroute |
| Using dynamic routing on a tiny network | Extra effort for no gain | A couple of static routes are simpler |
| Forgetting the default route | Unknown networks go nowhere | Keep a default route to the gateway |
| Confusing routing with switching | Wrong layer | Switching = Layer 2 (MAC); routing = Layer 3 (IP) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can reach local but not other networks | Missing/incorrect route | Check the routing table for the destination network |
| Traffic fails after a link dropped | Static route didn't reroute | Add a backup route or use dynamic routing |
| Everything unknown fails | No default route | Add a default route to the gateway |
| Routes keep changing unexpectedly | Dynamic routing reacting to a flapping link | Fix the unstable link |

---

## 12. Lesson summary

- A router forwards packets using its **routing table**.
- A **static route** is typed by hand — simple, predictable, but no auto-reroute.
- **Dynamic routing** uses a protocol (OSPF, EIGRP, BGP) to learn routes and auto-update.
- **Static** fits small/fixed networks; **dynamic** fits large/changing ones; many use both.

**One-sentence recap:** Routers forward by a routing table you can fill by hand (static — simple but manual) or let routers learn and update automatically (dynamic — scalable and self-healing).

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-05-fill-in-the-blank.md`
2. **Matching** — `wb-11-05-matching.md`
3. **Label the diagram** — `wb-11-05-label-the-diagram.md` (static vs. dynamic)
4. **Short answer** — `wb-11-05-short-answer.md`
5. **Hands-on observation** — `wb-11-05-hands-on-observation.md` (route print)
6. **Vocabulary review** — `wb-11-05-vocabulary-review.md`
7. **Reflection** — `wb-11-05-reflection.md`

**Quick written warm-up (do this now):** Which type is typed by hand? Which type auto-updates?

By hand: ____________  Auto-updates: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-05-knowledge-check.md`.)

1. A **routing table** tells a router… *(Objective: table)*
   - A) which MAC address a port has
   - B) which way to send traffic for each destination network
   - C) the switch's password
   - D) the Wi-Fi channel

2. A **static route** is… *(Objective: static)*
   - A) learned from other routers
   - B) typed in by hand and stays fixed
   - C) a type of cable
   - D) the same as a VLAN

3. **Dynamic routing** means… *(Objective: dynamic)*
   - A) routers learn routes from each other and auto-update
   - B) you type every route by hand
   - C) the network has no routes
   - D) routing is turned off

4. Which is a **routing protocol**? *(Objective: protocols)*
   - A) HTTP
   - B) OSPF
   - C) DHCP
   - D) SMTP

5. A big advantage of **dynamic** routing is… *(Objective: trade-offs)*
   - A) it uses zero bandwidth
   - B) it reroutes automatically when a link fails
   - C) it needs no setup
   - D) it only works on switches

6. **True or false —** A static route reroutes on its own when a link goes down. Explain in one sentence. *(Objective: static)*

7. Which routing method fits a **small, rarely-changing** network best? *(Objective: when to use)*
   - A) dynamic only
   - B) static
   - C) no routing
   - D) switching

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ Static route &nbsp;&nbsp; ___ Dynamic routing &nbsp;&nbsp; ___ Routing protocol
   - A) The language routers use to share routes
   - B) A route typed by hand
   - C) Routers learning routes automatically

9. Fill in the blank: The protocol that routes the whole internet between providers is ____________. *(Objective: protocols)*

10. **Scenario —** A small office has two networks joined by one router, and the layout almost never changes. Which routing method would you choose, and give one reason and one risk. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-05-routing-basics.md`. In brief:

- **Objective in one line:** learners explain the routing table and compare static vs. dynamic routing, including trade-offs and protocol names.
- **Common misconceptions:** "static routes self-heal"; "routing = switching." Correct both.
- **Pacing:** ~30 min. The GPS analogy carries the static/dynamic split; the `route print` lab makes it real.
- **How CompTIA tests it:** static = manual/no auto-update; dynamic = learned/auto-update; recognize OSPF/EIGRP/BGP; know when each fits.
- **Accuracy note (Prime Directive #7):** `route print` is a genuine Windows command; sample output uses documentation addresses (RFC 5737-style private examples). No fabricated device data.
- **Extension idea:** administrative distance and metrics — how a router picks between two routes to the same network.

---

## 17. Cheat sheet

> **Quick reference — Static vs. dynamic routing**
>
> | | Static | Dynamic |
> |---|--------|---------|
> | Filled by | you, by hand | routers, automatically |
> | Auto-reroute on failure | **no** | **yes** |
> | Extra traffic | none | some |
> | Setup effort | low | higher |
> | Best for | small/fixed | large/changing |
>
> - **Routing table** = networks + the way to reach each (next hop).
> - **Default route** (`0.0.0.0/0`) = "everything else → the gateway."
> - **Routing protocols:** OSPF, EIGRP (inside an org) · BGP (the internet).
> - See your own table: **`route print`** (Windows) — find the `0.0.0.0` default route.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Static route** — A route typed into a router by hand that stays until you change it.
- **Dynamic routing** — Routers learning routes from each other and updating automatically.
- **Routing protocol** — The language routers use to share route information (OSPF, EIGRP, BGP).
- **OSPF (Open Shortest Path First)** — A common dynamic routing protocol used inside one organization.
- **BGP (Border Gateway Protocol)** — The routing protocol that connects providers across the whole internet.

(Routing table and next hop were defined in Module 09 and are reused here.)

---

## 19. Homework

- **Practice:** From your `route print`, write down the default route and one local route.
- **Spaced review:** Explain static vs. dynamic using the written-directions vs. GPS analogy.
- **Preview:** Next lesson, **inter-VLAN routing** — how a router lets your VLANs talk.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Would my home network use static or dynamic routing? Why? _______________________
3. What still feels fuzzy about routing tables? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a routing table does.
- [ ] I can describe a static route and when to use it.
- [ ] I can describe dynamic routing and name a protocol.
- [ ] I know the trade-offs between static and dynamic.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers inter-VLAN routing.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L05** — "Routing Basics: Static vs. Dynamic" · Module 11 · Unit 8_
