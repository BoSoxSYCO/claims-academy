# Answer Key — Lesson NA-M07-L02 "MAC Addresses and How a Switch Learns Them"

> 🔒 **Instructor / self-check only.** Covers Quiz 7.2.Q and Worksheets 7.2.A–7.2.G.

**Core:** source MAC → **learn** (fill the table) · destination MAC → **forward** (known) or **flood** (unknown/broadcast) · entries **age out**.

---

## Quiz 7.2.Q — Knowledge Check (10 pts)

1. **B** — The MAC address table matches each MAC to a port.
2. **B** — The switch learns from the source MAC.
3. **B** — For a known destination, it forwards out only that one port.
4. **B** — For an unknown destination, it floods out all ports except the source.
5. **B** — A broadcast is addressed to every device (FF:FF:FF:FF:FF:FF).
6. **False.** Good answer: it learns from the **source** MAC; the destination MAC is used to decide where to send.
7. **B** — An idle entry ages out (is removed).
8. Forward → **C**, Flood → **A**, Learn → **B**.
9. **source** MAC to learn; **destination** MAC to forward.
10. It **floods** the frame out all other ports; when the device **replies**, the switch reads that reply's source MAC and learns its port, then forwards directly after that.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 7.2.A — Fill-in-the-blank (20 pts, 2 each)

1. MAC address table 2. learns 3. source 4. destination 5. forward 6. one 7. flood 8. broadcast 9. port 10. age out.
**Challenge (+2):** "learn" and "forward" (source to learn, destination to forward).

## Worksheet 7.2.B — Matching (20 pts)

1→B, 2→A, 3→C, 4→D, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 7.2.C — Label the diagram (20 pts, 4 each)

1. source 2. destination 3. forward 4. flood. **Q5:** ZZ's MAC → its port (from the reply's source MAC).
**Why (+2):** a switch delivers known traffic to only the one right port (not to everyone), so it's quiet and avoids collisions.

## Worksheet 7.2.D — Short answer (20 pts)

1. It reads the source MAC of each incoming frame and records that MAC → the port it arrived on. *(idea /3, why /2)*
2. Forwarding sends a frame out only the one port for a known destination; flooding sends it out all ports except the source (unknown/broadcast). *(idea /3, why /2)*
3. It floods because it doesn't know the port yet; when the device replies, the switch learns that device's port from the reply's source MAC. *(idea /3, why /2)*
4. Aging removes idle entries after a set time, so the table stays current (handles moved/unplugged devices). *(idea /3, why /2)*

## Worksheet 7.2.E — Hands-on observation (25 pts)

- Step 1–2: `getmac` run; MAC recorded *(10)*.
- Step 3: entry written as MAC → port 5 *(5)*.
- Step 4: **Flood to all other ports** checked *(5)*.
- Step 5: switch learns that device's MAC → its port from the reply *(5)*.

## Worksheet 7.2.F — Vocabulary review (20 pts)

- **Part A:** MAC address table = switch's MAC → port list; Forward = send to the one right port; Flood = send to all ports but the source; Broadcast = a frame for every device.
- **Part B:** 5. source MAC 6. destination MAC 7. aging time.
- **Part C:** any correct sentences.
- **Part D:** the switch uses the MAC to tell devices apart and to fill its table (MAC → port) so it can forward to the right port.

## Worksheet 7.2.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 7.2 · CompTIA Network+ N10-009 · Instructor materials_
