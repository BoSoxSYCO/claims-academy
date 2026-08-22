---
id: NA-M11-L04
module: 11
lesson: 04
title: "Spanning Tree Protocol (Loop Prevention)"
unit: 8
objective_ids: ["2.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M07-L02", "NA-M11-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 04] Spanning Tree Protocol (Loop Prevention)

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E2 (your laptop + the Dell PowerConnect 3424)
> **You'll need first:** how switches flood frames (07-02) and trunks (11-03).

Two switches, one cable — simple. But real networks add a **second** cable between switches for backup. Now there's a **loop**, and a loop can crash the whole network in seconds. **Spanning Tree Protocol (STP)** quietly prevents that. This lesson explains why loops are so dangerous and how STP saves you — without you doing anything.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** a switching loop is dangerous (broadcast storm).
- [ ] Describe what **STP** does to prevent loops.
- [ ] Name the **root bridge** and **blocked port** roles in plain terms.
- [ ] Check STP status on the Dell 3424 (with `[TO VERIFY ON HARDWARE]` notes).

---

## 2. Introduction — why this matters

You want your network to keep working even if one cable fails. So you add a **second** cable between two switches as a backup. Good idea — but now the two switches have **two** paths to each other. That's a **loop**.

Here's the danger. Remember from Lesson 07-02: when a switch gets a **broadcast**, it floods it out every port. In a loop, that broadcast goes to the other switch, which floods it back, which floods it again… forever. In seconds, the same frame is racing around the loop millions of times. This is a **broadcast storm**, and it melts the network — nothing else can get through.

**Spanning Tree Protocol (STP)** solves this. The switches talk to each other and agree to **block** one of the redundant paths, leaving exactly **one** active path. The backup cable is still there — STP just keeps it turned off until it's needed. If the main path fails, STP turns the backup on. You get safety **and** backup, automatically.

🎯 **Exam tip:** STP prevents **switching loops** at Layer 2. Know the broadcast storm as the problem it solves.

🔧 **Lab link:** Your Dell 3424 runs STP by default. You'll check its status, not turn it off.

---

## 3. Simple explanation

### The problem: a loop causes a storm

A **switching loop** is two or more paths between switches that form a circle. Broadcasts (and unknown frames) get flooded around the circle endlessly. Three bad things happen fast:

- **Broadcast storm** — the same frame multiplies without end.
- **MAC table instability** — the switch keeps seeing the same address on different ports and gets confused.
- **Duplicate frames** — devices receive many copies.

The network slows to a crawl or stops. And unlike a bad cable, a loop takes down **everything**.

### The fix: Spanning Tree Protocol

**STP** (the standard is **802.1D**; the modern, faster version is **Rapid STP, 802.1w**) makes the switches cooperate. They pick one path to keep active and **block** the rest, so there is no circle for frames to loop around.

STP does three things:

1. **Elect a root bridge.** One switch becomes the **root bridge** — the agreed center of the network. All paths are measured from it.
2. **Pick the best path** from every switch back to the root.
3. **Block the extra paths.** Ports on the loser paths go into a **blocking** state — they don't forward normal traffic, but they still listen.

```
   WITHOUT STP (loop = storm):
     Switch A ══╗    ╔══ Switch B
               ║════║        broadcast loops forever ↻

   WITH STP (one path blocked):
     Switch A ══╗    ╔══ Switch B
               ║  ✗ ║        one link BLOCKED → no loop
     (the ✗ link turns on only if the main link fails)
```

### If a link fails

STP is always watching. If the active path breaks, STP **unblocks** the backup path within seconds (Rapid STP is faster than old STP). Your backup cable finally earns its keep — automatically.

> **The big idea:** Two paths between switches make a **loop**, and a loop causes a **broadcast storm** that crashes the network. **Spanning Tree Protocol (STP)** prevents this by electing a **root bridge**, keeping one best path active, and **blocking** the extra paths. If the active path fails, STP unblocks a backup. You get redundancy **and** safety — automatically.

💡 **Tip:** STP doesn't delete your backup link — it just keeps it in **standby** until it's needed.

⚠️ **Watch out:** Never "fix" a slow network by disabling STP. Without it, one accidental loop (even a cable plugged into two wall jacks) can storm the whole network down.

---

## 4. Real-world analogy

> **"STP is a traffic officer at a roundabout with two entrances — they close one gate so cars can't circle forever, and open it only if the other gate jams."**

| Roundabout | Switching network |
|------------|-------------------|
| Two entrances = cars can circle forever | Two paths = frames loop forever |
| Officer closes one gate | STP blocks one port |
| One open path keeps traffic flowing | One active path, no loop |
| Gate opens if the other jams | Backup unblocks if the main fails |

Closing one gate isn't wasteful — it prevents gridlock, and the gate reopens the moment it's needed.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Switching loop** | | Two or more paths between switches that form a circle frames can loop around. |
| **Broadcast storm** | | A flood of endlessly multiplying frames that crashes the network. |
| **STP** | S-T-P | Spanning Tree Protocol — blocks loops by leaving one active path. |
| **Root bridge** | | The one switch STP picks as the center; all paths are measured from it. |
| **Blocking** | | A port state where STP stops a port from forwarding, to break a loop. |

---

## 6. ASCII diagram

```
   SPANNING TREE — ONE PATH ON, THE LOOP BROKEN

              [ ROOT BRIDGE ]
              Switch A
             /            \
        active            active
           /                \
     Switch B ===BLOCKED=== Switch C
              (backup link, off)

   Frames flow A–B and A–C.  The B–C link is BLOCKED,
   so there is no circle.  If A–B fails, B–C turns ON.
```

_STP keeps a tree shape (no circles) by blocking the link that would close a loop._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-04-stp-loop-block-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three switches in a triangle; one marked as root bridge; two links active (forwarding) and one link blocked, with a note that the blocked link turns on if a main link fails.
> **Key elements & labels:** "Root bridge" on the top switch, "Forwarding" on two links, "Blocked" on the third link, a small caption "backup — turns on if a main link fails."
> **Color meaning:** forwarding vs. blocked links are labeled in words **and** drawn with different line styles (solid vs. dashed with an X), never color alone.
> **Flow direction:** root at top, two switches below; the bottom link is the blocked one.
> **Alt text (required):** "Three switches in a triangle. The top switch is labeled the root bridge. The two links from the root down to the other two switches are labeled forwarding and drawn solid. The link between the two lower switches is labeled blocked and drawn dashed with an X, showing Spanning Tree Protocol has turned it off to break the loop. A caption notes the blocked link is a backup that turns on automatically if one of the forwarding links fails."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-04-two-links-01.jpg`
> Two switches joined by two cables (a redundant pair). Alt text: "Two switches connected by two cables, forming a redundant loop that Spanning Tree Protocol will manage."
>
> **Photo 2** — `img-11-04-cli-showstp-01.jpg`
> The CLI showing STP status with a port in blocking. Alt text: "The switch CLI showing Spanning Tree status, with the root bridge listed and one port in the blocking state."

---

## 9. Hands-on lab

**Goal:** view Spanning Tree status on your Dell 3424 and identify the root bridge — without changing anything.
**Why:** knowing how to read STP status helps you spot loops and blocked ports.

**You will need**
- Your laptop and the Dell PowerConnect 3424. Estimated time: 12 min.

⚠️ **Before you start (safety):** you only **view** STP. Do **not** disable it. Turning STP off can let a loop storm the network.

### 9a. Step-by-step instructions

1. Log in and reach `console#`.
2. View Spanning Tree status:
   ```
   show spanning-tree
   ```
3. Find the line that names the **root bridge** (often shown as "Root ID" or "This switch is the root").
4. Look at each port's **state**: `Forwarding`, `Blocking`, or `Disabled`.
5. If you have a second switch and two cables between them, note which port is `Blocking`.

> **[TO VERIFY ON HARDWARE]** The exact `show spanning-tree` output layout and wording (Root ID, port states, RSTP vs. STP labels) vary by PowerConnect firmware. Confirm on your unit — do not assume this is word-for-word.

### 9b. Expected results

You should see a root bridge identified and each port's STP state. With a redundant link, one port will read **Blocking**. **[TO VERIFY ON HARDWARE]**:

```
 Spanning-tree enabled, mode RSTP
 Root ID   priority 32768  address 00:11:22:...
 Port      State
 g1        Forwarding
 g24       Blocking
```

- ✅ **You did it if:** you found the root bridge and read at least one port's STP state.

### 9c. Verify it worked

1. Point to the root bridge line and say what it means.
2. Name one port and its state (Forwarding or Blocking).

### 9d. Reset / roll back

Nothing changed — you only viewed status. STP keeps running.

> 🔧 **Home-lab continuity:** leave STP enabled (default). It protects every later lab from accidental loops.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Disabling STP to "speed things up" | One loop storms the network | Leave STP **on** — it's protecting you |
| Plugging one cable into two switch ports | Instant loop | Trace cables; STP will block, but avoid the loop |
| Thinking a blocked port is broken | Confusion | Blocking is normal — it's a standby path |
| Assuming the backup is wasted | Missed value | The backup turns on automatically if the main fails |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Whole network suddenly crawls | Broadcast storm from a loop | Find the loop; confirm STP is enabled |
| A port won't pass traffic | It's in STP blocking (by design) | Check `show spanning-tree`; it's the standby path |
| Network didn't recover after a cable pull | STP slow or disabled | Ensure Rapid STP (802.1w) is on |
| Duplicate frames everywhere | Loop with STP off | Turn STP back on immediately |

---

## 12. Lesson summary

- Two paths between switches make a **loop**; a loop causes a **broadcast storm** that crashes the network.
- **STP** prevents loops by keeping **one** active path and **blocking** the rest.
- STP elects a **root bridge** and measures the best path from it.
- If the active path fails, STP **unblocks** a backup — automatically.

**One-sentence recap:** Spanning Tree Protocol stops switching loops by electing a root bridge and blocking redundant paths, keeping one loop-free path active and switching to a backup automatically if it fails.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-04-fill-in-the-blank.md`
2. **Matching** — `wb-11-04-matching.md`
3. **Label the diagram** — `wb-11-04-label-the-diagram.md` (root + blocked link)
4. **Short answer** — `wb-11-04-short-answer.md`
5. **Hands-on observation** — `wb-11-04-hands-on-observation.md` (read STP status)
6. **Vocabulary review** — `wb-11-04-vocabulary-review.md`
7. **Reflection** — `wb-11-04-reflection.md`

**Quick written warm-up (do this now):** What problem does STP prevent? What is the center switch called?

Problem: ____________  Center switch: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-04-knowledge-check.md`.)

