# Answer Key — Lesson NA-M08-L04 "CIDR Notation and Slash Values"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.4.Q and Worksheets 8.4.A–8.4.G.

**In one line:** **CIDR** writes a mask as a slash + the count of network (1) bits (the **prefix length**). Each 255 = 8 bits, so 255.255.255.0 = **/24**. Partial octets: 128=1, 192=2, 224=3, 240=4, 248=5, 252=6, 254=7, 255=8. CIDR is **classless**.

---

## Quiz 8.4.Q — Knowledge Check (10 pts)

1. **B** — The slash number counts the network (1) bits.
2. **C** — 255.255.255.0 = 8+8+8+0 = /24.
3. **B** — /16 = 255.255.0.0.
4. **B** — 192 = 11000000 = 2 bits.
5. **B** — 255.255.255.128 = 8+8+8+1 = /25.
6. **False.** Good answer: a /24 means the first 24 **bits** (three octets) are the network, not 24 octets — an address only has 4 octets (32 bits).
7. **B** — Classless means the split isn't tied to the old A/B/C classes; it can fall anywhere.
8. 255.0.0.0 → **B** (/8), 255.255.0.0 → **C** (/16), 255.255.255.0 → **A** (/24).
9. **prefix**.
10. Mask = **255.255.255.0**; host bits = **8** (32 − 24 = 8).

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.4.A — Fill-in-the-blank (20 pts, 2 each)

1. CIDR 2. network 3. 8 4. 24 5. prefix 6. octets 7. /16 8. 25 9. slash 10. classless.
**Challenge (+2):** an IPv4 address is only 32 bits total, so you can't have more than 32 network bits — /32 is the maximum.

## Worksheet 8.4.B — Matching (20 pts)

1→B, 2→D, 3→A, 4→C, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.4.C — Label the conversion (20 pts, 4 each)

1. 1 2. 25 3. 1 4. 2 5. 8.
**Why (+2):** 255.255.255.0 has three full 255 octets, each worth 8 bits (8+8+8 = 24), so it is /24.

## Worksheet 8.4.D — Short answer (20 pts, 5 each)

1. CIDR writes a subnet mask as a slash plus the number of network bits (e.g., /24); techs use it because it's shorter and faster to write than a full mask, and it works everywhere (configs, docs, exam).
2. 255.0.0.0 → **/8**, 255.255.255.0 → **/24**, 255.255.255.192 → **/26**.
3. /16 → **255.255.0.0**, /24 → **255.255.255.0**, /25 → **255.255.255.128**.
4. Classless means the network/host split is set by a bit count and can fall anywhere, not just at class boundaries; it replaced the class system because it uses address space far more flexibly and efficiently.

## Worksheet 8.4.E — Hands-on observation (25 pts)

- Step 1: mask recorded *(5)*.
- Step 2: 255 octets counted × 8, plus any partial-octet bits *(5)*.
- Step 3: slash written *(5, most homes = /24)*.
- Step 4: network with host octet zeroed *(5)*.
- Step 5: network written in CIDR (network/slash) *(5)*.
- (Accept any valid mask the learner reports; 255.255.255.0 → /24 is typical.)

## Worksheet 8.4.F — Vocabulary review (20 pts)

- **Part A:** CIDR = writing a mask as a slash + the number of network bits; Prefix length = the /n number (how many bits are network); Classless = not tied to A/B/C classes, split anywhere; Subnet mask = four octets marking network (255) vs. host (0).
- **Part B:** 5. /24 6. 255.0.0.0 7. 8.
- **Part C:** any correct sentences.
- **Part D:** /24.

## Worksheet 8.4.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.4 · CompTIA Network+ N10-009 · Instructor materials_
