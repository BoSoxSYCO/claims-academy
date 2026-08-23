---
id: NA-M09-L03
module: 09
lesson: 03
title: "NAT and PAT: Sharing One Public Address"
unit: 6
objective_ids: ["3.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L08"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 09 · Lesson 03] NAT and PAT: Sharing One Public Address

> **Unit:** Unit 6 — Core Network Services · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-08 (public vs. private and the NAT preview).

You met **NAT** as a preview: the router swaps private for public so your devices reach the internet. Now we go deeper. There are a few **kinds** of NAT, and the one your home uses — **PAT** — shares a single public address among many devices using **port numbers**. Let's see exactly how.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **static**, **dynamic**, and **PAT** (overload) NAT.
- [ ] Explain how a **port number** lets many devices share **one** public IP.
- [ ] Describe the router's **NAT translation table**.
- [ ] Explain **port forwarding** and see ports with `netstat`.

---

## 2. Introduction — why this matters

Think about an apartment building. It has **one street address** — say, 123 Main Street. But many families live there. Mail still reaches the right family because each unit has an **apartment number**: "123 Main Street, **Apt 5**." The street address gets mail to the building; the apartment number gets it to the right door.

Your home network is that building. It has **one public IP address** — the street address (Lesson 08-08). But it has many devices inside. So how does a reply from the internet reach the **right** device? The router adds a **port number** — like an apartment number — to each chat. This is **PAT**. It's how one public address serves a whole home.

Why learn the kinds of NAT? The exam tests **static vs. dynamic vs. PAT**. And **port forwarding** — letting outsiders reach one inside device — is a real task. You'll use it for a game server, a camera, or a home lab.

🎯 **Exam tip:** Network+ tests **static NAT**, **dynamic NAT**, and **PAT / NAT overload**, plus **port forwarding**. Know that PAT uses **ports** to share one public IP.

🔧 **Lab link:** You'll see live ports with `netstat`, and find the **port forwarding** page on your router (read-only).

---

## 3. Simple explanation