1. What problem does **STP** prevent? *(Objective: loops)*
   - A) Weak Wi-Fi
   - B) Switching loops (broadcast storms)
   - C) Slow hard drives
   - D) Wrong IP addresses

2. A **switching loop** happens when… *(Objective: loops)*
   - A) a cable is too short
   - B) there are two or more paths forming a circle between switches
   - C) a port is turned off
   - D) a PC has no IP

3. A **broadcast storm** is… *(Objective: storm)*
   - A) bad weather
   - B) endlessly multiplying frames crashing the network
   - C) a type of cable
   - D) a saved config

4. STP picks one switch as the… *(Objective: root)*
   - A) root bridge
   - B) trunk
   - C) gateway
   - D) firewall

5. To break a loop, STP puts an extra port into… *(Objective: blocking)*
   - A) forwarding
   - B) blocking
   - C) trunk mode
   - D) access mode

6. **True or false —** You should disable STP to make the network faster. Explain in one sentence. *(Objective: safety)*

7. If the active path fails, STP will… *(Objective: recovery)*
   - A) stay blocked forever
   - B) unblock a backup path automatically
   - C) reboot the switch
   - D) delete the VLANs

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ Root bridge &nbsp;&nbsp; ___ Broadcast storm &nbsp;&nbsp; ___ Blocking
   - A) Endlessly multiplying frames
   - B) The center switch STP measures from
   - C) A port state that stops forwarding to break a loop

