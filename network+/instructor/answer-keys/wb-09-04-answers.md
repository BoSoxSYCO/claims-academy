# Answer Key — Lesson NA-M09-L04 "Gateways and How Traffic Leaves Your Network"

> 🔒 **Instructor / self-check only.** Covers Quiz 9.4.Q and Worksheets 9.4.A–9.4.G.

**In one line:** Local traffic goes **directly**; off-network traffic goes to the **default gateway** (the router). The device uses **ARP** to get the gateway's **MAC**. The router forwards it **hop by hop** using its **routing table** and a **default route**. `tracert` hop 1 = your gateway.

---

## Quiz 9.4.Q — Knowledge Check (10 pts)

1. **B** — The default gateway is your router — the door out for off-network traffic.
2. **B** — A device sends to the gateway when the destination is on a different network.
3. **B** — ARP finds the MAC that goes with an IP on the local network.
4. **B** — The first tracert hop is usually your default gateway.
5. **B** — A router uses its routing table to choose the next hop.
6. **True.** Good answer: if local devices work but the internet doesn't, off-network traffic can't get out — a missing or wrong gateway is a likely cause.
7. **A** — The "everything not local" route is the default route.
8. Default gateway → **C**, ARP → **A**, Next hop → **B**.
9. **mask**.
10. Likely a **gateway** problem (local delivery works, off-network doesn't). Check the **Default Gateway** in `ipconfig` first — is one set, and is it reachable (`ping` it)?

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 9.4.A — Fill-in-the-blank (20 pts, 2 each)

1. gateway 2. directly 3. mask 4. ARP 5. MAC 6. routing 7. default 8. tracert 9. first 10. hop.
**Challenge (+2):** check the default gateway — confirm one is set (usually via DHCP) and that it's reachable; off-network traffic can't leave without it.

## Worksheet 9.4.B — Matching (20 pts)

1→C, 2→A, 3→D, 4→B, 5→E, 6→G, 7→F, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 9.4.C — Label the path out (20 pts, 4 each)

1. directly 2. default gateway 3. ARP 4. 1 (hop 1) 5. default gateway.
**Why (+2):** local (Layer 2) delivery uses the MAC address, so the device must learn the gateway's MAC (via ARP) before it can send the frame to it.

## Worksheet 9.4.D — Short answer (20 pts, 5 each)

1. The default gateway is your router — the door out; a device sends it any traffic bound for another network. *(idea /3, why /2)*
2. It uses the subnet mask: if the destination is on the same network, send directly; if not, send to the gateway. *(idea /3, why /2)*
3. ARP finds the MAC address for a local IP ("who has 192.168.1.1?"); it's needed because local delivery to the gateway uses MAC, not just IP. *(idea /3, why /2)*
4. The first hop is your default gateway, because that's the first router the packet passes through on its way off your network. *(idea /3, why /2)*

## Worksheet 9.4.E — Hands-on observation (25 pts)

- Step 1: Default Gateway recorded *(5)*.
- Step 2: `tracert google.com` ran *(5)*.
- Step 3: hop 1 matches the gateway *(5)*.
- Step 4: number of hops noted *(5)*.
- Step 5: gateway MAC found via `arp -a` *(5)*.
- (Accept any valid values; hops/MACs vary.)

## Worksheet 9.4.F — Vocabulary review (20 pts)

- **Part A:** ARP = finds the MAC for an IP on the local link; Routing = deciding where to send a packet next; Next hop = the next router on the path; Default route = "everything not local goes to the gateway."
- **Part B:** 5. default gateway 6. traceroute (tracert) 7. routing table.
- **Part C:** any correct sentences.
- **Part D:** when the answer is "not," the device sends the traffic to the **default gateway** (the router), which forwards it onward.

## Worksheet 9.4.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 9.4 · CompTIA Network+ N10-009 · Instructor materials_
