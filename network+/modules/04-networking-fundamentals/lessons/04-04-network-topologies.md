---
id: NA-M04-L04
module: 04
lesson: 04
title: "Network Topologies (Star, Bus, Ring, Mesh)"
unit: 2
objective_ids: ["1.2"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M04-L02", "NA-M04-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 04] Network Topologies (Star, Bus, Ring, Mesh)

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 04-02 (nodes and links) and Lesson 04-03 (network sizes).

You know a network is nodes joined by links. But those links can be arranged in different **shapes**. The shape has a name — a **topology** — and each shape has trade-offs. This lesson shows you the four classic shapes and why they matter.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **topology** is (the shape of a network).
- [ ] Describe the **star**, **bus**, **ring**, and **mesh** shapes.
- [ ] Name one strength and one weakness of each shape.
- [ ] Say which shape your home network uses (a star).

---

## 2. Introduction — why this matters

Think about how you could arrange chairs for a group of people. You could put one person in the middle and everyone facing them. You could line everyone up in a row. You could seat them in a circle. Or you could let everyone face everyone. Same people, different **arrangements** — and each one changes how they talk.

Networks are the same. The nodes are the people; the links are who can talk to whom. The **arrangement** of those links is called the **topology**. It is just the shape of the network.

Why care about the shape? Because the shape decides what happens when something breaks, how much cable you need, and how fast you can add a new device. A tech who knows topologies can look at a network and predict its strengths and weak spots.

🎯 **Exam tip:** Network+ expects you to match each topology to its picture and to one strength and one weakness. This lesson is built around exactly that.

---

## 3. Simple explanation

A **topology** is the shape of a network — how the nodes and links are arranged. Here are the four classic shapes.

### Star — everyone connects to one center
In a **star**, every node connects to **one central device** (usually a switch or router). Nothing connects directly to another node; they all meet in the middle.

- **Strength:** if one cable breaks, only that one node goes offline. The rest keep working.
- **Weakness:** if the **center** fails, the whole network goes down.
- **This is your home network.** Your router is the center; every device links to it. The star is the most common shape today.

### Bus — everyone shares one line
In a **bus**, all nodes connect to **one shared cable** (called the backbone). Data travels along that single line, and every node listens.

- **Strength:** cheap and simple — little cable.
- **Weakness:** if the **one cable** breaks, the whole network goes down. Only one node can send cleanly at a time. This is an old design you rarely see now.

### Ring — everyone connects in a loop
In a **ring**, each node connects to **two neighbors**, forming a circle. Data travels around the loop from node to node.

- **Strength:** data flows in an orderly way with no central pileup.
- **Weakness:** a **single break** in the loop can stop the whole ring (unless it has a backup loop). Also old; rare today.

### Mesh — everyone connects to many others
In a **mesh**, nodes connect to **many other nodes** — sometimes every one. There are lots of links and lots of paths.

- **Strength:** very **reliable** — if one link fails, data takes another path.
- **Weakness:** **expensive** — it needs a huge number of links. The internet is a giant partial mesh. Wireless mesh systems use this idea in homes.

> **The big idea:** the **topology** is the shape of a network. **Star** (one center), **bus** (one line), **ring** (a loop), and **mesh** (many paths) each trade cost against reliability.

💡 **Tip:** To pick a shape from a picture, ask: "Is there one center (star)? one shared line (bus)? a closed loop (ring)? or lots of cross-links (mesh)?"

---

## 4. Real-world analogy

> **"A topology is a seating arrangement — it decides who can talk to whom."**

| Seating arrangement | Topology | What it's like |
|---------------------|----------|----------------|
| Everyone faces one host in the middle | **Star** | All talk goes through the host |
| Everyone sits along one long table | **Bus** | All share one line; one spill stops it |
| Everyone sits in a circle, passing notes | **Ring** | Notes go around the loop |
| Everyone can face and talk to anyone | **Mesh** | Many ways to reach each person |

Change the seating and you change how the group works. Change the topology and you change how the network works.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Topology** | tuh-POL-uh-jee | The shape of a network — how nodes and links are arranged. |
| **Star topology** | | Every node connects to one central device (a switch/router). |
| **Bus topology** | | All nodes share one backbone cable. |
| **Ring topology** | | Each node connects to two neighbors, forming a loop. |
| **Mesh topology** | | Nodes connect to many others, giving many paths. |
| **Backbone** | BAK-bone | The single shared cable that a bus network is built on. |

