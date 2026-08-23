# Teaching Notes — NA-M09-L04 "Gateways and How Traffic Leaves Your Network"

> 🔒 Instructor materials. Pairs with the lesson and `wb-09-04-answers.md`.

## Objective in one line
Learners explain the default gateway, the local-vs-off-network send decision, ARP (IP→MAC), and how to read a `tracert`.

## Where this sits
Fourth lesson of Module 09. Builds on IP (08-01) and the same-network test (08-03). Introduces ARP and a light look at routing. Precedes NTP/supporting services (09-05), which closes the module.
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**Gated neighborhood:** walk to a neighbor (same network, direct); drop faraway mail at the front gate (default gateway); the postal system carries it hop by hop (routing). ARP = knowing the gate guard's face (MAC) for the gate's address (IP).

## Common misconceptions (and the fix)
- "The gateway is reached by IP only." → Fix: local delivery needs the gateway's MAC; ARP finds it.
- "Same network = physically nearby." → Fix: the subnet mask decides, not distance.
- "Tracert hop 1 is the ISP." → Fix: hop 1 is your own gateway.
- "No gateway is fine if local works." → Fix: without a gateway, the internet is unreachable.

## Pacing tips
- The neighborhood-gate analogy carries the whole flow; keep returning to it.
- `tracert` makes hops real — point out that hop 1 equals the Default Gateway from `ipconfig`.
- Keep routing light: routing table + next hop + default route is enough here.

## Accuracy note (Prime Directive #7)
`tracert`, `arp -a`, and `ipconfig` are real Windows commands. Sample output (hops, MACs, ISP addresses) is representative and labeled so — real values vary. Some hops show `* * *` (a router not replying); that's normal. No fabricated device data.

## How CompTIA tests it
Default gateway; ARP (IP→MAC on the local link); reading a traceroute; local vs. off-network delivery. Domain 1.4.

## Support ideas
- Have a struggling learner run `tracert` and just circle hop 1, confirming it's the gateway.

## Extension ideas
- Static vs. dynamic routes, routing protocols (OSPF/BGP by name), and how TTL drives traceroute, for fast learners (revisited in later modules).

## Materials checklist
- Lesson · `dgm-09-04-gateway-path-01.svg` · worksheets `wb-09-04-*` (incl. tracert lab) · `quiz-09-04-knowledge-check.md`
- Answer key `wb-09-04-answers.md` · glossary updated (ARP, routing, routing table, next hop, default route, traceroute/tracert) · cheat sheet updated
- Screens to capture: `tracert google.com` (hop 1 = gateway); `arp -a` (gateway IP + MAC).

---
_NetworkAcademy+ · Teaching Notes 09-04 · CompTIA Network+ N10-009_