9. Fill in the blank: A blocked port is not broken — it is a ____________ path. *(Objective: blocking)*

10. **Scenario —** Someone added a second cable between two switches for backup, and now the whole network has slowed to a crawl. What likely happened, and what protocol should be handling it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-04-stp.md`. In brief:

- **Objective in one line:** learners explain switching loops and broadcast storms, and how STP prevents them by electing a root bridge and blocking redundant paths.
- **Common misconceptions:** "a blocked port is broken"; "disable STP to speed up." Correct both.
- **Pacing:** ~30 min. Spend time on the storm mechanic — it motivates everything else.
- **How CompTIA tests it:** STP prevents Layer 2 loops; root bridge, blocking/forwarding states; RSTP (802.1w) is faster than STP (802.1D).
- **Accuracy note (Prime Directive #7):** `show spanning-tree` output varies by PowerConnect firmware; every unverified line is marked **[TO VERIFY ON HARDWARE]**.
- **Extension idea:** BPDUs, bridge priority, and how the root election actually works (lowest bridge ID wins).

---

## 17. Cheat sheet

> **Quick reference — Spanning Tree (STP)**
>
> - **Problem:** two paths between switches = a **loop** → a **broadcast storm** crashes the network.
> - **Fix:** STP keeps **one** active path and **blocks** the extras.
> - **Root bridge** = the center switch; best paths are measured from it.
> - **Port states:** Forwarding (active) · Blocking (standby) · Disabled.
> - If the active path fails → STP **unblocks** a backup (Rapid STP / 802.1w is faster).
> - Standards: **802.1D** (STP) · **802.1w** (Rapid STP).
> - View it: `show spanning-tree`  · **[TO VERIFY ON HARDWARE]**
> - ⚠️ Never disable STP to "speed up" — one loop can storm everything.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Spanning Tree Protocol (STP)** — A protocol that prevents switching loops by keeping one active path and blocking the rest.
- **Switching loop** — Two or more paths between switches that form a circle frames can loop around.
- **Broadcast storm** — A flood of endlessly multiplying frames that crashes the network.
- **Root bridge** — The one switch STP picks as the center; all paths are measured from it.
- **Blocking (STP)** — A port state where STP stops a port from forwarding, to break a loop.

---

## 19. Homework

- **Practice:** Draw three switches in a triangle; mark the root bridge and which link STP would block.
- **Spaced review:** Explain to someone why a loop is worse than a single bad cable.
- **Preview:** Next lesson, **routing basics** — static vs. dynamic routes.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Why is a broadcast storm so dangerous? _______________________
3. Why should I never disable STP? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain a switching loop and a broadcast storm.
- [ ] I know STP keeps one path active and blocks the rest.
- [ ] I can explain the root bridge and a blocked port.
- [ ] I viewed STP status on the switch (or read the steps).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers routing basics.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L04** — "Spanning Tree Protocol (Loop Prevention)" · Module 11 · Unit 8_
