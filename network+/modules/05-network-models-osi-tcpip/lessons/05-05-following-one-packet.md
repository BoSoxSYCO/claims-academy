---
id: NA-M05-L05
module: 05
lesson: 05
title: "Following One Packet Through All the Layers"
unit: 2
objective_ids: ["1.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M05-L02", "NA-M05-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 05 · Lesson 05] Following One Packet Through All the Layers

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~30 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 05-02 (the OSI layers) and Lesson 05-04 (encapsulation).

Time to put it all together. In this lesson we follow **one real request** — you clicking a link — from your laptop, down the layers, across the network, and up the layers on a web server. This story ties every idea in Module 05 into one clear picture.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Trace a request **down** the sender's layers and **up** the receiver's layers.
- [ ] Explain what a **switch** and a **router** each read on the way.
- [ ] Explain why the **IP address stays the same** end-to-end but the **MAC address changes** each hop.
- [ ] Define a **hop** and a **round trip**.

---

## 2. Introduction — why this matters

You have learned the layers, the two models, and encapsulation. Alone, each idea is a puzzle piece. This lesson snaps them together by following **one packet** on a real trip.

Picture mailing a package across the country. The **final delivery address** (the house) stays on the box the entire way. But at each sorting center, workers slap on a **new local label** telling the next truck where to take it. The destination never changes; the "next stop" label changes at every step.

A network does exactly this. Your data gets a **destination IP address** that stays the same from your laptop all the way to the web server. But at each **hop** — each link between two devices — it gets a **new MAC address** for just that step. Seeing this once makes routing, switching, and addressing finally click.

🎯 **Exam tip:** Network+ loves this end-to-end story. The key fact: **IP addresses are end-to-end; MAC addresses are hop-to-hop (they change at each router).**

---

## 3. Simple explanation

Let's follow one request: **you click a link** in your browser, and a web server sends back the page. We'll go down your laptop's layers, across the network, and up the server's layers.

### Step A — Down your laptop's layers (encapsulation)
1. **L7 Application:** your browser creates the request. This is the **data**.
2. **L4 Transport:** adds a **port** header so the server knows it's a web request, and splits big data into pieces → a **segment**.
3. **L3 Network:** adds an **IP** header — **your IP** (source) and the **server's IP** (destination) → a **packet**.
4. **L2 Data Link:** adds a **MAC** header — your laptop's MAC (source) and the **router's** MAC (destination for this first hop) → a **frame**.
5. **L1 Physical:** sends the frame as **bits** over Wi-Fi or the cable.

### Step B — Across the network (hop by hop)
- Your **switch** (Layer 2) reads the **frame's MAC address** and passes it to the right port. It does **not** change the IP.
- Your **router** (Layer 3) opens the frame, reads the **packet's destination IP**, and decides the next step toward the server. Then it **builds a new frame** with new MAC addresses for the next hop and sends it on.
- Across the internet, **each router repeats this**: keep the same **packet (IP stays the same)**, but wrap it in a **new frame (new MAC)** for the next link. Each link crossed is one **hop**.

### Step C — Up the server's layers (de-encapsulation)
1. **L1 Physical:** the server receives the **bits**.
2. **L2 Data Link:** checks the **frame** (MAC + error check), strips it → a **packet**.
3. **L3 Network:** reads the **IP** — "this is for me!" — strips it → a **segment**.
4. **L4 Transport:** puts the pieces back in order using the **port** → the **data**.
5. **L7 Application:** the web server reads the request and sends the page **back** the same way. The whole out-and-back trip is one **round trip**.

### The one big idea
- The **IP addresses** (source and destination) stay the **same** the whole trip — end-to-end.
- The **MAC addresses** change at **every hop** — a fresh pair for each link.

That's why your **destination IP** is like the house address (never changes) and the **MAC** is like the "next truck" label (changes each stop).

> **The big idea:** A request rides **down** your layers (wrapped into a frame of bits), crosses the network **hop by hop** — switches read MAC, routers read IP and rebuild the frame each hop — and rides **up** the server's layers (unwrapped). **IP = end-to-end; MAC = hop-to-hop.**

💡 **Tip:** When you trace a packet, ask at each device: "Is this a Layer 2 device (switch, reads MAC) or a Layer 3 device (router, reads IP)?"

---

## 4. Real-world analogy

> **"A packet is a boxed parcel: the delivery address stays on it the whole way, but each depot adds a new 'next truck' label."**

| Shipping a parcel | Networking |
|-------------------|------------|
| The house delivery address | **Destination IP** (stays the same) |
| The "next truck / next depot" label | **MAC address** (changes each hop) |
| A sorting depot passing it along | A **router** (reads IP, relabels for next hop) |
| A local mailroom to the right door | A **switch** (reads MAC, local delivery) |
| One leg of the journey | One **hop** |
| Out to the store and back with your order | A **round trip** |

The parcel's final address never changes; only the local routing label does. Same with IP and MAC.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Hop** | hop | One step from one device to the next along the path. |
| **Source address** | | The address the data is coming **from**. |
| **Destination address** | | The address the data is going **to**. |
| **Round trip** | | The full out-and-back journey of a request and its reply. |
| **End-to-end** | | Staying the same from the first sender to the final receiver (like the IP). |
| **Hop-to-hop** | | Changing at each link along the way (like the MAC). |

---

## 6. ASCII diagram

```
   ONE REQUEST, END TO END

   [Your Laptop] --Wi-Fi--> [Switch] --> [Router] === internet === [Router] --> [Web Server]
        L1-L7 down            L2 only      L3: reads IP,   many hops    L3         L1-L7 up
        (encapsulate)         reads MAC    new frame each hop           reads IP   (de-encapsulate)

   Destination IP:  YOUR-IP -> SERVER-IP     ... SAME the whole way (end-to-end)
   MAC address:     laptop->router  router->next ... CHANGES every hop (hop-to-hop)

   Then the page comes back the same route = one ROUND TRIP.
```

_The packet's IP stays fixed end-to-end; the frame's MAC is rebuilt at every hop._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-05-05-packet-journey-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a left-to-right path — laptop → switch → router → internet cloud → router → web server — with two label tracks beneath: a "Destination IP" track that stays one constant value, and a "MAC" track that changes value at each device.
> **Key elements & labels:** each device tagged with the layer it works at (switch = L2, router = L3); the IP track constant; the MAC track changing per hop; a "round trip" arrow returning.
> **Color meaning:** the constant IP track uses one shade and one repeated value; the changing MAC track uses a different shade and different values — both are text-labeled, so it reads in black and white.
> **Flow direction:** left to right for the request, with a return arrow for the reply.
> **Alt text (required):** "A path from a laptop through a switch and router, across the internet, to a web server. A destination IP label stays the same value the whole way, while the MAC address label changes at each device. The switch is tagged Layer 2 and the routers Layer 3, and a return arrow shows the round trip."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-05-05-router-switch-01.jpg`
> A home router and switch side by side. Alt text: "A router (Layer 3) and switch (Layer 2), the two devices a packet passes through."
>
> **Photo 2** — `img-05-05-traceroute-01.jpg`
> A `tracert` result showing multiple hops. Alt text: "A traceroute result listing multiple hops between a computer and a server."
>
> **Photo 3** — `img-05-05-parcel-relabel-01.jpg`
> A parcel with an old label crossed out and a new one added. Alt text: "A parcel being relabeled at a depot, like a new MAC address at each hop."

---

## 9. Hands-on lab

**Goal:** see real hops with `tracert`, and trace one packet's layers on paper.
**Why:** watching real hops on your own laptop makes the end-to-end story concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), online. Pen and paper.
- Estimated time: 14 min.

⚠️ **Before you start (safety):** `tracert` only reads the path; it changes nothing.

### 9a. Step-by-step instructions

1. Open **Command Prompt** (search "cmd", press Enter).
2. Type this exact command and press Enter:
   ```
   tracert www.google.com
   ```
3. Each numbered line is one **hop** — one device your packet passed through. Count how many hops it took. Write the number down.
4. Notice the times (in ms) — that's the latency you learned in Lesson 04-06, measured hop by hop.
5. On paper, draw: **laptop → switch (L2) → router (L3) → … → server.** Under it, write "IP stays the same" and "MAC changes each hop."
6. Circle where the **IP** is read (routers) and where the **MAC** is read (switch).

### 9b. Expected results

- `tracert` lists several numbered **hops** to the server.
- Your paper trace shows the request going down, across hops, and up.
- ✅ **You did it if:** you can say "the destination IP never changed, but the MAC changed at each hop."

### 9c. Verify it worked

1. Point to one `tracert` line and say "this is one hop — one router along the way."
2. Ask: "Which device reads the IP to choose the next hop?" (The router, Layer 3.)

### 9d. Reset / roll back

Nothing to undo — `tracert` only measures. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking the MAC stays the same end-to-end | You misread routing | MAC changes every hop; only IP stays end-to-end |
| Thinking a switch reads IP | You mix up L2 and L3 | A switch reads MAC (L2); a router reads IP (L3) |
| Thinking each router makes a new IP packet | You lose the end-to-end idea | The packet's IP stays; only the frame (MAC) is rebuilt |
| Forgetting the reply trip | You count only one way | A request plus its reply is one round trip |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `tracert` shows `*` on a line | A device didn't reply | Normal — some devices hide; the trace still continues |
| Can't tell L2 from L3 device | Roles unclear | Switch = MAC/local (L2); router = IP/between networks (L3) |
| Confused why IP never changes | Missed the anchor | IP is the final address (end-to-end); MAC is the next-stop label (hop-to-hop) |

---

## 12. Lesson summary

- A request rides **down** your layers (data → segment → packet → frame → bits), crosses the network, and rides **up** the server's layers.
- A **switch** reads the **MAC** (Layer 2); a **router** reads the **IP** (Layer 3) and rebuilds the frame for the next hop.
- The **destination IP stays the same end-to-end**; the **MAC changes at every hop**.
- Each link is a **hop**; the out-and-back journey is a **round trip**.

**One-sentence recap:** A packet travels down your layers, hop by hop across routers and switches, and up the server's layers — its IP address staying the same end-to-end while its MAC address changes at every hop.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-05-05-fill-in-the-blank.md`
2. **Matching** — `wb-05-05-matching.md`
3. **Label the diagram** — `wb-05-05-label-the-diagram.md` (the packet's journey)
4. **Short answer** — `wb-05-05-short-answer.md`
5. **Hands-on observation** — `wb-05-05-hands-on-observation.md` (run `tracert`)
6. **Vocabulary review** — `wb-05-05-vocabulary-review.md`
7. **Reflection** — `wb-05-05-reflection.md`

**Quick written warm-up (do this now):** Which address stays the same end-to-end — IP or MAC? Which device reads the IP to pick the next hop?

Same end-to-end: ____________  Reads IP: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-05-05-knowledge-check.md`.)

1. Which address stays the **same** from your laptop to the server? *(Objective: end-to-end)*
   - A) MAC address
   - B) IP address
   - C) Port number changes it
   - D) None stay the same

2. Which address **changes** at every hop? *(Objective: hop-to-hop)*
   - A) IP address
   - B) MAC address
   - C) The server's name
   - D) Nothing changes

3. A **switch** works at which layer and reads which address? *(Objective: devices)*
   - A) Layer 3, IP
   - B) Layer 2, MAC
   - C) Layer 4, port
   - D) Layer 1, bits

4. A **router** works at which layer and reads which address? *(Objective: devices)*
   - A) Layer 2, MAC
   - B) Layer 3, IP
   - C) Layer 7, app
   - D) Layer 1, bits

5. What is a **hop**? *(Objective: hop)*
   - A) The whole internet
   - B) One step from one device to the next
   - C) A type of cable
   - D) A port number

6. **True or false —** Each router builds a new frame (new MAC) but keeps the same packet (same IP). Explain in one sentence. *(Objective: core idea)*

7. What does the `tracert` command show you? *(Objective: tool)*
   - A) Your password
   - B) The hops along the path to a server
   - C) Your bandwidth only
   - D) The color of the cable

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Hop &nbsp;&nbsp; ___ Round trip &nbsp;&nbsp; ___ Destination address
   - A) the address the data is going to &nbsp; B) one step to the next device &nbsp; C) the full out-and-back journey

9. Fill in the blank: The IP address is ____________-to-____________, but the MAC is hop-to-hop. *(Objective: core idea)*

10. **Scenario —** Your packet passes through 8 routers to reach a server. How many times did the destination IP change, and how many times did the MAC change? Explain. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-05-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-05-05-packet-journey.md`. In brief:

- **Objective in one line:** learners trace a request end-to-end and explain IP (end-to-end) vs. MAC (hop-to-hop).
- **Common misconceptions:** MAC stays the same; switch reads IP; router makes a new IP packet. Correct all three.
- **Pacing:** ~30 min — the Module 05 capstone; the `tracert` lab is the highlight.
- **How CompTIA tests it:** IP end-to-end vs. MAC hop-to-hop; which device reads which address.
- **Support idea:** re-use the parcel-relabeling picture for every hop.
- **Extension idea:** read a `tracert` and discuss why hop times vary (distance, congestion).

---

## 17. Cheat sheet

> **Quick reference — One packet, end to end**
>
> - **Down** the sender: data → segment → packet → frame → bits (encapsulate).
> - **Across:** switch reads **MAC** (L2); router reads **IP** (L3) and builds a **new frame** each hop.
> - **Up** the receiver: bits → frame → packet → segment → data (de-encapsulate).
> - **IP = end-to-end** (never changes) · **MAC = hop-to-hop** (changes each link).
> - One link = a **hop**; out-and-back = a **round trip**. See hops with `tracert`.
>
> _(Full version: `resources/cheat-sheets/network-models-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Hop** — One step from one device to the next along the path.
- **Source address** — The address the data is coming from.
- **Destination address** — The address the data is going to.
- **Round trip** — The full out-and-back journey of a request and its reply.
- **End-to-end** — Staying the same from the first sender to the final receiver (like the IP).
- **Hop-to-hop** — Changing at each link along the way (like the MAC).

---

## 19. Homework

- **Practice:** Run `tracert` to two different websites. Which took more hops? Write down both hop counts.
- **Spaced review:** Redo the Lesson 05-04 flashcards for encapsulation and the PDU names.
- **Preview:** That completes the models. Next module goes physical — the real cables, connectors, and media that carry these bits (Module 06).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain why the IP stays the same but the MAC changes? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can trace a request down the sender and up the receiver.
- [ ] I know a switch reads MAC (L2) and a router reads IP (L3).
- [ ] I can explain IP end-to-end vs. MAC hop-to-hop.
- [ ] I ran `tracert` and counted the hops.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: physical cables and media (Module 06).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M05-L05** — "Following One Packet Through All the Layers" · Module 05 · Unit 2_
