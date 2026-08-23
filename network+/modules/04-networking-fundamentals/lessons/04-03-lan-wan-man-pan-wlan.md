---
id: NA-M04-L03
module: 04
lesson: 03
title: "LAN, WAN, MAN, PAN, and WLAN Explained"
unit: 2
objective_ids: ["1.6"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M04-L01", "NA-M04-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 03] LAN, WAN, MAN, PAN, and WLAN Explained

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 04-01 (why networks exist) and Lesson 04-02 (nodes and links).

You now know a network is nodes joined by links. But networks come in many sizes — from the space around your body to the whole planet. Each size has a short name. This lesson gives you those names so you always know which one people mean.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **LAN** is (a network in one place).
- [ ] Explain what a **WAN** is (a network over a long distance).
- [ ] Name a **MAN** and a **PAN**, and where each fits.
- [ ] Explain what a **WLAN** is (a wireless LAN).
- [ ] Sort real examples into the right size.

---

## 2. Introduction — why this matters

Think about places by how big they are. There is the space right around **your body**. There is **your home**. There is **your city**. And there is the **whole world**. Same planet, just different sizes.

Networks work the same way. A network can be as small as your phone talking to your earbuds, or as big as the internet linking billions of devices. To keep things clear, we give each size a short name — a three- or four-letter code.

Why learn these names? Because you will hear them constantly. A tech says "it's a LAN problem" or "check the WAN link." If you know the sizes, you know where to look. These names are a map of scale, from tiny to huge.

🎯 **Exam tip:** Network+ expects you to match each name (LAN, WAN, MAN, PAN, WLAN) to its size and a real example. This lesson is built around exactly that skill.

---

## 3. Simple explanation

Every name below answers one question: **how big is the network?** Let's go from small to large.

### PAN — Personal Area Network (smallest)
A **PAN** is a tiny network around **one person**. It reaches only a few feet. The clearest example is **Bluetooth**: your phone connected to your wireless earbuds or a smartwatch. That little bubble of devices around you is a PAN.

### LAN — Local Area Network
A **LAN** is a network in **one place**, like your home, a classroom, or one office. All the nodes sit close together — usually one building. Your home network (router, laptop, phone, TV) is a LAN. This is the size you will build in your home lab.

### WLAN — Wireless LAN
A **WLAN** is just a **LAN that uses Wi-Fi** instead of cables. The "W" means wireless. When your laptop joins the network over Wi-Fi, you are using the WLAN part of your home LAN. Same place, no wires.

### MAN — Metropolitan Area Network
A **MAN** covers a **city** or a large campus. "Metropolitan" means city. Think of a city government linking its libraries, offices, and schools across town. It is bigger than a LAN but smaller than a country.

### WAN — Wide Area Network (largest)
A **WAN** spans a **long distance** — between cities, countries, or the whole world. A WAN connects many LANs that are far apart. The **internet** is the biggest WAN of all. When your home LAN reaches a website in another country, it travels over a WAN.

> **The big idea:** these names sort networks by **size**, smallest to largest: **PAN → LAN → MAN → WAN.** A **WLAN** is a LAN done with Wi-Fi.

💡 **Tip:** The middle letter is a size clue. **P**ersonal (you), **L**ocal (one place), **M**etropolitan (a city), **W**ide (far away).

---

## 4. Real-world analogy

> **"Network sizes are like rings around you — from your body out to the whole world."**

| Ring around you | Network name | Everyday example |
|-----------------|--------------|------------------|
| The space on your body | **PAN** | Phone ↔ Bluetooth earbuds |
| Your home or one room | **LAN** | Your router, laptop, and TV |
| Your home, but no wires | **WLAN** | Your laptop on Wi-Fi |
| Your city | **MAN** | A city linking its libraries |
| The whole world | **WAN** | The internet |

Picture rings getting bigger. The smallest ring hugs your body (PAN). The next fills your home (LAN/WLAN). A bigger one covers your city (MAN). The largest wraps the planet (WAN). Same idea, growing outward.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **LAN** | "lan" | Local Area Network — a network in one place, like a home or office. |
| **WAN** | "wan" | Wide Area Network — a network over a long distance; the internet is one. |
| **MAN** | "man" | Metropolitan Area Network — a network across a city. |
| **PAN** | "pan" | Personal Area Network — a tiny network around one person (Bluetooth). |
| **WLAN** | "W-lan" | Wireless LAN — a LAN that uses Wi-Fi instead of cables. |
| **Bluetooth** | BLOO-tooth | A short-range wireless way to link nearby devices (a common PAN). |

---

## 6. ASCII diagram

