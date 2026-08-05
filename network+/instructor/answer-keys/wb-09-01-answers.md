# Answer Key — Lesson NA-M09-L01 "DHCP: How Devices Get an Address Automatically"

> 🔒 **Instructor / self-check only.** Covers Quiz 9.1.Q and Worksheets 9.1.A–9.1.G.

**In one line:** **DHCP** auto-assigns **IP + mask + gateway + DNS** via **DORA** (Discover, Offer, Request, Acknowledge). The address is a **lease** from a **scope**; a **reservation** pins a fixed IP by MAC. **Dynamic** = DHCP; **static** = by hand. No DHCP reply → **APIPA (169.254)**.

---

## Quiz 9.1.Q — Knowledge Check (10 pts)

1. **B** — DHCP automatically gives devices their IP settings.
2. **D** — DHCP provides IP, mask, gateway, and DNS — **not** the MAC (that's burned in).
3. **B** — Discover, Offer, Request, Acknowledge (DORA).
4. **B** — A lease is how long a device may keep its DHCP address.
5. **B** — A 169.254 (APIPA) address means the DHCP server didn't answer.
6. **True.** Good answer: a reservation ties a fixed IP to the device's MAC, so it always gets the same address.
7. **B** — The pool is the scope.
8. Discover → **B**, Offer → **C**, Acknowledge → **A**.
9. **static**.
10. Use a **DHCP reservation** — tie the printer's **MAC address** to a fixed IP so it always gets the same address and people can always find it. (A static IP on the printer would also work.)

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 9.1.A — Fill-in-the-blank (20 pts, 2 each)

1. DHCP 2. Discover 3. Offer 4. Request 5. Acknowledge 6. lease 7. scope 8. reservation 9. static 10. 169.254.
**Challenge (+2):** DHCP is automatic and avoids mistakes — it configures every device correctly and stops two devices from taking the same address, which hand-typing on dozens of devices can't guarantee.

## Worksheet 9.1.B — Matching (20 pts)

1→B, 2→A, 3→D, 4→C, 5→F, 6→E, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 9.1.C — Label the DORA steps (20 pts, 4 each)

1. Discover 2. Offer 3. Request 4. Acknowledge 5. default gateway.
**Why (+2):** the new device has no address yet and doesn't know where any server is, so it must broadcast Discover to reach every device (including any DHCP server) on the network.

## Worksheet 9.1.D — Short answer (20 pts, 5 each)

1. DHCP automatically hands each device its IP, mask, gateway, and DNS; it's useful because it's fast, correct, and avoids duplicate addresses. *(idea /3, why /2)*
2. **Discover** (device asks for a server), **Offer** (server proposes an address), **Request** (device asks for it), **Acknowledge** (server confirms; lease starts). *(idea /3, why /2)*
3. A dynamic IP is given automatically by DHCP and can change; a static IP is set by hand and doesn't change. *(idea /3, why /2)*
4. A 169.254 address is APIPA — the DHCP server didn't answer; look at the link (cable/Wi-Fi) and the router/DHCP service, not the device's own settings. *(idea /3, why /2)*

## Worksheet 9.1.E — Hands-on observation (25 pts)

- Step 1: `ipconfig /all` ran *(5)*.
- Step 2: DHCP Enabled = Yes (usually) *(5)*.
- Step 3: DHCP Server address recorded *(5)*.
- Step 4: lease obtained/expires recorded *(5)*.
- Step 5: dynamic (if DHCP enabled) *(5)*.
- (Accept any valid values the learner reports.)

## Worksheet 9.1.F — Vocabulary review (20 pts)

- **Part A:** DHCP = auto-assigns IP settings; DORA = the four DHCP steps (Discover, Offer, Request, Acknowledge); Lease = how long a device keeps its address; DHCP reservation = a fixed address tied to one device's MAC.
- **Part B:** 5. scope 6. static IP address 7. dynamic IP address.
- **Part C:** any correct sentences.
- **Part D:** 169.254 = APIPA (no DHCP answered); DHCP relates because that address appears precisely when the DHCP server fails to reply.

## Worksheet 9.1.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 9.1 · CompTIA Network+ N10-009 · Instructor materials_
