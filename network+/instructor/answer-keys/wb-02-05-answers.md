# Answer Key — Lesson NA-M02-L05 "Reading Command Output Without Fear"

> 🔒 **Instructor / self-check only.** Covers Quiz 2.5.Q and Worksheets 2.5.A–2.5.G.

---

## Quiz 2.5.Q — Knowledge Check (10 pts)

1. **B** — Output is organized into labels and values.
2. **C** — The value is `192.168.1.24` (after the colon).
3. **B** — Scan for the key line.
4. **B** — The "Packets:" summary is the real result.
5. **B** — 0% loss = everything got through (perfect).
6. **False.** Good answer: you only need the key line; you can ignore the rest.
7. **B** — Scanning for Total = scanning for your key line.
8. Label → **C**, Value → **A**, Section → **B**.
9. **loss** (packet loss).
10. **100% loss** means no replies came back — you can't reach that device. Check next: your connection, then ping your **Default Gateway** to see if the router is reachable.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 2.5.A — Fill-in-the-blank (20 pts, 2 each)

1. organized 2. label 3. value 4. colon 5. section 6. key line 7. scan 8. loss 9. scan 10. value.
**Challenge (+2):** Label = `Default Gateway`; Value = `192.168.1.1`.

## Worksheet 2.5.B — Matching (20 pts)

1→C, 2→A, 3→B, 4→E, 5→D, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 2.5.C — Find the key lines (20 pts)

- Circled: **IPv4 Address** and **Default Gateway** (ipconfig); **Packets: ... (0% loss)** (ping).
- 1. `192.168.1.24` 2. `192.168.1.1` 3. 0% loss 4. Good — 0% loss means all pings replied. *(5 pts each)*
**Why (+2):** the `Packets:` line summarizes all the replies at once (the overall result), instead of one line per reply.

## Worksheet 2.5.D — Short answer (20 pts)

1. It's organized into labels (names) and values (answers), so you can scan. *(idea /3, why /2)*
2. Like a receipt: you scan for the one line you need (Total / key line) and ignore the rest. *(idea /3, clarity /2)*
3. % loss = share of pings with no reply; 0% is best. *(idea /3, why /2)*
4. Scan the output for the **Default Gateway** label and read its value. *(idea /3, why /2)*

## Worksheet 2.5.E — Vocabulary review (20 pts)

- **Part A:** Label = name before the colon; Value = answer after the colon; Key line = the line with the answer you need; Packet loss = % of pings with no reply.
- **Part B:** 1. Section 2. Label 3. Packet loss.
- **Part C:** any correct sentences.
- **Part D (module recall):** ipconfig = shows address; ping = tests reachability; file path = the address to a file (drive → folders → file).

## Worksheet 2.5.G — Hands-on observation (25 pts)

- Two ipconfig key lines and the ping summary recorded. *(ipconfig /10, ping /10)*
- Before the colon = label; after the colon = value; scanning gets faster with practice. *(interpretation /5)*

---
_NetworkAcademy+ · Answer Key 2.5 · CompTIA Network+ N10-009 · Instructor materials_
