# Answer Key — Lesson NA-M05-L05 "Following One Packet Through All the Layers"

> 🔒 **Instructor / self-check only.** Covers Quiz 5.5.Q and Worksheets 5.5.A–5.5.G.

**Core idea:** IP = end-to-end (never changes) · MAC = hop-to-hop (changes each link). Switch = L2/MAC · Router = L3/IP.

---

## Quiz 5.5.Q — Knowledge Check (10 pts)

1. **B** — The IP address stays the same the whole trip (end-to-end).
2. **B** — The MAC address changes at every hop (hop-to-hop).
3. **B** — A switch works at Layer 2 and reads the MAC address.
4. **B** — A router works at Layer 3 and reads the IP address.
5. **B** — A hop is one step from one device to the next.
6. **True.** Good answer: the router keeps the IP packet (end-to-end) but wraps it in a new frame with new MAC addresses for the next link.
7. **B** — `tracert` shows the hops (devices) along the path to a server.
8. Hop → **B**, Round trip → **C**, Destination address → **A**.
9. **end**-to-**end** (IP is end-to-end; MAC is hop-to-hop).
10. The destination IP changed **0** times (end-to-end); the MAC changed at each link — about **9** times (one per hop across 8 routers, laptop→R1→…→R8→server). Accept "once per hop / 8–9 times" with correct reasoning.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 5.5.A — Fill-in-the-blank (20 pts, 2 each)

1. IP 2. MAC 3. switch 4. router 5. hop 6. round trip 7. end-to-end 8. hop-to-hop 9. down 10. up.
**Challenge (+2):** `tracert` (traceroute).

## Worksheet 5.5.B — Matching (20 pts)

1→B, 2→D, 3→E, 4→C, 5→A, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 5.5.C — Label the diagram (20 pts, 4 each)

1. Switch 2. Router 3. end-to-end 4. hop-to-hop. **Q5:** hop.
**Why (+2):** the router forwards the same data toward the same final IP, but each physical link needs its own local (MAC) addresses, so it rebuilds the frame.

## Worksheet 5.5.D — Short answer (20 pts)

1. The browser makes the request (data); it is wrapped down the layers into a segment, packet, then frame, and sent as bits. *(idea /3, why /2)*
2. IP is the final destination (never changes); MAC is only the next-stop label, so it is rewritten for each link. *(idea /3, why /2)*
3. A switch reads the MAC (Layer 2); a router reads the IP (Layer 3). *(idea /3, why /2)*
4. A hop is one step to the next device; `tracert` lists each hop and its time (latency). *(idea /3, why /2)*

## Worksheet 5.5.E — Hands-on observation (25 pts)

- Step 1–2: `tracert` run; hop count recorded *(10)*.
- Step 3: two hop times noted; trend observed *(5)*.
- Step 4: path drawn; "IP stays the **same**", "MAC changes each **hop**" *(5)*.
- Step 5: **router** reads IP; **switch** reads MAC *(5)*.

## Worksheet 5.5.F — Vocabulary review (20 pts)

- **Part A:** Hop = one step to the next device; Round trip = full out-and-back journey; End-to-end = same from first sender to final receiver; Hop-to-hop = changes at each link.
- **Part B:** 5. destination address 6. source address 7. hop.
- **Part C:** any correct sentences.
- **Part D:** the **router** changes the MAC at each hop (builds a new frame).

## Worksheet 5.5.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 5.5 · CompTIA Network+ N10-009 · Instructor materials_