---

## 6. ASCII diagram

```
   THE FOUR CLASSIC TOPOLOGIES

   STAR (your home)          BUS
        [PC]                 [PC] [PC] [PC]
          |                   |    |    |
   [PC]—[SWITCH]—[PC]     ====+====+====+====   (one shared backbone)
          |                   |
        [PC]                 [PC]

   RING                      MESH
     [PC]--[PC]              [PC]===[PC]
      |      |                | \   / |
     [PC]--[PC]              [PC]===[PC]   (many cross-links)
    (a closed loop)          (many paths between nodes)
```

_Star = one center · Bus = one shared line · Ring = a loop · Mesh = many paths._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-04-topologies-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four small panels, one per topology (star, bus, ring, mesh), each with 4–5 labeled nodes and their links drawn in the correct shape.
> **Key elements & labels:** each panel titled; the star's center marked "switch/router"; the bus's shared line marked "backbone"; the ring shown as a closed loop; the mesh showing multiple cross-links.
> **Color meaning:** each panel uses the same node style; the **shape itself** carries the meaning, so it reads in black and white. Panel titles label each shape in text.
> **Flow direction:** four panels in a 2×2 grid.
> **Alt text (required):** "Four panels showing network topologies: a star with all nodes joined to one central switch; a bus with all nodes on one shared backbone cable; a ring with nodes joined in a closed loop; and a mesh with nodes joined by many cross-links."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-04-star-home-01.jpg`
> A home router with several cables fanning out to devices. Alt text: "A home router with cables fanning out to devices, a real star topology."
>
> **Photo 2** — `img-04-04-mesh-wifi-01.jpg`
> Two or three Wi-Fi mesh units in a home. Alt text: "Several Wi-Fi mesh units in a home, an example of a mesh topology."
>
> **Photo 3** — `img-04-04-switch-ports-01.jpg`
> The back of a switch with many ports, each a star spoke. Alt text: "The back of a network switch with many ports, the center of a star topology."

---

## 9. Hands-on lab

**Goal:** identify your home network's topology and sketch all four shapes.
**Why:** naming the real shape you live with makes the whole set stick.

**You will need**
- Pen and paper (Equipment tier **E1**). Your home router in view helps.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** This is a paper drawing and looking task. You change nothing on your gear.

### 9a. Step-by-step instructions

1. Look at your home setup. Find the **one device** everything connects to (your router). That center means your home is a **star**.
2. On paper, draw a **star**: put the router in the middle and draw a line to each device (node). Label the center "switch/router."
3. Draw a **bus**: one long horizontal line, with short lines up to 3–4 nodes. Label the long line "backbone."
4. Draw a **ring**: 4 nodes in a circle, each joined to its two neighbors, closing the loop.
5. Draw a **mesh**: 4 nodes with lines between most pairs, so there are several paths.
6. Under each drawing, write one **strength** and one **weakness** from memory.

### 9b. Expected results

- You have four labeled sketches: star, bus, ring, mesh.
- You correctly named your **home network as a star**.
- Each sketch has one strength and one weakness noted.
- ✅ **You did it if:** you can point to your router and say "star — the center is my router."

### 9c. Verify it worked

1. Cover the labels. Can you still name each shape from the drawing alone?
2. Ask: "If the center breaks in a star, what happens?" (Answer: the whole network goes down.)

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the sketches for review.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Confusing star and mesh | You misread a diagram | Star = one center; mesh = many cross-links |
| Thinking one broken cable kills a star | You over-worry | In a star, one broken cable drops only that node |
| Thinking a bus is reliable | You misjudge risk | One break in the **shared** cable stops the whole bus |
| Calling every modern network a mesh | You mislabel homes | Most homes and offices are **stars** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't tell the shape from a picture | New idea | Look for the pattern: one center? one line? a loop? many cross-links? |
| Not sure why star is popular | Trade-off unclear | One cable fault drops only one node — easy to fix |
| Mesh seems best — why not always use it? | Cost unclear | Mesh needs many links; that gets expensive fast |

---

## 12. Lesson summary

- A **topology** is the shape of a network — how nodes and links are arranged.
- **Star:** one central device; one cable fault drops only one node, but the center is a single point of failure.
- **Bus:** one shared backbone; cheap, but one break stops everything.
- **Ring:** a closed loop; orderly, but a single break can halt it.
- **Mesh:** many paths; very reliable, but expensive.
- **Your home network is a star.**

**One-sentence recap:** A topology is the shape of a network — star, bus, ring, or mesh — and each shape trades cost against reliability.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-04-fill-in-the-blank.md`
2. **Matching** — `wb-04-04-matching.md`
3. **Label the diagram** — `wb-04-04-label-the-diagram.md` (the four shapes)
4. **Short answer** — `wb-04-04-short-answer.md`
5. **Hands-on observation** — `wb-04-04-hands-on-observation.md` (name your home's topology)
6. **Vocabulary review** — `wb-04-04-vocabulary-review.md`
7. **Reflection** — `wb-04-04-reflection.md`

**Quick written warm-up (do this now):** What shape is your home network? What sits at its center?

Shape: ____________  Center: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-04-knowledge-check.md`.)

1. What is a **topology**? *(Objective: define topology)*
   - A) A type of cable
   - B) The shape of a network — how nodes and links are arranged
   - C) A network address
   - D) A brand of router

2. In a **star** topology, every node connects to… *(Objective: star)*
   - A) two neighbors
   - B) one central device
   - C) every other node
   - D) one shared cable

3. Which topology uses **one shared backbone cable**? *(Objective: bus)*
   - A) Star
   - B) Ring
   - C) Bus
   - D) Mesh

4. Which topology connects each node to **two neighbors in a loop**? *(Objective: ring)*
   - A) Ring
   - B) Star
   - C) Mesh
   - D) Bus

5. Which topology gives **many paths** and is the most reliable (but costly)? *(Objective: mesh)*
   - A) Bus
   - B) Ring
   - C) Star
   - D) Mesh

6. **True or false —** In a star, one broken cable takes down the whole network. Explain in one sentence. *(Objective: star trade-off)*

7. What shape is a typical **home network**? *(Objective: apply)*
   - A) Bus
   - B) Star
   - C) Ring
   - D) Mesh

8. **Matching —** write the letter next to each shape. *(Objective: vocabulary)*
   - ___ Star &nbsp;&nbsp; ___ Bus &nbsp;&nbsp; ___ Mesh
   - A) one shared backbone cable &nbsp; B) many cross-links, many paths &nbsp; C) all nodes join one center

9. Fill in the blank: In a star, if the ____________ fails, the whole network goes down. *(Objective: star weakness)*

10. **Scenario —** A small office wants a shape where one broken cable only affects one computer, and it's easy to add new PCs. Which topology should they use, and why? *(Objective: choose a topology)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-04-topologies.md`. In brief:

- **Objective in one line:** learners match each topology to its picture and one strength/weakness, and name their home as a star.
- **Common misconceptions:** star and mesh look alike; a bus is "safe." Correct both directly.
- **Pacing:** ~25 min. The sketch-all-four lab locks in the shapes.
- **How CompTIA tests it:** picture-to-name matching and trade-off reasoning.
- **Support idea:** use chairs/students to physically model each seating arrangement.
- **Extension idea:** introduce physical vs. logical topology and hybrid (star-bus) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Topologies**
>
> - **Topology** = the shape of a network.
> - **Star** = all nodes to one center (switch/router). Home networks are stars. Center = single point of failure.
> - **Bus** = one shared backbone. Cheap; one break stops all.
> - **Ring** = a closed loop of neighbors. One break can halt it.
> - **Mesh** = many cross-links, many paths. Reliable but costly.
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Topology** — The shape of a network — how nodes and links are arranged.
- **Star topology** — Every node connects to one central device (a switch/router).
- **Bus topology** — All nodes share one backbone cable.
- **Ring topology** — Each node connects to two neighbors, forming a loop.
- **Mesh topology** — Nodes connect to many others, giving many paths.
- **Backbone** — The single shared cable that a bus network is built on.

---

## 19. Homework

- **Practice:** Redraw the four topologies from memory, then check them against this lesson.
- **Spaced review:** Redo the Lesson 04-03 flashcards for network sizes (LAN, WAN, MAN, PAN, WLAN).
- **Preview:** So far, devices just "connect." The next lesson shows two ways they share: client-server and peer-to-peer.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I name my home network's shape now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what a topology is.
- [ ] I can describe star, bus, ring, and mesh.
- [ ] I can name one strength and one weakness of each.
- [ ] I know my home network is a star, centered on my router.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: client-server vs. peer-to-peer.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L04** — "Network Topologies (Star, Bus, Ring, Mesh)" · Module 04 · Unit 2_
