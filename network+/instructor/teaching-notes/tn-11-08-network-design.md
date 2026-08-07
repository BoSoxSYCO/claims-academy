---
teaching_notes_for: NA-M11-L08
module: 11
lesson: 08
unit: 8
objective_ids: ["2.1"]
---

# 🔒 Teaching Notes — Lesson 11-08: Designing a Small Network End to End

> Instructor guide. Written so a substitute could teach this cold. **Module 11 capstone.**

## Learning objective (one line)
Learners design a complete small network on paper, synthesizing every Module 11 skill: VLANs, subnets/gateways, trunks, STP, inter-VLAN routing, and wireless.

## Where this sits
- **Before:** all of Module 11 (11-01 through 11-07). This lesson assumes every one.
- **After:** Module 12 (Network Operations) — running and maintaining networks like this one.
- Pure design/planning lesson (E1, paper). No new gear operations.

## The six-step method (the spine)
1. **Edge:** internet → modem → router.
2. **VLANs:** one per group (Staff/Guests/Voice).
3. **Addresses:** each VLAN = own subnet + gateway; DHCP inside.
4. **Switches:** access ports to devices, trunks between switches, STP guards loops.
5. **Routing:** router / L3 switch = inter-VLAN + internet.
6. **Wireless:** AP, WPA3, channels 1/6/11, SSID → VLAN.

## Common misconceptions (correct both)
1. **"Design is optional / you can wing it."** No — a plan prevents subnet clashes, missing gateways, and loops.
2. **"One subnet fits all VLANs."** No — each VLAN needs its own subnet or routing breaks.

## Prime Directive #7 — accuracy
This is a paper-design lesson; **no live commands are run**, so no output is presented. Any build references point back to the verified methods in 11-02/03/04/06/07. Nothing is fabricated.

## Pacing (~30 min)
- 5 min — why design first (blueprint analogy).
- 10 min — walk the six steps, tying each to its Module 11 lesson.
- 15 min — the paper-design lab. Circulate; check subnets are distinct and every VLAN has a gateway.

## How CompTIA tends to test it
- Design/scenario items: choose VLANs, subnets, and where routing/STP/wireless belong.
- Spot the errors: shared subnet, missing gateway, PC on a trunk, no STP.

## Support / extension
- **Support:** provide a partly-filled template (edge + one VLAN done) and have them complete it.
- **Extension:** add redundancy (second switch link + STP), a DMZ, and basic ACLs to control inter-VLAN traffic (bridge to Module 13 security).

## Module 11 wrap
With 11-08 published, **Module 11 is complete** (8/8). Confirm the README status line reads ✅ Complete before moving to Module 12.

---
_NetworkAcademy+ · Teaching Notes 11-08 · CompTIA Network+ N10-009 · Instructor materials_
