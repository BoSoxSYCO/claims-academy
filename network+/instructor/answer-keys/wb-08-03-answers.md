# Answer Key — Lesson NA-M08-L03 "Subnet Masks Explained Without Fear"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.3.Q and Worksheets 8.3.A–8.3.G.

**In one line:** A **subnet mask** marks network (**255**) vs. host (**0**). Split an address by covering the 255 octets. **Same network** (network portions match) → deliver directly; **different** → send to the router. Defaults: A `255.0.0.0`, B `255.255.0.0`, C `255.255.255.0`.

---

## Quiz 8.3.Q — Knowledge Check (10 pts)

1. **B** — A subnet mask marks which part of an IP is network vs. host.
2. **B** — 255 in a mask means that octet is network (all bits on).
3. **A** — With 255.255.255.0, the network of 192.168.1.10 is 192.168.1.
4. **C** — Class C default mask is 255.255.255.0.
5. **B** — No: 192.168.1 ≠ 192.168.2, so they are on different networks.
6. **False.** Good answer: the **mask** decides the real split; the class only gives a default that a mask can change.
7. **B** — For a different network, the device sends the data to the default gateway (router).
8. 255.0.0.0 → **B** (Class A), 255.255.0.0 → **C** (Class B), 255.255.255.0 → **A** (Class C).
9. **255**.
10. They **must go through the router.** With mask 255.255.255.0 the networks are 10.0.5 and 10.0.9 — different (5 ≠ 9) — so they are on different networks and cannot talk directly.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.3.A — Fill-in-the-blank (20 pts, 2 each)

1. mask 2. 255 3. 0 4. three 5. network 6. host 7. same 8. directly 9. router 10. class.
**Challenge (+2):** the gateway shares your network portion (same network under your mask), so your laptop can deliver to it directly without a router in between.

## Worksheet 8.3.B — Matching (20 pts)

1→C, 2→E, 3→F, 4→A, 5→B, 6→G, 7→D, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.3.C — Label the split (20 pts, 4 each)

1. network 2. host 3. network 4. host 5. yes (same network).
**Why (+2):** both 10.20.30.40 and 10.20.30.99 have the network portion 10.20.30 under the 255.255.255.0 mask, so they are on the same network.

## Worksheet 8.3.D — Short answer (20 pts, 5 each)

1. A subnet mask is four octets (255s then 0s) that mark which part of an IP is the network and which is the host, so a device can tell local from remote. 
2. Network = **172.16.8**, Host = **55**.
3. Without the mask, the device can't tell where the network/host split falls, so it can't decide whether a destination is local (deliver directly) or remote (send to the router).
4. A = **255.0.0.0**, B = **255.255.0.0**, C = **255.255.255.0**.

## Worksheet 8.3.E — Hands-on observation (25 pts)

- Step 1: IP + mask recorded *(5)*.
- Step 2: network octets (mask = 255) circled *(5)*.
- Step 3: host octet (mask = 0) identified *(5)*.
- Step 4: gateway on the same network *(5)*.
- Step 5: an address sharing the network portion → **directly** *(5)*.
- (Accept any valid IP/mask the learner reports; most homes show 255.255.255.0.)

## Worksheet 8.3.F — Vocabulary review (20 pts)

- **Part A:** Subnet mask = four octets marking network vs. host; Subnet = a smaller network split from a bigger one; Default subnet mask = the standard mask for a class (255.0.0.0 / 255.255.0.0 / 255.255.255.0); Network portion = the part of the address that says which network.
- **Part B:** 5. 255.255.255.0 6. 255 7. host.
- **Part C:** any correct sentences.
- **Part D:** the **mask** decides the real split.

## Worksheet 8.3.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.3 · CompTIA Network+ N10-009 · Instructor materials_
