# Answer Key — Lesson NA-M08-L08 "Public vs. Private, and the Role of NAT (Preview)"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.8.Q and Worksheets 8.8.A–8.8.G.

**In one line:** **Private** IPs stay inside (not routable); the ISP gives the router **one public** IP. **NAT** swaps private↔public at the router; **PAT** uses port numbers so **many** devices share that one public address. NAT hides inside devices but is **not** a full firewall.

---

## Quiz 8.8.Q — Knowledge Check (10 pts)

1. **B** — A public address is routable on the internet.
2. **B** — NAT swaps a private address for a public one (and back).
3. **A** — A home typically gets one public address from the ISP.
4. **B** — PAT (Port Address Translation) lets many devices share one public IP.
5. **B** — 192.168.1.30 is a private address.
6. **False.** Good answer: NAT hides inside devices as a side effect, but it isn't a full firewall — you still need real firewall rules for security.
7. **A** — Going out, the router replaces the private source address with its public address.
8. Private IP → **B** (used inside, not routable), Public IP → **A** (unique on the internet), NAT → **C** (translates between the two).
9. **one**.
10. The router uses **NAT/PAT**: it translates each device's private address to its one public IP and tags each conversation with a **port number**, so replies come back to the right device — letting all five share the single public address.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.8.A — Fill-in-the-blank (20 pts, 2 each)

1. private 2. public 3. one 4. NAT 5. translates 6. router 7. PAT 8. port 9. inside 10. firewall.
**Challenge (+2):** because NAT/PAT lets all inside devices share the router's one public address, so each device doesn't need its own — which also conserved scarce IPv4 addresses.

## Worksheet 8.8.B — Matching (20 pts)

1→C, 2→A, 3→B, 4→D, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.8.C — Label the path (20 pts, 4 each)

1. private 2. public 3. NAT 4. 203.0.113.7 (the router's public IP) 5. 192.168.1.24 (the laptop).
**Why (+2):** the router uses PAT — port numbers tag each device's conversation, so replies to the one public IP are sent back to the right device.

## Worksheet 8.8.D — Short answer (20 pts, 5 each)

1. A public IP is unique on the internet and routable there; a private IP is used inside a network and not routed on the internet. *(idea /3, why /2)*
2. NAT is the router swapping a device's private address for its public one on the way out (and back on the way in); it's needed because private addresses can't cross the internet. *(idea /3, why /2)*
3. PAT tags each conversation with a port number, so when replies come back to the one public IP the router knows which inside device to deliver each to. *(idea /3, why /2)*
4. NAT only hides inside devices as a side effect (they're not directly reachable); it doesn't inspect or block traffic by rules, so it isn't a complete firewall. *(idea /3, why /2)*

## Worksheet 8.8.E — Hands-on observation (25 pts)

- Step 1: private IP + gateway recorded *(5)*.
- Step 2: confirmed in a private range *(5)*.
- Step 3: public WAN IP read from the router *(5, `[TO VERIFY ON HARDWARE]`)*.
- Step 4: public IP not in a private range (or carrier-grade NAT noted) *(5)*.
- Step 5: NAT connects the private inside address to the public outside address *(5)*.
- (Accept any valid addresses the learner reports.)

## Worksheet 8.8.F — Vocabulary review (20 pts)

- **Part A:** NAT = router swapping private for public (and back); PAT = a form of NAT letting many devices share one public IP via port numbers; Public IP = unique on the internet, routable; Private IP = used inside, not routable.
- **Part B:** 5. NAT 6. PAT 7. private.
- **Part C:** any correct sentences.
- **Part D:** the **inside** (private) side of NAT.

## Worksheet 8.8.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.8 · CompTIA Network+ N10-009 · Instructor materials_