```
   NETWORK SIZES — smallest to largest

   PAN        LAN / WLAN        MAN            WAN
   (you)      (one place)       (a city)       (the world)

  [phone]     [ Home network ]  [ City-wide ]   [   Internet   ]
     ~~        router+laptop     libraries +     many LANs, far
  [earbuds]    +phone+TV         offices         apart, joined

   few feet    one building      one city        country / globe
   --------------------------------------------------------------->
                        network gets BIGGER
```

_Read left to right: the network grows from a few feet (PAN) to the whole world (WAN)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-03-network-sizes-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four nested rings labeled, from inside out, PAN, LAN/WLAN, MAN, WAN — each ring with a simple example icon (earbuds, house, city skyline, globe).
> **Key elements & labels:** each ring named and sized; a one-line example in each ring; a "gets bigger" arrow.
> **Color meaning:** each ring a different color **and** a different size and label, so size and text carry the meaning in black and white.
> **Flow direction:** smallest ring in the center, growing outward.
> **Alt text (required):** "Four nested rings showing network sizes from smallest to largest: a Personal Area Network around a person, a Local Area Network (or wireless LAN) in one building, a Metropolitan Area Network across a city, and a Wide Area Network spanning the world."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-03-pan-bluetooth-01.jpg`
> A phone paired with wireless earbuds. Alt text: "A phone connected to Bluetooth earbuds, an example of a personal area network."
>
> **Photo 2** — `img-04-03-lan-home-01.jpg`
> A home router with a laptop and TV nearby. Alt text: "A home router with a laptop and TV, an example of a local area network."
>
> **Photo 3** — `img-04-03-wan-internet-01.jpg`
> A world map or globe with link lines between cities. Alt text: "A globe with lines linking cities, an example of a wide area network like the internet."

---

## 9. Hands-on lab

**Goal:** find and name a real PAN, LAN, WLAN, and (from memory) a WAN in your own life.
**Why:** matching names to your real devices makes the sizes stick for the exam.

**You will need**
- Your laptop and phone (Equipment tier **E1**). Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** You are only looking at settings and writing things down. You change nothing.

### 9a. Step-by-step instructions

1. On your **phone**, open **Settings > Bluetooth**. Look at any paired device (earbuds, watch). That link is a **PAN**. Write down the device name.
2. On your **laptop**, find the network you are joined to (the Wi-Fi name). Your home network is a **LAN**. Because you joined it over Wi-Fi, you are using its **WLAN**. Write down the network name.
3. List **three nodes** on that home LAN (for example: router, laptop, phone).
4. Open a web page in your browser. Reaching that site travels over a **WAN** (the internet). Write "internet = WAN" on your paper.
5. Label your paper with all four: **PAN, LAN, WLAN, WAN**, each with your real example.

### 9b. Expected results

- You have a real example written for **PAN**, **LAN**, **WLAN**, and **WAN**.
- You can point to the exact device or network for each.
- ✅ **You did it if:** each of the four names has one true example from your own life.

### 9c. Verify it worked

1. Read your list aloud. For each name, say how big that network is (few feet, one place, one place no wires, the world).
2. Ask: "Is my Wi-Fi a LAN or a WLAN?" (Answer: it's the wireless part of your LAN — a WLAN.)

### 9d. Reset / roll back

Nothing to undo — you only viewed settings and wrote notes. Keep the list for review.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking the internet is a LAN | You mislabel the biggest network | The internet is a **WAN** — it spans the world |
| Thinking a WLAN is totally different from a LAN | You treat them as two things | A **WLAN is a LAN** that uses Wi-Fi |
| Mixing up MAN and WAN | You misjudge the size | **MAN** = one city; **WAN** = across cities or the world |
| Forgetting PAN exists | You skip the smallest size | Bluetooth earbuds are a **PAN** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't decide LAN vs. WAN | Unsure of distance | One building = LAN; far apart = WAN |
| Not sure if it's a WLAN | Wired vs. wireless confusion | Joined with no cable (Wi-Fi)? That's the WLAN |
| The names blur together | Too many at once | Sort by size: PAN < LAN < MAN < WAN |

---

## 12. Lesson summary

- **PAN** = a tiny network around one person (Bluetooth).
- **LAN** = a network in one place (home, office).
- **WLAN** = a LAN that uses Wi-Fi.
- **MAN** = a network across a city.
- **WAN** = a network over a long distance; the internet is the biggest.

**One-sentence recap:** Network names sort by size — PAN (you), LAN/WLAN (one place), MAN (a city), and WAN (the world).

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-03-fill-in-the-blank.md`
2. **Matching** — `wb-04-03-matching.md`
3. **Label the diagram** — `wb-04-03-label-the-diagram.md` (network-size rings)
4. **Short answer** — `wb-04-03-short-answer.md`
5. **Hands-on observation** — `wb-04-03-hands-on-observation.md` (find your own PAN/LAN/WLAN/WAN)
6. **Vocabulary review** — `wb-04-03-vocabulary-review.md`
7. **Reflection** — `wb-04-03-reflection.md`

