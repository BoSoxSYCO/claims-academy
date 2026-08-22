---
id: NA-M04-L06
module: 04
lesson: 06
title: "Bandwidth, Throughput, and Latency in Plain Words"
unit: 2
objective_ids: ["5.4"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M04-L02", "NA-M02-L05"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 06] Bandwidth, Throughput, and Latency in Plain Words

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 04-02 (nodes and links) and Lesson 02-05 (reading `ping` output).

A network is only useful if data moves **fast enough**. But "fast" hides three different ideas that people mix up all the time: **bandwidth**, **throughput**, and **latency**. This lesson pulls them apart with one simple picture — a highway — so you never confuse them again.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **bandwidth** (how much a link *can* carry).
- [ ] Explain **throughput** (how much actually *gets* through).
- [ ] Explain **latency** (the delay before data arrives).
- [ ] Read a speed in **Mbps** and a delay in **ms**, and tell them apart.

---

## 2. Introduction — why this matters

Picture a **highway**. Three different things decide how well it moves cars, and they are not the same thing.

First, **how many lanes** the highway has. More lanes means more cars can travel at once. Second, **how many cars actually get through** in a minute — which can be lower than the lanes allow if there's traffic. Third, **how long one car takes** to drive from the start to the end.

Networks have the exact same three ideas. **Bandwidth** is the number of lanes (the most a link can carry). **Throughput** is how much data really gets through. **Latency** is the delay — how long data takes to arrive. People say "my internet is slow," but slow can mean any of these three. A tech who can tell them apart can find the real problem.

🎯 **Exam tip:** Network+ loves to test the difference between bandwidth (capacity) and throughput (actual), and to check that you know latency is a **time**, not a speed.

---

## 3. Simple explanation

All three describe how data moves, but they measure different things. Two are about **amount**; one is about **time**.

### Bandwidth — how much a link *can* carry
**Bandwidth** is the **most** data a link can carry, in a perfect world. It is the "speed limit" or the number of lanes. We measure it in **bits per second**: **Mbps** (millions of bits per second) or **Gbps** (billions). A "300 Mbps" plan means the link *can* carry up to 300 million bits each second.

Bandwidth is a **maximum**, not a promise. It's how wide the pipe is.

### Throughput — how much *actually* gets through
**Throughput** is the data that **really** gets through, measured over real time. It is usually **less** than bandwidth. Traffic, weak Wi-Fi, distance, and busy servers all lower it.

Think of a wide highway at rush hour: eight lanes, but cars crawl. The lanes (bandwidth) are there; the real flow (throughput) is lower.

### Latency — the delay before data arrives
**Latency** is the **time** it takes data to travel from one node to another. It is a **delay**, measured in **milliseconds (ms)** — thousandths of a second. Lower is better.

Latency is **not** about how much data — it's about how long. A one-lane road and a ten-lane road can have the same drive time. You already measured latency in Module 02: the **time=** value in `ping` output is latency.

### Putting it together
- **Bandwidth** = lanes on the highway (capacity, in Mbps/Gbps).
- **Throughput** = cars that actually get through (real flow, in Mbps).
- **Latency** = how long one car's trip takes (delay, in ms).

> **The big idea:** **Bandwidth** is how much a link *can* carry, **throughput** is how much it *actually* carries, and **latency** is the *delay* before data arrives. Two are amounts (Mbps); one is a time (ms).

⚠️ **Watch out:** A "fast" connection can still feel slow if **latency** is high. Big bandwidth does not fix a long delay.

---

## 4. Real-world analogy

> **"A network link is a highway: bandwidth is the lanes, throughput is the real traffic flow, latency is the trip time."**

| On a highway… | On a network… | Measured in |
|---------------|---------------|-------------|
| Number of **lanes** | **Bandwidth** (max it can carry) | Mbps / Gbps |
| **Cars that get through** per minute | **Throughput** (what really flows) | Mbps |
| **Time for one car's trip** | **Latency** (the delay) | ms |
| A traffic jam | Low throughput on a big link | — |
| A long road | High latency | — |

More lanes (bandwidth) help only if traffic (throughput) can use them, and neither one shortens the trip time (latency).

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Bandwidth** | BAND-width | The most data a link can carry (its capacity). |
| **Throughput** | THROO-put | The data that actually gets through in real use. |
| **Latency** | LAY-ten-see | The delay — how long data takes to arrive. |
| **Millisecond (ms)** | MILL-ih-sek-und | One thousandth of a second; the unit for latency. |
| **Mbps** | M-B-P-S | Megabits per second — millions of bits each second. |
| **Jitter** | JIT-er | How much the latency (delay) changes from moment to moment. |

---

## 6. ASCII diagram

```
   A NETWORK LINK IS LIKE A HIGHWAY

   BANDWIDTH = how many lanes (capacity)
   =====================================   <- wide pipe can carry a lot
   |  lane  |  lane  |  lane  |  lane  |
   =====================================

   THROUGHPUT = cars that actually get through (real flow)
   ===[car]===[car]=========[car]=======   <- fewer cars if there's traffic

   LATENCY = time for ONE car's trip (delay), in ms
   START [car]-------------------> END
         |<----- 20 ms trip ----->|

   Two amounts (Mbps): bandwidth & throughput.  One time (ms): latency.
```

_Bandwidth = lanes · Throughput = real flow · Latency = trip time._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-06-highway-speed-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a highway split into three stacked strips — top strip labeled "bandwidth = lanes (capacity)"; middle strip with a few cars labeled "throughput = real flow"; bottom strip with one car and a timer arrow labeled "latency = trip time (ms)."
> **Key elements & labels:** each strip named in text; units noted (Mbps for the top two, ms for the bottom).
> **Color meaning:** each strip a different color **and** clearly labeled with text and units, so it reads in black and white.
> **Flow direction:** left to right (start → end).
> **Alt text (required):** "A highway shown as three stacked strips: the top strip's many lanes is labeled bandwidth or capacity in megabits per second; the middle strip with a few cars is labeled throughput or real flow; the bottom strip with one car and a timer is labeled latency or trip time in milliseconds."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-06-speed-test-01.jpg`
> A phone or laptop showing a speed-test result (download Mbps, ping ms). Alt text: "A speed-test screen showing download speed in Mbps and ping in milliseconds."
>
> **Photo 2** — `img-04-06-ping-output-01.jpg`
> A terminal showing `ping` output with `time=` values. Alt text: "A ping command's output with time values in milliseconds, which are latency."
>
> **Photo 3** — `img-04-06-highway-traffic-01.jpg`
> A multi-lane highway with traffic. Alt text: "A multi-lane highway with cars, an analogy for bandwidth and throughput."

---

## 9. Hands-on lab

**Goal:** measure your own latency with `ping`, and read a speed test for bandwidth/throughput.
**Why:** seeing real numbers in ms and Mbps makes the three ideas concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), online. Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** `ping` and a speed test only read information. They change nothing on your computer or network.

### 9a. Step-by-step instructions

1. Open **Command Prompt** (search "cmd" in the Start menu, press Enter).
2. Type this exact command and press Enter:
   ```
   ping www.google.com
   ```
3. Look at the **time=** values (for example, `time=18ms`). That number is **latency**. Write down the lowest and highest you see.
4. Read the summary line "Minimum / Maximum / Average" — the **Average** is your typical latency. Write it down.
5. Open a browser and run any speed test (search "speed test"). Note the **download** number in **Mbps** — that is close to your **throughput** right now. Your plan's advertised number is the **bandwidth**.
6. On paper, write three lines: **Bandwidth (plan) = ___ Mbps**, **Throughput (test) = ___ Mbps**, **Latency (ping avg) = ___ ms**.

### 9b. Expected results

- `ping` shows several `time=` values in **ms** (your latency).
- The speed test shows a **download in Mbps** (near your throughput).
- ✅ **You did it if:** you wrote one number in **ms** (latency) and two in **Mbps** (bandwidth and throughput), and can say which is which.

### 9c. Verify it worked

1. Point to your ms number and say "latency — a delay, a time."
2. Point to your Mbps numbers and say "bandwidth is the most it can carry; throughput is what I actually got."

### 9d. Reset / roll back

Nothing to undo — `ping` and speed tests only measure. Close the windows when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking bandwidth = throughput | You expect full speed always | Bandwidth is the max; throughput is the real, usually lower, flow |
| Thinking latency is a speed | You mix up time and amount | Latency is a **time** (ms); it's a delay, not Mbps |
| Believing more bandwidth fixes lag | You overpay and stay laggy | High latency stays high no matter how wide the pipe |
| Mixing up ms and Mbps | You misread results | **ms** = delay (latency); **Mbps** = amount per second (bandwidth/throughput) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Video calls lag but downloads are fine | High latency, ok bandwidth | Check `ping` time; latency, not bandwidth, hurts calls |
| Speed test far below my plan | Low throughput (Wi-Fi, distance, traffic) | Try a wired link or move closer to the router |
| Numbers confuse me | ms vs. Mbps | ms = time (latency); Mbps = amount (bandwidth/throughput) |

---

## 12. Lesson summary

- **Bandwidth** is the **most** a link can carry (capacity), in **Mbps/Gbps**.
- **Throughput** is what **actually** gets through, usually **less** than bandwidth.
- **Latency** is the **delay** before data arrives, in **milliseconds (ms)**.
- Two are amounts (Mbps); one is a time (ms). Big bandwidth does not fix high latency.
- The `time=` value in `ping` is latency.

**One-sentence recap:** Bandwidth is how much a link can carry, throughput is how much it really carries, and latency is the delay before data arrives — two amounts and one time.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-06-fill-in-the-blank.md`
2. **Matching** — `wb-04-06-matching.md`
3. **Label the diagram** — `wb-04-06-label-the-diagram.md` (the highway strips)
4. **Short answer** — `wb-04-06-short-answer.md`
5. **Hands-on observation** — `wb-04-06-hands-on-observation.md` (ping + speed test)
6. **Vocabulary review** — `wb-04-06-vocabulary-review.md`
7. **Reflection** — `wb-04-06-reflection.md`

**Quick written warm-up (do this now):** Which is measured in **ms** — bandwidth or latency? Which is usually **lower** — bandwidth or throughput?

Measured in ms: ____________  Usually lower: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-06-knowledge-check.md`.)

1. What does **bandwidth** describe? *(Objective: bandwidth)*
   - A) The delay before data arrives
   - B) The most data a link can carry
   - C) The number of nodes
   - D) The color of a cable

2. **Throughput** is… *(Objective: throughput)*
   - A) always equal to bandwidth
   - B) the data that actually gets through, usually less than bandwidth
   - C) measured in milliseconds
   - D) the shape of a network

3. **Latency** is measured in… *(Objective: latency units)*
   - A) Mbps
   - B) Gbps
   - C) milliseconds (ms)
   - D) lanes

4. Which is a **time** (a delay), not an amount? *(Objective: tell them apart)*
   - A) Bandwidth
   - B) Throughput
   - C) Latency
   - D) Megabits

5. Your plan says 300 Mbps but a speed test shows 180 Mbps. The 180 Mbps is your… *(Objective: apply)*
   - A) latency
   - B) bandwidth
   - C) throughput
   - D) jitter

6. **True or false —** More bandwidth always fixes a high-latency (laggy) connection. Explain in one sentence. *(Objective: bandwidth vs latency)*

7. In `ping` output, the **time=** value is your… *(Objective: connect to ping)*
   - A) bandwidth
   - B) throughput
   - C) latency
   - D) packet loss

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Bandwidth &nbsp;&nbsp; ___ Throughput &nbsp;&nbsp; ___ Latency
   - A) the delay before data arrives (ms) &nbsp; B) the most a link can carry &nbsp; C) what actually gets through

9. Fill in the blank: Bandwidth and throughput are measured in Mbps; latency is measured in ____________. *(Objective: units)*

10. **Scenario —** Your video calls freeze and stutter, but big downloads finish at full speed. Is the likely problem bandwidth or latency, and why? *(Objective: diagnose)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-06-bandwidth-latency.md`. In brief:

- **Objective in one line:** learners separate bandwidth (max), throughput (actual), and latency (delay), and read ms vs. Mbps.
- **Common misconceptions:** bandwidth = throughput; latency is a speed; more bandwidth fixes lag. Correct all three.
- **Pacing:** ~25 min. The ping + speed-test lab makes the numbers real.
- **How CompTIA tests it:** bandwidth vs. throughput wording; latency as a time; diagnosing lag.
- **Support idea:** keep returning to the highway picture; point to the ms vs. Mbps units.
- **Extension idea:** introduce jitter and packet loss (from 02-05) as call-quality factors for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Speed words**
>
> - **Bandwidth** = the **most** a link can carry (capacity). Unit: **Mbps/Gbps**. = highway lanes.
> - **Throughput** = what **actually** gets through (usually less). Unit: **Mbps**. = real traffic flow.
> - **Latency** = the **delay** before data arrives. Unit: **ms**. = trip time. Lower is better.
> - Two amounts (Mbps), one time (ms). Big bandwidth does **not** fix high latency.
> - `ping` **time=** is latency.
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Bandwidth** — The most data a link can carry (its capacity).
- **Throughput** — The data that actually gets through in real use.
- **Latency** — The delay — how long data takes to arrive.
- **Millisecond (ms)** — One thousandth of a second; the unit for latency.
- **Mbps** — Megabits per second — millions of bits each second.
- **Jitter** — How much the latency (delay) changes from moment to moment.

---

## 19. Homework

- **Practice:** Run `ping` to three different sites and write down each average latency. Which is closest? Which is farthest?
- **Spaced review:** Redo the Lesson 04-05 flashcards for client-server vs. peer-to-peer.
- **Preview:** That completes the foundations of Unit 2. Next, we go inside the wires and signals — how data physically travels (Module 05).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell bandwidth, throughput, and latency apart now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain bandwidth, throughput, and latency.
- [ ] I know two are amounts (Mbps) and one is a time (ms).
- [ ] I know big bandwidth does not fix high latency.
- [ ] I found my own latency with `ping` and my throughput with a speed test.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: how data physically travels (Module 05).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L06** — "Bandwidth, Throughput, and Latency in Plain Words" · Module 04 · Unit 2_
