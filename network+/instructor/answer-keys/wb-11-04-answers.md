---
answer_key_for: NA-M11-L04
module: 11
lesson: 04
unit: 8
covers: [quiz-11-04, wb-11-04-fill-in-the-blank, wb-11-04-matching, wb-11-04-label-the-diagram, wb-11-04-short-answer, wb-11-04-hands-on-observation, wb-11-04-vocabulary-review, wb-11-04-reflection]
objective_ids: ["2.3"]
---

# 🔒 Instructor Answer Key — Lesson 11-04: Spanning Tree Protocol (Loop Prevention)

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.3**.

---

## Quiz 11-04 — answers & explanations

**1. What does STP prevent? → B) Switching loops (broadcast storms).**
STP is a Layer 2 loop-prevention protocol. It doesn't touch Wi-Fi (A), disks (C), or IP addressing (D).

**2. A switching loop happens when → B) two or more paths form a circle between switches.**
A short cable (A), a disabled port (C), or a PC with no IP (D) don't create loops.

**3. A broadcast storm is → B) endlessly multiplying frames crashing the network.**
Not weather (A), a cable (C), or a config (D).

**4. STP picks → A) root bridge.**
A trunk (B) carries VLANs; a gateway (C) is a router; a firewall (D) filters — none are the STP center.

**5. Extra port goes into → B) blocking.**
Blocking breaks the loop. Forwarding (A) is active; trunk/access (C/D) are VLAN modes, unrelated.

**6. True or false — disable STP to go faster. → FALSE.**
Disabling STP removes loop protection; one accidental loop then storms the whole network. Accept any answer that says false and warns about loops/storms.

**7. If the active path fails → B) unblock a backup path automatically.**
STP is always watching and re-enables a standby path (Rapid STP is faster). It doesn't stay blocked (A), reboot (C), or delete VLANs (D).

**8. Matching → Root bridge = B; Broadcast storm = A; Blocking = C.**
Full credit requires all three.

**9. Fill in the blank → standby (backup) path.**

**10. Scenario (sample full-credit answer):**
The second cable created a **switching loop**, and broadcasts are looping endlessly — a **broadcast storm** — which is why everything slowed. **Spanning Tree Protocol (STP)** should be handling it by blocking one of the two paths; confirm STP is enabled (it may have been disabled, or needs a moment to converge). Award credit for identifying the loop/storm and naming STP.

**Score band:** 9–10 ✅ · 7–8 🟡 review root/blocking · 5–6 🟠 redo the storm mechanic · <5 🔴 reteach with the roundabout analogy.

---

## Worksheet 11.4.A — Fill in the Blank (2 pts each)

1. **loop** &nbsp; 2. **flood** &nbsp; 3. **storm** &nbsp; 4. **STP** &nbsp; 5. **one**
6. **root bridge** &nbsp; 7. **blocking** &nbsp; 8. **standby** &nbsp; 9. **backup** &nbsp; 10. **automatically**

**Challenge (+2):** A bad cable takes down one link; a loop multiplies frames until the storm floods and crashes the **whole** network.

---

## Worksheet 11.4.B — Matching (2 pts each)

**Part 1:** 1. Switching loop → **C** · 2. Broadcast storm → **D** · 3. STP → **E** · 4. Root bridge → **A** · 5. Blocking → **B**

**Part 2:** 6. 802.1D → **G** (original STP) · 7. 802.1w → **F** (Rapid STP) · 8. Forwarding → **H** · 9. Blocking → **I**

10. **Never disable STP.**

---

## Worksheet 11.4.C — Label the Diagram (2 pts each)

1. **root bridge** &nbsp; 2. **forwarding** &nbsp; 3. **blocked (blocking)**
4. **To break the loop / prevent a storm** &nbsp; 5. **one** &nbsp; 6. **the active/forwarding path (it unblocks)** &nbsp; 7. **a broadcast storm** &nbsp; 8. **broadcast frames** &nbsp; 9. **no** &nbsp; 10. **no**

---

## Worksheet 11.4.D — Short Answer (4 pts each)

1. A broadcast is flooded out all ports; in a loop it reaches the other switch, which floods it back, which floods it again — the same frame multiplies endlessly, flooding the network.
2. **Elect a root bridge**, **pick the best path** from each switch to the root, and **block** the extra paths.
3. The root bridge is the agreed center switch; STP measures the best path from it so all switches make consistent, loop-free choices.
4. A blocked port is a **standby** — it turns on automatically if the active path fails, giving redundancy without a loop.
5. STP is the officer at a two-entrance roundabout: they **close one gate** so cars can't circle forever, and **reopen it** only if the other gate jams.

---

## Worksheet 11.4.E — Hands-on Observation

- Steps 1–3, 5, 7: completion/short answers.
- **4.** The learner's actual root bridge line (varies by firmware).
- **6.** Two real ports and states from their switch.
- **8.** Any real firmware difference — full credit for honest observation.

> **Accuracy note (Prime Directive #7):** `show spanning-tree` output varies by PowerConnect firmware; the lesson marks samples `[TO VERIFY ON HARDWARE]` and the learner records their **own** output. No fabricated output is claimed.

---

## Worksheet 11.4.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Switching loop → **C** · 2. Broadcast storm → **A** · 3. STP → **B** · 4. Root bridge → **E** · 5. Blocking → **D**

**Part 2 (accept close wording):**
6. Broadcasts flood around the circle endlessly, multiplying.
7. It's the agreed center; best paths are measured from it so choices are consistent.
8. A standby port STP stops from forwarding, to break the loop.
9. STP unblocks a backup path automatically.
10. Without it, one accidental loop storms and crashes the whole network.

---

## Worksheet 11.4.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 shows whether the storm mechanic landed.

---
_NetworkAcademy+ · Answer Key 11-04 · CompTIA Network+ N10-009 · Instructor materials_