**Quick written warm-up (do this now):** Is the internet a LAN or a WAN? Are your Bluetooth earbuds a PAN or a MAN?

Internet: ____________  Earbuds: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-03-knowledge-check.md`.)

1. What does **LAN** stand for? *(Objective: define LAN)*
   - A) Large Area Network
   - B) Local Area Network
   - C) Long Access Node
   - D) Linked Address Number

2. A network that covers a **long distance**, like the internet, is a… *(Objective: define WAN)*
   - A) LAN
   - B) PAN
   - C) WAN
   - D) WLAN

3. Your phone connected to Bluetooth earbuds is an example of a… *(Objective: PAN)*
   - A) WAN
   - B) MAN
   - C) PAN
   - D) LAN

4. A **WLAN** is best described as… *(Objective: WLAN)*
   - A) a network across a city
   - B) a LAN that uses Wi-Fi
   - C) the internet
   - D) a Bluetooth link

5. Which network covers a **city**? *(Objective: MAN)*
   - A) PAN
   - B) LAN
   - C) MAN
   - D) WLAN

6. **True or false —** The internet is a LAN. Explain your answer in one sentence. *(Objective: WAN vs LAN)*

7. Put these in order from **smallest to largest**. *(Objective: size order)*
   - A) WAN, MAN, LAN, PAN
   - B) PAN, LAN, MAN, WAN
   - C) LAN, PAN, WAN, MAN
   - D) MAN, WAN, PAN, LAN

8. **Matching —** write the letter next to each name. *(Objective: vocabulary)*
   - ___ PAN &nbsp;&nbsp; ___ MAN &nbsp;&nbsp; ___ WAN
   - A) covers a long distance (the internet) &nbsp; B) a tiny network around one person &nbsp; C) covers a city

9. Fill in the blank: Your home network in one building is a ____________. *(Objective: LAN)*

10. **Scenario —** You join your home Wi-Fi on your laptop, then open a website in another country. Name the network you joined (in your home) and the network your request crossed to reach the site. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-03-network-sizes.md`. In brief:

- **Objective in one line:** learners match each name (PAN/LAN/WLAN/MAN/WAN) to its size and a real example.
- **Common misconceptions:** the internet is a "big LAN"; a WLAN is unrelated to a LAN. Correct both directly.
- **Pacing:** ~25 min. The find-your-own-examples lab is where it clicks.
- **How CompTIA tests it:** definition-to-example matching and size ordering.
- **Support idea:** draw the nested rings on the board and drop each device into a ring.
- **Extension idea:** introduce **CAN** (campus) and **SAN** (storage) as bonus terms for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Network sizes**
>
> - **PAN** = Personal Area Network — around one person (Bluetooth).
> - **LAN** = Local Area Network — one place (home, office).
> - **WLAN** = Wireless LAN — a LAN over Wi-Fi.
> - **MAN** = Metropolitan Area Network — a city.
> - **WAN** = Wide Area Network — long distance; the internet is one.
> - **Size order:** PAN < LAN < MAN < WAN.
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **LAN (Local Area Network)** — A network in one place, like a home or office.
- **WAN (Wide Area Network)** — A network over a long distance; the internet is one.
- **MAN (Metropolitan Area Network)** — A network across a city.
- **PAN (Personal Area Network)** — A tiny network around one person (Bluetooth).
- **WLAN (Wireless LAN)** — A LAN that uses Wi-Fi instead of cables.
- **Bluetooth** — A short-range wireless way to link nearby devices (a common PAN).

---

## 19. Homework

- **Practice:** Walk through your home and list every network you can find, then label each PAN, LAN, WLAN, or WAN.
- **Spaced review:** Redo the Lesson 04-02 flashcards for nodes and links.
- **Preview:** Inside a LAN, the nodes can be arranged in different shapes. The next lesson shows those shapes (star, bus, ring, mesh) — called topologies.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I match each name to its size and an example now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what LAN, WAN, MAN, PAN, and WLAN mean.
- [ ] I can put the sizes in order (PAN < LAN < MAN < WAN).
- [ ] I can give a real example of each from my own life.
- [ ] I know a WLAN is a LAN that uses Wi-Fi.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: network shapes (topologies).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L03** — "LAN, WAN, MAN, PAN, and WLAN Explained" · Module 04 · Unit 2_
