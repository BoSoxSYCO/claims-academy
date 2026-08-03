# Answer Key — Lesson NA-M05-L02 "The OSI 7 Layers — A Floor-by-Floor Tour"

> 🔒 **Instructor / self-check only.** Covers Quiz 5.2.Q and Worksheets 5.2.A–5.2.G.

**The 7 layers (1→7):** Physical · Data Link · Network · Transport · Session · Presentation · Application.
**Mnemonic:** Please Do Not Throw Sausage Pizza Away.

---

## Quiz 5.2.Q — Knowledge Check (10 pts)

1. **C** — Layer 1 is Physical (the wire and raw bits).
2. **B** — Layer 7 is Application (your apps).
3. **C** — A router works at Layer 3 (Network — IP and routing).
4. **A** — A switch and MAC addresses live at Layer 2 (Data Link).
5. **B** — Encryption and formatting are the Presentation layer (Layer 6).
6. **True.** Good answer: to send, data starts at the top (app) and moves down the stack to the wire.
7. **B** — The mnemonic runs bottom to top, Layer 1 (Physical) to Layer 7 (Application).
8. Physical → **B**, Network → **C**, Transport → **A**.
9. **4** (Transport is Layer 4).
10. **Layer 1 (Physical).** Why: every higher layer's data must ride down to the wire to leave; if the wire is dead, nothing above it can get out.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 5.2.A — Fill-in-the-blank (20 pts, 2 each)

1. seven 2. Physical 3. Data Link 4. Network 5. Transport 6. Session 7. Presentation 8. Application 9. down 10. up.
**Challenge (+2):** "Please Do Not Throw Sausage Pizza Away."

## Worksheet 5.2.B — Matching (20 pts)

1→B, 2→A, 3→D, 4→C, 5→F, 6→E, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 5.2.C — Label the diagram (20 pts)

1. Application 2. Presentation 3. Session 4. Transport 5. Network 6. Data Link 7. Physical (2 pts each, 14).
**Q8:** DOWN = to send *(2)*. **Q9:** Layer **1** *(2)*.
**Why (+2):** the browser is what you use (top, Layer 7); the cable is the physical link that carries bits (bottom, Layer 1).

## Worksheet 5.2.D — Short answer (20 pts)

1. Physical, Data Link, Network, Transport, Session, Presentation, Application. *(idea /3, order /2)*
2. Data Link (L2) delivers locally with MAC addresses/switches; Network (L3) moves between networks with IP/routers. *(idea /3, why /2)*
3. To send, data starts at your app (top) and each layer adds its part on the way down to the wire; receiving reverses it upward. *(idea /3, why /2)*
4. A switch delivers locally (L2, MAC), while a router connects different networks (L3, IP) — different jobs, different layers. *(idea /3, why /2)*

## Worksheet 5.2.E — Hands-on observation (25 pts)

- Step 1: ladder correct top-to-bottom (Application … Physical) *(10)*.
- Step 2: cable = L1, switch = L2, IP = L3, browser = L7, encryption = L6 *(10)*.
- Step 3: recited with no peeking *(5)*.

## Worksheet 5.2.F — Vocabulary review (20 pts)

- **Part A:** Physical = wire/raw bits; Data Link = local delivery, MAC/switch; Network = IP/routing between networks; Transport = split/check/ports.
- **Part B:** 5. Presentation 6. Application 7. Session.
- **Part C:** any correct sentences.
- **Part D:** the **Data Link** layer (Layer 2) uses MAC addresses.

## Worksheet 5.2.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 5.2 · CompTIA Network+ N10-009 · Instructor materials_
