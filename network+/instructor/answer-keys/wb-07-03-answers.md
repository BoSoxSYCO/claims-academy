# Answer Key — Lesson NA-M07-L03 "Broadcast vs. Collision Domains"

> 🔒 **Instructor / self-check only.** Covers Quiz 7.3.Q and Worksheets 7.3.A–7.3.G.

**Mantra:** switches break up **collision** domains; routers break up **broadcast** domains.
**Counting:** Hub = 1 collision / 1 broadcast · Switch(N ports) = N collision / 1 broadcast · Router = 1 broadcast per side.

---

## Quiz 7.3.Q — Knowledge Check (10 pts)

1. **A** — A collision is two devices sending at once on a shared wire, clashing.
2. **B** — A collision domain is a zone where a collision can happen.
3. **A** — A hub has one collision domain for all ports.
4. **B** — On a switch, each port is its own collision domain.
5. **C** — A router breaks up broadcast domains.
6. **False.** Good answer: a switch floods broadcasts to all ports; only a router stops them.
7. **B** — Switches break up collision domains; routers break up broadcast domains.
8. Hub → **B**, Switch → **A**, Router → **C**.
9. **5** collision domains and **1** broadcast domain.
10. Add a **router** (or use VLANs later); it does not forward broadcasts, so it splits the broadcast domain into separate networks.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 7.3.A — Fill-in-the-blank (20 pts, 2 each)

1. shared 2. collision 3. broadcast 4. hub 5. switch 6. router 7. one 8. each 9. CSMA/CD 10. full-duplex.
**Challenge (+2):** collision / broadcast.

## Worksheet 7.3.B — Matching (20 pts)

1→B, 2→A, 3→D, 4→C, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 7.3.C — Label the diagram (20 pts, 4 each)

1. 1 (hub, all ports) 2. 1 3. 4 (each switch port) 4. 1 5. 2 (router splits them).
**Why (+2):** a router does not forward broadcasts, so each side of it becomes a separate broadcast domain.

## Worksheet 7.3.D — Short answer (20 pts)

1. A collision domain is a zone where two devices' signals can clash (collide). *(idea /3, why /2)*
2. A broadcast domain is the group that hears each other's broadcasts; a **router** splits it. *(idea /3, why /2)*
3. A switch sends each port its own dedicated path, so two devices on different ports can't collide (a hub shares one wire). *(idea /3, why /2)*
4. "Switches break up collision domains; routers break up broadcast domains" — switch = one collision domain per port; router = one broadcast domain per side. *(idea /3, why /2)*

## Worksheet 7.3.E — Hands-on observation (25 pts)

- Step 1: switch + 4 PCs; 4 collision domains *(5)*.
- Step 2: one big outline = 1 broadcast domain *(5)*.
- Step 3: router + second switch (2 PCs) drawn *(5)*.
- Step 4: collision domains = all switch ports (e.g., 4 + 2 = 6, plus router links) *(5)*.
- Step 5: broadcast domains = **2** (router split) *(5)*.

## Worksheet 7.3.F — Vocabulary review (20 pts)

- **Part A:** Collision = two signals clashing on a shared wire; Collision domain = zone where a collision can happen; Broadcast domain = group that hears each other's broadcasts; CSMA/CD = old collision-handling method.
- **Part B:** 5. switch 6. router 7. hub.
- **Part C:** any correct sentences.
- **Part D:** No — a switch floods broadcasts to every port; only a **router** stops them.

## Worksheet 7.3.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 7.3 · CompTIA Network+ N10-009 · Instructor materials_
