# Answer Key — NA-M14-L05 "Troubleshooting Connectivity (Layers 1–3)"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.2 / 5.3

---

## Quiz answers (`quiz-14-05-knowledge-check.md`)

1. **B — Layer 1 (physical).** Check the physical layer first; most faults are physical. *(Starting higher wastes time on a possibly-unplugged cable.)*

2. **B — Layer 1 and climbs up.** Bottom-up begins at the physical layer. *(Top-down starts at the app.)*

3. **A — Layer 1 (physical).** No link light usually means a physical problem (cable/port). *(Not Layer 3/7 or DNS.)*

4. **B — APIPA — no DHCP answered.** A 169.254 address is self-assigned when DHCP fails. *(It is not normal, not "gateway fine," not a duplex issue.)*

5. **B — errors and slow speed.** A duplex mismatch degrades a link but doesn't fully drop it. *(It doesn't cause a total outage, a new IP, or a link light.)*

6. **False.** Check the physical layer (is the cable plugged in?) **before** the IP settings — bottom-up. Checking Layer 3 first wastes time if Layer 1 is broken.

7. **B — ipconfig.** It shows your IP address and default gateway. *(A cable tester and toner are Layer 1; a Wi-Fi analyzer is wireless.)*

8. **Matching:** **Link light / cable → C** (Layer 1); **VLAN / duplex → A** (Layer 2); **IP / gateway → B** (Layer 3).

9. **ping.** After Layers 1 and 2, **ping** the default gateway to test Layer 3.

10. **Scenario —** The problem is at **Layer 3 (network)**. A 169.254 address is **APIPA**, meaning **no DHCP server answered** — the PC couldn't get a real IP. Likely causes: DHCP server down/unreachable, or a path problem between the PC and the DHCP server. *(Accept "Layer 3 — no DHCP / APIPA.")*

---

## Worksheet answers

### Fill in the blank (`wb-14-05-fill-in-the-blank.md`)
1. bottom-up · 2. top-down · 3. Layer 1 · 4. link light · 5. duplex mismatch · 6. Layer 3 · 7. APIPA · 8. 169.254 · 9. ipconfig · 10. gateway

### Matching (`wb-14-05-matching.md`)
**Part 1:** 1 → C (Layer 1) · 2 → A (Layer 2) · 3 → B (Layer 3)
**Part 2:** 4 → E (bottom-up) · 5 → F (APIPA) · 6 → D (duplex mismatch)

### Label the diagram (`wb-14-05-label-the-diagram.md`)
a. Layer 1 · b. Layer 2 · c. Layer 3 · d. Physical · e. Data Link · f. Network · g. link light · h. duplex

### Short answer (`wb-14-05-short-answer.md`) — model answers
1. Bottom-up starts at Layer 1 (physical) and climbs up; top-down starts at Layer 7 (the app) and works down.
2. Because most connectivity faults are physical (a loose cable, dead port, no link light) — checking Layer 1 first is fast and cheap.
3. A link light shows a live physical connection; a dark one usually means a Layer 1 problem. It is a Layer 1 signal.
4. A duplex mismatch is one side set to full duplex and the other to half; it causes errors and slow speed (not a full outage).
5. It means APIPA — the device gave itself an address because no DHCP server answered.
6. Confirm a real IP with the right subnet mask, and ping the default gateway.
7. Because if the cable is unplugged, the IP settings can't help — you'd fix the wrong layer and waste time.

### Vocabulary review (`wb-14-05-vocabulary-review.md`)
- **Bottom-up troubleshooting** — start at Layer 1 and climb up.
- **Top-down troubleshooting** — start at Layer 7 (app) and work down.
- **Link light** — the LED that glows when a live link is present.
- **Duplex mismatch** — one side full duplex, the other half; causes errors/slowness.
- **APIPA** — a 169.254 address a device self-assigns when no DHCP answers.

**Part 3 (which layer):** 1. Layer 1 · 2. Layer 2 · 3. Layer 3 · 4. Layer 1 · 5. Layer 3

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L05 · Module 14_
