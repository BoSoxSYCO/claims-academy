# Answer Key — Lesson NA-M09-L03 "NAT and PAT: Sharing One Public Address"

> 🔒 **Instructor / self-check only.** Covers Quiz 9.3.Q and Worksheets 9.3.A–9.3.G.

**In one line:** **Static NAT** = fixed one-to-one; **dynamic NAT** = a pool; **PAT/overload** = many share one public IP by **port**. The **NAT translation table** maps inside IP:port ⇄ public IP:port. **Port forwarding** opens a chosen public port to one inside device.

---

## Quiz 9.3.Q — Knowledge Check (10 pts)

1. **C** — PAT (overload) lets many devices share one public IP.
2. **B** — Port numbers tell inside conversations apart.
3. **A** — Static NAT is a fixed one-to-one map.
4. **B** — The NAT translation table matches inside IP:port to public IP:port.
5. **B** — Port forwarding lets the outside reach one chosen inside device.
6. **False.** Good answer: PAT shares **one** public IP among many devices, using ports — that's the whole point.
7. **B** — Dynamic NAT uses a pool of public IPs, handed out as needed.
8. Static NAT → **B**, Dynamic NAT → **C**, PAT → **A**.
9. **port**.
10. Set up **port forwarding** — a rule that sends the game's public port to your server's inside IP and port, so friends on the internet can reach that one inside device. (Pair it with a firewall and a stable/reserved IP.)

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 9.3.A — Fill-in-the-blank (20 pts, 2 each)

1. static 2. dynamic 3. PAT 4. overload 5. port 6. apartment 7. one 8. pool 9. table 10. forwarding.
**Challenge (+2):** PAT lets a whole network share a single public IPv4 address, so we need far fewer public addresses — which is why IPv4 lasted as long as it has.

## Worksheet 9.3.B — Matching (20 pts)

1→B, 2→C, 3→A, 4→D, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 9.3.C — Label the table (20 pts, 4 each)

1. 40002 2. 192.168.1.26 3. one (1) 4. port numbers 5. PAT (overload).
**Why (+2):** all three devices sit behind one router that has just one public IP from the ISP, so PAT maps them all to 203.0.113.7 and tells them apart by port.

## Worksheet 9.3.D — Short answer (20 pts, 5 each)

1. Static NAT is a fixed one-to-one map (one private always to one public); dynamic NAT hands out public addresses from a pool as devices need them. *(idea /3, why /2)*
2. PAT maps many private IP:port pairs to one public IP with different public ports, and tracks them so replies to a given public port return to the right inside device. *(idea /3, why /2)*
3. The NAT translation table is the router's list matching inside IP:port to public IP:port; the router uses it to send each returning reply to the correct inside device. *(idea /3, why /2)*
4. Port forwarding is a rule that sends traffic arriving on a chosen public port to a specific inside device; you'd set it up to let outsiders reach a home server (game, camera, lab). *(idea /3, why /2)*

## Worksheet 9.3.E — Hands-on observation (25 pts)

- Step 1: tabs opened *(5)*.
- Step 2: `netstat -n` ran *(5)*.
- Step 3: a local:port and foreign:port recorded *(5)*.
- Step 4: several different local ports noted *(5)*.
- Step 5: port-forwarding page located (read-only) *(5)*.
- (Accept any valid values; ports vary.)

## Worksheet 9.3.F — Vocabulary review (20 pts)

- **Part A:** Static NAT = fixed one-to-one map; Dynamic NAT = private → a pool of public IPs; Port number = a label for one conversation/program (apartment number); Port forwarding = a rule sending a public port to one inside device.
- **Part B:** 5. NAT overload 6. NAT translation table 7. PAT.
- **Part C:** any correct sentences.
- **Part D:** **PAT** (NAT overload) does it for many devices at once.

## Worksheet 9.3.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 9.3 · CompTIA Network+ N10-009 · Instructor materials_
