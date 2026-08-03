---
id: NA-M04-L05
module: 04
lesson: 05
title: "Client-Server vs. Peer-to-Peer"
unit: 2
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M04-L02", "NA-M04-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 05] Client-Server vs. Peer-to-Peer

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 04-02 (nodes and links) and Lesson 04-04 (topologies).

You now know the shapes networks take. But there's another question: **who serves whom?** Some networks have one main computer that hands things out. Others let every computer share as equals. These two styles are **client-server** and **peer-to-peer** — and this lesson makes both clear.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the **client-server** model (one server, many clients).
- [ ] Explain the **peer-to-peer** model (equal computers sharing).
- [ ] Name one strength and one weakness of each.
- [ ] Give a real example of each from daily life.

---

## 2. Introduction — why this matters

Back in Module 01 you met a **client** (a computer that asks) and a **server** (a computer that provides). Now we zoom out to see how a whole network is organized around that idea.

Think about two ways to feed a group. One way is a **restaurant**: a kitchen cooks, and many customers order from it. The kitchen is the one place that serves everyone. The other way is a **potluck**: everyone brings a dish and shares directly with each other. No central kitchen — everyone both gives and takes.

Networks work the same two ways. In **client-server**, one main computer (the server) serves many others (the clients). In **peer-to-peer**, every computer is equal and shares directly with the others. Knowing which style a network uses tells you where the data lives, who is in charge, and what breaks if one machine goes down.

🎯 **Exam tip:** Network+ expects you to compare these two models — their setup, cost, and weak points — and to spot which one a described network uses.

---

## 3. Simple explanation

Both models are about **who provides** and **who asks**. Let's take them one at a time.

### Client-server — one server, many clients
In the **client-server** model, one powerful computer is the **server**. It stores files, runs services, and answers requests. The other computers are **clients**; they ask the server for things.

When you open a website, your browser (the client) asks a **web server** for the page. Email, online games, and company file shares work the same way — one server, many clients.

- **Strength:** central control. Files and security live in one place, so they are easy to manage and back up. It also **scales** well — add more clients without changing the model.
- **Weakness:** the server is a **single point of failure**. If it goes down, every client loses the service. A good server also costs money.

### Peer-to-peer — equal computers sharing
In the **peer-to-peer** (P2P) model, there is **no central server**. Every computer is a **peer** — an equal. Each peer can act as **both** a client and a server: it can ask for things and share things at the same time.

Two laptops sharing files directly, or a small home group sharing a printer without a server, are peer-to-peer.

- **Strength:** cheap and simple. No costly server to buy or run. Easy to set up for a few devices.
- **Weakness:** hard to manage as it grows. Files are scattered across many machines, so backups and security get messy. It does not scale well.

### The key difference
Client-server has a **boss** (the server). Peer-to-peer has **equals** (peers). That one difference drives every trade-off.

> **The big idea:** **Client-server** = one server serves many clients (central, managed, but one point of failure). **Peer-to-peer** = equal peers share directly (cheap and simple, but hard to grow and secure).

💡 **Tip:** Ask "Is there one main computer everyone depends on?" Yes → client-server. No, everyone's equal → peer-to-peer.

---

## 4. Real-world analogy

> **"Client-server is a restaurant; peer-to-peer is a potluck."**

| Feeding a group | Network model | What it's like |
|-----------------|---------------|----------------|
| A **restaurant** kitchen serves all customers | **Client-server** | One server provides; many clients ask |
| A **potluck** where everyone brings and shares | **Peer-to-peer** | Every computer shares as an equal |
| Kitchen closes → nobody eats | Server fails → clients lose service | The single point of failure |
| Everyone chips in a dish | Every peer shares its own files | No central provider |

The restaurant is organized and easy to manage, but it all depends on the kitchen. The potluck is easy and cheap, but it gets messy when the crowd grows.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Client-server** | | A model where one server provides and many clients ask. |
| **Peer-to-peer (P2P)** | peer-to-peer | A model where equal computers share directly, with no central server. |
| **Peer** | peer | An equal computer in a P2P network; it can both ask and share. |
| **Web server** | | A server that stores and sends web pages to browsers. |
| **Single point of failure** | | One part whose failure takes down the whole service. |
| **Scale** | scale | To grow to handle more users or devices without breaking. |

---

## 6. ASCII diagram

