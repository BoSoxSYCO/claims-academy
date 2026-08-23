---
teaching_notes_for: NA-M11-L05
module: 11
lesson: 05
unit: 8
objective_ids: ["2.2"]
---

# 🔒 Teaching Notes — Lesson 11-05: Routing Basics — Static vs. Dynamic

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners explain the routing table and compare static vs. dynamic routing, including trade-offs and the names OSPF/EIGRP/BGP.

## Where this sits
- **Before:** 09-04 (how traffic leaves the network, default route, next hop) and 11-01 (VLANs as separate networks). Both hard prerequisites.
- **After:** 11-06 (inter-VLAN routing — applies routing to the VLANs built earlier), 11-07 (wireless), 11-08 (design).
- Concept lesson with a read-only `route print` lab; no router config changes here.

## Core facts
- **Routing table:** destination network → next hop / exit. Unknown → **default route** (`0.0.0.0/0`).
- **Static:** typed by hand; predictable; no auto-reroute; best for small/fixed networks.
- **Dynamic:** routers share routes via a protocol; auto-updates; scales; best for large/changing networks.
- **Protocols to recognize:** OSPF and EIGRP (interior), BGP (the internet, between providers).

## Common misconceptions (correct both)
1. **"Static routes self-heal."** No — if the path breaks, static traffic fails until a human fixes it.
2. **"Routing is the same as switching."** Switching = Layer 2 (MAC, one network); routing = Layer 3 (IP, between networks).

## Prime Directive #7 — accuracy
`route print` is a genuine Windows command; sample output uses documentation-style private addresses and learners record their **own** table. No router CLI output is fabricated. (Router-config output arrives in 11-06 with `[TO VERIFY ON HARDWARE]` where relevant.)

## Pacing (~30 min)
- 6 min — the written-directions vs. GPS analogy (WHY).
- 10 min — routing table, static route, dynamic routing.
- 6 min — trade-offs table and "many use both."
- 8 min — the `route print` lab (find the default route).

## How CompTIA tends to test it
- Static = manual/no auto-update; dynamic = learned/auto-update.
- Recognize OSPF, EIGRP, BGP as routing protocols.
- When to use which (small/fixed vs. large/changing).

## Support / extension
- **Support:** walk the `route print` output line by line; identify the `0.0.0.0` default route together.
- **Extension:** administrative distance and metrics (how a router chooses between two routes to the same network); interior vs. exterior gateway protocols.

---
_NetworkAcademy+ · Teaching Notes 11-05 · CompTIA Network+ N10-009 · Instructor materials_