### A quick word on ports
A **port number** labels one job on a device — like an apartment number in a street address. Your laptop can talk to many sites at once. Each chat uses a different port. (You'll learn ports fully in **Module 10**. For now, "port = apartment number" is enough.)

### Three kinds of NAT
- **Static NAT:** a **fixed one-to-one** map. One private address always maps to one public address. Use it for an inside server that must be reachable from outside at a steady address.
- **Dynamic NAT:** the router has a **pool** of public addresses. It hands one out per device **as needed**. When the device is done, that public address goes back to the pool.
- **PAT (Port Address Translation), also called NAT overload:** **many** private devices share **one** public address. Ports tell them apart. This is what home routers do.

| Kind | Mapping | Public IPs used |
|------|---------|:---------------:|
| **Static NAT** | one private ↔ one public (fixed) | one per device |
| **Dynamic NAT** | private → any free public (pool) | a pool |
| **PAT / overload** | many private → **one** public (by port) | **just one** |

### How PAT shares one address
The router keeps a **NAT translation table** — a list matching each inside conversation to a public one, using ports:

```
   inside 192.168.1.24 : port 51000  ⇄  public 203.0.113.7 : port 40001
   inside 192.168.1.25 : port 49500  ⇄  public 203.0.113.7 : port 40002
```

- **Going out:** the router rewrites the private IP. It also picks a unique public port. Then it records the pair.
- **Coming back:** a reply arrives at `203.0.113.7:40001`. The router looks up the table. It sends the reply to `192.168.1.24`.

Different port = different inside device. That's how one public IP serves them all.

### Port forwarding
By default, outsiders **can't** reach an inside device. NAT hides them (Lesson 08-08). **Port forwarding** is a rule you add. It sends traffic on a chosen **public port** to one **inside device**. For example, you forward port 25565 to your game server. It's how you let the outside in — on purpose.

> **The big idea:** **NAT** comes in three kinds. **Static** is a fixed one-to-one map. **Dynamic** uses a pool. **PAT/overload** lets many devices share one public IP by **port**. The router's **NAT translation table** tracks each device by its port, so replies return correctly. **Port forwarding** lets outsiders reach one chosen inside device.

💡 **Tip:** On Windows, `netstat -n` lists active connections with their **local** and **foreign** addresses and **ports** — ports in action.

⚠️ **Watch out:** Port forwarding opens a door from the internet to an inside device. Only forward what you must, and pair it with good passwords and a firewall (Lesson 07-04).

---

## 4. Real-world analogy

> **"PAT is an apartment building: one street address (public IP), many apartments (ports)."**

| Building | Network |
|----------|---------|
| One street address | One **public IP** |
| Apartment numbers | **Port numbers** |
| "123 Main St, Apt 5" | `203.0.113.7 : 40001` |
| The mailroom's unit list | The **NAT translation table** |
| A private line straight to Apt 2 | **Static NAT** (fixed one-to-one) |
| A set of shared outside lines | **Dynamic NAT** (a pool) |
| "Deliveries for the shop go to Apt 1" | **Port forwarding** |

The street address gets mail to the building; the apartment number gets it to the right door. Ports do exactly that for one public IP.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Static NAT** | | A fixed one-to-one map of one private address to one public address. |
| **Dynamic NAT** | | Mapping private addresses to a pool of public addresses, as needed. |
| **NAT overload** | | Another name for PAT — many devices share one public IP using ports. |
| **Port number** | | A number that labels one specific conversation or program on a device. |
| **NAT translation table** | | The router's list matching inside address:port to public address:port. |
| **Port forwarding** | | A rule that sends traffic arriving on a public port to a chosen inside device. |

---

## 6. ASCII diagram

```
   PAT — MANY DEVICES, ONE PUBLIC IP (told apart by PORTS)

   INSIDE (private)                 NAT TABLE (in the router)              OUTSIDE
   192.168.1.24:51000  ⇄  203.0.113.7:40001  ──▶ internet
   192.168.1.25:49500  ⇄  203.0.113.7:40002  ──▶ internet
   192.168.1.26:52210  ⇄  203.0.113.7:40003  ──▶ internet

   Reply to 203.0.113.7:40002  → table says → 192.168.1.25   (right device!)

   KINDS:  Static = one↔one (fixed)   Dynamic = a pool   PAT = many→one (by port)
   PORT FORWARDING = let outside reach ONE inside device on a chosen port
```

_One public IP, many inside devices — the port number is the apartment number._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-09-03-pat-table-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three inside devices with private IP:port mapped through a NAT translation table to one public IP with different ports, a reply routing back to the correct device, and a small kinds-of-NAT table.
> **Key elements & labels:** inside IP:port; NAT table rows; one public IP with ports 40001/40002/40003; reply routed by port; static/dynamic/PAT summary; port forwarding note.
> **Color meaning:** each device-to-port mapping is labeled in text; the reply's path is labeled, not color alone.
> **Flow direction:** left (inside) → middle (table) → right (internet), with a labeled return path.
> **Alt text (required):** "PAT sharing one public address. Three inside devices — 192.168.1.24, .25, and .26, each using a different local port — are mapped through the router's NAT translation table to one public address, 203.0.113.7, each with a different public port: 40001, 40002, and 40003. When a reply arrives at 203.0.113.7 port 40002, the table shows it belongs to 192.168.1.25, so the router sends it to that device. A summary lists the three kinds of NAT: static is a fixed one-to-one map, dynamic uses a pool of public addresses, and PAT or overload lets many devices share one public IP by port. A note explains port forwarding sends traffic on a chosen public port to one inside device."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-09-03-netstat-01.jpg`
> A `netstat -n` result showing local and foreign addresses with ports. Alt text: "The netstat -n output showing active connections with local and foreign IP addresses and their port numbers."
>
> **Photo 2** — `img-09-03-port-forward-01.jpg`
> A router's port-forwarding page with a rule (public port → inside device). Alt text: "A router port-forwarding page showing a rule sending a public port to an inside device's IP and port."

---

## 9. Hands-on lab

**Goal:** see ports in real connections with `netstat`, and find your router's port-forwarding page (read-only).
**Why:** ports feel abstract until you watch your own connections use them.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on the internet, plus router access. Estimated time: 12 min.

⚠️ **Before you start (safety):** `netstat` only **reads**. On the router, **look only** — do not add or change a port-forwarding rule.

### 9a. Step-by-step instructions

1. Open a browser or two tabs so you have some active connections.
2. Open the **Command Prompt** and type this exact command, then press **Enter**:

   ```
   netstat -n
   ```

3. Read the columns: **Local Address** and **Foreign Address**. Each ends in `:` and a **port number**.
4. Notice your one laptop has **many** connections, each on a **different local port**.
5. On the router page (Default Gateway), find **Port Forwarding** (often under Advanced/NAT). **Read** any rules; don't change them.

### 9b. Expected results

`netstat -n` shows lines like this (your values differ):

```
   Proto  Local Address        Foreign Address       State
   TCP    192.168.1.24:51000   142.250.72.14:443     ESTABLISHED
   TCP    192.168.1.24:51001   140.82.113.25:443     ESTABLISHED
```

- Your laptop uses **many** local ports at once — that's what PAT tracks.
- ✅ **You did it if:** you saw several connections, each on a different local port, and located the port-forwarding page.

### 9c. Verify it worked

1. Point to two lines with **different local ports** — explain how the router tells those two conversations apart.
2. Say one reason you'd add a **port-forwarding** rule (e.g., a game or home-lab server).

### 9d. Reset / roll back

Nothing changed — `netstat` reads only, and you left the router rules untouched.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking PAT needs many public IPs | Wrong model | PAT shares **one** public IP using ports |
| Confusing static and dynamic NAT | Exam miss | Static = fixed one-to-one; dynamic = a pool |
| Forwarding lots of ports "just in case" | Security holes | Forward only what you need; add a firewall |
| Believing NAT alone secures you | False safety | NAT hides devices; it's not a full firewall |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Outside can't reach my server | No port-forwarding rule | Add a rule: public port → server IP:port |
| Forwarding set but still no access | Firewall or wrong inside IP | Check the server's firewall and its (reserved) IP |
| Many devices, internet works fine | PAT doing its job | One public IP, many ports — that's normal |
| Inside server IP keeps changing | It's on DHCP | Give it a **reservation** (Lesson 09-01) or static IP |

---

## 12. Lesson summary

- **Static NAT** = fixed one-to-one; **dynamic NAT** = a pool; **PAT/overload** = many share **one** public IP by **port**.
- A **port number** is like an apartment number — it tells inside conversations apart.
- The router's **NAT translation table** maps inside IP:port ⇄ public IP:port so replies return correctly.
- **Port forwarding** lets the outside reach one chosen inside device — use it sparingly and securely.

**One-sentence recap:** NAT comes in static, dynamic, and PAT forms; PAT shares one public address among many devices using port numbers tracked in the router's translation table, and port forwarding opens a chosen door back in.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-09-03-fill-in-the-blank.md`
2. **Matching** — `wb-09-03-matching.md`
3. **Label the diagram** — `wb-09-03-label-the-diagram.md` (the NAT table)
4. **Short answer** — `wb-09-03-short-answer.md`
5. **Hands-on observation** — `wb-09-03-hands-on-observation.md` (netstat ports)
6. **Vocabulary review** — `wb-09-03-vocabulary-review.md`
7. **Reflection** — `wb-09-03-reflection.md`

**Quick written warm-up (do this now):** Which NAT kind shares one public IP among many devices? What tells the devices apart?

Kind: ____________  Tells apart by: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-09-03-knowledge-check.md`.)

1. Which NAT kind lets **many** devices share **one** public IP? *(Objective: PAT)*
   - A) static NAT
   - B) dynamic NAT
   - C) PAT (overload)
   - D) no NAT

2. What tells inside conversations apart so replies return correctly? *(Objective: ports)*
   - A) MAC addresses
   - B) port numbers
   - C) cable colors
   - D) DNS names

3. **Static NAT** is… *(Objective: static)*
   - A) a fixed one-to-one map (one private ↔ one public)
   - B) a pool of public addresses
   - C) many sharing one IP
   - D) a DNS record

4. The router's list matching inside IP:port to public IP:port is the… *(Objective: table)*
   - A) DHCP scope
   - B) NAT translation table
   - C) DNS cache
   - D) MAC table

5. **Port forwarding** is used to… *(Objective: forwarding)*
   - A) speed up Wi-Fi
   - B) let the outside reach one chosen inside device
   - C) assign IP addresses
   - D) block all traffic

6. **True or false —** PAT needs one public IP address per inside device. Explain in one sentence. *(Objective: PAT)*

7. **Dynamic NAT** uses… *(Objective: dynamic)*
   - A) one fixed public IP
   - B) a pool of public IPs handed out as needed
   - C) only private IPs
   - D) port numbers only

8. **Matching —** write the letter next to each kind. *(Objective: kinds)*
   - ___ Static NAT &nbsp;&nbsp; ___ Dynamic NAT &nbsp;&nbsp; ___ PAT
   - A) many private → one public (by port) &nbsp; B) fixed one-to-one &nbsp; C) private → a pool of public

9. Fill in the blank: A ____________ number is like an apartment number that labels one conversation. *(Objective: ports)*

10. **Scenario —** You run a small game server at home and want friends to connect from the internet. What NAT feature do you set up, and what does it do? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-09-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-09-03-nat-pat.md`. In brief:

- **Objective in one line:** learners distinguish static/dynamic/PAT NAT, explain how ports share one public IP, and describe port forwarding.
- **Common misconceptions:** PAT needs many public IPs; static = dynamic; NAT is a firewall. Correct all three.
- **Pacing:** ~28 min. The apartment-building analogy carries ports; `netstat` makes ports real.
- **How CompTIA tests it:** static vs. dynamic vs. PAT/overload; port forwarding; NAT hides inside devices.
- **Accuracy note:** documentation blocks used (203.0.113.0/24). `netstat -n` is real; sample lines are representative. Ports are introduced lightly with a forward reference to Module 10 (Prime Directive #1).
- **Extension idea:** carrier-grade NAT, NAT traversal (STUN/UPnP), and IPv6 mostly avoiding NAT, for fast learners.

---

## 17. Cheat sheet

> **Quick reference — NAT & PAT**
>
> - **Static NAT:** fixed **one-to-one** (one private ↔ one public).
> - **Dynamic NAT:** private → a **pool** of public IPs, as needed.
> - **PAT / overload:** **many** private → **one** public, told apart by **ports** (home routers).
> - **NAT translation table:** maps inside IP:port ⇄ public IP:port so replies return.
> - **Port number** = apartment number for a conversation (full detail: Module 10).
> - **Port forwarding:** public port → one inside device (use sparingly + firewall).
> - See ports: **`netstat -n`** (local/foreign address:port).
>
> _(Full version: `resources/cheat-sheets/network-services-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Static NAT** — A fixed one-to-one map of one private address to one public address.
- **Dynamic NAT** — Mapping private addresses to a pool of public addresses, as needed.
- **NAT overload** — Another name for PAT — many devices share one public IP using ports.
- **Port number** — A number that labels one specific conversation or program on a device.
- **NAT translation table** — The router's list matching inside address:port to public address:port.
- **Port forwarding** — A rule that sends traffic arriving on a public port to a chosen inside device.

(**NAT** and **PAT** were defined in Lesson 08-08 and reused here.)

---

## 19. Homework

- **Practice:** Run `netstat -n`; list five connections and their local ports.
- **Spaced review:** Redo the Lesson 08-08 flashcards on public/private and NAT.
- **Preview:** Next lesson, **gateways** — how traffic actually leaves your network.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain how one public IP serves many devices? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain static, dynamic, and PAT NAT.
- [ ] I can explain how ports let many devices share one public IP.
- [ ] I can describe the NAT translation table.
- [ ] I can explain what port forwarding does.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: gateways.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M09-L03** — "NAT and PAT: Sharing One Public Address" · Module 09 · Unit 6_
