---
teaching_notes_for: NA-M11-L06
module: 11
lesson: 06
unit: 8
objective_ids: ["2.3"]
---

# 🔒 Teaching Notes — Lesson 11-06: Inter-VLAN Routing

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners explain why VLANs need a Layer 3 device to talk and set up inter-VLAN routing by router-on-a-stick or a Layer 3 switch, giving each VLAN its own subnet and gateway.

## Where this sits
- **Before:** 11-01 (VLANs), 11-03 (the trunk this lesson reuses), 11-05 (routing basics). All hard prerequisites — recap them first.
- **After:** 11-07 (wireless), 11-08 (design end to end, which pulls all of Module 11 together).
- This is the payoff lesson for the VLAN arc — the separated VLANs finally talk on purpose.

## Core facts
- VLANs = separate subnets → need **Layer 3** to communicate.
- **Router-on-a-stick:** one router + a **trunk**; a **sub-interface** (gateway) per VLAN. Cheap; single-link bottleneck.
- **Layer 3 switch:** switches and routes in one box (SVIs). Faster; costs more.
- Each VLAN needs its **own subnet** and its **own gateway**; PCs point at that gateway.

## Common misconceptions (correct both)
1. **"VLANs route themselves."** No — without a Layer 3 device they stay isolated by design.
2. **"One subnet is fine for two VLANs."** No — the router can't distinguish them; give each its own subnet.

## Prime Directive #7 — accuracy
Whether a specific PowerConnect 3424 does Layer 3 (VLAN IP + `ip routing`) varies by model/firmware — many are Layer 2 only. Every unverified command/output line is marked **[TO VERIFY ON HARDWARE]**, and router-on-a-stick is offered as the fallback when the switch can't route. Learners record their **own** ping result; no output is fabricated.

## Pacing (~30 min)
- 5 min — recap: VLANs separate, routing = Layer 3.
- 6 min — the locked-rooms analogy (WHY controlled connection).
- 10 min — router-on-a-stick vs. Layer 3 switch.
- 9 min — the lab: gateways per VLAN, enable routing, ping across VLANs.

## How CompTIA tends to test it
- Inter-VLAN routing requires Layer 3.
- Router-on-a-stick = trunk + sub-interfaces; each VLAN its own subnet + gateway.
- Recognize a Layer 3 switch / SVI as the alternative.

## Support / extension
- **Support:** on a printed two-VLAN diagram, have them write each VLAN's subnet and gateway before touching gear.
- **Extension:** SVIs vs. sub-interfaces; why a Layer 3 switch avoids the single-trunk bottleneck; ACLs to control which VLAN-to-VLAN traffic is allowed (bridge to Module 13).

---
_NetworkAcademy+ · Teaching Notes 11-06 · CompTIA Network+ N10-009 · Instructor materials_
