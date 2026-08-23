# Answer Key — Lesson NA-M08-L05 "Subnetting Step by Step (the Beginner Method)"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.5.Q and Worksheets 8.5.A–8.5.G.

**In one line:** **Subnetting** borrows host bits (subnets = 2^borrowed). **Block size = 256 − interesting octet**. Each subnet: **network** = first (host bits 0), **broadcast** = last (host bits 1), **usable hosts** = 2^host − 2. For /26: block **64**, 4 subnets, **62** hosts each.

---

## Quiz 8.5.Q — Knowledge Check (10 pts)

1. **B** — Subnetting splits one network into several smaller subnets.
2. **B** — You borrow bits from the host part.
3. **B** — 256 − 192 = 64.
4. **C** — 192.168.1.64/26 spans .64–.127; the broadcast is 192.168.1.127.
5. **B** — /26 has 6 host bits: 2^6 − 2 = 62.
6. **False.** Good answer: the network address (host bits all 0) names the subnet and cannot be assigned to a device — only the in-between (usable) addresses can.
7. **C** — Borrowing 3 bits makes 2^3 = 8 subnets.
8. 192.168.1.0 → **B** (network), 192.168.1.63 → **A** (broadcast), 192.168.1.1–.62 → **C** (usable range).
9. **2**.
10. Four networks: **10.0.0.0, 10.0.0.64, 10.0.0.128, 10.0.0.192** (block size 64).

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.5.A — Fill-in-the-blank (20 pts, 2 each)

1. borrow 2. double 3. host 4. octet 5. 64 6. network 7. broadcast 8. 2 9. 62 10. usable.
**Challenge (+2):** we subtract 2 because the network address and the broadcast address are real addresses but cannot be given to a device.

## Worksheet 8.5.B — Matching (20 pts)

1→C, 2→E, 3→A, 4→B, 5→D, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.5.C — Label the blocks (20 pts, 4 each)

1. 64 2. 64 3. 126 4. 127 5. 62.
**Why (+2):** the .64 subnet runs up to one below the next subnet's network (.128), so its broadcast is 192.168.1.127.

## Worksheet 8.5.D — Short answer (20 pts, 5 each)

1. Subnetting splits one network into smaller subnets; we borrow host bits so the network part grows and there are more, smaller networks (each easier to manage/secure).
2. /27 (255.255.255.224): block size = **32**; subnets from /24 = **8**; usable hosts each = **30** (2^5 − 2).
3. 192.168.5.0/26 networks: **192.168.5.0, 192.168.5.64, 192.168.5.128, 192.168.5.192**.
4. 192.168.5.128/26 → Network **192.168.5.128**, Hosts **.129 – .190**, Broadcast **192.168.5.191**.

## Worksheet 8.5.E — Hands-on observation (25 pts)

- Step 1: block size **64** *(5)*.
- Step 2: subnets .0, .64, .128, .192 *(5)*.
- Step 3: .64 subnet → network .64, hosts .65–.126, broadcast .127 *(5)*.
- Step 4: usable hosts **62** *(5)*.
- Step 5: learner's own IP placed in the correct block (e.g., .24 → .0 block) *(5)*.
- (Accept any valid 192.168.1.x IP placed in the right block.)

## Worksheet 8.5.F — Vocabulary review (20 pts)

- **Part A:** Subnetting = splitting one network into smaller subnets; Block size = 256 − the mask's interesting octet; Network address = first address of a subnet (host bits 0); Broadcast address = last address of a subnet (host bits 1).
- **Part B:** 5. 64 6. 62 7. 8.
- **Part C:** any correct sentences.
- **Part D:** /26 = 26 network bits, 6 host bits left.

## Worksheet 8.5.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.5 · CompTIA Network+ N10-009 · Instructor materials_
