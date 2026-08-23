# Answer Key — Lesson NA-M08-L02 "IPv4 Structure, Classes, and Private Ranges"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.2.Q and Worksheets 8.2.A–8.2.G.

**In one line:** IPv4 = **32 bits** (4 octets), split into **network** + **host**. Class by first octet — **A 1–126, B 128–191, C 192–223** (D 224–239 multicast, E 240–255 reserved). Private: **10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16**. **127.0.0.1** = loopback; **169.254.x.x** = APIPA.

---

## Quiz 8.2.Q — Knowledge Check (10 pts)

1. **C** — An IPv4 address is 32 bits.
2. **B** — It splits into a network portion and a host portion.
3. **A** — First octet 10 is Class A (1–126).
4. **B** — 172.16.0.0/12 is a private range. (11.x, 200.1.1.x, and 8.8.8.x are public.)
5. **B** — 127.0.0.1 is the loopback address (the device itself).
6. **False.** Good answer: only 172.16.0.0–172.31.255.255 (172.16.0.0/12) is private; other 172.x addresses (like 172.15 or 172.32) are public.
7. **B** — A 169.254.x.x address is APIPA, meaning DHCP did not answer.
8. 45 → **B** (Class A), 150 → **C** (Class B), 200 → **A** (Class C).
9. **octets**.
10. The `169.254.10.5` address is **APIPA** — the laptop gave itself an address because **no DHCP server answered**; the DHCP path (cable/Wi-Fi/DHCP service) likely failed, so it never got a real, routable address.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.2.A — Fill-in-the-blank (20 pts, 2 each)

1. 32 2. network 3. host 4. A 5. C 6. 126 7. private 8. loopback 9. APIPA 10. 168.
**Challenge (+2):** the private Class B block is only 172.16.0.0/12 (172.16–172.31); 172.32 is above that range, so it is public.

## Worksheet 8.2.B — Matching (20 pts)

1→B, 2→D, 3→E, 4→A, 5→F, 6→C, 7→H, 8→G.
**Explain (+2):** any correct reason.

## Worksheet 8.2.C — Label the address (20 pts, 4 each)

1. 32 2. network 3. host 4. 191 5. loopback.
**Why (+2):** devices on the same network share the same network portion so routers can treat them as one group and deliver to that network as a whole.

## Worksheet 8.2.D — Short answer (20 pts)

1. 32 bits = four octets; it splits into a network portion (which network) and a host portion (which device). *(idea /3, why /2)*
2. 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B, only 172.16–31), 192.168.0.0/16 (Class C). *(idea /3, why /2)*
3. 127.0.0.1 is the loopback address — a device's own address; a successful loopback ping proves the device's own network software (TCP/IP stack) is working. *(idea /3, why /2)*
4. An APIPA address (169.254.x.x) is one a device gives itself when no DHCP server answers; seeing one tells you DHCP failed and the device has no real, routable address. *(idea /3, why /2)*

## Worksheet 8.2.E — Hands-on observation (25 pts)

- Step 1: IPv4 recorded *(5)*.
- Step 2: class named from first octet *(5)*.
- Step 3: private/public + range identified (most homes = 192.168.x or 10.x, private) *(5)*.
- Step 4: `ping 127.0.0.1` replies *(5)*.
- Step 5: loopback proves the laptop's own network software works *(5)*.
- (Accept any valid IPv4 the learner reports; numbers vary by network.)

## Worksheet 8.2.F — Vocabulary review (20 pts)

- **Part A:** Network portion = the part saying which network; Host portion = the part saying which device; Private IP address = an address from a reserved private range, used inside a network, not on the internet; APIPA = a 169.254.x.x address a device gives itself when no DHCP answers.
- **Part B:** 5. address class 6. loopback address 7. public IP address.
- **Part C:** any correct sentences.
- **Part D:** learner's own range (commonly 192.168.x or 10.x, private).

## Worksheet 8.2.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.2 · CompTIA Network+ N10-009 · Instructor materials_
