---
id: NA-M04-L02
module: 04
lesson: 02
title: "Nodes, Links, and the Idea of a Connection"
unit: 2
objective_ids: ["1.0"]
reading_level_target: 7
status: Published
est_minutes: 20
equipment_tier: E1
prerequisites: ["NA-M04-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 02] Nodes, Links, and the Idea of a Connection

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~20 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 04-01 (why networks exist).

Last lesson you learned *why* networks exist. Now we learn the two simplest parts that every network is built from: the **things** on it, and the **connections** between them. These two words unlock every diagram you'll ever draw.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Define a **node** (a device on a network).
- [ ] Define a **link** (the connection between two nodes).
- [ ] Tell a **wired** link from a **wireless** link.
- [ ] Draw a simple network as nodes and links.

---

## 2. Introduction — why this matters

Look at a road map. You see **cities** and the **roads** between them. Two simple parts, and the whole map makes sense. To get from one city to another, you follow the roads.

A network map works the same way. It has **nodes** (the "cities") and **links** (the "roads"). A node is any device on the network. A link is the connection between two nodes. That's the whole idea.

Why start here? Because every network picture in this course — your home lab, a big office, the internet — is just nodes joined by links. Once you see networks this way, they stop looking scary. A giant network diagram is only many cities and roads.

🎯 **Exam tip:** Network+ shows lots of diagrams. If you can spot the nodes and the links, you can read any of them.

---

## 3. Simple explanation

Let's define both parts in the plainest words.

### A node is a "thing" on the network
A **node** is any device that connects to the network. Your laptop is a node. So is your phone, your router, your switch, and your smart TV. If it joins the network, it is a node.

The nodes you use to *send and get* information are called **endpoints** — like your laptop or phone. Other nodes, like a switch or router, mostly help move data along. Both kinds are still nodes.

### A link is the "connection" between two nodes
A **link** is the connection between two nodes. It is the "road" that data travels on. A link can be one of two types:

- A **wired link** uses a cable (like an Ethernet cable).
- A **wireless link** uses radio waves (like Wi-Fi).

Both do the same job: they connect two nodes so data can pass. One you can touch; one you cannot.

### Put them together
Every network is just **nodes joined by links**. Draw a dot for each device (a node). Draw a line between two dots for each connection (a link). Now you have a network map. Simple.

We draw links two ways so you can tell them apart:

- A **solid line** means a wired link.
- A **dashed line** means a wireless link.

> **The big idea:** a network is **nodes** (devices) connected by **links** (wired or wireless). Every network diagram is just dots and lines.

💡 **Tip:** When you look at any network, ask two things: "What are the nodes?" and "What are the links?" That's how pros read a diagram fast.

---

## 4. Real-world analogy

> **"A network is a road map: cities are nodes, roads are links."**

| On a road map… | On a network… |
|----------------|---------------|
| A **city** | A **node** (a device) |
| A **road** between cities | A **link** (a connection) |
| A **highway** (fast road) | A **wired** link (often faster) |
| A **country lane** | A **wireless** link |
| Following roads city to city | Data moving node to node over links |

To travel, you go from city to city along the roads. To send data, it goes from node to node along the links. Same picture, different world.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Node** | node | Any device that connects to a network. |
| **Link** | link | The connection between two nodes (wired or wireless). |
| **Endpoint** | END-point | A node that sends or gets information, like a laptop or phone. |
| **Wired link** | | A link that uses a cable. |
| **Wireless link** | | A link that uses radio waves (Wi-Fi). |
| **Connection** | kuh-NEK-shun | Another word for a link between two nodes. |

---

## 6. ASCII diagram

```
   A SIMPLE HOME NETWORK — dots (nodes) and lines (links)

        [ Laptop ] ──────── [ Router ] ~~~~~~~~ [ Phone ]
          node     wired      node    wireless    node
                    link                 link

        [ Smart TV ] ~~~~~~~~ [ Router ]
           node     wireless    (nodes joined by links)

   solid line ── = wired link      dashed/wavy ~~ = wireless link
```

_Every device is a node. Every connection is a link. Solid = wired, wavy = wireless._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-02-nodes-links-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a small home network — router in the center, with a laptop and switch on wired (solid) links and a phone and smart TV on wireless (dashed) links; each device labeled "node," each connection labeled "link."
> **Key elements & labels:** nodes as boxes/icons; solid lines = wired, dashed lines = wireless; a small legend.
> **Color meaning:** wired links one color, wireless another — **and** solid vs. dashed line style carries the same meaning, so it reads in black and white.
> **Flow direction:** router-centered star shape.
> **Alt text (required):** "A small home network with a router in the center; a laptop and a switch connect by solid wired links, and a phone and a smart TV connect by dashed wireless links; each device is labeled a node and each connection a link."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-02-devices-nodes-01.jpg`
> A laptop, phone, router, and TV together, each tagged "node." Alt text: "A laptop, phone, router, and TV, each labeled as a node on a network."
>
> **Photo 2** — `img-04-02-wired-link-01.jpg`
> An Ethernet cable running between a laptop and a router, tagged "wired link." Alt text: "An Ethernet cable connecting a laptop to a router, labeled as a wired link."
>
> **Photo 3** — `img-04-02-wireless-link-01.jpg`
> A phone showing the Wi-Fi symbol near a router, tagged "wireless link." Alt text: "A phone showing a Wi-Fi symbol near a router, labeled as a wireless link."

---

## 9. Hands-on lab

**Goal:** draw your own home network as nodes and links.
**Why:** drawing it makes the idea stick, and you'll redraw this map as you learn more.

**You will need**
- Pen and paper (Equipment tier **E1**; your laptop helps you check).
- Estimated time: 10 min.

⚠️ **Before you start (safety):** This is a paper drawing task. Nothing on your computer changes.

### 9a. Step-by-step instructions

1. On paper, draw a **dot or box** for your **router** in the middle. Label it "router (node)."
2. Add a **dot** for each device you own that joins the network: laptop, phone, TV, and so on. Label each one "node."
3. Draw a **line** from each device to the router. This is a **link**.
4. For each line, decide: is it **wired** (a cable) or **wireless** (Wi-Fi)? Make wired links **solid** and wireless links **dashed**.
5. Count your nodes and your links. Write the two totals at the bottom.

### 9b. Expected results

- You have a map with the router in the middle and devices around it.
- Each device is a **node**; each connection is a **link**.
- Wired links are solid; wireless links are dashed.
- ✅ **You did it if:** your drawing shows nodes joined by links, with wired and wireless told apart.

### 9c. Verify it worked

1. Point at one dot and say "node." Point at one line and say "link."
2. Say whether each link is wired or wireless, and how you know.

### 9d. Reset / roll back

Nothing to undo — it's a drawing. Keep it; you'll add to it in later lessons.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking only computers are nodes | You miss phones, TVs, routers | Any device on the network is a node |
| Mixing up node and link | You mislabel a diagram | A node is a *thing*; a link is a *connection* |
| Forgetting wireless is a link too | You think links need cables | Wi-Fi is a link too — it just uses radio waves |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Not sure if a device is a node | New idea | If it connects to the network, it's a node |
| Can't tell wired from wireless | Unclear setup | A cable = wired; no cable but still connected = wireless |
| My map looks messy | Too many links at once | Start with the router in the middle and add one device at a time |

---

## 12. Lesson summary

- A **node** is any device on the network (laptop, phone, router, TV).
- A **link** is the connection between two nodes.
- Links are **wired** (cable) or **wireless** (Wi-Fi).
- Every network map is just **nodes joined by links** — dots and lines.

**One-sentence recap:** A network is nodes (devices) connected by links (wired or wireless), so every diagram is simply dots joined by lines.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-02-fill-in-the-blank.md`
2. **Matching** — `wb-04-02-matching.md`
3. **Label the diagram** — `wb-04-02-label-the-diagram.md` (nodes & links)
4. **Short answer** — `wb-04-02-short-answer.md`
5. **Draw your own diagram** — `wb-04-02-draw-your-diagram.md` (your home network)
6. **Vocabulary review** — `wb-04-02-vocabulary-review.md`
7. **Reflection** — `wb-04-02-reflection.md`

**Quick written warm-up (do this now):** Is your phone a node or a link? Is Wi-Fi a node or a link?

Phone: ____________  Wi-Fi: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-02-knowledge-check.md`.)

1. What is a node? *(Objective: define node)*
   - A) A connection between devices
   - B) Any device that connects to a network
   - C) A type of cable
   - D) A number

2. What is a link? *(Objective: define link)*
   - A) A device on the network
   - B) The connection between two nodes
   - C) A file
   - D) A password

3. Which of these is a **node**? *(Objective: examples)*
   - A) An Ethernet cable
   - B) A Wi-Fi signal
   - C) A laptop
   - D) A road

4. A link that uses a cable is a… *(Objective: wired)*
   - A) wireless link
   - B) wired link
   - C) node
   - D) endpoint

5. A link that uses radio waves (Wi-Fi) is a… *(Objective: wireless)*
   - A) wired link
   - B) wireless link
   - C) node
   - D) cable

6. **True or false —** A phone connected to Wi-Fi is a node. Explain your answer in one sentence. *(Objective: examples)*

7. In the road-map analogy, a **road** stands for a… *(Objective: analogy)*
   - A) node
   - B) link
   - C) city
   - D) file

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Node &nbsp;&nbsp; ___ Link &nbsp;&nbsp; ___ Wireless link
   - A) a connection between two nodes &nbsp; B) a link using radio waves &nbsp; C) a device on the network

9. Fill in the blank: On a diagram, a device is drawn as a dot (node) and a connection as a ____________. *(Objective: diagram)*

10. **Scenario —** You draw your home network: a router, a laptop on a cable, and a phone on Wi-Fi. Name the nodes, and say which link is wired and which is wireless. *(Objective: draw a network)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-02-nodes-links.md`. In brief:

- **Objective in one line:** learners can define node and link and draw a network as dots and lines.
- **Common misconceptions:** only computers are nodes; wireless isn't a "real" link. Correct both directly.
- **Pacing:** ~20 min. The draw-your-network lab is the payoff and recurs all course.
- **How CompTIA tests it:** reading diagrams — spotting nodes and links is the base skill.
- **Support idea:** point at real devices and links around the room and name each.
- **Extension idea:** add the internet cloud as a node your router links to.

---

## 17. Cheat sheet

> **Quick reference — Nodes & Links**
>
> - **Node** = any device on the network (laptop, phone, router, switch, TV).
> - **Link** = the connection between two nodes.
> - **Wired link** = uses a cable. **Wireless link** = uses radio waves (Wi-Fi).
> - **Endpoint** = a node that sends/gets data (laptop, phone).
> - **Draw it:** dot = node · line = link · solid = wired · dashed = wireless.
> - Read any diagram by asking: **"What are the nodes? What are the links?"**
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Node** — Any device that connects to a network.
- **Link** — The connection between two nodes (wired or wireless).
- **Endpoint** — A node that sends or gets information, like a laptop or phone.
- **Wired link** — A link that uses a cable.
- **Wireless link** — A link that uses radio waves (Wi-Fi).
- **Connection** — Another word for a link between two nodes.

---

## 19. Homework

- **Practice:** Redraw your home network map neatly. Add every device you can find. Mark each link wired or wireless.
- **Spaced review:** Redo the Lesson 04-01 flashcards for why networks exist.
- **Preview:** Networks come in different sizes — from one room to the whole world. The next lesson gives each size a name (LAN, WAN, and more).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I look at a network and spot the nodes and links now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can define a node in my own words.
- [ ] I can define a link in my own words.
- [ ] I can tell a wired link from a wireless link.
- [ ] I drew my home network as nodes and links.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: the sizes of networks (LAN, WAN).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L02** — "Nodes, Links, and the Idea of a Connection" · Module 04 · Unit 2_