```
   CLIENT-SERVER                    PEER-TO-PEER (P2P)

     [Client]  [Client]              [Peer]-----[Peer]
         \       /                     |  \     /  |
          \     /                      |   \   /   |
          [ SERVER ]                   |    \ /    |
          /     \                      |    / \    |
         /       \                     |   /   \   |
     [Client]  [Client]              [Peer]-----[Peer]

  one server answers many clients   every peer is equal; each
  (central provider)                shares directly (no boss)
```

_Client-server has one central provider. Peer-to-peer has equals sharing directly._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-05-client-server-p2p-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two panels. Left: four clients around one larger central server, arrows from clients to server. Right: four equal peers each linked to the others, no center.
> **Key elements & labels:** left panel titled "Client-server" with the big box labeled "server" and small boxes "client"; right panel titled "Peer-to-peer" with four equal boxes labeled "peer."
> **Color meaning:** the server is drawn larger **and** labeled "server," so size and text carry the meaning, not color alone; peers are all the same size and labeled "peer."
> **Flow direction:** left panel arrows point client → server; right panel shows equal two-way links.
> **Alt text (required):** "Two panels. On the left, a client-server network: four small client boxes each send an arrow to one large central server box. On the right, a peer-to-peer network: four equal peer boxes are joined directly to one another with no central server."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-05-server-rack-01.jpg`
> A server in a rack. Alt text: "A server in a rack, the central provider in a client-server network."
>
> **Photo 2** — `img-04-05-two-laptops-share-01.jpg`
> Two laptops sharing a file directly. Alt text: "Two laptops sharing a file directly, a peer-to-peer setup."
>
> **Photo 3** — `img-04-05-browser-webserver-01.jpg`
> A laptop browser open to a website. Alt text: "A browser open to a website, acting as a client asking a web server."

---

## 9. Hands-on lab

**Goal:** spot client-server and peer-to-peer in your own daily use.
**Why:** matching the models to real apps you use makes the difference stick.

**You will need**
- Your laptop and phone (Equipment tier **E1**). Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** You only browse and write things down. You change nothing.

### 9a. Step-by-step instructions

1. Open a **website** in your browser. Your browser is the **client**; the site runs on a **web server**. Write "website = client-server."
2. Think of your **email**. You (client) reach a mail **server**. Write "email = client-server."
3. Think of two phones sharing a photo directly (AirDrop, Nearby Share, or Bluetooth). No central server sits between them — that is **peer-to-peer**. Write it down.
4. For each item, note **who serves** and **who asks**.
5. Make two lists on your paper: **Client-server** and **Peer-to-peer**. Put at least two real examples under each.

### 9b. Expected results

- You have at least two real **client-server** examples and two **peer-to-peer** examples.
- For each, you can say who is the server (or that there is none).
- ✅ **You did it if:** you can point to one app that depends on a server and one that shares peer-to-peer.

### 9c. Verify it worked

1. For each example, ask: "If one central computer went down, would this stop?" If yes, it's client-server.
2. Say why a potluck (P2P) has no single point of failure.

### 9d. Reset / roll back

Nothing to undo — you only browsed and took notes. Keep the two lists for review.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking P2P has a hidden server | You mislabel it | In true P2P, peers share directly — no central server |
| Thinking client-server is always better | You over-generalize | For a few devices, P2P is cheaper and simpler |
| Forgetting a peer can serve too | You misread P2P | A peer can be client **and** server at once |
| Mixing up model with topology | You confuse two ideas | Topology = shape (Lesson 04-04); model = who serves whom |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't tell the model from a description | Missing the key clue | Look for one central provider (server) vs. equals |
| Not sure why big networks use servers | Trade-off unclear | Central control makes managing and backing up easier |
| P2P vs. topology confusion | Two ideas at once | A star can be client-server **or** P2P — they answer different questions |

---

## 12. Lesson summary

- **Client-server:** one server provides; many clients ask. Central and easy to manage, but the server is a single point of failure and costs money.
- **Peer-to-peer:** equal peers share directly, with no central server. Cheap and simple, but hard to manage, secure, and grow.
- A **peer** can be both client and server at once.
- The key question: **is there one main computer everyone depends on?**

**One-sentence recap:** Client-server puts one server in charge of many clients, while peer-to-peer lets equal computers share directly — trading central control against low cost.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-05-fill-in-the-blank.md`
2. **Matching** — `wb-04-05-matching.md`
3. **Label the diagram** — `wb-04-05-label-the-diagram.md` (client-server vs. P2P)
4. **Short answer** — `wb-04-05-short-answer.md`
5. **Hands-on observation** — `wb-04-05-hands-on-observation.md` (spot both models in your apps)
6. **Vocabulary review** — `wb-04-05-vocabulary-review.md`
7. **Reflection** — `wb-04-05-reflection.md`

