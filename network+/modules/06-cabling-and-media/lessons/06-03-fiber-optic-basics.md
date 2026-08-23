---
id: NA-M06-L03
module: 06
lesson: 03
title: "Fiber Optic Basics (Single vs. Multimode)"
unit: 3
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 27
equipment_tier: E1
prerequisites: ["NA-M06-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 03] Fiber Optic Basics (Single vs. Multimode)

> **Unit:** Unit 3 — Physical Media · **Time:** ~27 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 06-01 (twisted-pair copper cable).

Copper cable carries data as **electricity**. But there is another kind of cable that carries data as **light** — **fiber optic**. It goes much farther, much faster, and ignores electrical noise. This lesson shows you how fiber works and the two main types: **single-mode** and **multimode**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **fiber optic cable** is and how it carries data.
- [ ] Name the **core** and the **cladding** and what each does.
- [ ] Tell **single-mode** from **multimode** fiber.
- [ ] Say when fiber beats copper (distance, speed, no interference).

---

## 2. Introduction — why this matters

Think about shining a **flashlight down a long mirrored tube**. Even if the tube bends, the light bounces off the mirror walls and keeps traveling to the far end. The light carries all the way with almost no loss.

A **fiber optic cable** does exactly this with data. Instead of pushing electricity down copper, it sends **pulses of light** down a thin glass strand. The light bounces along the glass and comes out the other end — even miles away. Because it's light, not electricity, it ignores the electrical noise that bothers copper.

Why learn this? Because the internet's backbone, the link from your neighborhood to the world, and the fast links inside data centers are all fiber. On the exam, you must tell **single-mode** from **multimode** and know when fiber beats copper. And knowing fiber helps you understand why your home copper cable has a 100 m limit while fiber does not.

🎯 **Exam tip:** Network+ tests **single-mode vs. multimode** (core size, light source, distance) and fiber's edge over copper: **longer distance, higher speed, immune to interference.**

---

## 3. Simple explanation

Let's see what's inside fiber, then split it into its two types.

### What's inside — light in glass
A **fiber optic cable** carries data as **light** through a very thin strand of glass. Two parts make the light stay on track:

- The **core** is the thin glass center that the light actually travels through.
- The **cladding** is a glass layer around the core. It acts like a mirror, reflecting stray light **back into the core** so the light keeps bouncing forward instead of leaking out.

Around those is a protective coating and jacket. A device at each end changes electricity into light (to send) and light back into electricity (to receive).

### Why fiber beats copper
- **No electrical interference.** Light isn't bothered by EMI or crosstalk, so fiber works fine near motors and power lines.
- **Much longer distance.** Copper twisted pair stops at ~100 m; fiber can go **hundreds of meters to many kilometers**.
- **Very high speed.** Fiber carries huge amounts of data.
- **More secure.** It's harder to secretly tap light in glass than electricity in copper.

The trade-off: fiber costs more and the glass is more fragile (don't bend it sharply).

### The two types — single-mode vs. multimode
A **mode** is a path that light can take down the core. The number of paths is what splits fiber into two types.

- **Single-mode fiber (SMF):** a **very thin core** (about 9 microns) so light travels in **one straight path**. It uses a **laser** and reaches the **longest distances** (kilometers) at the highest speeds. Used between cities, buildings, and by internet providers. Jacket is usually **yellow**.
- **Multimode fiber (MMF):** a **wider core** (about 50–62.5 microns) so light can take **many paths** at once. It uses an **LED** and works over **shorter distances** (up to a few hundred meters). Used **inside a building** or data center. Jacket is usually **aqua or orange**.

> **The big idea:** **Fiber optic** carries data as **light** in a glass **core**, kept in by the **cladding**. **Single-mode** has a tiny core and a laser for **long** distances; **multimode** has a wider core and an LED for **shorter** distances. Fiber beats copper on distance, speed, and interference.

💡 **Tip:** Remember it by the core: **single** = **single** thin path (far); **multi** = **many** paths (shorter, inside buildings).

⚠️ **Watch out:** Fiber is glass. A tight bend or dirty end can block the light. Keep it gently curved and the tips clean/capped.

---

## 4. Real-world analogy

> **"Fiber is a mirrored tube for light: single-mode is a narrow straw with one laser beam going far; multimode is a wider pipe where light bounces many ways."**

| Light idea | Fiber |
|------------|-------|
| A flashlight beam in a mirrored tube | Data as **light** in the **core** |
| The mirror walls keeping light in | The **cladding** |
| A narrow straw, one straight beam, goes far | **Single-mode** (laser, long distance) |
| A wide pipe, many bouncing beams, shorter | **Multimode** (LED, short distance) |
| Light doesn't care about electrical noise | Fiber is **immune to interference** |

Copper pushes electricity (and picks up noise); fiber sends light (and ignores noise). That's the core difference.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Fiber optic cable** | FY-ber OP-tik | A cable that carries data as pulses of light through glass. |
| **Core** | kor | The thin glass center that the light travels through. |
| **Cladding** | KLAD-ing | The glass layer around the core that reflects light back in. |
| **Mode** | mode | A path that light can take down the fiber's core. |
| **Single-mode fiber (SMF)** | | Thin-core fiber with one light path; laser; longest distances. |
| **Multimode fiber (MMF)** | | Wider-core fiber with many light paths; LED; shorter distances. |

---

## 6. ASCII diagram

```
   INSIDE A FIBER (light bounces down the glass)

     cladding (mirror layer)  ────────────────────────
     core (light travels here) →  \_/‾\_/‾\_/‾  light  →   OUT
     cladding (mirror layer)  ────────────────────────

   SINGLE-MODE (SMF)            MULTIMODE (MMF)
     thin core, ONE path          wide core, MANY paths
     ══>─────────────────>        ══>╱╲╱╲╱╲╱╲──────>
     laser · very far (km)        LED · shorter (≤ few hundred m)
     jacket: often yellow         jacket: often aqua / orange

   Fiber vs copper: light (no EMI) · farther · faster · more secure
```

_The core carries the light; the cladding keeps it in. Single = one path (far); multi = many paths (short)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-03-fiber-modes-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a cut-away of a fiber (core + cladding + jacket) with a light ray bouncing down the core; below, two panels — single-mode (thin core, one straight ray, "laser, long") and multimode (wide core, many bouncing rays, "LED, short").
> **Key elements & labels:** core, cladding, jacket; the two modes with core width, light source, and distance labeled.
> **Color meaning:** the single/multi panels differ by **core width and ray count and text**, not color alone; jacket colors are named in text (yellow / aqua).
> **Flow direction:** light travels left to right; two mode panels stacked.
> **Alt text (required):** "A cut-away fiber showing a light ray bouncing down a glass core surrounded by cladding, then two panels: single-mode fiber with a thin core and one straight laser ray for long distance, and multimode fiber with a wider core and many bouncing LED rays for shorter distance."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-03-fiber-strands-01.jpg`
> Fiber strands with light glowing at the ends. Alt text: "Thin glass fiber strands glowing with light at their tips."
>
> **Photo 2** — `img-06-03-smf-vs-mmf-jackets-01.jpg`
> A yellow SMF cable beside an aqua MMF cable. Alt text: "A yellow single-mode fiber cable beside an aqua multimode fiber cable."
>
> **Photo 3** — `img-06-03-lc-connector-01.jpg`
> An LC fiber connector. Alt text: "An LC fiber optic connector, a common small fiber plug."

---

## 9. Hands-on lab

**Goal:** model how light bounces down a fiber, and sort fiber facts into single vs. multimode.
**Why:** the flashlight model makes "total internal reflection" real without any glass.

**You will need**
- A flashlight (or phone light) and a cardboard tube or rolled paper (Equipment tier **E1**). Pen and paper.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Don't shine bright light directly into your eyes.

### 9a. Step-by-step instructions

1. Roll a piece of paper into a tube (or use a paper-towel tube). This stands in for the **core + cladding**.
2. In a dim room, shine the flashlight in one end and look at the other end. Notice the light travels through and comes out — like light in a fiber core.
3. Gently bend the tube a little. The light still comes out — light "bends" around gentle curves by bouncing, like real fiber. Now bend it sharply and see the light dim — a lesson about not kinking fiber.
4. On paper, make two columns: **Single-mode** and **Multimode**. Sort these into the right column: *thin core, wide core, laser, LED, long distance, short distance, yellow jacket, aqua jacket.*
5. Write one sentence: "Fiber beats copper because ____."

### 9b. Expected results

- You saw light travel down (and gently around) the tube.
- Your two columns correctly sort the single- vs. multimode facts.
- ✅ **You did it if:** you can say "single-mode = thin core + laser + far; multimode = wide core + LED + short."

### 9c. Verify it worked

1. Point to your columns and read each fact aloud with its type.
2. Say one reason fiber can go farther than copper (no electrical loss / uses light).

### 9d. Reset / roll back

Nothing to undo — it's a flashlight and paper. Recycle the tube if you like.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking fiber carries electricity | You misjudge interference | Fiber carries **light**, so no EMI or crosstalk |
| Swapping single- and multimode | You pick the wrong cable | Single = thin core/laser/far; Multi = wide core/LED/short |
| Bending fiber sharply | The light is blocked, link fails | Keep fiber gently curved; never kink it |
| Assuming fiber for every job | You overspend at home | Copper is fine and cheaper for short home runs |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Fiber link is dark/dead | Dirty or scratched end | Clean the tip; cap unused ends |
| Signal weak on a long run | Wrong fiber type | Long distance needs single-mode, not multimode |
| Link fails after install | Sharp bend/kink | Re-route with a gentle curve |

---

## 12. Lesson summary

- **Fiber optic** cable carries data as **light** through a glass **core**, kept in by the **cladding**.
- **Single-mode (SMF):** thin core, **laser**, **longest** distances (km); often yellow.
- **Multimode (MMF):** wider core, **LED**, **shorter** distances (hundreds of m); often aqua/orange.
- Fiber beats copper on **distance, speed, and interference** — but costs more and is fragile.

**One-sentence recap:** Fiber optic cable sends data as light down a glass core kept in by cladding, with single-mode (thin core, laser) going the farthest and multimode (wider core, LED) used for shorter runs.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-03-fill-in-the-blank.md`
2. **Matching** — `wb-06-03-matching.md`
3. **Label the diagram** — `wb-06-03-label-the-diagram.md` (inside a fiber)
4. **Short answer** — `wb-06-03-short-answer.md`
5. **Hands-on observation** — `wb-06-03-hands-on-observation.md` (flashlight-in-a-tube)
6. **Vocabulary review** — `wb-06-03-vocabulary-review.md`
7. **Reflection** — `wb-06-03-reflection.md`

**Quick written warm-up (do this now):** Does fiber carry electricity or light? Which type goes farther — single-mode or multimode?

Fiber carries: ____________  Goes farther: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-03-knowledge-check.md`.)

1. What does a **fiber optic cable** carry data as? *(Objective: fiber)*
   - A) Electricity
   - B) Light
   - C) Radio waves
   - D) Water

2. What does the **core** do? *(Objective: parts)*
   - A) Reflects light back in
   - B) Carries the light
   - C) Powers the cable
   - D) Stores files

3. What does the **cladding** do? *(Objective: parts)*
   - A) Carries the light
   - B) Reflects stray light back into the core
   - C) Adds electricity
   - D) Changes the speed limit

4. **Single-mode** fiber has… *(Objective: SMF)*
   - A) a wide core and an LED
   - B) a thin core and a laser, for long distances
   - C) no core
   - D) copper inside

5. **Multimode** fiber is best for… *(Objective: MMF)*
   - A) links between cities
   - B) shorter runs inside a building
   - C) telephone calls
   - D) power delivery

6. **True or false —** Fiber is immune to electrical interference. Explain in one sentence. *(Objective: vs copper)*

7. Which is an advantage of fiber over copper? *(Objective: vs copper)*
   - A) It is cheaper
   - B) It goes much farther and ignores EMI
   - C) It carries electricity better
   - D) It is unbreakable

8. **Matching —** write the letter next to each term. *(Objective: parts/types)*
   - ___ Core &nbsp;&nbsp; ___ Single-mode &nbsp;&nbsp; ___ Multimode
   - A) thin core, laser, long distance &nbsp; B) the glass that carries the light &nbsp; C) wider core, LED, short distance

9. Fill in the blank: A path that light can take down the core is called a ____________. *(Objective: mode)*

10. **Scenario —** An internet provider must run a link 20 km between two towns. Which fiber type should they use, and why not multimode? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-03-fiber.md`. In brief:

- **Objective in one line:** learners explain fiber (light in a core, cladding reflects) and tell single- from multimode.
- **Common misconceptions:** fiber carries electricity; single/multi swapped; bending is fine. Correct all three.
- **Pacing:** ~27 min. The flashlight-in-a-tube lab makes reflection concrete.
- **How CompTIA tests it:** SMF vs. MMF (core, source, distance); fiber's edge over copper.
- **Support idea:** the flashlight tube; name each part as light passes.
- **Extension idea:** name common fiber connectors (LC, SC, ST) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Fiber optic**
>
> - **Fiber** carries data as **light** in a glass **core**; the **cladding** reflects light back in.
> - **Single-mode (SMF):** thin core (~9 µm), **laser**, **longest** distance (km); often **yellow**.
> - **Multimode (MMF):** wider core (~50–62.5 µm), **LED**, **shorter** distance (hundreds of m); often **aqua/orange**.
> - **Fiber vs. copper:** farther · faster · **immune to EMI/crosstalk** · more secure — but pricier and fragile.
> - A **mode** = a light path. Single = one path (far); multi = many paths (short).
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Fiber optic cable** — A cable that carries data as pulses of light through glass.
- **Core** — The thin glass center that the light travels through.
- **Cladding** — The glass layer around the core that reflects light back in.
- **Mode** — A path that light can take down the fiber's core.
- **Single-mode fiber (SMF)** — Thin-core fiber with one light path; laser; longest distances.
- **Multimode fiber (MMF)** — Wider-core fiber with many light paths; LED; shorter distances.

---

## 19. Homework

- **Practice:** Look up your internet provider — do they bring **fiber** to your area? Write down what you find.
- **Spaced review:** Redo the Lesson 06-02 flashcards for connectors (RJ45, jacks).
- **Preview:** Copper cables can be wired two ways inside the connector. Next, we look at **straight-through vs. crossover** and the T568A/B wiring order.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell single-mode from multimode now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what a fiber optic cable carries (light) and how.
- [ ] I can name the core and the cladding and what each does.
- [ ] I can tell single-mode from multimode.
- [ ] I know three ways fiber beats copper.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: straight-through vs. crossover wiring.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L03** — "Fiber Optic Basics (Single vs. Multimode)" · Module 06 · Unit 3_
