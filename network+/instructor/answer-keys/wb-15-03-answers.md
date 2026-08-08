# Answer Key — NA-M15-L03 "Performance-Based Question (PBQ) Practice"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness

---

## Quiz answers (`quiz-15-03-knowledge-check.md`)

1. **A — a hands-on task using content you already know.** PBQs wrap taught material (OSI, ports, IP, cabling) in an interactive task. *(Not essays, new material, or interviews.)*

2. **B — read the whole task and find the goal.** Know what is being asked before you touch anything. *(Typing or guessing blindly wastes the attempt.)*

3. **C — Layer 3 (Network).** IP addressing lives at the Network layer. *(Cables are L1, MAC is L2, ports are L4.)*

4. **C — 255.255.255.0.** A `/24` prefix sets the first three octets as network. *(255.0.0.0 is /8; 255.255.0.0 is /16; 255.255.255.255 is a single host.)*

5. **B — answer your best guess — never blank.** A guess can earn partial credit; a blank scores zero. *(Leaving it or deleting your work only loses points.)*

6. **False.** PBQs reuse material you already studied (OSI, ports, IP/subnet, VLANs, cabling) — just shown as a hands-on task.

7. **B — straight-through.** A PC-to-switch link uses a straight-through patch cable. *(Crossover joined like devices historically; fiber suits long runs; a power cable is unrelated.)*

8. **Matching:** **MAC address / switch → C** (Layer 2); **Port number → A** (Layer 4); **Cable / hub → B** (Layer 1).

9. **sub-part.** Answer every sub-part you can — partial credit is possible.

10. **Scenario —** A valid set: **IP** `192.168.1.10` (any unused host `.1`–`.254`), **mask** `255.255.255.0` (that is what `/24` means), **gateway** `192.168.1.1` (the router on this network). Each is valid because the host sits in `192.168.1.x`, the mask matches `/24`, and the gateway is on the same network. *(Accept any unused host in range with the correct mask and an in-range gateway.)* Values are examples. **[TO VERIFY ON HARDWARE]**

---

## Worksheet answers

### Fill in the blank (`wb-15-03-fill-in-the-blank.md`)
1. read · 2. plan · 3. guess · 4. blank · 5. 255.255.255.0 · 6. Layer 3 · 7. Layer 1 · 8. straight-through · 9. gateway · 10. partial

### Matching (`wb-15-03-matching.md`)
**Part 1:** 1 → C (IP, Layer 3) · 2 → B (MAC, Layer 2) · 3 → A (cable, Layer 1) · 4 → D (port, Layer 4)
**Part 2:** 5 → F (drag-and-drop) · 6 → E (fill-in) · 7 → G (label)

### Label the diagram (`wb-15-03-label-the-diagram.md`)
a. read the whole task · b. plan your answer · c. do the sure parts · d. guess the rest · e. check for blanks
Bonus: drag-and-drop / matching · fill-in / configure · label / identify

### Short answer (`wb-15-03-short-answer.md`) — model answers
1. A hands-on exam task (drag-and-drop, fill-in, or labeling) that uses content you already learned.
2. So you answer the real goal instead of guessing at part of it and wasting time.
3. Partial credit is possible; a blank scores zero, so a guess can only help.
4. `255.255.255.0` — `/24` means the first 24 bits (three octets) are the network part.
5. PC-to-switch uses straight-through; a long run between buildings uses fiber.
6. Drag-and-drop / matching, fill-in / configure, and label / identify.
7. The exam is timed; time spent polishing one PBQ is time lost on easy questions elsewhere.

### Vocabulary review (`wb-15-03-vocabulary-review.md`)
- **Performance-Based Question (PBQ)** — a hands-on exam task (drag-and-drop, fill-in, or labeling).
- **OSI model** — the 7-layer map of how networks work.
- **Subnet mask** — the number that marks which part of an IP is the network.
- **Default gateway** — the router address a device uses to leave its network.
- **Straight-through cable** — the normal PC-to-switch patch cable.

**Part 2 (five steps):** read → plan → do the sure parts → guess the rest → check for blanks.
**Part 3:** 1. 255.255.255.0 · 2. Layer 3 · 3. Layer 4 · 4. straight-through

### Hands-on observation (`wb-15-03-hands-on-observation.md`)
PBQ 1: IP → Layer 3 · MAC/switch → Layer 2 · cable/hub → Layer 1 · port → Layer 4.
PBQ 2: any unused host in `192.168.1.1`–`192.168.1.254`; mask `255.255.255.0`; gateway `192.168.1.1`. Values are examples `[TO VERIFY ON HARDWARE]`.
PBQ 3: PC to switch → straight-through · two PCs direct → crossover (auto-MDIX often fixes this) `[VERIFY WITH CompTIA]` · long run → fiber.
Check the learner used all five steps and left no blanks.

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M15-L03 · Module 15_