**Quick written warm-up (do this now):** When you open a website, are you a client or a server? Does a potluck have a central kitchen?

Website: ____________  Potluck: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-05-knowledge-check.md`.)

1. In the **client-server** model, the server… *(Objective: client-server)*
   - A) asks other computers for things
   - B) provides files and services to many clients
   - C) is always a phone
   - D) has no job

2. In a **peer-to-peer** network, the computers are… *(Objective: P2P)*
   - A) all equal, sharing directly
   - B) ruled by one server
   - C) never able to share
   - D) only printers

3. Which is a **strength** of client-server? *(Objective: trade-offs)*
   - A) It needs no computers
   - B) Central control makes it easy to manage and back up
   - C) It is always free
   - D) It has no server

4. Which is a **weakness** of client-server? *(Objective: trade-offs)*
   - A) Too many servers
   - B) The server is a single point of failure
   - C) It can't use the internet
   - D) Clients can't ask for anything

5. A **peer** in a P2P network can… *(Objective: peer)*
   - A) only ask, never share
   - B) only share, never ask
   - C) be both a client and a server
   - D) never join the network

6. **True or false —** Peer-to-peer networks have one central server. Explain in one sentence. *(Objective: P2P)*

7. When your browser opens a web page, your browser is the… *(Objective: apply)*
   - A) server
   - B) client
   - C) peer only
   - D) backbone

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Client-server &nbsp;&nbsp; ___ Peer-to-peer &nbsp;&nbsp; ___ Single point of failure
   - A) equal computers share directly &nbsp; B) one server serves many clients &nbsp; C) one part whose failure stops the service

9. Fill in the blank: In client-server, the ____________ asks the server for things. *(Objective: client-server)*

10. **Scenario —** A tiny home office of two laptops wants to share files with no money spent on a server. Which model fits, and why? *(Objective: choose a model)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-05-client-server-p2p.md`. In brief:

- **Objective in one line:** learners compare client-server and peer-to-peer and pick the right one for a scenario.
- **Common misconceptions:** P2P has a hidden server; client-server is always better; model = topology. Correct all three.
- **Pacing:** ~25 min. The spot-it-in-your-apps lab drives it home.
- **How CompTIA tests it:** model comparison and scenario selection; single-point-of-failure language.
- **Support idea:** use the restaurant vs. potluck picture for every example.
- **Extension idea:** mention hybrid apps (P2P with a central login server) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Client-server vs. peer-to-peer**
>
> - **Client-server** = one server provides, many clients ask. Central, managed, scales — but the server is a single point of failure and costs money.
> - **Peer-to-peer (P2P)** = equal peers share directly, no server. Cheap and simple — but hard to manage, secure, and grow.
> - **Peer** = an equal that can be both client and server.
> - **Key question:** is there one main computer everyone depends on? Yes → client-server; no → P2P.
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Client-server** — A model where one server provides and many clients ask.
- **Peer-to-peer (P2P)** — A model where equal computers share directly, with no central server.
- **Peer** — An equal computer in a P2P network; it can both ask and share.
- **Web server** — A server that stores and sends web pages to browsers.
- **Single point of failure** — One part whose failure takes down the whole service.
- **Scale** — To grow to handle more users or devices without breaking.

---

## 19. Homework

- **Practice:** List five apps or services you used today. Label each client-server or peer-to-peer.
- **Spaced review:** Redo the Lesson 04-04 flashcards for topologies (star, bus, ring, mesh).
- **Preview:** Networks are only useful if data moves fast enough. The next lesson explains bandwidth, throughput, and latency in plain words.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell client-server from peer-to-peer now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain the client-server model.
- [ ] I can explain the peer-to-peer model.
- [ ] I can name one strength and one weakness of each.
- [ ] I can give a real example of each from my own life.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: bandwidth, throughput, and latency.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L05** — "Client-Server vs. Peer-to-Peer" · Module 04 · Unit 2_
