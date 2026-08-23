# Answer Key — Lesson NA-M08-L01 "What an IP Address Is and Why We Need It"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.1.Q and Worksheets 8.1.A–8.1.G.

**In one line:** A **MAC** address is a device's physical *name* (local, Layer 2). An **IP** address is its logical *mailing address* (routes between networks, Layer 3). IPv4 = four **octets** (0–255) in **dotted-decimal**. Delivery: **IP** to the right network → **MAC** to the right device.

---

## Quiz 8.1.Q — Knowledge Check (10 pts)

1. **B** — An IP address is a logical address so data can be routed to a device.
2. **B** — A MAC has no structure to say which network a device is on, so it can't route across the internet.
3. **A** — A device with an IP address on a network is a host.
4. **B** — The IP address is logical (assigned by software; it can change). A MAC is physical.
5. **B** — IPv4 is four numbers 0–255 separated by dots. (Six hex pairs is a MAC.)
6. **False.** Good answer: an IP address can change when a device joins a new network; the MAC address is the one that stays fixed.
7. **C** — IP works at Layer 3 (the Network layer).
8. MAC address → **C**, IP address → **A**, Dotted-decimal → **B**.
9. **octets**.
10. The **IP address** gets the photo to the right **network** (routers use it to cross networks); the **MAC address** delivers the final local hop to the device on your LAN.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.1.A — Fill-in-the-blank (20 pts, 2 each)

1. IP 2. host 3. logical 4. physical 5. MAC 6. route 7. octets 8. 255 9. dotted-decimal 10. network.
**Challenge (+2):** a MAC is flat with no "which network" part, so there is no way to steer it across millions of networks — like mailing a letter with only a first name.

## Worksheet 8.1.B — Matching (20 pts)

1→C, 2→F, 3→A, 4→B, 5→E, 6→G, 7→D, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.1.C — Label the delivery path (20 pts, 4 each)

1. physical (MAC) 2. logical (IP) 3. IP address 4. 2 5. MAC (address).
**Why (+2):** IP gets data to the right network (routing between networks); MAC delivers it to the right device on the final local hop — different jobs, both needed.

## Worksheet 8.1.D — Short answer (20 pts)

1. An IP address is a logical, structured number given to a host so data can be routed to it across networks. *(idea /3, why /2)*
2. A MAC address is flat and local — it has no part saying which network a device is on, so it can't route across the internet. *(idea /3, why /2)*
3. A logical address (IP) is set by software and can change; a physical address (MAC) is burned into the hardware and does not change. *(idea /3, why /2)*
4. Four numbers (octets), each 0–255, separated by three dots — e.g., 192.168.1.10 (dotted-decimal notation). *(idea /3, why /2)*

## Worksheet 8.1.E — Hands-on observation (25 pts)

- Step 1: Command Prompt open *(5)*.
- Step 2: IPv4 address recorded from `ipconfig` *(5)*.
- Step 3: 3 dots; each octet 0–255 *(5)*.
- Step 4: Default Gateway (router IP) recorded *(5)*.
- Step 5: laptop IP and gateway share first three octets → same network *(5)*.
- (Exact numbers vary by learner/network — accept any valid IPv4 the learner reports.)

## Worksheet 8.1.F — Vocabulary review (20 pts)

- **Part A:** IP address = logical address so data can be routed to a device; Host = any device with an IP on a network; Logical address = set by software, can change on a new network; Dotted-decimal notation = writing IPv4 as four numbers 0–255 with dots.
- **Part B:** 5. MAC (physical) address 6. octet 7. host.
- **Part C:** any correct sentences.
- **Part D:** the **IP** address (routers use IP to cross networks).

## Worksheet 8.1.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.1 · CompTIA Network+ N10-009 · Instructor materials_
